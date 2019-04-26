$(function () {
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: true
	});
});


const loader = document.querySelector('.loader')
const topWrap = document.querySelector('.top-wrap')
const blocks = document.getElementsByClassName('competenc-item')
const header = document.querySelector('header')
const bg = document.querySelector('.bg-section')
const height = window.innerHeight - 70
const heBlocks = blocks.offsetWidth


window.addEventListener('load', redyL)
document.addEventListener('DOMContentLoaded', redyF)
document.addEventListener('scroll', scroller)

function scroller() {
	let windowPos = window.scrollY
	if (windowPos >= height) {
		header.classList.add('fixed')
	} else {
		header.classList.remove('fixed')
	}
	bg.style.transform = `translateY(${windowPos / 10}px)`

	const animate = document.querySelectorAll('.animate')
	animate.forEach(el => {
		if (el.getBoundingClientRect().top < 450) {
			el.classList.add('on')
		}
	})

}

function redyF() {
	const block = document.querySelector('.competenc-item')
	const blocks = document.querySelectorAll('.competenc-item')
	const heBlock = block.offsetWidth

	blocks.forEach(el => {
		el.style.height = heBlock + 'px'
	})
}

function redyL() {
	loader.classList.add('start')

	setTimeout(
		function () {
			topWrap.classList.add('start')
		}
			.bind(this),
		3000
	);
}





