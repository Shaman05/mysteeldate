/**
 * Created by ChenChao on 2016/3/29.
 */

(function(){

  "use strict";

  //createJs宿主
  this.createjs = window;

  //资源加载的基础路径
  this.base_url = './';

  //canvas配置
  this._CONF_ = {
    x: -400,
    data_point: 3,
    rotate_deg: 0.001,
    widthMax: 1920,
    heightMax: 1080
  };

  this.pointText = [
    {
      title: '热门数据',
      desc: '热门数据热门数据热门数据热门数据'
    },
    {
      title: '最新数据',
      desc: '最新数据最新数据最新数据'
    },
    {
      title: '最新数据预测',
      desc: '最新数据预测最新数据预测'
    }
  ];
  this.quotesArr = [
    [
      "<br>测试标题111",
      "My steel data",
      6,
      27
    ],
    [
      "<br>测试标题22222",
      "My steel data",
      6,
      27
    ],
    [
      "<br>测试标题333",
      "My steel data",
      6,
      27
    ]
  ];

}.call(window));