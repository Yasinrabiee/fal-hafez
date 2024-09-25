function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
$(`#poem-show`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
$(`#poemMolana`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
$(`#fal-result`).click(function () {
  let poem = rand(0, molana.length - 1);
  $(`#titleMolana`).html(`
        ${molana[poem]["Title"]}<br>
    `);
  $(`#poemMolana`).html(`
        ${molana[poem]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
    `);
  $(`#molana`).html(`
        ${molana[poem]["Book"]}<br>
    `);
  $(`.tools`).show();
});
let ghazal = 0;
$(`#title-show`).html(`
    ${molana[ghazal]["Title"]}<br>
`);
$(`#poem-show`).html(`
    ${molana[ghazal]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
`);
$(`#molana-show`).html(`
    ${molana[ghazal]["Book"]}<br>
`);
$(`#searchMolana`).click(function () {
  ghazal = parseInt(prompt(`شماره غزل دلخواه خود را انتخاب کنید(1-3228):`));
  ghazal--;
  if (ghazal > 3229 || ghazal <= 0) alert(`شماره غزل نامعتبر!`);
  $(`#title-show`).html(`
        ${molana[ghazal]["Title"]}<br>
    `);
  $(`#poem-show`).html(`
        ${molana[ghazal]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
    `);
  $(`#molana-show`).html(`
        ${molana[ghazal]["Book"]}<br>
    `);
});
$(`#nextMolana`).click(function () {
  ghazal++;
  if (ghazal > 3228) ghazal = 0;
  $(`#title-show`).html(`
        ${molana[ghazal]["Title"]}<br>
    `);
  $(`#poem-show`).html(`
        ${molana[ghazal]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
    `);
  $(`#molana-show`).html(`
        ${molana[ghazal]["Book"]}<br>
    `);
});
$(`#prevMolana`).click(function () {
  ghazal--;
  if (ghazal == -1) ghazal = 0;
  $(`#title-show`).html(`
        ${molana[ghazal]["Title"]}<br>
    `);
  $(`#poem-show`).html(`
        ${molana[ghazal]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
    `);
  $(`#molana-show`).html(`
        ${molana[ghazal]["Book"]}<br>
    `);
});
let fontSize = $(`#poemMolana`).css(`font-size`);
$(`#zoom-in`).click(function() {
  fontSize++;
  localStorage.setItem(`fontSize`,`${fontSize}px`);
  $(`#poemMolana`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
})
$(`#fullscreen`).click(function() {
  fontSize = 20;
  localStorage.setItem(`fontSize`,`${fontSize}px`);
  $(`#poemMolana`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
});
$(`#zoom-out`).click(function() {
  fontSize--;
  localStorage.setItem(`fontSize`,`${fontSize}px`);
  $(`#poemMolana`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
});
$(`.status-moon`).click(function() {
  $(`main`).css(`background-color`, `#0e2338`);
  $(`body`).css(`background-color`, `#484848`);
  $(`.status`).css(`color`, `white`);
  $(`.besmeAllah`).css(`color`, `white`);
  $(`.poem-text`).css(`color`, `white`);
})
$(`.status-sun`).click(function() {
  $(`main`).css(`background-color`, `white`);
  $(`body`).css(`background-color`, `#3498db`);
  $(`.status`).css(`color`, `black`);
  $(`.besmeAllah`).css(`color`, `black`);
  $(`.poem-text`).css(`color`, `black`);
})
let fontSizeMolana = $(`#poem-show`).css(`font-size`);
$(`#zoom-in`).click(function() {
  fontSizeMolana++;
  localStorage.setItem(`fontSize`,`${fontSizeMolana}px`);
  $(`#poem-show`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
});
$(`#fullscreen`).click(function() {
  fontSizeMolana = 20;
  localStorage.setItem(`fontSize`,`${fontSizeMolana}px`);
  $(`#poem-show`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
});
$(`#zoom-out`).click(function() {
  fontSizeMolana--;
  localStorage.setItem(`fontSize`,`${fontSizeMolana}px`);
  $(`#poem-show`).css(`font-size`,`${localStorage.getItem(`fontSize`)}`);
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