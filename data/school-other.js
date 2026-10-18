// Shaheen Academy — School track: Classes 1–8 and 11–12 (Punjab Board / SNC)
// MERGE: registers under the existing 'school' track without overwriting it.
window.SHAHEEN_TRACKS = window.SHAHEEN_TRACKS || {};
window.SHAHEEN_TRACKS['school'] = window.SHAHEEN_TRACKS['school'] || {meta:{id:'school', title:'School', urdu:'اسکول', tagline:'Punjab Board · Classes 1–12', icon:'🏫'}, courses:[]};
(function(){
var C = window.SHAHEEN_TRACKS['school'].courses;
// comingSoon chapter shorthand — honest placeholders, never fake lessons
function CS(id,title,urdu){return {id:id,title:title,urdu:urdu||'',comingSoon:true,lessons:[],quiz:[]};}

/* ================= CLASS 1 ================= */
C.push({id:'class1-english',title:'English',urdu:'انگریزی',class:'Class 1',icon:'📖',
desc:'The English alphabet, sounds and first words — reading and writing step by step.',
chapters:[
{id:'c1-eng-ch1',title:'The English Alphabet',urdu:'انگریزی حروفِ تہجی',comingSoon:false,
lessons:[
{id:'c1-eng-ch1-l1',title:'Big and Small Letters (A–M)',html:'<h3>Big and Small Letters (A–M)</h3><p>Every letter of the English alphabet has two forms: a <strong>capital (big) letter</strong> and a <strong>small letter</strong>. We write a capital letter at the start of a sentence and for names.</p><ul><li><strong>A a</strong> — as in <em>apple</em></li><li><strong>B b</strong> — as in <em>ball</em></li><li><strong>C c</strong> — as in <em>cat</em></li><li><strong>D d</strong> — as in <em>dog</em></li><li><strong>E e</strong> — as in <em>egg</em></li></ul><p>Say each letter aloud and trace it with your finger. Notice how the small letter sits on the line while the big letter is taller. Practice writing A–M in your notebook, one capital and one small letter for each.</p>'},
{id:'c1-eng-ch1-l2',title:'Letters N–Z and Their Sounds',html:'<h3>Letters N–Z and Their Sounds</h3><p>Now we finish the alphabet, from <strong>N to Z</strong>. Each letter also has a <strong>sound</strong> — the sound we hear at the start of a word.</p><ul><li><strong>N n</strong> — <em>nest</em> (nnn)</li><li><li><strong>O o</strong> — <em>orange</em> (o)</li><li><strong>P p</strong> — <em>pen</em> (p)</li><li><strong>Q q</strong> — <em>queen</em> (kw)</li><li><strong>R r</strong> — <em>rat</em> (rrr)</li><li><strong>S s</strong> — <em>sun</em> (sss)</li></ul><p>The alphabet has <strong>26 letters</strong> in total, from A to Z. Try this game: pick any object in your room and say which letter its name starts with. "Table" starts with T!</p>'}],
quiz:[
{q:'How many letters are in the English alphabet?',options:['20','24','26','28'],answer:2,explain:'The English alphabet has 26 letters, from A to Z.'},
{q:'Which letter comes after B?',options:['D','A','C','E'],answer:2,explain:'The alphabet goes A, B, C, D — so C comes after B.'},
{q:'The word "sun" starts with which letter?',options:['T','S','M','N'],answer:1,explain:'Sun starts with the letter S.'},
{q:'Which is the small letter of G?',options:['g','q','J','9'],answer:0,explain:'The small form of capital G is g.'},
{q:'Where do we use a capital letter?',options:['In the middle of a word','At the start of a sentence','At the end of a word','Never'],answer:1,explain:'We write a capital letter at the start of a sentence and for names.'}]},
CS('c1-eng-ch2','My Body','میرا جسم'),
CS('c1-eng-ch3','My Family','میرا خاندان'),
CS('c1-eng-ch4','Colours and Shapes','رنگ اور شکلیں'),
CS('c1-eng-ch5','Fruits and Animals','پھل اور جانور'),
CS('c1-eng-ch6','Rhymes and Poems','نظمیں')]});

C.push({id:'class1-urdu',title:'Urdu',urdu:'اردو',class:'Class 1',icon:'🖋️',
desc:'اردو حروفِ تہجی، دو اور تین حرفی الفاظ، اور پہلی نظمیں۔',
chapters:[
CS('c1-urd-ch1','حروفِ تہجی (الف سے ے)',''),
CS('c1-urd-ch2','دو حرفی الفاظ',''),
CS('c1-urd-ch3','تین حرفی الفاظ',''),
CS('c1-urd-ch4','جملے بنانا',''),
CS('c1-urd-ch5','نظمیں','')]});

C.push({id:'class1-math',title:'Mathematics',urdu:'ریاضی',class:'Class 1',icon:'🔢',
desc:'Counting, adding and subtracting — first steps with numbers.',
chapters:[
{id:'c1-math-ch1',title:'Counting and Numbers (1–20)',urdu:'گنتی اور اعداد',comingSoon:false,
lessons:[
{id:'c1-math-ch1-l1',title:'Counting from 1 to 10',html:'<h3>Counting from 1 to 10</h3><p>Numbers tell us <strong>how many</strong>. Let us count together: <strong>1, 2, 3, 4, 5, 6, 7, 8, 9, 10</strong>.</p><ul><li>Hold up your fingers and count them — you have 10 fingers!</li><li>Count the apples in a picture, one by one. Touch each apple as you say its number.</li><li>Count forward: 1 → 2 → 3. Count backward: 10 → 9 → 8.</li></ul><p>Remember: every number is <strong>one more</strong> than the number before it. 5 is one more than 4. 9 is one more than 8. Try counting your toys, your books and the steps you climb — numbers are everywhere!</p>'},
{id:'c1-math-ch1-l2',title:'Counting from 11 to 20',html:'<h3>Counting from 11 to 20</h3><p>After 10 we keep going: <strong>11, 12, 13, 14, 15, 16, 17, 18, 19, 20</strong>. Notice that all these numbers end in <strong>"teen"</strong> — except 11, 12 and 20.</p><ul><li><strong>11</strong> is ten and one more.</li><li><strong>15</strong> is ten and five more.</li><li><strong>20</strong> is two tens.</li></ul><p>Fun fact: 13, 14, 15, 16, 17, 18, 19 are called the <strong>teen numbers</strong>. Count 20 stars in the sky picture: first count 10, then 10 more. You did it — you can count to 20!</p>'}],
quiz:[
{q:'Which number comes after 7?',options:['6','8','9','5'],answer:1,explain:'Counting goes 6, 7, 8 — so 8 comes after 7.'},
{q:'How many fingers do you have on both hands?',options:['8','9','10','12'],answer:2,explain:'You have 5 fingers on each hand: 5 + 5 = 10.'},
{q:'Which number comes just before 15?',options:['13','14','16','12'],answer:1,explain:'Counting goes 13, 14, 15 — so 14 comes just before 15.'},
{q:'Which of these is a teen number?',options:['11','20','10','9'],answer:0,explain:'11 is a teen number. 10 and 20 are tens, not teens.'},
{q:'Count: 17, 18, 19, … what comes next?',options:['16','21','20','22'],answer:2,explain:'After 19 comes 20. Then we start a new ten.'}]},
CS('c1-math-ch2','Addition','جمع'),
CS('c1-math-ch3','Subtraction','تفریق'),
CS('c1-math-ch4','Shapes and Patterns','اشکال اور نمونے'),
CS('c1-math-ch5','Measurement','پیمائش')]});

C.push({id:'class1-gk',title:'General Knowledge',urdu:'واقفیتِ عامہ',class:'Class 1',icon:'🌍',
desc:'Myself, my family, my school — discovering the world around me.',
chapters:[
CS('c1-gk-ch1','Myself and My Body','میں اور میرا جسم'),
CS('c1-gk-ch2','My Family','میرا خاندان'),
CS('c1-gk-ch3','My School','میرا اسکول'),
CS('c1-gk-ch4','Animals','جانور'),
CS('c1-gk-ch5','Plants','پودے'),
CS('c1-gk-ch6','Food and Seasons','خوراک اور موسم')]});

C.push({id:'class1-isl',title:'Islamiat',urdu:'اسلامیات',class:'Class 1',icon:'🕌',
desc:'کلمۂ طیبہ، اللہ تعالیٰ کی نعمتیں، نماز اور اچھے اخلاق کی پہلی پہچان۔',
chapters:[
CS('c1-isl-ch1','کلمۂ طیبہ',''),
CS('c1-isl-ch2','اللہ تعالیٰ کی نعمتیں',''),
CS('c1-isl-ch3','نماز کی پہچان',''),
CS('c1-isl-ch4','مسنون دعائیں',''),
CS('c1-isl-ch5','اچھے اخلاق','')]});

/* ================= CLASS 2 ================= */
C.push({id:'class2-english',title:'English',urdu:'انگریزی',class:'Class 2',icon:'📖',
desc:'Sentences, naming words and action words — building first English skills.',
chapters:[
{id:'c2-eng-ch1',title:'Sentences',urdu:'جملے',comingSoon:false,
lessons:[
{id:'c2-eng-ch1-l1',title:'What Is a Sentence?',html:'<h3>What Is a Sentence?</h3><p>A <strong>sentence</strong> is a group of words that tells a complete idea. It always starts with a <strong>capital letter</strong> and ends with a <strong>full stop (.)</strong>.</p><ul><li>"The cat is big." — a sentence ✓</li><li>"cat big the" — not a sentence ✗ (the words are jumbled)</li><li>"I like mangoes." — a sentence ✓</li></ul><p>Read these and decide: "She runs fast." — Is it a sentence? Yes! It starts with a capital S, tells a complete idea, and ends with a full stop. Now write two sentences about yourself in your notebook.</p>'},
{id:'c2-eng-ch1-l2',title:'Naming Words (Nouns)',html:'<h3>Naming Words (Nouns)</h3><p>A <strong>noun</strong> is a naming word. It names a <strong>person, place, animal or thing</strong>.</p><ul><li><strong>Person:</strong> teacher, mother, Ali</li><li><strong>Place:</strong> school, park, Lahore</li><li><strong>Animal:</strong> cat, horse, sparrow</li><li><strong>Thing:</strong> book, ball, chair</li></ul><p>Every sentence needs a naming word. In "The dog barks", the naming word is <strong>dog</strong>. Look around your room and name 5 things — those are all nouns! Circle the nouns in your reading book.</p>'}],
quiz:[
{q:'Which of these is a sentence?',options:['runs fast dog','The dog runs fast.','dog the fast','fast runs'],answer:1,explain:'"The dog runs fast." starts with a capital letter, tells a complete idea and ends with a full stop.'},
{q:'A sentence ends with a…',options:['comma','question mark always','full stop','capital letter'],answer:2,explain:'A telling sentence ends with a full stop (.).'},
{q:'Which word is a naming word (noun)?',options:['run','quickly','teacher','and'],answer:2,explain:'"Teacher" names a person, so it is a noun.'},
{q:'Which of these is a place noun?',options:['cat','school','run','happy'],answer:1,explain:'"School" names a place, so it is a noun.'},
{q:'"Ali eats an apple." The naming words are…',options:['eats, an','Ali, apple','an, apple','Ali, eats'],answer:1,explain:'"Ali" names a person and "apple" names a thing — both are nouns.'}]},
CS('c2-eng-ch2','My School','میرا اسکول'),
CS('c2-eng-ch3','Action Words (Verbs)','کام والے الفاظ'),
CS('c2-eng-ch4','The Weather','موسم'),
CS('c2-eng-ch5','Good Habits','اچھی عادتیں'),
CS('c2-eng-ch6','Stories and Rhymes','کہانیاں اور نظمیں')]});

C.push({id:'class2-urdu',title:'Urdu',urdu:'اردو',class:'Class 2',icon:'🖋️',
desc:'الفاظ سازی، جملے، اور مزید نظمیں — اردو کی بنیادی مہارتیں۔',
chapters:[
CS('c2-urd-ch1','الفاظ سازی',''),
CS('c2-urd-ch2','مذکر و مؤنث',''),
CS('c2-urd-ch3','جملے اور پیرا گراف',''),
CS('c2-urd-ch4','نظمیں',''),
CS('c2-urd-ch5','کہانیاں','')]});

C.push({id:'class2-math',title:'Mathematics',urdu:'ریاضی',class:'Class 2',icon:'🔢',
desc:'Numbers to 100, place value, and the first multiplication tables.',
chapters:[
{id:'c2-math-ch1',title:'Numbers up to 100',urdu:'سو تک اعداد',comingSoon:false,
lessons:[
{id:'c2-math-ch1-l1',title:'Tens and Ones (Place Value)',html:'<h3>Tens and Ones (Place Value)</h3><p>Every two-digit number is made of <strong>tens</strong> and <strong>ones</strong>. The first digit tells how many tens, the second tells how many ones.</p><ul><li><strong>34</strong> = 3 tens + 4 ones = 30 + 4</li><li><strong>57</strong> = 5 tens + 7 ones = 50 + 7</li><li><strong>20</strong> = 2 tens + 0 ones</li></ul><p>Think of bundles of 10 sticks. 4 bundles and 6 loose sticks make <strong>46</strong>. The place of a digit changes its value: in 34, the 3 means thirty, not three!</p>'},
{id:'c2-math-ch1-l2',title:'Counting to 100',html:'<h3>Counting to 100</h3><p>Let us count in tens: <strong>10, 20, 30, 40, 50, 60, 70, 80, 90, 100</strong>. Each step adds one more ten.</p><ul><li>Count forward from 47: 48, 49, 50, 51…</li><li>Count backward from 100: 99, 98, 97…</li><li>Which is bigger, 68 or 86? Look at the tens digit first: 8 tens beats 6 tens, so <strong>86 is bigger</strong>.</li></ul><p>To compare two numbers, first compare the <strong>tens</strong>. If the tens are equal, compare the <strong>ones</strong>. Try it: 45 or 54? The tens say 5 > 4, so 54 wins!</p>'}],
quiz:[
{q:'In the number 72, what does the 7 stand for?',options:['7 ones','7 tens','70 ones','7 hundreds'],answer:1,explain:'In 72, the 7 is in the tens place: 7 tens = 70.'},
{q:'What is 4 tens + 9 ones?',options:['49','94','13','40'],answer:0,explain:'4 tens = 40, plus 9 ones = 49.'},
{q:'Which number is the biggest?',options:['56','65','59','60'],answer:1,explain:'65 has 6 tens, more than any other number here.'},
{q:'Count forward: 88, 89, 90, … what comes next?',options:['100','80','91','98'],answer:2,explain:'After 90 comes 91.'},
{q:'Which number has 0 ones?',options:['35','50','27','41'],answer:1,explain:'50 = 5 tens + 0 ones.'}]},
CS('c2-math-ch2','Addition','جمع'),
CS('c2-math-ch3','Subtraction','تفریق'),
CS('c2-math-ch4','Multiplication Tables','پہاڑے'),
CS('c2-math-ch5','Fractions (Half and Quarter)','کسریں'),
CS('c2-math-ch6','Measurement and Time','پیمائش اور وقت')]});

C.push({id:'class2-gk',title:'General Knowledge',urdu:'واقفیتِ عامہ',class:'Class 2',icon:'🌍',
desc:'My body, my neighbourhood, animals and plants — the world gets bigger.',
chapters:[
CS('c2-gk-ch1','My Body and Senses','میرا جسم اور حواس'),
CS('c2-gk-ch2','My Home and Neighbourhood','میرا گھر اور محلہ'),
CS('c2-gk-ch3','Animals and Their Homes','جانور اور ان کے گھر'),
CS('c2-gk-ch4','Plants Around Us','ہمارے اردگرد پودے'),
CS('c2-gk-ch5','Water and Air','پانی اور ہوا'),
CS('c2-gk-ch6','Good Habits','اچھی عادتیں')]});

C.push({id:'class2-isl',title:'Islamiat',urdu:'اسلامیات',class:'Class 2',icon:'🕌',
desc:'ایمان، نماز، دعائیں اور پیارے نبی ﷺ کی سیرت کے پہلے اسباق۔',
chapters:[
CS('c2-isl-ch1','ایمان اور کلمہ',''),
CS('c2-isl-ch2','نماز',''),
CS('c2-isl-ch3','مسنون دعائیں',''),
CS('c2-isl-ch4','سیرتِ نبوی ﷺ',''),
CS('c2-isl-ch5','اخلاقِ حسنہ','')]});

/* ================= CLASS 3 ================= */
C.push({id:'class3-english',title:'English',urdu:'انگریزی',class:'Class 3',icon:'📖',
desc:'Nouns, verbs and adjectives — describing the world in English.',
chapters:[
{id:'c3-eng-ch1',title:'Nouns',urdu:'اسم',comingSoon:false,
lessons:[
{id:'c3-eng-ch1-l1',title:'Naming Words',html:'<h3>Naming Words</h3><p>A <strong>noun</strong> names a person, place, animal or thing. Last year we learned the idea — now we sort nouns into groups.</p><ul><li><strong>Person:</strong> father, doctor, Fatima</li><li><strong>Place:</strong> mosque, market, Karachi</li><li><strong>Animal:</strong> goat, peacock, fish</li><li><strong>Thing:</strong> pen, table, mango</li></ul><p>Game: your teacher says a category, you name a noun in 3 seconds. "Animal!" — "…camel!" Nouns are the building blocks of every sentence, so spotting them quickly makes reading easier.</p>'},
{id:'c3-eng-ch1-l2',title:'Common and Proper Nouns',html:'<h3>Common and Proper Nouns</h3><p>Nouns come in two kinds. A <strong>common noun</strong> names any person, place or thing: <em>boy, city, river</em>. A <strong>proper noun</strong> names one special person, place or thing: <em>Ahmed, Lahore, River Indus</em>.</p><ul><li>Proper nouns always start with a <strong>capital letter</strong>: Monday, Pakistan, Eid.</li><li>Common nouns do not: day, country, festival.</li></ul><p>Try it: "girl" is common, "Ayesha" is proper. "school" is common, "City School" is proper. Rewrite these with capitals: <em>ali, ravi river, friday</em> → Ali, Ravi River, Friday.</p>'}],
quiz:[
{q:'Which of these is a proper noun?',options:['dog','Lahore','book','happy'],answer:1,explain:'"Lahore" names one special city, so it is a proper noun.'},
{q:'Proper nouns always begin with…',options:['a small letter','a capital letter','a full stop','a comma'],answer:1,explain:'Proper nouns always start with a capital letter.'},
{q:'Which pair shows common noun → proper noun?',options:['boy → Ahmed','city → town','river → water','day → night'],answer:0,explain:'"Boy" is common; "Ahmed" names one special boy, so it is proper.'},
{q:'Which word is a noun?',options:['quickly','beautiful','honesty','run'],answer:2,explain:'"Honesty" names a thing (a quality), so it is a noun.'},
{q:'"The teacher gave Ali a book." How many nouns are in this sentence?',options:['1','2','3','4'],answer:2,explain:'The nouns are teacher, Ali and book — three nouns.'}]},
CS('c3-eng-ch2','Verbs (Doing Words)','افعال'),
CS('c3-eng-ch3','Adjectives (Describing Words)','صفت'),
CS('c3-eng-ch4','My Country Pakistan','میرا ملک پاکستان'),
CS('c3-eng-ch5','Stories and Poems','کہانیاں اور نظمیں')]});

C.push({id:'class3-urdu',title:'Urdu',urdu:'اردو',class:'Class 3',icon:'🖋️',
desc:'اسم، فعل، اور صفت — اردو قواعد کی پہلی سیڑھی۔',
chapters:[
CS('c3-urd-ch1','اسم',''),
CS('c3-urd-ch2','فعل',''),
CS('c3-urd-ch3','صفت',''),
CS('c3-urd-ch4','نظمیں',''),
CS('c3-urd-ch5','کہانیاں','')]});

C.push({id:'class3-math',title:'Mathematics',urdu:'ریاضی',class:'Class 3',icon:'🔢',
desc:'Big numbers, the four operations, fractions and measurement.',
chapters:[
{id:'c3-math-ch1',title:'Numbers up to 10,000',urdu:'دس ہزار تک اعداد',comingSoon:false,
lessons:[
{id:'c3-math-ch1-l1',title:'Place Value: Thousands',html:'<h3>Place Value: Thousands</h3><p>Big numbers have a new place: <strong>thousands</strong>. Read a number from right to left: ones, tens, hundreds, <strong>thousands</strong>.</p><ul><li><strong>2,345</strong> = 2 thousands + 3 hundreds + 4 tens + 5 ones</li><li><strong>7,080</strong> = 7 thousands + 0 hundreds + 8 tens + 0 ones</li><li>The comma after the thousands makes big numbers easy to read: 9,876.</li></ul><p>The digit 5 in 5,214 means <strong>five thousand</strong>, but in 214 it would mean only five. Place value gives every digit its power!</p>'},
{id:'c3-math-ch1-l2',title:'Reading and Writing Big Numbers',html:'<h3>Reading and Writing Big Numbers</h3><p>To read a big number, say the thousands part first, then the rest: <strong>4,312</strong> is "four thousand, three hundred twelve".</p><ul><li>Write "six thousand, two hundred nine" in digits: <strong>6,209</strong>. The empty hundreds place gets a <strong>0</strong> — never leave it blank!</li><li>Which is bigger: 8,765 or 9,001? Compare the <strong>thousands</strong> first: 9 > 8, so 9,001 is bigger.</li><li>Order these: 3,456 — 5,012 — 2,999. Smallest to biggest: 2,999, 3,456, 5,012.</li></ul><p>Practice: write your house number, your school roll number and the year in digits and words.</p>'}],
quiz:[
{q:'In 6,482, what does the digit 6 stand for?',options:['6 hundreds','6 thousands','6 tens','6 ones'],answer:1,explain:'The 6 is in the thousands place: 6 thousands = 6,000.'},
{q:'Which number is "five thousand, three hundred seven"?',options:['5,370','5,037','5,307','53,07'],answer:2,explain:'Five thousand = 5,000, three hundred = 300, seven = 7. Total: 5,307.'},
{q:'Which is the biggest number?',options:['7,654','7,999','8,001','6,999'],answer:2,explain:'8,001 has 8 thousands — more than any number starting with 6 or 7.'},
{q:'What comes just after 9,999?',options:['9,990','10,000','9,991','10,009'],answer:1,explain:'9,999 + 1 = 10,000 — a new place, ten thousands!'},
{q:'Order from smallest to biggest: 4,321 — 3,999 — 5,000',options:['4,321, 3,999, 5,000','3,999, 4,321, 5,000','5,000, 4,321, 3,999','3,999, 5,000, 4,321'],answer:1,explain:'3,999 < 4,321 < 5,000. Always compare the thousands digit first.'}]},
CS('c3-math-ch2','Addition','جمع'),
CS('c3-math-ch3','Subtraction','تفریق'),
CS('c3-math-ch4','Multiplication','ضرب'),
CS('c3-math-ch5','Division','تقسیم'),
CS('c3-math-ch6','Fractions','کسریں'),
CS('c3-math-ch7','Measurement','پیمائش'),
CS('c3-math-ch8','Geometry','ہندسہ')]});

C.push({id:'class3-gk',title:'General Knowledge',urdu:'واقفیتِ عامہ',class:'Class 3',icon:'🌍',
desc:'Living things, matter, the Earth and our country Pakistan.',
chapters:[
CS('c3-gk-ch1','The Human Body','انسانی جسم'),
CS('c3-gk-ch2','Living and Non-living Things','جاندار اور بے جان'),
CS('c3-gk-ch3','Plants','پودے'),
CS('c3-gk-ch4','Animals','جانور'),
CS('c3-gk-ch5','Matter and Materials','مادہ'),
CS('c3-gk-ch6','The Earth and Sky','زمین اور آسمان'),
CS('c3-gk-ch7','Our Country Pakistan','ہمارا ملک پاکستان')]});

C.push({id:'class3-isl',title:'Islamiat',urdu:'اسلامیات',class:'Class 3',icon:'🕌',
desc:'توحید، نماز، روزہ اور سیرتِ نبوی ﷺ — ایمان کی بنیادیں۔',
chapters:[
CS('c3-isl-ch1','کلمۂ طیبہ اور ایمان',''),
CS('c3-isl-ch2','توحید',''),
CS('c3-isl-ch3','نماز',''),
CS('c3-isl-ch4','روزہ',''),
CS('c3-isl-ch5','سیرتِ نبوی ﷺ',''),
CS('c3-isl-ch6','اخلاقِ حسنہ','')]});
})();

