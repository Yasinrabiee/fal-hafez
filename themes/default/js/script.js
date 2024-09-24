function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(`#poemShow`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
$(`#poem`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
$(`.font-name`).html(`وزیر`);
$(`.font-name`).html(localStorage.getItem(`font-name`));  
$(`.poem-text`).css(`font-family`, localStorage.getItem(`font`));

$(`#searchShow`).click(function () {
  let search = parseInt(prompt(`شماره غزل دلخواه خود را انتخاب کنید(1-495):`));
  if (search > 495 || search <= 0) alert(`شماره غزل نامعتبر!`);
  $(`#titleSearch`).html(`
    ${hafez[search - 1]["Title"]}<br>
    `);
  $(`#result`).html(`
    ${hafez[search - 1]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
    `);
  $(`#hafezSearch`).html(`
    ${hafez[search - 1]["Book"]}<br>
    `);
});

$(`#fal`).click(function () {
  let poem = rand(0, hafez.length - 1);
  $(`#title`).html(`
    ${hafez[poem]["Title"]}<br>
    `);
  $(`#poem`).html(`
    ${hafez[poem]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
    `);
  $(`#hafez`).html(`
   ${hafez[poem]["Book"]}<br>
   `);
  $(`.tools`).css(`visibility`,`visible`);
});
let show = localStorage.getItem(`next-prev`);

$(`#titleShow`).html(`
  ${hafez[show]["Title"]}<br>
  `);
$(`#poemShow`).html(`
  ${hafez[show]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
  `);
$(`#hafezShow`).html(`
 ${hafez[show]["Book"]}<br>
 `);

$(`#titleShow`).html(`
  ${hafez[localStorage.getItem(`next-prev`)]["Title"]}<br>
  `);
$(`#poemShow`).html(`
  ${hafez[localStorage.getItem(`next-prev`)]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
  `);
$(`#hafezShow`).html(`
 ${hafez[localStorage.getItem(`next-prev`)]["Book"]}<br>
 `);

$(`#audio-ff`).attr(`src`,`${hafez[show]["Audio"]}`);
// $(`#audio-sgh`).attr(`src`,`${hafez[show]["Audio-sgh"]}`);
$(`#searchShow`).click(function () {
  show = parseInt(prompt(`شماره غزل دلخواه خود را انتخاب کنید(1-495):`));
  if (show > 495 || show <= 0) alert(`شماره غزل نامعتبر!`);
  show--;
  $(`#titleShow`).html(`
    ${hafez[show]["Title"]}<br>
    `);
  $(`#poemShow`).html(`
    ${hafez[show]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
    `);
  $(`#hafezShow`).html(`
   ${hafez[show]["Book"]}<br>
   `);
  $(`#audio-ff`).attr(`src`,`${hafez[show]["Audio"]}`);
  $(`#audio-sgh`).attr(`src`,`${hafez[show]["Audio-sgh"]}`);
});

$(`#next`).click(function () {
  show++;
  if (show > 494) show = 0;
  $(`#titleShow`).html(`
    ${hafez[show]["Title"]}<br>
    `);
  $(`#poemShow`).html(`
    ${hafez[show]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
    `);
  $(`#hafezShow`).html(`
   ${hafez[show]["Book"]}<br>
   `);
  $(`#audio`).attr(`src`,`${hafez[show]["Audio"]}`);
  $(`#audio`).attr(`src`,`${hafez[show]["Audio-sgh"]}`);
  localStorage.setItem(`next-prev`, show);
});

$(`#prev`).click(function () {
  show--;
  if (show == -1) show = 0;
  $(`#titleShow`).html(`
    ${hafez[show]["Title"]}<br>
    `);
  $(`#poemShow`).html(`
    ${hafez[show]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
    `);
  $(`#hafezShow`).html(`
   ${hafez[show]["Book"]}<br>
   `);
  $(`#audio`).attr(`src`,`${hafez[show]["Audio"]}`);
  $(`#audio`).attr(`src`,`${hafez[show]["Audio-sgh"]}`);
  localStorage.setItem(`next-prev`, show);
});

$(`.status-moon`).click(function() {
  $(`main`).css(`background-color`, `#0e2338`);
  $(`body`).css(`background-color`, `#484848`);
  $(`body`).css(`color`, `white`);
  $(`.status`).css(`color`, `white`);
  $(`.besmeAllah`).css(`color`, `white`);
  $(`.poem-text`).css(`color`, `white`);
  $(`blockquote`).css(`color`,`white`);
});

$(`.status-sun`).click(function() {
  $(`main`).css(`background-color`, `white`);
  $(`body`).css(`background-color`, `#3498db`);
  $(`body`).css(`color`, `black`);
  $(`.status`).css(`color`, `black`);
  $(`.besmeAllah`).css(`color`, `black`);
  $(`.poem-text`).css(`color`, `black`);
  $(`blockquote`).css(`color`,`black`);
});

let fontSize = $(`#poemShow`).css(`font-size`);
fontSize = parseInt(fontSize);
$(`#zoom-in`).click(function() {
  fontSize++;
  localStorage.setItem(`fontSize`,`${fontSize}px`);
  $(`#poemShow`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
});

$(`#fullscreen`).click(function() {
  fontSize = 20;
  localStorage.setItem(`fontSize`,`${fontSize}px`);
  $(`#poemShow`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
});

$(`#zoom-out`).click(function() {
  fontSize--;
  localStorage.setItem(`fontSize`,`${fontSize}px`);
  $(`#poemShow`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
});

$(window).scroll(function() {
  if($(this).scrollTop() > 300)
    $(`.btn-top`).fadeIn();
  else
    $(`.btn-top`).fadeOut();
});

$(`.btn-top`).click(function() {
  $(`html,body`).animate({
    scrollTop: 0
  },1000);
});

let fonts = [
  'Vazir',
  'Uthman',
  'Samim',
  'Shabnam',
  'Sahel' 
];

let fontsFarsi = [
  'وزیر',
  'عثمان',
  'صمیم',
  'شبنم',
  'ساحل'
];

let font = 0;
$(`#font-tool`).click(function() {
  font++;
  if(font == fonts.length)
    font = 0;
  localStorage.setItem(`font`, fonts[font]);
  $(`.font-name`).html(fontsFarsi[font]);  
  localStorage.setItem(`font-name`, fontsFarsi[font]);
  $(`.poem-text`).css(`font-family`,`${fonts[font]}`);
});

let fontSizeFal = $(`#poem`).css(`font-size`);
fontSizeFal = parseInt(fontSizeFal);
$(`#zoom-in`).click(function() {
  fontSizeFal++;
  localStorage.setItem(`fontSize`,`${fontSizeFal}px`);
  $(`#poem`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
});

$(`#fullscreen`).click(function() {
  fontSizeFal = 20;
  localStorage.setItem(`fontSize`,`${fontSizeFal}px`);
  $(`#poem`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
});

$(`#zoom-out`).click(function() {
  fontSizeFal--;
  localStorage.setItem(`fontSize`,`${fontSizeFal}px`);
  $(`#poem`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
});