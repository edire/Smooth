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
		moveX,
		moveY,
		startX,
		startY,
		currentX,
		currentY,
		lastX,
		lastY,
		changeX,
		changeY,
		moving = false,
		firstMove = true;

		var X = 0,Y=0;

			_this.dom.addEventListener('touchmove', function (e) {
				e.stopPropagation();
				e.preventDefault();
					moving = true;
					if (firstMove) {
						startX = e.changedTouches[0].clientX;
						startY = e.changedTouches[0].clientY;
						firstMove = false;
						lastX = e.changedTouches[0].clientX;
						lastY = e.changedTouches[0].clientY;	
					} else {

						currentX = e.changedTouches[0].clientX;
						currentY = e.changedTouches[0].clientY;

						changeX = currentX - lastX;
						changeY = currentY - lastY;

						moveX = e.changedTouches[0].clientX - startX;
						moveY = e.changedTouches[0].clientY - startY;


						var data = {
							moveX: moveX,
							moveY: moveY,
							changeX: changeX,
							changeY: changeY
						}

						if(func instanceof Function) {
							func(data,e);
						}


						lastX = e.changedTouches[0].clientX;
						lastY = e.changedTouches[0].clientY;	
					}

			}, false);

			_this.dom.addEventListener('touchend', function (e) {
				if (moving === false) return;
				firstMove = true;
				if(callback instanceof Function){
					callback(e);	
				}
				moving = false;
			}, false);

	}

	_Smooth.prototype.slide = function (func,xMove,yMove) {
		var _this = this;
		var
		func = func,
		xMove = xMove | 0,
		yMove = yMove | 0,
		startX,
		startY,
		moveX,
		moveY;

		_this.dom.addEventListener('touchstart', function (e) {
			e.preventDefault();
			e.stopPropagation();

			startX = e.changedTouches[0].clientX;
			startY = e.changedTouches[0].clientY;				
	
				
		}, false);
	
		_this.dom.addEventListener('touchend', function (e) {
			e.stopPropagation();
			e.preventDefault();
			
			moveX = e.changedTouches[0].clientX - startX;
			moveY = e.changedTouches[0].clientY - startY;


			if (moveX >= xMove && moveY >= yMove){
				var data = {
						moveX: moveX,
						moveY: moveY
					}
				func(data,e); 
			}
		}, false);
	};


	var dom = document.querySelector(element);
	var smooth = new _Smooth(dom);
	return smooth;
}
