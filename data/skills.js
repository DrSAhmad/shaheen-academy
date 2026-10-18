// Shaheen Academy — Skills track (Career & digital skills)
// Registers window.SHAHEEN_TRACKS['skills'].
// Lesson code examples use <pre><code> with <, >, & escaped as entities.
window.SHAHEEN_TRACKS = window.SHAHEEN_TRACKS || {};
window.SHAHEEN_TRACKS['skills'] = {
meta: {id:'skills', title:'Skills', urdu:'ہنر', tagline:'Career & digital skills', icon:'💼'},
courses: [
{
id:'web-dev', title:'Web Development Foundations', urdu:'ویب ڈویلپمنٹ',
desc:`Learn HTML, CSS and JavaScript from zero and publish your first website. No prior experience needed — every lesson includes runnable code you can try in your browser.`,
icon:'🌐',
chapters: [
{
id:'web-html', title:'HTML Basics', urdu:'ایچ ٹی ایم ایل کی بنیادی باتیں', comingSoon:false,
lessons: [
{
id:'web-html-l1', title:'What Is HTML? How the Web Works',
html:`<h3>What Is HTML?</h3>
<p><strong>HTML</strong> (HyperText Markup Language) is the skeleton of every web page. It is not a programming language — it is a <em>markup</em> language: you wrap content in <strong>tags</strong> to tell the browser what each part means.</p>
<h3>How a web page reaches you</h3>
<ol>
<li>You type a web address. Your <strong>browser</strong> (Chrome, Firefox) sends a request.</li>
<li>A <strong>server</strong> sends back files: HTML (structure), CSS (styling) and JavaScript (interactivity).</li>
<li>The browser reads the HTML and draws the page on your screen.</li>
</ol>
<h3>The three layers</h3>
<ul>
<li><strong>HTML</strong> — the structure: headings, paragraphs, images, links.</li>
<li><strong>CSS</strong> — the appearance: colours, fonts, layout.</li>
<li><strong>JavaScript</strong> — the behaviour: buttons that respond, forms that validate.</li>
</ul>
<p><strong>Try it:</strong> on any web page, right-click and choose "View page source". That is the HTML the browser received. In this chapter you will learn to write it yourself.</p>`
},
{
id:'web-html-l2', title:'Your First HTML Page',
html:`<h3>Anatomy of an HTML document</h3>
<p>Every HTML page follows the same skeleton. Type this into a text editor and save it as <code>index.html</code>, then open it in your browser:</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My First Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Assalam-o-Alaikum!&lt;/h1&gt;
  &lt;p&gt;This is my first web page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<h3>What each part does</h3>
<ul>
<li><code>&lt;!DOCTYPE html&gt;</code> — tells the browser this is a modern HTML5 document.</li>
<li><code>&lt;html&gt;</code> — the root element; everything sits inside it.</li>
<li><code>&lt;head&gt;</code> — invisible information: the page <code>&lt;title&gt;</code> shown in the browser tab.</li>
<li><code>&lt;body&gt;</code> — everything the visitor actually sees.</li>
</ul>
<p><strong>Rule:</strong> most tags come in pairs — an opening tag <code>&lt;p&gt;</code> and a closing tag <code>&lt;/p&gt;</code> with a forward slash. Always close your tags.</p>`
},
{
id:'web-html-l3', title:'Headings, Paragraphs & Text',
html:`<h3>Headings</h3>
<p>HTML gives you six heading levels. <code>&lt;h1&gt;</code> is the most important (use it once per page), <code>&lt;h6&gt;</code> the least:</p>
<pre><code>&lt;h1&gt;Main Title&lt;/h1&gt;
&lt;h2&gt;Section Heading&lt;/h2&gt;
&lt;h3&gt;Sub-section&lt;/h3&gt;
&lt;p&gt;This is a paragraph of regular text.&lt;/p&gt;</code></pre>
<h3>Formatting text</h3>
<ul>
<li><code>&lt;strong&gt;</code> — <strong>important</strong> text (bold).</li>
<li><code>&lt;em&gt;</code> — <em>emphasised</em> text (italic).</li>
<li><code>&lt;br&gt;</code> — a line break. It needs no closing tag.</li>
<li><code>&lt;hr&gt;</code> — a horizontal rule dividing sections.</li>
</ul>
<pre><code>&lt;p&gt;I &lt;strong&gt;love&lt;/strong&gt; learning &lt;em&gt;web development&lt;/em&gt;.&lt;br&gt;
This is on a new line.&lt;/p&gt;
&lt;hr&gt;</code></pre>
<p><strong>Tip:</strong> headings are about <em>meaning</em>, not size. Do not use <code>&lt;h1&gt;</code> just to make text big — that is CSS's job, which you will learn in the next chapter.</p>`
},
{
id:'web-html-l4', title:'Links & Images',
html:`<h3>Links</h3>
<p>The <code>&lt;a&gt;</code> (anchor) tag creates links. The <code>href</code> <strong>attribute</strong> holds the destination:</p>
<pre><code>&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;
&lt;a href="about.html"&gt;About Us&lt;/a&gt;</code></pre>
<p>The first link goes to another website; the second links to another page in your own site. To open a link in a new tab, add <code>target="_blank"</code>.</p>
<h3>Images</h3>
<pre><code>&lt;img src="milo.png" alt="Milo the baby monkey waving" width="300"&gt;</code></pre>
<ul>
<li><code>src</code> — the image file's location.</li>
<li><code>alt</code> — text describing the image. Screen readers read it aloud, and it shows if the image fails to load. <strong>Always include alt text.</strong></li>
<li><code>width</code> — display width in pixels (height scales automatically).</li>
</ul>
<p>Unlike most tags, <code>&lt;img&gt;</code> has no closing tag — the attributes carry all the information.</p>`
},
{
id:'web-html-l5', title:'Lists & Tables',
html:`<h3>Lists</h3>
<p>Unordered lists (<code>&lt;ul&gt;</code>) show bullets; ordered lists (<code>&lt;ol&gt;</code>) show numbers. Each item is an <code>&lt;li&gt;</code>:</p>
<pre><code>&lt;ul&gt;
  &lt;li&gt;HTML&lt;/li&gt;
  &lt;li&gt;CSS&lt;/li&gt;
  &lt;li&gt;JavaScript&lt;/li&gt;
&lt;/ul&gt;

&lt;ol&gt;
  &lt;li&gt;Learn HTML&lt;/li&gt;
  &lt;li&gt;Learn CSS&lt;/li&gt;
  &lt;li&gt;Build a website&lt;/li&gt;
&lt;/ol&gt;</code></pre>
<h3>Tables</h3>
<p>Tables organise data into rows and columns — perfect for schedules or price lists:</p>
<pre><code>&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;th&gt;Day&lt;/th&gt;
    &lt;th&gt;Topic&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Monday&lt;/td&gt;
    &lt;td&gt;HTML&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Tuesday&lt;/td&gt;
    &lt;td&gt;CSS&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
<ul>
<li><code>&lt;tr&gt;</code> — table row.</li>
<li><code>&lt;th&gt;</code> — header cell (bold, centred).</li>
<li><code>&lt;td&gt;</code> — regular data cell.</li>
</ul>`
},
{
id:'web-html-l6', title:'Forms: Collecting User Input',
html:`<h3>Why forms matter</h3>
<p>Forms collect information: login pages, contact pages, order checkouts. A <code>&lt;form&gt;</code> wraps input fields and a submit button:</p>
<pre><code>&lt;form&gt;
  &lt;label for="name"&gt;Your name:&lt;/label&gt;
  &lt;input type="text" id="name" name="name" placeholder="e.g. Ali Raza"&gt;
  &lt;br&gt;&lt;br&gt;
  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email" required&gt;
  &lt;br&gt;&lt;br&gt;
  &lt;label for="city"&gt;City:&lt;/label&gt;
  &lt;select id="city" name="city"&gt;
    &lt;option&gt;Lahore&lt;/option&gt;
    &lt;option&gt;Karachi&lt;/option&gt;
    &lt;option&gt;Islamabad&lt;/option&gt;
  &lt;/select&gt;
  &lt;br&gt;&lt;br&gt;
  &lt;button type="submit"&gt;Send&lt;/button&gt;
&lt;/form&gt;</code></pre>
<h3>Key input types</h3>
<ul>
<li><code>type="text"</code> — single-line text.</li>
<li><code>type="email"</code> — validates the email format automatically.</li>
<li><code>type="password"</code> — hides typed characters.</li>
<li><code>type="number"</code>, <code>type="date"</code>, <code>type="checkbox"</code> — specialised inputs.</li>
</ul>
<p>The <code>required</code> attribute blocks submission until the field is filled. The <code>&lt;label&gt;</code> tag's <code>for</code> must match the input's <code>id</code> — clicking the label then focuses the field.</p>
<p><strong>Mini-challenge:</strong> build a contact form with name, email, a message box (<code>&lt;textarea&gt;</code>) and a submit button.</p>`
}
],
quiz: [
{q:'What does HTML stand for?', options:['HyperText Markup Language','HighTech Machine Learning','Home Tool Markup Language','Hyperlinks and Text Markup Language'], answer:0, explain:'HTML = HyperText Markup Language. It structures web content with tags.'},
{q:'Which tag creates the largest heading?', options:['<heading>','<h6>','<h1>','<head>'], answer:2, explain:'<h1> is the top-level heading. <head> holds invisible page info, not headings.'},
{q:'Which attribute of the <img> tag describes the image for screen readers?', options:['src','title','alt','describe'], answer:2, explain:'alt text describes the image for screen readers and shows if the image fails to load.'},
{q:'How do you make a link open in a new tab?', options:['target="_blank"','newtab="true"','href="new"','open="tab"'], answer:0, explain:'target="_blank" on the <a> tag opens the link in a new tab.'},
{q:'Which list type shows numbered items?', options:['<ul>','<ol>','<li>','<dl>'], answer:1, explain:'<ol> = ordered list (numbered). <ul> = unordered list (bulleted).'},
{q:'In a table, which tag creates a header cell?', options:['<td>','<tr>','<th>','<thead-cell>'], answer:2, explain:'<th> is a header cell (bold, centred). <td> is a normal data cell, <tr> is a row.'},
{q:'Which input type automatically checks for a valid email format?', options:['type="text"','type="email"','type="mail"','type="address"'], answer:1, explain:'type="email" makes the browser validate the email format on submit.'},
{q:'What does the "for" attribute of a <label> need to match?', options:['The input\'s name','The input\'s id','The form\'s id','Nothing — it is decorative'], answer:1, explain:'label\'s for must equal the input\'s id so clicking the label focuses the field.'}
]
},
{
id:'web-css', title:'CSS Styling', urdu:'سی ایس ایس اسٹائلنگ', comingSoon:false,
lessons: [
{
id:'web-css-l1', title:'What Is CSS? Three Ways to Add It',
html:`<h3>What Is CSS?</h3>
<p><strong>CSS</strong> (Cascading Style Sheets) controls how HTML looks: colours, fonts, spacing and layout. HTML is the skeleton; CSS is the clothing.</p>
<h3>Three ways to add CSS</h3>
<p><strong>1. Inline</strong> — inside a tag's <code>style</code> attribute (quick but messy):</p>
<pre><code>&lt;p style="color: red;"&gt;This text is red.&lt;/p&gt;</code></pre>
<p><strong>2. Internal</strong> — a <code>&lt;style&gt;</code> block in the page's <code>&lt;head&gt;</code>:</p>
<pre><code>&lt;head&gt;
&lt;style&gt;
  p { color: blue; }
&lt;/style&gt;
&lt;/head&gt;</code></pre>
<p><strong>3. External</strong> — a separate <code>.css</code> file linked from the HTML (best practice):</p>
<pre><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></pre>
<h3>CSS rule anatomy</h3>
<pre><code>selector {
  property: value;
}</code></pre>
<p>The <strong>selector</strong> picks which elements to style; each <strong>declaration</strong> is a property plus a value, ending with a semicolon.</p>`
},
{
id:'web-css-l2', title:'Selectors & the Box Model',
html:`<h3>Three basic selectors</h3>
<pre><code>/* Element selector: styles ALL paragraphs */
p { color: #333; }

/* Class selector: styles elements with class="highlight" */
.highlight { background: yellow; }

/* ID selector: styles the ONE element with id="header" */
#header { font-size: 28px; }</code></pre>
<p>In HTML: <code>&lt;p class="highlight"&gt;</code> and <code>&lt;div id="header"&gt;</code>. Classes are reusable; IDs must be unique on the page.</p>
<h3>The box model</h3>
<p>Every element is a box with four layers, outside-in:</p>
<ol>
<li><strong>Content</strong> — the text or image itself.</li>
<li><strong>Padding</strong> — space inside, between content and border.</li>
<li><strong>Border</strong> — the visible edge.</li>
<li><strong>Margin</strong> — space outside, separating the box from neighbours.</li>
</ol>
<pre><code>.card {
  padding: 20px;        /* space inside */
  border: 2px solid #ccc;
  margin: 15px;         /* space outside */
  width: 300px;
}</code></pre>
<p><strong>Memory trick:</strong> padding hugs the content from the <em>inside</em>; margin pushes other boxes <em>away</em> from the outside.</p>`
},
{
id:'web-css-l3', title:'Colours, Fonts & Text',
html:`<h3>Colours</h3>
<p>CSS accepts colour names, hex codes and rgb values:</p>
<pre><code>h1 { color: darkgreen; }              /* name */
.button { background-color: #1a73e8; } /* hex */
.banner { background-color: rgb(26, 115, 232); } /* rgb */</code></pre>
<p>Hex codes start with <code>#</code> followed by 6 digits — <code>#ff0000</code> is pure red. You can copy hex codes from any colour-picker tool.</p>
<h3>Fonts and text</h3>
<pre><code>body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;      /* space between lines */
}
h1 {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}</code></pre>
<ul>
<li><code>font-family</code> lists fallbacks: if Arial is missing, any sans-serif font is used.</li>
<li><code>line-height: 1.6</code> makes paragraphs much easier to read.</li>
<li><code>text-align</code> can be <code>left</code>, <code>center</code>, <code>right</code> or <code>justify</code>.</li>
</ul>
<p><strong>Try it:</strong> style all <code>&lt;h2&gt;</code> elements on your page with a colour, centred text and a larger font size.</p>`
},
{
id:'web-css-l4', title:'Layout with Flexbox',
html:`<h3>Why Flexbox?</h3>
<p>Arranging boxes side-by-side used to be painful. <strong>Flexbox</strong> makes it easy: mark a container as flexible, and its children line up automatically.</p>
<pre><code>&lt;div class="row"&gt;
  &lt;div class="box"&gt;Box 1&lt;/div&gt;
  &lt;div class="box"&gt;Box 2&lt;/div&gt;
  &lt;div class="box"&gt;Box 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
<pre><code>.row {
  display: flex;
  gap: 15px;                 /* space between boxes */
  justify-content: center;   /* left / center / right / space-between */
  align-items: center;       /* vertical alignment */
}
.box {
  background: #e8f0fe;
  padding: 30px;
  border-radius: 10px;
}</code></pre>
<h3>The two key properties</h3>
<ul>
<li><code>justify-content</code> — positions items along the <strong>main (horizontal)</strong> axis.</li>
<li><code>align-items</code> — positions items along the <strong>cross (vertical)</strong> axis.</li>
</ul>
<p><code>border-radius</code> rounds the corners — <code>50%</code> on a square makes a circle, handy for profile photos.</p>
<p><strong>Try it:</strong> put three boxes in a row, then change <code>justify-content</code> to <code>space-between</code> and watch them spread out.</p>`
},
{
id:'web-css-l5', title:'Responsive Design Basics',
html:`<h3>One site, every screen</h3>
<p>Most Pakistanis browse on phones, so your site must look good on small screens. <strong>Responsive design</strong> means the layout adapts to the screen size.</p>
<h3>Step 1: the viewport tag</h3>
<p>Put this in your <code>&lt;head&gt;</code> so phones render the page at the right scale:</p>
<pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code></pre>
<h3>Step 2: flexible units</h3>
<ul>
<li>Use <code>%</code> for widths: <code>width: 100%</code> fills the container.</li>
<li><code>max-width: 800px</code> stops text lines getting too long on desktops.</li>
<li><code>img { max-width: 100%; }</code> stops images overflowing small screens.</li>
</ul>
<h3>Step 3: media queries</h3>
<p>Media queries apply CSS only when the screen is a certain size:</p>
<pre><code>.row { display: flex; }

/* On screens 600px wide or smaller, stack vertically */
@media (max-width: 600px) {
  .row { flex-direction: column; }
}</code></pre>
<p>This turns your three-column row into a neat vertical stack on phones. <strong>Try it:</strong> resize your browser window and watch the layout change.</p>`
},
{
id:'web-css-l6', title:'Mini Project: Styled Profile Card',
html:`<h3>Putting it all together</h3>
<p>Build a profile card using everything from this chapter — selectors, the box model, colours and Flexbox:</p>
<pre><code>&lt;div class="card"&gt;
  &lt;img src="photo.jpg" alt="Profile photo of Ayesha Khan"&gt;
  &lt;h2&gt;Ayesha Khan&lt;/h2&gt;
  &lt;p class="role"&gt;Web Developer, Lahore&lt;/p&gt;
  &lt;p&gt;I build fast, beautiful websites for small businesses.&lt;/p&gt;
  &lt;a href="#" class="btn"&gt;Hire Me&lt;/a&gt;
&lt;/div&gt;</code></pre>
<pre><code>.card {
  width: 300px;
  margin: 40px auto;
  padding: 25px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
}
.card img {
  width: 120px; height: 120px;
  border-radius: 50%;
  object-fit: cover;
}
.role { color: #666; }
.btn {
  display: inline-block;
  background: #1a73e8;
  color: white;
  padding: 10px 25px;
  border-radius: 8px;
  text-decoration: none;  /* removes underline */
}</code></pre>
<p><code>margin: 40px auto</code> centres the card horizontally. <code>box-shadow</code> adds a soft shadow for depth. Change the colours and text to make it yours — this exact pattern (card + button) appears on real freelance portfolios.</p>`
}
],
quiz: [
{q:'Which is the recommended way to add CSS to a multi-page website?', options:['Inline styles on every tag','An external .css file linked with <link>','The style attribute in <body>','Writing CSS inside HTML comments'], answer:1, explain:'One external stylesheet linked from every page keeps styling consistent and easy to update.'},
{q:'In CSS, how do you select elements with class="menu"?', options:['#menu','menu','.menu','*menu'], answer:2, explain:'A dot selects a class (.menu); a hash selects an ID (#menu).'},
{q:'In the box model, which layer sits between the content and the border?', options:['Margin','Padding','Outline','Gap'], answer:1, explain:'Padding is the inner space between content and border; margin is the outer space.'},
{q:'What does "margin: 40px auto" commonly achieve?', options:['40px margin on all sides','Centres a fixed-width block horizontally','Removes all margins','Makes text 40px tall'], answer:1, explain:'auto left/right margins centre a block element that has a set width.'},
{q:'Which property lines flex items up along the horizontal axis?', options:['align-items','flex-direction','justify-content','align-content'], answer:2, explain:'justify-content positions items on the main (horizontal) axis; align-items handles the vertical axis.'},
{q:'What does the viewport meta tag do?', options:['Loads the page faster','Makes phones render the page at the correct scale','Adds a navigation bar','Enables JavaScript'], answer:1, explain:'Without the viewport tag, phones shrink desktop layouts instead of rendering them properly.'},
{q:'Which media query targets screens 600px wide or smaller?', options:['@media (min-width: 600px)','@media screen = 600px','@media (max-width: 600px)','@screen (600px)'], answer:2, explain:'max-width: 600px applies the styles only when the viewport is 600px or narrower.'},
{q:'What does border-radius: 50% do to a square image?', options:['Hides it','Makes it a circle','Adds a red border','Rotates it'], answer:1, explain:'50% radius on a square rounds the corners fully, producing a circle — ideal for profile photos.'}
]
},
{
id:'web-js', title:'JavaScript Essentials', urdu:'جاوا اسکرپٹ کی بنیاد', comingSoon:false,
lessons: [
{
id:'web-js-l1', title:'What Is JavaScript? Your First Script',
html:`<h3>JavaScript brings pages to life</h3>
<p>HTML is structure, CSS is style — <strong>JavaScript (JS)</strong> is behaviour: menus that open, forms that check your input, buttons that respond to clicks.</p>
<h3>Where does the code go?</h3>
<p>In a <code>&lt;script&gt;</code> tag, usually just before the closing <code>&lt;/body&gt;</code>:</p>
<pre><code>&lt;body&gt;
  &lt;h1&gt;Hello!&lt;/h1&gt;
  &lt;script&gt;
    console.log("Assalam-o-Alaikum from JavaScript!");
    alert("Welcome to my page!");
  &lt;/script&gt;
&lt;/body&gt;</code></pre>
<h3>Seeing your output</h3>
<ul>
<li><code>alert()</code> — pops up a message box. Great for a first test, annoying in real sites.</li>
<li><code>console.log()</code> — prints to the browser console. Press <strong>F12</strong> and open the <strong>Console</strong> tab to see it. Developers live in the console.</li>
</ul>
<p><strong>Try it:</strong> create a page with the script above, open it, press F12 and find your message in the console.</p>`
},
{
id:'web-js-l2', title:'Variables & Data Types',
html:`<h3>Storing values in variables</h3>
<p>Variables are named boxes that hold values. Modern JavaScript uses <code>let</code> (changeable) and <code>const</code> (fixed):</p>
<pre><code>let city = "Lahore";
const country = "Pakistan";
let visitors = 150;
let isOpen = true;

city = "Karachi";      // OK: let can change
// country = "India";  // ERROR: const cannot change

console.log("Welcome to " + city + ", " + country);</code></pre>
<h3>The main data types</h3>
<ul>
<li><strong>String</strong> — text in quotes: <code>"Ali"</code>, <code>'Ali'</code>.</li>
<li><strong>Number</strong> — <code>42</code>, <code>3.14</code>. No quotes.</li>
<li><strong>Boolean</strong> — <code>true</code> or <code>false</code>.</li>
<li><strong>Array</strong> — an ordered list: <code>["HTML", "CSS", "JS"]</code>.</li>
<li><strong>Object</strong> — labelled data: <code>{name: "Ali", age: 20}</code>.</li>
</ul>
<pre><code>let skills = ["HTML", "CSS", "JavaScript"];
console.log(skills[0]);        // "HTML" (counting starts at 0)
console.log(skills.length);    // 3

let student = { name: "Ayesha", marks: 92 };
console.log(student.name);     // "Ayesha"</code></pre>
<p><strong>Rule of thumb:</strong> default to <code>const</code>; switch to <code>let</code> only when the value must change.</p>`
},
{
id:'web-js-l3', title:'Conditions & Loops',
html:`<h3>Making decisions with if/else</h3>
<pre><code>let marks = 85;

if (marks &gt;= 90) {
  console.log("Grade: A+");
} else if (marks &gt;= 80) {
  console.log("Grade: A");
} else if (marks &gt;= 60) {
  console.log("Grade: B");
} else {
  console.log("Keep practising!");
}</code></pre>
<p>Comparison operators: <code>===</code> (exactly equal), <code>!==</code> (not equal), <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>. Always use <code>===</code> instead of <code>==</code> — it avoids surprising type conversions.</p>
<h3>Repeating work with loops</h3>
<pre><code>// for loop: repeat a known number of times
for (let i = 1; i &lt;= 5; i++) {
  console.log("Count: " + i);
}

// while loop: repeat until a condition changes
let n = 3;
while (n &gt; 0) {
  console.log(n + "...");
  n--;
}
console.log("Go!");

// Loop through an array
let cities = ["Lahore", "Karachi", "Islamabad"];
for (let i = 0; i &lt; cities.length; i++) {
  console.log(cities[i]);
}</code></pre>
<p><strong>Try it:</strong> write a loop that prints the 5-times table (5, 10, 15 ... 50).</p>`
},
{
id:'web-js-l4', title:'Functions: Reusable Code Blocks',
html:`<h3>Why functions?</h3>
<p>A <strong>function</strong> packages code so you can run it whenever you want, with different inputs:</p>
<pre><code>function greet(name) {
  return "Assalam-o-Alaikum, " + name + "!";
}

console.log(greet("Ali"));     // Assalam-o-Alaikum, Ali!
console.log(greet("Ayesha"));  // Assalam-o-Alaikum, Ayesha!</code></pre>
<ul>
<li><code>name</code> is a <strong>parameter</strong> — a placeholder for the input.</li>
<li><code>"Ali"</code> is an <strong>argument</strong> — the actual value passed in.</li>
<li><code>return</code> sends a value back to whoever called the function.</li>
</ul>
<h3>A practical example</h3>
<pre><code>function addTax(price) {
  let tax = price * 0.16;   // 16% sales tax example
  return price + tax;
}

let bill = addTax(1000);
console.log("Total bill: Rs " + bill);  // Total bill: Rs 1160</code></pre>
<p>Without <code>return</code>, a function still runs but gives back <code>undefined</code>. <strong>Try it:</strong> write a function <code>toCelsius(f)</code> that converts Fahrenheit to Celsius: <code>(f - 32) * 5 / 9</code>.</p>`
},
{
id:'web-js-l5', title:'Controlling the Page: The DOM',
html:`<h3>What is the DOM?</h3>
<p>The <strong>DOM</strong> (Document Object Model) is the browser's live map of your HTML. JavaScript uses it to find elements and change them after the page loads.</p>
<pre><code>&lt;h1 id="title"&gt;Hello&lt;/h1&gt;
&lt;button id="btn"&gt;Change Text&lt;/button&gt;

&lt;script&gt;
  // 1. Find elements by their id
  let title = document.getElementById("title");
  let btn = document.getElementById("btn");

  // 2. React to a click
  btn.addEventListener("click", function() {
    // 3. Change the page
    title.textContent = "You clicked the button!";
    title.style.color = "green";
  });
&lt;/script&gt;</code></pre>
<h3>The three-step pattern</h3>
<ol>
<li><strong>Select</strong> — <code>document.getElementById("...")</code> grabs an element.</li>
<li><strong>Listen</strong> — <code>addEventListener("click", ...)</code> waits for an event.</li>
<li><strong>Change</strong> — update <code>textContent</code>, <code>style</code> or attributes.</li>
</ol>
<p>This select → listen → change pattern powers nearly all interactive web pages.</p>`
},
{
id:'web-js-l6', title:'Mini Project: Click Counter',
html:`<h3>Build a working click counter</h3>
<p>This tiny app uses a variable, a function and the DOM pattern from the last lesson:</p>
<pre><code>&lt;h2&gt;Clicks: &lt;span id="count"&gt;0&lt;/span&gt;&lt;/h2&gt;
&lt;button id="plus"&gt;+ Click Me&lt;/button&gt;
&lt;button id="reset"&gt;Reset&lt;/button&gt;

&lt;script&gt;
  let clicks = 0;
  let countSpan = document.getElementById("count");

  document.getElementById("plus").addEventListener("click", function() {
    clicks++;
    countSpan.textContent = clicks;
  });

  document.getElementById("reset").addEventListener("click", function() {
    clicks = 0;
    countSpan.textContent = clicks;
  });
&lt;/script&gt;</code></pre>
<h3>How it works</h3>
<ul>
<li><code>clicks</code> holds the state (the current number).</li>
<li>Each click runs a function that updates the state, then updates the page.</li>
<li><code>clicks++</code> is shorthand for <code>clicks = clicks + 1</code>.</li>
</ul>
<p><strong>Extend it:</strong> add a button that subtracts 1, and change the count's colour to red when it goes below 0. Congratulations — you have built a real interactive web app.</p>`
}
],
quiz: [
{q:'Where is the recommended place for a <script> tag in a simple page?', options:['Inside <head> only','Just before the closing </body> tag','Inside the <title> tag','After the closing </html> tag'], answer:1, explain:'Scripts at the end of <body> run after the HTML exists, so they can find and change page elements.'},
{q:'How do you print a message to the browser console?', options:['alert()','console.log()','print()','document.write()'], answer:1, explain:'console.log() writes to the console (view with F12). alert() shows a popup instead.'},
{q:'Which keyword declares a variable that CANNOT be reassigned?', options:['let','var','const','static'], answer:2, explain:'const creates a constant binding. let allows reassignment.'},
{q:'What is the index of the first item in a JavaScript array?', options:['1','0','-1','It has no index'], answer:1, explain:'Arrays are zero-indexed: the first item is at index 0.'},
{q:'Which operator checks exact equality without type conversion?', options:['==','=','===','!='], answer:2, explain:'=== compares value AND type strictly. == converts types first, causing surprises.'},
{q:'What does a function give back to its caller if it has no return statement?', options:['0','null','undefined','An empty string'], answer:2, explain:'A function without return completes but evaluates to undefined.'},
{q:'Which method finds an element by its id?', options:['document.findId()','document.getElementById()','document.query()','element.getId()'], answer:1, explain:'document.getElementById("myId") returns the element with that id.'},
{q:'In the select → listen → change pattern, what does addEventListener do?', options:['Changes the page style','Waits for an event like a click, then runs code','Selects an element','Reloads the page'], answer:1, explain:'addEventListener attaches a function that runs when the specified event (e.g. click) happens.'}
]
},
{
id:'web-project', title:'Building Your First Website', urdu:'اپنی پہلی ویب سائٹ بنائیں', comingSoon:false,
lessons: [
{
id:'web-proj-l1', title:'Planning Your Site',
html:`<h3>Think before you code</h3>
<p>Professional developers plan first. For your first site — a personal portfolio — answer these:</p>
<ul>
<li><strong>Purpose:</strong> show your work and let people contact you.</li>
<li><strong>Pages:</strong> one page is enough to start (Home with About, Skills, Contact sections).</li>
<li><strong>Sections:</strong> header with your name, an about paragraph, a skills list, a contact button.</li>
</ul>
<h3>Sketch the layout</h3>
<p>Draw boxes on paper or in a notebook:</p>
<pre><code>+----------------------------------+
|  HEADER: Your Name  | nav links    |
+----------------------------------+
|  HERO: big headline + button       |
+----------------------------------+
|  ABOUT: photo + short paragraph    |
+----------------------------------+
|  SKILLS: 3 cards in a row          |
+----------------------------------+
|  CONTACT: button linking to email  |
+----------------------------------+</code></pre>
<p>This "wireframe" becomes your HTML structure: each box is a <code>&lt;section&gt;</code> or <code>&lt;div&gt;</code>. Planning for 10 minutes saves an hour of rewriting.</p>`
},
{
id:'web-proj-l2', title:'Building the Structure (HTML)',
html:`<h3>The portfolio HTML</h3>
<p>Semantic tags like <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code> and <code>&lt;footer&gt;</code> describe each part's role — good for search engines and screen readers:</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Ali Raza — Web Developer&lt;/title&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Ali Raza&lt;/h1&gt;
    &lt;nav&gt;
      &lt;a href="#about"&gt;About&lt;/a&gt;
      &lt;a href="#skills"&gt;Skills&lt;/a&gt;
      &lt;a href="#contact"&gt;Contact&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;section id="about"&gt;
      &lt;h2&gt;About Me&lt;/h2&gt;
      &lt;p&gt;I build websites for small businesses in Pakistan.&lt;/p&gt;
    &lt;/section&gt;
    &lt;section id="skills"&gt;
      &lt;h2&gt;My Skills&lt;/h2&gt;
      &lt;ul&gt;&lt;li&gt;HTML&lt;/li&gt;&lt;li&gt;CSS&lt;/li&gt;&lt;li&gt;JavaScript&lt;/li&gt;&lt;/ul&gt;
    &lt;/section&gt;
    &lt;section id="contact"&gt;
      &lt;h2&gt;Contact&lt;/h2&gt;
      &lt;a href="mailto:you@example.com"&gt;Email Me&lt;/a&gt;
    &lt;/section&gt;
  &lt;/main&gt;
  &lt;footer&gt;&lt;p&gt;© 2026 Ali Raza&lt;/p&gt;&lt;/footer&gt;
  &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>Links like <code>href="#about"</code> jump to the section with <code>id="about"</code> — free smooth navigation with no JavaScript.</p>`
},
{
id:'web-proj-l3', title:'Styling It (CSS)',
html:`<h3>The portfolio stylesheet</h3>
<p>Save this as <code>style.css</code> next to your HTML file:</p>
<pre><code>* { box-sizing: border-box; margin: 0; }

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #222;
}

header {
  background: #0d47a1;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header a { color: white; margin-left: 15px; text-decoration: none; }

main { max-width: 800px; margin: 0 auto; padding: 30px 20px; }

section { margin-bottom: 50px; }

h2 { color: #0d47a1; margin-bottom: 10px; }

footer {
  background: #eee;
  text-align: center;
  padding: 15px;
}

@media (max-width: 600px) {
  header { flex-direction: column; gap: 10px; }
}</code></pre>
<p><code>box-sizing: border-box</code> makes padding count <em>inside</em> the width — layouts behave predictably. The media query stacks the header on phones. Refresh your page: plain HTML becomes a real-looking site.</p>`
},
{
id:'web-proj-l4', title:'Adding Interactivity (JavaScript)',
html:`<h3>A dark-mode toggle</h3>
<p>One small feature makes your site feel professional. Save this as <code>script.js</code>:</p>
<pre><code>&lt;button id="modeBtn"&gt;🌙 Dark Mode&lt;/button&gt;

&lt;script&gt;
  let dark = false;
  let btn = document.getElementById("modeBtn");

  btn.addEventListener("click", function() {
    dark = !dark;   // flip true/false
    if (dark) {
      document.body.style.background = "#121212";
      document.body.style.color = "white";
      btn.textContent = "☀️ Light Mode";
    } else {
      document.body.style.background = "white";
      document.body.style.color = "#222";
      btn.textContent = "🌙 Dark Mode";
    }
  });
&lt;/script&gt;</code></pre>
<h3>What is happening</h3>
<ul>
<li><code>dark = !dark</code> flips the boolean — <code>!</code> means "not".</li>
<li>We change styles directly with <code>element.style.property</code>.</li>
<li>The button label updates so users always know what clicking will do.</li>
</ul>
<p>Place the button inside your <code>&lt;header&gt;</code>. <strong>Challenge:</strong> add a second button that shows an alert with your email address.</p>`
},
{
id:'web-proj-l5', title:'Publishing Free with GitHub Pages',
html:`<h3>From your computer to the world</h3>
<p><strong>GitHub Pages</strong> hosts static websites (HTML/CSS/JS) free, forever, at an address like <code>yourname.github.io</code>. The basic flow:</p>
<ol>
<li><strong>Create a GitHub account</strong> at github.com (free).</li>
<li><strong>Create a repository</strong> named <code>yourname.github.io</code> — tick "Add a README".</li>
<li><strong>Upload your files</strong> — click "Add file" → "Upload files" and add <code>index.html</code>, <code>style.css</code> and <code>script.js</code>.</li>
<li><strong>Enable Pages</strong> — Settings → Pages → deploy from the <code>main</code> branch.</li>
<li><strong>Visit your URL</strong> — after a minute or two, your site is live at <code>https://yourname.github.io</code>.</li>
</ol>
<h3>Tips</h3>
<ul>
<li>Your homepage file <strong>must</strong> be named <code>index.html</code> — servers look for that name.</li>
<li>Image and CSS file names are case-sensitive: <code>Photo.jpg</code> and <code>photo.jpg</code> are different files.</li>
<li>Every change you upload goes live within a minute or two.</li>
</ul>
<p>You now own a real, public website — the same platform hosts thousands of Pakistani freelancers' portfolios.</p>`
},
{
id:'web-proj-l6', title:'Where to Go Next',
html:`<h3>You know the foundations</h3>
<p>HTML + CSS + JavaScript is the complete front-end trio. Realistic next steps, in order:</p>
<ol>
<li><strong>Build 3–5 small projects</strong> — a to-do app, a quiz app, a business landing page. Portfolio beats certificates.</li>
<li><strong>Learn Git basics</strong> — <code>git add</code>, <code>commit</code>, <code>push</code>. Employers expect it, and it backs up your work.</li>
<li><strong>Pick a back-end path</strong> — Python (this track's next course!) with Flask/Django, or JavaScript with Node.js, to build apps that save data.</li>
<li><strong>Learn responsive design deeply</strong> — most clients will view your work on a phone.</li>
</ol>
<h3>How long does it take?</h3>
<p>With 1–2 focused hours daily, most beginners build client-ready landing pages within 2–3 months. Consistency beats intensity: a little every day compounds.</p>
<p><strong>Final challenge:</strong> publish your portfolio, then add one new section each week — a projects gallery, testimonials, a contact form. Your site grows as you do.</p>`
}
],
quiz: [
{q:'What should you decide BEFORE writing code for a website?', options:['The exact colour codes','Purpose, pages and layout sketch','The hosting password','The domain registrar'], answer:1, explain:'A 10-minute plan (purpose, pages, wireframe sketch) prevents hours of rewriting.'},
{q:'Which HTML tags describe a page\'s regions semantically?', options:['<div> everywhere','<header>, <main>, <section>, <footer>','<b>, <i>, <u>','<span> and <font>'], answer:1, explain:'Semantic tags describe each region\'s role, helping search engines and screen readers.'},
{q:'How does a link like href="#about" work?', options:['It opens a new website','It jumps to the element with id="about"','It downloads a file','It reloads the page'], answer:1, explain:'Hash links scroll to the element whose id matches the hash — no JavaScript needed.'},
{q:'What does "box-sizing: border-box" do?', options:['Hides the box','Makes padding count inside the declared width','Removes borders','Centres the box'], answer:1, explain:'border-box includes padding and border inside width/height, so layouts behave predictably.'},
{q:'In the dark-mode example, what does "dark = !dark" do?', options:['Deletes the variable','Flips the boolean between true and false','Turns the screen off','Compares two values'], answer:1, explain:'! means "not", so the line toggles the boolean each click.'},
{q:'What must your homepage file be named for GitHub Pages to serve it?', options:['home.html','main.html','index.html','page1.html'], answer:2, explain:'Servers look for index.html as the default page of a folder.'},
{q:'On GitHub Pages, are image file names case-sensitive?', options:['No, never','Yes — Photo.jpg and photo.jpg differ','Only on Mondays','Only for PNG files'], answer:1, explain:'Web servers treat file names as case-sensitive; a wrong case breaks the image.'},
{q:'What is the most realistic next step after this course?', options:['Buying expensive courses','Building 3–5 small portfolio projects','Memorising every HTML tag','Waiting for clients to appear'], answer:1, explain:'A portfolio of real projects demonstrates skill far better than certificates.'}
]
}
]
},
{
id:'python', title:'Python Programming', urdu:'پائتھون پروگرامنگ',
desc:`From installing Python to building real programs: variables, loops, functions, files and object-oriented basics — with a complete mini project at the end.`,
icon:'🐍',
chapters: [
{
id:'py-setup', title:'Python Setup & Basics', urdu:'پائتھون سیٹ اپ اور بنیادی باتیں', comingSoon:false,
lessons: [
{
id:'py-setup-l1', title:'What Is Python & Why Learn It?',
html:`<h3>Python in one paragraph</h3>
<p><strong>Python</strong> is a high-level programming language famous for readable, English-like code. It powers websites (Instagram's back end), data science, AI, automation scripts and countless freelance gigs.</p>
<h3>Why beginners love it</h3>
<ul>
<li><strong>Readable:</strong> <code>print("Hello")</code> does exactly what it says.</li>
<li><strong>Free forever:</strong> open-source, runs on Windows, Mac, Linux and even Android phones.</li>
<li><strong>In demand:</strong> automation scripts, data entry tools and small business software are steady freelance work in Pakistan.</li>
<li><strong>One language, many doors:</strong> web apps (Django/Flask), data analysis (pandas), AI (machine learning libraries).</li>
</ul>
<h3>How you will learn here</h3>
<p>Every lesson has short, runnable examples. Type them yourself — don't just read. Making mistakes and fixing them is where the learning happens.</p>`
},
{
id:'py-setup-l2', title:'Installing Python',
html:`<h3>On a computer (Windows/Mac/Linux)</h3>
<ol>
<li>Go to <strong>python.org</strong> → Downloads, and install the latest <strong>Python 3</strong> version.</li>
<li>On Windows, tick <strong>"Add python.exe to PATH"</strong> during installation — this is the step most beginners miss.</li>
<li>Verify it worked. Open a terminal (Command Prompt on Windows) and run:</li>
</ol>
<pre><code>python --version</code></pre>
<p>You should see something like <code>Python 3.12.0</code>. Then try the interactive mode:</p>
<pre><code>python
&gt;&gt;&gt; print("Assalam-o-Alaikum")
Assalam-o-Alaikum
&gt;&gt;&gt; exit()</code></pre>
<h3>On an Android phone</h3>
<p>Install a Python app such as <strong>Pydroid 3</strong> from the Play Store — it gives you an editor and a run button, no computer needed.</p>
<p><strong>Do not install Python 2</strong> — it is retired. Everything in this course is Python 3.</p>`
},
{
id:'py-setup-l3', title:'Your First Program',
html:`<h3>The print() function</h3>
<p><code>print()</code> displays text on the screen. Create a file called <code>hello.py</code> and type:</p>
<pre><code>print("Assalam-o-Alaikum!")
print("I am learning Python.")
print(2 + 3)</code></pre>
<p>Run it from the terminal in the file's folder:</p>
<pre><code>python hello.py</code></pre>
<h3>Output</h3>
<pre><code>Assalam-o-Alaikum!
I am learning Python.
5</code></pre>
<ul>
<li>Text goes in quotes — single <code>'...'</code> or double <code>"..."</code>, your choice, but be consistent.</li>
<li>Numbers need no quotes, and Python does the maths: <code>print(2 + 3)</code> shows <code>5</code>.</li>
<li>Python reads top to bottom, running each line in order.</li>
</ul>
<p><strong>Try it:</strong> print your name, your city, and the result of <code>7 * 6</code>.</p>`
},
{
id:'py-setup-l4', title:'Variables & Input',
html:`<h3>Storing values</h3>
<p>Variables hold data you want to reuse. No declaration keyword needed — just assign:</p>
<pre><code>name = "Ayesha"
age = 20
city = "Lahore"

print(name)
print(age + 5)   # 25</code></pre>
<p>Lines starting with <code>#</code> are <strong>comments</strong> — notes for humans that Python ignores.</p>
<h3>Getting input from the user</h3>
<p><code>input()</code> pauses and waits for typing:</p>
<pre><code>name = input("What is your name? ")
print("Welcome, " + name + "!")</code></pre>
<h3>Formatted strings (f-strings)</h3>
<p>Put <code>f</code> before the quotes and drop variables straight into <code>{braces}</code>:</p>
<pre><code>name = "Ali"
marks = 92
print(f"{name} scored {marks} marks.")</code></pre>
<p><strong>Warning:</strong> <code>input()</code> always returns text. <code>age = input("Age: ")</code> followed by <code>age + 5</code> would fail — convert first: <code>age = int(input("Age: "))</code>.</p>`
},
{
id:'py-setup-l5', title:'Numbers & Basic Math',
html:`<h3>Arithmetic operators</h3>
<pre><code>a = 17
b = 5

print(a + b)   # 22  addition
print(a - b)   # 12  subtraction
print(a * b)   # 85  multiplication
print(a / b)   # 3.4 division (always a decimal)
print(a // b)  # 3   floor division (whole part)
print(a % b)   # 2   remainder
print(a ** 2)  # 289 power</code></pre>
<h3>A real example: splitting a bill</h3>
<pre><code>bill = float(input("Total bill (Rs): "))
people = int(input("How many people? "))
share = bill / people
print(f"Each person pays Rs {share:.0f}")</code></pre>
<ul>
<li><code>int()</code> converts text to a whole number; <code>float()</code> converts to a decimal.</li>
<li><code>{share:.0f}</code> formats the number with zero decimal places.</li>
</ul>
<p><strong>Try it:</strong> write a program that converts kilometres to metres (multiply by 1000).</p>`
},
{
id:'py-setup-l6', title:'Practice: Personal Greeting Program',
html:`<h3>Your first complete program</h3>
<p>Combine everything from this chapter into one script, <code>greet.py</code>:</p>
<pre><code># Personal Greeting Program
name = input("What is your name? ")
city = input("Which city are you from? ")
birth_year = int(input("Birth year? "))

age = 2026 - birth_year

print()
print(f"Assalam-o-Alaikum, {name}!")
print(f"You are from {city} and you are about {age} years old.")
print(f"Your name has {len(name)} letters.")</code></pre>
<h3>New ideas in this program</h3>
<ul>
<li><code>len(name)</code> counts the characters in a string.</li>
<li><code>print()</code> with nothing inside prints a blank line for neat output.</li>
<li>Simple arithmetic on variables: <code>2026 - birth_year</code>.</li>
</ul>
<p><strong>Extend it:</strong> ask for the user's favourite food and print a sentence about it. Save every program you write — they become your portfolio.</p>`
}
],
quiz: [
{q:'Which website is the official source for downloading Python?', options:['python.org','getpython.com','python-download.net','microsoft.com/python'], answer:0, explain:'python.org is the official site. Always download from there to avoid fake installers.'},
{q:'On Windows, which installation checkbox must you tick?', options:['Install games','Add python.exe to PATH','Desktop shortcut','Install Python 2'], answer:1, explain:'Adding Python to PATH lets you run "python" from any terminal window.'},
{q:'What does print(2 + 3) display?', options:['2 + 3','5','"5"','An error'], answer:1, explain:'Python evaluates the expression first, so it prints 5.'},
{q:'What does input() always return?', options:['A number','Text (a string)','A list','True or False'], answer:1, explain:'input() returns text. Convert with int() or float() before doing maths.'},
{q:'What is an f-string used for?', options:['Reading files','Embedding variables inside text with {braces}','Making text bold','Fast internet'], answer:1, explain:'f"Hello {name}" inserts the variable\'s value directly into the string.'},
{q:'What does 17 % 5 evaluate to?', options:['3.4','3','2','85'], answer:2, explain:'% gives the remainder: 17 ÷ 5 = 3 remainder 2.'},
{q:'What does len("Lahore") return?', options:['5','6','Lahore','An error'], answer:1, explain:'len() counts characters: L-a-h-o-r-e = 6.'},
{q:'Lines starting with # are…', options:['Errors','Comments ignored by Python','Printed output','Required headers'], answer:1, explain:'# marks a comment — a human-readable note Python skips.'}
]
},
{
id:'py-data', title:'Data Types & Control Flow', urdu:'ڈیٹا ٹائپس اور کنٹرول فلو', comingSoon:false,
lessons: [
{
id:'py-data-l1', title:'Strings in Depth',
html:`<h3>Working with text</h3>
<p>Strings support indexing (picking characters) and slicing (picking ranges). Counting starts at <strong>0</strong>:</p>
<pre><code>word = "Pakistan"
print(word[0])     # P  (first character)
print(word[4])     # s
print(word[-1])    # n  (negative counts from the end)
print(word[0:4])   # Paki (up to, but not including, index 4)
print(word[4:])    # stan (from index 4 to the end)</code></pre>
<h3>Handy string methods</h3>
<pre><code>name = "  ayesha khan  "
print(name.strip())        # "ayesha khan" (removes spaces)
print(name.strip().title())# "Ayesha Khan"
print("lahore".upper())    # "LAHORE"

sentence = "I love mangoes"
print(sentence.replace("mangoes", "chai"))  # "I love chai"
print("apple,banana".split(","))            # ['apple', 'banana']</code></pre>
<p>Strings are <strong>immutable</strong>: methods return a <em>new</em> string; the original is unchanged unless you reassign it.</p>`
},
{
id:'py-data-l2', title:'Lists: Ordered Collections',
html:`<h3>Creating and using lists</h3>
<pre><code>fruits = ["mango", "banana", "apple"]
print(fruits[0])      # mango
print(fruits[-1])     # apple
print(len(fruits))    # 3

# Lists CAN be changed (mutable)
fruits.append("grapes")   # add to the end
fruits[1] = "orange"      # replace banana
fruits.remove("apple")    # remove by value
print(fruits)  # ['mango', 'orange', 'grapes']</code></pre>
<h3>Looping through a list</h3>
<pre><code>cities = ["Lahore", "Karachi", "Islamabad", "Peshawar"]
for city in cities:
    print(f"I want to visit {city}.")

# With index numbers
for i, city in enumerate(cities):
    print(f"{i + 1}. {city}")</code></pre>
<ul>
<li><code>append()</code> adds one item; <code>remove()</code> deletes by value.</li>
<li><code>in</code> tests membership: <code>"Lahore" in cities</code> is <code>True</code>.</li>
<li>Indentation (4 spaces) defines what belongs inside the loop.</li>
</ul>`
},
{
id:'py-data-l3', title:'Dictionaries & Tuples',
html:`<h3>Dictionaries: labelled data</h3>
<p>A dictionary stores <strong>key → value</strong> pairs — like a real dictionary maps words to meanings:</p>
<pre><code>student = {
    "name": "Ali",
    "age": 20,
    "city": "Lahore",
    "marks": 92
}

print(student["name"])          # Ali
student["marks"] = 95          # update a value
student["phone"] = "03001234567"  # add a new pair (example only)

for key, value in student.items():
    print(f"{key}: {value}")</code></pre>
<h3>Tuples: unchangeable lists</h3>
<pre><code>point = (10, 20)
print(point[0])   # 10
# point[0] = 99   # ERROR: tuples cannot change</code></pre>
<p>Use a <strong>list</strong> for collections that change (a to-do list), a <strong>tuple</strong> for fixed data (coordinates, a date), and a <strong>dictionary</strong> when each item needs a label (a student record).</p>`
},
{
id:'py-data-l4', title:'Making Decisions: if / elif / else',
html:`<h3>Conditional logic</h3>
<pre><code>marks = int(input("Enter your marks (0-100): "))

if marks &gt;= 90:
    grade = "A+"
elif marks &gt;= 80:
    grade = "A"
elif marks &gt;= 70:
    grade = "B"
elif marks &gt;= 60:
    grade = "C"
elif marks &gt;= 50:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is {grade}.")</code></pre>
<h3>Combining conditions</h3>
<pre><code>age = 20
has_id = True

if age &gt;= 18 and has_id:
    print("You may enter.")
elif age &gt;= 18 or has_id:
    print("Almost — you need both age and ID.")
else:
    print("Sorry, not eligible.")

# not flips a condition
raining = False
if not raining:
    print("No umbrella needed.")</code></pre>
<ul>
<li><code>and</code> — both must be true. <code>or</code> — at least one. <code>not</code> — flips it.</li>
<li>Python uses <code>==</code> for comparison; a single <code>=</code> assigns.</li>
</ul>`
},
{
id:'py-data-l5', title:'Loops: for & while',
html:`<h3>The for loop</h3>
<p><code>range()</code> generates sequences of numbers:</p>
<pre><code># Print the 7-times table
for i in range(1, 11):
    print(f"7 x {i} = {7 * i}")

# range(start, stop, step)
for n in range(10, 0, -1):
    print(n)
print("Blast off!")</code></pre>
<p><code>range(1, 11)</code> gives 1–10 (the stop value is excluded).</p>
<h3>The while loop</h3>
<pre><code>password = ""
while password != "shaheen123":
    password = input("Enter password: ")
print("Access granted!")

# break exits immediately; continue skips to the next round
for i in range(1, 10):
    if i == 3:
        continue      # skip 3
    if i == 7:
        break         # stop at 7
    print(i)</code></pre>
<p><strong>Danger:</strong> a <code>while</code> loop whose condition never becomes false runs forever. Always make sure something inside the loop changes the condition.</p>`
},
{
id:'py-data-l6', title:'Practice: Number Guessing Game',
html:`<h3>A complete game</h3>
<p>This uses <code>random</code>, loops and conditions — everything from this chapter:</p>
<pre><code>import random

secret = random.randint(1, 50)
attempts = 0

print("I am thinking of a number between 1 and 50.")

while True:
    guess = int(input("Your guess: "))
    attempts += 1

    if guess &lt; secret:
        print("Too low! Try higher.")
    elif guess &gt; secret:
        print("Too high! Try lower.")
    else:
        print(f"Correct! You got it in {attempts} attempts.")
        break</code></pre>
<h3>New ideas</h3>
<ul>
<li><code>import random</code> loads Python's random-number module.</li>
<li><code>random.randint(1, 50)</code> picks an integer from 1 to 50, inclusive.</li>
<li><code>while True</code> loops forever until <code>break</code> exits it.</li>
<li><code>attempts += 1</code> is shorthand for <code>attempts = attempts + 1</code>.</li>
</ul>
<p><strong>Extend it:</strong> limit the player to 7 attempts and reveal the number if they fail.</p>`
}
],
quiz: [
{q:'What does word[0:4] return for word = "Pakistan"?', options:['"Paki"','"Pakis"','"akis"','"Pakistan"'], answer:0, explain:'Slicing [0:4] takes indexes 0–3 ("Paki"); the stop index is excluded.'},
{q:'Which method adds an item to the end of a list?', options:['add()','append()','insert_end()','push()'], answer:1, explain:'list.append(item) adds to the end. (insert() adds at a chosen position.)'},
{q:'How do you access the value for key "city" in dictionary d?', options:['d.city','d("city")','d["city"]','d-&gt;city'], answer:2, explain:'Dictionary values are accessed with square brackets: d["city"].'},
{q:'What is the key difference between a tuple and a list?', options:['Tuples are faster to type','Tuples cannot be changed after creation','Tuples can only hold numbers','There is no difference'], answer:1, explain:'Tuples are immutable — attempting item assignment raises an error.'},
{q:'What does "elif" mean?', options:['End the if block','Otherwise, if this condition holds','Else forever','Error in logic'], answer:1, explain:'elif = "else if": it tests another condition when the previous ones were false.'},
{q:'What numbers does range(1, 11) produce?', options:['1 to 11','1 to 10','0 to 10','2 to 11'], answer:1, explain:'range stops BEFORE the stop value, so range(1, 11) gives 1–10.'},
{q:'What does "break" do inside a loop?', options:['Pauses for 1 second','Skips one round','Exits the loop immediately','Restarts the loop'], answer:2, explain:'break exits the loop at once; continue skips only the current round.'},
{q:'What is the danger of "while True" without a break?', options:['It runs too slowly','It creates an infinite loop','It deletes variables','Nothing — it is safe'], answer:1, explain:'while True never ends on its own; you must break out or it loops forever.'}
]
},
{
id:'py-func', title:'Functions & Modules', urdu:'فنکشنز اور ماڈیولز', comingSoon:false,
lessons: [
{
id:'py-func-l1', title:'Defining Your Own Functions',
html:`<h3>Why functions matter</h3>
<p>Functions bundle code into reusable, named blocks. Write once, use everywhere — and give each block one clear job:</p>
<pre><code>def greet(name):
    print(f"Assalam-o-Alaikum, {name}!")

greet("Ali")     # calling the function
greet("Ayesha")
greet("Bilal")</code></pre>
<ul>
<li><code>def</code> starts the definition; the indented block is the function body.</li>
<li>Nothing runs until you <strong>call</strong> the function by name.</li>
</ul>
<h3>Return values</h3>
<pre><code>def add(a, b):
    return a + b

total = add(15, 27)
print(total)          # 42
print(add(100, 250))  # 350</code></pre>
<p><code>return</code> hands a value back to the caller. <code>print()</code> only displays — if you need the result later, <code>return</code> it.</p>`
},
{
id:'py-func-l2', title:'Parameters, Defaults & Keyword Arguments',
html:`<h3>Default parameter values</h3>
<p>Give a parameter a default and callers may skip it:</p>
<pre><code>def order_chai(cups=1, sugar=True):
    s = "with sugar" if sugar else "without sugar"
    return f"{cups} cup(s) of chai {s}."

print(order_chai())                    # 1 cup(s) of chai with sugar.
print(order_chai(3))                   # 3 cup(s) of chai with sugar.
print(order_chai(2, sugar=False))      # 2 cup(s) of chai without sugar.</code></pre>
<h3>Keyword arguments</h3>
<pre><code>def describe(name, city, age):
    return f"{name}, {age}, from {city}."

# Order does not matter when you name them
print(describe(age=20, name="Ali", city="Lahore"))</code></pre>
<h3>Multiple return values</h3>
<pre><code>def stats(numbers):
    return min(numbers), max(numbers), sum(numbers)

low, high, total = stats([4, 8, 15, 16, 23])
print(f"Min: {low}, Max: {high}, Sum: {total}")</code></pre>
<p>Python returns multiple values as a tuple, which you can unpack straight into variables.</p>`
},
{
id:'py-func-l3', title:'Scope & Common Errors',
html:`<h3>Variable scope</h3>
<p>Variables created <em>inside</em> a function are invisible outside it:</p>
<pre><code>def make_tea():
    cups = 2          # local variable
    print(f"Making {cups} cups.")

make_tea()
# print(cups)  # ERROR: name 'cups' is not defined</code></pre>
<p>This isolation is a feature: functions cannot accidentally break each other's data. Pass data in with parameters, get results out with <code>return</code>.</p>
<h3>Errors you will meet (and what they mean)</h3>
<ul>
<li><code>NameError</code> — used a variable that doesn't exist (typo? wrong scope?).</li>
<li><code>TypeError</code> — wrong type, e.g. <code>"5" + 3</code> or missing function arguments.</li>
<li><code>IndentationError</code> — inconsistent spaces. Use 4 spaces everywhere.</li>
<li><code>ValueError</code> — right type, bad value: <code>int("abc")</code>.</li>
</ul>
<pre><code># Defensive: int(input()) crashes on non-numbers.
# Validate first:
text = input("Enter your age: ")
if text.isdigit():
    age = int(text)
else:
    print("Please type digits only.")</code></pre>
<p>Read error messages bottom-up: the last line names the error, the lines above show where.</p>`
},
{
id:'py-func-l4', title:'Useful Built-ins & Modules',
html:`<h3>Functions Python gives you free</h3>
<pre><code>print(len("hello"))        # 5
print(abs(-9))             # 9
print(round(3.7))          # 4
print(sorted([3, 1, 2]))   # [1, 2, 3]
print(sum([10, 20, 30]))   # 60
print(max([4, 9, 2]))      # 9</code></pre>
<h3>Modules: importing superpowers</h3>
<p>A <strong>module</strong> is a file of ready-made functions you import:</p>
<pre><code>import math
print(math.sqrt(144))      # 12.0
print(math.pi)             # 3.141592653589793
print(math.ceil(4.2))      # 5 (round up)

import random
print(random.choice(["heads", "tails"]))
print(random.randint(1, 6))  # dice roll

from datetime import date
today = date.today()
print(today)               # e.g. 2026-10-18
print(today.year)          # 2026</code></pre>
<ul>
<li><code>import math</code> → use <code>math.sqrt()</code>.</li>
<li><code>from datetime import date</code> → use <code>date</code> directly.</li>
</ul>
<p>Python's standard library has hundreds of modules — always check before writing something from scratch.</p>`
},
{
id:'py-func-l5', title:'Working with Files',
html:`<h3>Reading a file</h3>
<pre><code># Writing first, so we have something to read
with open("notes.txt", "w") as f:
    f.write("Buy milk\\n")
    f.write("Call Ammi\\n")

# Now read it back
with open("notes.txt", "r") as f:
    content = f.read()
print(content)</code></pre>
<h3>Modes</h3>
<ul>
<li><code>"w"</code> — write (creates the file, or <strong>erases</strong> it if it exists).</li>
<li><code>"a"</code> — append (adds to the end, keeps existing content).</li>
<li><code>"r"</code> — read (fails if the file doesn't exist).</li>
</ul>
<h3>Reading line by line</h3>
<pre><code>with open("notes.txt", "r") as f:
    for line in f:
        print(line.strip())   # strip() removes the trailing newline</code></pre>
<p><code>with open(...) as f</code> closes the file automatically — even if an error occurs. <code>\\n</code> inside a string means "new line". File handling is how programs save data permanently — the backbone of the to-do app in the next lesson.</p>`
},
{
id:'py-func-l6', title:'Practice: To-Do List App',
html:`<h3>A program that remembers</h3>
<p>This app saves tasks to a file so they survive after the program closes:</p>
<pre><code>def load_tasks():
    try:
        with open("tasks.txt", "r") as f:
            return [line.strip() for line in f]
    except FileNotFoundError:
        return []

def save_tasks(tasks):
    with open("tasks.txt", "w") as f:
        for t in tasks:
            f.write(t + "\\n")

tasks = load_tasks()

while True:
    print("\\n1. View  2. Add  3. Done (remove)  4. Quit")
    choice = input("Choose: ")

    if choice == "1":
        for i, t in enumerate(tasks, 1):
            print(f"{i}. {t}")
    elif choice == "2":
        tasks.append(input("New task: "))
        save_tasks(tasks)
    elif choice == "3":
        n = int(input("Task number done: "))
        tasks.pop(n - 1)
        save_tasks(tasks)
    elif choice == "4":
        print("Khuda Hafiz!")
        break</code></pre>
<p><code>try/except FileNotFoundError</code> handles the first run when no file exists yet. You have built a persistent, menu-driven application — genuine software.</p>`
}
],
quiz: [
{q:'Which keyword starts a function definition?', options:['function','def','define','func'], answer:1, explain:'def name(): begins a function; the body is the indented block beneath.'},
{q:'What is the difference between print() and return inside a function?', options:['No difference','print shows output; return hands a value back to the caller','return is faster','print works only once'], answer:1, explain:'print() displays text. return gives the value back so the caller can store or reuse it.'},
{q:'In def order_chai(cups=1), what is "1"?', options:['A required argument','A default parameter value','A return value','A global variable'], answer:1, explain:'cups=1 makes the parameter optional; callers who skip it get 1.'},
{q:'A variable created inside a function is…', options:['Visible everywhere','Visible only inside that function','Deleted immediately','Shared with all functions'], answer:1, explain:'It is local — invisible outside the function. This isolation prevents accidental interference.'},
{q:'What does int("abc") raise?', options:['NameError','ValueError','IndentationError','No error'], answer:1, explain:'"abc" is a string but not a valid number → ValueError (right type, bad value).'},
{q:'After "import math", how do you compute a square root?', options:['sqrt(144)','math.sqrt(144)','math:sqrt(144)','import.sqrt(144)'], answer:1, explain:'Imported module functions are accessed as module.function: math.sqrt(144).'},
{q:'Which file mode ERASES existing content before writing?', options:['"r"','"a"','"w"','"x-read"'], answer:2, explain:'"w" truncates the file. Use "a" to append without erasing.'},
{q:'Why use "with open(...) as f"?', options:['It is shorter to type','It closes the file automatically, even on errors','It encrypts the file','It is required by law'], answer:1, explain:'The with-block guarantees the file is closed properly, even if an error occurs inside.'}
]
},
{
id:'py-oop', title:'Intro to OOP + Mini Project', urdu:'او او پی کا تعارف اور منی پروجیکٹ', comingSoon:false,
lessons: [
{
id:'py-oop-l1', title:'Classes & Objects: The Big Idea',
html:`<h3>What is OOP?</h3>
<p><strong>Object-Oriented Programming</strong> organises code around <em>objects</em> — bundles of data and the actions that work on that data. A <strong>class</strong> is the blueprint; an <strong>object</strong> is one thing built from it.</p>
<pre><code>class Student:
    pass            # empty blueprint for now

s1 = Student()      # s1 is an object (an "instance")
s2 = Student()      # s2 is a separate object

s1.name = "Ali"     # each object holds its own data
s2.name = "Ayesha"
print(s1.name, s2.name)   # Ali Ayesha</code></pre>
<h3>The analogy</h3>
<ul>
<li><strong>Class</strong> = the concept "Student", or a house blueprint.</li>
<li><strong>Object</strong> = one actual student, or one built house.</li>
<li><strong>Attribute</strong> = a data field, like <code>name</code>.</li>
</ul>
<p>Setting attributes one-by-one works but is clumsy — the next lesson shows the proper way with <code>__init__</code>.</p>`
},
{
id:'py-oop-l2', title:'__init__ & Methods',
html:`<h3>The constructor: __init__</h3>
<p><code>__init__</code> runs automatically when an object is created, setting up its data:</p>
<pre><code>class Student:
    def __init__(self, name, marks):
        self.name = name      # self = "this object"
        self.marks = marks

    def result(self):         # a method = function inside a class
        if self.marks &gt;= 50:
            return f"{self.name} passed with {self.marks} marks."
        return f"{self.name} needs to work harder."

s1 = Student("Ali", 85)
s2 = Student("Bilal", 42)
print(s1.result())   # Ali passed with 85 marks.
print(s2.result())   # Bilal needs to work harder.</code></pre>
<ul>
<li><code>self</code> refers to the object the method was called on — always the first parameter.</li>
<li><strong>Attributes</strong> (<code>self.name</code>) store data; <strong>methods</strong> (<code>result</code>) define behaviour.</li>
<li>Call methods with a dot: <code>s1.result()</code>.</li>
</ul>
<p><strong>Try it:</strong> add a <code>grade()</code> method returning A/B/C/F based on marks.</p>`
},
{
id:'py-oop-l3', title:'Inheritance Basics',
html:`<h3>Reusing blueprints</h3>
<p><strong>Inheritance</strong> lets a new class reuse everything from an existing one, then add or change parts:</p>
<pre><code>class Person:
    def __init__(self, name):
        self.name = name

    def introduce(self):
        return f"I am {self.name}."

class Teacher(Person):          # Teacher inherits from Person
    def __init__(self, name, subject):
        super().__init__(name)  # run the parent's __init__
        self.subject = subject

    def introduce(self):        # override the parent's method
        return f"I am {self.name}, and I teach {self.subject}."

p = Person("Ali")
t = Teacher("Miss Khan", "Python")
print(p.introduce())   # I am Ali.
print(t.introduce())   # I am Miss Khan, and I teach Python.</code></pre>
<ul>
<li><code>super().__init__(name)</code> calls the parent's constructor so <code>name</code> still gets set.</li>
<li><strong>Overriding</strong> = redefining a parent method to behave differently.</li>
</ul>
<p>Inheritance models real "is-a" relationships: a Teacher <em>is a</em> Person with extra abilities.</p>`
},
{
id:'py-oop-l4', title:'Mini Project Part 1: The Plan',
html:`<h3>Project: Student Marks Manager</h3>
<p>We will build a program that stores students, calculates grades and saves everything to a file — using classes, methods and file handling together.</p>
<h3>Requirements</h3>
<ol>
<li>Add students with name and marks.</li>
<li>Show each student's grade (A+ / A / B / C / D / F).</li>
<li>Show the class average.</li>
<li>Save to <code>students.txt</code> and load on startup.</li>
</ol>
<h3>The design</h3>
<pre><code>class Student:
    # attributes: name, marks
    # methods: grade(), to_line(), from_line()

class MarksManager:
    # attributes: students (a list)
    # methods: add_student(), show_all(), average(),
    #          save(), load()</code></pre>
<p>Two classes, each with one job: <code>Student</code> knows about one student; <code>MarksManager</code> manages the whole collection and the file. This separation is exactly how real software is structured.</p>`
},
{
id:'py-oop-l5', title:'Mini Project Part 2: Full Code',
html:`<h3>The complete program</h3>
<pre><code>class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def grade(self):
        m = self.marks
        if m &gt;= 90: return "A+"
        if m &gt;= 80: return "A"
        if m &gt;= 70: return "B"
        if m &gt;= 60: return "C"
        if m &gt;= 50: return "D"
        return "F"

    def to_line(self):
        return f"{self.name},{self.marks}"

    @staticmethod
    def from_line(line):
        name, marks = line.strip().split(",")
        return Student(name, int(marks))


class MarksManager:
    def __init__(self):
        self.students = []
        self.load()

    def add_student(self, name, marks):
        self.students.append(Student(name, marks))
        self.save()

    def show_all(self):
        for s in self.students:
            print(f"{s.name}: {s.marks} ({s.grade()})")

    def average(self):
        if not self.students:
            return 0
        return sum(s.marks for s in self.students) / len(self.students)

    def save(self):
        with open("students.txt", "w") as f:
            for s in self.students:
                f.write(s.to_line() + "\\n")

    def load(self):
        try:
            with open("students.txt") as f:
                self.students = [Student.from_line(l) for l in f]
        except FileNotFoundError:
            self.students = []


# --- using it ---
mgr = MarksManager()
mgr.add_student("Ali", 85)
mgr.add_student("Ayesha", 93)
mgr.show_all()
print(f"Class average: {mgr.average():.1f}")</code></pre>
<p>Run it twice: the second run loads the saved students. You have built persistent, object-oriented software — a genuine portfolio piece.</p>`
},
{
id:'py-oop-l6', title:'Where to Go Next with Python',
html:`<h3>You have real foundations now</h3>
<p>Variables, data structures, functions, files and OOP — this is the core of Python. Realistic next steps:</p>
<ol>
<li><strong>Build 5+ projects</strong> — an expense tracker, a quiz game, a weather app using a free API, an automation script that renames files. Projects get you hired.</li>
<li><strong>Learn Git & GitHub</strong> — publish your projects so clients can see your code.</li>
<li><strong>Pick a direction:</strong>
<ul>
<li><strong>Web development</strong> — Flask or Django to build websites.</li>
<li><strong>Data & freelancing</strong> — pandas for data cleaning; small businesses pay for Excel-to-report automation.</li>
<li><strong>AI</strong> — after solid Python, explore machine learning libraries.</li>
</ul></li>
<li><strong>Read other people's code</strong> — open-source projects on GitHub teach professional style faster than tutorials.</li>
</ol>
<h3>The freelancer's edge</h3>
<p>Python automation gigs (scraping public data, cleaning spreadsheets, Telegram/WhatsApp bots) are common entry-level freelance work. Your to-do app and marks manager prove you can deliver. Keep building.</p>`
}
],
quiz: [
{q:'In OOP, what is the relationship between a class and an object?', options:['They are the same thing','A class is the blueprint; an object is one instance built from it','An object creates classes','A class is a type of function'], answer:1, explain:'The class defines the design; each object (instance) is an individual thing made from it.'},
{q:'When does __init__ run?', options:['When the program ends','Automatically when an object is created','Only when called manually','Every time a method runs'], answer:1, explain:'__init__ is the constructor — Python calls it automatically on creation to set up the object.'},
{q:'What does "self" refer to inside a method?', options:['The class itself','The object the method was called on','The parent class','A global variable'], answer:1, explain:'self is the instance; self.name accesses that particular object\'s data.'},
{q:'How do you call a method named result() on object s1?', options:['result(s1)','s1->result()','s1.result()','call s1.result'], answer:2, explain:'Methods are called with dot notation on the object: s1.result().'},
{q:'What does super().__init__(name) do in a child class?', options:['Deletes the parent','Runs the parent\'s constructor to set up inherited data','Creates a second object','Imports a module'], answer:1, explain:'super() reaches the parent class; calling its __init__ keeps inherited setup working.'},
{q:'What is method overriding?', options:['Deleting a method','Redefining a parent\'s method in the child class','Calling two methods at once','Hiding the class'], answer:1, explain:'The child provides its own version of an inherited method, changing its behaviour.'},
{q:'In the Marks Manager, which class is responsible for the file?', options:['Student','MarksManager (save/load methods)','Both equally','Neither — files handle themselves'], answer:1, explain:'MarksManager owns save() and load(); Student only knows about one student\'s data.'},
{q:'What does @staticmethod mean on from_line?', options:['It runs automatically','It is a method that needs no object or class state','It is faster','It cannot be called'], answer:1, explain:'A static method is a plain function grouped with the class — it takes no self.'}
]
}
]
},
{
id:'freelancing', title:'Freelancing in Pakistan', urdu:'فری لانسنگ',
desc:`Turn your skills into income: set up winning Fiverr and Upwork profiles, land your first client, price in PKR, get paid through banks, Payoneer or Wise, and grow steadily.`,
icon:'💰',
chapters: [
{
id:'fl-start', title:'Getting Started', urdu:'شروعات کیسے کریں', comingSoon:false,
lessons: [
{
id:'fl-start-l1', title:'What Is Freelancing?',
html:`<h3>Work for clients, on your terms</h3>
<p>A <strong>freelancer</strong> is self-employed: instead of one employer, you serve many clients — often abroad — project by project, from your own home.</p>
<h3>The main platforms</h3>
<ul>
<li><strong>Fiverr</strong> — you create "gigs" (service listings with fixed prices); clients come to you. Easiest starting point for beginners.</li>
<li><strong>Upwork</strong> — clients post jobs; you send proposals bidding for the work. Better for larger, ongoing projects.</li>
<li><strong>Direct clients</strong> — local businesses you approach yourself (shops, clinics, restaurants needing websites or social media).</li>
</ul>
<h3>Why it suits Pakistan</h3>
<ul>
<li>Earn in dollars while spending in rupees — the exchange rate multiplies your purchasing power.</li>
<li>No commute, flexible hours — many successful Pakistani freelancers started as students.</li>
<li>Low startup cost: a laptop/smartphone and internet are enough to begin.</li>
</ul>
<p><strong>Honest note:</strong> the first client is the hardest. Most beginners send dozens of proposals before one lands. That is normal — this course shows you how to shorten that phase.</p>`
},
{
id:'fl-start-l2', title:'Choosing Your Skill',
html:`<h3>Start with ONE marketable skill</h3>
<p>Clients pay for outcomes, not certificates. Beginner-friendly skills with real demand:</p>
<ul>
<li><strong>Graphic design</strong> — logos, social media posts (learn Canva, then Photoshop).</li>
<li><strong>Web development</strong> — business websites (this track's first course!).</li>
<li><strong>Video editing</strong> — YouTube/TikTok editing (CapCut is free).</li>
<li><strong>Content writing</strong> — blog posts, product descriptions.</li>
<li><strong>Virtual assistance</strong> — email handling, data entry, scheduling.</li>
<li><strong>Social media management</strong> — running business pages (this track's marketing course).</li>
</ul>
<h3>How to choose</h3>
<ol>
<li>Pick something you can practise daily for 60–90 days.</li>
<li>Check demand: search the skill on Fiverr and count active gigs with reviews.</li>
<li>Niche down: "video editor" is crowded; "video editor for real-estate agents" is not.</li>
</ol>
<p><strong>Rule:</strong> one skill, done well, beats five skills done poorly. Master one, get clients, then expand.</p>`
},
{
id:'fl-start-l3', title:'Creating a Winning Fiverr Profile',
html:`<h3>Your profile is your shop window</h3>
<ol>
<li><strong>Photo:</strong> a clear, friendly headshot with good light. No logos, no sunglasses.</li>
<li><strong>Username:</strong> professional — your name or name+skill (e.g. <em>ali_writes</em>), not <em>coolboy123</em>.</li>
<li><strong>Tagline:</strong> one line saying what you do and for whom: <em>"I design scroll-stopping Instagram posts for small brands."</em></li>
<li><strong>Description:</strong> 150–250 words: who you help, what you deliver, your process, a call to action ("Message me before ordering!").</li>
<li><strong>Languages & skills:</strong> list honestly — English plus Urdu is a plus for many clients.</li>
</ol>
<h3>Your first gig</h3>
<ul>
<li><strong>Title:</strong> specific and searchable: <em>"I will design 5 modern Instagram posts for your business"</em>.</li>
<li><strong>Packages:</strong> Basic / Standard / Premium tiers — e.g. 3 posts / 7 posts / 15 posts + source files.</li>
<li><strong>Gig image:</strong> design an attractive thumbnail (1280×769 px) showing samples of your work.</li>
<li><strong>Price low at first</strong> — early reviews matter more than early profit.</li>
</ul>`
},
{
id:'fl-start-l4', title:'Creating a Strong Upwork Profile',
html:`<h3>Upwork rewards specialists</h3>
<p>Unlike Fiverr's gigs, Upwork clients post jobs and invite freelancers. Your profile must make a busy client stop scrolling:</p>
<ol>
<li><strong>Title:</strong> keyword-rich and specific — <em>"Video Editor | YouTube & Reels | Premiere Pro"</em> beats <em>"I do everything"</em>.</li>
<li><strong>Overview (first 2 lines are everything):</strong> open with the client's outcome: <em>"I help YouTubers publish faster with clean, retention-focused edits — 120+ videos delivered."</em> Clients skim; front-load the value.</li>
<li><strong>Portfolio:</strong> 4–6 best pieces. No client work yet? Create <em>sample projects</em> for imaginary brands and label them as samples — honest and effective.</li>
<li><strong>Hourly rate:</strong> start competitive (many beginners start around $5–10/hour) and raise it with reviews.</li>
<li><strong>Profile video (optional):</strong> a 60-second intro builds trust fast.</li>
</ol>
<h3>Connects</h3>
<p>Upwork charges "Connects" (credits) to send proposals — you get a free monthly allowance. Spend them only on jobs you genuinely fit; mass-applying burns credits and reputation.</p>`
},
{
id:'fl-start-l5', title:'Building a Portfolio for Free',
html:`<h3>No clients yet? Make your own proof</h3>
<p>Clients hire based on <em>evidence</em>. Create 5–8 portfolio pieces as self-initiated projects:</p>
<ul>
<li><strong>Designer:</strong> redesign a local restaurant's menu and Instagram posts (label: "concept redesign").</li>
<li><strong>Developer:</strong> build 2–3 demo sites (this track's web course!) and host them free on GitHub Pages.</li>
<li><strong>Video editor:</strong> re-edit public-domain footage or create spec ads for imaginary products.</li>
<li><strong>Writer:</strong> publish 3–4 articles on Medium or your own free blog.</li>
</ul>
<h3>Where to show it</h3>
<ul>
<li><strong>Behance</strong> (design), <strong>GitHub</strong> (code) — free and respected.</li>
<li>A simple one-page portfolio site with your best work and a contact button.</li>
<li>Always label practice work as <strong>"sample/concept work"</strong> — honesty builds trust; fake client claims destroy it.</li>
</ul>
<p><strong>Quality bar:</strong> 5 excellent pieces beat 20 mediocre ones. Polish each until you'd proudly show your teacher.</p>`
},
{
id:'fl-start-l6', title:'Your Workspace & Daily Routine',
html:`<h3>Set up like a professional</h3>
<ul>
<li><strong>Reliable internet</strong> — freelancing dies with disconnections. Know your backup (mobile hotspot).</li>
<li><strong>Power backup</strong> — load-shedding is real: keep devices charged, know your area's schedule.</li>
<li><strong>A quiet corner</strong> — even a desk in a corner signals "work mode" to your brain.</li>
<li><strong>Separate accounts</strong> — a professional email (yourname@gmail.com) and organised folders per client.</li>
</ul>
<h3>A starter routine</h3>
<ol>
<li><strong>Skill practice</strong> — 60–90 minutes daily. Non-negotiable.</li>
<li><strong>Proposals/outreach</strong> — 30–45 minutes: send tailored proposals, message prospects.</li>
<li><strong>Learning</strong> — 30 minutes: tutorials, platform updates, better English.</li>
</ol>
<p>Track everything in a notebook or spreadsheet: proposals sent, replies, orders, earnings. What gets measured gets improved. Treat freelancing as a business from day one — because it is one.</p>`
}
],
quiz: [
{q:'What is the key difference between Fiverr and Upwork?', options:['Fiverr is only for Pakistanis','On Fiverr you list gigs and clients come to you; on Upwork you bid on posted jobs','Upwork is free, Fiverr is paid','There is no difference'], answer:1, explain:'Fiverr = productised gigs clients buy. Upwork = you send proposals for posted jobs.'},
{q:'Which is the best beginner strategy for choosing a skill?', options:['Learn five skills at once','Master ONE in-demand skill and niche down','Pick whatever sounds impressive','Wait until you feel ready'], answer:1, explain:'One skill done well, narrowed to a specific audience, wins clients fastest.'},
{q:'What makes a good Fiverr gig title?', options:['"I will do anything for $5"','Specific and searchable, e.g. "5 modern Instagram posts for your business"','ALL CAPS WITH EMOJIS','A famous brand name'], answer:1, explain:'Specific titles match what clients actually search for.'},
{q:'On Upwork, what matters most in your overview?', options:['Your life story','The first two lines — lead with the client\'s outcome','Listing every software you own','A long list of hobbies'], answer:1, explain:'Clients skim; the opening lines must promise the result they want.'},
{q:'What are Upwork "Connects"?', options:['Free video calls','Credits spent to send proposals','Client phone numbers','A chat feature'], answer:1, explain:'Each proposal costs Connects from your monthly allowance — spend them on jobs you truly fit.'},
{q:'With no clients yet, what should your portfolio contain?', options:['Nothing until someone hires you','5–8 polished sample/concept pieces, honestly labelled','Copied work from top sellers','Stock photos claimed as yours'], answer:1, explain:'Self-initiated concept work, honestly labelled, proves ability without deception.'},
{q:'Why keep a backup internet option?', options:['It is a legal requirement','Freelancing income depends on staying connected — outages cost clients','It makes you faster','Clients require two ISPs'], answer:1, explain:'Missed deadlines from disconnections destroy the reliability clients pay for.'},
{q:'What should you track from day one?', options:['Nothing — focus on work','Proposals sent, replies, orders and earnings','Only your expenses','Your competitors\' prices'], answer:1, explain:'Tracking inputs (proposals) and outputs (orders, earnings) shows what is actually working.'}
]
},
{
id:'fl-client', title:'Winning Your First Client', urdu:'پہلا کلائنٹ کیسے حاصل کریں', comingSoon:false,
lessons: [
{
id:'fl-client-l1', title:'How Clients Choose Freelancers',
html:`<h3>Inside a client's mind</h3>
<p>A client with a problem (needs a logo, a website, an editor) scans dozens of profiles. They filter in seconds:</p>
<ol>
<li><strong>Relevance</strong> — "Has this person done <em>my exact thing</em> before?" Specific beats generic.</li>
<li><strong>Proof</strong> — portfolio samples, reviews, completed orders.</li>
<li><strong>Communication</strong> — clear, confident English in the proposal; fast replies.</li>
<li><strong>Price vs risk</strong> — cheap with no proof feels risky; mid-price with proof feels safe.</li>
</ol>
<h3>What this means for you</h3>
<ul>
<li>New sellers win by being <strong>specific</strong>: "I edit talking-head YouTube videos" beats "I am a hardworking freelancer".</li>
<li>Your proposal's first two lines decide everything — the client may never scroll further.</li>
<li>Respond fast: clients often hire the first <em>qualified</em> responder, not the best one.</li>
</ul>
<p>You cannot control having zero reviews — but you can control specificity, samples and speed.</p>`
},
{
id:'fl-client-l2', title:'Writing Proposals That Get Replies',
html:`<h3>The 4-part proposal formula</h3>
<pre><code>1. HOOK (1 line): Show you read their job.
   "Your real-estate walkthrough videos have great
    footage — the pacing in the first 10 seconds is
    where viewers drop off."

2. PROOF (1-2 lines): Relevant evidence.
   "I edit similar property videos; here is a sample:
    [link]. Average watch-time improved 40% for my
    last client."

3. PLAN (2-3 lines): How you will do THEIR project.
   "I would tighten the intro to 5 seconds, add
    captions throughout, and deliver the first cut
    in 48 hours."

4. CTA (1 line): Easy next step.
   "Shall I edit a 30-second sample from your footage
    so you can judge the style?"</code></pre>
<h3>Rules</h3>
<ul>
<li><strong>Never</strong> copy-paste the same proposal. Clients smell templates instantly.</li>
<li>Talk about <em>their</em> project, not your life story.</li>
<li>End with a question — it invites a reply.</li>
<li>Keep it under 150 words. Busy clients skim.</li>
</ul>`
},
{
id:'fl-client-l3', title:'The First-Gig Strategy',
html:`<h3>Lower the barrier, raise the trust</h3>
<p>Your first orders are about <strong>reviews</strong>, not profit. Tactics that work:</p>
<ul>
<li><strong>Start small:</strong> offer a tiny, low-risk version — "I will edit a 60-second sample" instead of a full project.</li>
<li><strong>Price to enter:</strong> be the best value, not the cheapest. Rock-bottom prices attract the worst clients.</li>
<li><strong>Over-deliver:</strong> deliver early, add a small bonus (an extra revision, a thumbnail). First reviews mention this.</li>
<li><strong>Ask for the review:</strong> after delivery, politely ask: <em>"If you're happy, a review would mean a lot as I'm building my profile."</em></li>
</ul>
<h3>Where beginners find client #1</h3>
<ol>
<li><strong>Your network:</strong> tell everyone what you do — relatives' businesses need logos, menus, pages.</li>
<li><strong>Local businesses:</strong> walk into shops with a weak Facebook page; show a free sample.</li>
<li><strong>Fiverr buyer requests / Upwork jobs</strong> filtered to low-competition, recent posts.</li>
<li><strong>Facebook groups</strong> for Pakistani startups and small businesses.</li>
</ol>
<p>One five-star review changes everything — the second client is dramatically easier than the first.</p>`
},
{
id:'fl-client-l4', title:'Communication Do\'s & Don\'ts',
html:`<h3>Do</h3>
<ul>
<li><strong>Reply within a few hours</strong> — speed signals reliability.</li>
<li><strong>Confirm understanding:</strong> <em>"Just to confirm — you need 5 posts, square format, delivered by Friday?"</em> Prevents 90% of disputes.</li>
<li><strong>Give updates</strong> before being asked: <em>"First draft ready tomorrow morning."</em></li>
<li><strong>Write in clear, simple English</strong> — short sentences beat fancy vocabulary.</li>
<li><strong>Stay on the platform</strong> — Fiverr/Upwork messages protect both sides.</li>
</ul>
<h3>Don't</h3>
<ul>
<li>Don't say "sir/ma'am" ten times — one polite greeting is enough; overdoing it looks unprofessional.</li>
<li>Don't promise what you can't deliver ("100% guaranteed viral!").</li>
<li>Don't disappear mid-project — if delayed, say so <em>early</em> with a new date.</li>
<li>Don't share personal contact details to dodge platform fees — it violates terms and removes your protection; accounts get banned.</li>
</ul>
<p>Clients rehire freelancers who communicate well even more than those with slightly better skills.</p>`
},
{
id:'fl-client-l5', title:'Handling Revisions Professionally',
html:`<h3>Revisions are normal, not failure</h3>
<p>"Can you change the colour?" is not an insult — it's the job. Handle it like a pro:</p>
<ol>
<li><strong>Set revision limits upfront:</strong> "Includes 2 revision rounds" in your gig or proposal. Unlimited revisions invite endless changes.</li>
<li><strong>Ask specific questions:</strong> <em>"Which shade — darker blue like this sample, or teal?"</em> Vague feedback gets vague results.</li>
<li><strong>Batch changes:</strong> <em>"Please list all changes together so I can do them in one round."</em></li>
<li><strong>Stay gracious:</strong> never argue taste. If a request hurts the design, explain once with a reason, then follow their call — it's their project.</li>
</ol>
<h3>When revisions explode</h3>
<p>If a client keeps adding <em>new</em> requirements (not fixes), that's <strong>scope creep</strong>. Respond firmly and politely:</p>
<p><em>"Happy to add the extra pages! That's beyond our original scope, so I'll quote it separately — Rs X for the addition. Shall I proceed?"</em></p>
<p>Professionals charge for extra work. Amateurs absorb it and burn out.</p>`
},
{
id:'fl-client-l6', title:'Getting Your First Review',
html:`<h3>The review flywheel</h3>
<p>Reviews are the currency of freelance platforms. Each 5-star review makes the next client easier to win. Engineer them deliberately:</p>
<ol>
<li><strong>Deliver early</strong> — even one day early delights clients.</li>
<li><strong>Add a small unexpected bonus</strong> — an extra social-media size export, a short usage guide.</li>
<li><strong>Write a gracious delivery note:</strong> <em>"Delivered! I've also included X as a bonus. Let me know if you'd like any tweaks."</em></li>
<li><strong>Follow up once</strong> after a day or two: <em>"Hope the files worked well for you!"</em></li>
<li><strong>Ask directly:</strong> <em>"If you're satisfied, an honest review would really help my new profile grow."</em></li>
</ol>
<h3>If something went wrong</h3>
<p>A 4-star review with honest feedback beats a dispute. If a client is unhappy: fix it fast, apologise once (not repeatedly), and learn. Never beg for 5 stars or offer discounts for reviews — platforms penalise that.</p>
<p><strong>Milestone:</strong> after 5–10 good reviews, raise your prices. Your profile now sells itself.</p>`
}
],
quiz: [
{q:'What do clients filter for FIRST when scanning profiles?', options:['Lowest price','Relevance — have they done my exact thing before?','Fancy profile design','Longest description'], answer:1, explain:'Relevance beats everything: proof you have solved their specific problem before.'},
{q:'What is the ideal length for a proposal?', options:['500+ words to show effort','Under 150 words','One sentence','As long as the job post'], answer:1, explain:'Busy clients skim. A tight 4-part proposal under 150 words gets read.'},
{q:'What should a proposal lead with?', options:['Your life story','A hook proving you read their job post','Your university degree','A discount offer'], answer:1, explain:'The hook — referencing THEIR project specifically — earns the next 10 seconds of attention.'},
{q:'Why offer a small first version of your service?', options:['To earn less','To lower the client\'s risk and earn a first review','Because beginners can\'t do big projects','Platforms require it'], answer:1, explain:'Small, low-risk first orders convert hesitant clients; the review is worth more than the profit.'},
{q:'Before starting work, what should you always do?', options:['Ask for full payment upfront','Confirm the requirements in your own words','Start immediately to impress','Send your CNIC copy'], answer:1, explain:'Confirming scope ("you need X by Friday, correct?") prevents most disputes.'},
{q:'Why must you keep communication on the platform?', options:['It is faster','It protects both sides and violating it risks a ban','Clients prefer it','It improves your English'], answer:1, explain:'On-platform messages are your evidence in disputes; moving off-platform to dodge fees gets accounts banned.'},
{q:'A client keeps adding NEW requirements mid-project. This is…', options:['Good luck','Scope creep — quote the extras separately','A reason to quit','Normal and free'], answer:1, explain:'New requirements beyond the agreed scope should be quoted and charged separately, politely.'},
{q:'After delivering great work, what should you do about reviews?', options:['Beg repeatedly for 5 stars','Offer a discount for a review','Politely ask once for an honest review','Never mention reviews'], answer:2, explain:'One polite, direct ask is professional. Begging or incentivising reviews violates platform rules.'}
]
},
{
id:'fl-pricing', title:'Pricing & Proposals', urdu:'قیمت اور پروپوزل', comingSoon:false,
lessons: [
{
id:'fl-pricing-l1', title:'How to Price Your Work',
html:`<h3>Forget "what should I charge?" — calculate it</h3>
<p><strong>The floor:</strong> your monthly target ÷ billable hours. Example: you want Rs 60,000/month and can bill 80 hours:</p>
<pre><code>Rs 60,000 ÷ 80 hours = Rs 750/hour minimum</code></pre>
<p>Then convert to project prices: a logo taking ~6 hours → at least Rs 4,500.</p>
<h3>Pricing rules for beginners</h3>
<ul>
<li><strong>Never compete on being cheapest</strong> — the cheapest clients are the hardest to please and never return.</li>
<li><strong>Price the value, not the hours:</strong> a logo that brands a whole business is worth more than 6 hours of clicking.</li>
<li><strong>Raise prices every 5–10 good reviews</strong> — 10–20% bumps are normal.</li>
<li><strong>Quote in USD on international platforms</strong> ($25 for that logo), think in PKR for your budget.</li>
</ul>
<h3>Starter price anchors (examples, adjust to your skill)</h3>
<ul>
<li>Logo design: $20–50 → Social media pack (10 posts): $30–80</li>
<li>Simple business website: $100–300 → Blog article (1000 words): $15–40</li>
</ul>
<p>These are <em>starting examples</em>, not promises — research your niche's actual going rates on the platform.</p>`
},
{
id:'fl-pricing-l2', title:'Hourly vs Fixed Price',
html:`<h3>Fixed price (per project)</h3>
<p><strong>Best for:</strong> well-defined work — a logo, 5 Instagram posts, a landing page.</p>
<ul>
<li>Client knows the total cost upfront — easier to say yes.</li>
<li>You profit from efficiency: finish faster, earn more per hour.</li>
<li>Risk: underestimating the work. Always add a buffer (quote 20% above your estimate).</li>
</ul>
<h3>Hourly</h3>
<p><strong>Best for:</strong> open-ended work — ongoing editing, virtual assistance, maintenance.</p>
<ul>
<li>Paid for all time spent, including revisions.</li>
<li>Upwork's time tracker verifies hours for hourly contracts.</li>
<li>Risk: clients watch the clock; inefficiency is visible.</li>
</ul>
<h3>The hybrid beginner path</h3>
<p>Start <strong>fixed-price</strong> on Fiverr (packages force you to define scope) and try <strong>hourly</strong> on Upwork for ongoing roles. As you gain data on how long tasks take, your fixed quotes get sharper — and more profitable.</p>`
},
{
id:'fl-pricing-l3', title:'Proposal Templates That Work',
html:`<h3>Template 1: The specific-project proposal</h3>
<pre><code>Hi [Name],

Your [project type] needs [specific observation about
their business/post] — I noticed [one concrete detail].

I do exactly this: [1-line proof + link to 1 sample].

My plan for you:
- [Deliverable 1]
- [Deliverable 2]
- Delivery in [X days], [N] revision rounds included.

Price: [$X] fixed. Shall I start with [small first step]?

[Your Name]</code></pre>
<h3>Template 2: The local business outreach (WhatsApp/visit)</h3>
<pre><code>Assalam-o-Alaikum! I am [Name], a [skill] based in
[City]. I saw your [shop/page] — your [product] looks
great, but [specific gap: no menu online / few posts].

I made you a free sample: [link/image]. If you like
the style, I manage pages/design menus for
Rs [X]/month. May I send details?</code></pre>
<p>Customise every bracket. A template is a skeleton — the specifics are the muscle.</p>`
},
{
id:'fl-pricing-l4', title:'Raising Your Rates with Confidence',
html:`<h3>When to raise</h3>
<ul>
<li>You have 5–10 strong reviews and steady inquiries.</li>
<li>You're booked out — demand exceeds your hours.</li>
<li>Your skills clearly improved (compare old vs new portfolio).</li>
</ul>
<h3>How to raise without losing clients</h3>
<ol>
<li><strong>New clients:</strong> just update your gig/package prices. No explanation needed.</li>
<li><strong>Existing clients:</strong> give notice and grandfather briefly: <em>"From next month my rate moves to $X. For you, the current rate holds for one more project as thanks for your trust."</em></li>
<li><strong>Raise 10–20% at a time</strong> — big jumps shock; steps compound.</li>
</ol>
<h3>The mindset shift</h3>
<p>Clients don't buy hours; they buy <strong>outcomes and reliability</strong>. A $50 freelancer who delivers perfectly on time is cheaper than a $20 one who vanishes. Every delivered project makes you less replaceable — price like it.</p>
<p><strong>Exercise:</strong> write down your current rate and your "6 months from now" rate. What 3 portfolio pieces would justify the gap? Go make them.</p>`
},
{
id:'fl-pricing-l5', title:'Red Flags & Saying No',
html:`<h3>Walk away from these</h3>
<ul>
<li><strong>"Do a free sample project first"</strong> (beyond a tiny paid test) — real clients pay for tests or trust portfolios.</li>
<li><strong>Vague scope + fixed price:</strong> "just make it nice, we'll decide later" = endless revisions.</li>
<li><strong>Rush + discount:</strong> "urgent, but our budget is tiny" — urgency costs <em>more</em>, not less.</li>
<li><strong>Off-platform payment:</strong> "pay you directly via transfer to avoid fees" — no protection, possible ban.</li>
<li><strong>Bad communication from the start:</strong> rude, ghosting, or one-word replies predict the whole project.</li>
</ul>
<h3>How to say no gracefully</h3>
<pre><code>Thanks for thinking of me! This project isn't the
right fit for my schedule/skills right now. I want
you to get great results, so I'd rather be honest
than deliver something average. Best of luck!</code></pre>
<p>Saying no to bad clients protects your ratings, your time and your morale. Every "no" makes room for a better "yes".</p>`
},
{
id:'fl-pricing-l6', title:'Simple Contracts & Scope',
html:`<h3>Why a written agreement matters</h3>
<p>Even a short message counts: it prevents "but I thought X was included" disputes. Before starting, confirm in writing:</p>
<pre><code>Project: 5 Instagram posts for [Business]
Includes: design + 2 caption options per post,
          2 revision rounds
Delivery: 5 working days from receiving content
Price: Rs 8,000 (50% advance, 50% on delivery)
Not included: ad management, photography</code></pre>
<h3>The advance rule</h3>
<ul>
<li><strong>New clients:</strong> 50% advance before starting. Serious clients never object.</li>
<li><strong>On platforms:</strong> the platform's escrow/milestone system IS your contract — use milestones for big projects.</li>
<li><strong>Never start big work on a pure promise</strong> — "pay you after, I promise" from a stranger is a donation, not a deal.</li>
</ul>
<p>Save every agreement (screenshots, emails, platform messages). If a dispute ever arises, written scope is your shield.</p>`
}
],
quiz: [
{q:'If you want Rs 60,000/month from 80 billable hours, what is your minimum hourly rate?', options:['Rs 600','Rs 750','Rs 1,000','Rs 500'], answer:1, explain:'60,000 ÷ 80 = Rs 750/hour. Price projects from this floor, not from guesses.'},
{q:'Why should beginners avoid competing on lowest price?', options:['It is illegal','Cheapest clients are hardest to please and never return','Platforms ban low prices','It is too much work'], answer:1, explain:'Price-shoppers haggle most and value you least. Compete on value and reliability instead.'},
{q:'When is FIXED pricing usually better than hourly?', options:['For open-ended ongoing work','For well-defined deliverables like a logo or 5 posts','Never','Only for local clients'], answer:1, explain:'Fixed price suits defined deliverables; hourly suits open-ended, ongoing work.'},
{q:'What buffer should you add when estimating fixed-price work?', options:['None — be exact','About 20% above your estimate','Double it always','10% below to win the job'], answer:1, explain:'Work always expands; a ~20% buffer protects you from under-quoting.'},
{q:'You are fully booked with inquiries. What should you do?', options:['Work 18-hour days','Raise your rates 10–20%','Stop replying','Lower prices to clear the queue'], answer:1, explain:'Excess demand is the market telling you you are underpriced. Raise rates in steps.'},
{q:'A stranger asks you to do a full project free "for exposure". You should…', options:['Always accept — exposure pays later','Decline politely; real clients pay for tests','Do it but watermark everything','Ask for exposure in writing'], answer:1, explain:'Unpaid full projects from strangers exploit beginners. A tiny paid test is the professional alternative.'},
{q:'What is the "advance rule" for new clients?', options:['No advance needed','50% advance before starting','Full payment after 6 months','Pay in cash only'], answer:1, explain:'50% upfront filters out non-serious clients and protects your time.'},
{q:'What must a written scope statement include?', options:['Your life story','Deliverables, revisions, timeline, price, and what is NOT included','Only the price','Your CNIC number'], answer:1, explain:'Clear inclusions AND exclusions prevent "but I thought X was included" disputes.'}
]
},
{
id:'fl-paid', title:'Getting Paid', urdu:'ادائیگی کیسے حاصل کریں', comingSoon:false,
lessons: [
{
id:'fl-paid-l1', title:'How Freelance Payments Work',
html:`<h3>The basic flow</h3>
<ol>
<li>You complete work for a client.</li>
<li>The client pays through an agreed channel.</li>
<li>You withdraw to your Pakistani bank or mobile wallet.</li>
</ol>
<h3>Platform protection (Fiverr/Upwork)</h3>
<p>On freelance platforms, the client's payment is typically <strong>held by the platform</strong> (escrow) when the order starts and <strong>released to you</strong> after delivery is approved. This protects both sides — the client knows you can't run off with the money, and you know the money exists before you work.</p>
<ul>
<li>Platforms charge a <strong>service fee</strong> (a percentage) — check the current fee on the platform itself, as rates change.</li>
<li>There is usually a <strong>clearance period</strong> (several days) before funds become withdrawable.</li>
<li><strong>Never</strong> agree to work off-platform to "avoid fees" — you lose all protection and risk a permanent ban.</li>
</ul>
<h3>Direct clients</h3>
<p>For local or direct international clients, agree <em>in writing</em> on amount, currency, method and timing (e.g. 50% advance) before starting — see the contracts lesson in the previous chapter.</p>`
},
{
id:'fl-paid-l2', title:'Bank Transfer: The Foundation',
html:`<h3>Your local bank account</h3>
<p>Every freelancer needs a personal bank account in Pakistan (Meezan, HBL, UBL, MCB, Allied — any major bank works). It is the final destination for most freelance income.</p>
<h3>Receiving money from abroad into your bank</h3>
<ul>
<li><strong>IBAN:</strong> your account's international identifier (starts with PK, found on your bank statement or app). Clients and services use it to send wire transfers.</li>
<li><strong>SWIFT code:</strong> your bank's international code — ask your bank or find it on their website.</li>
<li><strong>Timing & cost:</strong> international wires take a few business days and involve fees on one or both ends — confirm current charges with your bank before promising a client anything.</li>
</ul>
<h3>Local client payments</h3>
<p>For Pakistani clients, a simple <strong>IBFT transfer</strong> to your account number or IBAN works instantly between local banks, usually via mobile banking apps. Always share payment details privately (never post account numbers publicly) and send a receipt/confirmation for every payment.</p>`
},
{
id:'fl-paid-l3', title:'Payoneer: The Freelancer Standard',
html:`<h3>What Payoneer is</h3>
<p><strong>Payoneer</strong> is an international payment service widely used by Pakistani freelancers. It gives you <strong>receiving accounts</strong> in foreign currencies (USD, EUR, GBP, etc.) — so a US client can pay you as if you had a US bank account.</p>
<h3>How freelancers use it</h3>
<ol>
<li>Create a free Payoneer account and verify your identity (CNIC + bank details).</li>
<li>Connect it as the withdrawal method on Fiverr/Upwork.</li>
<li>Withdraw from Payoneer to your Pakistani bank account in PKR.</li>
</ol>
<h3>Good to know</h3>
<ul>
<li>Payoneer charges fees on transfers and currency conversion — <strong>check their current fee page</strong> before calculating your prices; fees change over time.</li>
<li>Withdrawals typically take 1–3 business days to reach your bank.</li>
<li>Keep your account details secure and enable two-factor authentication.</li>
<li>Payoneer is also how many freelancers receive <strong>direct</strong> international client payments (via "request a payment").</li>
</ul>`
},
{
id:'fl-paid-l4', title:'Wise & Other Options',
html:`<h3>What Wise is</h3>
<p><strong>Wise</strong> (formerly TransferWise) is an international money-transfer service known for transparent, mid-market exchange rates. Clients abroad can send money to your Pakistani bank account through it, often at a better rate than traditional wires.</p>
<h3>When each option fits</h3>
<ul>
<li><strong>Platform earnings (Fiverr/Upwork):</strong> withdraw via Payoneer or direct bank transfer, per the platform's options.</li>
<li><strong>Direct foreign clients:</strong> Payoneer request-a-payment, Wise transfer, or wire to your IBAN.</li>
<li><strong>Small quick payments:</strong> some clients use services like Remitly or direct Wise transfers — agree on who bears any fee <em>before</em> the work starts.</li>
</ul>
<h3>Golden rules</h3>
<ul>
<li>Agree on <strong>who pays transfer fees</strong> upfront — "you receive $100 net" vs "client sends $100 gross" are different.</li>
<li><strong>Never share</strong> full account numbers, card numbers or login codes publicly or with strangers.</li>
<li>Beware of <strong>fake payment screenshots</strong> — confirm money actually arrived in your account before delivering final files.</li>
</ul>`
},
{
id:'fl-paid-l5', title:'JazzCash & Easypaisa for Local Clients',
html:`<h3>Mobile wallets for Pakistani clients</h3>
<p>For <strong>local</strong> clients, <strong>JazzCash</strong> and <strong>Easypaisa</strong> are the most convenient option — most small business owners already use them daily.</p>
<ul>
<li>Clients can send money to your mobile number instantly, any time.</li>
<li>You can transfer wallet balance to your bank account or withdraw from agents/ATMs.</li>
<li>Perfect for small amounts (Rs 2,000–20,000) where bank transfers feel heavy.</li>
</ul>
<h3>Professional tips</h3>
<ul>
<li>Use a <strong>dedicated number</strong> for business payments if possible — keeps records clean.</li>
<li>Share your wallet number <strong>privately</strong> (WhatsApp/message), never in public posts.</li>
<li>Confirm receipt immediately: <em>"Received Rs 5,000 — thank you! Starting your work now."</em></li>
<li>Note that wallets have <strong>transfer limits</strong> depending on account level — check your account's current limits for large payments.</li>
</ul>
<p>Many freelancers quote local clients in PKR via JazzCash/Easypaisa and international clients in USD via Payoneer/bank — a clean, professional split.</p>`
},
{
id:'fl-paid-l6', title:'Invoicing & Record-Keeping',
html:`<h3>Send an invoice every time</h3>
<p>An invoice is a simple bill you send the client. Even a WhatsApp message counts if it has:</p>
<pre><code>INVOICE #001 — 18 Oct 2026
From: [Your Name], [City]
To: [Client Name/Business]
Description: 5 Instagram post designs
Amount: Rs 8,000
Received: Rs 4,000 advance on 10 Oct
Balance due: Rs 4,000 on delivery
Payment: JazzCash [number shared privately]</code></pre>
<h3>Track everything</h3>
<p>Keep a simple spreadsheet with columns: <strong>Date | Client | Work | Amount | Received | Pending</strong>. Update it the moment money moves. This takes 2 minutes and saves hours of confusion.</p>
<h3>Tax & legal honesty</h3>
<ul>
<li>Freelance income is <strong>real income</strong> — keep records of everything you earn.</li>
<li>Pakistan has had <strong>tax provisions for IT/freelance exports</strong> that changed over the years — do <strong>not</strong> rely on social-media claims about "zero tax".</li>
<li><strong>Consult a tax professional or check FBR's current rules</strong> for your situation once earnings become regular. Good records make this painless.</li>
</ul>
<p>Professionals invoice, track and file. Amateurs "forget". Be the professional.</p>`
}
],
quiz: [
{q:'On freelance platforms, what does "escrow" mean for your payment?', options:['The client pays you in cash','The platform holds the client\'s payment and releases it after approved delivery','You pay the platform first','Payments are made in cryptocurrency'], answer:1, explain:'Escrow means the money is secured with the platform before you work, then released on approval.'},
{q:'Why should you NOT move a platform client off-platform to "save fees"?', options:['It is slower','You lose all payment protection and risk a permanent ban','Clients dislike it','It is impossible'], answer:1, explain:'Off-platform deals remove escrow protection and violate terms — accounts get banned.'},
{q:'What is an IBAN used for?', options:['Logging into mobile banking','Your account\'s international identifier for receiving foreign transfers','A type of debit card','WiFi passwords'], answer:1, explain:'The IBAN (starting with PK) identifies your account for international wire transfers.'},
{q:'What does Payoneer give Pakistani freelancers?', options:['A free laptop','Foreign-currency receiving accounts (USD, EUR…) for getting paid internationally','Free internet','Tax exemption'], answer:1, explain:'Payoneer provides receiving accounts so foreign clients can pay you like a local bank transfer.'},
{q:'Before quoting a price, what should you check about payment fees?', options:['Nothing — fees don\'t matter','The CURRENT fees on the provider\'s own site, since they change','Your friend\'s guess','Last year\'s rates'], answer:1, explain:'Fees change over time. Always verify current fees on the official site before pricing.'},
{q:'Which payment method best suits a Rs 5,000 job for a Lahore shop owner?', options:['International wire transfer','JazzCash/Easypaisa mobile wallet','A US dollar cheque','Bitcoin'], answer:1, explain:'Mobile wallets are instant and universal for small local payments in Pakistan.'},
{q:'A client sends a screenshot "proving" payment. What do you do?', options:['Deliver final files immediately','Verify the money actually arrived in YOUR account first','Thank them and wait a month','Send your password to confirm'], answer:1, explain:'Screenshots can be faked. Only confirmed receipt in your account counts.'},
{q:'What is the honest approach to freelance taxes in Pakistan?', options:['Assume social-media claims of zero tax','Keep full records and check FBR\'s current rules / consult a professional','Ignore it forever','Ask the client to handle it'], answer:1, explain:'Tax provisions change; good records plus current official guidance (or a professional) keep you safe.'}
]
},
{
id:'fl-growth', title:'Growing Your Income', urdu:'آمدنی کیسے بڑھائیں', comingSoon:false,
lessons: [
{
id:'fl-growth-l1', title:'From Side Income to Full Time',
html:`<h3>Grow in stages, not leaps</h3>
<p>Quitting everything for freelancing on day one is gambling. The safer path:</p>
<ol>
<li><strong>Stage 1 — Proof (months 1–3):</strong> land first 5–10 orders. Goal: reviews, not rupees.</li>
<li><strong>Stage 2 — Stability (months 3–6):</strong> earn consistently. Goal: 2–3 repeat clients.</li>
<li><strong>Stage 3 — Scale (months 6–12):</strong> raise rates, specialise. Goal: match or beat your salary/job alternative.</li>
<li><strong>Stage 4 — Full time:</strong> only when freelance income has covered your expenses for <strong>3+ consecutive months</strong> <em>and</em> you have 3 months of savings.</li>
</ol>
<h3>Milestones that matter</h3>
<ul>
<li>First $100 earned → proof the model works.</li>
<li>First repeat client → proof of quality.</li>
<li>First referral → proof of reputation.</li>
<li>First rate increase accepted → proof of value.</li>
</ul>
<p>Track monthly earnings in your spreadsheet. Decisions from data, not feelings.</p>`
},
{
id:'fl-growth-l2', title:'Repeat Clients & Retainers',
html:`<h3>The cheapest client is the one you already have</h3>
<p>Finding a new client costs 5× the effort of keeping one. Turn one-off buyers into ongoing income:</p>
<ul>
<li><strong>Deliver + suggest:</strong> <em>"Your posts are done! I noticed your page has no Reels — I could do 4/month for Rs X. Interested?"</em></li>
<li><strong>Offer a retainer:</strong> a fixed monthly package — e.g. <em>"8 designs + 2 revision rounds per month for Rs 25,000"</em>. Predictable income for you, priority service for them.</li>
<li><strong>Stay in touch:</strong> a short check-in every 4–6 weeks: <em>"Hope the campaign did well! Need anything this month?"</em></li>
<li><strong>Be indispensable:</strong> learn their brand, keep their files organised, remind them of deadlines.</li>
</ul>
<h3>Math of retainers</h3>
<p>Just <strong>4 retainer clients at Rs 25,000/month = Rs 100,000/month</strong> — stable, predictable, and far less stressful than chasing 20 one-off gigs. Two or three retainers change a freelancer's life.</p>`
},
{
id:'fl-growth-l3', title:'Upskilling Strategically',
html:`<h3>Learn what the market pays for</h3>
<p>Not all skills pay equally. Upgrade along <strong>value ladders</strong>:</p>
<ul>
<li>Canva posts → <strong>brand identity design</strong> (logos + guidelines pay 5–10× more).</li>
<li>Video cutting → <strong>retention editing + thumbnails</strong> for YouTubers (monthly retainers).</li>
<li>Basic websites → <strong>e-commerce stores + speed optimisation</strong>.</li>
<li>Writing → <strong>copywriting that sells</strong> (sales pages, email sequences).</li>
<li>Any skill → <strong>AI-assisted workflows</strong>: deliver faster with AI tools, charge for the outcome.</li>
</ul>
<h3>How to upskill without overwhelm</h3>
<ol>
<li>Pick <strong>one</strong> adjacent high-value skill per quarter.</li>
<li>Learn by doing: 1 tutorial → 1 practice project → 1 portfolio piece → offer it to clients.</li>
<li>Raise your rate when the new skill lands its first paid project.</li>
</ol>
<p><strong>English is a skill too:</strong> clearer proposals and calls directly raise your close rate. 15 minutes of daily practice compounds.</p>`
},
{
id:'fl-growth-l4', title:'Personal Branding on a Budget',
html:`<h3>Be findable, be credible</h3>
<p>Clients Google freelancers before hiring. Own your name online — free:</p>
<ol>
<li><strong>LinkedIn profile:</strong> professional photo, headline with your skill + niche, featured section with portfolio links. Post one useful tip weekly.</li>
<li><strong>Portfolio site:</strong> one page — who you help, best work, testimonials, contact button. (You can build this with this track's web course!)</li>
<li><strong>Consistent name/handle</strong> across Fiverr, Upwork, LinkedIn, Instagram.</li>
<li><strong>Collect testimonials:</strong> after great work, ask: <em>"Could I quote your feedback on my portfolio?"</em> Even 3 testimonials transform credibility.</li>
</ol>
<h3>Content that attracts clients</h3>
<ul>
<li>Before/after posts of your work.</li>
<li>Quick tips in your niche ("3 thumbnail mistakes killing your clicks").</li>
<li>Short screen-recordings of your process.</li>
</ul>
<p>You don't need to be famous — you need the <em>right 50 people</em> to know you exist and trust your work.</p>`
},
{
id:'fl-growth-l5', title:'Avoiding Burnout',
html:`<h3>Freelancing is a marathon</h3>
<p>Burnout — exhaustion, cynicism, dread of work — kills more freelance careers than competition. Prevent it:</p>
<ul>
<li><strong>Set working hours</strong> and tell clients: <em>"I work 9am–6pm PKT; messages after that get answered next morning."</em> Boundaries are professional.</li>
<li><strong>One day off weekly.</strong> Non-negotiable. Rest is productive.</li>
<li><strong>Cap revisions and scope</strong> (previous chapters) — endless free work breeds resentment.</li>
<li><strong>Price to work less:</strong> higher rates → fewer clients needed → more breathing room.</li>
<li><strong>Move your body:</strong> a 20-minute walk clears the mental fog that 2 more hours of staring won't.</li>
</ul>
<h3>Warning signs</h3>
<p>Dreading client messages, quality slipping, working through the night regularly — these mean your <em>system</em> is broken (too cheap, too many clients, no boundaries), not that you're lazy. Fix the system: raise prices, drop the worst client, enforce hours.</p>
<p>A sustainable Rs 80,000/month beats a collapsing Rs 150,000/month.</p>`
},
{
id:'fl-growth-l6', title:'Your 90-Day Action Plan',
html:`<h3>Days 1–30: Foundation</h3>
<ul>
<li>Pick ONE skill; practise 60–90 min daily.</li>
<li>Create Fiverr + Upwork profiles (this course's chapter 1).</li>
<li>Build 5 portfolio samples.</li>
<li>Send 3–5 tailored proposals daily.</li>
</ul>
<h3>Days 31–60: First wins</h3>
<ul>
<li>Land first 3–5 orders (small, over-deliver).</li>
<li>Collect every review and testimonial.</li>
<li>Refine proposals based on what got replies.</li>
<li>Start posting weekly on LinkedIn.</li>
</ul>
<h3>Days 61–90: Momentum</h3>
<ul>
<li>Raise prices 10–20%.</li>
<li>Pitch retainers to happy clients.</li>
<li>Add one adjacent high-value skill.</li>
<li>Review your spreadsheet: what's working? Double down on it.</li>
</ul>
<p><strong>Remember:</strong> every successful freelancer you admire once had zero reviews and sent proposals into the void. The difference between them and quitters is simply that they continued past day 30. Start today.</p>`
}
],
quiz: [
{q:'When is it financially safe to freelance full-time?', options:['After the first order','When freelance income covered expenses 3+ months running, plus 3 months savings','When you feel like it','After one viral post'], answer:1, explain:'Sustained income (3+ months) plus a savings buffer turns a leap into a step.'},
{q:'Why are retainer clients so valuable?', options:['They pay in advance yearly','Predictable monthly income with far less client-chasing','They never need revisions','They do the work themselves'], answer:1, explain:'A few retainers create stable baseline income — 4 × Rs 25,000 = Rs 100,000/month.'},
{q:'What is a "value ladder" in upskilling?', options:['A pricing table','Moving from a basic skill to adjacent higher-paying versions of it','A leaderboard','A course platform'], answer:1, explain:'Climb from commodity work (Canva posts) to premium work (brand identity) in the same domain.'},
{q:'What is the most effective free personal-branding trio?', options:['TikTok dances, memes, gaming','LinkedIn profile + one-page portfolio site + collected testimonials','Business cards and flyers','Paid ads'], answer:1, explain:'LinkedIn, a portfolio site and testimonials make you findable and credible at zero cost.'},
{q:'A client messages at 11pm expecting instant replies. Best response?', options:['Reply instantly every time','Set stated working hours and answer next morning','Block them','Quit freelancing'], answer:1, explain:'Clear boundaries ("9am–6pm PKT") are professional and prevent burnout.'},
{q:'Which is a warning sign of burnout?', options:['Earning too much','Dreading client messages and slipping quality','Taking a day off','Raising prices'], answer:1, explain:'Dread and declining quality signal a broken system (pricing, boundaries, workload) — fix the system.'},
{q:'In the 90-day plan, what is the main goal of days 1–30?', options:['Earning Rs 100,000','Foundation: skill practice, profiles, portfolio samples, daily proposals','Going viral','Hiring a team'], answer:1, explain:'Month one builds the machine: skill, presence, proof and outreach habit.'},
{q:'After your first rate increase is accepted, what does it prove?', options:['Luck','Proof of value — the market accepts your higher price','You should double prices again tomorrow','Clients are careless'], answer:1, explain:'An accepted increase is market proof your value exceeds your old price. Raise in steps from there.'}
]
}
]
},
{
id:'digital-marketing', title:'Digital Marketing Basics', urdu:'ڈیجیٹل مارکیٹنگ',
desc:`Promote any business online: marketing fundamentals, social media, content and SEO, and running your first small ad campaign with confidence.`,
icon:'📣',
chapters: [
{
id:'dm-fund', title:'Marketing Fundamentals', urdu:'مارکیٹنگ کی بنیادی باتیں', comingSoon:false,
lessons: [
{
id:'dm-fund-l1', title:'What Is Marketing, Really?',
html:`<h3>Beyond "advertising"</h3>
<p><strong>Marketing</strong> is everything a business does to attract and keep customers: understanding what people need, shaping the product, setting the price, and communicating the value. Advertising is just one tool inside marketing.</p>
<h3>The core idea</h3>
<p>People don't buy products — they buy <strong>outcomes</strong>:</p>
<ul>
<li>Nobody wants a drill; they want a <em>hole in the wall</em>.</li>
<li>Nobody wants "web design"; they want <em>more customers</em>.</li>
<li>A mother doesn't buy baby lotion; she buys <em>healthy skin for her child</em>.</li>
</ul>
<h3>The marketer's question</h3>
<p>Before any post, ad or campaign, ask: <em>"What does my customer want to achieve, and how does this help?"</em> Every successful campaign in this course traces back to that question. Marketing that starts from the customer's need wins; marketing that starts from "look at us" gets ignored.</p>`
},
{
id:'dm-fund-l2', title:'Know Your Customer',
html:`<h3>Build a customer persona</h3>
<p>A <strong>persona</strong> is a vivid sketch of your ideal customer. Example for a Lahore bakery:</p>
<pre><code>Name: "Busy Bilal"
Age: 28, lives in DHA Lahore
Works in banking, long hours
Orders food on his phone, pays via mobile wallet
Follows food pages on Instagram
Wants: fresh, premium birthday cakes without hassle
Fears: late delivery ruining a family event</code></pre>
<h3>How to research (free)</h3>
<ul>
<li><strong>Ask:</strong> talk to 5–10 real or potential customers. "What frustrates you about X?"</li>
<li><strong>Observe:</strong> read comments on competitors' pages — complaints are gold.</li>
<li><strong>Note language:</strong> the exact words customers use become your ad copy.</li>
</ul>
<h3>Pakistani context matters</h3>
<p>Cash on delivery is still king for e-commerce trust; WhatsApp is a primary business channel; family and wedding seasons drive huge spending. A persona built for Karachi behaves differently from one built for London — market to the reality in front of you.</p>`
},
{
id:'dm-fund-l3', title:'The 4 Ps of Marketing',
html:`<h3>The classic framework</h3>
<p>Every marketing decision fits into four buckets:</p>
<ol>
<li><strong>Product</strong> — what you sell and why it's good. (Quality, packaging, variety.)</li>
<li><strong>Price</strong> — what you charge and why. (Premium signals quality; low price signals value.)</li>
<li><strong>Place</strong> — where customers buy. (Shop, website, Instagram DMs, Daraz.)</li>
<li><strong>Promotion</strong> — how they hear about you. (Ads, posts, word of mouth.)</li>
</ol>
<h3>Using it: a chai café example</h3>
<ul>
<li><strong>Product:</strong> karak chai + bun kebab, consistent taste.</li>
<li><strong>Price:</strong> Rs 150 — affordable for students, profitable at volume.</li>
<li><strong>Place:</strong> near a university + delivery via a rider.</li>
<li><strong>Promotion:</strong> TikTok videos of the brewing process, student discount posts.</li>
</ul>
<p>When sales are slow, check all four Ps — beginners blame promotion, but often the <em>product</em> or <em>price</em> is the real problem. Fix the right P.</p>`
},
{
id:'dm-fund-l4', title:'Digital vs Traditional Marketing',
html:`<h3>Traditional marketing</h3>
<p>TV, radio, newspapers, billboards, pamphlets. Strengths: massive reach, trust among older audiences. Weaknesses: <strong>expensive</strong>, hard to measure ("did that billboard bring customers?"), no targeting — everyone sees it.</p>
<h3>Digital marketing</h3>
<p>Social media, search engines, email, WhatsApp. Strengths:</p>
<ul>
<li><strong>Cheap to start:</strong> a Facebook page costs nothing; ads can start from a few hundred rupees.</li>
<li><strong>Precise targeting:</strong> show ads only to women 25–34 in Karachi interested in fashion.</li>
<li><strong>Measurable:</strong> see exactly how many saw, clicked and bought.</li>
<li><strong>Two-way:</strong> customers comment, ask and share — you listen and adapt.</li>
</ul>
<h3>Why digital wins for small Pakistani businesses</h3>
<p>A billboard on Shahrah-e-Faisal costs lakhs monthly. Rs 10,000 in well-targeted Facebook ads can reach tens of thousands of the <em>right</em> people — and you see the results the same day. For small budgets, digital isn't just better; it's the only game that fits.</p>`
},
{
id:'dm-fund-l5', title:'Setting Goals & Measuring (KPIs)',
html:`<h3>Marketing without goals is just posting</h3>
<p>Set <strong>SMART</strong> goals — Specific, Measurable, Achievable, Relevant, Time-bound:</p>
<ul>
<li>❌ "Get more followers."</li>
<li>✅ "Gain 500 Instagram followers in Lahore within 60 days by posting 4 Reels per week."</li>
</ul>
<h3>Key metrics (KPIs) to know</h3>
<ul>
<li><strong>Reach</strong> — how many people saw your content.</li>
<li><strong>Engagement</strong> — likes, comments, shares (shows interest).</li>
<li><strong>Click-through rate (CTR)</strong> — % of viewers who clicked. 1–2% is typical for ads.</li>
<li><strong>Conversion</strong> — the desired action: purchase, WhatsApp message, signup.</li>
<li><strong>Cost per result</strong> — ad spend ÷ conversions. Lower is better.</li>
<li><strong>Return on ad spend (ROAS)</strong> — revenue ÷ ad spend. 3× means Rs 3 back per Rs 1 spent.</li>
</ul>
<p>Pick <strong>one</strong> primary goal per campaign. "Get sales" and "get followers" need different strategies — chasing both dilutes both.</p>`
},
{
id:'dm-fund-l6', title:'Case Study: A Small Business Turnaround',
html:`<h3>Alina's Boutique, Faisalabad</h3>
<p><strong>Problem:</strong> beautiful clothes, but only walk-in customers; Instagram page had 200 followers and random posts.</p>
<h3>What she changed (using this chapter)</h3>
<ol>
<li><strong>Persona:</strong> defined her buyer — "Style-conscious university girls, 18–24, budget Rs 2,000–4,000 per outfit."</li>
<li><strong>4 Ps check:</strong> product was strong; price fit the persona; <em>place</em> was the gap — added WhatsApp ordering with cash on delivery.</li>
<li><strong>SMART goal:</strong> "100 WhatsApp orders in 60 days."</li>
<li><strong>Promotion:</strong> 3 Reels/week (try-on videos), customer unboxing reposts, Rs 5,000/month in targeted Instagram ads to women 18–24 in Faisalabad.</li>
</ol>
<h3>Result pattern</h3>
<p>Consistent posting + clear ordering + small targeted ads compounded: followers grew, WhatsApp inquiries became daily, and she could finally <em>measure</em> which posts drove orders. No single trick — just fundamentals applied steadily for 60 days.</p>
<p><strong>Your turn:</strong> pick a real or imaginary business and write its persona + one SMART goal.</p>`
}
],
quiz: [
{q:'What do people actually buy?', options:['Products','Outcomes — the result the product gives them','The cheapest option','Whatever is advertised most'], answer:1, explain:'People buy outcomes: not a drill, but the hole in the wall. Market the result.'},
{q:'What is a customer persona?', options:['A celebrity endorsement','A vivid sketch of your ideal customer','A logo','A discount coupon'], answer:1, explain:'A persona (like "Busy Bilal") makes your target customer concrete so messaging hits home.'},
{q:'Which is NOT one of the 4 Ps?', options:['Product','Price','Place','People'], answer:3, explain:'The 4 Ps are Product, Price, Place, Promotion. (Some models add more, but these four are the classic core.)'},
{q:'Sales are slow. What should you check first?', options:['Only your ads','All four Ps — the problem may be product or price, not promotion','Your horoscope','Competitors\' offices'], answer:1, explain:'Beginners blame promotion, but product-market fit and pricing are common real culprits.'},
{q:'What is digital marketing\'s biggest advantage for small budgets?', options:['It is free','Cheap start, precise targeting, and measurable results','It needs no skill','It works without internet'], answer:1, explain:'Small budgets can target exactly the right people and see same-day results — impossible with billboards.'},
{q:'Which is a SMART goal?', options:['"Get more followers"','"Gain 500 Lahore Instagram followers in 60 days via 4 Reels/week"','"Go viral"','"Be the best"'], answer:1, explain:'It is Specific, Measurable, Achievable, Relevant and Time-bound.'},
{q:'What does ROAS measure?', options:['Follower growth','Revenue divided by ad spend','Website speed','Employee happiness'], answer:1, explain:'Return on ad spend = revenue ÷ ad spend. 3× means Rs 3 earned per Rs 1 spent.'},
{q:'In Alina\'s case study, which "P" was the main gap?', options:['Product','Price','Place — adding WhatsApp ordering with COD','Promotion'], answer:2, explain:'Her product and price were fine; customers couldn\'t easily BUY — fixing Place (WhatsApp + COD) unlocked sales.'}
]
},
{
id:'dm-social', title:'Social Media Marketing', urdu:'سوشل میڈیا مارکیٹنگ', comingSoon:false,
lessons: [
{
id:'dm-social-l1', title:'Choosing the Right Platform',
html:`<h3>Fish where the fish are</h3>
<p>You don't need every platform — you need the <em>right</em> one for your customer:</p>
<ul>
<li><strong>Facebook</strong> — largest audience in Pakistan, strong for ages 25+. Great for local businesses, groups and Marketplace.</li>
<li><strong>Instagram</strong> — visual products: fashion, food, beauty, decor. Reels drive discovery.</li>
<li><strong>TikTok</strong> — massive young reach; short video can explode organically with zero ad spend.</li>
<li><strong>YouTube</strong> — tutorials, reviews, vlogs; videos keep bringing views for years.</li>
<li><strong>WhatsApp</strong> — not "social media" but Pakistan's #1 business channel: catalogues, broadcast lists, direct orders.</li>
<li><strong>LinkedIn</strong> — B2B and freelancers: clients, jobs, professional credibility.</li>
</ul>
<h3>The rule</h3>
<p>Master <strong>one</strong> platform where your persona spends time before adding a second. A dead page on five platforms is worse than a thriving page on one. Ask your customers: "Where did you hear about us?" — then double down there.</p>`
},
{
id:'dm-social-l2', title:'Setting Up a Business Profile',
html:`<h3>Your profile is your digital shopfront</h3>
<p>Convert personal accounts to business/creator accounts (free, in settings) — you get analytics, contact buttons and ad options.</p>
<h3>The setup checklist</h3>
<ol>
<li><strong>Username:</strong> your business name, same everywhere.</li>
<li><strong>Profile photo:</strong> your logo — clear even at tiny size.</li>
<li><strong>Bio (150 characters):</strong> what you sell + who it's for + how to order.<br><em>Example: "Fresh birthday cakes in Lahore 🎂 | WhatsApp to order 👇 | COD available"</em></li>
<li><strong>Link:</strong> WhatsApp chat link, website or link-in-bio page.</li>
<li><strong>Contact buttons:</strong> enable call/WhatsApp/email buttons.</li>
<li><strong>Highlights (Instagram):</strong> save Stories as highlights — Prices, Reviews, How to Order, Behind the Scenes.</li>
</ol>
<h3>First impression test</h3>
<p>Show your profile to a stranger for 5 seconds. Can they say what you sell and how to buy? If not, rewrite the bio. Clarity converts.</p>`
},
{
id:'dm-social-l3', title:'Content Pillars & the Content Calendar',
html:`<h3>Content pillars: your 3–4 recurring themes</h3>
<p>Pillars stop the "what do I post today?" panic. A clothing brand's pillars:</p>
<ol>
<li><strong>Product</strong> — new arrivals, close-ups, prices.</li>
<li><strong>Social proof</strong> — customer photos, reviews, unboxings.</li>
<li><strong>Education</strong> — styling tips, fabric care, size guides.</li>
<li><strong>Behind the scenes</strong> — packing orders, your workspace, your story.</li>
</ol>
<h3>The 80/20 rule</h3>
<p>~80% of posts should <strong>help or entertain</strong>; ~20% directly sell. Pages that only post "BUY NOW" get muted. Pages that teach and delight earn the right to sell.</p>
<h3>A simple weekly calendar</h3>
<pre><code>Mon: Product showcase (Pillar 1)
Wed: Customer review / unboxing (Pillar 2)
Fri: Styling tip Reel (Pillar 3)
Sun: Behind-the-scenes Story (Pillar 4)</code></pre>
<p>Plan a week ahead in a notebook. Batch-create: shoot 4 videos in one afternoon, then schedule them through the week. Consistency beats intensity.</p>`
},
{
id:'dm-social-l4', title:'Captions & Hashtags That Work',
html:`<h3>Caption formula</h3>
<pre><code>HOOK (first line — stops the scroll):
"Stop buying lawn that fades in 2 washes 👇"

VALUE (why they should care):
"Our premium cambric is pre-shrunk and colour-
locked — 200+ washes tested. Rs 2,450, all sizes."

CTA (tell them what to do):
"Comment SIZE to order — COD across Pakistan 🚚"</code></pre>
<h3>Caption rules</h3>
<ul>
<li>First line is everything — most people never tap "more".</li>
<li>Write like you talk; short lines; emojis sparingly (1–3).</li>
<li>Always include a <strong>call to action</strong>: comment, DM, tap the link.</li>
<li>Mix Urdu/English as your audience speaks — Roman Urdu often outperforms pure English for local brands.</li>
</ul>
<h3>Hashtags</h3>
<ul>
<li>Use 5–10 relevant tags: mix big (#PakistaniFashion) and niche (#LawnSuitsLahore).</li>
<li>Create one <strong>branded hashtag</strong> (#AlinasBoutique) and ask customers to use it.</li>
<li>Put hashtags at the end of the caption or in the first comment.</li>
</ul>`
},
{
id:'dm-social-l5', title:'Reels & Short Video Basics',
html:`<h3>Why short video wins</h3>
<p>Reels, TikToks and Shorts get far more organic reach than photos — platforms push video to non-followers. A phone is all you need.</p>
<h3>The anatomy of a good Reel</h3>
<ol>
<li><strong>Hook (0–3 sec):</strong> the result first — "Watch this stain vanish!" Text on screen + you saying it.</li>
<li><strong>Payoff (3–20 sec):</strong> deliver fast. One idea per video. Cut ruthlessly.</li>
<li><strong>CTA (last 3 sec):</strong> "Follow for daily tips" / "DM to order".</li>
</ol>
<h3>Practical filming tips</h3>
<ul>
<li>Film <strong>vertical (9:16)</strong>, in daylight near a window.</li>
<li>Use <strong>captions/subtitles</strong> — most people watch muted. (CapCut auto-generates them free.)</li>
<li>Trending audio helps discovery, but original voiceovers build trust.</li>
<li>Post consistently: 3–5 per week beats 10 one week then silence.</li>
</ul>
<p><strong>Easy formats:</strong> before/after, process videos, "3 mistakes" tips, customer reactions, day-in-the-life. Start with your phone today.</p>`
},
{
id:'dm-social-l6', title:'Engaging Your Audience',
html:`<h3>Social media is a conversation</h3>
<p>The algorithm rewards accounts that create interaction. Engagement is a <em>strategy</em>, not luck:</p>
<ul>
<li><strong>Reply to every comment</strong> within hours — especially early, when the algorithm is deciding whether to push your post.</li>
<li><strong>Answer DMs fast</strong> — a reply within minutes vs hours can decide a sale.</li>
<li><strong>Ask questions:</strong> "Which colour — red or green? 👇" Comments boost reach.</li>
<li><strong>Use stickers:</strong> polls, quizzes and question boxes in Stories.</li>
<li><strong>Go live</strong> occasionally — Q&As and product demos build deep trust.</li>
</ul>
<h3>Handle negativity professionally</h3>
<ul>
<li>Genuine complaint? Apologise publicly, resolve privately: <em>"Sorry about this! DMing you now to fix it."</em></li>
<li>Never argue in comments — spectators judge you by your calm.</li>
<li>Hide or delete only spam/abuse; deleting fair criticism backfires.</li>
</ul>
<p>A page with 1,000 engaged followers outperforms 10,000 silent ones. Depth beats width.</p>`
}
],
quiz: [
{q:'You sell fashion to Pakistani university girls. Which platform do you master FIRST?', options:['LinkedIn','Instagram','A blog nobody reads','All six at once'], answer:1, explain:'Go where YOUR persona spends time — visual products + young audience = Instagram. Master one first.'},
{q:'What is the main benefit of a business/creator account?', options:['It is paid and premium','Analytics, contact buttons and ad options — free','More followers automatically','Blue tick instantly'], answer:1, explain:'Business accounts unlock insights, contact buttons and advertising at no cost.'},
{q:'What is the 80/20 content rule?', options:['Post 80 times a day','~80% help/entertain, ~20% directly sell','80% video, 20% text','Spend 80% of budget on ads'], answer:1, explain:'Pages that only sell get muted. Earn attention with value, then sell.'},
{q:'What matters most in a caption?', options:['The hashtags','The first line (hook) — most never tap "more"','The posting time','The font'], answer:1, explain:'The hook decides whether anyone reads further. Front-load the value.'},
{q:'Why add subtitles to Reels?', options:['They look fancy','Most people watch muted — captions keep them watching','The algorithm requires it','It increases file size'], answer:1, explain:'Muted viewing is the norm; captions (free via CapCut) rescue your message.'},
{q:'What is the ideal Reel structure?', options:['Long intro, then content','Hook (0–3s) → fast payoff → CTA','Just music and vibes','Only the CTA repeated'], answer:1, explain:'Grab attention in 3 seconds, deliver one idea fast, end with a clear call to action.'},
{q:'A customer complains publicly in your comments. Best move?', options:['Delete it immediately','Argue your case publicly','Apologise briefly in public, resolve in DM','Ignore it'], answer:2, explain:'Public grace + private resolution shows spectators you handle problems professionally.'},
{q:'Which metric proves "engaged" beats "big"?', options:['Follower count','Comments, DMs and shares per post','Account age','Number of hashtags'], answer:1, explain:'Depth of interaction (comments, shares, DMs) drives sales and reach — not raw follower count.'}
]
},
{
id:'dm-seo', title:'Content & SEO Basics', urdu:'مواد اور ایس ای او', comingSoon:false,
lessons: [
{
id:'dm-seo-l1', title:'What Is SEO?',
html:`<h3>Free traffic from Google</h3>
<p><strong>SEO</strong> (Search Engine Optimization) means making your website/pages appear high in Google's <em>unpaid</em> results. When someone searches "best biryani in Karachi", the top results get the clicks — and the customers — for free.</p>
<h3>Why it matters</h3>
<ul>
<li><strong>Free & compounding:</strong> unlike ads, a good article keeps bringing visitors for years at no extra cost.</li>
<li><strong>High intent:</strong> someone searching "plumber near me" is ready to buy — unlike someone scrolling Instagram.</li>
<li><strong>Trust:</strong> people trust Google's top results more than ads.</li>
</ul>
<h3>How Google roughly decides</h3>
<ol>
<li><strong>Relevance</strong> — does your page actually answer the search?</li>
<li><strong>Quality</strong> — is it genuinely helpful, original, complete?</li>
<li><strong>Authority</strong> — do other reputable sites link to you?</li>
<li><strong>Experience</strong> — does it load fast and work well on phones?</li>
</ol>
<p>SEO is a marathon (3–6 months to see results), not a sprint. But it's the highest-ROI marketing there is.</p>`
},
{
id:'dm-seo-l2', title:'Keywords: Think Like a Searcher',
html:`<h3>What are keywords?</h3>
<p><strong>Keywords</strong> are the words people type into Google. Your content must match the <em>language of the searcher</em>, not your internal jargon:</p>
<ul>
<li>❌ You sell: "bespoke artisanal confectionery"</li>
<li>✅ People search: "birthday cake price in Lahore"</li>
</ul>
<h3>Finding keywords (free methods)</h3>
<ol>
<li><strong>Google autocomplete:</strong> type "cake in lahore" and note the suggestions.</li>
<li><strong>"People also ask":</strong> the question boxes in results reveal real queries.</li>
<li><strong>Related searches</strong> at the bottom of the results page.</li>
<li><strong>Your customers' words:</strong> "How do I order?" → target "how to order cake online Lahore".</li>
</ol>
<h3>Target smart</h3>
<ul>
<li><strong>Long-tail keywords</strong> ("best budget gym in Gulberg Lahore") have less competition than "gym".</li>
<li>One page = one main keyword. Don't make five pages compete for the same term.</li>
<li>Answer the <strong>intent</strong>: someone searching "price" wants numbers, not your company history.</li>
</ul>`
},
{
id:'dm-seo-l3', title:'On-Page SEO Basics',
html:`<h3>Optimise each page</h3>
<p><strong>On-page SEO</strong> = everything you control on the page itself:</p>
<ol>
<li><strong>Title tag:</strong> the clickable headline in Google. Put the keyword near the start, keep under ~60 characters.<br><em>Example: "Birthday Cake Prices in Lahore (2026) | Alina's Bakery"</em></li>
<li><strong>Meta description:</strong> the ~155-character summary under the title. It doesn't rank you, but a compelling one gets the click.</li>
<li><strong>Headings:</strong> one <code>&lt;h1&gt;</code> with the keyword; <code>&lt;h2&gt;</code>/<code>&lt;h3&gt;</code> for sections (this should feel familiar from the HTML course!).</li>
<li><strong>Keyword placement:</strong> naturally in the first paragraph, a couple of headings, and sprinkled through the text. Never stuff it awkwardly.</li>
<li><strong>Images:</strong> descriptive file names (<code>chocolate-cake-lahore.jpg</code>) and <strong>alt text</strong> describing the image.</li>
<li><strong>URL:</strong> short and readable: <code>yoursite.com/birthday-cake-prices-lahore</code>.</li>
</ol>
<p>Write for humans first; these tweaks just help Google understand what humans already love.</p>`
},
{
id:'dm-seo-l4', title:'Content That Ranks',
html:`<h3>The winning article structure</h3>
<p>Google rewards content that <strong>fully answers</strong> the search. Structure that works:</p>
<pre><code>Title: exact question/keyword
Intro (2-3 lines): answer the question DIRECTLY.
  ("A 2-pound birthday cake in Lahore costs
   Rs 2,500–4,500 depending on flavour.")

Then expand:
- Price breakdown by size/flavour (table!)
- FAQs (each as an &lt;h2&gt; question)
- How to order / your offer
- Related topics (internal links)</code></pre>
<h3>Rules of ranking content</h3>
<ul>
<li><strong>Answer first, elaborate after</strong> — don't bury the answer under 500 words of intro.</li>
<li><strong>Be the most complete:</strong> cover what the top 3 results cover, plus what they missed.</li>
<li><strong>Original value:</strong> your own prices, photos, data, experience. Copied content never wins.</li>
<li><strong>Length follows need:</strong> a price question needs 400 words; a buying guide may need 2,000.</li>
<li><strong>Update yearly:</strong> refresh prices, dates and examples — freshness matters.</li>
</ul>`
},
{
id:'dm-seo-l5', title:'Local SEO: Get Found Nearby',
html:`<h3>"Near me" searches are gold</h3>
<p>Searches like "tailor near me" or "best pizza DHA" have massive buying intent. <strong>Local SEO</strong> captures them:</p>
<ol>
<li><strong>Google Business Profile (free):</strong> claim your listing at google.com/business. Add correct name, address, hours, phone, photos. This is what appears in Maps and the local results box.</li>
<li><strong>Reviews:</strong> ask happy customers to leave Google reviews — quantity <em>and</em> recency matter. Reply to every review.</li>
<li><strong>NAP consistency:</strong> your Name, Address, Phone must be identical everywhere online (Facebook, website, directories).</li>
<li><strong>Local keywords:</strong> "plumber in Model Town Lahore" on your pages, not just "plumber".</li>
<li><strong>Local directories:</strong> list on relevant Pakistani directories and keep info updated.</li>
</ol>
<h3>The payoff</h3>
<p>A claimed, reviewed, accurate profile can put a small shop above big brands for local searches — and it's completely free. For any business with a physical location, this is the single highest-ROI hour you'll spend.</p>`
},
{
id:'dm-seo-l6', title:'Measuring with Free Tools',
html:`<h3>Google Search Console (free)</h3>
<p>Shows how your site performs in Google: which queries bring clicks, your average position, and problems (broken pages, mobile issues). Setup: verify ownership at search.google.com/search-console — usually by adding a small code snippet to your site.</p>
<h3>Google Analytics (free)</h3>
<p>Shows what visitors <em>do</em> on your site: which pages they visit, how long they stay, where they came from. Watch:</p>
<ul>
<li><strong>Top pages</strong> — double down on what works.</li>
<li><strong>Bounce rate</strong> — high % leaving instantly = content didn't match their expectation.</li>
<li><strong>Traffic sources</strong> — Google vs social vs direct.</li>
</ul>
<h3>A simple monthly routine</h3>
<ol>
<li>Search Console: which queries got impressions but few clicks? Improve those titles.</li>
<li>Analytics: which pages convert best? Link to them more.</li>
<li>Pick ONE improvement per month. SEO compounds through steady iteration.</li>
</ol>
<p>Data beats opinions. Check the numbers before redesigning anything.</p>`
}
],
quiz: [
{q:'What does SEO stand for and what does it earn you?', options:['Social Engagement Optimization — followers','Search Engine Optimization — free Google traffic','Sales Email Outreach — email lists','Sponsored E-commerce Orders — paid ads'], answer:1, explain:'SEO optimises your pages to rank in Google\'s unpaid results, earning free, compounding traffic.'},
{q:'Why is search traffic especially valuable?', options:['It is the cheapest','High intent — the searcher is actively looking for a solution','It is instant','It needs no website'], answer:1, explain:'Someone searching "plumber near me" is ready to buy — far hotter than a casual scroller.'},
{q:'Which is a "long-tail" keyword?', options:['"shoes"','"best budget running shoes for flat feet in Lahore"','"buy"','"shoe"'], answer:1, explain:'Long, specific phrases (long-tail) have less competition and clearer buying intent.'},
{q:'Where should your main keyword appear on the page?', options:['Hidden in white text','Title tag, H1, first paragraph, naturally through the text','Only in the footer','Nowhere — Google guesses'], answer:1, explain:'Strategic, natural placement in title, headings and intro helps Google understand the topic.'},
{q:'What is the best structure for a ranking article?', options:['Long story, answer at the end','Direct answer first, then complete elaboration','Only images','Copy the top result'], answer:1, explain:'Answer immediately (Google may feature it), then be the most complete resource on the topic.'},
{q:'What is the single highest-ROI local SEO action?', options:['Buying followers','Claiming and completing your Google Business Profile','Printing flyers','Changing your shop name'], answer:1, explain:'A claimed, accurate, reviewed Business Profile wins "near me" searches — free.'},
{q:'What does NAP consistency mean?', options:['Sleeping regularly','Identical Name, Address, Phone everywhere online','A new ad platform','Napkin advertising'], answer:1, explain:'Consistent business details across the web build Google\'s trust in your listing.'},
{q:'Search Console shows many impressions but few clicks for a query. What do you fix?', options:['Delete the page','Improve the title and meta description to earn the click','Buy ads','Change your business name'], answer:1, explain:'Impressions = you\'re visible; low clicks = your snippet isn\'t compelling. Rewrite it.'}
]
},
{
id:'dm-camp', title:'Running Your First Campaign', urdu:'اپنی پہلی مہم چلائیں', comingSoon:false,
lessons: [
{
id:'dm-camp-l1', title:'What Is a Campaign? Start with the Objective',
html:`<h3>A campaign is a focused push</h3>
<p>A <strong>campaign</strong> is a coordinated set of ads/posts with one goal, one audience, one budget and one timeframe — e.g. "Get 100 WhatsApp orders for Eid suits in 3 weeks with Rs 15,000."</p>
<h3>Pick ONE objective</h3>
<p>Ad platforms ask your objective first because it changes everything:</p>
<ul>
<li><strong>Awareness</strong> — make people know you exist (new brand).</li>
<li><strong>Traffic</strong> — send people to your page/website.</li>
<li><strong>Engagement</strong> — likes, comments, video views.</li>
<li><strong>Leads</strong> — collect contacts (WhatsApp messages, form fills).</li>
<li><strong>Sales</strong> — purchases on your site or via COD.</li>
</ul>
<h3>The beginner's rule</h3>
<p>For a first campaign, choose <strong>Messages/Leads</strong> (WhatsApp inquiries) — it's measurable, and every inquiry is a conversation you can close. "Awareness" campaigns feel nice but teach you nothing about what sells.</p>`
},
{
id:'dm-camp-l2', title:'Budgeting Small & Smart',
html:`<h3>How much to spend?</h3>
<p>Start small enough that losing it wouldn't hurt, big enough to learn from. For most small Pakistani businesses, <strong>Rs 5,000–15,000 for a first 2-week test</strong> is sensible.</p>
<h3>The test budget formula</h3>
<pre><code>Test budget = 3 versions x Rs 300/day x 7 days
            = ~Rs 6,300</code></pre>
<p>Run 3 ad variations for a week; keep the winner, kill the losers, scale the winner gradually.</p>
<h3>Budget rules</h3>
<ul>
<li><strong>Never spend rent money.</strong> Treat the first campaign as tuition — you're buying <em>data</em>.</li>
<li><strong>Daily budgets</strong> (not lifetime) give steadier learning.</li>
<li><strong>Don't judge before 3–4 days</strong> — platforms need time to find your audience.</li>
<li><strong>Track cost per result:</strong> Rs 6,000 ÷ 40 WhatsApp inquiries = Rs 150/inquiry. Is that profitable for you? That's the only question that matters.</li>
</ul>
<p>No budget guarantees sales. Anyone promising "Rs X = Y orders" is selling fantasy, not marketing.</p>`
},
{
id:'dm-camp-l3', title:'Facebook & Instagram Ads Basics',
html:`<h3>Boost vs Ads Manager</h3>
<ul>
<li><strong>Boost Post</strong> — the blue button under your posts. Dead simple: pick audience, budget, duration. Fine for a first test, but limited targeting and optimisation.</li>
<li><strong>Ads Manager</strong> — the full control panel (business.facebook.com). More targeting options, better testing, proper objectives. Where serious advertisers live.</li>
</ul>
<p>Start with a boost to learn the ropes; graduate to Ads Manager when spending regularly.</p>
<h3>What you need before running ads</h3>
<ol>
<li>A <strong>Facebook Business Page</strong> (not a personal profile).</li>
<li>An <strong>ad account</strong> with a payment method (debit/credit card; some advertisers use prepaid options — check current availability).</li>
<li><strong>One clear offer:</strong> "Eid suits, Rs 2,999, COD, order on WhatsApp" beats "check out our collection".</li>
<li>A <strong>destination:</strong> WhatsApp chat, Messenger, or a simple order page.</li>
</ol>
<p>Ads amplify — they multiply whatever your page already is. Fix a weak offer first; ads can't save it.</p>`
},
{
id:'dm-camp-l4', title:'Targeting & Audiences',
html:`<h3>Who sees your ad?</h3>
<p>Targeting has three layers:</p>
<ol>
<li><strong>Core targeting:</strong> location (e.g. Lahore +25km), age, gender, interests ("online shopping", "fashion"). Start broad-ish; let data narrow it.</li>
<li><strong>Custom audiences:</strong> people who already interacted — page engagers, video viewers, website visitors. Warmest audience you own.</li>
<li><strong>Lookalike audiences:</strong> the platform finds new people <em>similar</em> to your customers. Powerful once you have 500–1,000 past buyers/engagers.</li>
</ol>
<h3>Beginner targeting recipe</h3>
<ul>
<li>Location: your delivery area (don't advertise nationwide if you deliver in one city!).</li>
<li>Age/gender matching your persona.</li>
<li>2–3 interests max — more isn't better.</li>
<li><strong>Exclude</strong> past buyers from prospecting ads (don't pay to reach people who already bought).</li>
</ul>
<h3>The creative matters more</h3>
<p>Targeting gets 20% of the credit; the <strong>ad itself</strong> (image/video + headline + offer) gets 80%. A great ad to a broad audience beats a mediocre ad to a perfect audience. Spend most effort on the creative.</p>`
},
{
id:'dm-camp-l5', title:'Reading Results: Metrics That Matter',
html:`<h3>The metrics ladder</h3>
<p>Read top-to-bottom; fix the first broken rung:</p>
<ol>
<li><strong>CPM</strong> (cost per 1,000 views) — are views cheap? High CPM = competitive/narrow audience.</li>
<li><strong>CTR</strong> (click-through rate) — clicks ÷ views. Below ~1%? Your creative isn't stopping thumbs.</li>
<li><strong>CPC</strong> (cost per click) — what each visitor costs.</li>
<li><strong>Conversion rate</strong> — visitors who took action. Low? Your page/offer/WhatsApp reply needs work — not the ad.</li>
<li><strong>Cost per result</strong> — the bottom line: what each inquiry/sale cost you.</li>
</ol>
<h3>Diagnose like a doctor</h3>
<ul>
<li>Lots of views, no clicks → <strong>creative problem</strong> (boring image/headline).</li>
<li>Lots of clicks, no inquiries → <strong>destination problem</strong> (slow page, confusing offer, no COD).</li>
<li>Inquiries but no sales → <strong>closing problem</strong> (slow replies, no follow-up — fix your WhatsApp game).</li>
</ul>
<p>Change <strong>one thing at a time</strong> and compare. Changing everything teaches nothing.</p>`
},
{
id:'dm-camp-l6', title:'Your First Campaign Checklist',
html:`<h3>Pre-launch checklist</h3>
<ul>
<li>☐ ONE objective chosen (e.g. WhatsApp inquiries).</li>
<li>☐ Offer is specific: product + price + how to order.</li>
<li>☐ Destination ready: WhatsApp link tested, quick replies drafted.</li>
<li>☐ 3 ad creatives (different image/video or headline each).</li>
<li>☐ Targeting set: location = delivery area, persona-matched age/gender, 2–3 interests.</li>
<li>☐ Budget: Rs 300/day per version × 7 days; payment method working.</li>
<li>☐ Tracking: know your cost-per-result math (break-even number written down).</li>
</ul>
<h3>During & after</h3>
<ul>
<li>☐ Don't touch anything for 3–4 days (let it learn).</li>
<li>☐ Reply to inquiries FAST — speed closes sales.</li>
<li>☐ Day 7: kill losers, keep the winner's pattern.</li>
<li>☐ Write down what you learned — this log becomes your playbook.</li>
<li>☐ Scale winners gradually (+20–30% budget), never 10× overnight.</li>
</ul>
<p><strong>You did it.</strong> Most businesses never run a structured campaign. You now can — and every campaign makes the next one smarter.</p>`
}
],
quiz: [
{q:'What is the beginner\'s rule for choosing a campaign objective?', options:['Always choose Awareness','Pick ONE — preferably Messages/Leads for a first campaign','Choose all of them','Objectives don\'t matter'], answer:1, explain:'One measurable objective (WhatsApp inquiries) teaches you what works; "awareness" teaches nothing about sales.'},
{q:'What is a sensible first test budget approach?', options:['Spend everything on day one','~Rs 300/day per version × 3 versions × 7 days, then keep the winner','Rs 100 total','Borrow money to spend more'], answer:1, explain:'Small, split tests buy data cheaply: test 3 creatives for a week, scale only the winner.'},
{q:'What is the key difference between Boost and Ads Manager?', options:['Boost is free','Boost is simple but limited; Ads Manager offers full targeting and testing control','Ads Manager is only for videos','There is none'], answer:1, explain:'Boost is training wheels; Ads Manager is the full control panel serious advertisers graduate to.'},
{q:'Before running ads, what must be ready?', options:['A viral post','Business Page, ad account + payment, a clear offer, a working destination','10,000 followers','A TV commercial'], answer:1, explain:'Ads amplify what exists — without a clear offer and destination, spend is wasted.'},
{q:'You deliver only in Lahore. What is the targeting mistake to avoid?', options:['Targeting Lahore','Advertising nationwide','Using Urdu copy','Running video ads'], answer:1, explain:'Paying for clicks from cities you can\'t serve burns budget. Target your delivery area.'},
{q:'Lots of ad clicks but zero inquiries. What is broken?', options:['The ad creative','The destination — page, offer clarity, or reply speed','The budget','The platform'], answer:1, explain:'Clicks mean the ad worked; no action means the landing experience (offer, page, WhatsApp replies) failed.'},
{q:'Your CTR is 0.3%. What should you fix first?', options:['Increase budget','The creative — image/headline isn\'t stopping thumbs','Targeting age','The payment method'], answer:1, explain:'Low CTR = people see it but don\'t care. Fix the creative before anything else.'},
{q:'After finding a winning ad, how do you scale?', options:['10× the budget overnight','Gradually (+20–30%), keeping what works','Change the creative completely','Pause it for a month'], answer:1, explain:'Gradual scaling preserves performance; sudden 10× jumps reset the platform\'s learning.'}
]
}
]
}
]
};
