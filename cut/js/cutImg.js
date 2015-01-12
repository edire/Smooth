"use strict"

var dom = {
	box: document.querySelector('.box'),
	imgSelect: document.querySelector('.img-select'),
	leftTop: document.querySelector('.left-top'),
	rightTop: document.querySelector('.right-top'),
	leftBottom: document.querySelector('.left-bottom'),
	rightBottom: document.querySelector('.right-bottom'),
}

var initImgSelect = function () {
	dom.imgSelect.style.left = dom.imgSelect.offsetLeft + 'px';
	dom.imgSelect.style.top = dom.imgSelect.offsetTop + 'px';
	dom.imgSelect.style.right = dom.box.offsetWidth - dom.imgSelect.offsetLeft - dom.imgSelect.offsetWidth + 'px';
	dom.imgSelect.style.bottom = dom.box.offsetHeight - dom.imgSelect.offsetTop - dom.imgSelect.offsetHeight + 'px';
}

var bindEvent = function () {
	Smooth('.left-top').move(function (data) {
		dom.imgSelect.style.left = parseFloat(dom.imgSelect.style.left) + data.changeX + 'px';
		dom.imgSelect.style.top = parseFloat(dom.imgSelect.style.top) + data.changeY + 'px';
	});
	Smooth('.right-top').move(function (data) {
		dom.imgSelect.style.right = parseFloat(dom.imgSelect.style.right) - data.changeX + 'px';
		dom.imgSelect.style.top = parseFloat(dom.imgSelect.style.top) + data.changeY + 'px';
	});
	Smooth('.left-bottom').move(function (data) {
		dom.imgSelect.style.left = parseFloat(dom.imgSelect.style.left) + data.changeX + 'px';
		dom.imgSelect.style.bottom = parseFloat(dom.imgSelect.style.bottom) - data.changeY + 'px';
	});
	Smooth('.right-bottom').move(function (data) {
		dom.imgSelect.style.right = parseFloat(dom.imgSelect.style.right) - data.changeX + 'px';
		dom.imgSelect.style.bottom = parseFloat(dom.imgSelect.style.bottom) - data.changeY + 'px';
	});
	Smooth('.img-select').move(function (data) {
		dom.imgSelect.style.left = parseFloat(dom.imgSelect.style.left) + data.changeX + 'px';
		dom.imgSelect.style.top = parseFloat(dom.imgSelect.style.top) + data.changeY + 'px';
		dom.imgSelect.style.right = parseFloat(dom.imgSelect.style.right) - data.changeX + 'px';
		dom.imgSelect.style.bottom = parseFloat(dom.imgSelect.style.bottom) - data.changeY + 'px';
	})
}

var init = function () {
	initImgSelect();
	bindEvent();
}

init()