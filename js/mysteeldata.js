/**
 * Created by ChenChao on 2016/3/28.
 */

(function(){

  "use strict";

  $(function(){

    console.log('page loaded!');

    $('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage'],
      sectionsColor: ['#0D2241', '#0A2F41', '#444081', '#28233B', '#502373', '#1A062A'],
      navigation: true,
      verticalCentered: false, //内容是否垂直居中
      navigationPosition: 'right',
      navigationTooltips: ['mysteelData1', 'mysteelData2', 'mysteelData3', 'mysteelData4', 'mysteelData5', 'mysteelData6']
    });

    var $rotateContain = $('.container');
    setTimeout(function(){
      $rotateContain.eq(0).addClass('cur');
    }, 2000);
    $rotateContain.find('.item').on('click', function(){
      var index = $(this).index();
      var deg = index === 2 ? -60 : index === 0 ? 60 : 0;
      $(this).parents('.container')[0].style.transform = 'rotateY(' + deg + 'deg)';
    });

    var $board = $('#section2').find('.board');
    var $item = $('#s2_contain').find('.item');
    $item.hover(function(){
      var $this = $(this);
      var index = $this.index();
      $board.removeClass('cur').eq(index).addClass('cur');
      $this.addClass('cur');
    }, function(){
      $(this).removeClass('cur');
    })
  });

  var $mainQuoteAll = $('#mainQuoteAll');
  var $mainQuote = $('#mainQuote');
  this.onCreateDiamond = function(diamond){
    var position = diamond.diamondContainer.position;
    console.log(diamond.diamondContainer.position);
    console.log($mainQuoteAll.outerWidth(), $mainQuoteAll.outerHeight())
    $mainQuoteAll.css({
      left: position.x - $mainQuoteAll.outerWidth()/2,
      top: position.y - $mainQuoteAll.outerHeight()/2
    }).addClass('showMainQuoteAll');
  };
  this.onPointClick = function(e, object, n, index){
    //todo
    $('.container').removeClass('cur').eq(index).addClass('cur');
  };
  this.onPointOver = function(e, object, n, index){
    $mainQuote.html(pointText[index]['title'] + '<br>' + pointText[index]['desc']);
  };

}.call(window));