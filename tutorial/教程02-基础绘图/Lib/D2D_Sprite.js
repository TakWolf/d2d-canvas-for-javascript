﻿function D2D_Sprite(a,b,c,d,e){this.texture=a,this.srcX=b,this.srcY=c,this.srcWidth=d,this.srcHeight=e,this.originX=0,this.originY=0,this.alpha=1}D2D_Sprite.prototype.draw=function(a){var b=a.getContext();b.save(),b.globalAlpha=this.alpha,1==arguments.length?b.drawImage(this.texture.getDrawHandle(),this.srcX,this.srcY,this.srcWidth,this.srcHeight,0-this.originX,0-this.originY,this.srcWidth,this.srcHeight):3==arguments.length?b.drawImage(this.texture.getDrawHandle(),this.srcX,this.srcY,this.srcWidth,this.srcHeight,arguments[1]-this.originX,arguments[2]-this.originY,this.srcWidth,this.srcHeight):5==arguments.length?(b.translate(arguments[1],arguments[2]),b.scale(arguments[3],arguments[4]),b.drawImage(this.texture.getDrawHandle(),this.srcX,this.srcY,this.srcWidth,this.srcHeight,0-this.originX,0-this.originY,this.srcWidth,this.srcHeight)):6==arguments.length&&(b.translate(arguments[1],arguments[2]),b.rotate(arguments[3]),b.scale(arguments[4],arguments[5]),b.drawImage(this.texture.getDrawHandle(),this.srcX,this.srcY,this.srcWidth,this.srcHeight,0-this.originX,0-this.originY,this.srcWidth,this.srcHeight)),b.restore()},D2D_Sprite.prototype.dispose=function(){this.texture=null,this.srcX=null,this.srcY=null,this.srcWidth=null,this.srcHeight=null,this.originX=null,this.originY=null,this.alpha=null},D2D_Sprite.prototype.setAlpha=function(a){this.alpha=a},D2D_Sprite.prototype.getAlpha=function(){return this.alpha},D2D_Sprite.prototype.setOrigin=function(a,b){this.originX=a,this.originY=b},D2D_Sprite.prototype.getOriginX=function(){return this.originX},D2D_Sprite.prototype.getOriginY=function(){return this.originY},D2D_Sprite.prototype.getSrcX=function(){return this.srcX},D2D_Sprite.prototype.getSrcY=function(){return this.srcY},D2D_Sprite.prototype.getWidth=function(){return this.srcWidth},D2D_Sprite.prototype.getHeight=function(){return this.srcHeight},D2D_Sprite.prototype.setSrcRect=function(a,b,c,d){this.srcX=a,this.srcY=b,this.srcWidth=c,this.srcHeight=d},D2D_Sprite.prototype.getTexture=function(){return this.texture},D2D_Sprite.prototype.setTexture=function(a){this.texture=a};