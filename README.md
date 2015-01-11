# Smooth，javascript touch插件

## 实时滑动事件

Smooth(element).move(function(data,event){

   //todo

},function(event){

   //todo

});

####data 

  类型：Object

  当手指滑动的时候，返回数据

    moveX/Y：从手指按下到当前一次动作滑动的X/Y。changeX/Y：每次触发move事件，X/Y的变化值

	event：当前事件的event，返回原生的event对象。


## 手指离开时事件

Smooth(element).slide(function(data,event){

   //todo

},xMove,yMove);

  #### x/yMove

    类型：string

    移动的最小X/Y的距离，当手指移动超过这个距离时，手指离开屏幕才会触发事件。

  #### data

  	类型：Object

  	moveX/Y：从手指按下到抬起的这一段距离

