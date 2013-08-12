var modelBase = "ali/"
var width = 800
var height = 600
function Actor(x,y){
	var $div = $("<div/>")
	var $a = $("<a/>")
	$a.attr("href","#")
	var $img = $('<img/>')
	$a.append($img)
	$div.append($a);
	$div.addClass("actor")
	$("#canvas").append($div)
	this.load = function(model,callback){
		var src = modelBase+model+".gif"
		var actor = this
		$img.attr('src', src).load(function(){
			var dx = actor.x+$img.width() - width
			var dy = actor.y+$img.height() - height
			if(dx>0){
				actor.p().css("top",height-dy)
				actor.y = height - dy
			}
			if(dy>0){
				actor.p().css("left",width-dx)
				actor.x = width - dx
			}
   			callback()
		})
	}
	var tx = x || 0 
	var ty = y || 0
	if(tx<0){
		tx = 0
	}else if(tx>width){
		tx = width	
	}
	if(ty<0){
		ty = 0
	}else if(ty>height){
		ty = height	
	}
	$div.css("left",tx)
	$div.css("top",ty)
	this.x = tx
	this.y = ty
	
	this.destroy = function(){
		$div.remove()
	}
	this.top = function(t){
		$div.animate({"top":t})
		this.y = t
	}
	this.bottom = function(b){
		$div.animate({"bottom":b})
		this.y = height - b
	}
	this.left = function(l){
		$div.animate({"left":l})
		this.x = l
	}
	this.right = function(r){
		$div.animate({"right":r})
		this.x = width - r
	}
	this.move = function(dx,dy){
		tx = this.x + (+dx)
		ty = this.y + (+dy)
		if(tx<0){
			tx = 0
		}else if(tx>width-$img.width()){
			tx = width-$img.width()	
		}
		if(ty<0){
			ty = 0
		}else if(ty>height-$img.height()){
			ty = height-$img.height()	
		}
		$div.animate({"left":tx,"top":ty})
	}
	this.p = function(){
		return $div
	}
}
var msgOption = {
	show: {
	      when: false, // Don't specify a show event
	      ready: true // Show the tooltip when ready
	   },
	hide: false, // Don't specify a hide event
	style: {
	    border: {
	        width: 5,
	        radius: 10
	    },
	    padding: 10, 
	    textAlign: 'center',
	    tip: true, // Give it a speech bubble tip with automatic corner detection
	    name: 'cream' // Style it according to the preset 'cream' style
	}
}
/*$(function(){
	var actor1 = new Actor(800,600)
	actor1.load("hide",function(){
		actor1.p().on("click",e2)
	})
	function e2(){
		actor1.p().unbind("click")
		actor1.load("ride-left",function(){
			actor1.p().animate({"left":400},{
				"duration":5000,
				"complete":function(){
					actor1.load("back",e3)
				}
			})
		})	
	}
	function e3(){

	}
	msgOption.content = "Go"
		msgOption.position = {
			corner: {
	            tooltip: "bottomLeft", // Use the corner...
	            target: "topRight" // ...and opposite corner
	        }
		}
		actor1.p().qtip(msgOption)
})*/
$(function(){
	$("#actor1 .action").one("click",function(){
		var $newImg = $("<img/>").attr("src","ali/ride-left.gif").load(ride_to_mid)
		$("#actor1 img").replaceWith($newImg)
		return false;
	})
	function ride_to_mid(){
		$("#actor1").animate({"left":400},{
			"duration":5000,
			"complete":function(){
				var $newImg = $("<img/>").attr("src","ali/back.gif").load(function(){
					$("#actor1 .action").one("click",who_i_am)
				})
				$("#actor1 img").replaceWith($newImg)
			}
		})
	}
	function who_i_am(){
		msgOption.content = "你想知道我是谁吗？"
		msgOption.position = {
			corner: {
		        tooltip: "bottomLeft", // Use the corner...
		        target: "topRight" // ...and opposite corner
		    }
		}
		$("#actor1").qtip(msgOption)
		$("#actor1 .action").one("click",intro1)
		return false
	}
	function intro1(){
		var $newImg = $("<img/>").attr("src","ali/intro1.gif").load(function(){
			msgOption.content = "既然你诚心诚意地问我～"
			$("#actor1").qtip("destroy")
			$("#actor1").qtip(msgOption)
			$("#actor1 .action").one("click",intro2)
		})
		$("#actor1 img").replaceWith($newImg)
	}
	function intro2(){
		var $newImg = $("<img/>").attr("src","ali/intro2.gif").load(function(){
			msgOption.content = "那我就大发慈悲地告诉你～"
			$("#actor1").qtip("destroy")
			msgOption.position.corner = {
				tooltip:"bottomRight",
				target:"topLeft"
			}
			$("#actor1").qtip(msgOption)
			$("#actor1 .action").one("click",intro3)
		})
		$("#actor1 img").replaceWith($newImg)
	}
	function intro3(){
		var $newImg = $("<img/>").attr("src","ali/intro3.gif").load(function(){
			msgOption.content = "为了防止世界被破坏！～"
			$("#actor1").qtip("destroy")
			msgOption.position.corner = {
				tooltip:"bottomLeft",
				target:"topRight"
			}
			$("#actor1").qtip(msgOption)
			$("#actor1 .action").one("click",intro4)
		})
		$("#actor1 img").replaceWith($newImg)
	}
	function intro4(){
		var $newImg = $("<img/>").attr("src","ali/intro4.gif").load(function(){
			msgOption.content = "为了维护世界的和平！～"
			$("#actor1").qtip("destroy")
			msgOption.position.corner = {
				tooltip:"bottomRight",
				target:"topLeft"
			}
			$("#actor1").qtip(msgOption)
			$("#actor1 .action").one("click",intro5)
		})
		$("#actor1 img").replaceWith($newImg)
	}
	function intro5(){
		var $newImg = $("<img/>").attr("src","ali/intro5.gif").load(function(){
			msgOption.content = "贯彻爱与真实的邪恶！～"
			$("#actor1").qtip("destroy")
			msgOption.position.corner = {
				tooltip:"bottomLeft",
				target:"topRight"
			}
			$("#actor1").qtip(msgOption)
			$("#actor1 .action").one("click",intro6)
		})
		$("#actor1 img").replaceWith($newImg)
	}
	function intro6(){
		var $newImg = $("<img/>").attr("src","ali/intro6.gif").load(function(){
			msgOption.content = "美丽又可爱的正派角色！～"
			$("#actor1").qtip("destroy")
			msgOption.position.corner = {
				tooltip:"bottomRight",
				target:"topLeft"
			}
			$("#actor1").qtip(msgOption)
			$("#actor1 .action").one("click",intro7)
		})
		$("#actor1 img").replaceWith($newImg)
	}
	function intro7(){
		var $newImg = $("<img/>").attr("src","ali/intro7.gif").load(function(){
			msgOption.content = "就是我，阿～狸！～"
			$("#actor1").qtip("destroy")
			msgOption.position.corner = {
				tooltip:"bottomLeft",
				target:"topRight"
			}
			$("#actor1").qtip(msgOption)
			$("#actor1 .action").one("click",intro8)
		})
		$("#actor1 img").replaceWith($newImg)
	}
	function intro8(){
		var $newImg = $("<img/>").attr("src","ali/intro8.gif").load(function(){
			msgOption.content = "我的主人派我来的目的很简单！～"
			$("#actor1").qtip("destroy")
			msgOption.position.corner = {
				tooltip:"bottomRight",
				target:"topLeft"
			}
			$("#actor1").qtip(msgOption)
			$("#actor1 .action").one("click",intro9)
		})
		$("#actor1 img").replaceWith($newImg)
	}
	function intro9(){
		var $newImg = $("<img/>").attr("src","ali/intro9.gif").load(function(){
			msgOption.content = "就是………<p>Make You Laugh!</p>"
			$("#actor1").qtip("destroy")
			msgOption.position.corner = {
				tooltip:"bottomLeft",
				target:"topRight"
			}
			$("#actor1").qtip(msgOption)
			//$("#actor1 .action").one("click",intro9)
		})
		$("#actor1 img").replaceWith($newImg)
	}
})