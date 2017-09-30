<template>
<div class='hello' :class='{isload:show}'>
  <div class="content" v-if='!show'>
    <div class="klam">
      <p></p>
      <div class='move'>
        <div class="noor one"></div>
        <div class="noor two"></div>
      </div>
    </div>

  </div>
  <div class='page'>
    <div class="bg">
      <div class="item l1"><img src="../assets/l-1.png"></div>
      <div class="item l2 b"><img src="../assets/l-2.png"></div>
      <div class="item r1"><img src="../assets/r-1.png"></div>
      <!--右侧人物-->
      <div class="item rp1 b"><img src="../assets/rp-1.png"></div>
      <div class="item rp2 b"><img src="../assets/rp-2.png"></div>
      <div class="item rp3 b"><img src="../assets/rp-3.png"></div>
      <!--左侧人物-->
      <div class="item lp1 b"><img src="../assets/lp-1.png"></div>
      <div class="item lp2 b"><img src="../assets/lp-2.png"></div>
      <div class="item lp3 "><img src="../assets/lp-3.png"></div>
      <div class="item vs "><img src="../assets/vs.png"></div>
      <div class="item logo "><img src="../assets/logo.png"></div>
    </div>
    <mainPage></mainPage>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
require('swiper/dist/css/swiper.css')

import 'yuki-createjs'
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'

import {
  TweenMax
} from "gsap";

import mainPage from './main';

