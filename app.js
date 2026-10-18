/* ============================================================
   Shaheen Academy — v2 dynamic features (front-end PROTOTYPE)
   Added 2026-10-18. This module is fully CLIENT-SIDE ONLY —
   there is no backend (static GitHub Pages hosting). Everything
   below is a mockup/demo:
     1. Utility bar: live date + IP-based city (cached daily,
        graceful "Pakistan" fallback; never blocks rendering).
     2. Daily visitor counter: DETERMINISTIC demo value derived
        from the date — 4500 + (FNV-1a('YYYY-MM-DD') % 600), so it
        is stable all day, changes daily, and never drops below
        4500 — plus a cosmetic +1 tick every ~45s (capped +40).
        SIMULATED. Not real analytics.
     3. Auth: sign-up / sign-in MOCKUP with Student / Teacher /
        Parent roles. Accounts are stored in localStorage ON THIS
        DEVICE ONLY (plain demo storage, never a real credential
        store). UI is clearly labeled as a demo prototype.
     4. Live Classes: seeded demo classes + teacher-created classes
        (localStorage); enrollments are local; the classroom is a
        MOCKUP — video placeholder, local-only chat, raise-hand
        toggle. No real video/audio.
   The v1 engine (lessons, quizzes, XP/streaks, certificates, PWA)
   is untouched. This IIFE runs BEFORE the engine and exposes
   window.__saV2 = { vLive, vAccount, afterRender, ... } which the
   engine's router calls for the new 'live' and 'account' routes.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- tiny helpers (self-contained) ---------------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  function $(id) { return document.getElementById(id); }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function dayStr(d) {
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
  }
  function fmtNum(n) {
    try { return Number(n).toLocaleString('en-US'); }
    catch (e) { return String(n); }
  }
  function lsGet(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function lsSet(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* storage unavailable */ }
  }

  /* ---------------- 1. Utility bar: date + location ---------------- */
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Live current date, e.g. "Sunday, 18 October 2026". Re-renders every
  // minute so it rolls over correctly at midnight without a reload.
  function renderDate() {
    var el = $('util-date');
    if (!el) return;
    var d = new Date();
    el.textContent = DAYS[d.getDay()] + ', ' + d.getDate() + ' ' +
                     MONTHS[d.getMonth()] + ' ' + d.getFullYear();
  }

  // Visitor location via free IP geolocation. Cached per day in
  // localStorage; falls back to "Pakistan" instantly and on any error.
  // Never blocks rendering, never asks for browser geolocation permission.
  var LOC_KEY = 'shaheen-loc-v2';
  function renderLocation() {
    var el = $('util-location');
    if (!el) return;
    var today = dayStr(new Date());
    var cached = lsGet(LOC_KEY, null);
    if (cached && cached.day === today && cached.city) {
      el.textContent = '📍 ' + cached.city;
      return;
    }
    el.textContent = '📍 Pakistan'; // immediate graceful fallback
    try {
      var ctrl = (typeof AbortController !== 'undefined') ? new AbortController() : null;
      var timer = setTimeout(function () { if (ctrl) { try { ctrl.abort(); } catch (e) {} } }, 4000);
      fetch('https://ipapi.co/city/', ctrl ? { signal: ctrl.signal } : {})
        .then(function (r) { if (!r.ok) throw new Error('geo-http'); return r.text(); })
        .then(function (city) {
          clearTimeout(timer);
          city = (city || '').trim();
          if (city && city.length < 60) {
            el.textContent = '📍 ' + city; // textContent: no HTML injection
            lsSet(LOC_KEY, { day: today, city: city });
          }
        })
        .catch(function () { clearTimeout(timer); /* keep "Pakistan" fallback */ });
    } catch (e) { /* keep fallback */ }
  }

  /* ---------------- 2. Daily visitor counter (SIMULATED demo) ----------------
     Deterministic per-day BASE: 4500 + (FNV-1a('YYYY-MM-DD') % 600),
     range 4500-5099 - stable all day, different each day, never below
     4500. On top of the base, a LIVE random walk keeps the number
     visibly moving: every 3-6 seconds (randomized) the displayed total
     shifts by a weighted delta - 70% +1, 15% +2, 10% +3, 5% -1 -
     floored so the total never shows below 4500. The day's accumulated
     offset persists in localStorage (key 'shaheen-visitors-v1' as
     {date, offset}) so a reload continues from the last shown number
     instead of jumping backwards; the offset resets when the date
     changes. Every change animates (flash + pulse) and a pulsing LIVE
     dot marks the card. A "learning now" sub-line random-walks 90-220
     in sessionStorage only.
     THIS IS NOT REAL ANALYTICS - front-end demo, labelled as such. */
  function hashStr(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }
  function visitorBase() { return 4500 + (hashStr(dayStr(new Date())) % 600); }

  var VIS_KEY = 'shaheen-visitors-v1'; // { date: 'YYYY-MM-DD', offset: n }
  function visitorStore() {
    var today = dayStr(new Date());
    var s = lsGet(VIS_KEY, null);
    if (!s || typeof s !== 'object' || s.date !== today || typeof s.offset !== 'number') {
      s = { date: today, offset: 0 }; // new day (or first visit): start fresh
      lsSet(VIS_KEY, s);
    }
    return s;
  }
  function visitorNow() {
    return Math.max(4500, visitorBase() + visitorStore().offset);
  }
  // Restartable pulse so every tick is visible.
  function flashNum(el) {
    if (!el || !el.classList) return;
    try {
      el.classList.remove('tick-flash');
      void el.offsetWidth; // force reflow: restarts the CSS animation
      el.classList.add('tick-flash');
    } catch (e) { /* stub-safe */ }
  }
  function paintVisitor(animate) {
    var el = $('visitor-count');
    if (!el) return;
    el.textContent = fmtNum(visitorNow());
    if (animate) flashNum(el);
  }
  function bumpVisitor() {
    var st = visitorStore();
    var r = Math.random();
    var d = r < 0.70 ? 1 : r < 0.85 ? 2 : r < 0.95 ? 3 : -1;
    st.offset += d;
    if (visitorBase() + st.offset < 4500) st.offset = 4500 - visitorBase(); // floor at 4500
    lsSet(VIS_KEY, st);
    paintVisitor(true);
  }
  // Randomized 3-6s loop: the counter feels continuously alive.
  (function visitorLoop() {
    setTimeout(function () { bumpVisitor(); visitorLoop(); }, 3000 + Math.random() * 3000);
  })();

  /* "N learning now" - session-only random walk, clamped 90-220. */
  var LEARN_KEY = 'shaheen-learning-now';
  var learnNow = (function () {
    var n = NaN;
    try { n = parseInt(sessionStorage.getItem(LEARN_KEY), 10); } catch (e) {}
    if (!(n >= 90 && n <= 220)) n = 90 + Math.floor(Math.random() * 131);
    return n;
  })();
  function bumpLearning() {
    learnNow += Math.floor(Math.random() * 13) - 6; // -6..+6
    if (learnNow < 90) learnNow = 90;
    if (learnNow > 220) learnNow = 220;
    try { sessionStorage.setItem(LEARN_KEY, String(learnNow)); } catch (e) {}
    var el = $('learning-now');
    if (el) { el.textContent = fmtNum(learnNow); flashNum(el); }
  }
  (function learningLoop() {
    setTimeout(function () { bumpLearning(); learningLoop(); }, 5000 + Math.random() * 3000);
  })();

  // Injected into the home view after the engine renders it.
  function injectVisitorCard() {
    if ($('visitor-count')) return; // already injected for this render
    var app = $('app');
    if (!app) return;
    var html =
      '<section class="card visitor-card" aria-label="Learners visiting today">' +
        '<div class="visitor-num" id="visitor-count">' + fmtNum(visitorNow()) + '</div>' +
        '<div class="visitor-label"><span class="live-dot" aria-hidden="true"></span>LIVE · 👥 learners visited today</div>' +
        '<div class="visitor-sub"><span id="learning-now">' + fmtNum(learnNow) + '</span> learning now</div>' +
        '<div class="visitor-demo"><span class="visitor-demo-tag">demo counter</span></div>' +
      '</section>';
    var anchor = app.querySelector('.stat-grid');
    if (anchor) anchor.insertAdjacentHTML('afterend', html);
    else app.insertAdjacentHTML('afterbegin', html);
  }

  /* ---------------- 3. Auth mockup (localStorage only) ----------------
     DEMO PROTOTYPE: accounts live in this device's localStorage only.
     Passwords are stored in plain text in a demo-only key — this must
     NEVER be mistaken for a real credential store. */
  var AUTH_KEY = 'shaheen-auth-v2';
  var ROLES = {
    student: { label: 'Student', icon: '🎒', badge: 'badge-ok' },
    teacher: { label: 'Teacher', icon: '👩‍🏫', badge: 'badge-gold' },
    parent:  { label: 'Parent',  icon: '👪', badge: 'badge-soon' }
  };

  function loadAuth() {
    var a = lsGet(AUTH_KEY, null);
    if (!a || typeof a !== 'object') a = { users: {}, session: null };
    if (!a.users || typeof a.users !== 'object') a.users = {};
    return a;
  }
  function saveAuth(a) { lsSet(AUTH_KEY, a); }
  function currentUser() {
    var a = loadAuth();
    if (!a.session || !a.users[a.session]) return null;
    return a.users[a.session];
  }

  // Header auth area: "Join / Sign in" button, or user chip + dropdown.
  function renderAuthArea() {
    var area = $('auth-area');
    if (!area) return;
    var u = currentUser();
    if (!u) {
      area.innerHTML = '<button class="auth-join" data-v2action="auth-open">Join / Sign in</button>';
      return;
    }
    var r = ROLES[u.role] || ROLES.student;
    var initial = ((u.name || 'S').trim().charAt(0) || 'S').toUpperCase();
    area.innerHTML =
      '<div class="auth-user" id="auth-user">' +
        '<button class="auth-chip" data-v2action="auth-menu" aria-haspopup="true" aria-expanded="false">' +
          '<span class="auth-avatar" aria-hidden="true">' + esc(initial) + '</span>' +
          '<span class="auth-name">' + esc(u.name) + '</span>' +
          '<span class="badge ' + r.badge + ' auth-role">' + esc(r.label) + '</span>' +
        '</button>' +
        '<div class="auth-menu" id="auth-menu" hidden>' +
          '<a href="#/account" data-v2action="auth-menu-link">👤 My dashboard</a>' +
          '<a href="#/live" data-v2action="auth-menu-link">🎥 Live classes</a>' +
          '<button data-v2action="auth-signout">↪ Sign out</button>' +
        '</div>' +
      '</div>';
  }

  /* ----- Auth modal ----- */
  var modalRoot = null;
  function getModalRoot() {
    if (!modalRoot) modalRoot = $('modal-root');
    return modalRoot;
  }
  function closeModal() {
    var m = getModalRoot();
    if (m) m.innerHTML = '';
    document.body.classList.remove('modal-open');
  }

  var authTab = 'signup';   // 'signup' | 'signin'
  var authRole = 'student'; // selected role card
  var authNotice = '';      // one-line notice shown above the form (e.g. "sign in to enroll")

  function openAuth(tab, notice) {
    authTab = (tab === 'signin') ? 'signin' : 'signup';
    authNotice = notice || '';
    if (!ROLES[authRole]) authRole = 'student';
    renderAuthModal();
    document.body.classList.add('modal-open');
    var m = getModalRoot();
    var first = m ? m.querySelector('.v2-input') : null;
    if (first) setTimeout(function () { try { first.focus(); } catch (e) {} }, 60);
  }

  function roleCardsHTML() {
    return Object.keys(ROLES).map(function (k) {
      var r = ROLES[k];
      return '<button type="button" class="role-card' + (authRole === k ? ' selected' : '') + '"' +
        ' data-v2action="auth-role" data-role="' + k + '" aria-pressed="' + (authRole === k) + '">' +
        '<span class="role-icon" aria-hidden="true">' + r.icon + '</span>' +
        '<span class="role-label">' + r.label + '</span></button>';
    }).join('');
  }

  function renderAuthModal() {
    var m = getModalRoot();
    if (!m) return;
    var isSignup = authTab === 'signup';
    m.innerHTML =
      '<div class="modal-backdrop" data-v2action="modal-backdrop">' +
      '<div class="modal" role="dialog" aria-modal="true" aria-label="' + (isSignup ? 'Create account' : 'Sign in') + '">' +
        '<button class="modal-close" data-v2action="modal-close" aria-label="Close">✕</button>' +
        '<h2 class="modal-title">' + (isSignup ? 'Create your account' : 'Welcome back') + '</h2>' +
        (authNotice ? '<p class="auth-notice">' + esc(authNotice) + '</p>' : '') +
        '<div class="tabs" role="tablist">' +
          '<button type="button" class="tab' + (isSignup ? ' active' : '') + '" data-v2action="auth-tab" data-tab="signup" role="tab" aria-selected="' + isSignup + '">Create account</button>' +
          '<button type="button" class="tab' + (!isSignup ? ' active' : '') + '" data-v2action="auth-tab" data-tab="signin" role="tab" aria-selected="' + (!isSignup) + '">Sign in</button>' +
        '</div>' +
        '<form data-v2form="auth" novalidate>' +
          '<div class="role-grid" role="radiogroup" aria-label="Choose your role">' + roleCardsHTML() + '</div>' +
          (isSignup
            ? '<label class="v2-label" for="auth-name">Full name</label>' +
              '<input class="v2-input" id="auth-name" name="name" type="text" maxlength="60" placeholder="e.g. Ali Raza" autocomplete="name">'
            : '') +
          '<label class="v2-label" for="auth-email">Email</label>' +
          '<input class="v2-input" id="auth-email" name="email" type="email" maxlength="120" placeholder="you@example.com" autocomplete="email">' +
          '<label class="v2-label" for="auth-pass">Password</label>' +
          '<input class="v2-input" id="auth-pass" name="password" type="password" maxlength="72" placeholder="••••••••" autocomplete="' + (isSignup ? 'new-password' : 'current-password') + '">' +
          '<div class="auth-error" id="auth-error" role="alert" hidden></div>' +
          '<button class="btn btn-primary btn-block" type="submit" style="margin-top:14px">' + (isSignup ? 'Create account' : 'Sign in') + '</button>' +
          '<p class="demo-note">Demo prototype — your details stay on this device.</p>' +
        '</form>' +
      '</div></div>';
  }

  function handleAuthSubmit(form) {
    var errBox = $('auth-error');
    function fail(msg) {
      if (errBox) { errBox.textContent = msg; errBox.hidden = false; }
    }
    var email = ((form.email && form.email.value) || '').trim().toLowerCase();
    var pass = (form.password && form.password.value) || '';
    var name = (form.name && form.name.value ? form.name.value : '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { fail('Please enter a valid email address.'); return; }
    if (pass.length < 4) { fail('Password must be at least 4 characters.'); return; }
    var a = loadAuth();
    if (authTab === 'signup') {
      if (!name) { fail('Please enter your name.'); return; }
      if (a.users[email]) { fail('An account with this email already exists — try signing in.'); return; }
      // DEMO ONLY: plain-text storage on this device. Never a real credential store.
      a.users[email] = { name: name.slice(0, 60), email: email, pass: pass,
                         role: authRole, created: Date.now() };
      a.session = email;
      saveAuth(a);
    } else {
      var u = a.users[email];
      if (!u || u.pass !== pass) { fail('Email or password did not match. Try again or create an account.'); return; }
      a.session = email;
      saveAuth(a);
    }
    closeModal();
    renderAuthArea();
    rerender();
  }

  function signOut() {
    var a = loadAuth();
    a.session = null;
    saveAuth(a);
    renderAuthArea();
    rerender();
  }

  // Re-run the engine router (it listens for 'hashchange').
  function rerender() {
    try { window.dispatchEvent(new Event('hashchange')); } catch (e) {}
  }

  /* ---------------- 4. Live / online classes (mockup) ---------------- */
  var CLASS_KEY  = 'shaheen-classes-v2';  // teacher-created classes (local)
  var ENROLL_KEY = 'shaheen-enroll-v2';   // enrolled class ids (local)
  var CHILD_KEY  = 'shaheen-children-v2'; // parent's children names (local)

  // Seeded demo schedule. Dates are generated relative to today so the
  // list always looks upcoming. Pure front-end demo content.
  function seedClasses() {
    var now = Date.now();
    function at(dayOffset, h, min) {
      var t = new Date(now);
      t.setDate(t.getDate() + dayOffset);
      t.setHours(h, min, 0, 0);
      return t.getTime();
    }
    return [
      { id: 'demo-phy10', title: 'Class 10 Physics — Numericals Bootcamp',
        subject: 'Physics', teacher: 'Sir Imran Khan', at: at(1, 17, 0),
        seats: 120, enrolled: 86, demo: true },
      { id: 'demo-mdcat', title: 'MDCAT Biology — Past Paper Drill',
        subject: 'Biology', teacher: 'Dr. Ayesha Malik', at: at(2, 18, 30),
        seats: 200, enrolled: 143, demo: true },
      { id: 'demo-eng', title: 'Spoken English — Beginner',
        subject: 'English', teacher: 'Miss Sara Ahmed', at: at(3, 16, 0),
        seats: 80, enrolled: 52, demo: true }
    ];
  }

  function customClasses() {
    var arr = lsGet(CLASS_KEY, []);
    return Array.isArray(arr) ? arr : [];
  }
  function saveCustomClasses(arr) { lsSet(CLASS_KEY, arr); }
  function allClasses() { return seedClasses().concat(customClasses()); }
  function findClass(id) {
    var all = allClasses();
    for (var i = 0; i < all.length; i++) { if (all[i].id === id) return all[i]; }
    return null;
  }

  function enrollments() {
    var arr = lsGet(ENROLL_KEY, []);
    return Array.isArray(arr) ? arr : [];
  }
  function isEnrolled(id) { return enrollments().indexOf(id) >= 0; }
  function enroll(id) {
    var e = enrollments();
    if (e.indexOf(id) < 0) { e.push(id); lsSet(ENROLL_KEY, e); }
    // Bump the seat count on teacher-created classes (persisted).
    var arr = customClasses(), changed = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id === id) { arr[i].enrolled = (arr[i].enrolled || 0) + 1; changed = true; }
    }
    if (changed) saveCustomClasses(arr);
  }
  function seatsLeft(c) {
    var taken = (c.enrolled || 0) + (isEnrolled(c.id) ? 1 : 0);
    return Math.max(0, (c.seats || 0) - taken);
  }
  function fmtWhen(ts) {
    try {
      return new Date(ts).toLocaleString(undefined,
        { weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });
    } catch (e) { return ''; }
  }

  function classCard(c) {
    var u = currentUser();
    var enrolled = isEnrolled(c.id);
    var left = seatsLeft(c);
    var h = '<div class="class-card">' +
      '<div class="class-top"><span class="badge badge-gold">' + esc(c.subject || 'General') + '</span>' +
      (c.demo ? '<span class="demo-tag">demo</span>' : '<span class="demo-tag mine">created by you</span>') + '</div>' +
      '<h3 class="class-title">' + esc(c.title) + '</h3>' +
      '<p class="class-meta">👩‍🏫 ' + esc(c.teacher || 'Shaheen Academy') +
      '<br>🗓 ' + esc(fmtWhen(c.at)) +
      '<br>💺 ' + left + ' seats left</p>';
    if (enrolled) {
      h += '<div class="btn-row"><button class="btn btn-primary" data-v2action="room-open" data-id="' + esc(c.id) + '">▶ Join class</button>' +
           '<span class="badge badge-ok" style="align-self:center">✓ Enrolled</span></div>';
    } else if (!u) {
      h += '<button class="btn btn-outline btn-block" data-v2action="enroll-need-auth">Enroll — join / sign in first</button>';
    } else {
      h += '<button class="btn btn-outline btn-block" data-v2action="enroll" data-id="' + esc(c.id) + '"' +
           (left <= 0 ? ' disabled' : '') + '>' +
           (left <= 0 ? 'Class full' : 'Enroll · ' + left + ' seats left') + '</button>';
    }
    return h + '</div>';
  }

  // New '#/live' route view (called by the engine router).
  function vLive() {
    var u = currentUser();
    var h = '<h1 class="page-title">🎥 Live Classes</h1>' +
      '<p class="page-sub">Learn live with teachers · <span class="demo-tag">prototype</span></p>';
    if (u && u.role === 'teacher') {
      h += '<section class="card"><h3 style="margin-top:0">👩‍🏫 Teach on Shaheen</h3>' +
        '<div class="btn-row"><button class="btn btn-gold" data-v2action="instant-class">⚡ Start instant class</button>' +
        '<a class="btn btn-outline" href="#/account">Schedule a class</a></div>' +
        '<p class="small muted" style="margin:10px 0 0">Instant classes open a demo classroom right away.</p></section>';
    }
    var mine = customClasses();
    if (mine.length) {
      h += '<h2>Scheduled on this device</h2>';
      mine.forEach(function (c) { h += classCard(c); });
    }
    h += '<h2>Upcoming classes</h2>';
    seedClasses().forEach(function (c) { h += classCard(c); });
    h += '<p class="demo-note">Demo schedule — classes are simulated for this prototype.</p>';
    return h;
  }

  /* ----- Role dashboards: new '#/account' route view ----- */
  function vAccount() {
    var u = currentUser();
    if (!u) {
      return '<h1 class="page-title">👤 My Account</h1>' +
        '<section class="card empty"><span class="big" aria-hidden="true">🔐</span>' +
        '<h2>Join Shaheen Academy</h2>' +
        '<p>Create a free demo account as a Student, Teacher, or Parent to unlock dashboards and live classes.</p>' +
        '<button class="btn btn-primary" data-v2action="auth-open">Join / Sign in</button>' +
        '<p class="demo-note">Demo prototype — your details stay on this device.</p></section>';
    }
    var r = ROLES[u.role] || ROLES.student;
    var initial = ((u.name || 'S').trim().charAt(0) || 'S').toUpperCase();
    var h = '<h1 class="page-title">👤 My Account</h1>' +
      '<section class="card"><div class="acct-head">' +
        '<span class="auth-avatar big" aria-hidden="true">' + esc(initial) + '</span>' +
        '<div><h3 style="margin:0">' + esc(u.name) + '</h3>' +
        '<p class="muted small" style="margin:2px 0 0">' + esc(u.email) + ' · ' +
        '<span class="badge ' + r.badge + '">' + esc(r.label) + '</span></p></div></div>' +
      '<div class="btn-row"><button class="btn btn-outline" data-v2action="auth-signout">Sign out</button></div></section>';
    if (u.role === 'teacher') h += teacherPanel(u);
    else if (u.role === 'parent') h += parentPanel();
    else h += studentPanel();
    return h;
  }

  function teacherPanel(u) {
    var mine = customClasses().filter(function (c) { return c.by === u.email; });
    var h = '<section class="card"><h2 style="margin-top:0">👩‍🏫 Teach on Shaheen</h2>' +
      '<p class="small muted">Schedule a live class — it appears in Live Classes on this device (demo).</p>' +
      '<form data-v2form="create-class">' +
      '<label class="v2-label" for="cc-title">Class title</label>' +
      '<input class="v2-input" id="cc-title" name="title" type="text" maxlength="80" placeholder="e.g. Class 9 Chemistry — Chapter 1" required>' +
      '<label class="v2-label" for="cc-subject">Subject</label>' +
      '<input class="v2-input" id="cc-subject" name="subject" type="text" maxlength="40" placeholder="e.g. Chemistry" required>' +
      '<label class="v2-label" for="cc-when">Date &amp; time</label>' +
      '<input class="v2-input" id="cc-when" name="when" type="datetime-local" required>' +
      '<label class="v2-label" for="cc-seats">Seats</label>' +
      '<input class="v2-input" id="cc-seats" name="seats" type="number" min="1" max="1000" value="50">' +
      '<button class="btn btn-gold btn-block" type="submit" style="margin-top:14px">➕ Create class</button>' +
      '</form></section>';
    if (mine.length) {
      h += '<h2>My scheduled classes</h2>';
      mine.forEach(function (c) { h += classCard(c); });
    }
    return h;
  }

  function handleCreateClass(form) {
    var u = currentUser();
    if (!u) { openAuth('signup', 'Please join / sign in first.'); return; }
    var title = ((form.title && form.title.value) || '').trim();
    var subject = ((form.subject && form.subject.value) || '').trim();
    var when = form.when && form.when.value ? new Date(form.when.value).getTime() : NaN;
    var seats = form.seats ? parseInt(form.seats.value, 10) : 50;
    if (!title || !subject || isNaN(when)) return; // native `required` handles messaging
    if (!(seats > 0)) seats = 50;
    var arr = customClasses();
    arr.unshift({ id: 'c-' + Date.now(), title: title.slice(0, 80), subject: subject.slice(0, 40),
      teacher: u.name, by: u.email, at: when, seats: Math.min(seats, 1000), enrolled: 0 });
    saveCustomClasses(arr);
    rerender();
  }

  function parentPanel() {
    var kids = lsGet(CHILD_KEY, []);
    if (!Array.isArray(kids)) kids = [];
    // Demo: a child's progress mirrors this device's learning progress
    // (the v1 engine stores it under 'shaheen-v1').
    var prog = lsGet('shaheen-v1', null);
    var xp = (prog && typeof prog.xp === 'number') ? prog.xp : 0;
    var lessons = (prog && prog.read && typeof prog.read === 'object') ? Object.keys(prog.read).length : 0;
    var streak = (prog && prog.streak && typeof prog.streak.count === 'number') ? prog.streak.count : 0;
    var h = '<section class="card"><h2 style="margin-top:0">👪 Parent dashboard</h2>' +
      '<p class="small muted">Add your children and follow their learning. ' +
      '<strong>Demo:</strong> progress shown is from this device.</p>' +
      '<form data-v2form="add-child" class="row-form">' +
      '<input class="v2-input" name="child" type="text" maxlength="40" placeholder="Child\'s name" required aria-label="Child\'s name">' +
      '<button class="btn btn-primary" type="submit">Add</button></form>';
    if (!kids.length) {
      h += '<p class="muted" style="margin:12px 0 0">No children added yet.</p>';
    } else {
      h += '<div class="kid-list">';
      kids.forEach(function (k, i) {
        h += '<div class="kid-card">' +
          '<span class="auth-avatar" aria-hidden="true">' + esc(String(k).charAt(0).toUpperCase()) + '</span>' +
          '<div class="kid-body"><strong>' + esc(k) + '</strong>' +
          '<p class="small muted" style="margin:2px 0 0">⭐ ' + xp + ' XP · 📄 ' + lessons +
          ' lessons · 🔥 ' + streak + ' day streak <span class="demo-tag">demo</span></p></div>' +
          '<button class="icon-btn" data-v2action="remove-child" data-i="' + i + '" aria-label="Remove ' + esc(k) + '">✕</button></div>';
      });
      h += '</div>';
    }
    return h + '</section>';
  }

  function studentPanel() {
    var ids = enrollments();
    var h = '<section class="card"><h2 style="margin-top:0">🎒 My upcoming classes</h2>';
    if (!ids.length) {
      h += '<p class="muted">You are not enrolled in any live class yet.</p>' +
        '<a class="btn btn-primary" href="#/live">Browse live classes</a>';
    } else {
      ids.forEach(function (id) {
        var c = findClass(id);
        if (c) h += classCard(c);
      });
    }
    return h + '</section>';
  }

  /* ---------------- 5. Mockup classroom ----------------
     PROTOTYPE: video placeholder, local-only chat, raise-hand toggle.
     No real video/audio, nothing leaves the device. */
  var roomState = null; // { classId, hand, msgs: [{from, role, text, t}] }

  function openRoom(id) {
    var c = findClass(id);
    if (!c) return;
    var u = currentUser();
    roomState = {
      classId: id,
      hand: false,
      msgs: [
        { from: c.teacher || 'Teacher', role: 'teacher',
          text: 'Welcome everyone! 👋 We will begin in a minute.', t: Date.now() - 120000 },
        { from: 'Areeba', role: 'student', text: 'Assalam o Alaikum!', t: Date.now() - 60000 },
        { from: c.teacher || 'Teacher', role: 'teacher',
          text: 'Walaikum Assalam. Please keep your mics muted (demo).', t: Date.now() - 30000 }
      ]
    };
    var m = getModalRoot();
    if (!m) return;
    var who = u ? u.name + ' (' + ((ROLES[u.role] || {}).label || 'Student') + ')' : 'Guest';
    m.innerHTML =
      '<div class="modal-backdrop room-backdrop" data-v2action="room-bg">' +
      '<div class="room" role="dialog" aria-modal="true" aria-label="Demo classroom">' +
        '<div class="room-head">' +
          '<span class="live-dot" aria-hidden="true"></span><span class="live-text">LIVE · demo</span>' +
          '<span class="room-title">' + esc(c.title) + '</span>' +
          '<button class="btn btn-outline btn-sm" data-v2action="room-leave">Leave</button>' +
        '</div>' +
        '<div class="room-video"><div class="room-video-inner">' +
          '<span class="room-video-icon" aria-hidden="true">📡</span>' +
          '<p><strong>Live class will appear here (demo)</strong></p>' +
          '<p class="small">' + esc(c.teacher || 'Teacher') + ' · ' + esc(c.subject || 'General') + '</p>' +
        '</div></div>' +
        '<div class="room-chat" id="room-chat" aria-live="polite"></div>' +
        '<form class="room-form" data-v2form="chat">' +
          '<input class="v2-input" name="msg" type="text" maxlength="200" placeholder="Type a message…" autocomplete="off" aria-label="Chat message">' +
          '<button class="btn btn-primary" type="submit">Send</button>' +
        '</form>' +
        '<div class="room-actions">' +
          '<button class="btn btn-outline" id="hand-btn" data-v2action="room-hand" aria-pressed="false">✋ Raise hand</button>' +
        '</div>' +
        '<p class="demo-note">Demo classroom — prototype only. No real video or audio. Signed in as ' + esc(who) + '.</p>' +
      '</div></div>';
    document.body.classList.add('modal-open');
    paintChat();
  }

  function paintChat() {
    var box = $('room-chat');
    if (!box || !roomState) return;
    box.innerHTML = roomState.msgs.map(function (m) {
      var cls = m.role === 'teacher' ? 'chat-teacher'
              : m.role === 'you' ? 'chat-you'
              : m.role === 'sys' ? 'chat-sys' : 'chat-student';
      return '<div class="chat-msg ' + cls + '"><span class="chat-from">' + esc(m.from) +
             '</span><span class="chat-text">' + esc(m.text) + '</span></div>';
    }).join('');
    box.scrollTop = box.scrollHeight;
  }

  function sendChat(form) {
    var text = ((form.msg && form.msg.value) || '').trim();
    if (!text || !roomState) return;
    var u = currentUser();
    roomState.msgs.push({ from: 'You' + (u ? ' (' + u.name + ')' : ''),
                          role: 'you', text: text.slice(0, 200), t: Date.now() });
    form.msg.value = '';
    paintChat();
  }

  function toggleHand(btn) {
    if (!roomState) return;
    roomState.hand = !roomState.hand;
    btn.setAttribute('aria-pressed', roomState.hand ? 'true' : 'false');
    btn.textContent = roomState.hand ? '✋ Hand raised — tap to lower' : '✋ Raise hand';
    btn.classList.toggle('btn-gold', roomState.hand);
    btn.classList.toggle('btn-outline', !roomState.hand);
    roomState.msgs.push({ from: 'System', role: 'sys',
      text: roomState.hand ? 'You raised your hand ✋' : 'You lowered your hand.', t: Date.now() });
    paintChat();
  }

  // Teacher-only: creates an instant demo room and opens it.
  function startInstantClass() {
    var u = currentUser();
    if (!u || u.role !== 'teacher') return;
    var arr = customClasses();
    var c = { id: 'instant-' + Date.now(), title: 'Instant class by ' + u.name,
      subject: 'General', teacher: u.name, by: u.email, at: Date.now(),
      seats: 100, enrolled: 0, instant: true };
    arr.unshift(c);
    saveCustomClasses(arr);
    openRoom(c.id);
  }

  /* ---------------- 6. Events (document-level; engine untouched) ---------------- */
  document.addEventListener('click', function (ev) {
    // Close the header dropdown on outside clicks.
    var menu = $('auth-menu');
    if (menu && !menu.hidden && !ev.target.closest('#auth-user')) {
      menu.hidden = true;
    }

    var el = ev.target.closest('[data-v2action]');
    if (!el) return;
    var a = el.getAttribute('data-v2action');

    if (a === 'auth-open') { openAuth('signup', ''); }
    else if (a === 'auth-tab') { authTab = el.getAttribute('data-tab'); renderAuthModal(); }
    else if (a === 'auth-role') { authRole = el.getAttribute('data-role'); renderAuthModal(); }
    else if (a === 'modal-close') { closeModal(); }
    else if (a === 'modal-backdrop') { if (ev.target === el) closeModal(); }
    else if (a === 'auth-menu') {
      var mm = $('auth-menu');
      if (mm) {
        mm.hidden = !mm.hidden;
        el.setAttribute('aria-expanded', String(!mm.hidden));
      }
    }
    else if (a === 'auth-menu-link') { var mm2 = $('auth-menu'); if (mm2) mm2.hidden = true; }
    else if (a === 'auth-signout') { signOut(); }
    else if (a === 'enroll-need-auth') { location.hash = '#/login?next=' + encodeURIComponent('#/live'); }
    else if (a === 'enroll') {
      if (!currentUser()) { openAuth('signup', 'Please join / sign in to enroll.'); return; }
      enroll(el.getAttribute('data-id'));
      rerender();
    }
    else if (a === 'room-open') { openRoom(el.getAttribute('data-id')); }
    else if (a === 'room-leave') { roomState = null; closeModal(); }
    else if (a === 'room-bg') { if (ev.target === el) { roomState = null; closeModal(); } }
    else if (a === 'room-hand') { toggleHand(el); }
    else if (a === 'instant-class') { startInstantClass(); }
    else if (a === 'remove-child') {
      var kids = lsGet(CHILD_KEY, []);
      var i = parseInt(el.getAttribute('data-i'), 10);
      if (Array.isArray(kids) && !isNaN(i) && i >= 0 && i < kids.length) {
        kids.splice(i, 1);
        lsSet(CHILD_KEY, kids);
        rerender();
      }
    }
  });

  document.addEventListener('submit', function (ev) {
    var form = ev.target.closest('[data-v2form]');
    if (!form) return;
    ev.preventDefault();
    var kind = form.getAttribute('data-v2form');
    if (kind === 'auth') handleAuthSubmit(form);
    else if (kind === 'create-class') handleCreateClass(form);
    else if (kind === 'add-child') {
      var name = ((form.child && form.child.value) || '').trim().slice(0, 40);
      if (name) {
        var kids = lsGet(CHILD_KEY, []);
        if (!Array.isArray(kids)) kids = [];
        kids.push(name);
        lsSet(CHILD_KEY, kids);
      }
      rerender();
    }
    else if (kind === 'chat') sendChat(form);
  });

  document.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Escape') return;
    var menu = $('auth-menu');
    if (menu && !menu.hidden) { menu.hidden = true; return; }
    closeModal();
  });

  /* ---------------- 7. Boot (runs before the engine) ---------------- */
  renderDate();
  renderLocation();
  renderAuthArea();
  setInterval(renderDate, 60000); // keep the date correct past midnight

  window.__saV2 = {
    vLive: vLive,
    vAccount: vAccount,
    afterRender: function (route) {
      if (route === 'home' || !route) injectVisitorCard();
      renderAuthArea(); // keep the header chip in sync after navigation
    },
    openAuth: openAuth,
    currentUser: currentUser,
    // v3: lets the dedicated #/login page sync the module-level auth
    // tab/role before its form submits through the shared handler.
    setAuth: function (tab, role) {
      authTab = (tab === 'signin') ? 'signin' : 'signup';
      if (role === 'student' || role === 'teacher' || role === 'parent') authRole = role;
    }
  };
})();
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
    else if (p[0] === 'live')               html = (window.__saV2 && window.__saV2.vLive) ? window.__saV2.vLive() : vNotFound();
    else if (p[0] === 'account')            html = (window.__saV2 && window.__saV2.vAccount) ? window.__saV2.vAccount() : vNotFound();
    else if (p[0] === 'about')              html = (window.__saV3 && window.__saV3.vAbout) ? window.__saV3.vAbout() : vNotFound();
    else if (p[0] === 'contact')            html = (window.__saV3 && window.__saV3.vContact) ? window.__saV3.vContact() : vNotFound();
    else if (p[0] === 'login')              html = (window.__saV3 && window.__saV3.vLogin) ? window.__saV3.vLogin(r.query || {}) : vNotFound();
    else if (p[0] === 'blog')               html = (window.__saV3 && window.__saV3.vBlog) ? window.__saV3.vBlog(p[1] || null, r.query || {}) : vNotFound();
    else                                    html = vNotFound();

    appEl.innerHTML = html;
    window.scrollTo(0, 0);
    syncNav(p[0]);
    // v2 hook: injects the visitor card on home, keeps the header auth chip in sync.
    if (window.__saV2 && window.__saV2.afterRender) { try { window.__saV2.afterRender(p[0]); } catch (e) {} }
    // v3 hook: home blog teasers; login page keeps auth state synced.
    if (window.__saV3 && window.__saV3.afterRender) { try { window.__saV3.afterRender(p[0], r.query || {}); } catch (e) {} }
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
/* ============================================================
   Shaheen Academy — v3 pages (front-end only)
   Added 2026-10-18. Self-contained IIFE appended AFTER the
   engine. Exposes window.__saV3 = { vAbout, vContact, vLogin,
   vBlog, afterRender }, consumed by the engine router:
     #/about, #/contact, #/login, #/blog, #/blog/<post-id>
   The login page REUSES the v2 auth logic: its form carries
   data-v2form="auth" so the v2 submit handler processes it, and
   this module syncs the v2 module-level auth tab/role via the
   __saV2.setAuth() bridge before submit. Auth remains a
   localStorage-only demo prototype.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- tiny helpers (self-contained) ---------------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  function $(id) { return document.getElementById(id); }

  function saV2() { return window.__saV2 || null; }
  function currentUser() {
    var v = saV2();
    return (v && v.currentUser) ? v.currentUser() : null;
  }
  // Re-run the engine router (it listens for 'hashchange').
  function rerender() {
    try { window.dispatchEvent(new Event('hashchange')); } catch (e) {}
  }

  /* ---------------- blog data ---------------- */
  function blogPosts() {
    return Array.isArray(window.SHAHEEN_BLOG) ? window.SHAHEEN_BLOG : [];
  }
  function findPost(id) {
    var posts = blogPosts();
    for (var i = 0; i < posts.length; i++) {
      if (posts[i] && posts[i].id === id) return posts[i];
    }
    return null;
  }
  function blogCats() {
    var seen = {}, cats = [];
    blogPosts().forEach(function (p) {
      if (p && p.category && !seen[p.category]) { seen[p.category] = 1; cats.push(p.category); }
    });
    return cats;
  }
  function fmtPostDate(iso) {
    try {
      var d = new Date(iso + 'T00:00:00');
      return d.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
    } catch (e) { return iso || ''; }
  }

  /* ---------------- live site stats (computed from data files) ---------------- */
  function siteStats() {
    var s = { courses: 0, chapters: 0, lessons: 0, mcqs: 0 };
    try {
      var T = window.SHAHEEN_TRACKS || {};
      Object.keys(T).forEach(function (tk) {
        var cs = (T[tk] && T[tk].courses) || [];
        cs.forEach(function (c) {
          s.courses++;
          (c.chapters || []).forEach(function (ch) {
            if (ch.comingSoon) return; // honest counting: only real chapters
            s.chapters++;
            s.lessons += (ch.lessons || []).length;
            s.mcqs += (ch.quiz || []).length;
          });
        });
      });
    } catch (e) { /* keep zeros */ }
    return s;
  }
  function fmtNum(n) {
    try { return Number(n).toLocaleString('en-US'); } catch (e) { return String(n); }
  }

  /* ---------------- 1. About ---------------- */
  function vAbout() {
    var st = siteStats();
    var h = '<h1 class="page-title">🦅 About Shaheen Academy</h1>' +
      '<p class="page-sub">Learn Without Limits</p>' +

      '<section class="card"><h2 style="margin-top:0">Our mission</h2>' +
      '<p><strong>Shaheen Academy exists so that every learner in Pakistan — and every Urdu speaker worldwide — can learn without limits.</strong> ' +
      'Quality education should not depend on where you live or what you can pay. That is why everything here is <strong>free, forever</strong>: ' +
      'full courses, lessons, quizzes, and certificates, on any phone, even offline after your first visit.</p>' +
      '<p>The <em>Shaheen</em> — the falcon — is Allama Iqbal’s timeless symbol of the high-aspiring soul: it flies above the ordinary, ' +
      'sees far, and never settles for less than its best. We named this academy after it because that is exactly what we want every ' +
      'student, teacher, and parent here to become.</p></section>' +

      '<section class="card"><h2 style="margin-top:0">What you’ll find here</h2>' +
      '<div class="about-tracks">' +
        '<a class="card-link" href="#/track/school"><div class="card about-mini"><span class="big" aria-hidden="true">🏫</span><h3>School</h3><p class="small muted">Complete Class 1–12 curriculum on the Punjab Board syllabus — lessons and quizzes chapter by chapter.</p></div></a>' +
        '<a class="card-link" href="#/track/testprep"><div class="card about-mini"><span class="big" aria-hidden="true">🎯</span><h3>Test Prep</h3><p class="small muted">MDCAT, ECAT, and CSS — MCQ banks with explanations, revision notes, and exam strategy.</p></div></a>' +
        '<a class="card-link" href="#/track/skills"><div class="card about-mini"><span class="big" aria-hidden="true">💼</span><h3>Skills</h3><p class="small muted">Web development, Python, freelancing, and digital marketing — practical skills for earning.</p></div></a>' +
      '</div>' +
      '<p class="small" style="margin-top:12px"><a href="#/live">🎥 Live Classes</a> · <a href="#/blog">✍️ Blog</a> — learn live with teachers and read exam guides.</p></section>' +

      '<section class="card"><h2 style="margin-top:0">The library, right now</h2>' +
      '<div class="stat-grid">' +
        '<div class="stat-card"><div class="stat-num">' + fmtNum(st.courses) + '</div><div class="stat-label">courses</div></div>' +
        '<div class="stat-card"><div class="stat-num">' + fmtNum(st.lessons) + '</div><div class="stat-label">lessons</div></div>' +
        '<div class="stat-card"><div class="stat-num">' + fmtNum(st.mcqs) + '</div><div class="stat-label">practice questions</div></div>' +
        '<div class="stat-card"><div class="stat-num">🔥 XP</div><div class="stat-label">levels &amp; streaks</div></div>' +
      '</div>' +
      '<p class="small muted" style="margin-bottom:0">Counts are computed live from the course library — and the library keeps growing.</p></section>' +

      '<section class="card honesty"><h2 style="margin-top:0">Our honest promise</h2>' +
      '<ul class="tight-list">' +
      '<li><strong>Free forever.</strong> No fees, no paywalls, no premium tiers.</li>' +
      '<li><strong>Certificates are completion awards.</strong> They celebrate your effort; they are internal awards of Shaheen Academy and <strong>not</strong> an official board, university, HEC, or government accreditation.</li>' +
      '<li><strong>“Coming soon” means coming soon.</strong> Chapters still being written are clearly labelled — never faked.</li>' +
      '<li><strong>Your data stays yours.</strong> Progress and demo accounts live on your own device; we run no tracking.</li>' +
      '</ul></section>';
    return h;
  }

  /* ---------------- 2. Contact + FAQ ---------------- */
  var FAQS = [
    ['Is Shaheen Academy really free?', 'Yes — completely and permanently. Every course, lesson, quiz, live class listing, and certificate costs nothing. There are no accounts to pay for and no premium tiers.'],
    ['Do I need an account to learn?', 'No. You can study every lesson and take every quiz without signing in. The optional demo account (Student, Teacher, or Parent) unlocks dashboards, class enrolment, and teacher tools — and it lives only on your own device.'],
    ['Are the certificates officially recognised?', 'No, and we will never claim otherwise. Certificates are internal completion awards that celebrate your effort. They are not board, university, HEC, or government accreditation.'],
    ['How do live classes work?', 'Teachers publish a class schedule under Live Classes. Enrol in any class with a free demo account, then join at class time. The classroom is currently a prototype — a demo video area, chat, and raise-hand — while real video classes are being built.'],
    ['Which curriculum does the school section follow?', 'The school track follows the Punjab Board / Single National Curriculum chapter structure for Classes 1–12. Core exam classes (9 and 10) carry full lessons and quizzes; other classes are being filled chapter by chapter and are honestly marked “coming soon”.'],
    ['Is my personal data safe?', 'Your learning progress and any demo account details are stored in your own browser’s local storage — on your device only. We run no analytics tracking and nothing is sent to any server.']
  ];

  function vContact() {
    var h = '<h1 class="page-title">✉️ Contact Us</h1>' +
      '<p class="page-sub">Questions, feedback, or ideas — we’d love to hear from you.</p>' +
      '<section class="card"><h2 style="margin-top:0">Send a message</h2>' +
      '<p class="small muted">This opens <strong>your own email app</strong> with the message pre-filled — nothing is sent automatically, and we never see your address unless you press send.</p>' +
      '<form data-v3form="contact">' +
      '<label class="v2-label" for="c-name">Your name</label>' +
      '<input class="v2-input" id="c-name" name="name" type="text" maxlength="60" placeholder="e.g. Ali Raza" required autocomplete="name">' +
      '<label class="v2-label" for="c-email">Your email</label>' +
      '<input class="v2-input" id="c-email" name="email" type="email" maxlength="120" placeholder="you@example.com" required autocomplete="email">' +
      '<label class="v2-label" for="c-subject">Subject</label>' +
      '<input class="v2-input" id="c-subject" name="subject" type="text" maxlength="100" placeholder="e.g. Question about MDCAT prep" required>' +
      '<label class="v2-label" for="c-msg">Message</label>' +
      '<textarea class="v2-input v2-textarea" id="c-msg" name="message" rows="5" maxlength="2000" placeholder="Write your message…" required></textarea>' +
      '<button class="btn btn-primary btn-block" type="submit" style="margin-top:14px">📧 Open email app to send</button>' +
      '<p class="demo-note" id="contact-sent" hidden>✓ Your email app should now be open with the message ready — just press send there.</p>' +
      '</form></section>' +
      '<section class="card"><h2 style="margin-top:0">Frequently asked questions</h2>' +
      '<div class="faq">' +
      FAQS.map(function (f) {
        return '<details class="faq-item"><summary>' + esc(f[0]) + '</summary><p>' + esc(f[1]) + '</p></details>';
      }).join('') +
      '</div></section>';
    return h;
  }

  function handleContact(form) {
    var name = ((form.name && form.name.value) || '').trim().slice(0, 60);
    var email = ((form.email && form.email.value) || '').trim().slice(0, 120);
    var subject = ((form.subject && form.subject.value) || '').trim().slice(0, 100);
    var msg = ((form.message && form.message.value) || '').trim().slice(0, 2000);
    if (!name || !email || !subject || !msg) return; // native `required` handles messaging
    var body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + msg;
    // Open-email-app pattern: NO recipient is hardcoded; the visitor
    // addresses the message themselves in their own email app.
    try {
      window.location.href = 'mailto:?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    } catch (e) { /* best effort */ }
    var note = $('contact-sent');
    if (note) note.hidden = false;
  }

  /* ---------------- 3. Login page (reuses the v2 auth logic) ---------------- */
  var loginState = { tab: 'signup', role: 'student' }; // mirrors the v2 module state
  var pendingNext = null; // set when a guest is sent here; used after sign-in

  var LOGIN_ROLES = [
    { key: 'student', label: 'Student', icon: '🎒' },
    { key: 'teacher', label: 'Teacher', icon: '👩‍🏫' },
    { key: 'parent',  label: 'Parent',  icon: '👪' }
  ];
  var ROLE_BADGE = { student: 'badge-ok', teacher: 'badge-gold', parent: 'badge-soon' };
  var ROLE_LABEL = { student: 'Student', teacher: 'Teacher', parent: 'Parent' };

  // Keep the v2 module-level auth tab/role in sync so the shared
  // handleAuthSubmit() (triggered by data-v2form="auth") uses the
  // tab and role the visitor chose on THIS page.
  function syncAuthState() {
    var v = saV2();
    if (v && v.setAuth) v.setAuth(loginState.tab, loginState.role);
  }

  function validNext(n) {
    return (typeof n === 'string' && /^#\/(live|account|home|blog|progress|about|contact)/.test(n)) ? n : null;
  }

  function vLogin(query) {
    var u = currentUser();
    if (u) {
      // Logged in: leave pendingNext alone — the hashchange listener
      // consumes it for the post-login redirect.
      var initial = ((u.name || 'S').trim().charAt(0) || 'S').toUpperCase();
      return '<h1 class="page-title">🔐 Sign In</h1>' +
        '<section class="card"><div class="acct-head">' +
        '<span class="auth-avatar big" aria-hidden="true">' + esc(initial) + '</span>' +
        '<div><h3 style="margin:0">' + esc(u.name) + '</h3>' +
        '<p class="muted small" style="margin:2px 0 0">' + esc(u.email) + ' · ' +
        '<span class="badge ' + (ROLE_BADGE[u.role] || 'badge-ok') + '">' + esc(ROLE_LABEL[u.role] || 'Student') + '</span></p></div></div>' +
        '<p class="small muted">You are already signed in on this device.</p>' +
        '<div class="btn-row"><a class="btn btn-primary" href="#/account">My account</a>' +
        '<button class="btn btn-outline" data-v2action="auth-signout">Sign out</button></div></section>';
    }
    pendingNext = validNext(query && query.next);
    syncAuthState();
    var isSignup = loginState.tab === 'signup';
    var tabs =
      '<div class="tabs" role="tablist">' +
      '<button type="button" class="tab' + (isSignup ? ' active' : '') + '" data-v3action="login-tab" data-tab="signup" role="tab" aria-selected="' + isSignup + '">Create account</button>' +
      '<button type="button" class="tab' + (!isSignup ? ' active' : '') + '" data-v3action="login-tab" data-tab="signin" role="tab" aria-selected="' + (!isSignup) + '">Sign in</button>' +
      '</div>';
    var roles = '<div class="role-grid" role="radiogroup" aria-label="Choose your role">' +
      LOGIN_ROLES.map(function (r) {
        return '<button type="button" class="role-card' + (loginState.role === r.key ? ' selected' : '') + '"' +
          ' data-v3action="login-role" data-role="' + r.key + '" aria-pressed="' + (loginState.role === r.key) + '">' +
          '<span class="role-icon" aria-hidden="true">' + r.icon + '</span>' +
          '<span class="role-label">' + r.label + '</span></button>';
      }).join('') + '</div>';
    return '<h1 class="page-title">🔐 ' + (isSignup ? 'Create your account' : 'Welcome back') + '</h1>' +
      '<p class="page-sub">Join Shaheen Academy as a Student, Teacher, or Parent.</p>' +
      '<section class="card">' + tabs +
      '<form data-v2form="auth" novalidate style="margin-top:12px">' +
      '<div role="radiogroup" aria-label="Choose your role">' + roles + '</div>' +
      (isSignup
        ? '<label class="v2-label" for="login-name">Full name</label>' +
          '<input class="v2-input" id="login-name" name="name" type="text" maxlength="60" placeholder="e.g. Ali Raza" autocomplete="name">'
        : '') +
      '<label class="v2-label" for="login-email">Email</label>' +
      '<input class="v2-input" id="login-email" name="email" type="email" maxlength="120" placeholder="you@example.com" autocomplete="email">' +
      '<label class="v2-label" for="login-pass">Password</label>' +
      '<input class="v2-input" id="login-pass" name="password" type="password" maxlength="72" placeholder="••••••••" autocomplete="' + (isSignup ? 'new-password' : 'current-password') + '">' +
      '<div class="auth-error" id="auth-error" role="alert" hidden></div>' +
      '<button class="btn btn-primary btn-block" type="submit" style="margin-top:14px">' + (isSignup ? 'Create account' : 'Sign in') + '</button>' +
      '<p class="demo-note">Demo prototype — your details stay on this device.</p>' +
      '</form></section>';
  }

  /* ---------------- 4. Blog ---------------- */
  function vBlog(postId, query) {
    if (postId) return vBlogPost(postId);
    var cat = (query && query.cat) || '';
    var cats = blogCats();
    var posts = blogPosts().filter(function (p) { return !cat || p.category === cat; });
    var h = '<h1 class="page-title">✍️ Blog</h1>' +
      '<p class="page-sub">Exam guides, study science, and practical advice.</p>' +
      '<div class="cat-row" role="navigation" aria-label="Filter by category">' +
      '<a class="cat-chip' + (!cat ? ' active' : '') + '" href="#/blog">All</a>' +
      cats.map(function (c) {
        return '<a class="cat-chip' + (cat === c ? ' active' : '') + '" href="#/blog?cat=' + encodeURIComponent(c) + '">' + esc(c) + '</a>';
      }).join('') + '</div>';
    if (!posts.length) {
      h += '<section class="card empty"><span class="big" aria-hidden="true">📭</span>' +
        '<h2>No posts here yet</h2><p>Try another category.</p>' +
        '<a class="btn btn-primary" href="#/blog">All posts</a></section>';
      return h;
    }
    h += '<div class="blog-list">';
    posts.forEach(function (p) {
      h += '<a class="card-link" href="#/blog/' + esc(p.id) + '"><article class="card blog-card">' +
        '<span class="badge badge-gold">' + esc(p.category || 'General') + '</span>' +
        '<h3 class="blog-title">' + esc(p.title) + '</h3>' +
        '<p class="blog-meta">' + esc(fmtPostDate(p.date)) + '</p>' +
        '<p class="blog-excerpt">' + esc(p.excerpt) + '</p>' +
        '<span class="blog-read">Read →</span>' +
        '</article></a>';
    });
    return h + '</div>';
  }

  function vBlogPost(id) {
    var p = findPost(id);
    if (!p) {
      return '<h1 class="page-title">✍️ Blog</h1>' +
        '<section class="card empty"><span class="big" aria-hidden="true">🧭</span>' +
        '<h2>Post not found</h2><p>This article does not exist.</p>' +
        '<a class="btn btn-primary" href="#/blog">Back to blog</a></section>';
    }
    var related = blogPosts().filter(function (q) {
      return q && q.id !== p.id && q.category === p.category;
    }).slice(0, 3);
    var h = '<div class="breadcrumb"><a href="#/home">Home</a> › <a href="#/blog">Blog</a> › ' + esc(p.category || 'General') + '</div>' +
      '<article class="card post">' +
      '<span class="badge badge-gold">' + esc(p.category || 'General') + '</span>' +
      '<h1 class="post-title">' + esc(p.title) + '</h1>' +
      '<p class="post-meta">' + esc(fmtPostDate(p.date)) + ' · Shaheen Academy</p>' +
      '<p class="post-lede">' + esc(p.excerpt) + '</p>' +
      '<div class="post-body">' + (p.html || '') + '</div>' +
      '</article>' +
      '<a class="btn btn-outline" href="#/blog">← All articles</a>';
    if (related.length) {
      h += '<h2>Related reading</h2><div class="blog-list">';
      related.forEach(function (q) {
        h += '<a class="card-link" href="#/blog/' + esc(q.id) + '"><article class="card blog-card">' +
          '<span class="badge badge-gold">' + esc(q.category || 'General') + '</span>' +
          '<h3 class="blog-title">' + esc(q.title) + '</h3>' +
          '<p class="blog-excerpt">' + esc(q.excerpt) + '</p>' +
          '<span class="blog-read">Read →</span></article></a>';
      });
      h += '</div>';
    }
    return h;
  }

  /* ---------------- home blog teaser (injected after engine render) ---------------- */
  function injectBlogTeaser() {
    if ($('blog-teaser')) return; // already injected for this render
    var app = $('app');
    if (!app) return;
    var posts = blogPosts().slice(0, 2);
    if (!posts.length) return;
    var h = '<section class="card" id="blog-teaser" aria-label="From the blog">' +
      '<div class="teaser-head"><h2 style="margin:0">✍️ From the blog</h2>' +
      '<a class="small" href="#/blog">View all →</a></div>';
    posts.forEach(function (p) {
      h += '<a class="teaser-link" href="#/blog/' + esc(p.id) + '">' +
        '<strong>' + esc(p.title) + '</strong>' +
        '<span class="small muted">' + esc(p.category || '') + ' · ' + esc(fmtPostDate(p.date)) + '</span></a>';
    });
    app.insertAdjacentHTML('beforeend', h + '</section>');
  }

  /* ---------------- events (document-level; engine untouched) ---------------- */
  document.addEventListener('click', function (ev) {
    var el = ev.target.closest('[data-v3action]');
    if (!el) return;
    var a = el.getAttribute('data-v3action');
    if (a === 'login-tab') {
      loginState.tab = (el.getAttribute('data-tab') === 'signin') ? 'signin' : 'signup';
      syncAuthState();
      rerender();
    } else if (a === 'login-role') {
      var r = el.getAttribute('data-role');
      if (r === 'student' || r === 'teacher' || r === 'parent') loginState.role = r;
      syncAuthState();
      rerender();
    }
  });

  document.addEventListener('submit', function (ev) {
    var form = ev.target.closest('[data-v3form]');
    if (!form) return;
    ev.preventDefault();
    if (form.getAttribute('data-v3form') === 'contact') handleContact(form);
  });

  // Post-login redirect: after the shared auth handler signs the visitor
  // in, it re-renders the current route; this listener (registered after
  // the engine's) then sends them where they came from, if valid.
  window.addEventListener('hashchange', function () {
    var u = currentUser();
    if (u && pendingNext) {
      var dest = pendingNext;
      pendingNext = null;
      location.hash = dest;
    }
  });

  window.__saV3 = {
    vAbout: vAbout,
    vContact: vContact,
    vLogin: vLogin,
    vBlog: vBlog,
    afterRender: function (route) {
      if (route === 'home' || !route) injectBlogTeaser();
    }
  };
})();
