<template>
<div id="app">
  <div class="loading">
    <div>
      <div class="loadingtxt">0%</div>
      <div class="loadtxt">加载中...</div>
    </div>
  </div>
  <!-- <audio autoplay="autoplay" loop="loop" ref = "bgSound">
<source src="./assets/sound.mp3" type="audio/mpeg" />
</audio>
<audio autoplay="autoplay"  class="carSound" ref="carSound"> -->
  <source src="./assets/car.mp3" type="audio/mpeg" />
  </audio>

  <swiper :options="swiperOption">
    <swiper-slide>
      <div class="page1_bg ">
        <div class="move p1car"><img src='./assets/img/p3-car.png' /></div>
        <div class="move p1title"><img src='./assets/img/p1-title.png'></div>
        <div class="move cloud2"><img src='./assets/img/p1-cloud2.png'></div>
        <div class="move cloud1"><img src='./assets/img/p1-cloud1.png'></div>
        <div class="move p1text">
          <img class="p1t1 move " src='./assets/img/p1t1.png'>
          <img class="p1t2 move " src='./assets/img/p1t2.png'>
          <img class="p1t3 move " src='./assets/img/p1t3.png'>
          <img class="p1t4 move " src='./assets/img/p1t4.png'>
          <img class="p1t5 move " src='./assets/img/p1t5.png'>
        </div>
        <div class="arrow"><img src="./assets/img/arrow.png" /></div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="page2_bg ">
        <div class="bigmoon move"><img src='./assets/img/p2-moon.png'></div>
        <div class="wrap move"><img src='./assets/img/p2-wrap.png'></div>
        <div class="move map"><img src='./assets/img/p2-map.png'></div>
        <div class="p2title move"><img src='./assets/img/p2-title.png'></div>
        <div class="move card1 card"><img src='./assets/img/p2-card1.png'></div>
        <div class="move card2 card"><img src='./assets/img/p2-card2.png'></div>
        <div class="move card3 card"><img src='./assets/img/p2-card3.png'></div>
        <div class="move dot1 dot"><img src='./assets/img/p2-dot.png'></div>
        <div class="move dotWrap1 dotWrap"><img src='./assets/img/p2-dotWrap.png'></div>
        <div class="move dot2 dot"><img src='./assets/img/p2-dot.png'></div>
        <div class="move dotWrap2 dotWrap"><img src='./assets/img/p2-dotWrap.png'></div>
        <div class="move dot3 dot"><img src='./assets/img/p2-dot.png'></div>
        <div class="move dotWrap3 dotWrap"><img src='./assets/img/p2-dotWrap.png'></div>
        <div class="arrow"><img src="./assets/img/arrow.png" /></div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="page3_bg ">
        <div class="p3car move">
          <img src="./assets/img/p3-car.png">
        </div>
        <div class="tree move">
          <img src="./assets/img/p3-tree.png">
          <div class="flower move f1">
            <img src="./assets/img/p3-flower.png">
          </div>
          <div class="flower move f2">
            <img src="./assets/img/p3-flower.png">
          </div>
          <div class="flower move f3">
            <img src="./assets/img/p3-flower.png">
          </div>
          <div class="flower move f4">
            <img src="./assets/img/p3-flower.png">
          </div>
          <div class="flower move f5">
            <img src="./assets/img/p3-flower.png">
          </div>
          <div class="flower move f6">
            <img src="./assets/img/p3-flower.png">
          </div>
          <div class="flower move f7">
            <img src="./assets/img/p3-flower.png">
          </div>
        </div>
        <div class="man move">
          <img src="./assets/img/p3-man.png">
        </div>
        <div class="arm move">
          <img src="./assets/img/p3-arm.png">
        </div>
        <div class="move p3text">
          <img class="p3t1 move " src='./assets/img/p3t1.png'>
          <img class="p3t2 move " src='./assets/img/p3t2.png'>
          <img class="p3t3 move " src='./assets/img/p3t3.png'>
          <img class="p3t4 move " src='./assets/img/p3t4.png'>
          <img class="p3t5 move " src='./assets/img/p3t5.png'>
        </div>
        <div class="arrow"><img src="./assets/img/arrow.png" /></div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="page4_bg ">
        <div class="p4car move">
          <img src="./assets/img/p3-car.png">
        </div>
        <div class="move p4text">
          <img class="p4t1 move " src='./assets/img/p4t1.png'>
          <img class="p4t2 move " src='./assets/img/p4t2.png'>
          <img class="p4t3 move " src='./assets/img/p4t3.png'>
          <img class="p4t4 move " src='./assets/img/p4t4.png'>
          <img class="p4t5 move " src='./assets/img/p4t5.png'>
        </div>

        <div class="r1 rabbit move">
          <div class="rhead move">
            <img src="./assets/img/p4-head.png">
          </div>
          <img src="./assets/img/p4-body.png">
          <div class="leg move">
            <img src="./assets/img/p4-leg.png">
          </div>
          <div class="radish move">
            <img src="./assets/img/p4-radish.png">
          </div>
        </div>

        <div class="r2 rabbit move">
          <div class="rhead move">
            <img src="./assets/img/p4-head.png">
          </div>
          <img src="./assets/img/p4-body.png">
          <div class="leg move">
            <img src="./assets/img/p4-leg.png">
          </div>
          <div class="radish move">
            <img src="./assets/img/p4-radish.png">
          </div>
        </div>

        <div class="r3 rabbit move">
          <div class="rhead move">
            <img src="./assets/img/p4-head.png">
          </div>
          <img src="./assets/img/p4-body.png">
          <div class="leg move">
            <img src="./assets/img/p4-leg.png">
          </div>
          <div class="radish move">
            <img src="./assets/img/p4-radish.png">
          </div>
        </div>

        <div class="r4 rabbit move">
          <div class="rhead move">
            <img src="./assets/img/p4-head.png">
          </div>
          <img src="./assets/img/p4-body.png">
          <div class="leg move">
            <img src="./assets/img/p4-leg.png">
          </div>
          <div class="radish move">
            <img src="./assets/img/p4-radish.png">
          </div>
        </div>
        <div class="r5 rabbit move">
          <div class="rhead move">
            <img src="./assets/img/p4-head.png">
          </div>
          <img src="./assets/img/p4-body.png">
          <div class="leg move">
            <img src="./assets/img/p4-leg.png">
          </div>
          <div class="radish move">
            <img src="./assets/img/p4-radish.png">
          </div>
        </div>
        <div class="arrow"><img src="./assets/img/arrow.png" /></div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="page5_bg ">
        <div class="p5car move">
          <img src="./assets/img/p3-car.png">
        </div>
        <div class="move p5text">
          <img class="p5t1 move " src='./assets/img/p5t1.png'>
          <img class="p5t2 move " src='./assets/img/p5t2.png'>
          <img class="p5t3 move " src='./assets/img/p5t3.png'>
          <img class="p5t4 move " src='./assets/img/p5t4.png'>
          <img class="p5t5 move " src='./assets/img/p5t5.png'>
        </div>
        <div class="house move">
          <img src="./assets/img/p5-house.png">
        </div>
        <div class="head move">
          <img src="./assets/img/p5-head.png">
        </div>
        <div class="body move">
          <img src="./assets/img/p5-body.png">
        </div>
        <div class="stone move">
          <img src="./assets/img/p5-stone.png">
        </div>
        <div class="arrow"><img src="./assets/img/arrow.png" /></div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class='page6_bg '>
        <div class="moon move">
          <img src="./assets/img/p2-moon.png">
        </div>
        <div class="move p6text">
          <img class="p6t1 move " src='./assets/img/p6t1.png'>
          <img class="p6t2 move " src='./assets/img/p6t2.png'>
          <img class="p6t3 move " src='./assets/img/p6t3.png'>
          <img class="p6t4 move " src='./assets/img/p6t4.png'>
          <img class="p6t5 move " src='./assets/img/p6t5.png'>
          <img class="p6t6 move " src='./assets/img/p6t6.png'>
          <img class="p6t7 move " src='./assets/img/p6t7.png'>
          <img class="p6t8 move " src='./assets/img/p6t8.png'>
        </div>
        <div class="p6title1 move" @click="share" :data-track-click='omgShare'>
          <img src="./assets/img/p6-title1.png">
        </div>
        <div :class="[starShow ? 'star starShow' : 'star']">
          <img src="./assets/img/star.png">
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <div class="guideTop"></div>
</div>
</template>
<script>
require('swiper/dist/css/swiper.css')
import './assets/js/didi.dbridge.js'
import './assets/js/iNoBounce.js'
import 'yuki-createjs'
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
import {
  TweenMax
} from "gsap";
export default {
  name: 'app',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      showDialog: false,
      pe: null,
      loadingPath: 'static/img/',
      current: -1,
      show: false,
      motionObj: [],
      swiperOption: {
        direction: "vertical",
        onSetTransition: (g) => {
          if (this.current != g.activeIndex) {
            this.motionObj[g.activeIndex].restart();
          }
          this.current = g.activeIndex;
        }
      },
      omgShare: JSON.stringify({
        attrs: {
          targetName: 'mid_share'
        }
      }),
      starShow: false,
      token: ''
    }
  },
  mounted() {
    Omega.sendPageView();
    this.token = this.getQueryString()['token'] || this.getQueryString()['ticket'] || "";
    this.$nextTick(() => {
      this.initAnimation();
      this.initLoading();
    });
  },
  methods: {
    getQueryString: function(url) {
      url = url ?
        url :
        '';
      var queryString = url.split('?')[1] ?
        url.split('?')[1] :
        ((location.search.length) ?
          location.search.substr(1) :
          '');
      var aParams = queryString.split('&');
      var arr = null;
      var result = {};
      for (var i = 0; i < aParams.length; i++) {
        arr = aParams[i].split('=');
        var title = arr[0];
        var lastArr = arr.shift();
        var detail = arr.join('=');
        if (title.length > 0) {
          result[title] = decodeURIComponent(detail);
        }
      }
      return result;
    },

    share() {
      let url = window.location.href.split('?')[0];
      if (!this.token) {
        this.starShow = true;
      }
      const initsc = {
        share_title: '月球直播第一人非他莫属',
        share_content: '兔司机应滴滴之托，做了一场中秋月球之旅的直播',
        share_url: url,
        share_icon_url: 'https://img-hxy021.didistatic.com/static/ecomgz/31847d6c92ea4a01a9647d0af4741d05'
      };
      didi.dbridge.initEntrance({
        'share_weixin_appmsg': initsc,
        'share_weixin_timeline': initsc,
        'share_sms': {    
          'phone': '',
          'content': ''
        }
      });
      setTimeout(function() {
        didi.dbridge.invokeEntrance();
      }, 500);
    },
    closeFn() {
      this.showDialog = false;
    },
    showDialogFn() {
      this.showDialog = true;
    },
    initLoading: function() {
      var j = this,
        f = new createjs.LoadQueue(false),

        i = [{
          src: this.loadingPath + "p1-bg.png"
        }, {
          src: this.loadingPath + "p4-bg.png"
        }, {
          src: this.loadingPath + "p5-bg.png"
        }];

      function h(k) {
        $(".loadingtxt").text(Math.ceil(k.loaded * 100) + "%")
      }

      function g(k) {
        $(".loading").hide();
        j.motionObj[0].restart();
        $(".main").fadeIn(function() {})
      }
      f.addEventListener("progress", h);
      f.addEventListener("complete", g);
      f.setMaxConnections(1);
      f.loadManifest(i)
    },
    initAnimation() {
      for (var f = 0; f < 6; f++) {
        this.motionObj.push(new TimelineMax());
      }


      this.motionObj[0].from('.p1car,.p1title', .8, {
        x: '200%',
        ease: Back.easeOut,
      }).from('.p1car', .1, {
        y: -5,
        yoyo: true,
        repeat: -1,
        ease: Linear.easeNone,
      })

      this.motionObj[0]
      .staggerFrom(
        ['.p1t1', '.p1t2', '.p1t3', '.p1t4', '.p1t5'], 1, {
          opacity: 0,
          x: 50,
          ease: Elastic.InOut
        },0.5)

      this.motionObj[0].pause();

      this.motionObj[1].to('.wrap', .5, {
        rotation: -35,
        ease: Bounce.In
      }).to('.wrap', .5, {
        rotation: 30,
        ease: Bounce.In
      }).to('.wrap', .5, {
        rotation: -15,
        ease: Bounce.Out
      }).to('.wrap', .8, {
        rotation: 15,
        ease: Bounce.Out
      }).to('.wrap', .8, {
        rotation: -7,
        ease: Bounce.Out
      }).to('.wrap', 1, {
        rotation: 5,
        ease: Bounce.Out
      }).to('.wrap', 1, {
        rotation: 0,
        ease: Bounce.Out
      });
      this.motionObj[1].pause();
      this.motionObj[2].from('.p3car', .5, {
        x: '200%',
        ease: Linear.easeNone,
      }).from('.p3car', .1, {
        x: 5,
        ease: Linear.easeIn,
      }).from('.p3car', .1, {
        x: -5,
        ease: Linear.easeIn,
      }).from('.p3car', .1, {
        y: -5,
        yoyo: true,
        repeat: -1,
        ease: Linear.easeNone,
      });
      this.motionObj[2].from('.p3t1', .5, {
        opacity: 0,
        y: -50,
        ease: Linear.easeNone
      }).from('.p3t2', .5, {
        opacity: 0,
        y: -50,
        ease: Linear.easeNone
      }).from('.p3t3', .5, {
        opacity: 0,
        y: -50,
        ease: Linear.easeNone
      }).from('.p3t4', .5, {
        opacity: 0,
        y: -50,
        ease: Linear.easeNone
      }).from('.p3t5', .5, {
        opacity: 0,
        y: -50,
        ease: Linear.easeNone
      })


      this.motionObj[2].pause();

      this.motionObj[3].from('.p4car', .5, {
        x: '200%',
        ease: Linear.easeNone,
      }).from('.p4car', .1, {
        x: 5,
        ease: Linear.easeIn,
      }).from('.p4car', .1, {
        x: -5,
        ease: Linear.easeIn,
      }).from('.p4car', .1, {
        y: -5,
        yoyo: true,
        repeat: -1,
        ease: Linear.easeNone,
      });

      this.motionObj[3].from('.p4t1', .5, {
        opacity: 0,
        y: -50,
        ease: Linear.easeNone
      }).from('.p4t2', .5, {
        opacity: 0,
        y: -50,
        ease: Linear.easeNone
      }).from('.p4t3', .5, {
        opacity: 0,
        y: -50,
        ease: Linear.easeNone
      }).from('.p4t4', .5, {
        opacity: 0,
        y: -50,
        ease: Linear.easeNone
      }).from('.p4t5', .5, {
        opacity: 0,
        y: -50,
        ease: Linear.easeNone
      })
      this.motionObj[3].pause();

      this.motionObj[4].from('.p5car', .3, {
        x: '200%',
        ease: Linear.easeNone,
      }).from('.p5car', .1, {
        x: 5,
        ease: Linear.easeIn,
      }).from('.p5car', .1, {
        x: -5,
        ease: Linear.easeIn,
      }).from('.p5car', .1, {
        y: -5,
        yoyo: true,
        repeat: -1,
        ease: Linear.easeNone,
      });

      this.motionObj[4].from('.p5t1', .5, {
        opacity: 0,
        y: -50,
        ease: Linear.easeNone
      }).from('.p5t2', .5, {
        opacity: 0,
        y: -50,
        ease: Linear.easeNone
      }).from('.p5t3', .5, {
        opacity: 0,
        y: -50,
        ease: Linear.easeNone
      }).from('.p5t4', .5, {
        opacity: 0,
        y: -50,
        ease: Linear.easeNone
      }).from('.p5t5', .5, {
        opacity: 0,
        y: -50,
        ease: Linear.easeNone
      })



      this.motionObj[4].pause();


      this.motionObj[5].from('.p6t1', .5, {
        opacity: 0,
        x: 50,
        ease: Linear.easeNone
      }).from('.p6t2', .5, {
        opacity: 0,
        x: 50,
        ease: Linear.easeNone
      }).from('.p6t3', .5, {
        opacity: 0,
        x: 50,
        ease: Linear.easeNone
      }).from('.p6t4', .5, {
        opacity: 0,
        x: 50,
        ease: Linear.easeNone
      }).from('.p6t5', .5, {
        opacity: 0,
        x: 50,
        ease: Linear.easeNone
      }).from('.p6t6', .5, {
        opacity: 0,
        x: 50,
        ease: Linear.easeNone
      }).from('.p6t7', .5, {
        opacity: 0,
        x: 50,
        ease: Linear.easeNone
      }).from('.p6t8', .5, {
        opacity: 0,
        x: 50,
        ease: Linear.easeNone
      })
      this.motionObj[5].pause();
    }
  }
}
</script>

