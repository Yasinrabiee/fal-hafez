function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
$(`#search`).click(function () {
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
  $(`.tools`).css(`visibility`,`visible`)
});
let show = 0;
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
});
let fontSize = 20;
$(`#zoom-in`).click(function() {
  fontSize++;
  $(`#poem`).css(`font-size`,fontSize)
})
$(`#fullscreen`).click(function() {
  fontSize = 20;
  $(`#poem`).css(`font-size`,fontSize)
})
$(`#zoom-out`).click(function() {
  fontSize--;
  $(`#poem`).css(`font-size`,fontSize)
})
$(`.status-moon`).click(function() {
  $(`main`).css(`background-color`, `#0e2338`);
  $(`body`).css(`background-color`, `#484848`);
  $(`body`).css(`color`, `white`);
  $(`.status`).css(`color`, `white`);
  $(`.besmeAllah`).css(`color`, `white`);
  $(`.poem-text`).css(`color`, `white`);
  $(`blockquote`).css(`color`,`white`);
})
$(`.status-sun`).click(function() {
  $(`main`).css(`background-color`, `white`);
  $(`body`).css(`background-color`, `#3498db`);
  $(`body`).css(`color`, `black`);
  $(`.status`).css(`color`, `black`);
  $(`.besmeAllah`).css(`color`, `black`);
  $(`.poem-text`).css(`color`, `black`);
  $(`blockquote`).css(`color`,`black`);
})
fontSize = 20;
$(`#zoom-in`).click(function() {
  fontSize++;
  $(`#poemShow`).css(`font-size`,fontSize)
})
$(`#fullscreen`).click(function() {
  fontSize = 20;
  $(`#poemShow`).css(`font-size`,fontSize)
})
$(`#zoom-out`).click(function() {
  fontSize--;
  $(`#poemShow`).css(`font-size`,fontSize)
})
// let now = new Date();
// let hours = now.getHours().toString().padStart(2, `0`);
// let minutes = now.getMinutes().toString().padStart(2, `0`);
// let seconds = now.getSeconds().toString().padStart(2, `0`);
// const time = `${hours}:${minutes}:${seconds}`;
// $(`#clock`).html(time);
// function updateClock() {
//   let now = new Date();
//   let hours = now.getHours().toString().padStart(2, `0`);
//   let minutes = now.getMinutes().toString().padStart(2, `0`);
//   let seconds = now.getSeconds().toString().padStart(2, `0`);
//   const time = `${hours}:${minutes}:${seconds}`;
//   $(`#clock`).html(time);
// }
// setInterval(updateClock,1000);
$(window).scroll(function() {
  if($(this).scrollTop() > 300)
    $(`.btn-top`).fadeIn();
  else
    $(`.btn-top`).fadeOut();
})
$(`.btn-top`).click(function() {
  $(`html,body`).animate({
    scrollTop: 0
  },1000)
})
$(`.status-moon`).click(function() {
  $(this).toggleClass(`dark`);
  if($(this).hasClass(`dark`))
  {
    $(`main`).css(`background-color`, `#0e2338`);
    $(`body`).css(`background-color`, `#484848`);
    $(`body`).css(`color`, `white`);
    $(`.status`).css(`color`, `white`);
    $(`.besmeAllah`).css(`color`, `white`);
    $(`.poem-text`).css(`color`, `white`);
    $(`blockquote`).css(`color`,`white`);
    $(this).find(`i`).removeClass(`bi-moon`).addClass(`bi-sun`);
  }
  else
  {
    $(`main`).css(`background-color`, `white`);
    $(`body`).css(`background-color`, `#3498db`);
    $(`body`).css(`color`, `black`);
    $(`.status`).css(`color`, `black`);
    $(`.besmeAllah`).css(`color`, `black`);
    $(`.poem-text`).css(`color`, `black`);
    $(`blockquote`).css(`color`,`black`);
    $(this).find(`i`).removeClass(`bi-sun`).addClass(`bi-moon`);
  }
})

let fonts = [
  'Vazir',
  'Uthman',
  'Samim',
  'Shabnam',
  'Sahel' 
  ]
let fontsFarsi = [
  'وزیر',
  'عثمان',
  'صمیم',
  'شبنم',
  'ساحل'
  ]
let font = 0;
$(`.font-name`).html(fontsFarsi[font]);
$(`#font-tool`).click(function() {
  font++;
  if(font == fonts.length)
    font = 0;
  $(`.font-name`).html(fontsFarsi[font]);  
  $(`.poem-text`).css(`font-family`,`${fonts[font]}`)
})
// $(`#search-tool`).click(function() {
//   $(`.section__edit`).css(`bottom`,`60px`);
//   $(`.edit__input`).focus();
// });
// $(`.edit__close`).click(function() {
//   $(`.section__edit`).css(`bottom`,`-60px`)
// })
// $(`.edit__input`).on('input',function() {
//   const search = $(this).val();
//   const text = $(`.poem-text`).text();
//   const change = text.replaceAll(search,`<mark>${search}</mark>`)
//   $(`.poem-text`).html(change);
// })