export default {
  name: 'hello',
  components: {
    swiper,
    swiperSlide,
    mainPage
  },
  data() {
    return {
      pe: null,
      loadingPath: 'static/img/',
      show: false,
      swiperOption: {
        speed: 1000,
        direction: 'vertical',
        // mousewheelControl: true
      }
    }
  },
  mounted() {
    this.pe = $(window).width() / 3700;
    // this.initviews();
    this.$nextTick(() => {
      // this.createloading();
      this.initLoading();
    });
  },
  methods: {
    initLoading: function() {
      var _this = this;
      var loader = new createjs.LoadQueue(false);
      var manifest = [
        {
          src: this.loadingPath + 'l-1.png'
        },
        {
          src: this.loadingPath + 'l-2.png'
        },
        {
          src: this.loadingPath + 'r-1.png'
        },
        {
          src: this.loadingPath + 'rp-1.png'
        },
        {
          src: this.loadingPath + 'rp-2.png'
        },
        {
          src: this.loadingPath + 'rp-3.png'
        },
        {
          src: this.loadingPath + 'lp-1.png'
        },
        {
          src: this.loadingPath + 'lp-2.png'
        },
        {
          src: this.loadingPath + 'lp-3.png'
        },
        {
          src: this.loadingPath + 'vs.png'
        },
        {
          src: this.loadingPath + 'logo.png'
        }
				];

      function handleOverallProgress(event) {}

      function handleOverallComplete(event) {
        setTimeout(() => {
          _this.show = true;
          _this.$nextTick(() => {
            _this.initviews();
          });
        }, 2000);
      }
      loader.addEventListener("progress", handleOverallProgress);
      loader.addEventListener("complete", handleOverallComplete);
      loader.setMaxConnections(1);
      loader.loadManifest(manifest);
    },
    initviews: function() {
      var views = {
        l1: {
          width: 468,
          left: 950,
          top: 146,
          float: 1
        },
        l2: {
          width: 234,
          left: 155,
          bottom: 140,
          float: 1
        },
        r1: {
          width: 1026,
          left: -1226,
          top: 180,
          float: 1
        },
        lp1: {
          width: 704,
          left: -920,
          bottom: 130,
        },
        lp2: {
          width: 1367,
          left: -1667,
          bottom: 176,
        },
        lp3: {
          width: 527,
          left: -1867,
          top: 80,
        },
        rp1: {
          width: 439,
          left: 280,
          bottom: 140
        },
        rp2: {
          width: 630,
          left: 600,
          bottom: 170
        },
        rp3: {
          width: 1944,
          left: -100,
          bottom: 170
        },
        vs: {
          width: 1004,
          top: 0,
          left: -502
        },
        logo: {
          width: 1735,
          left: -900,
          top: 160
        }
      }
      for (var item in views) {
        this.computeViews(`.${item}`, views[item]);
      }
      this.itemAnimation();
    },
    computeViews: function(dom, opt) {
      if (opt.top != undefined) {
        $(dom).css({
          width: this.pe * opt.width + 'px',
          margin: this.pe * opt.top + 'px' + ' 0 0 ' + this.pe * opt.left + 'px'
        });
      } else if (opt.bottom) {
        $(dom).css({
          width: this.pe * opt.width + 'px',
          margin: '0 0 ' + this.pe * opt.bottom + 'px' + ' ' + this.pe * opt.left + 'px'
        });
      }
      if (opt.float) {
        this.floatAnimation(dom);
      }
    },
    itemAnimation() {
      let me = this;
      TweenMax.from('.lp1', .4, {
        delay: .8,
        scale: .1,
        x: -1000,
        ease: Linear.easeNone,
      });

      TweenMax.from('.rp1', .4, {
        delay: 1.6,
        scale: .1,
        x: 1000,
        ease: Linear.easeNone,
      });

      TweenMax.from('.lp2', .4, {
        delay: 2.4,
        scale: .1,
        x: -1000,
        ease: Linear.easeNone,
      });

      TweenMax.from('.rp2', .4, {
        delay: 3.2,
        scale: .1,
        x: 1000,
        ease: Linear.easeNone,
      })

      TweenMax.from('.lp3', .4, {
        delay: 4,
        scale: .1,
        x: -1000,
        ease: Bounce.easeOut,
      });

      TweenMax.from('.rp3', .4, {
        delay: 4.8,
        scale: 0,
        x: 1000,
        ease: Linear.easeNone,
      })

      TweenMax.from('.vs', .6, {
        delay: 6.4,
        scale: 0,
        ease: Linear.easeNone,
        onComplete: () => {
          TweenMax.to('.vs', .8, {
            delay: .5,
            scale: .4,
            y: 800 * me.pe,
            ease: Linear.easeNone,
          });
        }
      });

      TweenMax.from('.logo', .5, {
        delay: 9,
        scale: 0,
        ease: Linear.easeNone,
      });

    },
    floatAnimation: function(dom) {
      TweenMax.to(dom, .2, {
        y: -5,
        yoyo: true,
        repeat: -1,
        ease: Linear.easeNone
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content {
    position: relative;
    margin: 0 auto;
    height: 100%;
    background: #000;
    z-index: 10000;
}

p {
    margin: 0;
    padding: 0;
    font-size: 90px;
}

.klam {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    margin-left: -300px;
    height: 140px;
    margin-top: -70px;
    color: #000;
    z-index: 1;
    animation: shadow 5.0s ease-in-out infinite;
    p {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
    .move {
        position: relative;
        height: 100%;
        width: 100%;
    }
}

.noor {
    position: absolute;
    top: 50%;
    left: 50px;
    height: 140px;
    width: 140px;
    margin-top: -70px;
    opacity: 0.8;
    border-radius: 100px;
    z-index: 0;
    background: -webkit-radial-gradient(center, ellipse cover, #fff 0%, rgba(255, 255, 255, 0.2) 100%);
    box-shadow: 0 0 50px #fff;
    animation: noor 5.0s ease-in-out infinite;

    background-image: url('../assets/df.jpg');
    background-position: center;
    // background-size: cover;
}

.two {
    z-index: 2;
    opacity: 0.8;
}
@-webkit-keyframes noor {
    0% {
        left: 45px;
        background-position: 45px;
    }
    50% {
        left: 335px;
        background-position: 335px;
    }
    75% {
        left: 500px;
        background-position: 500px;
    }
    100% {
        left: 45px;
        background-position: 45px;
    }
}
@-webkit-keyframes shadow {
    0% {
        text-shadow: -9px 1px 4px #000;
    }
    50% {
        text-shadow: 9px 1px 4px #000;
    }
    100% {
        text-shadow: -9px 1px 4px #000;
    }
}
.hello {
    width: 100%;
    height: 100%;
    overflow: hidden;
    &.isload{
      overflow: auto;
    }
}
.nuload {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
}
.page {
    height: 100%;
}
.swiper-container {
    height: 100%;
}
.bg {
    width: 100%;
    height: 100%;
    background: url('../assets/bg.png') no-repeat 50%/cover;
    background-position: bottom;
    position: relative;
    .item {
        position: absolute;
        left: 50%;
        // top: 0;
        img {
            display: block;
            width: 100%;
        }
        &.b {
            bottom: 0;
        }
        &.t {
            top: 0;
        }

        &.lp2 {
            z-index: 2;
        }
        &.lp3 {
            z-index: 1;
        }
    }
}
</style>
