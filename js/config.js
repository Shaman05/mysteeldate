/**
 * Created by ChenChao on 2016/3/29.
 */

(function (){

    "use strict";

    //createJs宿主
    this.createjs = window;

    //资源加载的基础路径
    this.base_url = './';

    //是否开启背景音乐
    this.enableMusic = false;
    this.soundFile = '/assets/music.ogg';

    //canvas配置
    this._CONF_ = {
        x: function (){
            return window.innerWidth > 1366 ? -500 : -400;
        }(),
        y: 50,
        data_point: 3,
        rotate_deg: 0.001,
        widthMax: 1920,
        heightMax: 1080
    };

    //文本显示定时器
    this.beginTextShowTimer = null;
    this.textShowTimer = null;
    //文本动画切换间隔时间
    this.textShowInterval = 5000;

    //三个点对应的文本
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

    //循环播放文本，添加更多则按格式 ['标题xxx', '内容xxx'] 添加到数组里
    this.quotesArr = [
        ['测试标题111', '测试内容111111111'],
        ['测试标题222', '测试内容22222'],
        ['测试标题33', '测试内容1111333'],
        ['测试标题4', '测试内容44444']
    ];

}.call(window));