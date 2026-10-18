/* ============================================================
   Shaheen Academy — app.js
   Static PWA engine: hash router, lesson viewer, quizzes, XP /
   streaks / levels, search, progress, and printable certificates.

   Data contract (files authored separately by content agents):
     window.SHAHEEN_TRACKS = {
       school:   { meta: {id, title, urdu, tagline, icon}, courses: [...] },
       testprep: { ... },
       skills:   { ... }
     }
   course  = { id, title, urdu, desc, icon, chapters: [...] }
   chapter = { id, title, urdu, comingSoon: false,
               lessons: [{ id, title, html }],
               quiz: [{ q, options: [4 strings], answer: 0-3, explain }] }
   A chapter with comingSoon:true carries lessons: [] and quiz: [].
   All IDs are globally unique strings.

   The engine is defensive: it works with zero content, with empty
   arrays, and with missing data files — every view has an empty state.

   localStorage key 'shaheen-v1':
     { name, xp, streak: {count, lastDay}, read: {lessonId: 1},
       quizBest: {chapterId: pct}, last: {type, id} }
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- Tunables ---------------- */
  var STORAGE_KEY  = 'shaheen-v1';
  var XP_LESSON    = 10;   // XP for completing a lesson (first time only)
  var XP_QUIZ_OK   = 5;    // XP per correct quiz answer, each attempt
  var XP_PER_LEVEL = 200;  // XP needed per level
  var QUIZ_PASS    = 60;   // % needed to "pass" a chapter quiz
  var CERT_DISCLAIMER = 'This is an internal completion award of Shaheen Academy. ' +
    'It is not an official board, university, HEC, or government accreditation.';

  // Level names, index = level - 1 (capped at the last name).
  var LEVEL_NAMES = ['Newcomer', 'Learner', 'Explorer', 'Achiever', 'Scholar',
                     'Mentor', 'Sage', 'Master', 'Legend'];

  // Track fallback icons/titles if a track's meta is incomplete.
  var TRACK_FALLBACK = {
    school:   { icon: '🏫', title: 'School',      tagline: 'Class 1–12 curriculum' },
    testprep: { icon: '🎯', title: 'Test Prep',   tagline: 'MDCAT, ECAT, CSS & more' },
    skills:   { icon: '💼', title: 'Skills',      tagline: 'Practical modern skills' }
  };
  var TRACK_ORDER = ['school', 'testprep', 'skills'];

  /* ---------------- Small helpers ---------------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  function dayStr(d) {
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
  }
  function todayStr() { return dayStr(new Date()); }
  function yesterdayStr() {
    var d = new Date(); d.setDate(d.getDate() - 1); return dayStr(d);
  }

  function stripTags(html) {
    return String(html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function levelOf(xp) { return Math.floor(xp / XP_PER_LEVEL) + 1; }
  function levelName(level) {
    return LEVEL_NAMES[Math.min(Math.max(level, 1) - 1, LEVEL_NAMES.length - 1)];
  }

  /* ---------------- State (localStorage) ---------------- */
  function defaultState() {
    return {
      name: '',
      xp: 0,
      streak: { count: 0, lastDay: null },
      read: {},       // lessonId -> 1
      quizBest: {},   // chapterId -> best percent
      last: null      // { type: 'lesson'|'chapter'|'quiz', id }
    };
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      var s = JSON.parse(raw);
      var d = defaultState();
      if (s && typeof s === 'object') {
        if (typeof s.name === 'string') d.name = s.name;
        if (typeof s.xp === 'number' && s.xp >= 0) d.xp = Math.floor(s.xp);
        if (s.streak && typeof s.streak === 'object') {
          if (typeof s.streak.count === 'number' && s.streak.count >= 0) d.streak.count = Math.floor(s.streak.count);
          if (typeof s.streak.lastDay === 'string') d.streak.lastDay = s.streak.lastDay;
        }
        if (s.read && typeof s.read === 'object') d.read = s.read;
        if (s.quizBest && typeof s.quizBest === 'object') d.quizBest = s.quizBest;
        if (s.last && typeof s.last === 'object' && s.last.type && s.last.id) d.last = s.last;
      }
      return d;
    } catch (e) {
      return defaultState();
    }
  }

  var state = loadState();

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* storage full/blocked */ }
  }

  /* Streak: a completion on a new calendar day extends the streak if the
     previous day was active, otherwise restarts it at 1. */
  function touchStreak() {
    var t = todayStr();
    if (state.streak.lastDay === t) return;
    state.streak.count = (state.streak.lastDay === yesterdayStr()) ? state.streak.count + 1 : 1;
    state.streak.lastDay = t;
  }

  function addXP(n) {
    if (n > 0) state.xp += n;
  }

  function setLast(type, id) {
    state.last = { type: type, id: id };
  }

  /* ---------------- Content registry ----------------
     Built once at boot from window.SHAHEEN_TRACKS. Every lookup goes
     through this registry so unknown IDs fail gracefully. */
  var R = { tracks: {}, courses: {}, chapters: {}, lessons: {} };

  function buildRegistry() {
    R = { tracks: {}, courses: {}, chapters: {}, lessons: {} };
    var tracks = window.SHAHEEN_TRACKS || {};
    Object.keys(tracks).forEach(function (tk) {
      var t = tracks[tk];
      if (!t || !t.meta) return;
      R.tracks[tk] = t;
      (t.courses || []).forEach(function (c) {
        if (!c || !c.id) return;
        R.courses[c.id] = { data: c, track: tk };
        (c.chapters || []).forEach(function (ch) {
          if (!ch || !ch.id) return;
          R.chapters[ch.id] = { data: ch, course: c.id, track: tk };
          (ch.lessons || []).forEach(function (l) {
            if (!l || !l.id) return;
            R.lessons[l.id] = { data: l, chapter: ch.id, course: c.id, track: tk };
          });
        });
      });
    });
  }

  /* ---------------- Progress math ---------------- */
  // A chapter contributes: one item per lesson + one quiz item (if it has quiz questions).
  function chapterItems(ch) {
    var lessons = ch.lessons || [];
    var hasQuiz = (ch.quiz || []).length > 0;
    return { lessonTotal: lessons.length, hasQuiz: hasQuiz };
  }

  function chapterRead(ch) {
    return (ch.lessons || []).filter(function (l) { return state.read[l.id]; }).length;
  }

  function chapterBest(ch) {
    var b = state.quizBest[ch.id];
    return (typeof b === 'number') ? b : null;
  }

  function courseProgress(course) {
    var items = 0, done = 0;
    (course.chapters || []).forEach(function (ch) {
      if (ch.comingSoon) return;                       // coming-soon never counts
      var it = chapterItems(ch);
      items += it.lessonTotal + (it.hasQuiz ? 1 : 0);
      done  += chapterRead(ch) + (it.hasQuiz && (chapterBest(ch) || 0) >= QUIZ_PASS ? 1 : 0);
    });
    return { items: items, done: done, pct: items ? Math.round(done / items * 100) : 0 };
  }

  function trackProgress(tk) {
    var t = R.tracks[tk];
    var items = 0, done = 0, courses = 0;
    (t.courses || []).forEach(function (c) {
      var p = courseProgress(c);
      items += p.items; done += p.done; courses += 1;
    });
    return { items: items, done: done, courses: courses,
             pct: items ? Math.round(done / items * 100) : 0 };
  }

  // Certificate unlock rule: every non-comingSoon chapter is fully done —
  // all its lessons read AND (if it has a quiz) best score >= 60%.
  function courseEligibility(course) {
    var pending = [];
    var items = 0;   // real learning items (lessons + quizzes) across live chapters
    var live = (course.chapters || []).filter(function (ch) { return !ch.comingSoon; });
    live.forEach(function (ch) {
      var it = chapterItems(ch);
      items += it.lessonTotal + (it.hasQuiz ? 1 : 0);
      var readN = chapterRead(ch);
      var best = chapterBest(ch);
      var lessonOk = readN >= it.lessonTotal;
      var quizOk = !it.hasQuiz || (best !== null && best >= QUIZ_PASS);
      if (!lessonOk || !quizOk) {
        var missing = [];
        if (!lessonOk) missing.push((it.lessonTotal - readN) + ' lesson(s) to read');
        if (it.hasQuiz && !quizOk) missing.push('quiz score ≥ ' + QUIZ_PASS + '% (best: ' + (best === null ? 'not attempted' : best + '%') + ')');
        pending.push({ id: ch.id, title: ch.title || 'Untitled chapter', missing: missing.join(' · ') });
      }
    });
    // A course with zero real items can never unlock — avoids certifying emptiness.
    return { eligible: pending.length === 0 && live.length > 0 && items > 0,
             pending: pending, hasLive: live.length > 0, items: items };
  }

  function totalLessonsRead() {
    return Object.keys(state.read).filter(function (id) { return R.lessons[id]; }).length;
  }

  function quizzesPassed() {
    return Object.keys(state.quizBest).filter(function (id) {
      return R.chapters[id] && state.quizBest[id] >= QUIZ_PASS;
    }).length;
  }

  /* ---------------- Search index ----------------
     Built lazily on first search: lesson titles + stripped lesson text,
     and quiz questions + options. */
  var searchIndex = null;
  function getSearchIndex() {
    if (searchIndex) return searchIndex;
    searchIndex = [];
    Object.keys(R.lessons).forEach(function (id) {
      var e = R.lessons[id], l = e.data;
      var ch = R.chapters[e.chapter], co = R.courses[e.course];
      searchIndex.push({
        kind: 'lesson', id: id,
        title: l.title || 'Untitled lesson',
        context: (co ? co.data.title : '') + ' › ' + (ch ? ch.data.title : ''),
        hay: ((l.title || '') + ' ' + stripTags(l.html)).toLowerCase()
      });
    });
    Object.keys(R.chapters).forEach(function (id) {
      var e = R.chapters[id], ch = e.data;
      var co = R.courses[e.course];
      (ch.quiz || []).forEach(function (qq, i) {
        searchIndex.push({
          kind: 'quiz', id: id, qIndex: i,
          title: (qq.q || 'Quiz question').slice(0, 90),
          context: (co ? co.data.title : '') + ' › ' + (ch.title || '') + ' quiz',
          hay: ((qq.q || '') + ' ' + (qq.options || []).join(' ')).toLowerCase()
        });
      });
    });
    return searchIndex;
  }

  /* ---------------- Router ---------------- */
  var appEl = document.getElementById('app');

  function parseHash() {
    var raw = (location.hash || '').replace(/^#/, '');
    var qi = raw.indexOf('?');
    var path = qi >= 0 ? raw.slice(0, qi) : raw;
    var qs = qi >= 0 ? raw.slice(qi + 1) : '';
    var parts = path.split('/').filter(function (s) { return s.length; });
    if (!parts.length) parts = ['home'];
    var query = {};
    qs.split('&').forEach(function (p) {
      if (!p) return;
      var kv = p.split('=');
      try { query[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || ''); } catch (e) {}
    });
    return { parts: parts, query: query };
  }

  function go(hash) { location.hash = hash; }

  // In-memory quiz session (not persisted; a refresh restarts the quiz).
  var quizSession = null;

  function render() {
    var r = parseHash();
    var p = r.parts;
    var html = '';

    if (p[0] === 'home')                    html = vHome();
    else if (p[0] === 'track')              html = vTrack(p[1]);
    else if (p[0] === 'course')             html = vCourse(p[1]);
    else if (p[0] === 'chapter')            html = vChapter(p[1]);
    else if (p[0] === 'lesson')             html = vLesson(p[1]);
    else if (p[0] === 'quiz')               html = vQuiz(p[1]);
    else if (p[0] === 'search')             html = vSearch(r.query.q || '');
    else if (p[0] === 'progress')           html = vProgress();
    else if (p[0] === 'certificate')        html = vCertificate(p[1]);
    else                                    html = vNotFound();

    appEl.innerHTML = html;
    window.scrollTo(0, 0);
    syncNav(p[0]);
  }

  function syncNav(route) {
    var links = document.querySelectorAll('.bottom-nav a');
    links.forEach(function (a) {
      var key = a.getAttribute('data-route');
      var active = (key === route) || (key === 'home' && (route === 'track' || route === 'course' || route === 'chapter' || route === 'lesson' || route === 'quiz' || route === 'certificate'));
      a.classList.toggle('active', !!active);
      if (active) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  /* ---------------- Shared fragments ---------------- */
  function emptyState(icon, title, text, linkHref, linkText) {
    return '<section class="card empty">' +
      '<span class="big" aria-hidden="true">' + icon + '</span>' +
      '<h2>' + esc(title) + '</h2>' +
      '<p>' + esc(text) + '</p>' +
      (linkHref ? '<a class="btn btn-primary" href="' + esc(linkHref) + '">' + esc(linkText) + '</a>' : '') +
      '</section>';
  }

  function pbar(pct, label) {
    return '<div class="pbar" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100" aria-label="' + esc(label || 'progress') + '">' +
      '<span style="width:' + pct + '%"></span></div>' +
      (label ? '<div class="pbar-label">' + esc(label) + '</div>' : '');
  }

  function trackMeta(tk) {
    var t = R.tracks[tk];
    var fb = TRACK_FALLBACK[tk] || { icon: '📚', title: tk, tagline: '' };
    var m = (t && t.meta) || {};
    return { icon: m.icon || fb.icon, title: m.title || fb.title,
             tagline: m.tagline || fb.tagline, urdu: m.urdu || '' };
  }

  function greeting() {
    var h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  }

  /* ---------------- Views ---------------- */

  function vHome() {
    var trackKeys = TRACK_ORDER.filter(function (tk) { return R.tracks[tk]; });
    var lvl = levelOf(state.xp);
    var inLevel = state.xp % XP_PER_LEVEL;
    var toNext = XP_PER_LEVEL - inLevel;

    var h = '<h1 class="greeting">' + esc(greeting()) + (state.name ? ', ' + esc(state.name) : '') + ' 👋</h1>';
    h += '<p class="greeting-sub">What will you learn today?</p>';

    // Streak + level widgets
    h += '<div class="stat-grid">' +
      '<div class="stat-card flame"><div class="stat-num">🔥 ' + state.streak.count + '</div><div class="stat-label">day streak</div></div>' +
      '<div class="stat-card"><div class="stat-num">' + state.xp + '</div><div class="stat-label">total XP</div></div>' +
      '</div>';

    h += '<section class="card level-card">' +
      '<div class="level-head"><span class="level-name">Level ' + lvl + ' — ' + esc(levelName(lvl)) + '</span>' +
      '<span class="level-xp">' + inLevel + ' / ' + XP_PER_LEVEL + ' XP</span></div>' +
      pbar(Math.round(inLevel / XP_PER_LEVEL * 100), toNext + ' XP to reach ' + levelName(lvl + 1)) +
      '</section>';

    // Continue learning (resume)
    if (state.last && state.last.id) {
      var resume = null, resumeHref = null, resumeKind = '';
      if (state.last.type === 'lesson' && R.lessons[state.last.id]) {
        resume = R.lessons[state.last.id].data.title; resumeHref = '#/lesson/' + state.last.id; resumeKind = 'lesson';
      } else if (state.last.type === 'chapter' && R.chapters[state.last.id]) {
        resume = R.chapters[state.last.id].data.title; resumeHref = '#/chapter/' + state.last.id; resumeKind = 'chapter';
      } else if (state.last.type === 'quiz' && R.chapters[state.last.id]) {
        resume = R.chapters[state.last.id].data.title + ' quiz'; resumeHref = '#/quiz/' + state.last.id; resumeKind = 'quiz';
      }
      if (resume && resumeHref) {
        h += '<a class="card card-link resume-card" href="' + esc(resumeHref) + '">' +
          '<h3 style="margin:0 0 4px">▶ Continue learning</h3>' +
          '<p class="muted small" style="margin:0">Pick up your ' + esc(resumeKind) + ': <strong>' + esc(resume) + '</strong></p></a>';
      }
    }

    // Search box
    h += '<form class="search-form" data-form="search" role="search">' +
      '<input class="search-input" type="search" name="q" placeholder="Search lessons and quizzes…" aria-label="Search lessons and quizzes" minlength="2" required>' +
      '<button class="btn btn-primary" type="submit">Search</button></form>';

    // Track cards
    h += '<h2>Learning tracks</h2>';
    if (!trackKeys.length) {
      h += emptyState('📭', 'No content yet', 'Learning tracks are on their way. Check back soon!', null, null);
    } else {
      trackKeys.forEach(function (tk) {
        var m = trackMeta(tk);
        var pr = trackProgress(tk);
        h += '<a class="card card-link" href="#/track/' + esc(tk) + '">' +
          '<div class="track-card"><span class="track-icon" aria-hidden="true">' + esc(m.icon) + '</span>' +
          '<div class="track-body"><h3>' + esc(m.title) + '</h3>' +
          (m.urdu ? '<p class="ur" style="margin:0 0 4px">' + esc(m.urdu) + '</p>' : '') +
          '<p class="track-tagline">' + esc(m.tagline) + '</p>' +
          pbar(pr.pct, pr.pct + '% complete · ' + pr.courses + ' course(s)') +
          '</div><span class="track-arrow" aria-hidden="true">›</span></div></a>';
      });
    }
    return h;
  }

  function vTrack(tk) {
    var t = R.tracks[tk];
    if (!t) return emptyState('🧭', 'Track not found', 'This learning track does not exist.', '#/home', 'Back home');
    var m = trackMeta(tk);
    var courses = t.courses || [];
    var h = '<div class="breadcrumb"><a href="#/home">Home</a> › ' + esc(m.title) + '</div>';
    h += '<h1 class="page-title">' + esc(m.icon) + ' ' + esc(m.title) + '</h1>';
    if (m.urdu) h += '<p class="ur page-sub">' + esc(m.urdu) + '</p>';
    if (m.tagline) h += '<p class="page-sub">' + esc(m.tagline) + '</p>';

    if (!courses.length) {
      h += emptyState('📚', 'No courses yet', 'Courses for this track are being prepared. Check back soon!', '#/home', 'Back home');
      return h;
    }
    courses.forEach(function (c) {
      var pr = courseProgress(c);
      var el = courseEligibility(c);
      h += '<a class="card card-link" href="#/course/' + esc(c.id) + '">' +
        '<div class="track-card"><span class="track-icon" aria-hidden="true">' + esc(c.icon || '📖') + '</span>' +
        '<div class="track-body"><h3>' + esc(c.title || 'Untitled course') + '</h3>' +
        (c.urdu ? '<p class="ur" style="margin:0 0 4px">' + esc(c.urdu) + '</p>' : '') +
        (c.desc ? '<p class="track-tagline">' + esc(c.desc) + '</p>' : '') +
        pbar(pr.pct, pr.pct + '% complete') +
        (el.eligible ? '<div class="mt"><span class="badge badge-gold">🎓 Certificate ready</span></div>' : '') +
        '</div><span class="track-arrow" aria-hidden="true">›</span></div></a>';
    });
    return h;
  }

  function vCourse(courseId) {
    var e = R.courses[courseId];
    if (!e) return emptyState('🧭', 'Course not found', 'This course does not exist.', '#/home', 'Back home');
    var c = e.data;
    var tm = trackMeta(e.track);
    var chapters = c.chapters || [];
    var pr = courseProgress(c);

    var h = '<div class="breadcrumb"><a href="#/home">Home</a> › <a href="#/track/' + esc(e.track) + '">' + esc(tm.title) + '</a> › ' + esc(c.title || '') + '</div>';
    h += '<h1 class="page-title">' + esc(c.icon || '📖') + ' ' + esc(c.title || 'Untitled course') + '</h1>';
    if (c.urdu) h += '<p class="ur page-sub">' + esc(c.urdu) + '</p>';
    if (c.desc) h += '<p class="page-sub">' + esc(c.desc) + '</p>';
    h += '<section class="card">' + pbar(pr.pct, pr.done + ' of ' + pr.items + ' items complete (' + pr.pct + '%)') + '</section>';

    var el = courseEligibility(c);
    if (el.eligible) {
      h += '<a class="btn btn-gold btn-block" href="#/certificate/' + esc(c.id) + '">🎓 View my certificate</a>';
    }

    h += '<h2 class="mt">Chapters</h2>';
    if (!chapters.length) {
      h += emptyState('📝', 'Chapters coming soon', 'The chapters for this course are being written.', '#/track/' + esc(e.track), 'Back to track');
      return h;
    }
    h += '<section class="card" style="padding:6px 18px">';
    chapters.forEach(function (ch) {
      var readN = chapterRead(ch);
      var it = chapterItems(ch);
      var best = chapterBest(ch);
      if (ch.comingSoon) {
        // Honest disabled state — never fake progress for unreleased content.
        h += '<div class="list-item disabled"><span class="li-icon" aria-hidden="true">🔒</span>' +
          '<div class="li-body"><p class="li-title">' + esc(ch.title || 'Untitled chapter') + '</p>' +
          (ch.urdu ? '<p class="ur li-sub">' + esc(ch.urdu) + '</p>' : '') + '</div>' +
          '<span class="badge badge-soon">Coming soon</span></div>';
      } else {
        var meta = readN + ' / ' + it.lessonTotal + ' lessons';
        meta += it.hasQuiz ? ' · quiz best: ' + (best === null ? '—' : best + '%') : ' · no quiz';
        var doneAll = readN >= it.lessonTotal && (!it.hasQuiz || (best !== null && best >= QUIZ_PASS));
        h += '<a class="list-item" href="#/chapter/' + esc(ch.id) + '">' +
          '<span class="li-icon" aria-hidden="true">' + (doneAll ? '✅' : '📄') + '</span>' +
          '<div class="li-body"><p class="li-title">' + esc(ch.title || 'Untitled chapter') + '</p>' +
          (ch.urdu ? '<p class="ur li-sub">' + esc(ch.urdu) + '</p>' : '') +
          '<p class="li-sub">' + esc(meta) + '</p></div>' +
          '<span class="li-meta" aria-hidden="true">›</span></a>';
      }
    });
    h += '</section>';
    return h;
  }

  function vChapter(chapterId) {
    var e = R.chapters[chapterId];
    if (!e) return emptyState('🧭', 'Chapter not found', 'This chapter does not exist.', '#/home', 'Back home');
    var ch = e.data;
    if (ch.comingSoon) {
      return emptyState('🔒', 'Coming soon', 'This chapter has not been released yet. Please check back later.', '#/course/' + esc(e.course), 'Back to course');
    }
    var co = R.courses[e.course];
    var lessons = ch.lessons || [];
    var quiz = ch.quiz || [];
    var readN = chapterRead(ch);
    var best = chapterBest(ch);

    var h = '<div class="breadcrumb"><a href="#/home">Home</a> › <a href="#/course/' + esc(e.course) + '">' + esc(co ? co.data.title : 'Course') + '</a> › ' + esc(ch.title || '') + '</div>';
    h += '<h1 class="page-title">' + esc(ch.title || 'Untitled chapter') + '</h1>';
    if (ch.urdu) h += '<p class="ur page-sub">' + esc(ch.urdu) + '</p>';
    h += '<p class="page-sub">' + readN + ' of ' + lessons.length + ' lessons read' +
      (quiz.length ? ' · quiz best: ' + (best === null ? 'not attempted' : best + '%') : '') + '</p>';

    h += '<h2>Lessons</h2>';
    if (!lessons.length) {
      h += emptyState('📝', 'No lessons yet', 'Lessons for this chapter are being written.', null, null);
    } else {
      h += '<section class="card" style="padding:6px 18px">';
      lessons.forEach(function (l, i) {
        var done = !!state.read[l.id];
        h += '<a class="list-item" href="#/lesson/' + esc(l.id) + '">' +
          '<span class="li-icon" aria-hidden="true">' + (done ? '✅' : '📄') + '</span>' +
          '<div class="li-body"><p class="li-title">' + (i + 1) + '. ' + esc(l.title || 'Untitled lesson') + '</p></div>' +
          (done ? '<span class="check small">Done</span>' : '<span class="li-meta" aria-hidden="true">›</span>') + '</a>';
      });
      h += '</section>';
    }

    if (quiz.length) {
      h += '<h2 class="mt">Quiz</h2><section class="card">' +
        '<p><strong>' + quiz.length + ' questions</strong> · pass mark ' + QUIZ_PASS + '%' +
        (best !== null ? ' · your best: <strong>' + best + '%</strong>' : '') + '</p>' +
        '<a class="btn btn-primary btn-block" href="#/quiz/' + esc(ch.id) + '">' + (best !== null ? 'Retake quiz' : 'Start quiz') + '</a></section>';
    }
    return h;
  }

  function vLesson(lessonId) {
    var e = R.lessons[lessonId];
    if (!e) return emptyState('🧭', 'Lesson not found', 'This lesson does not exist.', '#/home', 'Back home');
    var l = e.data;
    var chE = R.chapters[e.chapter];
    var ch = chE ? chE.data : null;
    var lessons = (ch && ch.lessons) || [];
    var idx = lessons.findIndex(function (x) { return x.id === lessonId; });
    var prev = idx > 0 ? lessons[idx - 1] : null;
    var next = idx >= 0 && idx < lessons.length - 1 ? lessons[idx + 1] : null;
    var done = !!state.read[lessonId];

    var coTitle = R.courses[e.course] ? R.courses[e.course].data.title : 'Course';
    var h = '<div class="breadcrumb"><a href="#/home">Home</a> › <a href="#/chapter/' + esc(e.chapter) + '">' + esc(ch ? ch.title : 'Chapter') + '</a> › Lesson ' + (idx + 1) + '</div>';
    h += '<h1 class="page-title">' + esc(l.title || 'Untitled lesson') + '</h1>';
    h += '<article class="card lesson-body">' + (l.html || '<p class="muted">This lesson has no content yet.</p>') + '</article>';

    h += '<section class="card">';
    if (done) {
      h += '<p class="center"><span class="badge badge-ok">✅ Completed · +' + XP_LESSON + ' XP earned</span></p>';
    } else {
      h += '<button class="btn btn-primary btn-block" data-action="mark-complete" data-id="' + esc(lessonId) + '">✓ Mark complete (+' + XP_LESSON + ' XP)</button>';
    }
    var quiz = (ch && ch.quiz) || [];
    if (quiz.length) {
      h += '<div class="btn-row"><a class="btn btn-outline" href="#/quiz/' + esc(e.chapter) + '">Take the chapter quiz</a></div>';
    }
    h += '</section>';

    h += '<div class="lesson-nav">';
    h += prev ? '<a class="btn btn-outline" href="#/lesson/' + esc(prev.id) + '">‹ Prev</a>' : '<span class="btn btn-outline" disabled>‹ Prev</span>';
    h += next ? '<a class="btn btn-outline" href="#/lesson/' + esc(next.id) + '">Next ›</a>' : '<a class="btn btn-outline" href="#/chapter/' + esc(e.chapter) + '">Back to chapter</a>';
    h += '</div>';
    return h;
  }

  /* ---------------- Quiz ---------------- */
  function startQuizSession(chapterId) {
    var e = R.chapters[chapterId];
    if (!e) return null;
    var quiz = (e.data.quiz || []).filter(function (q) {
      return q && q.q && q.options && q.options.length >= 2 &&
             typeof q.answer === 'number' && q.answer >= 0 && q.answer < q.options.length;
    });
    return { chapterId: chapterId, questions: quiz, idx: 0, correct: 0, picked: null, done: false };
  }

  function vQuiz(chapterId) {
    var e = R.chapters[chapterId];
    if (!e || e.data.comingSoon) {
      return emptyState('🧭', 'Quiz not found', 'This quiz does not exist.', '#/home', 'Back home');
    }
    if (!quizSession || quizSession.chapterId !== chapterId) {
      quizSession = startQuizSession(chapterId);
    }
    var s = quizSession;
    if (!s || !s.questions.length) {
      return emptyState('❓', 'No quiz questions yet', 'Questions for this quiz are being written.', '#/chapter/' + esc(chapterId), 'Back to chapter');
    }
    if (s.done) return vQuizResult(s);

    var q = s.questions[s.idx];
    var total = s.questions.length;
    var h = '<div class="breadcrumb"><a href="#/chapter/' + esc(chapterId) + '">' + esc(e.data.title || 'Chapter') + '</a> › Quiz</div>';
    h += '<div class="quiz-progress"><div class="quiz-qcount">Question ' + (s.idx + 1) + ' of ' + total + '</div>' +
      pbar(Math.round(s.idx / total * 100), 'Question ' + (s.idx + 1) + ' of ' + total) + '</div>';
    h += '<section class="card"><p class="quiz-question">' + esc(q.q) + '</p>';
    h += '<div class="quiz-options">';
    var keys = ['A', 'B', 'C', 'D', 'E', 'F'];
    q.options.forEach(function (opt, i) {
      var cls = 'quiz-option';
      if (s.picked !== null) {
        cls += ' locked';
        if (i === q.answer) cls += ' correct';
        else if (i === s.picked) cls += ' wrong';
        else cls += ' dim';
      }
      h += '<button class="' + cls + '" data-action="quiz-pick" data-idx="' + i + '"' + (s.picked !== null ? ' disabled' : '') + '>' +
        '<span class="opt-key">' + (keys[i] || (i + 1)) + '</span><span>' + esc(opt) + '</span></button>';
    });
    h += '</div>';
    if (s.picked !== null) {
      var wasRight = s.picked === q.answer;
      h += '<div class="quiz-explain"><strong>' + (wasRight ? '✅ Correct!' : '❌ Not quite.') + '</strong>' +
        (q.explain ? '<br>' + esc(q.explain) : '') + '</div>';
      h += '<div class="btn-row"><button class="btn btn-primary" data-action="quiz-next">' +
        (s.idx + 1 < total ? 'Next question ›' : 'See results') + '</button></div>';
    }
    h += '</section>';
    return h;
  }

  function vQuizResult(s) {
    var e = R.chapters[s.chapterId];
    var total = s.questions.length;
    var pct = total ? Math.round(s.correct / total * 100) : 0;
    var earned = s.correct * XP_QUIZ_OK;
    var prevBest = state.quizBest[s.chapterId];
    var isNewBest = prevBest === undefined || pct > prevBest;

    var h = '<div class="breadcrumb"><a href="#/chapter/' + esc(s.chapterId) + '">' + esc(e && e.data.title ? e.data.title : 'Chapter') + '</a> › Quiz results</div>';
    h += '<section class="card quiz-result">';
    h += '<h1 class="page-title">Quiz complete!</h1>';
    h += '<div class="quiz-score-ring" style="--pct:' + pct + '%"><span>' + pct + '%</span></div>';
    h += '<p><strong>' + s.correct + ' / ' + total + '</strong> correct' +
      (pct >= QUIZ_PASS ? ' — <span class="badge badge-ok">Passed 🎉</span>' : ' — keep practicing! Pass mark is ' + QUIZ_PASS + '%.') + '</p>';
    h += '<p class="muted small">+' + earned + ' XP earned' + (isNewBest ? ' · new best score!' : ' · best: ' + prevBest + '%') + '</p>';
    h += '<div class="btn-row">' +
      '<button class="btn btn-outline" data-action="quiz-retry" data-id="' + esc(s.chapterId) + '">↻ Retry</button>' +
      '<a class="btn btn-primary" href="#/chapter/' + esc(s.chapterId) + '">Back to chapter</a></div>';
    h += '</section>';
    return h;
  }

  function finishQuiz(s) {
    var total = s.questions.length;
    var pct = total ? Math.round(s.correct / total * 100) : 0;
    var prev = state.quizBest[s.chapterId];
    if (prev === undefined || pct > prev) state.quizBest[s.chapterId] = pct;
    addXP(s.correct * XP_QUIZ_OK);
    touchStreak();
    setLast('quiz', s.chapterId);
    save();
    s.done = true;
  }

  /* ---------------- Search view ---------------- */
  function vSearch(q) {
    q = (q || '').trim();
    var h = '<h1 class="page-title">🔍 Search</h1>';
    h += '<form class="search-form" data-form="search" role="search">' +
      '<input class="search-input" type="search" name="q" placeholder="Search lessons and quizzes…" aria-label="Search lessons and quizzes" value="' + esc(q) + '" minlength="2" required>' +
      '<button class="btn btn-primary" type="submit">Search</button></form>';

    if (!q) {
      h += '<p class="muted">Type at least 2 characters to search across lesson titles, lesson text, and quiz questions.</p>';
      return h;
    }
    if (q.length < 2) {
      h += '<p class="muted">Please type at least 2 characters.</p>';
      return h;
    }
    var needle = q.toLowerCase();
    var results = getSearchIndex().filter(function (it) { return it.hay.indexOf(needle) >= 0; }).slice(0, 50);

    if (!results.length) {
      h += emptyState('🔎', 'No matches', 'Nothing matched "' + q + '". Try different words.', null, null);
      return h;
    }
    h += '<p class="muted small">' + results.length + ' result(s) for "' + esc(q) + '"</p>';
    h += '<section class="card" style="padding:6px 18px">';
    results.forEach(function (r) {
      var href = r.kind === 'lesson' ? '#/lesson/' + r.id : '#/quiz/' + r.id;
      h += '<a class="list-item search-result" href="' + esc(href) + '">' +
        '<span class="li-icon" aria-hidden="true">' + (r.kind === 'lesson' ? '📄' : '❓') + '</span>' +
        '<div class="li-body"><p class="li-title">' + esc(r.title) +
        '<span class="result-kind">' + r.kind + '</span></p>' +
        '<p class="li-sub">' + esc(r.context) + '</p></div>' +
        '<span class="li-meta" aria-hidden="true">›</span></a>';
    });
    h += '</section>';
    return h;
  }

  /* ---------------- Progress view ---------------- */
  function vProgress() {
    var lvl = levelOf(state.xp);
    var inLevel = state.xp % XP_PER_LEVEL;
    var h = '<h1 class="page-title">📊 My Progress</h1>';
    h += '<p class="page-sub">Your learning journey so far.</p>';

    h += '<div class="stat-grid">' +
      '<div class="stat-card flame"><div class="stat-num">🔥 ' + state.streak.count + '</div><div class="stat-label">day streak</div></div>' +
      '<div class="stat-card"><div class="stat-num">' + state.xp + '</div><div class="stat-label">total XP</div></div>' +
      '<div class="stat-card"><div class="stat-num">' + totalLessonsRead() + '</div><div class="stat-label">lessons read</div></div>' +
      '</div>';

    h += '<section class="card level-card">' +
      '<div class="level-head"><span class="level-name">Level ' + lvl + ' — ' + esc(levelName(lvl)) + '</span>' +
      '<span class="level-xp">' + inLevel + ' / ' + XP_PER_LEVEL + ' XP</span></div>' +
      pbar(Math.round(inLevel / XP_PER_LEVEL * 100), (XP_PER_LEVEL - inLevel) + ' XP to reach ' + levelName(lvl + 1)) +
      '<p class="small muted" style="margin:10px 0 0">Earn XP: +' + XP_LESSON + ' per lesson completed, +' + XP_QUIZ_OK + ' per correct quiz answer.</p></section>';

    var trackKeys = TRACK_ORDER.filter(function (tk) { return R.tracks[tk]; });
    if (!trackKeys.length) {
      h += emptyState('📭', 'No content yet', 'Your progress will appear here once learning tracks are published.', '#/home', 'Back home');
      return h;
    }
    h += '<h2>Tracks</h2>';
    trackKeys.forEach(function (tk) {
      var m = trackMeta(tk);
      var pr = trackProgress(tk);
      h += '<a class="card card-link" href="#/track/' + esc(tk) + '"><h3 style="margin:0 0 6px">' + esc(m.icon) + ' ' + esc(m.title) + '</h3>' +
        pbar(pr.pct, pr.done + ' / ' + pr.items + ' items · ' + pr.pct + '%') + '</a>';
    });

    // Certificates earned
    h += '<h2 class="mt">🎓 Certificates</h2>';
    var certs = [];
    trackKeys.forEach(function (tk) {
      (R.tracks[tk].courses || []).forEach(function (c) {
        var el = courseEligibility(c);
        if (el.items > 0) {
          var pr = courseProgress(c);
          certs.push({ id: c.id, title: c.title, pct: pr.pct, ready: el.eligible });
        }
      });
    });
    if (!certs.length) {
      h += '<section class="card"><p class="muted" style="margin:0">Complete every lesson and pass every quiz in a course (≥ ' + QUIZ_PASS + '%) to unlock its certificate.</p></section>';
    } else {
      h += '<section class="card" style="padding:6px 18px">';
      certs.forEach(function (ct) {
        h += '<div class="list-item"><span class="li-icon" aria-hidden="true">🎓</span>' +
          '<div class="li-body"><p class="li-title">' + esc(ct.title || 'Untitled course') + '</p>' +
          '<p class="li-sub">' + ct.pct + '% complete</p></div>' +
          (ct.ready
            ? '<a class="btn btn-gold" style="min-height:44px" href="#/certificate/' + esc(ct.id) + '">View</a>'
            : '<span class="badge badge-soon">In progress</span>') +
          '</div>';
      });
      h += '</section>';
    }
    return h;
  }

  /* ---------------- Certificate view ---------------- */
  function vCertificate(courseId) {
    var e = R.courses[courseId];
    if (!e) return emptyState('🧭', 'Course not found', 'This course does not exist.', '#/home', 'Back home');
    var c = e.data;
    var el = courseEligibility(c);

    var h = '<div class="breadcrumb"><a href="#/home">Home</a> › <a href="#/course/' + esc(courseId) + '">' + esc(c.title || 'Course') + '</a> › Certificate</div>';
    h += '<h1 class="page-title">🎓 Certificate</h1>';

    if (!el.hasLive || el.items === 0) {
      return h + emptyState('📝', 'No certificate yet', 'This course has no released content, so there is nothing to certify yet.', '#/course/' + esc(courseId), 'Back to course');
    }
    if (!el.eligible) {
      h += '<section class="card"><h3>Almost there — finish these to unlock:</h3>';
      el.pending.forEach(function (p) {
        h += '<div class="cert-check"><span aria-hidden="true">⬜</span><div><strong>' + esc(p.title) + '</strong><br><span class="small muted">' + esc(p.missing) + '</span></div></div>';
      });
      h += '<div class="btn-row"><a class="btn btn-primary" href="#/course/' + esc(courseId) + '">Continue learning</a></div></section>';
      return h;
    }

    // Eligible: name input + printable certificate.
    h += '<section class="card no-print"><h3 style="margin-top:0">Your name on the certificate</h3>' +
      '<label class="small muted" for="cert-name">Type your full name exactly as you want it printed.</label>' +
      '<input class="name-input" id="cert-name" type="text" maxlength="60" placeholder="e.g. Ali Raza" value="' + esc(state.name) + '" autocomplete="name">' +
      '<div class="cert-actions">' +
      '<button class="btn btn-primary" data-action="save-name">Save name</button>' +
      '<button class="btn btn-gold" data-action="print-cert">🖨 Print certificate</button>' +
      '</div></section>';

    var dateStr = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    h += '<div class="certificate" id="certificate">' +
      '<div class="cert-brand">Shaheen Academy · Learn Without Limits</div>' +
      '<div class="cert-mark" aria-hidden="true"><svg viewBox="0 0 512 512" width="64" height="64"><rect x="0" y="0" width="512" height="512" rx="116" fill="#034d38"/><path fill="#c9a227" d="M150 400 L160 230 Q165 195 195 178 L250 150 L300 160 Q360 172 385 205 L400 232 L352 228 Q358 260 348 292 Q335 345 295 380 L235 408 Z"/><path fill="#034d38" d="M270 212 Q292 202 312 210 Q296 226 274 224 Z"/></svg></div>' +
      '<div class="cert-title">Certificate of Completion</div>' +
      '<p class="muted small" style="margin:0">This certificate is proudly awarded to</p>' +
      '<div class="cert-name">' + esc(state.name || 'Your Name') + '</div>' +
      '<p class="muted small" style="margin:0">for successfully completing</p>' +
      '<div class="cert-course">' + esc(c.title || 'Untitled course') + '</div>' +
      (c.urdu ? '<p class="ur" style="margin:6px 0 0">' + esc(c.urdu) + '</p>' : '') +
      '<div class="cert-date">Awarded on ' + esc(dateStr) + '</div>' +
      '<div class="cert-disclaimer">' + esc(CERT_DISCLAIMER) + '</div>' +
      '</div>';

    h += '<p class="small muted no-print">Tip: use your browser\'s print dialog and choose “Save as PDF” to keep a digital copy.</p>';
    return h;
  }

  function vNotFound() {
    return emptyState('🧭', 'Page not found', 'The page you are looking for does not exist.', '#/home', 'Back home');
  }

  /* ---------------- Actions (event delegation) ---------------- */
  appEl.addEventListener('click', function (ev) {
    var el = ev.target.closest('[data-action]');
    if (!el) return;
    var action = el.getAttribute('data-action');

    if (action === 'mark-complete') {
      var id = el.getAttribute('data-id');
      if (!id || !R.lessons[id]) return;
      if (!state.read[id]) {
        state.read[id] = 1;
        addXP(XP_LESSON);      // first completion only
        touchStreak();
        setLast('lesson', id);
        save();
      }
      render();
    }
    else if (action === 'quiz-pick') {
      if (!quizSession || quizSession.done || quizSession.picked !== null) return;
      var pick = parseInt(el.getAttribute('data-idx'), 10);
      var q = quizSession.questions[quizSession.idx];
      if (isNaN(pick) || !q || pick < 0 || pick >= q.options.length) return;
      quizSession.picked = pick;
      if (pick === q.answer) quizSession.correct += 1;
      render();
    }
    else if (action === 'quiz-next') {
      if (!quizSession || quizSession.done || quizSession.picked === null) return;
      quizSession.idx += 1;
      quizSession.picked = null;
      if (quizSession.idx >= quizSession.questions.length) {
        finishQuiz(quizSession);
      }
      render();
    }
    else if (action === 'quiz-retry') {
      var cid = el.getAttribute('data-id');
      quizSession = startQuizSession(cid);
      go('#/quiz/' + cid);
      render();
    }
    else if (action === 'save-name') {
      var input = document.getElementById('cert-name');
      if (input) {
        state.name = input.value.trim().slice(0, 60);
        save();
        render();
      }
    }
    else if (action === 'print-cert') {
      var nameInput = document.getElementById('cert-name');
      if (nameInput && nameInput.value.trim()) {
        state.name = nameInput.value.trim().slice(0, 60);
        save();
        render();
        setTimeout(function () { window.print(); }, 60);
      } else {
        window.print();
      }
    }
  });

  appEl.addEventListener('submit', function (ev) {
    var form = ev.target.closest('[data-form]');
    if (!form) return;
    ev.preventDefault();
    if (form.getAttribute('data-form') === 'search') {
      var q = form.querySelector('input[name="q"]');
      var val = q ? q.value.trim() : '';
      if (val.length >= 2) go('#/search?q=' + encodeURIComponent(val));
    }
  });

  /* ---------------- Boot ---------------- */
  buildRegistry();
  window.addEventListener('hashchange', render);
  render();

  // Register the service worker for offline + installability (https only).
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./sw.js').catch(function () { /* offline-first is best-effort */ });
    });
  }
})();
