'use strict';

const date = new Date();
const day = date.getDate();
const dayOfWeek = date.getDay() + 1;
const month = date.getMonth() + 1;
const year = date.getFullYear();
const currentDate = `${day}/${month}/${year}`;
const dateElement = document.querySelector('.js-current-date');
const messageElement = document.querySelector('.js-is-he-here');

fetch('./config.json')
.then(obj => {
	return obj.json();
})
.then(objConfig => {

	const { isHeHere, isHeHereSpecial } = objConfig;
	dateElement.innerHTML = currentDate;

	// If it's Wednesday or Saturday and he's here, show yes

	if((dayOfWeek === 4 || dayOfWeek === 7) && isHeHere || isHeHereSpecial)
	{

		messageElement.innerHTML = 'He&rsquo;s here!';
		document.body.classList.add('he-is-here');

	// If it's Wednesday or Saturday and he's not here, show no :(
	} else if((dayOfWeek === 4 || dayOfWeek === 7) && !isHeHere)
	{

		messageElement.innerHTML= 'He&rsquo;s not here :(';

	// For all other days it's not market day so he won't be here
	} else {

		messageElement.innerHTML = 'It&rsquo;s not market day, jefferson';

	}

})
.catch(err => {
	console.log(err);
});