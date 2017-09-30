// JavaScript Document
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define("DidiJsDBridge", [], function() {
            return (root.DidiJsDBridge = factory(root));
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(root);
    } else {
        // Browser globals
        root.DidiJsDBridge = factory(root);
    }
}(typeof window == "undefined" ? this : window, function(win) {
    if (!win.document) {
        return {};
    }

    "use strict";

    window.didi = window.didi || {};
    window.didi.dbridge = window.didi.dbridge || {};
    window.didi.dbridgeTool = window.didi.dbridgeTool || {};
    var initFlag = false;
    var ua = window.navigator.userAgent,
        isAndroid = /android/i.test(ua);

    //版本判断
    var Version = {
        BasicAdrSupportVersion: '2030200',
        BasicIOSSupportVersion: '1000000',

        // 将形如13.1.22.1的版本号转换为13012201的数字，用于比较
        parse: function(version) {
            var ret = [];
            version = version || "";
            version = version.split(".");
            version.length = 4;

            for (var i = 0; i < 4; i++) {
                var n = version[i];
                if (n) {
                    ret.push(n > 10 ? n : "0" + n);
                } else {
                    ret.push("00");
                }
            }
            return parseInt(ret.join(""), 10);
        },
        //安卓下获取UA标识司机端
        getAdrVersion: function() {
            var reg = /didigsui.*_(.+)_\d+$/ig,
                match = reg.exec(ua);
            if (!match) {
                console.log('It isn\'t be Android driver app!');
                return false;
            }
            return Version.parse(match[1]);
        },
        //安卓下获取UA标识司机端--出租车
        getTaxiAdrVersion: function() {
            var reg = /ddTaxiDriverAndroid.*_(.+)_\d+$/ig,
                match = reg.exec(ua);
            if (!match) {
                console.log('It isn\'t be Android Taxi driver app!');
                return false;
            }
            return Version.parse(match[1]);
        },
        //iOS下获取UA标识司机端，第一版之后的版本才支持该UA头探测
        getIOSVersion: function() {
            var reg = /ddudriver.*_(.+)$/ig,
                match = reg.exec(ua);
            if (!match) {
                console.log('It isn\'t be iOS driver app!');
                return false;
            }
            return Version.parse(match[1]);
        },
        //iOS下获取UA标识司机端--出租车
        getTaxiIOSVersion: function() {
            var reg = /ddTaxiDriverIos.*_(.+)$/ig,
                match = reg.exec(ua);
            if (!match) {
                console.log('It isn\'t be iOS Taxi driver app!');
                return false;
            }
            return Version.parse(match[1]);
        }
    };

    //iOS司机端从第一个版本即支持DidiJSBridge
    Version.supportBridge = (function() {
        var isSupport = true,
            adrVersion;
        if ((adrVersion = Version.getAdrVersion()) && adrVersion < Version.BasicAdrSupportVersion) {
            isSupport = false;
        }
        return isSupport;
    })();

    console.log('addEventListener');

    document.addEventListener("DidiJSBridgeReady", function() {
        console.log('DidiJSBridgeReady');
        if (!initFlag) {
            window.DidiJSBridge.init && window.DidiJSBridge.init();
            initFlag = true;
        }
        window.DidiJSBridge.callHandler.apply(null, params);
    }, false);


    var Router = {
        handleBridge: function() {
            var params = arguments;

            if (typeof window.DidiJSBridge != "undefined") {

                if (!initFlag) {
                    window.DidiJSBridge.init && window.DidiJSBridge.init();
                    initFlag = true;
                }
                try {
                    window.DidiJSBridge.callHandler.apply(null, params);
                } catch (e) {
                    alert(e);
                }
            }
        },
        //微信朋友圈params = {title:'', url:'', descript:'', imageUrl:''}
        'weixin_timeline': function(params) {
            if (Version.supportBridge) {
                if (Version.getAdrVersion() === false && typeof window.DidiJSBridge != 'undefined') {
                    didi.app && didi.app.share && didi.app.share("weixin_timeline", {
                        url: params.url,
                        title: params.title,
                        desc: params.descript,
                        icon: params.imageUrl
                    });
                } else {
                    params.isFriendCircle = true;
                    Router.handleBridge('callWXShare', params, function() {});
                }
            } else {
                window.jsWebView.callWXShare(params.title, params.url, params.descript, params.imageUrl, true);
            }
        },
        //微信好友params = {title:'', url:'', descript:'', imageUrl:''}
        'share_weixin_appmsg': function(params) {
            if (Version.supportBridge) {
                if (Version.getAdrVersion() === false && typeof window.DidiJSBridge != 'undefined') {
                    didi.app && didi.app.share && didi.app.share("weixin_appmsg", {
                        url: params.url,
                        title: params.title,
                        desc: params.descript,
                        icon: params.imageUrl
                    });
                } else {
                    params.isFriendCircle = false;
                    Router.handleBridge('callWXShare', params, function() {});
                }
            } else {
                window.jsWebView.callWXShare(params.title, params.url, params.descript, params.imageUrl, false);
            }
        },
        //获取通讯信息
        'getContact': function(callback) {
            if (Version.supportBridge) {
                //新的方式，回调参数为{name:'name',phone:'123132'}
                Router.handleBridge('readPhoneContact', null, callback || function() {});
            } else {
                //BasicAdrSupportVersion版本以前读取通讯录之后的回调是js写的一个全局函数，函数名为：resultBackFromJava，回调函数参数为"名字,电话"，格式如：小小,138123123123;
                //先检测是否有resultBackFromJava
                if (!window.resultBackFromJava) {
                    throw 'No resultBackFromJava found in window';
                }
                window.jsWebView.readPhoneContact();
            }
        },
        //压缩图片，目前只有安卓司机端2.1.0及以上版本实现，为了解决一些安卓手机上用canvas压缩图片效率太低的问题
        'resizeImage': function(params, callback) {
            var adrVersion = Version.getAdrVersion();
            if (adrVersion !== false && adrVersion >= Version.parse('2.1.0')) {
                if (Version.supportBridge) {
                    //新的方式，调用后返回{image:'base64串'}
                    Router.handleBridge('resizeImage', params, callback || function() {});
                } else {
                    //125版本以前调用resizeImage后得到的是base64串，使用方法："data:image/jpeg;base64,"+base64串
                    //先检测是否有resultBackFromJava
                    if (!window.resultBackFromJava) {
                        throw 'No resultBackFromJava found in window';
                    }
                    window.jsWebView.resizeImage(params.width, params.height, params.quality);
                }
            } else {
                console.log('Operation resizeImage is not supported!');
            }
        },
        //司机改派订单params = {travelId:'123123',OId:'234234',isSuccess:true,isForbidden:false,dState:'1'}
        //dState表示 休息，继续接单，前往下一站，对应状态：1、2、3
        'orderDetailInfo': function(params) {
            if (Version.supportBridge) {
                Router.handleBridge('orderDetailInfo', params, function() {});
            } else {
                window.jsWebView.orderDetailInfo(JSON.stringify(params));
            }
        },
        'orderReassignState': function(str) {
            //此方法只为iOS服务
            if (Version.getAdrVersion() === false) {
                Router.handleBridge('orderReassignState', str);
            }
        },
        //获取司机当前位置，当前位置以参数形式返回给回调fn，格式为{city: null,name: null,lat: "12.2312",lng: "12.231"}
        'getLocationInfo': function(fn) {
            if (Version.supportBridge) {
                Router.handleBridge('getLocationInfo', {}, fn);
            }
        },
        //启动司机端内置导航,params:{fromName: '', fromLat: "90.3421",fromLng: "14.2342",toName:'', toLat: "91.2312",toLng: "12.231",type:''}
        'launchNav': function(params, fn) {
            if (Version.supportBridge) {
                Router.handleBridge('launchNav', params, fn || function() {});
            }
        },

        'wxPayRequest': function(params, fn) {
            if (Version.supportBridge) {
                var adrVersion = Version.getAdrVersion(),
                    iosVersion = Version.getIOSVersion();
                //安卓和iOS从2.3.9开始支持
                if (adrVersion && adrVersion < Version.parse('2.3.9')) {
                    console.log('android app version lower than 2.3.9 is not supported!');
                    return;
                }
                if (iosVersion && iosVersion < Version.parse('2.3.9')) {
                    console.log('ios app version lower than 2.3.9 is not supported!');
                    return;
                }
                Version.supportBridge && Router.handleBridge('wxPayRequest', params, fn || function() {});
            }
        },


        'aliPayRequest': function(params, fn) {
            if (Version.supportBridge) {
                var adrVersion = Version.getAdrVersion(),
                    iosVersion = Version.getIOSVersion();
                //安卓和iOS从2.6.6开始支持
                if (adrVersion && adrVersion < Version.parse('2.6.6')) {
                    console.log('android app version lower than 2.6.6 is not supported!');
                    return;
                }
                if (iosVersion && iosVersion < Version.parse('2.6.6')) {
                    console.log('ios app version lower than 2.6.6 is not supported!');
                    return;
                }
                Version.supportBridge && Router.handleBridge('aliPayRequest', params, fn || function() {});
            }
        },

        'requestBackPressedControl': function(fn) {
            // alert(1);
            if (Version.supportBridge) {
                var adrVersion = Version.getAdrVersion(),
                    iosVersion = Version.getIOSVersion();
                //安卓和iOS从2.7.4开始支持
                if (adrVersion && adrVersion < Version.parse('2.7.4')) {
                    console.log('android app version lower than 2.7.4 is not supported!');
                    return;
                }
                if (iosVersion && iosVersion < Version.parse('2.7.4')) {
                    console.log('ios app version lower than 2.7.4 is not supported!');
                    return;
                }
                Router.handleBridge('requestBackPressedControl', {}, fn || function() {});
            }
        },

        'cancelBackPressedControl': function(fn) {
            if (Version.supportBridge) {
                var adrVersion = Version.getAdrVersion(),
                    iosVersion = Version.getIOSVersion();
                //安卓和iOS从2.7.4开始支持
                if (adrVersion && adrVersion < Version.parse('2.7.4')) {
                    console.log('android app version lower than 2.7.4 is not supported!');
                    return;
                }
                if (iosVersion && iosVersion < Version.parse('2.7.4')) {
                    console.log('ios app version lower than 2.7.4 is not supported!');
                    return;
                }
                Router.handleBridge('cancelBackPressedControl', {}, fn || function() {});
            }
        },
        openPage: function(url, newWindow, browser, fn) {
            if (Version.supportBridge) {
                var adrVersion = Version.getAdrVersion(),
                    iosVersion = Version.getIOSVersion();
                //安卓和iOS从2.7.4开始支持
                if (adrVersion && adrVersion < Version.parse('2.7.4')) {
                    console.log('android app version lower than 2.7.4 is not supported!');
                    return;
                }
                if (iosVersion && iosVersion < Version.parse('2.7.4')) {
                    console.log('ios app version lower than 2.7.4 is not supported!');
                    return;
                }
                Router.handleBridge('openPage', {
                    url: url,
                    newWindow: newWindow,
                    browser: browser,
                }, fn || function() {});
            }
        },
        openNewWebPage: function(url, fn) {
            //window.location.href = url;
            if (Version.supportBridge) {
                // alert(1);
                var adrVersion = Version.getAdrVersion(),
                    iosVersion = Version.getIOSVersion();
                // alert(iosVersion);
                //首先能够get到 版本信息。 这时候肯定是在 端内
                if (adrVersion || iosVersion) {

                    if (iosVersion && iosVersion == Version.parse('2.7.6')) {
                        window.location.href = url;
                        return;
                    }

                    //安卓和iOS从2.7.4开始支持
                    if ((adrVersion && adrVersion < Version.parse('2.7.4')) || (iosVersion && iosVersion < Version.parse('2.7.4'))) {
                        let appName = adrVersion ? 'android' : 'ios'
                        console.log(`${appName} app version lower than 2.7.4 is not supported!`);
                        //fn && fn();
                        window.location.href = url;
                        return;
                    }

                    //去除 ticket 并且去重
                    // let newUrl = url.split("?")[0];
                    // if (url.split("?").length > 1) {
                    //     let oldParams = url.split("?")[1].split("&");
                    //     let keys = 0;

                    //     //alert(1);
                    //     for (let i = 0; i < oldParams.length; i++) {

                    //         if (oldParams[i].indexOf('ticket') < 0 && oldParams[i].indexOf('token') < 0 && oldParams[i].indexOf('lat') < 0 && oldParams[i].indexOf('lng') < 0) {
                    //             newUrl += (keys == 0 ? '?' : '&') + oldParams[i];
                    //             keys++;
                    //         }
                    //     }
                    // }

                    // alert(newUrl);
                    Router.handleBridge('openPage', {
                        url: url,
                        newWindow: true, //打开新窗口
                        browser: false, //打开新浏览器
                    }, fn || function() {});
                } else {
                    //处理 非端内 情况 如 开发的时候在 chrome 里
                    if (url && url != '')
                        window.location.href = url;

                }
            }
        },
        closePage: function(fn) {
            if (Version.supportBridge) {
                var adrVersion = Version.getAdrVersion(),
                    iosVersion = Version.getIOSVersion();
                //安卓和iOS从2.7.4开始支持
                if (adrVersion && adrVersion < Version.parse('2.7.4')) {
                    console.log('android app version lower than 2.7.4 is not supported!');
                    return;
                }
                if (iosVersion && iosVersion < Version.parse('2.7.4')) {
                    console.log('ios app version lower than 2.7.4 is not supported!');
                    return;
                }
                Router.handleBridge('page_close', {}, fn || function() {});
            }
        },

        /*
         2.3.9开始支持
         返回首页
         */
        'toMainPage': function(fn) {
            if (Version.supportBridge) {
                var adrVersion = Version.getAdrVersion(),
                    iosVersion = Version.getIOSVersion();
                //安卓和iOS从2.3.9开始支持
                if (adrVersion && adrVersion < Version.parse('2.3.9')) {
                    console.log('android app version lower than 2.3.9 is not supported!');
                    return;
                }
                if (iosVersion && iosVersion < Version.parse('2.3.9')) {
                    console.log('ios app version lower than 2.3.9 is not supported!');
                    return;
                }
                Version.supportBridge && Router.handleBridge('toMainPage', {}, fn);
            }
        },
        /*
         2.3.9开始支持
         呼起是否收车
         */
        'closeCarRequest': function(args, fn) {
            if (Version.supportBridge) {
                var adrVersion = Version.getAdrVersion(),
                    iosVersion = Version.getIOSVersion();
                //安卓和iOS从2.3.9开始支持
                if (adrVersion && adrVersion < Version.parse('2.3.9')) {
                    console.log('android app version lower than 2.3.9 is not supported!');
                    return;
                }
                if (iosVersion && iosVersion < Version.parse('2.3.9')) {
                    console.log('ios app version lower than 2.3.9 is not supported!');
                    return;
                }
                Version.supportBridge && Router.handleBridge('closeCarRequest', args, fn);
            }
        },
        /* 微信分享配置
        var init_share_weixin_data = {
            'share_title':'测试微信分享',
            'share_url':'http://www.baidu.com',
            'share_content':'测试测试测试',
            'share_icon_url':'http://static.udache.com/gulfstream/webapp/modules/driver-to-driver/imgs/weixin.png'
        };
        //短信分享配置
        var init_share_sms_data = {
            'phone':'13333333333',
            'content':'我是短信内容，我的最大长度是多少呢？'
        };
        //分享菜单配置（目前支持微信朋友、微信朋友圈、短信三种分享）
        var params = {
            'share_weixin_appmsg':init_share_weixin_data,
            'share_weixin_timeline':init_share_weixin_data,
            'share_sms':init_share_sms_data
        }*/
        initEntrance: function(params, fn) {

            if (Version.supportBridge) {
                var adrVersion = Version.getAdrVersion(),
                    iosVersion = Version.getIOSVersion();
                //安卓和iOS从2.7.0开始支持
                if (adrVersion && adrVersion < Version.parse('2.4.4')) {
                    console.log('android app version lower than 2.4.4 is not supported!');
                    return;
                }
                if (iosVersion && iosVersion < Version.parse('2.4.4')) {
                    console.log('ios app version lower than 2.4.4 is not supported!');
                    return;
                }
                if (!iosVersion && !adrVersion) {
                    console.log('this isn\'t a 专快 driver app');
                    return;
                }
                Version.supportBridge && Router.handleBridge('init_entrance', params, fn || function() {});
            }
        },
        //拉起分享框
        invokeEntrance: function(params, fn) {

            if (Version.supportBridge) {
                var adrVersion = Version.getAdrVersion(),
                    iosVersion = Version.getIOSVersion();
                //安卓和iOS从2.7.0开始支持
                if (adrVersion && adrVersion < Version.parse('2.4.4')) {
                    alert("!!!");
                    console.log('android app version lower than 2.4.4 is not supported!');
                    return;
                }
                if (iosVersion && iosVersion < Version.parse('2.4.4')) {
                    console.log('ios app version lower than 2.4.4 is not supported!');
                    return;
                }
                if (!iosVersion && !adrVersion) {
                    console.log('this isn\'t a 专快 driver app');
                    return;
                }
                Version.supportBridge && Router.handleBridge('share_slide_up', null, fn || function() {});
            }
        },
        weixinAppmsg: function(conf, fn) {
            if (Version.supportBridge) {
                var adrVersion = Version.getAdrVersion(),
                    iosVersion = Version.getIOSVersion();

                //安卓和iOS从2.7.0开始支持
                if(adrVersion && adrVersion < Version.parse('2.4.4')) {
                    return console.log('android app version lower than 2.4.4 is not supported!');
                }
                if(iosVersion && iosVersion < Version.parse('2.4.4')) {
                    return console.log('ios app version lower than 2.4.4 is not supported!');
                }
                if (iosVersion) {
                    Router.handleBridge('share_slide_up', conf, fn||function(){});
                }
                if (adrVersion) {
                    var shareWxAppmsg = conf.share_weixin_appmsg || {};
                    var cfg = {
                        url: shareWxAppmsg.share_url,
                        imageUrl: shareWxAppmsg.share_icon_url,
                        title: shareWxAppmsg.share_title,
                        descript: shareWxAppmsg.share_content,
                        isFriendCircle: false
                    };
                    Router.handleBridge('callWXShare', cfg, function() {});
                }
            }
        },
        // weixinAppmsg: function(conf) {
        //     if (Version.supportBridge) {
        //         var adrVersion = Version.getAdrVersion(),
        //             iosVersion = Version.getIOSVersion();
        //
        //         if (iosVersion) {
        //             Router.handleBridge('share_weixin_appmsg', JSON.stringify(conf), function() {});
        //         }
        //
        //         if (adrVersion) {
        //             let cfg = {
        //                 url: conf.share_url,
        //                 imageUrl: conf.share_icon_url,
        //                 title: conf.share_title,
        //                 descript: conf.share_content,
        //                 isFriendCircle: false
        //             };
        //             Router.handleBridge('callWXShare', cfg, function() {});
        //         }
        //     }
        // },
        weixinTimeline: function(conf) {
            if (Version.supportBridge) {
                var adrVersion = Version.getAdrVersion(),
                    iosVersion = Version.getIOSVersion();
                if (iosVersion) {
                    Router.handleBridge('share_weixin_timeline', JSON.stringify(conf), function() {});
                }

                if (adrVersion) {
                    let cfg = {
                        url: conf.share_url,
                        imageUrl: conf.share_icon_url,
                        title: conf.share_title,
                        descript: conf.share_content,
                        isFriendCircle: true
                    };
                    Router.handleBridge('callWXShare', cfg, function() {});
                }
            }
        }
    };

    // 司机端分享相关
    var Share = {
        share: function(type, params) {
            Router[type](params);
        }
    };

    var Shares = {
        weixinAppmsg: function(n) {
            Router['weixinAppmsg'](n);
        },
        weixinTimeline: function(n) {
            try {
                Router['weixinTimeline'](n);
            } catch (e) {
                alert(e);
            }
        }
    }

    var initEntrance = function(url, cb) {
        Router['initEntrance'](url, cb);
    }

    var invokeEntrance = function(url, cb) {
        Router['invokeEntrance'](url, cb);
    }


    //通讯录相关
    var Contact = {
        getContact: function(fn) {
            Router['getContact'](fn);
        }
    };

    //图像控制相关
    var ImageControl = {
        resizeImage: function(params, fn) {
            Router['resizeImage'](params, fn);
        }
    };

    //订单相关
    var Order = {
        orderDetailInfo: function(json) {
            Router['orderDetailInfo'](json);
        },
        orderReassignState: function(str) {
            Router['orderReassignState'](str);
        }
    };

    //地图相关
    var Location = {
        getLocationInfo: function(fn) {
            Router['getLocationInfo'](fn);
        },
        launchNav: function(params, fn) {
            Router['launchNav'](params, fn);
        }
    };


    //支付相关
    var Pay = {
        wxPayRequest: function(params, fn) {
            Router['wxPayRequest'](params, fn);
        },
        aliPayRequest: function(params, fn) {
            Router['aliPayRequest'](params, fn);
        }
    }

    var requestBackPressedControl = function(cb) {
        Router['requestBackPressedControl'](cb);
    };

    var cancelBackPressedControl = function(cb) {
        Router['cancelBackPressedControl'](cb);
    };

    var openPage = function(url, newWindow, browser, cb) {
        Router['openPage'](url, newWindow, browser, cb);
    };

    var openNewWebPage = function(url, cb) {
        Router['openNewWebPage'](url, cb);
    };

    var newShare = function(n) {
        Router['newShare'](n);
    };

    var closePage = function(cb) {
        Router['closePage'](cb);
    };


    //回到首页
    var toMainPage = function(fn) {
            Router['toMainPage'](fn);
        }
        //呼出收车弹框
    var closeCarRequest = function(params, fn) {
            Router['closeCarRequest'](params, fn);
        }
        //扩展一些方法
    var DB = {
        newShare: newShare,
        share: Share,
        shareHelper: Shares,
        initEntrance: initEntrance,
        invokeEntrance: invokeEntrance,
        getContact: Contact.getContact,
        resizeImage: ImageControl.resizeImage,
        orderDetailInfo: Order.orderDetailInfo,
        orderReassignState: Order.orderReassignState,
        getLocationInfo: Location.getLocationInfo,
        launchNav: Location.launchNav,
        wxPayRequest: Pay.wxPayRequest,
        aliPayRequest: Pay.aliPayRequest,
        requestBackPressedControl: requestBackPressedControl,
        cancelBackPressedControl: cancelBackPressedControl,
        openPage: openPage,
        openNewWebPage: openNewWebPage,
        closePage: closePage,
        toMainPage: toMainPage,
        closeCarRequest: closeCarRequest
    }
    for (var key in DB) {
        didi.dbridge[key] = DB[key]
    }

    var DTool = {
        getAdrVersion: Version.getAdrVersion,
        getTaxiAdrVersion: Version.getTaxiAdrVersion,
        getIOSVersion: Version.getIOSVersion,
        getTaxiIOSVersion: Version.getTaxiIOSVersion,
        parseVersion: Version.parse
    }
    for (var key in DTool) {
        didi.dbridgeTool[key] = DTool[key]
    }

    return didi;
}))
