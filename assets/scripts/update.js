'use strict';

const objIsBtn = document.querySelector('.is-he-here');
const objIsSpecBtn = document.querySelector('.is-he-here-special');

const objIs = document.querySelector('.is-he-here');
const objIsSpec = document.querySelector('.is-he-here-special');

fetch('config.json')
	.then(obj => {

		return obj.json();

	})
	.then(objConfig => {

		objIs.innerText = objConfig.isHeHere;
		objIsSpec.innerText = objConfig.isHeHereSpecial;

		objIsBtn.addEventListener('click', () => {
			objConfig.isHeHere = !objConfig.isHeHere;
		}, false);

		objIsBtn.addEventListener('click', () => {
			objConfig.isHeHere = !objConfig.isHeHere;
		}, false);


	});