<style scoped lang="stylus">
random(min,max)
  return floor(math(0, 'random')*(max - min + 1) + min)

html,body
  height: 100%;
  width: 100%;
@import './assets/css/px2rem.styl';
#app
    width: 100%;
    height: 100%;
    .loading
      position: absolute;
      text-align: center;
      z-index: 10000;
      width: 100%;
      height: 100%;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      .loadingtxt
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        font-size: px2rem(80)
        text-align: center;
      .loadtxt
        font-size: px2rem(32);
        text-align: center;
    .swiper-slide
        overflow: hidden;

    .swiper-container
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;

    .swiper-wrapper
        width: 100%;
        height: 100%;
        position: relative;

    .loading
      height: 100%;
    .move
        position: absolute;
    .arrow
      width: px2rem(100)
      height: px2rem(100);
      position: absolute;
      bottom: 10px;
      margin: 0 auto;
      left: 50%;
      transform: translateX(-50%);
      img
        width: 100% !important;
        height: unset !important;
    .page1_bg
        background: url('./assets/img/p1-bg.png') no-repeat;
        height: 100%;
        background-color: #f4f2ef;
        overflow: hidden;
        background-size: 100%;
        .p1car
          top:px2rem(150);
          left:px2rem(150);
          width: px2rem(442);
          height: px2rem(175);
          img
            width: 100%;
            height: 100%;
            display:block;
        .p1title
          top:px2rem(300);
          left:px2rem(150);
          width: px2rem(476);
          height: px2rem(88);
          img
            width: 100%;
            height: 100%;
            display:block;
        .cloud1
          top:px2rem(350);
          left:px2rem(-80)
          width: px2rem(442);
          height: px2rem(222);
          animation:4s cloud1 2 alternate
          @keyframes cloud1
              from
                transform:  translateX(px2rem(0)) scale(1)
              to
                animation-play-state:paused;
                transform:  translateX(px2rem(900)) scale(1.4)
          img
            width: 100%;
            height: 100%;
            display:block
        .cloud2
          top:px2rem(400);
          left:px2rem(500);
          width: px2rem(166);
          height: px2rem(140);
          animation:4s cloud2 2 alternate
          @keyframes cloud2
              from
                transform:  translateX(px2rem(0)) scale(1)
              to
                animation-play-state:paused;
                transform:  translateX(px2rem(-650)) scale(0.8)
          img
            width: 100%;
            height: 100%;
            display:block;
        .p1text
          top:px2rem(540);
          left:px2rem(190);
          .p1t1
            left:px2rem(70)
            width: px2rem(230)
            height: px2rem(32)
          .p1t2
            top:px2rem(50)
            left:px2rem(0)
            width: px2rem(377)
            height: px2rem(32)
          .p1t3
            top:px2rem(100)
            left:px2rem(0)
            width: px2rem(379)
            height: px2rem(32)
          .p1t4
            top:px2rem(150)
            left:px2rem(40)
            width: px2rem(289)
            height: px2rem(32)
          .p1t5
            top:px2rem(200)
            left:px2rem(120)
            width: px2rem(142)
            height: px2rem(32)


    .page2_bg
        background: url('./assets/img/p1-bg.png') no-repeat;
        height: 100%;
        background-color: #f4f2ef;
        overflow: hidden;
        background-size: 100%;
        .card,.dot,.dotWrap
          z-index: 99;
        .p2title
          top:px2rem(100);
          left:px2rem(300);
          width: px2rem(147);
          height: px2rem(37);
          img
            width: 100%;
            height: 100%;
            display:block;
        .bigmoon
          top:px2rem(330);
          left:px2rem(67);
          width: px2rem(622);
          height: px2rem(622);
          img
            width: 100%;
            height: 100%;
            display:block;
        .wrap
          top:px2rem(245);
          left:px2rem(25);
          width: px2rem(710);
          height: px2rem(805);
          img
            width: 100%;
            height: 100%;
            display:block;
        .map

          top:px2rem(335);
          left:px2rem(80);
          width: px2rem(615);
          height: px2rem(618);
          img
            width: 100%;
            height: 100%;
            display:block;
        .card1
          top:px2rem(421);
          left:px2rem(359);
          width: px2rem(35);
          height: px2rem(113);
          img
            width: 100%;
            height: 100%;
            display:block;
        .card2
            top:px2rem(687);
            left:px2rem(531);
            width: px2rem(45);
            height: px2rem(112);
          img
            width: 100%;
            height: 100%;
            display:block;
        .card3

          top:px2rem(760);
          left:px2rem(170);
          width: px2rem(35);
          height: px2rem(85);
          img
            width: 100%;
            height: 100%;
            display:block;
        .dot1
          top:px2rem(462);
          left:px2rem(325);
          width: px2rem(15);
          height: px2rem(15);
          img
            width: 100%;
            height: 100%;
            display:block;
        .dotWrap1
          top:px2rem(455);
          left:px2rem(318);
          width: px2rem(29);
          height: px2rem(29);
          img
            width: 100%;
            height: 100%;
            display:block;
        .dot2

          top:px2rem(732);
          left:px2rem(492);
          width: px2rem(15);
          height: px2rem(15);
          img
            width: 100%;
            height: 100%;
            display:block;
        .dotWrap2
            top:px2rem(726);
            left:px2rem(485);
            width: px2rem(29);
            height: px2rem(29);
            img
              width: 100%;
              height: 100%;
              display:block;
        .dot3
          top:px2rem(812);
          left:px2rem(238);
          width: px2rem(15);
          height: px2rem(15);
          img
            width: 100%;
            height: 100%;
            display:block;
        .dotWrap3

            top:px2rem(805);
            left:px2rem(230);
            width: px2rem(29);
            height: px2rem(29);
            img
              width: 100%;
              height: 100%;
              display:block;
        .dotWrap
          z-index: 5;
          animation: dotWrap 1s infinite  alternate-reverse
          @keyframes dotWrap
            0%
              opacity:0
              transform: scale(0.8)
            100%
              opacity:1
              transform: scale(1.5)

    .page3_bg
      background: url('./assets/img/p5-bg.png') no-repeat;
      height: 100%;
      background-color: #f4f2ef;
      overflow: hidden;
      background-size: 100%;
      .p3car
        top:px2rem(900);
        left:px2rem(5);
        width: px2rem(752);
        height: px2rem(291);
        img
          width: 100%;
          height: 100%;
          display:block;
      .p3text
          top: px2rem(100);
          left:px2rem(300);

          .p3t1
              top: px2rem(-50);
              left:px2rem(280)
              width: px2rem(117)
              height: px2rem(302)
          .p3t2
              left:px2rem(200)
              width: px2rem(29)
              height: px2rem(305)
          .p3t3
              left:px2rem(150)
              width: px2rem(36)
              height: px2rem(319)
          .p3t4
              left:px2rem(100)
              width: px2rem(28)
              height: px2rem(380)
          .p3t5
              left:px2rem(50)
              width: px2rem(28)
              height: px2rem(264)
      .tree
        width: px2rem(536);
        height: px2rem(509);
        top: px2rem(280);
        left:px2rem(-35);
        animation:3s tree infinite forwards
        @keyframes tree
          10%,12%,14%,16%,100%
            transform:translateX(px2rem(0))
          11%,13%,15%
            transform:translateX(px2rem(20))
        img
          width: 100%;
          height: 100%;
          display:block;
      .flower
        width: px2rem(28);
        height: px2rem(24);
        img
          width: 100%;
          height: 100%;
          display:block;
        @keyframes flower1
          0%,19%
            opacity:0
          20%
            opacity:1
            transform:translateX(px2rem(0))
          90%,100%
            opacity:1
            transform:translateX(px2rem(20))
            transform:rotate(random(-30,30)deg) translateX(px2rem(random(10,100))) translateY(px2rem(random(900,1200)))

        @keyframes flower2
            0%,19%
              opacity:0
            20%
              opacity:1
              transform:translateX(px2rem(0))
            90%,100%
              opacity:1
              transform:translateX(px2rem(20))
              transform:rotate(random(-30,30)deg) translateX(px2rem(random(10,100))) translateY(px2rem(random(900,1200)))
        @keyframes flower3
            0%,19%
              opacity:0
            20%
              opacity:1
              transform:translateX(px2rem(0))
            90%,100%
              opacity:1
              transform:translateX(px2rem(20))
              transform:rotate(random(-30,30)deg) translateX(px2rem(random(10,100))) translateY(px2rem(random(900,1200)))
      .f1
        top: px2rem(300);
        left: px2rem(250);
        transform:scale(1.3)
        animation:3s flower1 infinite forwards normal
      .f2
        top: px2rem(240);
        left: px2rem(50);
        transform:scale(1.5)
        animation:3s flower2 infinite forwards normal
      .f3
        top: px2rem(250);
        left: px2rem(200);
        transform:scale(2)
        animation:3s flower3 infinite forwards normal
      .f4
        top: px2rem(240);
        left: px2rem(150);
        transform:scale(.8)
        animation:3s flower1 infinite forwards normal
      .f5
        top: px2rem(250);
        left: px2rem(350);
        transform:scale(2.2)
        animation:3s flower2 infinite forwards normal
      .f6
          top: px2rem(200);
          left: px2rem(400);
          transform:scale(1.3)
          animation:3s flower3 infinite forwards normal
      .f7
          top: px2rem(230);
          left: px2rem(300);
          transform:scale(2.2)
          animation:3s flower3 infinite forwards normal
      .man
        width: px2rem(107);
        height: px2rem(245);
        top: px2rem(570);
        left:px2rem(330);
        img
          width: 100%;
          height: 100%;
          display:block;
      .arm
        width: px2rem(222);
        height: px2rem(75);
        top: px2rem(610);
        left:px2rem(180);
        transform-origin:90% 10%
        img
          width: 100%;
          height: 100%;
          display:block;
        animation:3s arm infinite forwards
        @keyframes arm
          70%,85%,95%
            transform:rotate(0deg)
          75%,80%,90%
            transform:rotate(30deg)
          100%
            transform:rotate(-360deg)

    .page4_bg
        background: url('./assets/img/p4-bg.png') no-repeat;
        height: 100%;
        background-color: #f4f2ef;
        overflow: hidden;
        background-size: 100%;
      .p4car
          top:px2rem(890)
          left: px2rem(-10);
          width: px2rem(749);
          height: px2rem(288);
          img
              width: 100%;
              height: 100%;
              display:block;

      .p4text
          top: px2rem(100);
          left:px2rem(300);
        .p4t1
              top: px2rem(-50);
              left:px2rem(280)
              width: px2rem(117)
              height: px2rem(303)
          .p4t2
              left:px2rem(200)
              width: px2rem(27)
              height: px2rem(444)
          .p4t3
              left:px2rem(150)
              width: px2rem(34)
              height: px2rem(522)
          .p4t4
              left:px2rem(100)
              width: px2rem(28)
              height: px2rem(319)
          .p4t5
              left:px2rem(50)
              width: px2rem(27)
              height: px2rem(369)

      .r1
        top:px2rem(440)
        left:px2rem(550)
        transform:scale(0.3)
      .r2
        top:px2rem(680)
        left:px2rem(550)
      .r3
        top:px2rem(670)
        left:px2rem(200)
        transform:scale(0.7)
      .r4
        top:px2rem(595)
        left:px2rem(2)
        transform:scale(0.4)
      .r5
        top:px2rem(580)
        left:px2rem(330)
        transform:scale(0.5)
      .radish
        width: px2rem(80);
        height: px2rem(253);
        top: px2rem(-35);
        left:px2rem(-50);
        img
          width: 100%;
          height: 100%;
          display:block;
          animation: radish 0.5s infinite  alternate-reverse
          @keyframes radish
            from
              transform:translateY(px2rem(30)) rotate(10deg)
            to
              transform:translateY(px2rem(-15)) rotate(5deg)

      .rabbit
          width: px2rem(129);
          height: px2rem(242);
          img
            width: 100%;
            height: 100%;
            display:block;
      .rhead
        animation: rhead 0.5s infinite  alternate-reverse
        @keyframes rhead
          from
            transform:rotate(-4deg)
            transform-origin:90% 50%
          to
            transform:rotate(5deg)
            transform-origin:90% 50%
      .leg
          z-index: 99;
          top:px2rem(95);
          left:px2rem(0)
          width: px2rem(71);
          height: px2rem(65);
          img
            width: 100%;
            height: 100%;
            display:block;
            animation: leg 0.5s infinite  alternate-reverse
            @keyframes leg
                from
                  transform:rotate(0deg)
                  transform-origin:100% 0%
                to
                  transform:rotate(50deg)
                  transform-origin:100% 0%
      .p5text
          top: px2rem(100);
          left:px2rem(300);
        .p5t1
              top: px2rem(-50);
              left:px2rem(280)
              width: px2rem(118)
              height: px2rem(305)
          .p5t2
              left:px2rem(200)
              width: px2rem(27)
              height: px2rem(445)
          .p5t3
              left:px2rem(150)
              width: px2rem(28)
              height: px2rem(364)
          .p5t4
              left:px2rem(100)
              width: px2rem(36)
              height: px2rem(352)
          .p5t5
              left:px2rem(50)
              width: px2rem(28)
              height: px2rem(183)
    .page5_bg
          background: url('./assets/img/p5-bg.png') no-repeat;
          height: 100%;
          background-color: #f4f2ef;
          overflow: hidden;
          background-size: 100%;
        .p5car
            z-index: 99;
            top:px2rem(900)
            left: px2rem(-10);
            width: px2rem(749);
            height: px2rem(288);
            img
              width: 100%;
              height: 100%;
              display:block;
        .house
          width: px2rem(462);
          height: px2rem(426);
          top: px2rem(317);
          left:px2rem(-50);
          img
            width: 100%;
            height: 100%;
            display:block;
            animation: house 4s infinite  forwards normal
            @keyframes house
                83%,86%,88%,90%
                    transform: translateX(px2rem(-30))
                84%,85%,87%,89%
                    transform: translateX(px2rem(20))
                0%,82%,100%
                    transform:  translateY(px2rem(0))
        .body
            top: px2rem(700);
            left: px2rem(360);
            width: px2rem(136);
            height: px2rem(232);
            img
              width: 100%;
              height: 100%;
              display:block;
        .head
          width: px2rem(84);
          height: px2rem(138);
          top:px2rem(610)
          left: px2rem(400)
          img
            width: 100%;
            height: 100%;
            display:block;
          animation: head 4s infinite  forwards normal
          @keyframes head
              0%
                  transform: scale(1)
              70%,73%
                  transform: scale(1) rotate(-10deg) translateY(px2rem(9))
                  transform-origin:50% 50%
              77%,83%,90%,97%
                  transform: scale(1.2) rotate(3deg)translateY(px2rem(-2))
                  transform-origin:50% 50%
              80%,87%,93%
                  transform: scale(1) rotate(-10deg)translateY(px2rem(3))
                  transform-origin:50% 50%
              100%
                  transform: scale(1) rotate(0)
                  transform-origin:0% 100%

        .stone
          width: px2rem(588);
          height: px2rem(204);
          top:px2rem(800)
          left: px2rem(100)
          animation: stone 4s infinite  forwards normal
          @keyframes stone
              83%,90%
                  transform:translateY(px2rem(-600)) translateX(px2rem(-10))
                  transform-origin:50% 50%

                //  transform:translateY(px2rem(-600)) translateX(px2rem(10))
              0%,82%,100%
                  transform:  translateY(px2rem(0))


          img
            width: 100%;
            height: 100%;
            display:block;

    .page6_bg
        background: url('./assets/img/p1-bg.png') no-repeat;
        height: 100%;
        background-color: #f4f2ef;
        overflow: hidden;
        background-size: 100%;
        .star
          position: absolute;
          animation: star 2s infinite linear;
          display: none;
          &.starShow
            display: block;
        .moon
          top:px2rem(-210)
          left: px2rem(165);
          width: px2rem(423);
          height: px2rem(423);
          img
            width: 100%;
            height: 100%;
            display:block;
          animation: moon 8s infinite linear
          @keyframes moon
            from
              transform: rotate(0)
            to
              transform:  rotate(360deg)

        .p6title1
          width: px2rem(261);
          height: px2rem(61);
          top: px2rem(870);
          left:px2rem(264);
          animation: title1 1s infinite alternate
          @keyframes title1
            from
                transform: scale(1)
            to
                transform: scale(1.2)
          img
            width: 100%;
            height: 100%;
            display:block;
        .p6text
          top:px2rem(340);
          left:px2rem(230);
          .p6t1
            left:px2rem(120)
            width: px2rem(50)
            height: px2rem(32)
          .p6t2
            top:px2rem(50)
            left:px2rem(10)
            width: px2rem(276)
            height: px2rem(33)
          .p6t3
            top:px2rem(100)
            left:px2rem(40)
            width: px2rem(226)
            height: px2rem(33)
          .p6t4
            top:px2rem(150)
            left:px2rem(40)
            width: px2rem(227)
            height: px2rem(33)
          .p6t5
            top:px2rem(200)
            left:px2rem(120)
            width: px2rem(50)
            height: px2rem(32)
          .p6t6
            top:px2rem(250)
            left:px2rem(90)
            width: px2rem(100)
            height: px2rem(33)
          .p6t7
            top:px2rem(300)
            left:px2rem(50)
            width: px2rem(201)
            height: px2rem(33)
          .p6t8
            top:px2rem(350)
            left:px2rem(80)
            width: px2rem(136)
            height: px2rem(32)
        @keyframes star
          from
            left: 0%;
            top: 50%
          to
            // transform:  rotate(360deg)
            left: 95%;
            top: -30%;

</style>
