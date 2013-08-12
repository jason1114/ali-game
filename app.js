var modelBase = "ali/"
var width = 800
var height = 600
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
		return false;
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
		return false;
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
		return false;
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
		return false;
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
		return false;
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
		return false;
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
		return false;
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
		return false;
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
		return false;
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
			$("#actor1 .action").one("click",longxia0)
		})
		$("#actor1 img").replaceWith($newImg)
		return false;
	}
	function longxia0(){
		var $newImg = $("<img/>").attr("src","images/long-xia.jpg").load(function(){
			$("#longxia").animate({top:0},{
				duration:3000,
				complete:function(){
					$("#actor1 .action").one("click",longxia1)
				}
			})
		})		
		$("#longxia").append($newImg)
		msgOption.content = "刷～～～～～～～"
		$("#actor1").qtip("destroy")
		msgOption.position.corner = {
			tooltip:"bottomLeft",
			target:"topRight"
		}
		$("#actor1").qtip(msgOption)
		return false;
	}
	function longxia1(){
		var $newImg2 = $("<img/>").attr("src","ali/rebirth.gif").load(function(){
			msgOption.content = "版本一：复活吧！我的子民们！"
			$("#actor1").qtip("destroy")
			msgOption.position.corner = {
				tooltip:"bottomRight",
				target:"topLeft"
			}
			$("#actor1").qtip(msgOption)
			$("#actor1 .action").one("click",longxia2)
		})
		$("#actor1 img").replaceWith($newImg2)
		return false;
	}
	function longxia2(){
		var $newImg = $("<img/>").attr("src","ali/i-am-late.gif").load(function(){
			msgOption.content = "版本二：弟兄们，我来晚了！"
			$("#actor1").qtip("destroy")
			msgOption.position.corner = {
				tooltip:"bottomLeft",
				target:"topRight"
			}
			$("#actor1").qtip(msgOption)
			$("#actor1 .action").one("click",longxia3)
		})
		$("#actor1 img").replaceWith($newImg)
		return false;
	}
	function longxia3(){
		var $newImg = $("<img/>").attr("src","ali/cruel.gif").load(function(){
			msgOption.content = "好吧……这其实是一个残忍的冷笑话。"
			$("#actor1").qtip("destroy")
			msgOption.position.corner = {
				tooltip:"bottomRight",
				target:"topLeft"
			}
			$("#actor1").qtip(msgOption)
			$("#actor1 .action").one("click",longxiaexit)
		})
		$("#actor1 img").replaceWith($newImg)
		return false;
	}
	function longxiaexit(){
		
		$("#longxia").animate({top:-500},{
			duration:3000,
			complete:function(){
				$("#actor1 .action").one("click",flyToTopLeft)
				$("#actor1").qtip("destroy")
			}
		})
		return false;
	}
	function flyToTopLeft(){
		var $newImg = $("<img/>").addClass("flipx").attr("src","ali/rebirth.gif").load(function(){
			$("#actor1").animate({left:0,top:20},{
				duration:5000,
				complete:toAsk
			})			
		})
		$("#actor1 img").replaceWith($newImg)
		return false;
	}
	function toAsk(){
		var $newImg = $("<img/>").attr("src","ali/ask.gif").load(dashiShow)
		$("#actor1 img").replaceWith($newImg)
		return false;
	}
	function dashiShow(){
		var $newImg = $("<img/>").attr("src","images/dashi.gif").load(function(){
			$("#actor1 .action").one("click",function(){
				msgOption.content = "大师，你为什么老说阿弥陀佛？"
				msgOption.position.corner = {
					tooltip:"topRight",
					target:"bottomLeft"
				}
				$("#actor1").qtip(msgOption)
				$("#actor2 .action").one("click",function(){
					msgOption.content = "施主，我觉得一个出家人如果也用呵呵来表达情绪的话，这也太俗了。阿弥陀佛。"
					msgOption.position.corner = {
						tooltip:"topLeft",
						target:"bottomRight"
					}
					$("#actor2").qtip(msgOption)
					$("#actor1 .action").one("click",dizzy)
				})
			})
		})
		$("#actor2 img").replaceWith($newImg)
		return false;
	}
	function dizzy(){
		$("#actor1").qtip("destroy")
		var $newImg = $("<img/>").attr("src","ali/dizzy.gif").load(function(){
			$("#actor2 .action").one("click",function(){
				$("#actor2").qtip("destroy")
				$("#actor2").fadeOut({
					complete:function(){
						$("#actor2").remove()
						$("#actor1 .action").one("click",freeze)
					}
				})
			})
		})
		$("#actor1 img").replaceWith($newImg)
		return false;
	}
	
	function freeze(){
		$("#freeze img").attr("src","images/tangsengrou.jpg").load(function(){
			$("#freeze").fadeIn({
				complete:function(){
					var $newImg = $("<img/>").addClass("flipx").attr("src","ali/freeze.gif").load(function(){
						msgOption.content = "猴哥，八戒！你们这么做对得起师傅吗？！"
						msgOption.position.corner = {
							tooltip:"topMiddle",
							target:"bottomMiddle"
						}
						$("#actor1").qtip(msgOption)
						$("#actor1 .action").one("click",rotate)
					})
					$("#actor1 img").replaceWith($newImg)
				},
				duration:4000
			})
		})
		return false;
	}
	function rotate(){
		var $newImg = $("<img/>").attr("src","ali/rotate.gif").load(function(){
			msgOption.content = "手机在手，无奇不有。"
			msgOption.position.corner = {
				tooltip:"topMiddle",
				target:"bottomMiddle"
			}
			$("#actor1").qtip("destroy")
			$("#actor1").qtip(msgOption)
			$("#actor1 .action").one("click",function(){
				$("#freeze").fadeOut({
					complete:mobileMaker(1,runRight)
				})
			})
			function mobileMaker(time,exit){
				if( time>0 && time<8){
					return (function(){
						var $div = $("<div/>").addClass("hidden").addClass("mobile")
						var $img = $("<img/>")
						$div.append($img)
						$("#canvas").append($div)
						$img.attr("src","images/mobile"+time+".jpg").load(function(){
							$div.fadeIn({
								duration:3000,
								complete:function(){
									$("#actor1 .action").one("click",function(){
										$div.fadeOut({
											complete:function(){
												$("#actor1 .action").one("click",mobileMaker(time+1,exit))
											}
										})
									})
								}
							})
						})
					})
				}else{
					return (function(){
						var $div = $("<div/>").addClass("hidden").addClass("mobile")
						var $img = $("<img/>")
						$div.append($img)
						$("#canvas").append($div)
						$img.attr("src","images/mobile"+time+".jpg").load(function(){
							$div.fadeIn({
								duration:3000,
								complete:function(){
									$("#actor1 .action").one("click",function(){
										$div.fadeOut({
											complete:exit
										})
									})
								}
							})
						})
					})
				}
			}
		})
		$("#actor1 img").replaceWith($newImg)
		return false;
	}
	function runRight(){
		$("#actor1").qtip("destroy")
		var $newImg = $("<img/>").attr("src","ali/run-right.gif").load(function(){
			$("#actor1").animate({left:550},{
				duration:3000,
				complete:lookAround
			})
		})
		$("#actor1 img").replaceWith($newImg)
		return false;
	}
	function lookAround(){
		var $newImg = $("<img/>").attr("src","ali/look-around.gif").load(function(){
			$("#composition img").attr("src","images/composition.jpg").load(function(){
				$("#composition").fadeIn({
					complete:function(){
						var $newImg = $("<img/>").attr("src","ali/happy.gif").load(function(){
							msgOption.content = "这辈子能看到这篇作文，真值了……"
							msgOption.position.corner = {
								tooltip:"topMiddle",
								target:"bottomMiddle"
							}
							$("#actor1").qtip(msgOption)
							$("#actor1 .action").one("click",shame)
						})
						$("#actor1 img").replaceWith($newImg)
					}
				})
			})

		})
		$("#actor1 img").replaceWith($newImg)
		return false;
	}
	function shame(){
		$("#actor1").qtip("destroy")
		$("#composition").fadeOut()
		var $newImg = $("<img/>").attr("src","ali/shame.gif").load(function(){
			$("#actor1").animate({
				left:720,
				top:260
			},{
				duration:3000,
				complete:miaoIntro
			})
		})
		$("#actor1 img").replaceWith($newImg)
	}
	function miaoIntro(){
		var $newImg = $("<img/>").attr("src","ali/miao.gif").load(function(){
			$("#actor1").one("click",miao1)
		})
		$("#actor1 img").replaceWith($newImg)
	}
	function miao1(){
		$("#fu img").attr("src","images/fu.jpg").load(function(){
			$("#fu").fadeIn({
				complete:function(){
					var $newImg = $("<img/>").attr("src","ali/sigh.gif").load(function(){
						msgOption.content = "对狗来说，这叫“握手”，对我来说，这叫“扶着朕！”"
						msgOption.position.corner = {
							tooltip:"rightMiddle",
							target:"leftMiddle"
						}
						$("#actor1").qtip(msgOption)
						$("#actor1 .action").one("click",miao2)
					})
					$("#actor1 img").replaceWith($newImg)
				}
			})
		})
	}
	function miao2(){
		$("#fu").fadeOut()
		$("#actor1").qtip("destroy")
		$("#dream img").attr("src","images/dog.gif").load(function(){
			$("#dream").fadeIn({
				complete:function(){
					var $newImg = $("<img/>").attr("src","ali/bright.gif").load(function(){
						msgOption.content = "这配的文字简直亮瞎了～"
						msgOption.position.corner = {
							tooltip:"rightMiddle",
							target:"leftMiddle"
						}
						$("#actor1").qtip(msgOption)
						$("#actor1 .action").one("click",miao3)
					})
					$("#actor1 img").replaceWith($newImg)
				}
			})
		})
	}
	function miao3(){
		$("#dream").fadeOut()
		$("#actor1").qtip("destroy")
		$("#scared img").attr("src","images/scared.gif").load(function(){
			$("#scared").fadeIn({
				complete:function(){
					var $newImg = $("<img/>").attr("src","ali/sweet.gif").load(function(){
						msgOption.content = "这～这喵星人吓了好几跳呢～"
						msgOption.position.corner = {
							tooltip:"rightMiddle",
							target:"leftMiddle"
						}
						$("#actor1").qtip(msgOption)
						$("#actor1 .action").one("click",crawlLeft)
					})
					$("#actor1 img").replaceWith($newImg)
				}
			})
		})
	}
	function crawlLeft(){
		$("#scared").fadeOut()
		$("#actor1").qtip("destroy")
		var $newImg = $("<img/>").attr("src","ali/crawl-left.gif").load(function(){
			$("#actor1").animate({left:360},{
				duration:5000,
				complete:askLike
			})
		})
		$("#actor1 img").replaceWith($newImg)
	}
	function askLike(){
		var $newImg = $("<img/>").attr("src","ali/tricky.gif").load(function(){
			msgOption.content = "怎么样，很有趣吧！"
			msgOption.position.corner = {
				tooltip:"topMiddle",
				target:"bottomMiddle"
			}
			$("#actor1").qtip(msgOption)
			$("#actor1 .action").one("click",function(){
				$("#actor1").qtip("destroy")
				var $newImg = $("<img/>").attr("src","ali/intro10.gif").load(function(){
					msgOption.content = "那你告诉我，你喜不喜欢我？"
					msgOption.position.corner = {
						tooltip:"topMiddle",
						target:"bottomMiddle"
					}
					$("#actor1").qtip(msgOption)
					cantChooseNo()
				})
				$("#actor1 img").replaceWith($newImg)
			})
		})
		$("#actor1 img").replaceWith($newImg)
	}
	function cantChooseNo(){
		$(".choose").css("display","block")
		$(".yes").one("click",function(){
			alert("ok you right")
		})
		var i = 0
		stateX = [200,50,550]
		stateY = [500,250,10]
		$(".no").hover(function(){
			$(this).css("left",stateX[i]).css("top",stateY[i])
			i = (++i) % 3
		})
	}
})