(function(){
var C = window.SHAHEEN_TRACKS['school'].courses;
function CS(id,title,urdu){return {id:id,title:title,urdu:urdu||'',comingSoon:true,lessons:[],quiz:[]};}

/* ================= CLASS 4 ================= */
C.push({id:'class4-english',title:'English',urdu:'انگریزی',class:'Class 4',icon:'📖',
desc:'Nouns, pronouns and tenses — writing correct English sentences.',
chapters:[
{id:'c4-eng-ch1',title:'Nouns and Pronouns',urdu:'اسم اور ضمیر',comingSoon:false,
lessons:[
{id:'c4-eng-ch1-l1',title:'Kinds of Nouns',html:'<h3>Kinds of Nouns</h3><p>We already know nouns name people, places, animals and things. Now we learn their <strong>kinds</strong>.</p><ul><li><strong>Common noun:</strong> names any one — <em>girl, city, book</em>.</li><li><strong>Proper noun:</strong> names a special one and starts with a capital — <em>Ayesha, Multan, Quran</em>.</li><li><strong>Singular noun:</strong> names one — <em>apple</em>. <strong>Plural noun:</strong> names more than one — <em>apples</em>. Most plurals just add <strong>-s</strong>.</li></ul><p>Watch out for tricky plurals: <em>child → children, tooth → teeth, box → boxes</em>. Write the plural of: pen, mango, baby, knife. (pens, mangoes, babies, knives)</p>'},
{id:'c4-eng-ch1-l2',title:'Pronouns: Words That Replace Nouns',html:'<h3>Pronouns: Words That Replace Nouns</h3><p>A <strong>pronoun</strong> is a word we use <strong>instead of a noun</strong> so we do not repeat the name again and again.</p><ul><li><strong>Ali</strong> is my friend. <strong>He</strong> plays cricket. (He = Ali)</li><li><strong>Maryam</strong> lost <strong>her</strong> bag. (her = Maryam\'s)</li><li><strong>The books</strong> are new. <strong>They</strong> are on the table. (They = the books)</li></ul><p>The main pronouns: <strong>I, we, you, he, she, it, they</strong>. Without pronouns, sentences sound silly: "Ali said Ali will bring Ali\'s bat." With pronouns: "Ali said he will bring his bat." Much better!</p>'}],
quiz:[
{q:'Which word is a pronoun?',options:['Ali','she','Lahore','book'],answer:1,explain:'"She" is used instead of a noun, so it is a pronoun.'},
{q:'Choose the correct pronoun: "Sara is kind. ___ helps everyone."',options:['He','It','She','They'],answer:2,explain:'Sara is a girl, so we use "she".'},
{q:'What is the plural of "baby"?',options:['babys','babies','babyes','baby'],answer:1,explain:'For words ending in consonant + y, change y to i and add -es: babies.'},
{q:'Which noun is proper?',options:['river','River Indus','water','bridge'],answer:1,explain:'"River Indus" names one special river and starts with capitals.'},
{q:'"The cat drank ___ milk." Choose the pronoun.',options:['its','her','his','their'],answer:0,explain:'For an animal we use "its": the cat drank its milk.'}]},
CS('c4-eng-ch2','Verbs and Tenses','افعال اور زمانے'),
CS('c4-eng-ch3','Adjectives and Adverbs','صفت اور متعلق فعل'),
CS('c4-eng-ch4','Cleanliness and Health','صفائی اور صحت'),
CS('c4-eng-ch5','Stories of Kindness','مہربانی کی کہانیاں'),
CS('c4-eng-ch6','Letter Writing','خط نویسی')]});

C.push({id:'class4-urdu',title:'Urdu',urdu:'اردو',class:'Class 4',icon:'🖋️',
desc:'حمد، نعت، کہانیاں اور اردو قواعد — پڑھنے اور لکھنے کی مہارت۔',
chapters:[
CS('c4-urd-ch1','حمد',''),
CS('c4-urd-ch2','نعت',''),
CS('c4-urd-ch3','کہانیاں',''),
CS('c4-urd-ch4','مضمون نویسی',''),
CS('c4-urd-ch5','قواعد: اسم، فعل، صفت',''),
CS('c4-urd-ch6','خطوط','')]});

C.push({id:'class4-math',title:'Mathematics',urdu:'ریاضی',class:'Class 4',icon:'🔢',
desc:'Large numbers, factors, fractions, decimals and geometry.',
chapters:[
{id:'c4-math-ch1',title:'Numbers and Operations',urdu:'اعداد اور عملیات',comingSoon:false,
lessons:[
{id:'c4-math-ch1-l1',title:'Place Value up to Millions',html:'<h3>Place Value up to Millions</h3><p>Big numbers have periods: <strong>ones, thousands, millions</strong>. In the Pakistani system we group as ones, thousands, <strong>lakhs</strong> and <strong>crores</strong>.</p><ul><li><strong>5,43,210</strong> = 5 lakh + 43 thousand + 210. (1 lakh = 100,000)</li><li><strong>2,50,00,000</strong> = 2 crore + 50 lakh. (1 crore = 100 lakh = 10,000,000)</li><li>The digit 7 in 7,45,000 means <strong>7 lakh</strong>, but in 45,700 it means 7 hundred.</li></ul><p>Pakistan\'s population is about <strong>24 crore</strong> people — that is 240,000,000! Practice: write 8,75,420 in words.</p>'},
{id:'c4-math-ch1-l2',title:'Comparing and Ordering Numbers',html:'<h3>Comparing and Ordering Numbers</h3><p>To compare big numbers, follow these steps in order:</p><ul><li><strong>Step 1:</strong> Count the digits. More digits = bigger number. 98,765 (5 digits) beats 9,876 (4 digits).</li><li><strong>Step 2:</strong> If digits are equal, compare from the <strong>left</strong>. 6,54,321 vs 6,45,321 — both start with 6, but 5 > 4 in the ten-thousands place, so 6,54,321 is bigger.</li><li><strong>Step 3:</strong> Use the signs: <strong>></strong> greater than, <strong><</strong> less than, <strong>=</strong> equal to.</li></ul><p>Order smallest to biggest: 45,678 — 4,56,789 — 45,067. Answer: 45,067 < 45,678 < 4,56,789. The hungry crocodile mouth always opens toward the bigger number!</p>'}],
quiz:[
{q:'How much is 1 lakh?',options:['10,000','100,000','1,000,000','1,000'],answer:1,explain:'1 lakh = 100,000 (one hundred thousand).'},
{q:'In 3,45,678, what does the digit 3 stand for?',options:['3 thousand','3 hundred','3 lakh','3 crore'],answer:2,explain:'3 is in the lakh place: 3 lakh = 300,000.'},
{q:'Which number is the biggest?',options:['99,999','1,00,000','98,765','10,001'],answer:1,explain:'1,00,000 (one lakh) has 6 digits; the rest have 5 or fewer.'},
{q:'Fill in the sign: 5,43,210 ___ 5,34,210',options:['<','>','=','+'],answer:1,explain:'Compare left to right: 4 > 3 in the ten-thousands place, so 5,43,210 > 5,34,210.'},
{q:'How much is 1 crore?',options:['10 lakh','100 lakh','1,000 lakh','1 lakh'],answer:1,explain:'1 crore = 100 lakh = 10,000,000.'}]},
CS('c4-math-ch2','Factors and Multiples','عاد و اضعاف'),
CS('c4-math-ch3','Fractions','کسریں'),
CS('c4-math-ch4','Decimals','اعشاریے'),
CS('c4-math-ch5','Measurements','پیمائش'),
CS('c4-math-ch6','Geometry','ہندسہ'),
CS('c4-math-ch7','Data Handling','اعداد و شمار')]});

C.push({id:'class4-science',title:'General Science',urdu:'جنرل سائنس',class:'Class 4',icon:'🔬',
desc:'Living things, matter, energy and the Earth — science comes alive.',
chapters:[
CS('c4-sci-ch1','Characteristics and Life Processes of Living Things','جانداروں کی خصوصیات'),
CS('c4-sci-ch2','Ecosystems','ماحولیاتی نظام'),
CS('c4-sci-ch3','Human Health','انسانی صحت'),
CS('c4-sci-ch4','Matter and Its Characteristics','مادہ'),
CS('c4-sci-ch5','Forms of Energy','توانائی کی اقسام'),
CS('c4-sci-ch6','Sound','آواز'),
CS('c4-sci-ch7','Light','روشنی'),
CS('c4-sci-ch8','Electricity and Magnetism','بجلی اور مقناطیسیت'),
CS('c4-sci-ch9','The Earth and Its Resources','زمین')]});

C.push({id:'class4-isl',title:'Islamiat',urdu:'اسلامیات',class:'Class 4',icon:'🕌',
desc:'عقائد، عبادات اور سیرتِ نبوی ﷺ — دین کی بنیادی تعلیمات۔',
chapters:[
CS('c4-isl-ch1','توحید',''),
CS('c4-isl-ch2','رسالت',''),
CS('c4-isl-ch3','آخرت',''),
CS('c4-isl-ch4','نماز',''),
CS('c4-isl-ch5','روزہ اور زکوٰۃ',''),
CS('c4-isl-ch6','سیرتِ نبوی ﷺ','')]});

C.push({id:'class4-sst',title:'Social Studies',urdu:'معاشرتی علوم',class:'Class 4',icon:'🗺️',
desc:'Myself, my community, maps and the provinces of Pakistan.',
chapters:[
CS('c4-sst-ch1','Myself, My Family and Society','میں اور میرا معاشرہ'),
CS('c4-sst-ch2','Maps and Directions','نقشے اور سمتیں'),
CS('c4-sst-ch3','Provinces of Pakistan','پاکستان کے صوبے'),
CS('c4-sst-ch4','Our Culture','ہماری ثقافت')]});

/* ================= CLASS 5 ================= */
C.push({id:'class5-english',title:'English',urdu:'انگریزی',class:'Class 5',icon:'📖',
desc:'Tenses, paragraphs and stories — English for confident readers.',
chapters:[
{id:'c5-eng-ch1',title:'Tenses',urdu:'زمانے',comingSoon:false,
lessons:[
{id:'c5-eng-ch1-l1',title:'Simple Present Tense',html:'<h3>Simple Present Tense</h3><p>The <strong>simple present tense</strong> talks about things that happen <strong>regularly, always, or as facts</strong>.</p><ul><li>I <strong>go</strong> to school every day. (habit)</li><li>The sun <strong>rises</strong> in the east. (fact — notice the <strong>-s</strong> with he/she/it)</li><li>She <strong>plays</strong> cricket on Sundays.</li></ul><p><strong>Rule:</strong> with <em>he, she, it</em> or a singular noun, add <strong>-s</strong> to the verb: <em>he reads, she writes, Ali eats</em>. With <em>I, we, you, they</em>, no -s: <em>they read, we write</em>.</p>'},
{id:'c5-eng-ch1-l2',title:'Simple Past Tense',html:'<h3>Simple Past Tense</h3><p>The <strong>simple past tense</strong> talks about things that <strong>already happened</strong> — yesterday, last week, long ago.</p><ul><li>Regular verbs add <strong>-ed</strong>: play → <strong>played</strong>, wash → <strong>washed</strong>, study → <strong>studied</strong>.</li><li>Irregular verbs change completely: go → <strong>went</strong>, eat → <strong>ate</strong>, see → <strong>saw</strong>, write → <strong>wrote</strong>.</li><li>Signal words: <em>yesterday, last night, ago</em>. "We <strong>visited</strong> Lahore last month."</li></ul><p>Common mistake: never use <em>did</em> and <em>-ed</em> together. "Did you <strong>go</strong>?" is correct; "Did you <strong>went</strong>?" is wrong.</p>'}],
quiz:[
{q:'Choose the correct verb: "She ___ to school daily."',options:['go','goes','going','gone'],answer:1,explain:'With "she" (third person singular), add -s: she goes.'},
{q:'What is the past tense of "eat"?',options:['eated','eaten','ate','eating'],answer:2,explain:'"Eat" is irregular: eat → ate → eaten.'},
{q:'"They ___ football yesterday."',options:['play','plays','played','playing'],answer:2,explain:'"Yesterday" signals the past: played.'},
{q:'Which sentence is correct?',options:['Did you went there?','Did you go there?','Did you gone there?','Do you went there?'],answer:1,explain:'After "did", use the base verb: Did you go there?'},
{q:'"The sun ___ in the east."',options:['rise','rises','rose','rising'],answer:1,explain:'A universal fact in simple present: the sun rises (he/she/it + -s).'}]},
CS('c5-eng-ch2','Paragraph Writing','پیرا گراف نویسی'),
CS('c5-eng-ch3','The Prophet\'s ﷺ Kindness',''),
CS('c5-eng-ch4','Stories and Poems','کہانیاں اور نظمیں'),
CS('c5-eng-ch5','Letter and Application Writing','خطوط اور درخواستیں')]});

C.push({id:'class5-urdu',title:'Urdu',urdu:'اردو',class:'Class 5',icon:'🖋️',
desc:'حمد، نعت، افسانے اور مضمون نویسی — اردو ادب کا پہلا ذائقہ۔',
chapters:[
CS('c5-urd-ch1','حمد',''),
CS('c5-urd-ch2','نعت',''),
CS('c5-urd-ch3','افسانے',''),
CS('c5-urd-ch4','مضمون نویسی',''),
CS('c5-urd-ch5','قواعد',''),
CS('c5-urd-ch6','خطوط اور درخواستیں','')]});

C.push({id:'class5-math',title:'Mathematics',urdu:'ریاضی',class:'Class 5',icon:'🔢',
desc:'HCF and LCM, fractions, decimals, geometry and mensuration.',
chapters:[
{id:'c5-math-ch1',title:'Numbers and Operations',urdu:'اعداد اور عملیات',comingSoon:false,
lessons:[
{id:'c5-math-ch1-l1',title:'Reading Large Numbers',html:'<h3>Reading Large Numbers</h3><p>In Class 5 we read numbers up to <strong>crores</strong> in the Pakistani system: ones → thousands → <strong>lakhs</strong> → <strong>crores</strong>.</p><ul><li><strong>45,67,890</strong> = 45 lakh + 67 thousand + 890. Read: "forty-five lakh, sixty-seven thousand, eight hundred ninety".</li><li><strong>7,00,00,000</strong> = 7 crore. Zeros in the middle are silent but never skipped in writing!</li><li>International system uses <strong>millions</strong>: 45,67,890 = 4.567 million.</li></ul><p>Tip: put a finger after every two digits from the right (after the first three) to spot lakhs and crores: 4|56|78|90 → wait, that is not right! Group as: 45,67,890 — three digits for hundreds, then pairs.</p>'},
{id:'c5-math-ch1-l2',title:'Rounding Numbers',html:'<h3>Rounding Numbers</h3><p><strong>Rounding</strong> means replacing a number with a nearby simple number — useful for quick estimates.</p><ul><li><strong>Rule:</strong> look at the digit to the right of your rounding place. If it is <strong>5 or more, round up</strong>; if <strong>less than 5, round down</strong>.</li><li>Round 4,738 to the nearest hundred: the tens digit is 3 (< 5), so → <strong>4,700</strong>.</li><li>Round 4,768 to the nearest hundred: the tens digit is 6 (≥ 5), so → <strong>4,800</strong>.</li><li>Round 5,499 to the nearest thousand: hundreds digit is 4 (< 5) → <strong>5,000</strong>.</li></ul><p>Shopkeepers round prices, and engineers round measurements. Try: round your school\'s student count to the nearest hundred!</p>'}],
quiz:[
{q:'How do we read 12,34,567?',options:['Twelve million…','Twelve lakh thirty-four thousand…','One crore twenty-three lakh…','Twelve thousand…'],answer:1,explain:'12,34,567 = 12 lakh + 34 thousand + 567: "twelve lakh, thirty-four thousand, five hundred sixty-seven".'},
{q:'Round 7,649 to the nearest hundred.',options:['7,600','7,700','7,650','8,000'],answer:0,explain:'The tens digit is 4 (< 5), so round down: 7,600.'},
{q:'Round 8,951 to the nearest thousand.',options:['8,000','9,000','8,900','9,500'],answer:1,explain:'The hundreds digit is 9 (≥ 5), so round up: 9,000.'},
{q:'How much is 1 crore in the international system?',options:['1 million','10 million','100 million','1 billion'],answer:1,explain:'1 crore = 10,000,000 = 10 million.'},
{q:'In 9,08,765, how many lakhs are there?',options:['0','8','9','90'],answer:2,explain:'9,08,765 = 9 lakh + 8 thousand + 765.'}]},
CS('c5-math-ch2','HCF and LCM','ذواضعاف اقل و عادِ اعظم'),
CS('c5-math-ch3','Fractions','کسریں'),
CS('c5-math-ch4','Decimals','اعشاریے'),
CS('c5-math-ch5','Distance, Time and Temperature','فاصلہ، وقت اور درجۂ حرارت'),
CS('c5-math-ch6','Unitary Method','طریقۂ تناسب'),
CS('c5-math-ch7','Geometry','ہندسہ'),
CS('c5-math-ch8','Perimeter and Area','محیط اور رقبہ'),
CS('c5-math-ch9','Volume','حجم')]});

C.push({id:'class5-science',title:'General Science',urdu:'جنرل سائنس',class:'Class 5',icon:'🔬',
desc:'Living organisms, matter, energy, Earth and space — real science begins.',
chapters:[
{id:'c5-sci-ch1',title:'Classification of Living Organisms',urdu:'جانداروں کی درجہ بندی',comingSoon:false,
lessons:[
{id:'c5-sci-ch1-l1',title:'Living and Non-living Things',html:'<h3>Living and Non-living Things</h3><p>Scientists first divide everything into <strong>living</strong> and <strong>non-living</strong>. Living things show the signs of life:</p><ul><li><strong>Movement:</strong> animals walk, plants turn toward light.</li><li><strong>Growth:</strong> a seed becomes a tree, a baby becomes an adult.</li><li><strong>Need for food and water:</strong> all living things need energy.</li><li><strong>Breathing:</strong> animals breathe air, plants exchange gases through leaves.</li><li><strong>Reproduction:</strong> living things make more of their own kind.</li><li><strong>Response:</strong> a mimosa plant folds its leaves when touched!</li></ul><p>A stone, a chair and water are non-living — they do none of these. But be careful: a fallen leaf was once part of a living plant. Was it ever alive? Discuss with your class!</p>'},
{id:'c5-sci-ch1-l2',title:'Groups of Living Things',html:'<h3>Groups of Living Things</h3><p>There are millions of kinds of living things, so scientists <strong>classify</strong> them into groups. The two biggest groups are <strong>plants</strong> and <strong>animals</strong>.</p><ul><li><strong>Plants</strong> make their own food using sunlight (photosynthesis). They have roots, stems and leaves.</li><li><strong>Animals</strong> eat plants or other animals. They move from place to place.</li><li>Animals are further split: <strong>vertebrates</strong> have a backbone (fish, birds, humans); <strong>invertebrates</strong> do not (insects, worms, jellyfish).</li><li>Plants split into <strong>flowering plants</strong> (mango, rose) and <strong>non-flowering plants</strong> (ferns, mosses).</li></ul><p>Why classify? Imagine a library with no shelves — classification is how scientists keep the "library of life" organized. Can you classify: sparrow, rose, ant, banyan tree?</p>'}],
quiz:[
{q:'Which of these is a living thing?',options:['Stone','Chair','Rose plant','Water'],answer:2,explain:'A rose plant grows, needs water and reproduces — it is living.'},
{q:'Which is a sign of life?',options:['Shining','Melting','Reproduction','Rusting'],answer:2,explain:'Reproduction — making more of one\'s own kind — is a sign of life.'},
{q:'Animals with a backbone are called…',options:['invertebrates','vertebrates','mammals','reptiles'],answer:1,explain:'Vertebrates have a backbone (spine); invertebrates do not.'},
{q:'Which of these is an invertebrate?',options:['Fish','Sparrow','Ant','Frog'],answer:2,explain:'An ant has no backbone, so it is an invertebrate.'},
{q:'How do plants make their food?',options:['By eating insects','By photosynthesis using sunlight','By drinking milk','They do not need food'],answer:1,explain:'Plants make food by photosynthesis, using sunlight, water and air.'}]},
CS('c5-sci-ch2','Microorganisms','خردبینی جاندار'),
CS('c5-sci-ch3','Flowers and Seeds','پھول اور بیج'),
CS('c5-sci-ch4','Environmental Pollution','ماحولیاتی آلودگی'),
CS('c5-sci-ch5','Physical and Chemical Changes in Matter','مادے میں تبدیلیاں'),
CS('c5-sci-ch6','Light and Sound','روشنی اور آواز'),
CS('c5-sci-ch7','Electricity and Magnetism','بجلی اور مقناطیسیت'),
CS('c5-sci-ch8','Structure of Earth','زمین کی ساخت'),
CS('c5-sci-ch9','Space and Satellite','خلا اور مصنوعی سیارے'),
CS('c5-sci-ch10','Technology in Everyday Life','روزمرہ زندگی میں ٹیکنالوجی')]});

C.push({id:'class5-isl',title:'Islamiat',urdu:'اسلامیات',class:'Class 5',icon:'🕌',
desc:'عقائد، قرآن و حدیث، اور سیرتِ نبوی ﷺ کی مزید تفصیل۔',
chapters:[
CS('c5-isl-ch1','اسلامی عقائد',''),
CS('c5-isl-ch2','عبادات',''),
CS('c5-isl-ch3','قرآن مجید کا تعارف',''),
CS('c5-isl-ch4','حدیثِ نبوی ﷺ',''),
CS('c5-isl-ch5','سیرتِ نبوی ﷺ',''),
CS('c5-isl-ch6','اسلامی معاشرت','')]});

C.push({id:'class5-sst',title:'Social Studies',urdu:'معاشرتی علوم',class:'Class 5',icon:'🗺️',
desc:'Citizenship, maps, resources and culture of Pakistan.',
chapters:[
CS('c5-sst-ch1','Good Citizenship','اچھا شہری'),
CS('c5-sst-ch2','Maps and Globes','نقشے اور کرۂ ارض'),
CS('c5-sst-ch3','Climate and Resources of Pakistan','پاکستان کی آب و ہوا اور وسائل'),
CS('c5-sst-ch4','Our Leaders','ہمارے رہنما'),
CS('c5-sst-ch5','Culture and Festivals','ثقافت اور تہوار')]});
})();

