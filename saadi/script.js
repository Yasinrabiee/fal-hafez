let ghazal = 0;
$(`#poemsaadi`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
$(`#titlesaadi`).html(`
  ${saadi[ghazal]["Title"]}<br>
  `);
$(`#poemsaadi`).html(`
  ${saadi[ghazal]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
  `);
$(`#saadi`).html(`
  ${saadi[ghazal]["Book"]}<br>
  `);
$(`#searchsaadi`).click(function () {
  ghazal = parseInt(prompt(`شماره غزل دلخواه خود را انتخاب کنید(1-637):`));
  if (ghazal > 637 || ghazal <= 0) alert(`شماره غزل نامعتبر!`);
  ghazal--;
  $(`#titlesaadi`).html(`
    ${saadi[ghazal]["Title"]}<br>
    `);
  $(`#poemsaadi`).html(`
    ${saadi[ghazal]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
    `);
  $(`#saadi`).html(`
    ${saadi[ghazal]["Book"]}<br>
    `);
});
$(`#nextsaadi`).click(function () {
  ghazal++;
  if (ghazal > 636) ghazal = 0;
  $(`#titlesaadi`).html(`
    ${saadi[ghazal]["Title"]}<br>
    `);
  $(`#poemsaadi`).html(`
    ${saadi[ghazal]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
    `);
  $(`#saadi`).html(`
    ${saadi[ghazal]["Book"]}<br>
    `);
});
$(`#prevsaadi`).click(function () {
  ghazal--;
  if (ghazal == -1) ghazal = 0;
  $(`#titlesaadi`).html(`
    ${saadi[ghazal]["Title"]}<br>
    `);
  $(`#poemsaadi`).html(`
    ${saadi[ghazal]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
    `);
  $(`#saadi`).html(`
    ${saadi[ghazal]["Book"]}<br>
    `);
});
let fontSize = $(`#poemsaadi`).css(`font-size`);
console.log(fontSize);
fontSize = parseInt(fontSize);
$(`#zoom-in`).click(function() {
  fontSize++;
  localStorage.setItem(`fontSize`,`${fontSize}px`);
  $(`#poemsaadi`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
})
$(`#fullscreen`).click(function() {
  fontSize = 20;
  localStorage.setItem(`fontSize`,`${fontSize}px`);
  $(`#poemsaadi`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
});
$(`#zoom-out`).click(function() {
  fontSize--;
  localStorage.setItem(`fontSize`,`${fontSize}px`);
  $(`#poemsaadi`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
});
$(`.status-moon`).click(function() {
  $(`main`).css(`background-color`, `#0e2338`);
  $(`body`).css(`background-color`, `#484848`);
  $(`.status`).css(`color`, `white`);
  $(`.besmeAllah`).css(`color`, `white`);
  $(`.poem-text`).css(`color`, `white`);
});
$(`.status-sun`).click(function() {
  $(`main`).css(`background-color`, `white`);
  $(`body`).css(`background-color`, `#3498db`);
  $(`.status`).css(`color`, `black`);
  $(`.besmeAllah`).css(`color`, `black`);
  $(`.poem-text`).css(`color`, `black`);
});
$(window).scroll(function() {
  if($(this).scrollTop() > 500)
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