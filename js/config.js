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
    x: -500,
    data_point: 3,
    rotate_deg: 0.001
  };

}.call(window));