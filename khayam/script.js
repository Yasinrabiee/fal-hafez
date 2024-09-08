let roba = 0;
$(`#titlekhayam`).html(`
    ${khayam[roba]["Title"]}<br>
`);
$(`#poemkhayam`).html(`
    ${khayam[roba]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
`);
$(`#khayam`).html(`
    ${khayam[roba]["Book"]}<br>
`);
$(`#searchkhayam`).click(function () {
  roba = parseInt(prompt(`شماره رباعی دلخواه خود را انتخاب کنید(1-178):`));
  if (roba > 178 || roba <= 0) alert(`شماره رباعی نامعتبر!`);
  roba--;
  $(`#titlekhayam`).html(`
	    ${khayam[roba]["Title"]}<br>
	`);
  $(`#poemkhayam`).html(`
	    ${khayam[roba]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
	`);
  $(`#khayam`).html(`
	    ${khayam[roba]["Book"]}<br>
	`);
});
$(`#nextkhayam`).click(function () {
  roba++;
  if (roba > 176) roba = 0;
  $(`#titlekhayam`).html(`
	    ${khayam[roba]["Title"]}<br>
	`);
  $(`#poemkhayam`).html(`
	    ${khayam[roba]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
	`);
  $(`#khayam`).html(`
	    ${khayam[roba]["Book"]}<br>
	`);
});
$(`#prevkhayam`).click(function () {
  roba--;
  if (roba == -1) roba = 0;
  $(`#titlekhayam`).html(`
	    ${khayam[roba]["Title"]}<br>
	`);
  $(`#poemkhayam`).html(`
	    ${khayam[roba]["Poem"]["replaceAll"]("\n", `<br>`)}<br>
	`);
  $(`#khayam`).html(`
	    ${khayam[roba]["Book"]}<br>
	`);
});
let fontSize = 20;
$(`#zoom-in`).click(function() {
  fontSize++;
  $(`#poemkhayam`).css(`font-size`,fontSize)
})
$(`#fullscreen`).click(function() {
  fontSize = 20;
  $(`#poemkhayam`).css(`font-size`,fontSize)
})
$(`#zoom-out`).click(function() {
  fontSize--;
  $(`#poemkhayam`).css(`font-size`,fontSize)
})
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
$(window).scroll(function() {
  if($(this).scrollTop() > 400)
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