"use strict"

function Smooth(element){

	function _Smooth(dom) {
		var _this = this;
		_this.dom = dom;
	}



	_Smooth.prototype.move = function (func,callback) {
		var _this = this;

		var 
		func = func,
		callback = callback,
		startX,
		startY,
		resultX = 0,
		resultY = 0,
		data;

			_this.dom.addEventListener('touchstart', function (e) {
				startX = e.touches[0].clientX;
				startY = e.touches[0].clientY;
			},false);

			_this.dom.addEventListener('touchmove', function (e) {
				e.stopPropagation();
				e.preventDefault();
						var translate = dom.style.webkitTransform.match(/\-?[0-9]+/g);
						console.log(translate);
						resultX = e.touches[0].clientX -  startX + parseFloat(translate[1]);
						resultY = e.touches[0].clientY - startY + parseFloat(translate[2]);

						data = {
							resultX: resultX,
							resultY: resultY,
						}
						startX = e.touches[0].clientX;
						startY = e.touches[0].clientY;
						//console.log(data);
						if(func instanceof Function) {
							func(data,e);
						}
			}, false);

			_this.dom.addEventListener('touchend', function (e) {
			}, false);

	}
	var dom = document.querySelector(element);
	var smooth = new _Smooth(dom);
	return smooth;
}
