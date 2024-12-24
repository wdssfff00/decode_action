//Tue Dec 24 2024 09:52:21 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x39d0e5 = $.isNode() ? require("./sendNotify") : "";
const _0x445623 = $.isNode() ? require("./jdCookie.js") : "";
const _0x477640 = require("./function/dylanx");
let _0x33dbdd = [];
let _0x3d214c = "";
let _0x50984c;
if ($.isNode()) {
  Object.keys(_0x445623).forEach(_0x2c0284 => {
    _0x33dbdd.push(_0x445623[_0x2c0284]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  _0x33dbdd = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonParse($.getdata("CookiesJD") || "[]").map(_0x3e06b1 => _0x3e06b1.cookie)].filter(_0x2b02af => !!_0x2b02af);
}
!(async () => {
  if (!_0x33dbdd[0]) {
    {
      const _0x436fe8 = {
        "open-url": "https://bean.m.jd.com/bean/signIndex.action"
      };
      $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x436fe8);
      return;
    }
  }
  $.log("\n有问题联系TG-> https://t.me/dylan_jdpro\n");
  for (let _0x5ce76a = 0; _0x5ce76a < _0x33dbdd.length; _0x5ce76a++) {
    {
      if (_0x33dbdd[_0x5ce76a]) {
        {
          _0x3d214c = _0x33dbdd[_0x5ce76a];
          $.UserName = decodeURIComponent(_0x3d214c.match(/pt_pin=([^; ]+)(?=;?)/) && _0x3d214c.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
          $.index = _0x5ce76a + 1;
          $.isLogin = true;
          $.nickName = "";
          _0x50984c = 0;
          await _0x3ed848();
          console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
          if (!$.isLogin) {
            {
              const _0x4cdb05 = {
                "open-url": "https://bean.m.jd.com/bean/signIndex.action"
              };
              $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x4cdb05);
              $.isNode() && (await _0x39d0e5.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
              continue;
            }
          }
          await _0x155755();
          await $.wait(500);
          if (_0x50984c > 10) {
            await _0x19f206();
          } else {
            $.log("过期不到10个，不洗也罢，留给需要的人！\n");
            continue;
          }
          await $.wait(500);
          await _0x3dbb5c();
          await $.wait(2000);
        }
      }
    }
  }
})().catch(_0x29d967 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x29d967 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x19f206() {
  let _0xe0e8af = Math.ceil(_0x50984c / 100) * 100;
  if (_0x50984c >= 100) {
    _0xe0e8af = _0x50984c;
  }
  if (_0xe0e8af >= 500) {
    _0xe0e8af = 500;
  }
  $.log("开始兑换" + _0xe0e8af + "积分\n");
  await _0x3e21f8(1, _0xe0e8af);
  for (let _0x9652c6 = 0; _0x9652c6 < 3 && $.sflag; _0x9652c6++) {
    await $.wait(2000);
    await _0x3e21f8(1, _0xe0e8af);
  }
}
async function _0x155755() {
  const _0x4bc9b3 = {
    pageNo: 1,
    pageSize: 20
  };
  let _0x39d8ef = await _0x477640.getbody("jingBeanDetail", _0x4bc9b3);
  return new Promise(async _0x4f922a => {
    const _0x21f3af = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      Cookie: _0x3d214c,
      "User-Agent": "okhttp/3.12.13"
    };
    const _0x1b55e4 = {
      url: "https://api.m.jd.com/client.action",
      body: "functionId=jingBeanDetail&" + _0x39d8ef,
      headers: _0x21f3af
    };
    $.post(_0x1b55e4, (_0x4480f8, _0x5ce9e8, _0x42aea0) => {
      try {
        {
          if (_0x4480f8) {
            console.log("" + JSON.stringify(_0x4480f8));
            console.log("getexpirebeans API请求失败，请检查网路重试");
          } else {
            if (_0x42aea0) {
              {
                _0x42aea0 = JSON.parse(_0x42aea0);
                if (_0x42aea0.code === 0) {
                  _0x42aea0.others?.["jingBeanExpire"]?.["title"]?.["includes"]("7天内过期") && (_0x50984c = _0x42aea0.others.jingBeanExpire.title.match(/\d+/)[0], $.log("近七天将过期" + _0x50984c + "个"));
                } else {
                  {
                    $.log(JSON.stringify(_0x42aea0));
                  }
                }
              }
            } else {
              console.log("京东服务器返回空数据");
            }
          }
        }
      } catch (_0x36af9e) {
        $.logErr(_0x36af9e, _0x5ce9e8);
      } finally {
        {
          _0x4f922a();
        }
      }
    });
  });
}
function _0x3dbb5c() {
  return new Promise(async _0x572696 => {
    $.post(_0x14b6ce("integralHistory", "[{\"pin\":\"$cooMrdGatewayUid$\", \"pageSize\":10,\"pageNo\":1}]"), (_0x30e8bd, _0x376600, _0x3c0b60) => {
      try {
        if (_0x30e8bd) {
          $.log("" + JSON.stringify(_0x30e8bd));
          $.log(" API请求失败，请检查网路重试");
        } else {
          _0x3c0b60 = JSON.parse(_0x3c0b60);
          if (_0x3c0b60.success) {
            $.log("积分收支记录：");
            let _0x4e8169 = _0x3c0b60.content.slice(0, 7);
            _0x4e8169.forEach(_0x4fdba4 => {
              console.log(_0x4fdba4.sceneName + "：" + _0x4fdba4.integration + " at " + new Date(_0x4fdba4.createTime).toLocaleString());
            });
          }
        }
      } catch (_0x4ec789) {
        $.log(_0x4ec789, _0x376600);
      } finally {
        {
          _0x572696();
        }
      }
    });
  });
}
function _0x38ecad() {
  return new Promise(async _0x4b5c22 => {
    $.post(_0x14b6ce("userAccount", "[{\"pin\":\"$cooMrdGatewayUid$\"}]"), (_0x31ea6d, _0x3674a9, _0x352b93) => {
      try {
        {
          if (_0x31ea6d) {
            {
              $.log("" + JSON.stringify(_0x31ea6d));
              $.log(" API请求失败，请检查网路重试");
            }
          } else {
            _0x352b93 = JSON.parse(_0x352b93);
            _0x352b93.success && ($.cu_integral = _0x352b93.content.integral, $.log("当前总积分：" + $.cu_integral + "\n"));
          }
        }
      } catch (_0xa5c067) {
        {
          $.log(_0xa5c067, _0x3674a9);
        }
      } finally {
        {
          _0x4b5c22();
        }
      }
    });
  });
}
function _0x3e21f8(_0x4729e5, _0x3bd3ef) {
  let _0x1e6b5a;
  $.sflag = false;
  _0x4729e5 == 1 ? _0x1e6b5a = "京豆兑换物流积分" : _0x1e6b5a = "物流积分兑换京豆";
  let _0x461428 = _0x177996("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
  let _0xdcb27a = "[{\"businessNo\":\"" + _0x461428 + "\",\"title\":\"" + _0x1e6b5a + "\",\"pin\" : \"$cooMrdGatewayUid$\",\"type\":" + _0x4729e5 + ",\"transferNumber\":" + _0x3bd3ef + " }]";
  return new Promise(_0x6bbc92 => {
    {
      $.post(_0x14b6ce("transfer", _0xdcb27a), (_0x35f6ba, _0x1bb8de, _0x34f64c) => {
        try {
          {
            if (_0x35f6ba) {
              $.log(JSON.stringify(_0x35f6ba));
              $.log("请求失败");
            } else {
              _0x34f64c = JSON.parse(_0x34f64c);
              if (_0x34f64c.code == 1) {
                $.log("兑换成功！\n");
              } else {
                if (_0x34f64c.code == 2005) {
                  $.log("今日兑换额度已达上限，明日赶早！\n");
                } else {
                  $.sflag = true;
                  if (JSON.stringify(_0x34f64c).includes("风控")) {
                    $.sflag = false;
                  }
                  console.log(JSON.stringify(_0x34f64c));
                  console.log("\n兑换失败，重试\n");
                }
              }
            }
          }
        } catch (_0xb1e7df) {
          $.log(_0xb1e7df, _0x1bb8de);
        } finally {
          _0x6bbc92();
        }
      });
    }
  });
}
async function _0xde9b5d() {
  for (let _0x4eacb4 = 0; _0x4eacb4 < _0x33dbdd.length; _0x4eacb4++) {
    {
      let _0x2b5c7b = ["pVbNk9xIuI02DeRtwUiztA==", "s4UuZYFN6GW3jbg4x9Z8LA==", "Vf+kZwVHm4/P5/ZkyCY+DA==", "4y1yGPA4HCaFNCw8BZ6gsw=="];
      let _0x19547e = _0x29ba89(_0x2b5c7b, 1)[0];
      await _0xf1d9d2(_0x33dbdd[_0x4eacb4], _0x19547e);
      await _0x3fd7c3(_0x33dbdd[_0x4eacb4], _0x19547e);
      await _0x256b3f(_0x33dbdd[_0x4eacb4], _0x19547e);
      await _0x5d8241(_0x33dbdd[_0x4eacb4], _0x19547e);
      await $.wait(500);
    }
  }
}
async function _0xf1d9d2(_0x1bf9cc, _0x346d5c) {
  let _0x4a43e8 = +new Date();
  let _0x5de828 = {
    url: "https://api.m.jd.com/?t=" + _0x4a43e8,
    body: "functionId=InviteFriendChangeAssertsService&body=" + JSON.stringify({
      method: "attendInviteActivity",
      data: {
        inviterPin: encodeURIComponent(_0x346d5c),
        channel: 1,
        token: "",
        frontendInitStatus: ""
      }
    }) + "&referer=-1&eid=eidI9b2981202fsec83iRW1nTsOVzCocWda3YHPN471AY78%2FQBhYbXeWtdg%2F3TCtVTMrE1JjM8Sqt8f2TqF1Z5P%2FRPGlzA1dERP0Z5bLWdq5N5B2VbBO&aid=&client=ios&clientVersion=14.4.2&networkType=wifi&fp=-1&uuid=ab048084b47df24880613326feffdf7eee471488&osVersion=14.4.2&d_brand=iPhone&d_model=iPhone10,2&agent=-1&pageClickKey=-1&platform=3&lang=zh_CN&appid=market-task-h5&_t=" + _0x4a43e8,
    headers: {
      Host: "api.m.jd.com",
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/x-www-form-urlencoded",
      Origin: "https://invite-reward.jd.com",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "User-Agent": $.isNode() ? process.env.JS_USER_AGENT ? process.env.JS_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JSUA") ? $.getdata("JSUA") : "'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
      Referer: "https://invite-reward.jd.com/",
      "Accept-Encoding": "gzip, deflate, br",
      Cookie: _0x1bf9cc
    }
  };
  $.post(_0x5de828, (_0x5552ee, _0x2e379b, _0x1eef3b) => {});
}
async function _0x3fd7c3(_0x55fdc3, _0x2ea950) {
  let _0x573160 = {
    url: "https://api.m.jd.com/",
    body: "functionId=TaskInviteService&body=" + JSON.stringify({
      method: "participateInviteTask",
      data: {
        channel: "1",
        encryptionInviterPin: encodeURIComponent(_0x2ea950),
        type: 1
      }
    }) + "&appid=market-task-h5&uuid=&_t=" + Date.now(),
    headers: {
      Host: "api.m.jd.com",
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/x-www-form-urlencoded",
      Origin: "https://assignment.jd.com",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "User-Agent": $.isNode() ? process.env.JS_USER_AGENT ? process.env.JS_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JSUA") ? $.getdata("JSUA") : "'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
      Referer: "https://assignment.jd.com/",
      "Accept-Encoding": "gzip, deflate, br",
      Cookie: _0x55fdc3
    }
  };
  $.post(_0x573160, (_0x489b60, _0x584c88, _0x170f95) => {});
}
async function _0x256b3f(_0x43415f, _0x531671) {
  let _0x4cad40 = Date.now();
  var _0x853789 = {
    Host: "api.m.jd.com",
    accept: "application/json, text/plain, */*",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://invite-reward.jd.com",
    "accept-language": "zh-cn",
    "user-agent": $.isNode() ? process.env.JS_USER_AGENT ? process.env.JS_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JSUA") ? $.getdata("JSUA") : "'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
    referer: "https://invite-reward.jd.com/",
    Cookie: _0x43415f
  };
  var _0x43555d = "functionId=InviteFriendApiService&body={\"method\":\"attendInviteActivity\",\"data\":{\"inviterPin\":\"" + encodeURIComponent(_0x531671) + "\",\"channel\":1,\"token\":\"\",\"frontendInitStatus\":\"\"}}&referer=-1&eid=eidIf3dd8121b7sdmiBLGdxRR46OlWyh62kFAZogTJFnYqqRkwgr63%2BdGmMlcv7EQJ5v0HBic81xHXzXLwKM6fh3i963zIa7Ym2v5ehnwo2B7uDN92Q0&aid=&client=ios&clientVersion=14.4&networkType=wifi&fp=-1&appid=market-task-h5&_t=" + _0x4cad40;
  var _0x9cd3f2 = {
    url: "https://api.m.jd.com/?t=" + Date.now(),
    headers: _0x853789,
    body: _0x43555d
  };
  $.post(_0x9cd3f2, (_0x163cb2, _0x59975f, _0x414b26) => {});
}
async function _0x5d8241(_0x17d38f, _0xb8acb4) {
  let _0x554fd6 = Date.now();
  let _0x408804 = {
    Host: "api.m.jd.com",
    accept: "application/json, text/plain, */*",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://assignment.jd.com",
    "accept-language": "zh-cn",
    "user-agent": $.isNode() ? process.env.JS_USER_AGENT ? process.env.JS_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JSUA") ? $.getdata("JSUA") : "'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
    referer: "https://assignment.jd.com/?inviterId=" + encodeURIComponent(_0xb8acb4),
    Cookie: _0x17d38f
  };
  let _0x3e4129 = "functionId=TaskInviteService&body={\"method\":\"participateInviteTask\",\"data\":{\"channel\":\"1\",\"encryptionInviterPin\":\"" + encodeURIComponent(_0xb8acb4) + "\",\"type\":1}}&appid=market-task-h5&uuid=&_t=" + _0x554fd6;
  var _0x48ef12 = {
    url: "https://api.m.jd.com/",
    headers: _0x408804,
    body: _0x3e4129
  };
  $.post(_0x48ef12, (_0x1474eb, _0x1a77b7, _0x44c6ba) => {});
}
function _0x29ba89(_0x2971ee, _0x2b9327) {
  var _0x5daf9d = _0x2971ee.slice(0);
  var _0x10f083 = _0x2971ee.length;
  var _0x15eb5c = _0x10f083 - _0x2b9327;
  var _0x2b666f;
  var _0x28eace;
  while (_0x10f083-- > _0x15eb5c) {
    _0x28eace = Math.floor((_0x10f083 + 1) * Math.random());
    _0x2b666f = _0x5daf9d[_0x28eace];
    _0x5daf9d[_0x28eace] = _0x5daf9d[_0x10f083];
    _0x5daf9d[_0x10f083] = _0x2b666f;
  }
  return _0x5daf9d.slice(_0x15eb5c);
}
function _0x14b6ce(_0x5a48ed, _0x1ef6d3) {
  const _0x2df006 = {
    Accept: _0x84897e.szNXH,
    Cookie: _0x3d214c,
    "Accept-Language": "zh-cn",
    Referer: _0x84897e.DjDoR,
    "Accept-Encoding": "gzip, deflate, br",
    AppParams: _0x84897e.cedpp,
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.1 Mobile/16A366 Safari/604.1",
    access: "H5",
    "LOP-DN": "jingcai.jd.com"
  };
  _0x2df006.Accept = "*/*";
  _0x2df006.Cookie = _0x3d214c;
  _0x2df006["Accept-Language"] = "zh-cn";
  _0x2df006.Referer = "https://jingcai-h5.jd.com/";
  _0x2df006["Accept-Encoding"] = "gzip, deflate, br";
  _0x2df006.AppParams = "{\"appid\":158,\"ticket_type\":\"m\"}";
  _0x2df006["User-Agent"] = "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.1 Mobile/16A366 Safari/604.1";
  _0x2df006.access = "H5";
  _0x2df006["LOP-DN"] = "jingcai.jd.com";
  _0x2df006["Accept-Language"] = "zh-cn";
  _0x2df006.Accept = "application/json, text/plain, */*";
  _0x2df006["Content-Type"] = "application/json;charset=utf-8";
  const _0x15f2ca = {
    url: "https://lop-proxy.jd.com/JingIntegralApi/" + _0x5a48ed,
    headers: _0x2df006,
    body: _0x1ef6d3
  };
  return _0x15f2ca;
}
function _0x177996(_0x43c693 = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", _0x42c435 = 0) {
  return _0x43c693.replace(/[xy]/g, function (_0x336248) {
    {
      var _0x456bfa = Math.random() * 16 | 0;
      var _0x472bfa = _0x336248 == "x" ? _0x456bfa : _0x456bfa & 3 | 8;
      if (_0x42c435) {
        busNo = _0x472bfa.toString(36).toUpperCase();
      } else {
        {
          busNo = _0x472bfa.toString(36);
        }
      }
      return busNo;
    }
  });
}
function _0x3ed848() {
  return new Promise(async _0x12bd24 => {
    {
      const _0x1e23f1 = {
        url: "https://wq.jd.com/user_new/info/GetJDUserInfoUnion?sceneval=2",
        headers: {
          Host: "wq.jd.com",
          Accept: "*/*",
          Connection: "keep-alive",
          Cookie: _0x3d214c,
          "User-Agent": $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
          "Accept-Language": "zh-cn",
          Referer: "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
          "Accept-Encoding": "gzip, deflate, br"
        }
      };
      $.get(_0x1e23f1, (_0x50a4ce, _0x5d7377, _0x5a0d1a) => {
        try {
          if (_0x50a4ce) {
            $.logErr(_0x50a4ce);
          } else {
            {
              if (_0x5a0d1a) {
                {
                  _0x5a0d1a = JSON.parse(_0x5a0d1a);
                  if (_0x5a0d1a.retcode === 1001) {
                    $.isLogin = false;
                    return;
                  }
                  if (_0x5a0d1a.retcode === 0 && _0x5a0d1a.data && _0x5a0d1a.data.hasOwnProperty("userInfo")) {
                    {
                      $.nickName = _0x5a0d1a.data.userInfo.baseInfo.nickname;
                    }
                  }
                }
              } else {
                console.log("京东服务器返回空数据");
              }
            }
          }
        } catch (_0x35488f) {
          $.logErr(_0x35488f);
        } finally {
          _0x12bd24();
        }
      });
    }
  });
}