(function(){
var C = window.SHAHEEN_TRACKS['school'].courses;
function CS(id,title,urdu){return {id:id,title:title,urdu:urdu||'',comingSoon:true,lessons:[],quiz:[]};}

/* ================= CLASS 6 ================= */
C.push({id:'class6-english',title:'English',urdu:'انگریزی',class:'Class 6',icon:'📖',
desc:'Tenses, active voice and comprehension — reading with understanding.',
chapters:[
{id:'c6-eng-ch1',title:'Present Tenses',urdu:'زمانۂ حال',comingSoon:false,
lessons:[
{id:'c6-eng-ch1-l1',title:'Simple Present Tense',html:'<h3>Simple Present Tense</h3><p>The <strong>simple present</strong> describes habits, routines and universal truths.</p><ul><li><strong>Habit:</strong> "I <em>wake</em> up at 6 o\'clock."</li><li><strong>Fact:</strong> "Water <em>boils</em> at 100°C."</li><li><strong>Rule:</strong> he/she/it + verb + <strong>-s</strong>: "She <em>teaches</em> English." I/you/we/they + base verb: "They <em>teach</em> maths."</li></ul><p><strong>Negative:</strong> use <em>do not / does not</em> + base verb: "He <em>does not like</em> tea." <strong>Question:</strong> "Does she <em>play</em> hockey?" Note: after <em>does</em>, the verb loses its -s!</p>'},
{id:'c6-eng-ch1-l2',title:'Present Continuous Tense',html:'<h3>Present Continuous Tense</h3><p>The <strong>present continuous</strong> describes an action happening <strong>right now</strong>: <strong>am/is/are + verb-ing</strong>.</p><ul><li>"I <em>am reading</em> a book now."</li><li>"She <em>is cooking</em> dinner."</li><li>"They <em>are playing</em> in the park."</li><li>Signal words: <em>now, right now, at the moment, Look!, Listen!</em></li></ul><p><strong>Spelling rules for -ing:</strong> make → making (drop e), run → running (double the consonant), lie → lying. Contrast: "I <em>eat</em> breakfast daily" (habit) vs "I <em>am eating</em> breakfast now" (right now).</p>'}],
quiz:[
{q:'Choose the correct verb: "She ___ TV every evening."',options:['watch','watches','watching','watched'],answer:1,explain:'"Every evening" is a habit; with "she", add -s: watches.'},
{q:'"They ___ cricket now."',options:['is playing','are playing','plays','played'],answer:1,explain:'"Now" + plural subject → are playing (present continuous).'},
{q:'Make it negative: "He likes apples."',options:['He not likes apples.','He does not like apples.','He does not likes apples.','He do not like apples.'],answer:1,explain:'Negative of simple present: does not + base verb → does not like.'},
{q:'Which sentence uses present continuous correctly?',options:['I am go to school.','She is reads a book.','We are eating lunch.','They is playing.'],answer:2,explain:'"We are eating" = are + verb-ing. Correct pattern.'},
{q:'"Look! The baby ___."',options:['cries','is crying','cry','cried'],answer:1,explain:'"Look!" signals something happening now → is crying.'}]},
CS('c6-eng-ch2','Past Tenses','زمانۂ ماضی'),
CS('c6-eng-ch3','Active and Passive Voice','معلوم و مجہول'),
CS('c6-eng-ch4','Direct and Indirect Speech','بالواسطہ و بلاواسطہ کلام'),
CS('c6-eng-ch5','Comprehension Passages','تفہیم'),
CS('c6-eng-ch6','Paragraph and Story Writing','مضمون و کہانی نویسی')]});

C.push({id:'class6-urdu',title:'Urdu',urdu:'اردو',class:'Class 6',icon:'🖋️',
desc:'حمد، نعت، نثر و نظم اور قواعد — اردو کی مضبوط بنیاد۔',
chapters:[
CS('c6-urd-ch1','حمد',''),
CS('c6-urd-ch2','نعت',''),
CS('c6-urd-ch3','نثری اسباق',''),
CS('c6-urd-ch4','نظمیں',''),
CS('c6-urd-ch5','غزلیں',''),
CS('c6-urd-ch6','قواعد و انشا','')]});

C.push({id:'class6-math',title:'Mathematics',urdu:'ریاضی',class:'Class 6',icon:'🔢',
desc:'Sets, integers, ratio, algebra and geometry — real mathematics starts here.',
chapters:[
{id:'c6-math-ch1',title:'Sets',urdu:'سیٹ',comingSoon:false,
lessons:[
{id:'c6-math-ch1-l1',title:'What Is a Set?',html:'<h3>What Is a Set?</h3><p>A <strong>set</strong> is a collection of <strong>well-defined and distinct</strong> objects, called <strong>elements</strong>. Well-defined means everyone agrees what belongs; distinct means no repeats.</p><ul><li>Write a set with a <strong>capital letter</strong> and braces: A = {1, 2, 3, 4}.</li><li><strong>∈</strong> means "is an element of": 3 ∈ A. <strong>∉</strong> means "is not": 5 ∉ A.</li><li>"The set of vowels" = {a, e, i, o, u} ✓ well-defined. "The set of tall boys" ✗ — not well-defined (how tall is tall?).</li></ul><p>Describe sets in words, list them in braces, or use set-builder form: {x | x is an even number less than 10}. Try: write the set of the first five prime numbers.</p>'},
{id:'c6-math-ch1-l2',title:'Types of Sets',html:'<h3>Types of Sets</h3><p>Sets come in useful types:</p><ul><li><strong>Finite set:</strong> countable elements — {1, 2, 3}.</li><li><strong>Infinite set:</strong> uncountable — {1, 2, 3, …}.</li><li><strong>Empty (null) set:</strong> no elements — {} or <strong>∅</strong>. Example: the set of months with 32 days.</li><li><strong>Singleton set:</strong> exactly one element — {7}.</li><li><strong>Subset:</strong> B ⊆ A means every element of B is in A. Every set is a subset of itself, and ∅ is a subset of every set.</li><li><strong>Equal sets:</strong> exactly the same elements — {1, 2} = {2, 1}. Order does not matter!</li></ul><p>Careful: {0} is NOT empty — it has one element (zero). The empty set ∅ has none. Is {a, b} a subset of {a, b, c}? Yes!</p>'}],
quiz:[
{q:'Which of these is a well-defined set?',options:['Tall students of the class','The vowels of the alphabet','Beautiful flowers','Good books'],answer:1,explain:'"The vowels of the alphabet" is exact: {a, e, i, o, u}. The others are vague.'},
{q:'If A = {2, 4, 6}, which statement is true?',options:['3 ∈ A','6 ∉ A','4 ∈ A','8 ∈ A'],answer:2,explain:'4 is an element of A, so 4 ∈ A is true.'},
{q:'Which set is empty?',options:['{0}','{ }','{1}','{∅}'],answer:1,explain:'{ } has no elements — it is the empty set. {0} has one element.'},
{q:'Is B = {1, 2} a subset of A = {1, 2, 3}?',options:['No','Yes','Only if ordered','Cannot tell'],answer:1,explain:'Every element of B (1 and 2) is in A, so B ⊆ A.'},
{q:'Which two sets are equal?',options:['{1,2,3} and {3,2,1}','{1,2} and {1,2,3}','{a} and {A}','{1} and {{1}}'],answer:0,explain:'Order does not matter in a set: {1,2,3} = {3,2,1}.'}]},
CS('c6-math-ch2','Factors and Multiples','عاد و اضعاف'),
CS('c6-math-ch3','Integers','صحیح اعداد'),
CS('c6-math-ch4','Simplification','تبسیط'),
CS('c6-math-ch5','Ratio and Proportion','نسبت و تناسب'),
CS('c6-math-ch6','Financial Arithmetic','مالیاتی حساب'),
CS('c6-math-ch7','Algebraic Expressions','الجبرای جملے'),
CS('c6-math-ch8','Linear Equations','یک درجی مساواتیں'),
CS('c6-math-ch9','Surface Area and Volume','سطحی رقبہ اور حجم'),
CS('c6-math-ch10','Symmetry','تماثل'),
CS('c6-math-ch11','Construction','ترسیمات'),
CS('c6-math-ch12','Statistics','شماریات'),
CS('c6-math-ch13','Probability','احتمال')]});

C.push({id:'class6-science',title:'Science',urdu:'سائنس',class:'Class 6',icon:'🔬',
desc:'Cells, matter, forces and energy — the full science journey.',
chapters:[
CS('c6-sci-ch1','Cellular Organization','خلیاتی تنظیم'),
CS('c6-sci-ch2','Nutrition in Plants and Animals','پودوں اور جانوروں میں تغذیہ'),
CS('c6-sci-ch3','Human Body Systems','انسانی جسم کے نظام'),
CS('c6-sci-ch4','Matter','مادہ'),
CS('c6-sci-ch5','Force and Motion','قوت اور حرکت'),
CS('c6-sci-ch6','Energy','توانائی'),
CS('c6-sci-ch7','Light','روشنی'),
CS('c6-sci-ch8','Sound','آواز'),
CS('c6-sci-ch9','Electricity','بجلی'),
CS('c6-sci-ch10','Earth and Space','زمین اور خلا'),
CS('c6-sci-ch11','Environment','ماحول')]});

C.push({id:'class6-isl',title:'Islamiat',urdu:'اسلامیات',class:'Class 6',icon:'🕌',
desc:'عقائد کی تفصیل، عبادات اور سیرتِ نبوی ﷺ۔',
chapters:[
CS('c6-isl-ch1','توحید',''),
CS('c6-isl-ch2','رسالت',''),
CS('c6-isl-ch3','آخرت',''),
CS('c6-isl-ch4','نماز',''),
CS('c6-isl-ch5','روزہ',''),
CS('c6-isl-ch6','زکوٰۃ',''),
CS('c6-isl-ch7','حج',''),
CS('c6-isl-ch8','سیرتِ نبوی ﷺ','')]});

C.push({id:'class6-sst',title:'Social Studies',urdu:'معاشرتی علوم',class:'Class 6',icon:'🗺️',
desc:'Maps, ancient civilizations, the arrival of Islam and citizenship.',
chapters:[
CS('c6-sst-ch1','Maps and the Earth','نقشے اور زمین'),
CS('c6-sst-ch2','The Indus Valley Civilization','وادیِ سندھ کی تہذیب'),
CS('c6-sst-ch3','Arrival of Islam in South Asia','جنوبی ایشیا میں اسلام کی آمد'),
CS('c6-sst-ch4','The Mughal Era (Overview)','مغلیہ دور'),
CS('c6-sst-ch5','Citizenship and Government','شہریت اور حکومت')]});

C.push({id:'class6-cs',title:'Computer Science',urdu:'کمپیوٹر سائنس',class:'Class 6',icon:'💻',
desc:'Parts of a computer, software, and first steps with the keyboard.',
chapters:[
CS('c6-cs-ch1','Introduction to Computers','کمپیوٹر کا تعارف'),
CS('c6-cs-ch2','Parts of a Computer','کمپیوٹر کے حصے'),
CS('c6-cs-ch3','Input and Output Devices','ان پٹ اور آؤٹ پٹ آلات'),
CS('c6-cs-ch4','Introduction to Software','سافٹ ویئر کا تعارف'),
CS('c6-cs-ch5','Working with the Keyboard','کی بورڈ کا استعمال')]});

/* ================= CLASS 7 ================= */
C.push({id:'class7-english',title:'English',urdu:'انگریزی',class:'Class 7',icon:'📖',
desc:'Grammar in depth, précis and composition for young writers.',
chapters:[
CS('c7-eng-ch1','Articles and Prepositions','حروفِ تنکیر و حروفِ جار'),
CS('c7-eng-ch2','Active and Passive Voice','معلوم و مجہول'),
CS('c7-eng-ch3','Direct and Indirect Speech','کلام'),
CS('c7-eng-ch4','Conditional Sentences','شرطیہ جملے'),
CS('c7-eng-ch5','Comprehension','تفہیم'),
CS('c7-eng-ch6','Essay and Story Writing','مضمون و کہانی')]});

C.push({id:'class7-urdu',title:'Urdu',urdu:'اردو',class:'Class 7',icon:'🖋️',
desc:'نثر، نظم، غزل اور انشا — اردو ادب کی دنیا۔',
chapters:[
CS('c7-urd-ch1','حمد',''),
CS('c7-urd-ch2','نعت',''),
CS('c7-urd-ch3','نثری اسباق',''),
CS('c7-urd-ch4','نظمیں',''),
CS('c7-urd-ch5','غزلیں',''),
CS('c7-urd-ch6','انشا پردازی','')]});

C.push({id:'class7-math',title:'Mathematics',urdu:'ریاضی',class:'Class 7',icon:'🔢',
desc:'Rational numbers, exponents, algebra, geometry and statistics.',
chapters:[
{id:'c7-math-ch1',title:'Sets',urdu:'سیٹ',comingSoon:false,
lessons:[
{id:'c7-math-ch1-l1',title:'Sets and Their Notation',html:'<h3>Sets and Their Notation</h3><p>Building on Class 6, we now describe sets in three ways:</p><ul><li><strong>Descriptive form:</strong> "The set of first five natural numbers."</li><li><strong>Tabular (roster) form:</strong> A = {1, 2, 3, 4, 5}.</li><li><strong>Set-builder form:</strong> A = {x | x ∈ N, x ≤ 5} — read as "the set of all x such that x is a natural number and x is at most 5".</li></ul><p><strong>Cardinal number</strong> n(A) = number of elements. If A = {a, e, i, o, u}, then n(A) = 5. A set with an <strong>even</strong> or odd pattern can be infinite: E = {2, 4, 6, …}, n(E) is not countable — infinite.</p>'},
{id:'c7-math-ch1-l2',title:'Subsets and Venn Diagrams',html:'<h3>Subsets and Venn Diagrams</h3><p><strong>Venn diagrams</strong> draw sets as circles inside a rectangle (the <strong>universal set</strong> U).</p><ul><li><strong>Subset:</strong> A ⊆ B if every element of A is in B. Example: {2, 4} ⊆ {1, 2, 3, 4}.</li><li><strong>Proper subset:</strong> A ⊂ B if A ⊆ B but A ≠ B.</li><li>A set with <strong>n elements has 2ⁿ subsets</strong>. {a, b} has 2² = 4 subsets: {}, {a}, {b}, {a, b}.</li><li><strong>Disjoint sets</strong> share no elements: {1, 3} and {2, 4} — their circles do not overlap.</li></ul><p>Draw U = {1..10}, A = even numbers, B = multiples of 3. Shade A ∩ B (the overlap: {6}) and A ∪ B. Venn diagrams turn logic into pictures!</p>'}],
quiz:[
{q:'Write in set-builder form: {2, 4, 6, 8}',options:['{x | x is odd, x < 9}','{x | x is even, x ≤ 8}','{x | x is prime}','{x | x > 8}'],answer:1,explain:'{x | x is an even number and x ≤ 8} describes {2, 4, 6, 8}.'},
{q:'If A = {p, q, r}, how many subsets does A have?',options:['3','6','8','9'],answer:2,explain:'A set with n = 3 elements has 2³ = 8 subsets.'},
{q:'Which is a proper subset of {1, 2, 3}?',options:['{1, 2, 3}','{1, 2}','{1, 2, 3, 4}','{4}'],answer:1,explain:'{1, 2} ⊆ {1, 2, 3} and is not equal to it, so it is a proper subset.'},
{q:'Two sets with no common elements are called…',options:['equal','equivalent','disjoint','overlapping'],answer:2,explain:'Disjoint sets share no elements.'},
{q:'In a Venn diagram, the rectangle represents…',options:['an empty set','the universal set','a subset','the intersection'],answer:1,explain:'The rectangle stands for the universal set U; circles inside are its subsets.'}]},
CS('c7-math-ch2','Rational Numbers','ناطق اعداد'),
CS('c7-math-ch3','Decimal Numbers','اعشاری اعداد'),
CS('c7-math-ch4','Exponents','قوت نما'),
CS('c7-math-ch5','Square and Square Roots','مربع اور جذر المربع'),
CS('c7-math-ch6','Direct and Inverse Proportion','راست اور معکوس تناسب'),
CS('c7-math-ch7','Financial Arithmetic','مالیاتی حساب'),
CS('c7-math-ch8','Algebraic Expressions','الجبرای جملے'),
CS('c7-math-ch9','Linear Equations','یک درجی مساواتیں'),
CS('c7-math-ch10','Fundamentals of Geometry','ہندسے کے بنیادی اصول'),
CS('c7-math-ch11','Practical Geometry','عملی ہندسہ'),
CS('c7-math-ch12','Circumference, Area and Volume','محیط، رقبہ اور حجم'),
CS('c7-math-ch13','Information Handling','معلومات کی ترتیب')]});

C.push({id:'class7-science',title:'Science',urdu:'سائنس',class:'Class 7',icon:'🔬',
desc:'Plant and human systems, atoms, forces and waves.',
chapters:[
{id:'c7-sci-ch1',title:'Plant Systems',urdu:'پودوں کے نظام',comingSoon:false,
lessons:[
{id:'c7-sci-ch1-l1',title:'Roots, Stems and Leaves',html:'<h3>Roots, Stems and Leaves</h3><p>A flowering plant has two systems: the <strong>root system</strong> (underground) and the <strong>shoot system</strong> (stem, leaves, flowers above ground).</p><ul><li><strong>Roots</strong> anchor the plant and absorb water and minerals. <strong>Tap roots</strong> (carrot) go deep; <strong>fibrous roots</strong> (wheat) spread wide. Tiny <strong>root hairs</strong> increase absorption area.</li><li><strong>Stems</strong> hold the plant upright and carry water up and food down through tube-like <strong>xylem</strong> and <strong>phloem</strong>.</li><li><strong>Leaves</strong> are food factories. The flat <strong>blade</strong> catches sunlight; tiny holes called <strong>stomata</strong> let gases in and out.</li></ul><p>Experiment: place a celery stalk in coloured water. After a day, the leaves show colour — proof that the stem transports water upward!</p>'},
{id:'c7-sci-ch1-l2',title:'How Plants Make Food (Photosynthesis)',html:'<h3>How Plants Make Food (Photosynthesis)</h3><p><strong>Photosynthesis</strong> is how green plants make their own food: <strong>carbon dioxide + water → (sunlight + chlorophyll) → glucose + oxygen</strong>.</p><ul><li><strong>Chlorophyll</strong>, the green pigment in leaves, traps sunlight energy.</li><li>Water comes up from roots through the <strong>xylem</strong>; carbon dioxide enters through <strong>stomata</strong>.</li><li><strong>Glucose</strong> is the plant\'s food; <strong>oxygen</strong> is released — the oxygen we breathe!</li><li>Test for starch: boil a leaf, soak in alcohol, add iodine — blue-black colour proves starch (stored glucose).</li></ul><p>Why does this matter? Nearly all life on Earth depends on photosynthesis — directly or indirectly, it is the source of our food and oxygen.</p>'}],
quiz:[
{q:'Which part of the plant absorbs water from the soil?',options:['Leaf','Stem','Root','Flower'],answer:2,explain:'Roots absorb water and minerals; root hairs increase the absorbing surface.'},
{q:'Water travels up the stem through…',options:['phloem','stomata','xylem','chlorophyll'],answer:2,explain:'Xylem vessels carry water upward; phloem carries food.'},
{q:'Photosynthesis needs all of these EXCEPT…',options:['sunlight','carbon dioxide','oxygen','water'],answer:2,explain:'Oxygen is a product of photosynthesis, not a raw material.'},
{q:'The green pigment that traps sunlight is…',options:['haemoglobin','chlorophyll','melanin','keratin'],answer:1,explain:'Chlorophyll in leaves captures light energy for photosynthesis.'},
{q:'Tiny holes in leaves for gas exchange are called…',options:['pores','stomata','vessels','hairs'],answer:1,explain:'Stomata (singular: stoma) let carbon dioxide in and oxygen out.'}]},
CS('c7-sci-ch2','Human Respiratory and Circulatory Systems','انسانی نظامِ تنفس و دورانِ خون'),
CS('c7-sci-ch3','Immunity and Diseases','مدافعت اور بیماریاں'),
CS('c7-sci-ch4','Structure of an Atom','ایٹم کی ساخت'),
CS('c7-sci-ch5','Physical and Chemical Changes','طبیعی و کیمیائی تبدیلیاں'),
CS('c7-sci-ch6','Chemical Bonds','کیمیائی بانڈ'),
CS('c7-sci-ch7','Solutions','محلول'),
CS('c7-sci-ch8','Force and Motion','قوت اور حرکت'),
CS('c7-sci-ch9','Waves and Energy','لہریں اور توانائی'),
CS('c7-sci-ch10','Heat and Temperature','حرارت اور درجۂ حرارت'),
CS('c7-sci-ch11','Technology in Everyday Life','روزمرہ زندگی میں ٹیکنالوجی'),
CS('c7-sci-ch12','Earth and Space','زمین اور خلا')]});

C.push({id:'class7-isl',title:'Islamiat',urdu:'اسلامیات',class:'Class 7',icon:'🕌',
desc:'قرآن و حدیث کا تعارف اور سیرتِ نبوی ﷺ کے اہم واقعات۔',
chapters:[
CS('c7-isl-ch1','توحید و رسالت',''),
CS('c7-isl-ch2','آخرت',''),
CS('c7-isl-ch3','نماز و روزہ',''),
CS('c7-isl-ch4','زکوٰۃ و حج',''),
CS('c7-isl-ch5','قرآن مجید',''),
CS('c7-isl-ch6','حدیثِ نبوی ﷺ',''),
CS('c7-isl-ch7','سیرتِ نبوی ﷺ',''),
CS('c7-isl-ch8','اسلامی آداب','')]});

C.push({id:'class7-sst',title:'Social Studies',urdu:'معاشرتی علوم',class:'Class 7',icon:'🗺️',
desc:'Mughals, British rule, the freedom struggle and Pakistan\'s geography.',
chapters:[
CS('c7-sst-ch1','The Mughal Empire','مغلیہ سلطنت'),
CS('c7-sst-ch2','British Rule in the Subcontinent','برطانوی دور'),
CS('c7-sst-ch3','The Freedom Struggle (1857–1947)','تحریکِ آزادی'),
CS('c7-sst-ch4','Geography of Pakistan','پاکستان کا جغرافیہ'),
CS('c7-sst-ch5','Economy of Pakistan','پاکستان کی معیشت')]});

C.push({id:'class7-cs',title:'Computer Science',urdu:'کمپیوٹر سائنس',class:'Class 7',icon:'💻',
desc:'Operating systems, word processing and the internet.',
chapters:[
CS('c7-cs-ch1','Computer Systems','کمپیوٹر سسٹم'),
CS('c7-cs-ch2','Operating Systems','آپریٹنگ سسٹم'),
CS('c7-cs-ch3','Word Processing','ورڈ پروسیسنگ'),
CS('c7-cs-ch4','Introduction to the Internet','انٹرنیٹ کا تعارف')]});

/* ================= CLASS 8 ================= */
C.push({id:'class8-english',title:'English',urdu:'انگریزی',class:'Class 8',icon:'📖',
desc:'Advanced tenses, clauses and formal writing.',
chapters:[
{id:'c8-eng-ch1',title:'Past Tenses',urdu:'زمانۂ ماضی',comingSoon:false,
lessons:[
{id:'c8-eng-ch1-l1',title:'Simple Past Tense',html:'<h3>Simple Past Tense</h3><p>The <strong>simple past</strong> describes a <strong>finished action</strong> at a finished time: <strong>verb + -ed</strong> (regular) or an irregular form.</p><ul><li>"We <em>visited</em> Badshahi Mosque last year."</li><li>"She <em>wrote</em> three letters yesterday." (write → wrote, irregular)</li><li><strong>Negative:</strong> "They <em>did not come</em>." <strong>Question:</strong> "Did you <em>see</em> the match?"</li></ul><p>Signal words: <em>yesterday, last night, ago, in 2020</em>. Trap: after <em>did</em>, always the base verb — "Did he <em>go</em>?" never "Did he <em>went</em>?"</p>'},
{id:'c8-eng-ch1-l2',title:'Past Continuous Tense',html:'<h3>Past Continuous Tense</h3><p>The <strong>past continuous</strong> describes an action <strong>in progress at a past moment</strong>: <strong>was/were + verb-ing</strong>.</p><ul><li>"At 8 pm yesterday, I <em>was studying</em>."</li><li>"They <em>were playing</em> when it started raining."</li><li>It often pairs with simple past: the <strong>long action</strong> (was raining) is interrupted by the <strong>short action</strong> (the bell rang).</li></ul><p>Compare: "I <em>read</em> a book last night" (finished) vs "I <em>was reading</em> when you called" (in progress). Choose past continuous when you can add "in the middle of" to the verb.</p>'}],
quiz:[
{q:'Choose the correct form: "She ___ her homework last night."',options:['do','does','did','doing'],answer:2,explain:'"Last night" = finished past → did.'},
{q:'"While I was walking, it ___ to rain."',options:['starts','started','is starting','start'],answer:1,explain:'The short interrupting action uses simple past: started.'},
{q:'Which is correct?',options:['They was playing.','They were playing.','They were played.','They was played.'],answer:1,explain:'Plural subject + were + verb-ing: they were playing.'},
{q:'"Did she ___ the letter?"',options:['wrote','written','write','writes'],answer:2,explain:'After "did", use the base verb: write.'},
{q:'At 9 pm yesterday, he ___ dinner.',options:['is eating','was eating','eats','eat'],answer:1,explain:'An action in progress at a past time → was eating.'}]},
CS('c8-eng-ch2','Future Tenses','زمانۂ مستقبل'),
CS('c8-eng-ch3','Clauses and Sentence Types','جملوں کی اقسام'),
CS('c8-eng-ch4','Active and Passive Voice','معلوم و مجہول'),
CS('c8-eng-ch5','Précis Writing','خلاصہ نویسی'),
CS('c8-eng-ch6','Formal Letters and Applications','رسمی خطوط')]});

C.push({id:'class8-urdu',title:'Urdu',urdu:'اردو',class:'Class 8',icon:'🖋️',
desc:'ادب، تنقید اور انشا — اردو میں مہارت کی منزل۔',
chapters:[
CS('c8-urd-ch1','حمد',''),
CS('c8-urd-ch2','نعت',''),
CS('c8-urd-ch3','نثری اسباق',''),
CS('c8-urd-ch4','نظمیں',''),
CS('c8-urd-ch5','غزلیں',''),
CS('c8-urd-ch6','ڈرامہ',''),
CS('c8-urd-ch7','انشا پردازی','')]});

C.push({id:'class8-math',title:'Mathematics',urdu:'ریاضی',class:'Class 8',icon:'🔢',
desc:'Real numbers, polynomials, factorization, geometry and coordinates.',
chapters:[
{id:'c8-math-ch1',title:'Sets',urdu:'سیٹ',comingSoon:false,
lessons:[
{id:'c8-math-ch1-l1',title:'Set Operations: Union and Intersection',html:'<h3>Set Operations: Union and Intersection</h3><p>Two sets can be combined in two ways:</p><ul><li><strong>Union (A ∪ B):</strong> all elements in A <em>or</em> B (no repeats). If A = {1, 2, 3}, B = {3, 4, 5}, then A ∪ B = {1, 2, 3, 4, 5}.</li><li><strong>Intersection (A ∩ B):</strong> elements in <em>both</em> A and B. A ∩ B = {3}.</li><li><strong>Difference (A − B):</strong> elements in A but not B: A − B = {1, 2}.</li><li><strong>Complement (A′):</strong> elements of U not in A. If U = {1..6} and A = {1, 2}, A′ = {3, 4, 5, 6}.</li></ul><p>Formula: n(A ∪ B) = n(A) + n(B) − n(A ∩ B). In words: add both, then subtract the overlap counted twice. If A = {1,2,3,4}, B = {3,4,5}: n = 4 + 3 − 2 = 5. ✓</p>'},
{id:'c8-math-ch1-l2',title:'Venn Diagrams and Word Problems',html:'<h3>Venn Diagrams and Word Problems</h3><p>Venn diagrams solve "how many" problems beautifully. <strong>Steps:</strong> (1) draw overlapping circles, (2) fill the <strong>overlap first</strong>, (3) then the only-parts, (4) read off answers.</p><ul><li><strong>Example:</strong> In a class of 30, 18 like cricket (C), 15 like football (F), 7 like both. Fill: both = 7; only C = 18 − 7 = 11; only F = 15 − 7 = 8; neither = 30 − (11 + 7 + 8) = 4.</li><li>Like at least one sport = 11 + 7 + 8 = <strong>26</strong>.</li></ul><p>Golden rule: always start with the intersection. Most mistakes come from filling "only" regions with the total. Practice: 50 students, 30 read Urdu books, 25 read English books, 10 read both. How many read neither? (Answer: 5)</p>'}],
quiz:[
{q:'If A = {1, 2, 3} and B = {3, 4}, what is A ∪ B?',options:['{3}','{1, 2, 3, 4}','{1, 2}','{4}'],answer:1,explain:'Union takes every element once: {1, 2, 3, 4}.'},
{q:'If A = {1, 2, 3} and B = {3, 4}, what is A ∩ B?',options:['{1, 2, 3, 4}','{3}','{1, 2}','{4}'],answer:1,explain:'Intersection takes common elements only: {3}.'},
{q:'U = {1, 2, 3, 4, 5}, A = {2, 4}. What is A′?',options:['{2, 4}','{1, 3, 5}','{1, 2, 3, 4, 5}','{ }'],answer:1,explain:'Complement = elements of U not in A: {1, 3, 5}.'},
{q:'n(A) = 10, n(B) = 8, n(A ∩ B) = 3. Find n(A ∪ B).',options:['21','18','15','5'],answer:2,explain:'n(A ∪ B) = 10 + 8 − 3 = 15.'},
{q:'In a group of 20, 12 like tea, 10 like coffee, 4 like both. How many like neither?',options:['2','4','6','18'],answer:0,explain:'Only tea = 8, only coffee = 6, both = 4. Neither = 20 − 18 = 2.'}]},
CS('c8-math-ch2','Real Numbers','حقیقی اعداد'),
CS('c8-math-ch3','Number Systems','نظامِ اعداد'),
CS('c8-math-ch4','Financial Arithmetic','مالیاتی حساب'),
CS('c8-math-ch5','Polynomials','کثیر رقمی'),
CS('c8-math-ch6','Factorization and Simultaneous Equations','تجزی اور یک وقت مساواتیں'),
CS('c8-math-ch7','Fundamentals of Geometry','ہندسے کے اصول'),
CS('c8-math-ch8','Practical Geometry','عملی ہندسہ'),
CS('c8-math-ch9','Areas and Volumes','رقبے اور حجم'),
CS('c8-math-ch10','Introduction to Coordinate Geometry','مختصاتی ہندسے کا تعارف'),
CS('c8-math-ch11','Information Handling','معلومات کی ترتیب')]});

C.push({id:'class8-science',title:'Science',urdu:'سائنس',class:'Class 8',icon:'🔬',
desc:'Heredity, acids and bases, forces, heat and electricity.',
chapters:[
{id:'c8-sci-ch1',title:'Human Organ Systems',urdu:'انسانی اعضا کے نظام',comingSoon:false,
lessons:[
{id:'c8-sci-ch1-l1',title:'Digestive and Respiratory Systems',html:'<h3>Digestive and Respiratory Systems</h3><p>Organ systems are groups of organs working together.</p><ul><li><strong>Digestive system:</strong> mouth → oesophagus → stomach → small intestine → large intestine. Food is broken down; <strong>enzymes</strong> speed up digestion; nutrients are absorbed into blood in the <strong>small intestine</strong> through tiny villi.</li><li><strong>Respiratory system:</strong> nose → trachea → bronchi → lungs. In the lungs, <strong>alveoli</strong> (tiny air sacs) swap oxygen into blood and carbon dioxide out.</li></ul><p>The two systems team up: digestion supplies glucose, respiration supplies oxygen, and cells burn glucose with oxygen to release <strong>energy</strong>. That is why you breathe faster after running!</p>'},
{id:'c8-sci-ch1-l2',title:'Circulatory and Excretory Systems',html:'<h3>Circulatory and Excretory Systems</h3><ul><li><strong>Circulatory system:</strong> the <strong>heart</strong> (a muscular pump) pushes blood through <strong>arteries</strong> (away from heart), <strong>veins</strong> (toward heart) and <strong>capillaries</strong> (tiny exchange vessels). Red blood cells carry oxygen using <strong>haemoglobin</strong>.</li><li><strong>Excretory system:</strong> <strong>kidneys</strong> filter waste (urea) from blood and make <strong>urine</strong>; skin removes waste as sweat; lungs exhale carbon dioxide and water vapour.</li></ul><p>One heartbeat = a "lub-dub" as valves close. Your heart beats about <strong>70 times a minute</strong> — over 100,000 times a day — without you ever telling it to. The nervous system (brain, spinal cord, nerves) coordinates it all.</p>'}],
quiz:[
{q:'Where are most nutrients absorbed into the blood?',options:['Stomach','Large intestine','Small intestine','Oesophagus'],answer:2,explain:'The small intestine, with its villi, absorbs digested nutrients.'},
{q:'Gas exchange in the lungs happens in the…',options:['bronchi','trachea','alveoli','diaphragm'],answer:2,explain:'Alveoli are tiny air sacs where oxygen and carbon dioxide are exchanged.'},
{q:'Blood vessels that carry blood AWAY from the heart are…',options:['veins','capillaries','arteries','valves'],answer:2,explain:'Arteries carry blood away from the heart; veins bring it back.'},
{q:'Which organ filters waste from the blood?',options:['Liver','Kidney','Heart','Lung'],answer:1,explain:'The kidneys filter urea and extra water, forming urine.'},
{q:'Red blood cells carry oxygen using…',options:['chlorophyll','haemoglobin','insulin','plasma'],answer:1,explain:'Haemoglobin, the red pigment, binds and carries oxygen.'}]},
CS('c8-sci-ch2','Heredity in Organisms','وراثت'),
CS('c8-sci-ch3','Biotechnology','بایو ٹیکنالوجی'),
CS('c8-sci-ch4','Pollution and Its Effects on Environment','آلودگی'),
CS('c8-sci-ch5','Chemical Reactions','کیمیائی تعاملات'),
CS('c8-sci-ch6','Acids, Bases and Salts','تیزاب، اساس اور نمک'),
CS('c8-sci-ch7','Force and Pressure','قوت اور دباؤ'),
CS('c8-sci-ch8','Measurement of Physical Quantities','طبیعی مقداریں کی پیمائش'),
CS('c8-sci-ch9','Sources and Effects of Heat Energy','حرارتی توانائی'),
CS('c8-sci-ch10','Lenses','عدسے'),
CS('c8-sci-ch11','Electricity in Action','بجلی'),
CS('c8-sci-ch12','Exploring Space','خلا کی سیر')]});

C.push({id:'class8-isl',title:'Islamiat',urdu:'اسلامیات',class:'Class 8',icon:'🕌',
desc:'عقائد و عبادات کی تکمیل اور اسلامی تاریخ کے جھلکیاں۔',
chapters:[
CS('c8-isl-ch1','توحید و رسالت',''),
CS('c8-isl-ch2','آخرت',''),
CS('c8-isl-ch3','نماز، روزہ، زکوٰۃ، حج',''),
CS('c8-isl-ch4','قرآن مجید',''),
CS('c8-isl-ch5','حدیثِ نبوی ﷺ',''),
CS('c8-isl-ch6','سیرتِ نبوی ﷺ',''),
CS('c8-isl-ch7','اسلامی تاریخ کے جھلکیاں',''),
CS('c8-isl-ch8','اسلامی معاشرت','')]});

C.push({id:'class8-sst',title:'Social Studies',urdu:'معاشرتی علوم',class:'Class 8',icon:'🗺️',
desc:'Ideology of Pakistan, the freedom movement and our constitution.',
chapters:[
CS('c8-sst-ch1','Ideology of Pakistan','نظریۂ پاکستان'),
CS('c8-sst-ch2','The Pakistan Movement','تحریکِ پاکستان'),
CS('c8-sst-ch3','Early Problems of Pakistan','پاکستان کے ابتدائی مسائل'),
CS('c8-sst-ch4','Constitution of Pakistan','آئینِ پاکستان'),
CS('c8-sst-ch5','Pakistan and the World','پاکستان اور دنیا')]});

C.push({id:'class8-cs',title:'Computer Science',urdu:'کمپیوٹر سائنس',class:'Class 8',icon:'💻',
desc:'Networks, the internet and first steps in programming.',
chapters:[
CS('c8-cs-ch1','Data and Information','ڈیٹا اور معلومات'),
CS('c8-cs-ch2','Computer Networks','کمپیوٹر نیٹ ورک'),
CS('c8-cs-ch3','The Internet and Email','انٹرنیٹ اور ای میل'),
CS('c8-cs-ch4','Introduction to Programming','پروگرامنگ کا تعارف'),
CS('c8-cs-ch5','Spreadsheets Basics','اسپریڈ شیٹ')]});
})();

