﻿//=======================
// EM-X for HTML5 Canvas
//=======================
// 初始化引擎
//=======================
var e = new D2D_Engine("EMXCanvas",80,800,600);

//=======================
// 屏幕更新
//=======================
e.update = function(dt) {

};

//=======================
// 屏幕绘制
//=======================
e.draw = function(dt) {
    		  
    //开始渲染
    this.beginDraw();
    this.clear("#FFFFFF");

 
    //结束渲染
    this.endDraw();

};

//=======================
// 启动引擎
//=======================
startEngine(e);
















