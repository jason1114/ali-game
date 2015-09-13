var scenes = [
    {
        images: {
            main: 'http://ali-game.qiniudn.com/hide.gif',
        },
        coordinate: [720, 520],
        onComplete: function (images, $actor, next) {
            $actor.one('click', function () {
                next();
                $actor.unbind('click')
                return false;
            })
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/back.gif',
            duration: 'http://ali-game.qiniudn.com/ride-left.gif'
        },
        coordinate: [400, 520],
        duration: 5000,
        onComplete: function (images, $actor, next) {
            $actor.one('click', function () {
                topRightMsg($actor, "你想知道我是谁吗？");
                $actor.one('click', function () {
                    next();
                })
            })
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/intro1.gif',
        },
        coordinate: [400, 520],
        onComplete: function (images, $actor, next) {
            topRightMsg($actor, "既然你诚心诚意地问我~");
            $actor.one('click', function () {
                next();
            })
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/intro2.gif',
        },
        coordinate: [400, 520],
        onComplete: function (images, $actor, next) {
            topRightMsg($actor, "那我就大发慈悲地告诉你！");
            $actor.one('click', function () {
                next();
            })
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/intro3.gif',
        },
        coordinate: [400, 520],
        onComplete: function (images, $actor, next) {
            topRightMsg($actor, "为了防止世界被破坏！~");
            $actor.one('click', function () {
                next();
            })
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/intro4.gif',
        },
        coordinate: [400, 520],
        onComplete: function (images, $actor, next) {
            topLeftMsg($actor, "为了维护世界的和平！~");
            $actor.one('click', function () {
                next();
            })
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/intro5.gif',
        },
        coordinate: [400, 520],
        onComplete: function (images, $actor, next) {
            topRightMsg($actor, "贯彻爱与真实地邪恶！~");
            $actor.one('click', function () {
                next();
            })
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/intro6.gif',
        },
        coordinate: [400, 520],
        onComplete: function (images, $actor, next) {
            topLeftMsg($actor, "美丽又可爱的正派角色！~");
            $actor.one('click', function () {
                next();
            })
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/intro7.gif',
        },
        coordinate: [400, 520],
        onComplete: function (images, $actor, next) {
            topRightMsg($actor, "我！就是穿梭在银河中的<br>小周周！<br>白洞！白色的明天在等待着我！٩͡[๏̯͡๏]۶");
            $actor.one('click', function () {
                next();
            })
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/music.gif',
        },
        coordinate: [400, 520],
        onComplete: function (images, $actor, next) {
            topLeftMsg($actor, "康~忙~北~鼻~动~笔~晒~，带上耳机跟我一起开始轻松一刻吧~");
            $actor.one('click', function () {
                next();
            })
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/intro9.gif',
            longXia: 'http://ali-game.qiniudn.com/long-xia.jpg'
        },
        coordinate: [400, 520],
        onComplete: function (images, $actor, next) {
            topRightMsg($actor, "刷！~~~~~~~~~~~~~~~~~");
            var $img = createNewImage(images.longXia)
                .css('top', '-200px')
                .css('left', '320px')
                .animate({top: '0px'},{
                    duration: 2000,
                    complete: function () {
                        $actor.one('click', function () {
                            //$img.hide(1000);
                            next();
                        })
                    }
                });
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/rebirth.gif',
        },
        coordinate: [400, 520],
        onComplete: function (images, $actor, next) {
            topLeftMsg($actor, "复活吧！我的子民们！");
            $actor.one('click', function () {
                next();
            })
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/i-am-late.gif',
        },
        coordinate: [400, 520],
        onComplete: function (images, $actor, next) {
            topRightMsg($actor, "弟兄们，我来晚了！");
            $actor.one('click', function () {
                next();
            })
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/cruel.gif',
            longXia: 'http://ali-game.qiniudn.com/long-xia.jpg'
        },
        coordinate: [400, 520],
        onComplete: function (images, $actor, next) {
            topLeftMsg($actor, "好吧……这其实是一个残忍的冷笑话。");
            $actor.one('click', function () {
                $('img[src='+ images.longXia + ']').hide(1000);
                $actor.addClass('flipx');
                $('.qtip').remove();
                next();
            });
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/ask.gif',
            duration: 'http://ali-game.qiniudn.com/rebirth.gif',
            master: 'http://ali-game.qiniudn.com/dashi.gif'
        },
        duration: 5000,
        coordinate: [0, 20],
        onComplete: function (images, $actor, next) {
            $actor.removeClass('flipx');
            var $master = createNewImage(images.master)
                .css('top', '0')
                .css('left', '150px')
                .css('display', 'none')
                .fadeIn(1000)
                .one('click', function () {
                    bottomRightMsg($master, '施主，我觉得一个出家人如果也用呵呵来表达情绪的话，这也太俗了。阿弥陀佛。')
                    $actor.one('click', function () {
                        next();
                    });
                });
            bottomLeftMsg($actor, "大师，你为什么老说阿弥陀佛？");
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/dizzy.gif',
            master: 'http://ali-game.qiniudn.com/dashi.gif',
            tangsenrou: 'http://ali-game.qiniudn.com/tangsengrou.jpg',
        },
        coordinate: [0, 20],
        onComplete: function (images, $actor, next) {
            $actor.addClass('flipX');
            $actor.one('click', function () {
                $actor.removeClass('flipx');
                $('.qtip').remove();
                $('img[src='+ images.master + ']').fadeOut(1000, function () {
                    createNewImage(images.tangsenrou)
                        .css('left', '300px')
                        .css('top', '10px')
                        .css('display', 'none')
                        .fadeIn(1000, function () {
                            next();
                        });
                });
            });
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/freeze.gif',
            tangsenrou: 'http://ali-game.qiniudn.com/tangsengrou.jpg',
        },
        coordinate: [0, 20],
        onComplete: function (images, $actor, next) {
            bottomMiddleMsg($actor, '猴哥，八戒！你们这么做对得起师傅吗？！')
            $actor.one('click', function () {
                $('img[src='+ images.tangsenrou + ']').fadeOut(1000, function () {
                    next();
                })
            });
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/intro8.gif',
            god: 'http://ww3.sinaimg.cn/bmiddle/61e8a1fdgw1evyjhkvucyg204z07t1l1.gif'
        },
        coordinate: [0, 20],
        onComplete: function (images, $actor, next) {
            bottomMiddleMsg($actor, '快醒醒！你男神打来的电话，快接！');
            $actor.addClass('flipX');
            var img = createNewImage(images.god)
                .css('left', '300px')
                .css('top', '10px')
                .css('display', 'none')
                .fadeIn(1000, function () {
                    $actor.one('click', function () {
                        next();
                        $actor.removeClass('flipX');
                        img.fadeOut(1000);
                    })
                });
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/rotate.gif',
            mobile1: 'http://ali-game.qiniudn.com/mobile1.jpg',
            mobile2: 'http://ali-game.qiniudn.com/mobile2.jpg',
            mobile3: 'http://ali-game.qiniudn.com/mobile3.jpg',
            mobile4: 'http://ali-game.qiniudn.com/mobile4.jpg',
            mobile5: 'http://ali-game.qiniudn.com/mobile5.jpg',
            mobile6: 'http://ali-game.qiniudn.com/mobile6.jpg',
            mobile7: 'http://ali-game.qiniudn.com/mobile7.jpg',
            mobile8: 'http://ali-game.qiniudn.com/mobile8.jpg',
        },
        coordinate: [0, 20],
        onComplete: function (images, $actor, next) {
            bottomMiddleMsg($actor, '微博小伙伴纷纷吐槽手机中那些奇葩的逗比<br>_(:3 」∠)_')
            $actor.one('click', viewImage);
            function viewImage() {
                var idStr = $actor.attr('data-id');
                var id;
                if (!idStr) {
                    id = 1;
                } else {
                    id = +idStr;
                }
                if (id <= 8) {
                    if (id > 1) {
                        $('img[src='+ images['mobile'+(id-1)] + ']')
                            .fadeOut(1000, function () {
                                newImgIn(id)
                            });
                    } else {
                        newImgIn(id);
                    }
                }
                function newImgIn (id) {
                    var $img = createNewImage(images['mobile'+id])
                        .css('left', '300px')
                        .css('top', '10px')
                        .css('display', 'none')
                        .fadeIn(1000, function () {
                            if (id < 8) {
                                $actor.one('click', viewImage)
                            } else {
                                $actor.one('click', function () {
                                    $img.fadeOut(1000, function () {
                                        $('.qtip').remove();
                                        next();
                                    });
                                })
                            }
                            $actor.attr('data-id', ++id);
                        });
                }
            }
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/look-around.gif',
            duration: 'http://ali-game.qiniudn.com/run-right.gif'
        },
        coordinate: [550, 20],
        duration: 5000,
        onComplete: function (images, $actor, next) {
            next()
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/happy.gif',
            composition: 'http://ali-game.qiniudn.com/composition.jpg'
        },
        coordinate: [550, 20],
        onComplete: function (images, $actor, next) {
            bottomMiddleMsg($actor, '这辈子能看到这篇作文，真值了……');
            var $img = createNewImage(images.composition)
                .css('left', '0')
                .css('top', '10px')
                .css('display', 'none')
                .fadeIn(1000, function () {
                    $actor.one('click', function () {
                        $img.fadeOut(1000, function () {
                            $('.qtip').remove();
                            next();
                        });
                    })
                });
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/miao.gif',
            duration: "http://ali-game.qiniudn.com/shame.gif"
        },
        duration: 5000,
        coordinate: [720, 260],
        onComplete: function (images, $actor, next) {
            $actor.one('click', next);
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/sigh.gif',
            fu: 'http://ali-game.qiniudn.com/fu.jpg'
        },
        coordinate: [720, 260],
        onComplete: function (images, $actor, next) {
            var $fu = createNewImage(images.fu)
                .css('left', '10px')
                .css('top', '150px')
                .css('display', 'none')
                .fadeIn(1000, function () {
                    leftMiddleMsg($actor, '对狗来说，这叫“握手”，对我来说，这叫“扶着朕！”');
                    $actor.one('click', function () {
                        $fu.fadeOut(1000, function () {
                            $('.qtip').remove();
                            next();
                        });
                    });
                });
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/bright.gif',
            dog: 'http://ali-game.qiniudn.com/dog.gif',
        },
        coordinate: [720, 260],
        onComplete: function (images, $actor, next) {
            var $dog = createNewImage(images.dog)
                .css('left', '100px')
                .css('top', '200px')
                .css('display', 'none')
                .fadeIn(1000, function () {
                    leftMiddleMsg($actor, '这配的文字简直亮瞎了～');
                    $actor.one('click', function () {
                        $dog.fadeOut(1000, function () {
                            next();
                        });
                    });
                });
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/sweet.gif',
            dog: 'http://ali-game.qiniudn.com/scared.gif',
        },
        coordinate: [720, 260],
        onComplete: function (images, $actor, next) {
            var $dog = createNewImage(images.dog)
                .css('left', '10px')
                .css('top', '150px')
                .css('display', 'none')
                .fadeIn(1000, function () {
                    leftMiddleMsg($actor, '这～这喵星人吓了好几跳呢～');
                    $actor.one('click', function () {
                        $dog.fadeOut(1000, function () {
                            next();
                        });
                    });
                });
        }
    },
    {
        images: {
            main: 'http://pic.xoyo.com/bbs/2012/11/03/12110304079122ec43509b82f3.gif',
            dog: 'http://ww4.sinaimg.cn/bmiddle/61e8a1fdgw1evyo3pif40g208c0801l0.gif',
        },
        coordinate: [720, 260],
        onComplete: function (images, $actor, next) {
            var $dog = createNewImage(images.dog)
                .css('left', '100px')
                .css('top', '150px')
                .css('display', 'none')
                .fadeIn(1000, function () {
                    leftMiddleMsg($actor, '瞅啥瞅，信不信我削你！哎呦卧槽，竟敢顶我！！');
                    $actor.one('click', function () {
                        $dog.fadeOut(1000, function () {
                            $('.qtip').fadeOut(1000, function () {
                                next();
                            })
                        });
                    });
                });
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/tricky.gif',
            duration: 'http://ali-game.qiniudn.com/crawl-left.gif'
        },
        duration: 5000,
        coordinate: [360, 260],
        onComplete: function (images, $actor, next) {
            bottomMiddleMsg($actor, '怎么样，很有趣吧！');
            $actor.one('click', next)
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/intro10.gif',
        },
        coordinate: [360, 260],
        onComplete: function (images, $actor, next) {
            bottomMiddleMsg($actor, '既然这样，那你告诉我，你喜不喜欢我？');
            cantChooseNo();
            function cantChooseNo(){
                $(".yes,.no").css("display","block")
                $(".yes").one("click",afterChooseYes)
                var i = 0
                stateX = [200,50,550]
                stateY = [500,250,10]
                $(".no").hover(function(){
                    $(this).css("left",stateX[i]).css("top",stateY[i])
                    i = (++i) % 3
                })
            }
            function afterChooseYes(){
                var exe = false;
                $(".choose").fadeOut(1000, function () {
                    if (!exe) {
                        exe = true;
                        $('.qtip').remove();
                        $actor.addClass('flipX');
                        next();
                    }
                })

            }
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/love.gif',
            duration: 'http://ali-game.qiniudn.com/rebirth.gif',
            side: 'http://ali-game.qiniudn.com/qixi-side.jpg',
            bgMain: 'http://jason1114.github.io/backup/images/xiangrikui.jpg'
        },
        coordinate: [0, 400],
        duration: 5000,
        onComplete: function (images, $actor, next) {
            $actor.removeClass('flipX');
            bottomMiddleMsg($actor, '今天，我有一些话想对你说，所以我决定先换个背景');
            $actor.one('click', function () {
                $('.qtip').remove();
                $("body").css("background-image","url("+images.bgMain+")");
                $("#player").load("angel-player.html",function() {
                    next();
                });
            })
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/love.gif',
            photo1: 'http://77g0sh.com1.z0.glb.clouddn.com/IMG_20150808_140123.jpg',
            photo2: 'http://77g0sh.com1.z0.glb.clouddn.com/IMG_20150808_135214.jpg',
            photo3: 'http://77g0sh.com1.z0.glb.clouddn.com/IMG_20150807_192727.jpg',
            photo4: 'http://77g0sh.com1.z0.glb.clouddn.com/IMG_20150807_192538.jpg',
            photo5: 'http://77g0sh.com1.z0.glb.clouddn.com/IMG_20150807_153006.jpg',
            photo6: 'http://77g0sh.com1.z0.glb.clouddn.com/IMG_20150807_144718.jpg',
            photo7: 'http://77g0sh.com1.z0.glb.clouddn.com/IMG_20150807_102730.jpg',
            photo8: 'http://77g0sh.com1.z0.glb.clouddn.com/IMG_20150710_144417.jpg',
            photo9: 'http://77g0sh.com1.z0.glb.clouddn.com/IMG_20150710_103220.jpg',
            photo10: 'http://77g0sh.com1.z0.glb.clouddn.com/IMG_20150709_082815.jpg',
            photo11: 'http://77g0sh.com1.z0.glb.clouddn.com/IMG_20150708_225358.jpg',
            photo12: 'http://77g0sh.com1.z0.glb.clouddn.com/IMG_20150708_225335.jpg',
        },
        coordinate: [0, 400],
        onComplete: function (images, $actor, next) {
            var photoNum = 12;
            var words = [
                "竹竹，我知道之前我们产生过一些不愉快",
                "但是我相信我们在一起时绝对是快乐的时光占了大多数",
                "这部小短片虽然有点简单，可能也有点幼稚",
                "但是我愿意花时间来把它完成，就像我对你的认真",
                "我还想告诉你",
                "就是因为你，我才会变得越来越好",
                "有人会对异地产生怀疑，但我不会",
                "我相信只要努力就会有收获",
                "我相信只要坚持就能获得最终的胜利",
                "我相信我们终会在一起",
                "就仿佛相信明天的太阳一定会升起",
                "竹竹",
                "最美不是艳阳天",
                "是与你一起拍的照片",
            ];
            showPhoto(1);
            function say (i) {
                $actor.one('click', function () {
                    if (i < words.length) {
                        bottomMiddleMsg($actor, words[i])
                        $actor.one('click', function () {
                           say(i+1);
                        });
                    } else {
                        var alreadyFadeOut = false;
                        $('.photo').fadeOut(2000, function () {
                            if (alreadyFadeOut) {
                                return;
                            } else {
                                alreadyFadeOut = true;
                            }
                            $('.qtip').remove();
                            next();
                        });
                    }
                });
            }
            function showPhoto (num) {
                var nextNum;
                if (num < photoNum) {
                    nextNum = num + 1;
                } else {
                    nextNum = 1;
                }
                var $img = createNewImage(images['photo'+num])
                    .css('left', Math.floor(Math.random()*800) + 'px')
                    .css('top', Math.floor(Math.random()*200)+ 'px')
                    .css('display', 'none');
                    $img.css($img.width()>$img.height()?'height':'width', '300px')
                    .addClass('photo')
                    .fadeIn(5000, function () {
                        $img.animate({
                            left: Math.floor(Math.random()*800) + 'px',
                            top: Math.floor(Math.random()*200)+ 'px',
                        },{
                            duration: 5000,
                            complete: function () {
                                if (num < photoNum) {
                                    showPhoto(nextNum);
                                } else {
                                    say(0);
                                }
                            }
                        }).css('transform', 'rotate('+ (Math.floor(Math.random()*90)-45) +'deg)')
                    });
            }
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/love.gif',
            zhuzhu: 'http://ali-game.qiniudn.com/li-girl.gif'
        },
        coordinate: [0, 400],
        onComplete: function (images, $actor, next) {
            createNewImage(images.zhuzhu)
                .css('top', 350 + 'px')
                .css('left', 870 + 'px');
            next();
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/hug.gif',
            duration: 'http://ali-game.qiniudn.com/shame.gif',
            zhuzhu: 'http://ali-game.qiniudn.com/li-girl.gif'

        },
        coordinate: [870, 350],
        duration: 5000,
        onComplete: function (images, $actor, next) {
            $('img[src="'+ images.zhuzhu + '"]').remove();
            next();
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/hug.gif',
            follow: 'http://ali-game.qiniudn.com/follow.gif',
            kiss: 'http://ali-game.qiniudn.com/kiss.gif',
            music: 'http://ali-game.qiniudn.com/music.gif',
            musicGirl: 'http://ali-game.qiniudn.com/music-girl.gif',
            loveStand: 'http://ali-game.qiniudn.com/love-stand.gif',
            loveBubble: 'http://ali-game.qiniudn.com/love-bubble.gif',
            flower: 'http://ali-game.qiniudn.com/flower.gif',
            hang: 'http://ali-game.qiniudn.com/hang.gif',
            hangGirl: 'http://ali-game.qiniudn.com/hang-girl.gif',
            pai: 'http://ali-game.qiniudn.com/pai.gif',
            rotate: 'http://ali-game.qiniudn.com/rotate.gif'
        },
        coordinate: [870, 350],
        onComplete: function (images, $actor, next) {
            var pics = [
                {img: "rotate", xy: [720, 260]},
                {img: "music", xy: [730, 50]},
                {img: "kiss", xy: [520, 0]},
                {img: "follow", xy:[360, 120]},
                {img: "musicGirl", xy: [250, 0]},
                {img: "loveStand", xy:[30, 50]},
                {img: "loveBubble", xy:[50, 260]},
                {img: "hang", xy:[200, 420]},
                {img: "hangGirl", xy:[380, 520]},
                {img: "pai", xy:[570, 420]},
                //{img: "flower", xy: [360, 260]},
            ];
            showImg(0);
            function showImg(i) {
                createNewImage(images[pics[i].img])
                    .css("left", pics[i].xy[0])
                    .css("top", pics[i].xy[1])
                    .css('display', 'none')
                    .fadeIn(700, function () {
                        if (i < pics.length - 1) {
                            showImg(i+1);
                        } else {
                            $actor.addClass("hidden");
                            next();
                        }
                    })
            }
        }
    },
    {
        images: {
            main: 'http://ali-game.qiniudn.com/flower.gif',
        },
        coordinate: [360, 260],
        onComplete: function (images, $actor, next) {
            $actor.removeClass("hidden").fadeIn(1000);
            var words = [
                "竹竹，对我来说，你是很重要的人。",
                "本想挑个特别的日子，给你看",
                "可是我实在忍不住",
                "我希望你能比别人更快乐，更幸福^_^",
                "爱你^_^周大哥永远是你坚强的后援，永远是你避风的港湾"
            ];
            say(0);
            function say (i) {
                if (i < words.length) {
                    bottomMiddleMsg($actor, words[i]);
                    $actor.one('click', function () {
                        say(i+1);
                    })
                } else {
                    // final
                    $("#replay").fadeIn()
                }
            }
        }

    }
];

function createNewImage (url) {
    return $('<img>')
        .attr('src', url)
        .css('position', 'absolute')
        .appendTo("#canvas")
}