(function(){
var C = window.SHAHEEN_TRACKS['school'].courses;
function CS(id,title,urdu){return {id:id,title:title,urdu:urdu||'',comingSoon:true,lessons:[],quiz:[]};}

/* ================= CLASS 11 (FSc / ICS / FA Part 1) ================= */
C.push({id:'class11-physics',title:'Physics',urdu:'طبیعیات',class:'Class 11',icon:'⚛️',
desc:'Mechanics, waves, optics and thermodynamics — FSc Part 1 Physics.',
chapters:[
{id:'c11-phy-ch1',title:'Measurements',urdu:'پیمائش',comingSoon:false,
lessons:[
{id:'c11-phy-ch1-l1',title:'Units and the SI System',html:'<h3>Units and the SI System</h3><p>A <strong>physical quantity</strong> is measured by comparing it with a standard <strong>unit</strong>. The <strong>SI system</strong> has seven base units:</p><ul><li><strong>Length:</strong> metre (m) | <strong>Mass:</strong> kilogram (kg) | <strong>Time:</strong> second (s)</li><li><strong>Current:</strong> ampere (A) | <strong>Temperature:</strong> kelvin (K)</li><li><strong>Amount of substance:</strong> mole (mol) | <strong>Luminous intensity:</strong> candela (cd)</li></ul><p>All other units are <strong>derived</strong>: newton (N) = kg·m/s², joule (J) = N·m, watt (W) = J/s. Use <strong>prefixes</strong> for large/small values: kilo (10³), mega (10⁶), milli (10⁻³), micro (10⁻⁶), nano (10⁻⁹). <strong>Dimensional analysis</strong> checks equations: both sides must have the same dimensions, e.g. v = u + at → [LT⁻¹] = [LT⁻¹] + [LT⁻²][T] ✓.</p>'},
{id:'c11-phy-ch1-l2',title:'Errors, Precision and Significant Figures',html:'<h3>Errors, Precision and Significant Figures</h3><p>Every measurement carries <strong>uncertainty</strong>.</p><ul><li><strong>Systematic error:</strong> same mistake every time (faulty scale) — can be corrected. <strong>Random error:</strong> unpredictable variation — reduced by repeating and averaging.</li><li><strong>Precision:</strong> how close repeated readings are. <strong>Accuracy:</strong> how close to the true value. A precise instrument can still be inaccurate!</li><li><strong>Significant figures:</strong> all certain digits + one doubtful digit. 4.05 has 3 sf; 0.0040 has 2 sf (leading zeros never count; trailing zeros after a decimal do).</li><li>In calculations, the answer keeps the <strong>fewest sf</strong> of the inputs: 2.5 × 3.42 = 8.55 → <strong>8.6</strong>.</li></ul><p>Board tip: always write the least count of your instrument and the absolute uncertainty, e.g. (5.2 ± 0.1) cm.</p>'}],
quiz:[
{q:'Which of these is an SI base unit?',options:['Newton','Joule','Kelvin','Watt'],answer:2,explain:'Kelvin (temperature) is a base unit; newton, joule and watt are derived.'},
{q:'The prefix "micro" means…',options:['10⁻³','10⁶','10⁻⁶','10³'],answer:2,explain:'micro = 10⁻⁶ (e.g. 1 micrometre = 10⁻⁶ m).'},
{q:'How many significant figures are in 0.004050?',options:['3','4','5','6'],answer:1,explain:'Leading zeros do not count; 4, 0, 5, 0 count → 4 significant figures.'},
{q:'A faulty weighing scale that always reads 2 g extra causes…',options:['random error','systematic error','no error','gross error'],answer:1,explain:'The same error in every reading is systematic — it can be corrected.'},
{q:'Precision means…',options:['closeness to the true value','closeness of repeated readings to each other','having many decimal places','using a digital meter'],answer:1,explain:'Precision is repeatability; accuracy is closeness to the true value.'},
{q:'2.5 × 3.42 = 8.55. Correctly rounded, the answer is…',options:['8.55','8.6','8.550','9'],answer:1,explain:'The answer keeps the fewest significant figures (2, from 2.5): 8.6.'}]},
CS('c11-phy-ch3','Motion and Force','حرکت اور قوت'),
CS('c11-phy-ch4','Work and Energy','کام اور توانائی'),
CS('c11-phy-ch5','Circular Motion','دائری حرکت'),
CS('c11-phy-ch6','Fluid Dynamics','سیال حرکیات'),
CS('c11-phy-ch7','Oscillations','اہتزاز'),
CS('c11-phy-ch8','Waves','لہریں'),
CS('c11-phy-ch9','Physical Optics','طبیعی بصریات'),
CS('c11-phy-ch10','Optical Instruments','بصری آلات'),
CS('c11-phy-ch11','Heat and Thermodynamics','حرارت اور حرکی حرارت'),
{id:'c11-phy-ch2',title:'Vectors and Equilibrium',urdu:'سمتی مقداریں اور توازن',comingSoon:false,
lessons:[
{id:'c11-phy-ch2-l1',title:'Adding Vectors',html:'<h3>Adding Vectors</h3><p><strong>Scalar</strong> quantities have magnitude only (speed, mass, temperature). <strong>Vector</strong> quantities have magnitude <em>and</em> direction (velocity, force, displacement).</p><ul><li><strong>Head-to-tail rule:</strong> place the tail of the second vector at the head of the first; the resultant runs from the first tail to the last head.</li><li><strong>Rectangular components:</strong> Ax = A cos θ, Ay = A sin θ. Resultant magnitude R = √(Rx² + Ry²), direction tan θ = Ry/Rx.</li><li><strong>Example:</strong> 3 N east + 4 N north → R = √(9+16) = <strong>5 N</strong> at tan⁻¹(4/3) ≈ 53° north of east.</li></ul><p>Vectors add by geometry, not arithmetic: 3 N + 4 N can give anything from 1 N to 7 N depending on direction!</p>'},
{id:'c11-phy-ch2-l2',title:'Equilibrium of Forces',html:'<h3>Equilibrium of Forces</h3><p>A body is in <strong>translational equilibrium</strong> when the <strong>vector sum of all forces is zero</strong> (ΣF = 0) — it stays at rest or moves uniformly.</p><ul><li><strong>First condition:</strong> ΣFx = 0 and ΣFy = 0 separately.</li><li><strong>Second condition (rotational):</strong> Στ = 0 — net torque about any point is zero.</li><li><strong>Example:</strong> a picture hung by two strings — tension components left and right cancel horizontally, and their vertical components balance the weight.</li></ul><p>Torque τ = r × F = rF sin θ. A see-saw balances when clockwise torques equal anticlockwise torques. That is why a light child sits far from the pivot!</p>'}],
quiz:[
{q:'Which of these is a vector quantity?',options:['Speed','Distance','Velocity','Temperature'],answer:2,explain:'Velocity has magnitude and direction; the rest are scalars.'},
{q:'3 N east + 4 N north gives a resultant of…',options:['7 N','1 N','5 N','12 N'],answer:2,explain:'R = √(3² + 4²) = 5 N.'},
{q:'First condition of equilibrium is…',options:['ΣF = 0','Στ = 0','ΣF = ma','v = constant'],answer:0,explain:'Translational equilibrium needs the vector sum of forces to be zero.'},
{q:'Torque is maximum when the angle between r and F is…',options:['0°','45°','90°','180°'],answer:2,explain:'τ = rF sin θ is maximum at sin 90° = 1.'},
{q:'A body in equilibrium…',options:['must be at rest','has zero acceleration','must be moving','has no forces on it'],answer:1,explain:'Equilibrium means zero net force, hence zero acceleration — it may still move uniformly.'},
{q:'Ax for a vector of 10 units at 60° to the x-axis is…',options:['5','8.66','10','0'],answer:0,explain:'Ax = A cos θ = 10 × cos 60° = 10 × 0.5 = 5.'}]}]});

C.push({id:'class11-chemistry',title:'Chemistry',urdu:'کیمیا',class:'Class 11',icon:'🧪',
desc:'Basic concepts, gases, atomic structure, bonding and equilibrium.',
chapters:[
{id:'c11-che-ch1',title:'Basic Concepts',urdu:'بنیادی تصورات',comingSoon:false,
lessons:[
{id:'c11-che-ch1-l1',title:'The Mole Concept',html:'<h3>The Mole Concept</h3><p>The <strong>mole</strong> is chemistry\'s counting unit: <strong>1 mole = 6.022 × 10²³ particles</strong> (Avogadro\'s number).</p><ul><li><strong>Molar mass</strong> = mass of 1 mole: H₂O = 18 g/mol, NaCl = 58.5 g/mol.</li><li><strong>Moles = mass ÷ molar mass</strong>. 36 g of water = 36 ÷ 18 = <strong>2 mol</strong>.</li><li><strong>Number of particles = moles × 6.022 × 10²³</strong>. 2 mol of water contain 2 × 6.022 × 10²³ = 1.204 × 10²⁴ molecules.</li><li>At STP, 1 mole of any gas occupies <strong>22.4 dm³</strong>.</li></ul><p>Think of a mole as a "chemist\'s dozen" — just a very, very big dozen. Master this: almost every numerical in FSc chemistry starts with converting to moles.</p>'},
{id:'c11-che-ch1-l2',title:'Stoichiometry and Limiting Reactants',html:'<h3>Stoichiometry and Limiting Reactants</h3><p><strong>Stoichiometry</strong> uses the balanced equation\'s mole ratios to predict amounts.</p><ul><li><strong>Example:</strong> 2H₂ + O₂ → 2H₂O. 4 mol H₂ need 2 mol O₂ and make 4 mol H₂O — the ratio is 2:1:2.</li><li><strong>Steps:</strong> (1) write the balanced equation, (2) convert given mass to moles, (3) use the mole ratio, (4) convert back to the required unit.</li><li><strong>Limiting reactant:</strong> the reactant that runs out first and limits the product. If 3 mol H₂ and 2 mol O₂ react, H₂ limits: only 1.5 mol O₂ is needed, so 0.5 mol O₂ is <strong>in excess</strong>.</li></ul><p><strong>Percentage yield</strong> = (actual yield ÷ theoretical yield) × 100. A yield below 100% is normal — some product is always lost.</p>'}],
quiz:[
{q:'Avogadro\'s number is…',options:['6.022 × 10²²','3.011 × 10²³','6.022 × 10²³','1.6 × 10⁻¹⁹'],answer:2,explain:'1 mole = 6.022 × 10²³ particles.'},
{q:'How many moles are in 36 g of water (H₂O = 18 g/mol)?',options:['1','1.5','2','3'],answer:2,explain:'Moles = 36 ÷ 18 = 2 mol.'},
{q:'At STP, 1 mole of gas occupies…',options:['22.4 cm³','22.4 dm³','24 dm³','1 dm³'],answer:1,explain:'Molar volume at STP is 22.4 dm³ (litres).'},
{q:'In 2H₂ + O₂ → 2H₂O, 4 mol H₂ need how much O₂?',options:['1 mol','2 mol','4 mol','8 mol'],answer:1,explain:'The H₂:O₂ ratio is 2:1, so 4 mol H₂ need 2 mol O₂.'},
{q:'The reactant that runs out first is called the…',options:['excess reactant','limiting reactant','catalyst','solvent'],answer:1,explain:'The limiting reactant is consumed first and limits the product formed.'},
{q:'Percentage yield = …',options:['(theoretical ÷ actual) × 100','(actual ÷ theoretical) × 100','actual + theoretical','theoretical − actual'],answer:1,explain:'Percentage yield = (actual yield / theoretical yield) × 100.'}]},
{id:'c11-che-ch2',title:'Experimental Techniques in Chemistry',urdu:'کیمیا میں تجرباتی تکنیکیں',comingSoon:false,
lessons:[
{id:'c11-che-ch2-l1',title:'Crystallization and Filtration',html:'<h3>Crystallization and Filtration</h3><p>These techniques <strong>purify</strong> solids and separate mixtures.</p><ul><li><strong>Filtration:</strong> separates an <strong>insoluble solid</strong> from a liquid — e.g. sand from water. The solid stays on the filter paper as <strong>residue</strong>; the liquid passing through is the <strong>filtrate</strong>.</li><li><strong>Crystallization:</strong> purifies a <strong>soluble solid</strong>. Dissolve the impure solid in hot solvent, filter hot, then cool slowly — pure <strong>crystals</strong> form while impurities stay dissolved.</li><li><strong>Key idea:</strong> solubility increases with temperature, so cooling forces the pure solid out.</li></ul><p>Example: purifying copper sulphate — dissolve, filter off insoluble dirt, cool, and blue crystals appear. The shape and colour of crystals even help identify the substance.</p>'},
{id:'c11-che-ch2-l2',title:'Chromatography',html:'<h3>Chromatography</h3><p><strong>Chromatography</strong> separates the components of a <strong>mixture</strong> dissolved in a fluid, using a <strong>stationary phase</strong> and a <strong>mobile phase</strong>.</p><ul><li><strong>Paper chromatography:</strong> a drop of ink mixture on filter paper; solvent climbs by capillary action. Each dye travels at its own speed — the mixture splits into separate coloured spots.</li><li><strong>Rf value</strong> = distance moved by spot ÷ distance moved by solvent. Each substance has a characteristic Rf — used to <strong>identify</strong> unknowns.</li><li>More soluble components travel <strong>farther</strong>; strongly adsorbed ones stay near the baseline.</li></ul><p>Uses: checking purity of drugs, separating plant pigments, forensic ink analysis. A single spot = pure substance; multiple spots = mixture.</p>'}],
quiz:[
{q:'Filtration separates…',options:['two liquids','an insoluble solid from a liquid','two gases','a soluble solid from a liquid'],answer:1,explain:'Filtration traps insoluble solids on filter paper; the liquid passes through.'},
{q:'In crystallization, pure crystals form because…',options:['impurities evaporate','solubility falls on cooling','the solvent boils','crystals are heated'],answer:1,explain:'Cooling lowers solubility, so the pure solid crystallizes out while impurities stay dissolved.'},
{q:'Rf value = …',options:['solvent distance ÷ spot distance','spot distance ÷ solvent distance','spot × solvent distance','solvent − spot distance'],answer:1,explain:'Rf = distance moved by the component ÷ distance moved by the solvent front.'},
{q:'In chromatography, the component that travels farthest is…',options:['most strongly adsorbed','least soluble in the mobile phase','most soluble in the mobile phase','the heaviest'],answer:2,explain:'Greater solubility in the mobile phase carries the component farther.'},
{q:'A chromatogram with a single spot shows the sample is…',options:['a mixture','pure','coloured','a gas'],answer:1,explain:'One spot means one component — a pure substance.'},
{q:'The liquid passing through filter paper is called the…',options:['residue','filtrate','precipitate','distillate'],answer:1,explain:'The filtrate passes through; the residue stays on the paper.'}]},
CS('c11-che-ch3','Gases','گیسیں'),
CS('c11-che-ch4','Liquids and Solids','مائع اور ٹھوس'),
CS('c11-che-ch5','Atomic Structure','ایٹمی ساخت'),
CS('c11-che-ch6','Chemical Bonding','کیمیائی بانڈ'),
CS('c11-che-ch7','Thermochemistry','حرارتی کیمیا'),
CS('c11-che-ch8','Chemical Equilibrium','کیمیائی توازن'),
CS('c11-che-ch9','Solutions','محلول'),
CS('c11-che-ch10','Electrochemistry','برقی کیمیا'),
CS('c11-che-ch11','Reaction Kinetics','تعامل کی حرکیات')]});

C.push({id:'class11-biology',title:'Biology',urdu:'حیاتیات',class:'Class 11',icon:'🧬',
desc:'Molecules, cells, kingdoms of life and bioenergetics.',
chapters:[
{id:'c11-bio-ch1',title:'Introduction to Biology',urdu:'حیاتیات کا تعارف',comingSoon:false,
lessons:[
{id:'c11-bio-ch1-l1',title:'Levels of Biological Organization',html:'<h3>Levels of Biological Organization</h3><p>Life is organized in a hierarchy, each level built from the one below:</p><ul><li><strong>Subatomic particles → atoms → molecules</strong> (e.g. water, proteins)</li><li><strong>Organelles → cells</strong> — the basic unit of life</li><li><strong>Tissues → organs → organ systems → organism</strong> (e.g. human)</li><li><strong>Population → community → ecosystem → biosphere</strong></li></ul><p><strong>Emergent properties:</strong> each level has properties its parts lack — a heart pumps blood, but no single heart cell can. Biology studies life at <em>every</em> level, from molecules to the whole biosphere.</p>'},
{id:'c11-bio-ch1-l2',title:'Branches of Biology',html:'<h3>Branches of Biology</h3><p>Biology splits into branches by the level or aspect of life studied:</p><ul><li><strong>Morphology:</strong> structure of organisms | <strong>Anatomy:</strong> internal structure | <strong>Physiology:</strong> functions</li><li><strong>Cytology:</strong> cells | <strong>Genetics:</strong> heredity | <strong>Ecology:</strong> organisms and environment</li><li><strong>Taxonomy:</strong> naming and classification | <strong>Palaeontology:</strong> fossils</li><li><strong>Biotechnology:</strong> using living things in technology | <strong>Sociobiology:</strong> social behaviour</li></ul><p>Modern biology is <strong>interdisciplinary</strong>: biochemistry, biophysics and bioinformatics blend biology with other sciences. The <strong>scientific method</strong> — observation, hypothesis, experiment, conclusion — is its engine.</p>'}],
quiz:[
{q:'The correct order of organization is…',options:['cell → tissue → organ → organism','organ → cell → tissue → organism','tissue → cell → organism → organ','organism → organ → tissue → cell'],answer:0,explain:'Cells form tissues, tissues form organs, organs form systems, systems form the organism.'},
{q:'The study of heredity is called…',options:['ecology','genetics','taxonomy','cytology'],answer:1,explain:'Genetics studies how traits pass from parents to offspring.'},
{q:'Which branch studies fossils?',options:['Morphology','Palaeontology','Physiology','Histology'],answer:1,explain:'Palaeontology studies fossils and ancient life.'},
{q:'The basic unit of life is the…',options:['atom','tissue','cell','organ'],answer:2,explain:'The cell is the smallest unit that shows all properties of life.'},
{q:'A group of the same species in an area is a…',options:['community','population','ecosystem','biosphere'],answer:1,explain:'Population = one species; community = many species together.'},
{q:'Emergent properties mean…',options:['new species appear','each level has properties its parts lack','cells divide','fossils form'],answer:1,explain:'Emergence: the whole has properties not present in its parts.'}]},
{id:'c11-bio-ch2',title:'Biological Molecules',urdu:'حیاتیاتی سالمے',comingSoon:false,
lessons:[
{id:'c11-bio-ch2-l1',title:'Carbohydrates',html:'<h3>Carbohydrates</h3><p><strong>Carbohydrates</strong> are the main <strong>energy source</strong> for cells: general formula Cₓ(H₂O)ᵧ.</p><ul><li><strong>Monosaccharides</strong> (single sugars): <strong>glucose</strong> (blood sugar), fructose, galactose. Glucose is the cell\'s favourite fuel.</li><li><strong>Disaccharides</strong> (two sugars): sucrose (table sugar = glucose + fructose), lactose (milk sugar), maltose.</li><li><strong>Polysaccharides</strong> (many sugars): <strong>starch</strong> (energy store in plants), <strong>glycogen</strong> (energy store in animals), <strong>cellulose</strong> (plant cell walls — fibre).</li><li><strong>Benedict\'s test:</strong> heating with Benedict\'s solution turns reducing sugars <strong>brick red</strong>.</li></ul><p>Extra glucose is stored, not wasted: plants make starch, animals make glycogen. That is why rice, wheat and potatoes — all starchy — are staple foods.</p>'},
{id:'c11-bio-ch2-l2',title:'Proteins and Lipids',html:'<h3>Proteins and Lipids</h3><ul><li><strong>Proteins</strong> are chains of <strong>amino acids</strong> (20 types) joined by <strong>peptide bonds</strong>. Structure levels: <strong>primary</strong> (sequence) → <strong>secondary</strong> (α-helix, β-sheet) → <strong>tertiary</strong> (3D folding) → <strong>quaternary</strong> (multiple chains, e.g. haemoglobin). Functions: <strong>enzymes</strong>, hormones (insulin), antibodies, muscle (actin, myosin). <strong>Biuret test</strong> turns violet with proteins.</li><li><strong>Lipids</strong> (fats and oils) are <strong>triglycerides</strong>: glycerol + 3 fatty acids. They store <strong>more than twice</strong> the energy of carbohydrates per gram, insulate the body, and form <strong>cell membranes</strong> (phospholipids).</li></ul><p><strong>Nucleic acids</strong> (DNA, RNA) — the fourth group — store and transmit genetic information. Denaturation (by heat or pH) destroys protein shape and function — like boiling an egg.</p>'}],
quiz:[
{q:'The general formula of carbohydrates is…',options:['Cₓ(H₂O)ᵧ','CH₃COOH','C₆H₁₂','NH₂COOH'],answer:0,explain:'Carbohydrates follow Cₓ(H₂O)ᵧ — carbon plus water elements.'},
{q:'Glucose + fructose combine to form…',options:['lactose','maltose','sucrose','starch'],answer:2,explain:'Sucrose (table sugar) = glucose + fructose.'},
{q:'Energy is stored in animals as…',options:['starch','cellulose','glycogen','sucrose'],answer:2,explain:'Animals store glucose as glycogen (in liver and muscles); plants store starch.'},
{q:'Amino acids are joined by…',options:['glycosidic bonds','peptide bonds','hydrogen bonds','ester bonds'],answer:1,explain:'Peptide bonds link amino acids into protein chains.'},
{q:'Lipids are made of glycerol and…',options:['amino acids','fatty acids','sugars','nucleotides'],answer:1,explain:'A triglyceride = glycerol + 3 fatty acids.'},
{q:'Benedict\'s test detects…',options:['proteins','reducing sugars','lipids','starch'],answer:1,explain:'Heating with Benedict\'s solution gives a brick-red precipitate with reducing sugars.'}]},
CS('c11-bio-ch3','Enzymes','خامرے'),
CS('c11-bio-ch4','The Cell','خلیہ'),
CS('c11-bio-ch5','Variety of Life','زندگی کا تنوع'),
CS('c11-bio-ch6','Kingdom Prokaryotae','مملکت پروکیریوٹا'),
CS('c11-bio-ch7','The Kingdom Protista','مملکت پروٹسٹا'),
CS('c11-bio-ch8','Fungi','فنجائی'),
CS('c11-bio-ch9','Kingdom Plantae','مملکت نباتات'),
CS('c11-bio-ch10','Kingdom Animalia','مملکت حیوانات'),
CS('c11-bio-ch11','Bioenergetics','حیاتیاتی توانائی'),
CS('c11-bio-ch12','Nutrition','تغذیہ'),
CS('c11-bio-ch13','Gaseous Exchange','گیسوں کا تبادلہ'),
CS('c11-bio-ch14','Transport','ترسیل')]});

C.push({id:'class11-math',title:'Mathematics',urdu:'ریاضی',class:'Class 11',icon:'🔢',
desc:'Number systems, matrices, trigonometry and functions — FSc Part 1 Maths.',
chapters:[
CS('c11-math-ch1','Number Systems','نظامِ اعداد'),
CS('c11-math-ch2','Sets, Functions and Groups','سیٹ، فنکشن اور گروہ'),
CS('c11-math-ch3','Matrices and Determinants','میٹرکس اور دترمیننٹ'),
CS('c11-math-ch4','Quadratic Equations','دو درجی مساواتیں'),
CS('c11-math-ch5','Partial Fractions','جزوی کسریں'),
CS('c11-math-ch6','Sequences and Series','متوالیات'),
CS('c11-math-ch7','Permutation, Combination and Probability','تبدیل، ترکیب اور احتمال'),
CS('c11-math-ch8','Mathematical Induction and Binomial Theorem','ریاضیاتی استقرا'),
CS('c11-math-ch9','Fundamentals of Trigonometry','مثلثیات کے بنیادی اصول'),
CS('c11-math-ch10','Trigonometric Identities','مثلثیاتی شناختیں'),
CS('c11-math-ch11','Trigonometric Functions and Their Graphs','مثلثیاتی فنکشن'),
CS('c11-math-ch12','Application of Trigonometry','مثلثیات کے اطلاقات'),
CS('c11-math-ch13','Inverse Trigonometric Functions','معکوس مثلثیاتی فنکشن'),
CS('c11-math-ch14','Solutions of Trigonometric Equations','مثلثیاتی مساواتوں کے حل')]});

C.push({id:'class11-cs',title:'Computer Science',urdu:'کمپیوٹر سائنس',class:'Class 11',icon:'💻',
desc:'Computer systems, databases and programming in C — ICS Part 1.',
chapters:[
CS('c11-cs-ch1','Overview of Computer Systems','کمپیوٹر سسٹم کا جائزہ'),
CS('c11-cs-ch2','Computer Memory','کمپیوٹر میموری'),
CS('c11-cs-ch3','Data Representation','ڈیٹا کی نمائندگی'),
CS('c11-cs-ch4','Computer Architecture','کمپیوٹر آرکیٹیکچر'),
CS('c11-cs-ch5','Computer Software','کمپیوٹر سافٹ ویئر'),
CS('c11-cs-ch6','Data Security and Integrity','ڈیٹا کی حفاظت'),
CS('c11-cs-ch7','Database Fundamentals and DBMS Architecture','ڈیٹا بیس'),
CS('c11-cs-ch8','Getting Started with C','C زبان کا آغاز'),
CS('c11-cs-ch9','Elements of C','C کے اجزا'),
CS('c11-cs-ch10','Input and Output Handling','ان پٹ اور آؤٹ پٹ'),
CS('c11-cs-ch11','Control Structures','کنٹرول اسٹرکچر'),
CS('c11-cs-ch12','Arrays and Strings','ایریز اور اسٹرنگز'),
CS('c11-cs-ch13','Functions in C','C میں فنکشنز'),
CS('c11-cs-ch14','Pointers in C','پوائنٹرز'),
CS('c11-cs-ch15','Structures in C','اسٹرکچرز'),
CS('c11-cs-ch16','File Handling in C','فائل ہینڈلنگ')]});

C.push({id:'class11-english',title:'English',urdu:'انگریزی',class:'Class 11',icon:'📖',
desc:'Prose lessons, grammar, composition and translation — Inter Part 1.',
chapters:[
CS('c11-eng-ch1','The Dying Sun',''),
CS('c11-eng-ch2','Using the Scientific Method',''),
CS('c11-eng-ch3','Why Boys Fail in College',''),
CS('c11-eng-ch4','End of Term',''),
CS('c11-eng-ch5','On Destroying Books',''),
CS('c11-eng-ch6','The Man Who Was a Hospital',''),
CS('c11-eng-ch7','My Financial Career',''),
CS('c11-eng-ch8','China\'s Way to Progress',''),
CS('c11-eng-ch9','Hunger and Population Explosion',''),
CS('c11-eng-ch10','The Jewel of the World',''),
CS('c11-eng-ch11','First Year at Harrow',''),
CS('c11-eng-ch12','Hitch-Hiking Across the Sahara',''),
CS('c11-eng-ch13','Sir Alexander Fleming',''),
CS('c11-eng-ch14','Louis Pasteur',''),
CS('c11-eng-ch15','Mustafa Kamal',''),
CS('c11-eng-ch16','Grammar and Composition','قواعد و انشا'),
CS('c11-eng-ch17','Translation (Urdu to English)','ترجمہ')]});

C.push({id:'class11-urdu',title:'Urdu',urdu:'اردو',class:'Class 11',icon:'🖋️',
desc:'نثر، نظم، غزل اور قواعد — انٹرمیڈیٹ حصہ اول۔',
chapters:[
CS('c11-urd-ch1','حمد',''),
CS('c11-urd-ch2','نعت',''),
CS('c11-urd-ch3','خطوطِ غالب',''),
CS('c11-urd-ch4','سفرنامہ',''),
CS('c11-urd-ch5','خاکہ نگاری',''),
CS('c11-urd-ch6','افسانہ',''),
CS('c11-urd-ch7','غزلیں',''),
CS('c11-urd-ch8','نظمیں',''),
CS('c11-urd-ch9','قواعد و انشا','')]});

C.push({id:'class11-isl',title:'Islamiat',urdu:'اسلامیات',class:'Class 11',icon:'🕌',
desc:'اسلامی نظریۂ حیات، عقائد، عبادات اور سیرتِ نبوی ﷺ — لازمی مضمون۔',
chapters:[
CS('c11-isl-ch1','اسلامی نظریۂ حیات',''),
CS('c11-isl-ch2','توحید',''),
CS('c11-isl-ch3','رسالت',''),
CS('c11-isl-ch4','آخرت',''),
CS('c11-isl-ch5','عبادات: نماز، روزہ، زکوٰۃ، حج',''),
CS('c11-isl-ch6','قرآن مجید',''),
CS('c11-isl-ch7','حدیثِ نبوی ﷺ',''),
CS('c11-isl-ch8','سیرتِ نبوی ﷺ (مکی دور)',''),
CS('c11-isl-ch9','سیرتِ نبوی ﷺ (مدنی دور)',''),
CS('c11-isl-ch10','اسلامی معاشرت','')]});
})();

