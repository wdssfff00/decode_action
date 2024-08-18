//Sun Aug 18 2024 18:17:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  sign,
  getToken,
  wait,
  checkCk,
  User_Agent,
  getCookieMap,
  randomString
} = require("./common.js");
const login_tips = "需要登录, 请重新登录";
let CookieEles = [""];
let ckMap = new Map();
var deviceId;
var utdid;
let t;
if (process.env.ELE_COOKIE) {
  if (process.env.ELE_COOKIE.indexOf("&") > -1) {
    CookieEles = process.env.ELE_COOKIE.split("&");
  } else {
    if (process.env.ELE_COOKIE.indexOf("\n") > -1) {
      CookieEles = process.env.ELE_COOKIE.split("\n");
    } else {
      CookieEles = [process.env.ELE_COOKIE];
    }
  }
}
const https = require("https");
const http = require("http");
const request = require("request");
function getJson(_0x2c2c0b, _0x57e2e0, _0x51fecb, _0x5f44b8, _0x2b46b6, _0x3d56b0, _0x3f42e6) {
  const _0x1b015c = {
    data: _0x2c2c0b,
    api: _0x57e2e0,
    pageId: decodeURIComponent(_0x51fecb),
    sid: _0x5f44b8,
    uid: _0x2b46b6,
    deviceId: _0x3d56b0,
    utdid: _0x3f42e6
  };
  let _0x202075 = _0x1b015c;
  _0x202075 = encodeURIComponent(JSON.stringify(_0x202075));
  let _0x1c4c6a = "";
  return new Promise(_0x2b5621 => {
    http.get("http://180.76.128.46:9999/api/getXSign?content=" + _0x202075, _0x5d1c61 => {
      _0x5d1c61.on("data", _0x3704c1 => {
        _0x1c4c6a += _0x3704c1.toString();
      });
      _0x5d1c61.on("end", () => {
        _0x2b5621(_0x1c4c6a);
      });
    });
  });
}
async function runBefore15(_0x130cfa, _0x38c865, _0x3373da = "") {
  const _0x4fef06 = {
    resId: "223166",
    source: "mtop",
    extra: "{\"missionDefId\":" + _0x130cfa + ",\"missionCollectionId\":" + _0x38c865 + ",\"missionType\":\"PAGEVIEW\",\"source\":\"mtop\",\"missionXId\":\"" + _0x3373da + "\"}",
    callSource: "biz_code_main",
    latitude: "30.153526850044727",
    longitude: "120.37615790963173"
  };
  let _0x47239b = _0x4fef06;
  _0x47239b = JSON.stringify(_0x47239b);
  rApi = "mtop.alibaba.svip.langrisser.act";
  rpageId = encodeURIComponent("https://air.tb.ele.me/app/conch-page/svip-home-tasklist-new/home?navType=4&status_bar_transparent=true&latitude=30.202044993638992&pha=true&hideNavbar=1&longitude=120.20137779414654");
  let _0x4aaf05 = ckMap.get("cookie2");
  let _0x297a62 = ckMap.get("unb");
  var _0x732e44 = await getJson(_0x47239b, rApi, rpageId, _0x4aaf05, _0x297a62, deviceId, utdid);
  _0x732e44 = JSON.parse(_0x732e44);
  sgext = encodeURIComponent(_0x732e44["x-sgext"]);
  xsign = encodeURIComponent(_0x732e44["x-sign"]);
  umt = encodeURIComponent(_0x732e44["x-umt"]);
  mini_wua = encodeURIComponent(_0x732e44["x-mini-wua"]);
  let _0x343530 = _0x732e44["x-t"];
  wua = encodeURIComponent(_0x732e44.wua);
  const _0x18f6d4 = {
    "x-sgext": sgext,
    "x-sign": xsign,
    "x-devid": deviceId,
    "x-pv": "6.3",
    "x-features": "1051",
    "x-mini-wua": mini_wua,
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "x-t": _0x343530,
    "x-bx-version": "6.5.90",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "1551089129819%40eleme_android_10.14.3",
    "x-app-ver": "10.14.3",
    "x-umt": umt,
    "x-utdid": utdid,
    "x-appkey": "24895413",
    "x-page-url": rpageId,
    Host: "waimai-guide.ele.me",
    "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B12%3BGoogle%3BPixel+4+XL%29",
    "x-sid": _0x4aaf05,
    "x-uid": _0x297a62,
    asac: "2A21119A45TTVAEXP40N7N"
  };
  headers = _0x18f6d4;
  url = "https://waimai-guide.ele.me/gw/mtop.alibaba.svip.langrisser.act/1.0/?data=" + encodeURIComponent(_0x47239b) + "&type=originaljson&wua=" + wua;
  return new Promise(_0x4bad95 => {});
}
async function runOne(_0x5dfb6, _0x2816c8, _0x306a44 = "SIMPLESIGNIN", _0x4466d3 = null) {
  rData = "{\"resId\":\"223166\",\"source\":\"mtop\",\"extra\":\"{\\\"missionDefId\\\":" + _0x5dfb6 + ",\\\"missionCollectionId\\\":" + _0x2816c8 + ",\\\"missionType\\\":\\\"" + _0x306a44 + "\\\",\\\"source\\\":\\\"mtop\\\",\\\"missionXId\\\":\\\"" + _0x4466d3 + "\\\"}\",\"callSource\":\"biz_code_main\",\"latitude\":\"30.202044993638992\",\"longitude\":\"120.20137779414654\"}";
  rApi = "mtop.alibaba.svip.langrisser.act";
  rpageId = encodeURIComponent("https://air.tb.ele.me/app/conch-page/svip-home-tasklist-new/home?navType=4&status_bar_transparent=true&latitude=30.202044993638992&pha=true&hideNavbar=1&longitude=120.20137779414654");
  let _0x20a5c1 = ckMap.get("cookie2");
  let _0x561e9a = ckMap.get("unb");
  var _0x246e04 = await getJson(rData, rApi, rpageId, _0x20a5c1, _0x561e9a, deviceId, utdid);
  _0x246e04 = JSON.parse(_0x246e04);
  sgext = encodeURIComponent(_0x246e04["x-sgext"]);
  xsign = encodeURIComponent(_0x246e04["x-sign"]);
  umt = encodeURIComponent(_0x246e04["x-umt"]);
  mini_wua = encodeURIComponent(_0x246e04["x-mini-wua"]);
  let _0x1644c9 = _0x246e04["x-t"];
  wua = encodeURIComponent(_0x246e04.wua);
  const _0x4995fd = {
    "x-sgext": sgext,
    "x-sign": xsign,
    "x-devid": deviceId,
    "x-pv": "6.3",
    "x-features": "1051",
    "x-mini-wua": mini_wua,
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "x-t": _0x1644c9,
    "x-bx-version": "6.5.90",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "1551089129819%40eleme_android_10.14.3",
    "x-app-ver": "10.14.3",
    "x-umt": umt,
    "x-utdid": utdid,
    "x-appkey": "24895413",
    "x-page-url": rpageId,
    Host: "waimai-guide.ele.me",
    "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B12%3BGoogle%3BPixel+4+XL%29",
    "x-sid": _0x20a5c1,
    "x-uid": _0x561e9a,
    asac: "2A21119A45TTVAEXP40N7N"
  };
  headers = _0x4995fd;
  url = "https://waimai-guide.ele.me/gw/mtop.alibaba.svip.langrisser.act/1.0/?data=" + encodeURIComponent(rData) + "&type=originaljson&wua=" + wua;
  return new Promise(_0x419f53 => {});
}
async function runOne15Task() {
  let _0x5e45e2 = await queryTask();
  for (var _0x487e04 in _0x5e45e2.data.data) {
    let _0x33871b = _0x5e45e2.data.data[_0x487e04].data;
    for (let _0x43f1c4 = 0; _0x43f1c4 < _0x33871b.length; _0x43f1c4++) {
      let _0x3f4470 = _0x33871b[_0x43f1c4];
      const _0x20c308 = _0x3f4470.missionType;
      if (!("PAGEVIEW" === _0x20c308)) {
        let _0x4dd1db = await runOne(_0x3f4470.missionDefId, _0x3f4470.missionCollectionId, "SIMPLESIGNIN", _0x3f4470.missionXId);
        console.log((_0x3f4470.showTitle + "：" || "") + (_0x4dd1db.data.msgInfo || _0x4dd1db.ret || "success✅"));
        await wait(getRandom(3, 5));
      }
    }
  }
}
async function runOne15(_0x217fdc, _0x34d007, _0x2592ec, _0x4c8a21, _0x4613f0) {
  l = new Date().getTime();
  const _0xff80b8 = {
    collectionId: _0x2592ec,
    missionId: _0x34d007,
    actionCode: "PAGEVIEW",
    pageFrom: _0x4c8a21,
    missionXId: _0x4613f0,
    viewTime: 15,
    bizScene: "svip",
    accountPlan: "HAVANA_COMMON",
    sync: true,
    asac: "2A21119A45TTVAEXP40N7N",
    ua: "defaultUA1_uab_not_loaded@@" + _0x217fdc + "@@" + l,
    umidtoken: "defaultToken1_um_not_loaded@@" + _0x217fdc + "@@" + l
  };
  rData = JSON.stringify(_0xff80b8);
  rApi = "mtop.ele.biz.growth.task.event.pageview";
  rpageId = _0x217fdc + "?missioncollectid=" + _0x2592ec + "&missionid=" + _0x34d007 + "&taskfrom=" + _0x4c8a21 + "&bizscene=svip&taskpageviewasac=2A21119A45TTVAEXP40N7N&longitude=120.37615790963173&latitude=30.153526850044727&spm=a2ogi.bx105771.tasklayer_scantask.3";
  rpageId = encodeURIComponent(rpageId);
  let _0x344b03 = ckMap.get("cookie2");
  let _0x3f583a = ckMap.get("unb");
  var _0x4c2a3d = await getJson(rData, rApi, rpageId, _0x344b03, _0x3f583a, deviceId, utdid);
  _0x4c2a3d = JSON.parse(_0x4c2a3d);
  sgext = encodeURIComponent(_0x4c2a3d["x-sgext"]);
  xsign = encodeURIComponent(_0x4c2a3d["x-sign"]);
  umt = encodeURIComponent(_0x4c2a3d["x-umt"]);
  mini_wua = encodeURIComponent(_0x4c2a3d["x-mini-wua"]);
  let _0x579589 = _0x4c2a3d["x-t"];
  wua = encodeURIComponent(_0x4c2a3d.wua);
  const _0x198427 = {
    "x-sgext": sgext,
    "x-sign": xsign,
    "x-devid": deviceId,
    "x-pv": "6.3",
    "x-features": "1051",
    "x-mini-wua": mini_wua,
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "x-t": _0x579589,
    "x-bx-version": "6.5.90",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "1551089129819%40eleme_android_10.14.3",
    "x-app-ver": "10.14.3",
    "x-umt": umt,
    "x-utdid": utdid,
    "x-appkey": "24895413",
    "x-page-url": rpageId,
    Host: "mtop.ele.me",
    "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B12%3BGoogle%3BPixel+3+XL%29",
    "x-sid": _0x344b03,
    "x-uid": _0x3f583a,
    asac: "2A21119A45TTVAEXP40N7N"
  };
  headers = _0x198427;
  let _0x4d6345 = "wua=" + wua + "&data=" + encodeURIComponent(rData) + "&asac=2A21119A45TTVAEXP40N7N";
  const _0x5b42d1 = {
    body: _0x4d6345,
    method: "POST",
    url: "https://mtop.ele.me/gw/mtop.ele.biz.growth.task.event.pageview/1.0/",
    headers: headers
  };
  return new Promise(_0x113522 => {
    request(_0x5b42d1, (_0x56d61f, _0x2a800b, _0x31bd4f) => {
      if (!_0x56d61f && _0x2a800b.statusCode == 200) {
        console.log(_0x31bd4f);
        _0x113522(JSON.parse(_0x31bd4f));
      }
    });
  });
}
function queryTask() {
  var _0x421eb3 = getToken(t);
  _0x421eb3 = _0x421eb3.split("_")[0];
  const _0x26fa4d = {
    Cookie: t,
    "User-Agent": User_Agent
  };
  var _0x12ad1f = 12574478,
    _0x5555a2 = new Date().getTime(),
    _0x4ac690 = "%7B%22callSource%22%3A%22biz_card_main%22%2C%22lgrsRequestItems%22%3A%22%5B%7B%5C%22resId%5C%22%3A%5C%22224166%5C%22%7D%5D%22%2C%22extra%22%3A%22%7B%5C%22source%5C%22%3A%5C%22mtop%5C%22%7D%22%2C%22latitude%22%3A%2230.201846845448017%22%2C%22longitude%22%3A%22120.20090874284506%22%7D";
  u = sign(_0x421eb3 + "&" + _0x5555a2 + "&" + _0x12ad1f + "&" + decodeURIComponent(_0x4ac690));
  l = "https://waimai-guide.ele.me/h5/mtop.alibaba.svip.langrisser.query/1.0/?jsv=2.6.2&appKey=12574478&t=" + _0x5555a2 + "&sign=" + u + "&data=%7B%22callSource%22%3A%22biz_card_main%22%2C%22lgrsRequestItems%22%3A%22%5B%7B%5C%22resId%5C%22%3A%5C%22224166%5C%22%7D%5D%22%2C%22extra%22%3A%22%7B%5C%22source%5C%22%3A%5C%22mtop%5C%22%7D%22%2C%22latitude%22%3A%2230.201846845448017%22%2C%22longitude%22%3A%22120.20090874284506%22%7D&type=originaljson";
  const _0xd03039 = {
    hostname: "waimai-guide.ele.me",
    headers: _0x26fa4d,
    path: l
  };
  let _0x1ef084 = "";
  return new Promise(_0x10955b => {
    https.get(_0xd03039, _0x3db32c => {
      _0x3db32c.on("data", _0x40d3a7 => {
        _0x1ef084 += _0x40d3a7.toString();
      });
      _0x3db32c.on("end", _0x10f9dc => {
        _0x10955b(JSON.parse(_0x1ef084));
      });
    });
  });
}
function getCoupsRecord() {
  const _0x38c33d = {
    Cookie: t,
    "User-Agent": User_Agent
  };
  const _0xb88ae7 = {
    path: "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?latitude=30.153352&limit=20&longitude=104.153352&offset=0",
    hostname: "h5.ele.me",
    headers: _0x38c33d
  };
  let _0x1f22d5 = "";
  return new Promise(_0x16923e => {
    https.get(_0xb88ae7, _0x67cf68 => {
      _0x67cf68.on("data", _0x5541a1 => {
        _0x5541a1 = _0x5541a1.toString();
        _0x1f22d5 += _0x5541a1;
      });
      _0x67cf68.on("end", () => {
        _0x16923e(JSON.parse(_0x1f22d5));
      });
    });
  });
}
function signIn() {
  a = getToken(t);
  a = a.split("_")[0];
  const _0x160c51 = {
    "content-type": "application/json",
    Cookie: t,
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36"
  };
  headers = _0x160c51;
  r = 12574478;
  c = new Date().getTime();
  l = "{\"bizScene\":\"svip_sign_scene\",\"asac\":\"2A227051WYEVFLNT5WTFAM\",\"unionId\":\"o_PVDuGAltr6cWSNlAI_vhPxlmRc\",\"latitude\":\"32.114736\",\"longitude\":\"119.414544\"}";
  d = sign(a + "&" + c + "&" + r + "&" + l);
  f = "https://mtop.ele.me/h5/mtop.koubei.interactioncenter.sign.component.recordsignin/1.0/?jsv=2.6.2&appKey=12574478&t=" + c + "&sign=" + d + "&api=mtop.koubei.interactioncenter.sign.component.recordsignin&v=1.0&type=originaljson&dataType=json&dangerouslySetWindvaneParams=%7B%22instanceid%22%3A%22INNER%22%7D&xua=true&location=true&isSec=1&needWua=true&isNeedwua=true&secType=2&timeout=8000&valueType=original&ttid=wxece3a9a4c82f58c9%40wechat_android_10.11.7&data=" + encodeURIComponent(l);
  const _0x549a3f = {
    hostname: "mtop.ele.me",
    headers: headers,
    path: f
  };
  let _0x2bc802 = "";
  return new Promise(_0x58d5cc => {
    https.get(_0x549a3f, _0x1e300d => {
      _0x1e300d.on("data", _0x24b3a2 => {
        _0x2bc802 += _0x24b3a2.toString();
        setTimeout(() => {
          _0x58d5cc(JSON.parse(_0x2bc802));
        }, 500);
      });
    });
  });
}
const getUserInfo = () => {
  const _0x1a6044 = {
    Cookie: t,
    "user-agent": User_Agent
  };
  const _0x48bf0c = {
    hostname: "restapi.ele.me",
    path: "/eus/v5/user_detail",
    headers: _0x1a6044
  };
  let _0x25b165 = "";
  return new Promise(_0x24de7d => {
    https.get(_0x48bf0c, _0x31f404 => {
      _0x31f404.on("data", _0x1d315a => {
        _0x25b165 += _0x1d315a.toString();
      });
      _0x31f404.on("end", () => {
        _0x24de7d(JSON.parse(_0x25b165));
      });
    });
  });
};
(async function a() {
  for (let _0x5dbd9d = 0; _0x5dbd9d < CookieEles.length; _0x5dbd9d++) {
    t = CookieEles[_0x5dbd9d];
    ckMap = getCookieMap(t);
    deviceId = randomString(44);
    utdid = randomString(24);
    if (!t) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        t = await checkCk(t);
        if (t == login_tips) {
          console.log("第", _0x5dbd9d + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        let _0x27c653 = await getUserInfo();
        if (_0x27c653.name == "UNAUTHORIZED") {
          console.log("第", _0x5dbd9d + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        console.log("******开始【饿了么账号", _0x5dbd9d + 1, "】", _0x27c653.username, "*********");
        let _0x11ee37 = await getCoupsRecord();
        console.log("【当前吃货豆😋】:", _0x11ee37.peaCount);
        let _0xa57869 = await signIn();
        if (_0xa57869.data.errorMsg) {
          console.log("【签到信息】:", _0xa57869.data.popupTitle || _0xa57869.data.errorMsg);
        }
        await runOne15Task();
        let _0x5dab63 = await getCoupsRecord();
        let _0x148411 = await getMonthRecord();
        console.log("【当前吃货豆😋】:", _0x5dab63.peaCount, ",今日获取吃货豆😋：", _0x148411);
      } catch (_0x5b07a3) {
        console.log(_0x5b07a3);
      }
    }
  }
  process.exit(0);
})();
function getCurrentTime() {
  var _0x52eb55 = new Date(),
    _0x1c1a0e = _0x52eb55.getMonth() + 1,
    _0x174055 = _0x52eb55.getDate();
  _0x1c1a0e <= 9 && (_0x1c1a0e = "0" + _0x1c1a0e);
  _0x174055 <= 9 && (_0x174055 = "0" + _0x174055);
  return _0x52eb55.getFullYear() + "-" + _0x1c1a0e + "-" + _0x174055;
}
async function getMonthRecord() {
  const _0x3e6435 = {
    "content-type": "application/json",
    Cookie: t,
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36"
  };
  s = _0x3e6435;
  r = "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?offset=0&limit=100&longitude=39.916527&latitude=116.397128";
  const _0x2c5ab8 = {
    hostname: "h5.ele.me",
    path: r,
    headers: s
  };
  let _0x2ac0ed = "";
  return new Promise(_0x4eca12 => {
    https.get(_0x2c5ab8, _0x48e795 => {
      _0x48e795.on("data", _0x320d69 => {
        _0x2ac0ed += _0x320d69.toString();
      });
      _0x48e795.on("end", () => {
        try {
          var _0xba24c7 = JSON.parse(_0x2ac0ed);
          for (var _0x1847a3 = getCurrentTime(), _0x16cc58 = _0xba24c7.records, _0x59045e = 0, _0x219c4d = 0; _0x219c4d < _0x16cc58.length; _0x219c4d++) {
            _0x16cc58[_0x219c4d].createdTime.indexOf(_0x1847a3) > -1 && 1 == _0x16cc58[_0x219c4d].optType && (_0x59045e += _0x16cc58[_0x219c4d].count);
          }
          _0x4eca12(_0x59045e);
        } catch (_0x3d917a) {
          _0x4eca12(_0x3d917a);
        }
      });
    });
  });
}
function getRandom(_0x333b00, _0x551e31) {
  var _0x2e7ef1 = Math.floor(Math.random() * (_0x551e31 - _0x333b00 + 1) + _0x333b00);
  return _0x2e7ef1;
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}