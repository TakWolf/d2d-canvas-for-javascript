﻿function D2D_Engine(a,b,c,d){this.canvas=document.getElementById(a),this.canvas.width=c,this.canvas.height=d,this.context2D=this.canvas.getContext("2d"),this.canvasBuffer=document.createElement("canvas"),this.canvasBuffer.width=c,this.canvasBuffer.height=d,this.contextBuffer2D=this.canvasBuffer.getContext("2d"),this.fps=b,this.currentFps=0,this.frameCounter=0,this.timeCounter=0,this.canvas.mousePos={x:0,y:0},this.canvas.mouseStates={down:!1,up:!1,click:!1,dbclick:!1,wheel:!1,move:!1,out:!1,over:!1},this.canvas.onmousedown=function(){this.mouseStates.down=!0},this.canvas.onmouseup=function(){this.mouseStates.up=!0,this.mouseStates.down=!1},this.canvas.onclick=function(){this.mouseStates.click=!0},this.canvas.ondblclick=function(){this.mouseStates.dbclick=!0},this.canvas.onmousewheel=function(){this.mouseStates.wheel=!0},this.canvas.onmousemove=function(a){this.mouseStates.move=!0,this.mousePos.x=a.offsetX,this.mousePos.y=a.offsetY},this.canvas.onmouseout=function(){this.mouseStates.out=!0,this.mouseStates.down=!1},this.canvas.onmouseover=function(){this.mouseStates.over=!0}}function startEngine(a){a.lastTime=(new Date).getTime();var b=function(){var b=(new Date).getTime(),c=b-a.lastTime;c-1e3/a.fps>=0&&(a.lastTime=b,a.frameCounter++,a.timeCounter+=c,a.timeCounter>=1e3&&(a.timeCounter-=1e3,a.currentFps=a.frameCounter,a.frameCounter=0),a.update(c/1e3),a.draw(c/1e3),a.canvas.mouseStates.up=!1,a.canvas.mouseStates.click=!1,a.canvas.mouseStates.dbclick=!1,a.canvas.mouseStates.wheel=!1,a.canvas.mouseStates.move=!1,a.canvas.mouseStates.out=!1,a.canvas.mouseStates.over=!1)};window.setInterval(b,1)}D2D_Engine.prototype.getContext=function(){return this.contextBuffer2D},D2D_Engine.prototype.getCanvas=function(){return this.canvas},D2D_Engine.prototype.beginDraw=function(){this.context2D.clearRect(0,0,this.canvas.width,this.canvas.height)},D2D_Engine.prototype.endDraw=function(){this.context2D.drawImage(this.canvasBuffer,0,0)},D2D_Engine.prototype.clear=function(a){void 0==a||null==a?this.contextBuffer2D.clearRect(0,0,this.canvasBuffer.width,this.canvasBuffer.height):(this.contextBuffer2D.fillStyle=a,this.contextBuffer2D.fillRect(0,0,this.canvasBuffer.width,this.canvasBuffer.height))},D2D_Engine.prototype.getFps=function(){return this.fps},D2D_Engine.prototype.setFps=function(a){this.fps=a},D2D_Engine.prototype.getCurrentFps=function(){return this.currentFps},D2D_Engine.prototype.getMousePosX=function(){return this.canvas.mousePos.x},D2D_Engine.prototype.getMousePosY=function(){return this.canvas.mousePos.y},D2D_Engine.prototype.getMousePos=function(){return this.canvas.mousePos},D2D_Engine.prototype.isMouseDown=function(){return this.canvas.mouseStates.down},D2D_Engine.prototype.isMouseUp=function(){return this.canvas.mouseStates.up},D2D_Engine.prototype.isMouseClick=function(){return this.canvas.mouseStates.click},D2D_Engine.prototype.isMouseDbclick=function(){return this.canvas.mouseStates.dbclick},D2D_Engine.prototype.isMouseMove=function(){return this.canvas.mouseStates.move},D2D_Engine.prototype.isMouseWheel=function(){return this.canvas.mouseStates.wheel},D2D_Engine.prototype.isMouseOut=function(){return this.canvas.mouseStates.out},D2D_Engine.prototype.isMouseOver=function(){return this.canvas.mouseStates.over},D2D_Engine.prototype.drawLine=function(a,b,c,d,e,f){this.contextBuffer2D.save(),this.contextBuffer2D.beginPath(),this.contextBuffer2D.moveTo(a,b),this.contextBuffer2D.lineTo(c,d),this.contextBuffer2D.lineWidth=void 0!=f?f:1,this.contextBuffer2D.strokeStyle=e,this.contextBuffer2D.stroke(),this.contextBuffer2D.restore()},D2D_Engine.prototype.drawFillRect=function(a,b,c,d,e){this.contextBuffer2D.save(),this.contextBuffer2D.fillStyle=e,this.contextBuffer2D.fillRect(a,b,c,d),this.contextBuffer2D.restore()},D2D_Engine.prototype.drawStrokeRect=function(a,b,c,d,e,f){this.contextBuffer2D.save(),this.contextBuffer2D.lineWidth=void 0!=f?f:1,this.contextBuffer2D.strokeStyle=e,this.contextBuffer2D.strokeRect(a,b,c,d),this.contextBuffer2D.restore()};