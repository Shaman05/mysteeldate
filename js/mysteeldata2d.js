/**
 * Created by ChenChao on 2016/3/28.
 */

(function (){

    "use strict";

    $(function (){
        var $slideBoard = $('#slideBoard');
        var page1Options = {
            pagination: '.pagination-stage',
            grabCursor : true
        };
        var page1Swipers = {
            's1': new Swiper('#stage_area1',  {
            pagination: '.pagination-s1',
            grabCursor : true
        }),
            's2': new Swiper('#stage_area2',  {
            pagination: '.pagination-s2',
            grabCursor : true
        }),
            's3': new Swiper('#stage_area3',  {
            pagination: '.pagination-s3',
            grabCursor : true
        })
        };
         $slideBoard.css('opacity', '1');
        // $('#stage_area1, #stage_area2, #stage_area3').find('.swiper-slide').on('click', function(){
        //     var $this = $(this);
        //     var swiperObjIndex = $this.attr('data-index');
        //     var index = $this.index();
        //     page1Swipers['s' + swiperObjIndex].slideTo(index, 350, false);
        // });

        var swiper = new Swiper('.whfull', {
            pagination: '.pagination',
            mode : 'vertical',
            mousewheelControl : true,
            mousewheelControlForceToAxis : true,
            noSwiping : true
        });

         // $('.next-ico').click(function(){
         //    swiper.slideNext();
         // })

        // var swiperflip1 = new Swiper('#swiper-effect1', {
        //     effect: 'flip',
        //     grabCursor: true,
        //     onClick: function (swiper){
        //         // window.location.href = "http://www.baidu.com";
        //         alert('你点了Swiper;');

        //     }

        // });
        // var swiperflip2 = new Swiper('#swiper-effect2', {
        //     effect: 'flip',
        //     grabCursor: true

        // });
        // var swiperflip3 = new Swiper('#swiper-effect3', {
        //     effect: 'flip',
        //     grabCursor: true

        // });
        // var swiperflip4 = new Swiper('#swiper-effect4', {
        //     effect: 'flip',
        //     grabCursor: true

        // });
        // var swiperflip5 = new Swiper('#swiper-effect5', {
        //     effect: 'flip',
        //     grabCursor: true

        // });
        // var swiperflip6 = new Swiper('#swiper-effect6', {
        //     effect: 'flip',
        //     grabCursor: true

        // });

        $(".logic-imgs .box,.logic-switch-btn,.contain-zt-list .item,#section1 .s1-img,#s2_contain").mouseover(function(){
          //swiper.lockSwipes();
         // console.log( swiper.slides[swiper.activeIndex])
          $(swiper.slides[swiper.activeIndex]).addClass("swiper-no-swiping")
        });

        $(".logic-imgs .box,.logic-switch-btn,.contain-zt-list .item,#section1 .s1-img,#s2_contain").mouseout(function(){
         // swiper.unlockSwipes();
          $(swiper.slides[swiper.activeIndex]).removeClass("swiper-no-swiping")
        });

    

        // $('#fullpage').fullpage({
        //   anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage'],
        //   sectionsColor: ['#0D2241', '#0A2F41', '#444081', '#28233B', '#502373', '#1A062A'],
        //   navigation: true,
        //   verticalCentered: false, //内容是否垂直居中
        //   navigationPosition: 'right',
        //   navigationTooltips: ['mysteelData1', 'mysteelData2', 'mysteelData3', 'mysteelData4', 'mysteelData5', 'mysteelData6']
        // });

        // var $rotateContain = $('.container');
        // setTimeout(function (){
        //     $rotateContain.eq(0).addClass('cur');
        // }, 2000);
        // $rotateContain.find('.item').on('click', function (){
        //     var index = $(this).index();
        //     var deg = index === 2 ? -60 : index === 0 ? 60 : 0;
        //     $(this).parents('.container')[0].style.transform = 'rotateY(' + deg + 'deg)';
        // });
        // 
        
        var swiper2dsS2 = new Swiper('#s2_contain',{
            pagination : '.swiper-pagination',
            grabCursor : true,
            autoplay : 3000
            })
       
        var $board = $('#section2').find('.board');
        var $item = $('#s2_contain').find('.swiper-slide');
        $item.hover(function (){
            var $this = $(this);
            var index = $this.index();
            $board.removeClass('cur').eq(index).addClass('cur');
            $this.addClass('cur');
        }, function (){
            $(this).removeClass('cur');
        });

        var $section4 = $('#section4');
        var $logicSwitch = $section4.find('.logic-switch-btn');
        var $logicImgs = $section4.find('.logic-imgs');
        $logicImgs.eq(0).addClass('active');
        $logicSwitch.on('click', function (){
            var $this = $(this);
            $logicSwitch.removeClass('active');
            $this.addClass('active');
            $logicImgs.removeClass('active').eq($this.index()).addClass('active');
        });
    });

    var $mainQuoteAll = $('#mainQuoteAll');
    $mainQuoteAll.addClass('showMainQuoteAll');
    var $mainQuote = $('#mainQuote');

    var $slideBoard = $('#slideBoard');
    $('.color-block').hover(function(){
        var index = $(this).index('.color-block');
        $slideBoard.find('.swiper-container').removeClass('cur').eq(index).addClass('cur');
    });
    this.onPointOver = function (e, object, n, index){
        setMainQuoteText(pointText[index]['title'], pointText[index]['desc']);
        $slideBoard.find('.swiper-container').removeClass('cur').eq(index).addClass('cur');
    };

    function setMainQuoteText(title, content){
        $mainQuote.html('<h4>' + title + '</h4><p>' + content + '</p>');
    }

    this.textShowIndex = 0;
    this.beginTextShowTimer = setTimeout(function (){
        window.textShowTimer = setInterval(function (){
            window.textShow();
        }, window.textShowInterval);
    }, 7000);

    this.textShow = function (){
        var textArr = window.quotesArr[window.textShowIndex];
        TweenLite.to("#lineQuote2", .3, {
            scaleX: 0,
            transformOrigin: "left",
            ease: Power4.easeIn
        });
        TweenLite.to("#lineQuote1", .3, {
            scaleX: 0,
            transformOrigin: "right",
            ease: Power4.easeIn
        });
        TweenLite.to("#mainQuote", .5, {
            y: 70,
            autoAlpha: 0,
            ease: Power1.easeIn,
            onComplete: function (){
                setMainQuoteText(textArr[0], textArr[1]);
            },
            onCompleteParams: []
        });
        TweenLite.to("#secondQuote", .5, {
            y: 30,
            ease: Power1.easeIn,
            onComplete: function (){
            },
            onCompleteParams: []
        });
        TweenLite.to("#lineQuote2", 1, {
            scaleX: 1,
            transformOrigin: "left",
            ease: Power4.easeOut,
            delay: .7
        });
        TweenLite.to("#lineQuote1", 1, {
            scaleX: 1,
            transformOrigin: "right",
            ease: Power4.easeOut,
            delay: .7
        });
        TweenLite.to("#mainQuote", 2, {
            y: 0,
            autoAlpha: 1,
            ease: Power4.easeOut,
            delay: 1
        });
        TweenLite.to("#secondQuote", 1, {
            y: 0,
            ease: Power1.easeOut,
            delay: .5
        });
        TweenLite.to("#lineQuote3", 1, {
            autoAlpha: 0,
            scaleX: 0,
            ease: Power4.easeOut,
            delay: 0
        });
        window.textShowIndex = window.textShowIndex > window.quotesArr.length - 2 ? 0 : window.textShowIndex + 1;
    };

}.call(window));