// Contains a form with two inputs for a title and rating along with a button to submit the form.
$('document').ready(() => {
	console.log('Page is loaded');
});

const $labelT = '<label for id="title-input">Title</label>';
const $labelR = '<label for id="rating-input">Rating</label>';
const $inputT = '<input id="title-input"></input>';
const $inputR = '<input id="rating-input"></input>';
const $formBtn = '<button class="btn-submit">Submit</button>';

const newForm = $('<form>').appendTo($('body'));
newForm.append($labelT, $inputT, $labelR, $inputR, $formBtn);

const $newUl = $('<ul>').appendTo($('form'));

// When the form is submitted, capture the values for each of the inputs
// and append them to the DOM along with a button to remove each title and rating from the DOM.
$('body').on('submit', 'form', function(e) {
	e.preventDefault();

	const title = $('input').eq(0).val();
	const rating = $('input').eq(1).val();

	let $newLi = `<li>${title}: ${rating}</li>`;
	$newUl.append($newLi);
	deleteButton = $('<button />').addClass('btn-delete').text('Delete');
	deleteButton.appendTo('ul li:last-child');
});

// When the button to remove is clicked, remove each title and rating from the DOM.

$('body').on('click', '.btn-delete', function() {
	$(this).closest('li').remove();
});
