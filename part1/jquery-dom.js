$('document').ready(() => {
	console.log('Let’s get ready to party with jQuery!');
});

$('article img').addClass('image-center');

$('article p:last-child').remove();

$('#title').css('font-size', Math.floor(Math.random() * 100) + 1);

$('ol').append('<li> Added a new item to the list </li>');

$('ol').empty().append('<p> I no longer love lists!! </p>');

$('.container').on('keyup blur change', '.form-control', () => {
	let red = $('.form-control').eq(0).val();
	let blue = $('.form-control').eq(1).val();
	let green = $('.form-control').eq(2).val();
	let color = `rgb(${red}, ${green}, ${blue})`;
	$('body').css('background-color', color);
});

$('img').on('click', function() {
	$(this).remove();
});