(function(){
var C = window.SHAHEEN_TRACKS['school'].courses;
function CS(id,title,urdu){return {id:id,title:title,urdu:urdu||'',comingSoon:true,lessons:[],quiz:[]};}

/* ================= CLASS 12 (FSc / ICS / FA Part 2) ================= */
C.push({id:'class12-physics',title:'Physics',urdu:'طبیعیات',class:'Class 12',icon:'⚛️',
desc:'Electromagnetism, electronics, modern and nuclear physics — FSc Part 2.',
chapters:[
{id:'c12-phy-ch12',title:'Electrostatics',urdu:'برقی سکونیات',comingSoon:false,
lessons:[
{id:'c12-phy-ch12-l1',title:'Coulomb\'s Law',html:'<h3>Coulomb\'s Law</h3><p><strong>Coulomb\'s law</strong> gives the force between two point charges: <strong>F = k·q₁q₂ / r²</strong>, where k = 9 × 10⁹ N·m²/C².</p><ul><li>Like charges <strong>repel</strong>, unlike charges <strong>attract</strong> — the force acts along the line joining them.</li><li>It is an <strong>inverse-square law</strong>: doubling the distance cuts the force to one-fourth.</li><li><strong>Example:</strong> two 1 μC charges 1 m apart: F = 9×10⁹ × 10⁻⁶ × 10⁻⁶ / 1² = <strong>9 × 10⁻³ N</strong>.</li><li>In a medium, replace k with 1/(4πε₀εᵣ) — the force weakens by the <strong>dielectric constant</strong> εᵣ.</li></ul><p>Coulomb\'s law mirrors Newton\'s gravitation law — both are inverse-square. But electric forces can be vastly stronger: the electric repulsion between two protons is ~10³⁶ times their gravitational attraction!</p>'},
{id:'c12-phy-ch12-l2',title:'Electric Field and Potential',html:'<h3>Electric Field and Potential</h3><ul><li><strong>Electric field</strong> E = F/q — force per unit charge (N/C or V/m). For a point charge: <strong>E = kQ/r²</strong>, pointing away from positive charges.</li><li><strong>Electric potential</strong> V = W/q — work per unit charge (volt). For a point charge: <strong>V = kQ/r</strong> (a scalar — no direction!).</li><li><strong>Relation:</strong> E = −ΔV/Δr — field is the slope of potential. Move along the field and potential <strong>falls</strong>.</li><li><strong>Capacitor:</strong> C = Q/V. Parallel plate: <strong>C = ε₀A/d</strong>. Energy stored: <strong>U = ½QV = ½CV²</strong>.</li></ul><p>Field lines never cross and are densest where the field is strongest. Equipotential surfaces are always <strong>perpendicular</strong> to field lines — that is why a conductor\'s surface is an equipotential.</p>'}],
quiz:[
{q:'Coulomb\'s law: F = …',options:['k·q₁q₂/r','k·q₁q₂/r²','k·q₁q₂·r²','k·(q₁+q₂)/r'],answer:1,explain:'F = k·q₁q₂/r² — an inverse-square law.'},
{q:'If the distance between two charges is doubled, the force becomes…',options:['double','half','one-fourth','four times'],answer:2,explain:'Inverse square: (1/2)² = 1/4 of the original force.'},
{q:'The unit of electric field is…',options:['volt','newton per coulomb','coulomb per metre','joule'],answer:1,explain:'E = F/q, so its unit is N/C (equivalent to V/m).'},
{q:'Electric potential is…',options:['a vector','a scalar','a force','a charge'],answer:1,explain:'Potential V = W/q has magnitude only — it is a scalar.'},
{q:'Capacitance of a parallel-plate capacitor is…',options:['ε₀A/d','ε₀d/A','Q·V','V/Q'],answer:0,explain:'C = ε₀A/d — bigger area or smaller gap means more capacitance.'},
{q:'Energy stored in a capacitor = …',options:['QV','½QV','Q²V','Q/V'],answer:1,explain:'U = ½QV = ½CV² = Q²/2C.'}]},
{id:'c12-phy-ch13',title:'Current Electricity',urdu:'رواں بجلی',comingSoon:false,
lessons:[
{id:'c12-phy-ch13-l1',title:'Ohm\'s Law and Resistivity',html:'<h3>Ohm\'s Law and Resistivity</h3><p><strong>Ohm\'s law:</strong> <strong>V = IR</strong> — current through a conductor is directly proportional to the voltage across it (at constant temperature).</p><ul><li><strong>Resistance</strong> R = ρL/A: longer wire → more resistance; thicker wire → less. <strong>ρ</strong> (rho) is <strong>resistivity</strong>, a material property (Ω·m). Copper ρ ≈ 1.7 × 10⁻⁸ Ω·m.</li><li>Resistance of metals <strong>rises with temperature</strong>: R = R₀(1 + αΔT).</li><li><strong>Power:</strong> P = VI = I²R = V²/R. A 100 W bulb at 220 V draws I = P/V ≈ <strong>0.45 A</strong>.</li></ul><p><strong>EMF vs terminal voltage:</strong> a battery\'s EMF (ε) is its open-circuit voltage; with internal resistance r, terminal voltage V = ε − Ir. That is why a car battery\'s voltage dips while starting the engine.</p>'},
{id:'c12-phy-ch13-l2',title:'Kirchhoff\'s Laws',html:'<h3>Kirchhoff\'s Laws</h3><p>For circuits too tangled for simple series/parallel rules, use <strong>Kirchhoff\'s laws</strong>:</p><ul><li><strong>Current law (junction rule):</strong> ΣI = 0 — current entering a junction equals current leaving. (Conservation of charge.)</li><li><strong>Voltage law (loop rule):</strong> ΣV = 0 around any closed loop. (Conservation of energy.) Rise = drop: going through a battery from − to + is a <strong>rise</strong> (+ε); through a resistor in the current\'s direction is a <strong>drop</strong> (−IR).</li><li><strong>Wheatstone bridge:</strong> balanced (no galvanometer current) when <strong>P/Q = R/S</strong> — used to measure unknown resistance precisely.</li><li><strong>Potentiometer:</strong> compares EMFs without drawing current: ε₁/ε₂ = l₁/l₂.</li></ul><p>Method: label all currents, write the junction equation, then one loop equation per mesh, and solve. Sign discipline is everything — pick a loop direction and stick to it.</p>'}],
quiz:[
{q:'Ohm\'s law states…',options:['V = I/R','V = IR','I = VR','R = VI'],answer:1,explain:'V = IR: voltage equals current times resistance.'},
{q:'Doubling a wire\'s length while keeping thickness same…',options:['halves resistance','doubles resistance','does not change it','makes it zero'],answer:1,explain:'R = ρL/A: resistance is directly proportional to length.'},
{q:'Power dissipated in a resistor can be written as…',options:['I²R only','V²/R only','VI, I²R and V²/R','V/I'],answer:2,explain:'P = VI = I²R = V²/R — all three forms are equivalent.'},
{q:'Kirchhoff\'s current law is based on conservation of…',options:['energy','charge','momentum','mass'],answer:1,explain:'Charge cannot accumulate at a junction: in = out.'},
{q:'A Wheatstone bridge is balanced when…',options:['P + Q = R + S','P/Q = R/S','P·Q = R·S','P − Q = R − S'],answer:1,explain:'Balance condition: P/Q = R/S, giving zero galvanometer current.'},
{q:'Terminal voltage of a battery with internal resistance r is…',options:['ε + Ir','ε − Ir','ε/Ir','Ir − ε'],answer:1,explain:'V = ε − Ir: some EMF is lost across the internal resistance.'}]},
CS('c12-phy-ch14','Electromagnetism','برقی مقناطیسیت'),
CS('c12-phy-ch15','Electromagnetic Induction','برقی مقناطیسی تحریض'),
CS('c12-phy-ch16','Alternating Current','متبادل رو'),
CS('c12-phy-ch17','Physics of Solids','ٹھوس اجسام کی طبیعیات'),
CS('c12-phy-ch18','Electronics','الیکٹرانکس'),
CS('c12-phy-ch19','Dawn of Modern Physics','جدید طبیعیات کا آغاز'),
CS('c12-phy-ch20','Atomic Spectra','ایٹمی طیف'),
CS('c12-phy-ch21','Nuclear Physics','جوہری طبیعیات')]});

C.push({id:'class12-chemistry',title:'Chemistry',urdu:'کیمیا',class:'Class 12',icon:'🧪',
desc:'s/p/d/f block elements and the full organic chemistry course.',
chapters:[
{id:'c12-che-ch1',title:'s and p Block Elements',urdu:'s اور p بلاک عناصر',comingSoon:false,
lessons:[
{id:'c12-che-ch1-l1',title:'Periodic Trends in s and p Blocks',html:'<h3>Periodic Trends in s and p Blocks</h3><p>The <strong>s-block</strong> (Groups 1–2: alkali and alkaline earth metals) and <strong>p-block</strong> (Groups 13–18) show clear trends:</p><ul><li><strong>Atomic size:</strong> decreases across a period (stronger nuclear pull), increases down a group (new shells).</li><li><strong>Ionization energy:</strong> increases across a period, decreases down a group. Noble gases (Group 18) have the <strong>highest</strong> IE — full shells resist losing electrons.</li><li><strong>Electronegativity:</strong> increases across, decreases down. <strong>Fluorine</strong> is the most electronegative element.</li><li><strong>s-block</strong> metals are soft, low-melting, strong reducing agents (lose electrons easily). <strong>p-block</strong> spans metals, metalloids and non-metals.</li></ul><p>Trend logic: across a period, protons increase but shells stay the same → tighter grip. Down a group, new shells shield the outer electrons → looser grip.</p>'},
{id:'c12-che-ch1-l2',title:'Chemistry of Groups 1 and 2',html:'<h3>Chemistry of Groups 1 and 2</h3><ul><li><strong>Group 1 (alkali metals):</strong> Li, Na, K… — one valence electron, form <strong>+1 ions</strong>. Extremely reactive: 2Na + 2H₂O → 2NaOH + H₂. Reactivity <strong>increases down</strong> the group (K explodes in water). Stored in <strong>kerosene oil</strong>.</li><li><strong>Group 2 (alkaline earths):</strong> Mg, Ca… — form <strong>+2 ions</strong>, less reactive than Group 1. Mg burns with a brilliant white flame; CaCO₃ (limestone) → CaO + CO₂ on heating.</li><li><strong>Flame colours:</strong> Li crimson, Na <strong>golden yellow</strong>, K lilac, Ca brick red — the basis of the <strong>flame test</strong>.</li><li><strong>Diagonal relationship:</strong> Li resembles Mg (similar charge density) — e.g. both form nitrides directly.</li></ul><p>Why is Na soft enough to cut with a knife? Metallic bonding with just one valence electron per atom is weak — the lattice gives way easily.</p>'}],
quiz:[
{q:'Across a period, atomic size…',options:['increases','decreases','stays same','doubles'],answer:1,explain:'More protons pull the same shells tighter — size decreases.'},
{q:'The most electronegative element is…',options:['Oxygen','Chlorine','Fluorine','Sodium'],answer:2,explain:'Fluorine tops the electronegativity scale.'},
{q:'Sodium is stored in kerosene oil because…',options:['it dissolves in water','it reacts violently with air and moisture','it evaporates','it is poisonous'],answer:1,explain:'Na reacts with air/moisture; kerosene keeps it isolated.'},
{q:'The flame colour of sodium is…',options:['crimson','lilac','golden yellow','brick red'],answer:2,explain:'Sodium gives a characteristic golden-yellow flame.'},
{q:'Group 2 elements form ions with charge…',options:['+1','+2','−1','+3'],answer:1,explain:'Alkaline earth metals lose 2 valence electrons → +2 ions.'},
{q:'Reactivity of alkali metals down the group…',options:['decreases','increases','stays same','becomes zero'],answer:1,explain:'Larger atoms lose their outer electron more easily — reactivity increases.'}]},
{id:'c12-che-ch2',title:'d and f Block Elements',urdu:'d اور f بلاک عناصر',comingSoon:false,
lessons:[
{id:'c12-che-ch2-l1',title:'Properties of Transition Elements',html:'<h3>Properties of Transition Elements</h3><p><strong>Transition elements</strong> (d-block, Groups 3–12) have partially filled <strong>d orbitals</strong>. Their special properties:</p><ul><li><strong>Variable oxidation states:</strong> Fe shows +2 and +3; Mn shows +2, +4, +7. (Sc and Zn are <strong>not</strong> true transition elements — fixed states.)</li><li><strong>Coloured ions:</strong> Cu²⁺ blue, Fe³⁺ yellow-brown, MnO₄⁻ purple — due to <strong>d–d electron transitions</strong>.</li><li><strong>Paramagnetism:</strong> unpaired d electrons make them attracted to magnets.</li><li><strong>Catalysis:</strong> Fe in the <strong>Haber process</strong> (NH₃), Ni in hydrogenation of oils, V₂O₅ in the <strong>Contact process</strong> (H₂SO₄).</li><li><strong>Complex formation:</strong> they accept electron pairs into empty d orbitals — e.g. [Cu(NH₃)₄]²⁺.</li></ul><p>Zinc is used to galvanize iron but is not a transition element: its d shell is full (d¹⁰) in all its compounds.</p>'},
{id:'c12-che-ch2-l2',title:'The f-Block: Lanthanides and Actinides',html:'<h3>The f-Block: Lanthanides and Actinides</h3><p>The <strong>f-block</strong> fills the 4f and 5f orbitals:</p><ul><li><strong>Lanthanides</strong> (La–Lu, 4f): silvery metals, strong <strong>+3</strong> oxidation state, used in magnets, camera lenses and phosphors. <strong>Lanthanide contraction:</strong> size shrinks across the series as 4f electrons shield poorly.</li><li><strong>Actinides</strong> (Ac–Lr, 5f): all <strong>radioactive</strong>. Uranium-235 fuels <strong>nuclear reactors</strong> and weapons; thorium is a potential future fuel.</li><li>Both series sit below the main periodic table to keep it compact.</li><li><strong>Nuclear fission:</strong> ²³⁵U + neutron → fragments + 2–3 neutrons + huge energy — the chain reaction behind nuclear power.</li></ul><p>Pakistan\'s nuclear programme — from the 1998 tests to the Karachi and Chashma power plants — rests on actinide chemistry: uranium.</p>'}],
quiz:[
{q:'Transition elements have partially filled…',options:['s orbitals','p orbitals','d orbitals','f orbitals'],answer:2,explain:'The d-block: partially filled d orbitals define transition elements.'},
{q:'Which is NOT a true transition element?',options:['Iron','Copper','Zinc','Chromium'],answer:2,explain:'Zinc has a full d¹⁰ shell in all compounds — not a true transition element.'},
{q:'The purple colour of MnO₄⁻ is due to…',options:['reflection','d–d transitions','flame','ionization'],answer:1,explain:'d–d electron transitions absorb specific wavelengths, giving colour.'},
{q:'The catalyst in the Haber process is…',options:['Ni','V₂O₅','Fe','Pt'],answer:2,explain:'Iron catalyzes N₂ + 3H₂ → 2NH₃ in the Haber process.'},
{q:'Lanthanides mainly show oxidation state…',options:['+1','+2','+3','+7'],answer:2,explain:'The +3 state dominates lanthanide chemistry.'},
{q:'Which actinide is used as nuclear fuel?',options:['Thorium-232 only','Uranium-235','Lanthanum','Cerium'],answer:1,explain:'Uranium-235 undergoes fission and fuels nuclear reactors.'}]},
CS('c12-che-ch3','Organic Chemistry','نامیاتی کیمیا'),
CS('c12-che-ch4','Hydrocarbons','ہائیڈرو کاربن'),
CS('c12-che-ch5','Alkyl Halides','الکائل ہیلائڈ'),
CS('c12-che-ch6','Alcohols and Phenols','الکحل اور فینول'),
CS('c12-che-ch7','Aldehydes and Ketones','الڈیہائڈ اور کیٹون'),
CS('c12-che-ch8','Carboxylic Acids','کاربوکسائلک ایسڈ'),
CS('c12-che-ch9','Macromolecules','بڑے سالمے'),
CS('c12-che-ch10','Environmental Chemistry','ماحولیاتی کیمیا')]});

C.push({id:'class12-biology',title:'Biology',urdu:'حیاتیات',class:'Class 12',icon:'🧬',
desc:'Homeostasis, genetics, biotechnology and evolution — FSc Part 2.',
chapters:[
{id:'c12-bio-ch15',title:'Homeostasis',urdu:'ہومیو سٹیسس (توازن)',comingSoon:false,
lessons:[
{id:'c12-bio-ch15-l1',title:'Osmoregulation',html:'<h3>Osmoregulation</h3><p><strong>Homeostasis</strong> is keeping the internal environment <strong>stable</strong> despite outside changes. <strong>Osmoregulation</strong> controls water and salt balance.</p><ul><li><strong>In humans:</strong> the <strong>kidneys</strong> filter blood; <strong>ADH</strong> (antidiuretic hormone) tells kidneys to reabsorb water when the body is dehydrated — urine becomes concentrated and dark.</li><li><strong>In plants:</strong> <strong>stomata</strong> close to reduce water loss; roots absorb water by <strong>osmosis</strong>.</li><li><strong>Freshwater fish</strong> gain water by osmosis and excrete dilute urine; <strong>marine fish</strong> lose water and drink seawater, excreting concentrated urine.</li></ul><p>Feedback loops run homeostasis: sensors detect change → control centre decides → effectors correct it. Negative feedback keeps everything near a <strong>set point</strong>.</p>'},
{id:'c12-bio-ch15-l2',title:'Thermoregulation',html:'<h3>Thermoregulation</h3><p><strong>Thermoregulation</strong> keeps body temperature near its set point (~37°C in humans).</p><ul><li><strong>When hot:</strong> sweating (evaporative cooling), <strong>vasodilation</strong> (blood vessels widen, skin flushes), reduced metabolism.</li><li><strong>When cold:</strong> <strong>shivering</strong> (muscles generate heat), <strong>vasoconstriction</strong> (vessels narrow, less heat lost), goosebumps, increased metabolic rate.</li><li>The <strong>hypothalamus</strong> (brain) is the thermostat; skin receptors report temperature.</li><li><strong>Endotherms</strong> (birds, mammals) generate internal heat; <strong>ectotherms</strong> (reptiles) rely on the environment — that is why lizards bask in the sun.</li></ul><p>Fever is the set point <em>raised</em> on purpose — the body heats up to fight infection. Sweating when the fever "breaks" is the body cooling back to normal.</p>'}],
quiz:[
{q:'Homeostasis means…',options:['rapid growth','keeping the internal environment stable','cell division','evolution'],answer:1,explain:'Homeostasis = maintaining stable internal conditions.'},
{q:'ADH causes the kidneys to…',options:['excrete more water','reabsorb more water','stop filtering','produce urea'],answer:1,explain:'ADH (antidiuretic hormone) increases water reabsorption, concentrating urine.'},
{q:'When the body is cold, blood vessels…',options:['dilate','constrict','disappear','multiply'],answer:1,explain:'Vasoconstriction narrows vessels, reducing heat loss from skin.'},
{q:'The body\'s thermostat is the…',options:['cerebrum','hypothalamus','cerebellum','medulla'],answer:1,explain:'The hypothalamus monitors blood temperature and triggers responses.'},
{q:'Marine fish cope with water loss by…',options:['never drinking','drinking seawater and excreting concentrated urine','excreting dilute urine','absorbing water through skin'],answer:1,explain:'Salt water draws water out, so marine fish drink seawater and excrete concentrated urine.'},
{q:'Shivering helps because…',options:['it cools the skin','muscle activity generates heat','it increases sweating','it dilates vessels'],answer:1,explain:'Rapid muscle contractions in shivering release heat.'}]},
{id:'c12-bio-ch16',title:'Support and Movement',urdu:'سہارا اور حرکت',comingSoon:false,
lessons:[
{id:'c12-bio-ch16-l1',title:'The Human Skeleton',html:'<h3>The Human Skeleton</h3><p>The adult human skeleton has <strong>206 bones</strong> with two divisions:</p><ul><li><strong>Axial skeleton</strong> (80 bones): skull, vertebral column (33 vertebrae), ribs (12 pairs) and sternum — protects brain, spinal cord, heart and lungs.</li><li><strong>Appendicular skeleton</strong> (126 bones): limbs, shoulder and hip girdles — built for movement.</li><li><strong>Joints:</strong> <strong>immovable</strong> (skull sutures), <strong>slightly movable</strong> (vertebrae), <strong>freely movable/synovial</strong> — hinge (elbow, knee), ball-and-socket (shoulder, hip).</li><li><strong>Cartilage</strong> cushions joint ends; <strong>ligaments</strong> (bone to bone) stabilize joints.</li></ul><p>Bone is living tissue: <strong>osteoblasts</strong> build it, <strong>osteoclasts</strong> reshape it, and marrow makes blood cells. Calcium and vitamin D keep bones strong.</p>'},
{id:'c12-bio-ch16-l2',title:'Muscles and Movement',html:'<h3>Muscles and Movement</h3><p><strong>Muscles</strong> pull — they never push. Movement needs <strong>antagonistic pairs</strong>:</p><ul><li>Bend your arm: the <strong>biceps contracts</strong> (flexor) while the <strong>triceps relaxes</strong>. Straighten: triceps contracts, biceps relaxes.</li><li><strong>Tendons</strong> attach muscle to bone and transmit the pull.</li><li><strong>Muscle types:</strong> <strong>skeletal</strong> (voluntary, striped), <strong>smooth</strong> (involuntary — gut, blood vessels), <strong>cardiac</strong> (heart — involuntary, never tires).</li><li><strong>Sliding filament theory:</strong> <strong>actin</strong> filaments slide past <strong>myosin</strong>, powered by <strong>ATP</strong>; calcium ions trigger the contraction.</li></ul><p>Cramps are sustained involuntary contractions — often from dehydration or low salts. Warm up before exercise: warm muscles contract more efficiently and tear less easily.</p>'}],
quiz:[
{q:'An adult human has how many bones?',options:['106','206','306','186'],answer:1,explain:'The adult skeleton has 206 bones (babies have about 300).'},
{q:'The shoulder joint is an example of a…',options:['hinge joint','ball-and-socket joint','fixed joint','gliding joint'],answer:1,explain:'The shoulder\'s ball-and-socket joint allows rotation in many directions.'},
{q:'Ligaments connect…',options:['muscle to bone','bone to bone','muscle to muscle','skin to bone'],answer:1,explain:'Ligaments join bone to bone; tendons join muscle to bone.'},
{q:'When the biceps contracts, the triceps…',options:['also contracts','relaxes','tears','shortens'],answer:1,explain:'Antagonistic pairs work oppositely: one contracts while the other relaxes.'},
{q:'Muscle contraction is powered by…',options:['glucose directly','ATP','oxygen','water'],answer:1,explain:'ATP provides the energy for myosin to pull actin filaments.'},
{q:'Cardiac muscle is…',options:['voluntary and striped','involuntary and non-tiring','found in the gut','controlled consciously'],answer:1,explain:'Cardiac muscle works involuntarily and does not fatigue.'}]},
CS('c12-bio-ch17','Coordination and Control','ہم آہنگی اور کنٹرول'),
CS('c12-bio-ch18','Reproduction','تولید'),
CS('c12-bio-ch19','Growth and Development','نشوونما'),
CS('c12-bio-ch20','Chromosomes and DNA','کروموسوم اور ڈی این اے'),
CS('c12-bio-ch21','Cell Cycle','خلوی چکر'),
CS('c12-bio-ch22','Variation and Genetics','تنوع اور وراثت'),
CS('c12-bio-ch23','Biotechnology','بایو ٹیکنالوجی'),
CS('c12-bio-ch24','Evolution','ارتقا'),
CS('c12-bio-ch25','Ecosystem','ماحولیاتی نظام'),
CS('c12-bio-ch26','Some Major Ecosystems','بڑے ماحولیاتی نظام'),
CS('c12-bio-ch27','Man and His Environment','انسان اور ماحول')]});

C.push({id:'class12-math',title:'Mathematics',urdu:'ریاضی',class:'Class 12',icon:'🔢',
desc:'Limits, differentiation, integration and vectors — FSc Part 2 Maths.',
chapters:[
CS('c12-math-ch1','Functions and Limits','فنکشن اور حد'),
CS('c12-math-ch2','Differentiation','تفریق'),
CS('c12-math-ch3','Integration','تکامل'),
CS('c12-math-ch4','Introduction to Analytic Geometry','تحلیلی ہندسہ'),
CS('c12-math-ch5','Linear Inequalities and Linear Programming','خطی غیر مساواتیں'),
CS('c12-math-ch6','Conic Section','مخروطی قطع'),
CS('c12-math-ch7','Vectors','سمتی مقداریں')]});

C.push({id:'class12-cs',title:'Computer Science',urdu:'کمپیوٹر سائنس',class:'Class 12',icon:'💻',
desc:'C++ programming, databases and networks — ICS Part 2.',
chapters:[
CS('c12-cs-ch1','Introduction to Programming with C++','C++ میں پروگرامنگ'),
CS('c12-cs-ch2','Basic Elements of C++','C++ کے بنیادی اجزا'),
CS('c12-cs-ch3','Control Structures','کنٹرول اسٹرکچر'),
CS('c12-cs-ch4','Functions','فنکشنز'),
CS('c12-cs-ch5','Arrays','ایریز'),
CS('c12-cs-ch6','Pointers','پوائنٹرز'),
CS('c12-cs-ch7','Classes and Objects','کلاسز اور آبجیکٹس'),
CS('c12-cs-ch8','File Handling','فائل ہینڈلنگ'),
CS('c12-cs-ch9','Databases and MS Access','ڈیٹا بیس'),
CS('c12-cs-ch10','Computer Networks','کمپیوٹر نیٹ ورک')]});

C.push({id:'class12-english',title:'English',urdu:'انگریزی',class:'Class 12',icon:'📖',
desc:'Good-bye Mr. Chips, short stories and composition — Inter Part 2.',
chapters:[
CS('c12-eng-ch1','Good-bye, Mr. Chips (Novel)','ناول'),
CS('c12-eng-ch2','Short Stories (Section I)','افسانے'),
CS('c12-eng-ch3','Grammar and Composition','قواعد و انشا'),
CS('c12-eng-ch4','Translation (Urdu to English)','ترجمہ')]});

C.push({id:'class12-urdu',title:'Urdu',urdu:'اردو',class:'Class 12',icon:'🖋️',
desc:'نثر، نظم، ڈرامہ اور انشا — انٹرمیڈیٹ حصہ دوم۔',
chapters:[
CS('c12-urd-ch1','حمد',''),
CS('c12-urd-ch2','نعت',''),
CS('c12-urd-ch3','افسانے',''),
CS('c12-urd-ch4','ڈرامہ',''),
CS('c12-urd-ch5','غزلیں',''),
CS('c12-urd-ch6','نظمیں',''),
CS('c12-urd-ch7','قواعد و انشا','')]});

C.push({id:'class12-pst',title:'Pakistan Studies',urdu:'مطالعۂ پاکستان',class:'Class 12',icon:'🇵🇰',
desc:'Ideology, the Pakistan Movement, history, geography and economy — compulsory.',
chapters:[
CS('c12-pst-ch1','Ideology of Pakistan','نظریۂ پاکستان'),
CS('c12-pst-ch2','Pakistan Movement in the Twentieth Century','بیسویں صدی میں تحریکِ پاکستان'),
CS('c12-pst-ch3','Efforts for the Renaissance of Islamic Ideology','اسلامی نظریے کی تجدید کی کوششیں'),
CS('c12-pst-ch4','Establishment of Pakistan (1857–1947)','قیامِ پاکستان'),
CS('c12-pst-ch5','History of Pakistan (1947–1971)','پاکستان کی تاریخ'),
CS('c12-pst-ch6','History of Pakistan (1971 to Date)','پاکستان کی تاریخ'),
CS('c12-pst-ch7','Pakistan and the Muslim World','پاکستان اور عالمِ اسلام'),
CS('c12-pst-ch8','Geography of Pakistan','پاکستان کا جغرافیہ'),
CS('c12-pst-ch9','Economy of Pakistan','پاکستان کی معیشت'),
CS('c12-pst-ch10','Society and Culture of Pakistan','پاکستانی معاشرہ و ثقافت')]});
})();
