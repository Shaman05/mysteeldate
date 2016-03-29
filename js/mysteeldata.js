/**
 * Created by ChenChao on 2016/3/28.
 */

(function(){

  "use strict";

  $(function(){

    console.log('page loaded!');

    $('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage'],
      sectionsColor: ['#0D2241', '#273A6D', '#093675', '#093675', '#093675', '#093675'],
      navigation: true,
      verticalCentered: false, //内容是否垂直居中
      navigationPosition: 'right',
      navigationTooltips: ['mysteelData1', 'mysteelData2', 'mysteelData3', 'mysteelData4', 'mysteelData5', 'mysteelData6']
    });

  });

  this.onPointClick = function(e, object, n){
    console.log(e);
    console.log('----');
    console.log(object);
    console.log(n);
  };

}.call(window));