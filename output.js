//Wed Jun 11 2025 16:38:13 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
const smashUtils = require("./jdJm.js").smashUtils;
const USER_AGENTS = ["jdapp;android;10.1.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36", "jdapp;iPhone;10.1.0;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;android;10.1.0;9;network/4g;Mozilla/5.0 (Linux; Android 9; Mi Note 3 Build/PKQ1.181007.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045131 Mobile Safari/537.36", "jdapp;android;10.1.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; GM1910 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36", "jdapp;android;10.1.0;9;network/wifi;Mozilla/5.0 (Linux; Android 9; 16T Build/PKQ1.190616.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36", "jdapp;iPhone;10.1.0;13.6;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;13.6;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;13.5;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;14.1;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;13.3;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;13.7;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;14.1;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;13.3;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;13.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;14.3;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;android;10.1.0;9;network/wifi;Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36", "jdapp;android;10.1.0;11;network/wifi;Mozilla/5.0 (Linux; Android 11; Redmi K30 5G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045511 Mobile Safari/537.36", "jdapp;iPhone;10.1.0;11.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15F79", "jdapp;android;10.1.0;10;;network/wifi;Mozilla/5.0 (Linux; Android 10; M2006J10C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36", "jdapp;android;10.1.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; M2006J10C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36", "jdapp;android;10.1.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045224 Mobile Safari/537.36", "jdapp;android;10.1.0;9;network/wifi;Mozilla/5.0 (Linux; Android 9; MHA-AL00 Build/HUAWEIMHA-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36", "jdapp;android;10.1.0;8.1.0;network/wifi;Mozilla/5.0 (Linux; Android 8.1.0; 16 X Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36", "jdapp;android;10.1.0;8.0.0;network/wifi;Mozilla/5.0 (Linux; Android 8.0.0; HTC U-3w Build/OPR6.170623.013; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36", "jdapp;iPhone;10.1.0;14.0.1;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;android;10.1.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; LYA-AL00 Build/HUAWEILYA-AL00L; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36", "jdapp;iPhone;10.1.0;14.2;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;14.3;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;14.2;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;android;10.1.0;8.1.0;network/wifi;Mozilla/5.0 (Linux; Android 8.1.0; MI 8 Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045131 Mobile Safari/537.36", "jdapp;android;10.1.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; Redmi K20 Pro Premium Edition Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045227 Mobile Safari/537.36", "jdapp;iPhone;10.1.0;14.3;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;android;10.1.0;11;network/wifi;Mozilla/5.0 (Linux; Android 11; Redmi K20 Pro Premium Edition Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045513 Mobile Safari/537.36", "jdapp;android;10.1.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045227 Mobile Safari/537.36", "jdapp;iPhone;10.1.0;14.1;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"];
function randomNumber(_0x2970fc = 0, _0x2506b4 = 100) {
  return Math.min(Math.floor(_0x2970fc + Math.random() * (_0x2506b4 - _0x2970fc)), _0x2506b4);
}
const {
  JSDOM
} = require("jsdom");
const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>", {
  url: "https://www.jd.com"
});
const window = dom.window;
const document = window.document;
window.HTMLCanvasElement.prototype.getContext = function () {
  return {
    fillRect: () => {},
    clearRect: () => {},
    getImageData: () => ({
      data: []
    }),
    putImageData: () => {}
  };
};
global.window = window;
global.document = document;
global.Element = window.Element;
const ParamsSignLite = require("./jdJm2.js");
$.CryptoJS = require("crypto-js");
let apiList = $.isNode() ? require("./jdYhqApiList.js").apiList : [];
let notify = "";
let jdNotify = true;
try {
  notify = $.isNode() ? require("./sendNotify") : "";
} catch (_0x19d3e2) {
  jdNotify = false;
  console.log("未发现sendNotify.js文件不会进行通知！");
}
let tryNum = 4;
let maxQq = 20;
let maxXc = 3;
let qqjgTime = 250;
let maxAccount = 8;
let ycTime = 300;
let cookiesArr = [];
let cookie = "";
let canTaskFlag = [];
let TgCkArray = [];
let lqSucArray = [];
let AllEendCode = "|A9|A6|A14|D2|";
let PEendCode = "|A1|A12|A13|A19|A26|";
let JDTimes = new Date().getTime();
let apiArray = [];
let nowIndex = 0;
let JDTimeJg = 0;
let yhqAPiHasSuccess = {};
let nextHour = 0;
let xtTkSign = "";
let ckerror = [];
let removeYhq = [];
let nowRunYhq = "";
let paramsSignLiteMy = "";
try {
  paramsSignLiteMy = new window.ParamsSignLite({
    appId: "35fa0",
    preRequest: false
  });
} catch (_0x361ee7) {}
if (process.env.YHQ_REMOVE && process.env.YHQ_REMOVE.split(",").length >= 1) {
  if (process.env.YHQ_REMOVE.toLowerCase() == "all") {
    console.log("读取环境变量排除的优惠券为：不抢作者所有的券！");
    apiList = [];
  } else {
    console.log("读取环境变量排除的优惠券为：" + process.env.YHQ_REMOVE);
    removeYhq = process.env.YHQ_REMOVE.split(",");
  }
}
if (process.env.YHQ_NOWRUN) {
  console.log("读取环境变量立即执行优惠券为：" + process.env.YHQ_NOWRUN);
  nowRunYhq = process.env.YHQ_NOWRUN;
}
try {
  const apiListMy = $.isNode() ? require("./jdYhqApiListMy.js").apiList : [];
  if (apiListMy.length > 0) {
    for (var alm in apiListMy) {
      if (apiListMy[alm].qName && apiListMy[alm].qApi && apiListMy[alm].qTime) {
        apiList.push(apiListMy[alm]);
        console.log("加载自定义API:" + apiListMy[alm].qName);
      }
    }
  }
} catch (_0x19fa8b) {
  console.log("未配置自定义API！");
}
if (process.env.YHQ_API && process.env.YHQ_API.indexOf(",") > -1 && process.env.YHQ_API.split(",").length >= 5) {
  console.log("读取环境变量成功：" + process.env.YHQ_API);
  let YHQ_API_ARR = process.env.YHQ_API.split(",");
  tryNum = parseInt(YHQ_API_ARR[0]);
  if (parseInt(YHQ_API_ARR[1]) > maxQq) {
    maxQq = parseInt(YHQ_API_ARR[1]);
  }
  maxXc = parseInt(YHQ_API_ARR[2]);
  qqjgTime = parseInt(YHQ_API_ARR[3]);
  maxAccount = parseInt(YHQ_API_ARR[4]);
  if (YHQ_API_ARR.length >= 6) {
    ycTime = parseInt(YHQ_API_ARR[5]);
  }
}
function myNotice(_0x4e7f4c) {
  if (jdNotify) {
    notify.sendNotify($.name, _0x4e7f4c, {}, "\n\n本通知 By：https://github.com/hsdtk/jdYhq");
  }
}
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach(_0x4e2757 => {
    cookiesArr.push(jdCookieNode[_0x4e2757]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
  if (process.env.JDFACTORY_FORBID_ACCOUNT) {
    process.env.JDFACTORY_FORBID_ACCOUNT.split("&").map((_0x32a612, _0x253263) => Number(_0x32a612) === 0 ? cookiesArr = [] : cookiesArr.splice(Number(_0x32a612) - 1 - _0x253263, 1));
  }
} else {
  cookiesArr = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonParse($.getdata("CookiesJD") || "[]").map(_0x3e34e8 => _0x3e34e8.cookie)].filter(_0x347417 => !!_0x347417);
}
!(async () => {
  if (process.env.YHQ_QL_SIGN) {
    xtTkSign = process.env.YHQ_QL_SIGN;
  } else {
    console.log("请增加环境变量YHQ_QL_SIGN！");
    myNotice("请增加环境变量YHQ_QL_SIGN！");
    return;
  }
  if (!getQmExpireDate(xtTkSign, 2)) {
    console.log("激活码已过期！");
    myNotice("激活码已过期！");
    return;
  }
  if (!cookiesArr[0]) {
    console.log("【提示】请先增加JD账号一cookie");
    return;
  }
  if (new Date().getDate() == 1 && new Date().getHours() == 0) {
    $.setjson({}, "yhqAPiHasSuccess");
    console.log("清空缓存！");
  }
  nextHour = nextHourF();
  console.log("下次抢券时间：" + nextHour + ":00:00");
  $.user_agent = USER_AGENTS[randomNumber(0, USER_AGENTS.length)];
  for (var _0x206b91 in apiList) {
    if (nowRunYhq && nowRunYhq.length > 0 && nowRunYhq == apiList[_0x206b91].qName) {
      console.log("立即抢券（跑完记得删除或禁用该环境变量）：" + apiList[_0x206b91].qName);
      $.CryptoJS = $.isNode() ? require("crypto-js") : {};
      await requestAlgo();
      apiArray.push(apiList[_0x206b91]);
      doAPIList(apiArray.length - 1);
      continue;
    }
    if (checkYhq(apiList[_0x206b91], nextHour) && !isRemoveYhqF(apiList[_0x206b91]) && apiArray.length < maxQq) {
      apiArray.push(apiList[_0x206b91]);
      console.log("名称：" + apiList[_0x206b91].qName);
    }
  }
  if (apiArray.length <= 0) {
    console.log("没有优惠券需要领取！");
    return;
  }
  if ($.getdata("JDTimeJg") && $.getdata("JDTimeJg") != 0) {
    JDTimeJg = $.getdata("JDTimeJg");
  }
  if ($.getjson("yhqAPiHasSuccess")) {
    yhqAPiHasSuccess = $.getjson("yhqAPiHasSuccess");
  }
  await getJDTime();
  if (JDTimeJg != 0) {
    $.setdata(JDTimeJg, "JDTimeJg");
  }
  let _0x3a6742 = jgNextHourF() + JDTimeJg - ycTime;
  if (_0x3a6742 > 600000) {
    console.log(parseInt(_0x3a6742 / 60 / 1000) + "分后才开始！");
    return;
  }
  if (_0x3a6742 > 0) {
    console.log(parseInt(_0x3a6742 / 60 / 1000) + "分后开始任务，请不要结束任务！");
    await $.wait(_0x3a6742);
  }
  for (let _0x56f320 in apiArray) {
    if (!yhqAPiHasSuccess[apiArray[_0x56f320].qName]) {
      yhqAPiHasSuccess[apiArray[_0x56f320].qName] = {};
    }
    doAPIList(_0x56f320);
  }
  await $.wait(30000);
  for (let _0x4fe2f6 in apiArray) {
    let _0x957c08 = "";
    if (lqSucArray[_0x4fe2f6].length > 0) {
      if (apiArray[_0x4fe2f6].qName) {
        _0x957c08 += "\n券【" + apiArray[_0x4fe2f6].qName + "】";
      }
      _0x957c08 += "成功领取的用户有：";
      for (var _0x17964b in lqSucArray[_0x4fe2f6]) {
        cookie = cookiesArr[lqSucArray[_0x4fe2f6][_0x17964b]];
        let _0x527900 = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        _0x957c08 += "\n" + (lqSucArray[_0x4fe2f6][_0x17964b] + 1) + "、" + _0x527900;
      }
      console.log("\n************************\n");
      console.log(_0x957c08);
    }
    if (_0x957c08) {
      myNotice(_0x957c08);
      _0x957c08 = "";
    }
  }
  $.setjson(yhqAPiHasSuccess, "yhqAPiHasSuccess");
})().catch(_0x53307e => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x53307e + "!", "");
}).finally(() => {
  $.done();
});
async function doAPIList(_0x2960fb) {
  canTaskFlag[_0x2960fb] = true;
  TgCkArray[_0x2960fb] = [];
  lqSucArray[_0x2960fb] = [];
  for (let _0x2ee101 = 1; _0x2ee101 <= tryNum; _0x2ee101++) {
    if (canTaskFlag[_0x2960fb] && TgCkArray[_0x2960fb].length < cookiesArr.length && TgCkArray[_0x2960fb].length < maxAccount) {
      console.log("\n\n***开始领券【" + apiArray[_0x2960fb].qName + "】第" + _0x2ee101 + "次请求***");
      for (let _0x1b6805 = 0; _0x1b6805 < cookiesArr.length && _0x1b6805 < maxAccount; _0x1b6805++) {
        let _0x3987c4 = apiArray[_0x2960fb].ckIndex ? apiArray[_0x2960fb].ckIndex : 0;
        if (_0x3987c4 > 0) {
          if (_0x1b6805 + 1 < _0x3987c4) {
            continue;
          } else {
            if (_0x1b6805 + 1 > _0x3987c4) {
              break;
            } else {
              console.log("开始执行账号" + _0x3987c4 + "专属ck:");
            }
          }
        }
        if (canTaskFlag[_0x2960fb]) {
          if (cookiesArr[_0x1b6805]) {
            let _0x5e7051 = decodeURIComponent(cookiesArr[_0x1b6805].match(/pt_pin=([^; ]+)(?=;?)/) && cookiesArr[_0x1b6805].match(/pt_pin=([^; ]+)(?=;?)/)[1]);
            if (TgCkArray[_0x2960fb].includes(_0x1b6805)) {
              console.log("\n\n跳过账号" + (_0x1b6805 + 1) + ":" + _0x5e7051 + "！");
              continue;
            }
            try {
              if (yhqAPiHasSuccess[apiArray[_0x2960fb].qName][_0x5e7051] && nextHour != 0) {
                let _0x5a975e = getNowDate();
                if (DateDiff(_0x5a975e, yhqAPiHasSuccess[apiArray[_0x2960fb].qName][_0x5e7051]) < apiArray[_0x2960fb].lqSpace) {
                  console.log("\n\n其他时间领取成功跳过账号" + (_0x1b6805 + 1) + ":" + _0x5e7051 + "！");
                  TgCkArray[_0x2960fb].push(_0x1b6805);
                  continue;
                }
              }
            } catch (_0x24e76e) {}
            nowIndex++;
            if (nowIndex >= maxXc) {
              if (nowIndex % maxXc == 0) {
                await $.wait(qqjgTime - 20);
              } else {
                await $.wait(10);
              }
            }
            doApiTask(_0x2960fb, _0x1b6805);
          }
        } else {
          console.log("该券已无或者无账号需要请求！");
          break;
        }
      }
    } else {
      break;
    }
  }
}
async function doApiTask(_0x5aae25, _0x1ce253) {
  console.log("\n\n" + nowIndex + "、" + timeFormat() + (":开始领取" + apiArray[_0x5aae25].qName + "_账号" + (_0x1ce253 + 1)));
  return new Promise(async _0x1e04be => {
    if (canTaskFlag[_0x5aae25]) {
      if (apiArray[_0x5aae25].qName.indexOf("G") > -1 || apiArray[_0x5aae25].qApi.indexOf("https://s.m.jd.com") > -1 || apiArray[_0x5aae25].qApi.indexOf("h5_awake_wxapp") > -1) {
        const _0x31f5bd = await getApiUrlGet(_0x5aae25, _0x1ce253);
        $.get(_0x31f5bd, (_0x2fd9df, _0x315aef, _0x4b7df4) => {
          try {
            if (_0x2fd9df) {
              console.log("API请求失败，请检查网络重试");
            } else {
              cookie = cookiesArr[_0x1ce253];
              let _0x3cbc0b = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
              console.log("\n\n*" + apiArray[_0x5aae25].qName + "_【账号" + (_0x1ce253 + 1) + "】" + _0x3cbc0b + "*");
              console.log(timeFormat() + ":" + _0x4b7df4);
              if (_0x4b7df4.indexOf("成功") > -1) {
                lqSucArray[_0x5aae25].push(_0x1ce253);
                yhqAPiHasSuccess[apiArray[_0x5aae25].qName][_0x3cbc0b] = getNowDate();
              } else {
                if (_0x4b7df4.indexOf("再来") > -1 || _0x4b7df4.indexOf("抢光") > -1) {
                  canTaskFlag[_0x5aae25] = false;
                }
              }
            }
          } catch (_0x32d80b) {
            TgCkArray[_0x5aae25].push(_0x1ce253);
            $.logErr(_0x32d80b, _0x315aef);
          } finally {
            _0x1e04be(_0x4b7df4);
          }
        });
      } else {
        const _0x5005d0 = await getApiUrl(_0x5aae25, _0x1ce253);
        $.post(_0x5005d0, (_0x48a9a7, _0x2b2920, _0x1e4c9e) => {
          try {
            if (_0x48a9a7) {
              console.log("API请求失败，请检查网络重试");
            } else {
              cookie = cookiesArr[_0x1ce253];
              let _0x390a22 = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
              console.log("\n\n*" + apiArray[_0x5aae25].qName + "_【账号" + (_0x1ce253 + 1) + "】" + _0x390a22 + "*");
              _0x1e4c9e = JSON.parse(_0x1e4c9e);
              let _0x27c72a = "";
              let _0xed703 = "";
              try {
                _0xed703 = "|" + _0x1e4c9e.subCode + "|";
                _0x27c72a = _0x1e4c9e.subCodeMsg || _0x1e4c9e.resultData.msg;
              } catch (_0x34f4bf) {}
              if (_0x1e4c9e.subCode && (_0x1e4c9e.subCode == "A1" || _0x1e4c9e.subCode == "0") || _0x27c72a && _0x27c72a.indexOf("成功") > -1) {
                lqSucArray[_0x5aae25].push(_0x1ce253);
                yhqAPiHasSuccess[apiArray[_0x5aae25].qName][_0x390a22] = getNowDate();
              }
              if (AllEendCode.indexOf(_0xed703) > -1) {
                if (_0x1e4c9e.subCode == "D2" && _0x27c72a.substr(_0x27c72a.indexOf("请") + 1, 2) == nextHour) {
                  console.log(timeFormat() + ":时间未到继续：" + _0x27c72a);
                } else {
                  if (nextHour == 0) {
                    console.log(timeFormat() + ":继续：" + _0x27c72a);
                  } else {
                    canTaskFlag[_0x5aae25] = false;
                    console.log(timeFormat() + ":" + _0x27c72a);
                  }
                }
              } else {
                if (PEendCode.indexOf(_0xed703) > -1) {
                  TgCkArray[_0x5aae25].push(_0x1ce253);
                  console.log(timeFormat() + ":" + _0x27c72a + ",subCode2_" + _0xed703);
                } else {
                  if (_0x1e4c9e.code && _0x1e4c9e.code == "3") {
                    TgCkArray[_0x5aae25].push(_0x1ce253);
                    console.log(timeFormat() + ":ck过期！");
                    if (!checkHasCz(ckerror, _0x1ce253)) {
                      ckerror.push(_0x1ce253);
                      myNotice("【账号" + (_0x1ce253 + 1) + "】" + _0x390a22 + "——ck过期!");
                    }
                  } else {
                    console.log(timeFormat() + ":" + JSON.stringify(_0x1e4c9e));
                  }
                }
              }
            }
          } catch (_0x73e7b4) {
            TgCkArray[_0x5aae25].push(_0x1ce253);
            $.logErr(_0x73e7b4, _0x2b2920);
          } finally {
            _0x1e04be(_0x1e4c9e);
          }
        });
      }
    } else {
      console.log("该券已无或已结束！");
    }
  });
}
function getJDTime() {
  return new Promise(_0x59b83f => {
    $.post({
      url: "https://api.m.jd.com/client.action?functionId=queryMaterialProducts&client=wh5"
    }, async (_0x1be38e, _0x5c688a, _0x4ace11) => {
      try {
        if (_0x1be38e) {
          console.log("获取JD时间失败");
        } else {
          _0x4ace11 = JSON.parse(_0x4ace11);
          if (_0x4ace11.code && _0x4ace11.code == "0") {
            JDTimes = parseInt(_0x4ace11.currentTime2);
            if (JDTimeJg == 0 || JDTimeJg != 0 && new Date().getTime() - JDTimes < JDTimeJg) {
              JDTimeJg = new Date().getTime() - JDTimes;
            }
          }
        }
      } catch (_0x42a1ab) {
        $.logErr(_0x42a1ab, _0x5c688a);
      } finally {
        _0x59b83f(_0x4ace11);
      }
    });
  });
}
function checkYhq(_0x5640c5, _0x589cc2) {
  if (!_0x5640c5.endDate) {
    return true;
  }
  if (_0x5640c5.endDate && _0x5640c5.qTime && new Date(_0x5640c5.endDate + " 23:59:59").getTime() > new Date().getTime()) {
    let _0x4b84d4 = _0x5640c5.qTime.split(",");
    if (_0x4b84d4.length > 0 && _0x4b84d4.includes(_0x589cc2 + "")) {
      return true;
    }
  }
  return false;
}
function isRemoveYhqF(_0x1cc607) {
  let _0x2de26d = false;
  if (removeYhq && removeYhq.length > 0) {
    for (var _0x278e01 in removeYhq) {
      if (_0x1cc607.qName == removeYhq[_0x278e01]) {
        console.log("排除优惠券：" + _0x1cc607.qName);
        _0x2de26d = true;
        break;
      }
    }
  }
  return _0x2de26d;
}
async function getApiUrl(_0x29e936, _0x312756) {
  let _0x588b17 = "";
  if (apiArray[_0x29e936].qApi.indexOf("atop_cart_black5_rushBuy") > -1) {
    _0x588b17 = await getDecryptUrlH5(apiArray[_0x29e936].qApi, "55709");
  } else {
    if (apiArray[_0x29e936].qApi.indexOf("hc_pjq_receiveCouponExpansion") > -1) {
      _0x588b17 = await getDecryptUrlH5(apiArray[_0x29e936].qApi, "91a93");
    } else {
      _0x588b17 = await getDecryptUrlTy(getApiLog(apiArray[_0x29e936].qApi), _0x312756);
    }
  }
  return {
    url: _0x588b17,
    headers: {
      "user-agent": $.user_agent,
      "content-Type": "application/x-www-form-urlencoded",
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "max-age=0",
      "content-length": 0,
      cookie: cookiesArr[_0x312756],
      Origin: new URL(_0x588b17).origin
    }
  };
}
async function getApiUrlGet(_0x15bf17, _0xe305eb) {
  if (apiArray[_0x15bf17].qApi.indexOf("https://s.m.jd.com") > -1 || apiArray[_0x15bf17].qApi.indexOf("h5_awake_wxapp") > -1) {
    const _0x1ec088 = await getDecryptUrlTy(getApiLog(apiArray[_0x15bf17].qApi), _0xe305eb);
    return {
      url: _0x1ec088,
      headers: {
        "User-Agent": $.user_agent,
        Cookie: cookiesArr[0],
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        Referer: new URL(_0x1ec088).origin,
        Origin: new URL(_0x1ec088).origin
      }
    };
  } else {
    if (apiArray[_0x15bf17].qApi.indexOf("appid=plus_business") > -1) {
      return {
        url: apiArray[_0x15bf17].qApi,
        headers: {
          "User-Agent": $.user_agent,
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          Cookie: cookiesArr[_0xe305eb],
          Origin: new URL(signedUrl).origin
        }
      };
    } else {
      return {
        url: apiArray[_0x15bf17].qApi,
        headers: {
          "User-Agent": $.user_agent,
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          Cookie: cookiesArr[_0xe305eb],
          Origin: new URL(signedUrl).origin
        }
      };
    }
  }
}
function jgNextHourF() {
  let _0x401a7b = timeFormat().substr(0, 13) + ":00:00";
  let _0x20c3f7 = Date.parse(new Date(_0x401a7b)) + 3600000;
  return _0x20c3f7 - new Date().getTime();
}
function nextHourF() {
  let _0x146b18 = new Date();
  return _0x146b18.getHours() + 1 >= 24 ? 0 : _0x146b18.getHours() + 1;
}
function DateDiff(_0x50cf8, _0x25d8f9) {
  var _0x4bb5d7;
  var _0x4ca458;
  var _0x306270;
  var _0x161d9e;
  _0x4bb5d7 = _0x50cf8.split("-");
  _0x4ca458 = new Date(_0x4bb5d7[1] + "-" + _0x4bb5d7[2] + "-" + _0x4bb5d7[0]);
  _0x4bb5d7 = _0x25d8f9.split("-");
  _0x306270 = new Date(_0x4bb5d7[1] + "-" + _0x4bb5d7[2] + "-" + _0x4bb5d7[0]);
  _0x161d9e = parseInt(Math.abs(_0x4ca458 - _0x306270) / 1000 / 60 / 60 / 24);
  return _0x161d9e;
}
function getNowDate() {
  let _0x3c1012 = new Date();
  return _0x3c1012.getFullYear() + "-" + (_0x3c1012.getMonth() + 1 >= 10 ? _0x3c1012.getMonth() + 1 : "0" + (_0x3c1012.getMonth() + 1)) + "-" + (_0x3c1012.getDate() >= 10 ? _0x3c1012.getDate() : "0" + _0x3c1012.getDate());
}
function timeFormat(_0x4f1175) {
  let _0x5ab86f;
  if (_0x4f1175) {
    _0x5ab86f = new Date(_0x4f1175);
  } else {
    _0x5ab86f = new Date();
  }
  return _0x5ab86f.getFullYear() + "-" + (_0x5ab86f.getMonth() + 1 >= 10 ? _0x5ab86f.getMonth() + 1 : "0" + (_0x5ab86f.getMonth() + 1)) + "-" + (_0x5ab86f.getDate() >= 10 ? _0x5ab86f.getDate() : "0" + _0x5ab86f.getDate()) + " " + (_0x5ab86f.getHours() >= 10 ? _0x5ab86f.getHours() : "0" + _0x5ab86f.getHours()) + ":" + (_0x5ab86f.getMinutes() >= 10 ? _0x5ab86f.getMinutes() : "0" + _0x5ab86f.getMinutes()) + ":" + (_0x5ab86f.getSeconds() >= 10 ? _0x5ab86f.getSeconds() : "0" + _0x5ab86f.getSeconds()) + ":" + _0x5ab86f.getMilliseconds();
}
function getApiLog(_0x4cee7f) {
  let _0x38fa35 = smashUtils.getRandom(8);
  let _0x385467 = (smashUtils.get_risk_result({
    id: "coupon",
    data: {
      random: _0x38fa35
    }
  }, xtTkSign) || {}).log;
  let _0x5c40b7 = encodeURIComponent(",\"log\":\"" + _0x385467 + "\",\"random\":\"" + _0x38fa35 + "\"");
  if (_0x4cee7f && _0x4cee7f.indexOf("%7D") > -1) {
    _0x5c40b7 = _0x4cee7f.substring(0, _0x4cee7f.indexOf("%7D")) + _0x5c40b7 + _0x4cee7f.substring(_0x4cee7f.indexOf("%7D"), _0x4cee7f.length);
  }
  return _0x5c40b7;
}
function checkHasCz(_0x7de128, _0x5cfaea) {
  let _0x2940a3 = false;
  if (_0x7de128) {
    for (var _0x13a119 in _0x7de128) {
      if (_0x7de128[_0x13a119] == _0x5cfaea) {
        _0x2940a3 = true;
        break;
      }
    }
  }
  return _0x2940a3;
}
function getUrlQueryParams(_0x29ce2b, _0x4039f4) {
  let _0x30aa18 = new RegExp("(^|&)" + _0x4039f4 + "=([^&]*)(&|$)", "i");
  let _0x4717b5 = _0x29ce2b.split("?")[1].substr(0).match(_0x30aa18);
  if (_0x4717b5 != null) {
    return decodeURIComponent(_0x4717b5[2]);
  }
  return "";
}
function sha256Hash(_0x4df48e) {
  const _0x1538ca = new TextEncoder();
  const _0xc932ff = _0x1538ca.encode(_0x4df48e);
  const _0x3fd533 = $.CryptoJS.SHA256($.CryptoJS.enc.Utf8.parse(_0x4df48e));
  const _0x40bb63 = _0x3fd533.toString($.CryptoJS.enc.Hex);
  return _0x40bb63;
}
function getDecryptUrlTy(_0x38633e, _0x45e4c9) {
  return new Promise((_0x2c5167, _0x411d20) => {
    let _0x399634 = sha256Hash(getUrlQueryParams(_0x38633e, "body"));
    let _0x1c1104 = {
      appid: "babelh5",
      body: _0x399634,
      client: "wh5",
      clientVersion: "1.0.0",
      functionId: "newBabelAwardCollection"
    };
    _0x38633e += "&clientVersion=" + _0x1c1104.clientVersion + "&appid=" + _0x1c1104.appid;
    paramsSignLiteMy.sign(_0x1c1104).then(_0x3a4e52 => {
      _0x2c5167(_0x38633e + "&h5st=" + _0x3a4e52.h5st);
    }).catch(_0x3260b3 => {
      console.error("签名失败:", _0x3260b3);
      _0x2c5167(_0x38633e);
    });
  });
}
function getDecryptUrlH5(_0x23803f, _0x52a334) {
  _0x23803f += "&t=" + new Date().getTime();
  return new Promise((_0x5e216b, _0x171c63) => {
    let _0x5e47a7 = sha256Hash(getUrlQueryParams(_0x23803f, "body"));
    var _0xca52f1 = {
      appid: getUrlQueryParams(_0x23803f, "appid"),
      body: _0x5e47a7,
      client: getUrlQueryParams(_0x23803f, "client"),
      functionId: getUrlQueryParams(_0x23803f, "functionId"),
      t: getUrlQueryParams(_0x23803f, "t")
    };
    paramsSignLiteMy = new window.ParamsSignLite({
      appId: _0x52a334
    });
    paramsSignLiteMy.sign(_0xca52f1).then(_0x14ea6b => {
      _0x5e216b(_0x23803f + "&h5st=" + _0x14ea6b.h5st);
    }).catch(_0xdc742a => {
      console.error("签名失败:", _0xdc742a);
      _0x5e216b(_0x23803f);
    });
  });
}
function getDecryptUrl(_0x1fd851) {
  _0x1fd851 = _0x1fd851 + "&t=" + Date.now();
  stk = getUrlQueryParams(_0x1fd851, "_stk");
  if (stk) {
    const _0x232aa8 = format("yyyyMMddhhmmssSSS", Date.now());
    const _0x3f3a81 = $.genKey($.token, $.fp.toString(), _0x232aa8.toString(), $.appId.toString(), $.CryptoJS).toString($.CryptoJS.enc.Hex);
    let _0x902fc8 = "";
    stk.split(",").map((_0x527d46, _0x233b25) => {
      _0x902fc8 += _0x527d46 + ":" + getUrlQueryParams(_0x1fd851, _0x527d46) + (_0x233b25 === stk.split(",").length - 1 ? "" : "&");
    });
    const _0x2ffd9e = $.CryptoJS.HmacSHA256(_0x902fc8, _0x3f3a81.toString()).toString($.CryptoJS.enc.Hex);
    return _0x1fd851 + "&h5st=" + encodeURIComponent(["".concat(_0x232aa8.toString()), "".concat($.fp.toString()), "".concat($.appId.toString()), "".concat($.token), "".concat(_0x2ffd9e), "3.0;".concat(_0x232aa8)].join(";")) + "&__t=" + Date.now();
  }
}
async function requestAlgo() {
  $.appId = "8ba9b";
  $.fp = (getRandomIDPro({
    size: 13
  }) + Date.now()).slice(0, 16);
  const _0x5e47db = {
    url: "https://cactus.jd.com/request_algo?g_ty=ajax",
    headers: {
      Authority: "cactus.jd.com",
      Pragma: "no-cache",
      "Cache-Control": "no-cache",
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "https://st.jingxi.com",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": $.user_agent,
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      Referer: "https://st.jingxi.com/",
      "Accept-Language": "zh-CN,zh;q=0.9,zh-TW;q=0.8,en;q=0.7"
    },
    body: JSON.stringify({
      version: "1.0",
      fp: $.fp,
      appId: $.appId,
      timestamp: Date.now(),
      platform: "web",
      expandParams: ""
    })
  };
  return new Promise(async _0x30417e => {
    $.post(_0x5e47db, (_0x44db79, _0x178b77, _0x32f151) => {
      try {
        const {
          ret,
          msg,
          data: {
            result
          } = {}
        } = JSON.parse(_0x32f151);
        $.token = result.tk;
        $.genKey = new Function("return " + result.algo)();
      } catch (_0x4f45d9) {
        $.logErr(_0x4f45d9, _0x178b77);
      } finally {
        _0x30417e();
      }
    });
  });
}
function getRandomIDPro() {
  var _0x5e4eac;
  var _0x37e7cf;
  var _0xcd1d4b = undefined === (_0x84dead = (_0x37e7cf = 0 < arguments.length && undefined !== arguments[0] ? arguments[0] : {}).size) ? 10 : _0x84dead;
  var _0x84dead = undefined === (_0x84dead = _0x37e7cf.dictType) ? "number" : _0x84dead;
  var _0x41968f = "";
  if ((_0x37e7cf = _0x37e7cf.customDict) && "string" == typeof _0x37e7cf) {
    _0x5e4eac = _0x37e7cf;
  } else {
    switch (_0x84dead) {
      case "alphabet":
        _0x5e4eac = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      case "max":
        _0x5e4eac = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
        break;
      case "number":
      default:
        _0x5e4eac = "0123456789";
    }
  }
  for (; _0xcd1d4b--;) {
    _0x41968f += _0x5e4eac[Math.random() * _0x5e4eac.length | 0];
  }
  return _0x41968f;
}
function format(_0x1c95d1, _0x3bcea6) {
  if (!_0x1c95d1) {
    _0x1c95d1 = "yyyy-MM-dd";
  }
  var _0x5e4e27;
  if (!_0x3bcea6) {
    _0x5e4e27 = Date.now();
  } else {
    _0x5e4e27 = new Date(_0x3bcea6);
  }
  var _0x3c1c3a;
  var _0x3646ca = new Date(_0x5e4e27);
  var _0x50d794 = _0x1c95d1;
  var _0x44bc3f = {
    "M+": _0x3646ca.getMonth() + 1,
    "d+": _0x3646ca.getDate(),
    "D+": _0x3646ca.getDate(),
    "h+": _0x3646ca.getHours(),
    "H+": _0x3646ca.getHours(),
    "m+": _0x3646ca.getMinutes(),
    "s+": _0x3646ca.getSeconds(),
    "w+": _0x3646ca.getDay(),
    "q+": Math.floor((_0x3646ca.getMonth() + 3) / 3),
    "S+": _0x3646ca.getMilliseconds()
  };
  /(y+)/i.test(_0x50d794) && (_0x50d794 = _0x50d794.replace(RegExp.$1, "".concat(_0x3646ca.getFullYear()).substr(4 - RegExp.$1.length)));
  Object.keys(_0x44bc3f).forEach(_0x2b678c => {
    if (new RegExp("(".concat(_0x2b678c, ")")).test(_0x50d794)) {
      var _0x48b7dc;
      var _0x1a59c3 = "S+" === _0x2b678c ? "000" : "00";
      _0x50d794 = _0x50d794.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x44bc3f[_0x2b678c] : "".concat(_0x1a59c3).concat(_0x44bc3f[_0x2b678c]).substr("".concat(_0x44bc3f[_0x2b678c]).length));
    }
  });
  return _0x50d794;
}