# Mysteel Data 静态首页

#### 1. 主要文件说明

        |-assets                多媒体文件
        |-css
            |-style.css         主要的样式文件
            |-swiper.min.css    swiper插件样式
        |-img                   图片目录
        |-dist
            |-config.js         配置文件
            |-master2d.min.js   2d页面js
            |-master3d.min.js   3d页面js
        |-page2d.html           2d页面
        |-page3d.html           3d页面

#### 2. config.js说明

        //createJs宿主，不要改动
        this.createjs = window;

        //资源加载的基础路径，多媒体文件的基础路径
        this.base_url = './';

        //是否开启背景音乐, IE下需放置同文件名的mp3
        this.musicOn = false;
        this.soundFile = '/assets/music.ogg';

        //钻石球canvas配置
        this._CONF_ = {
            //水平偏移
            x: function (){
                return window.innerWidth > 1366 ? -500 : -400;
            }(),
            //垂直偏移
            y: 50,
            //球面上数据点的数量
            data_point: 3,
            //旋转角度偏移量，值越大转得越快
            rotate_deg: 0.001,
            //允许最大宽度
            widthMax: 1920,
            //允许最大高度
            heightMax: 1080
        };

        //文本显示定时器
        this.beginTextShowTimer = null;
        this.textShowTimer = null;
        //球面文本切换间隔时间
        this.textShowInterval = 5000;
        //循环播放文本，添加更多则按格式 ['标题xxx', '内容xxx'] 添加到数组里
        this.quotesArr = [
            ['测试标题111', '测试内容111111111'],
            ['测试标题222', '测试内容22222'],
            ['测试标题33', '测试内容1111333'],
            ['测试标题4', '测试内容44444']
        ];

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

        //以上两个数据如需从后台动态获取，则可以移出config.js文件，在body结束后config.js文件前定义好如下
        </body>
        <script>
        var quotesArr = <%= quotesArr %>;
        var pointText = <%= pointText %>
        </script>
        <script type="text/javascript" src="dist/config.js"></script>