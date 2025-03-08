//Sat Mar 08 2025 12:43:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x397d2d = $.isNode() ? require("./jdCookie.js") : "",
  _0x1210e5 = require("./function/dylank");
let _0x3fe89e = [],
  _0x1b13db = "",
  _0x312024 = 0;
if ($.isNode()) {
  Object.keys(_0x397d2d).forEach(_0xdad163 => {
    _0x3fe89e.push(_0x397d2d[_0xdad163]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x3fe89e = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x4bc8ae($.getdata("CookiesJD") || "[]").map(_0x286aa9 => _0x286aa9.cookie)].filter(_0x29b175 => !!_0x29b175);
!(async () => {
  if (!_0x3fe89e[0]) {
    {
      $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
        "open-url": "https://bean.m.jd.com/bean/signIndex.action"
      });
      return;
    }
  }
  $.log("快速缓存token,用于开卡类任务");
  $.log("token有效期20多分钟，定时按需改");
  $.log("支持代理PAI DY_PROXY='url'");
  for (let _0xdbc1ac = 0; _0xdbc1ac < _0x3fe89e.length; _0xdbc1ac++) {
    {
      if (_0x3fe89e[_0xdbc1ac]) {
        _0x1b13db = _0x3fe89e[_0xdbc1ac];
        $.UserName = decodeURIComponent(_0x1b13db.match(/pt_pin=([^; ]+)(?=;?)/) && _0x1b13db.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0xdbc1ac + 1;
        $.nickName = "";
        if (_0x312024 > 2) {
          console.log("连续三次获取失败，可能限制ip，停止执行！！！");
          break;
        }
        console.log("\n------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
        $.Token = await _0x1210e5(_0x1b13db, "https://lzdz1-isv.isvjcloud.com");
        $.Token == "" ? _0x312024++ : _0x312024 = 0;
        await $.wait(2000);
      }
    }
  }
})().catch(_0x4b0d5 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x4b0d5 + "!", "");
}).finally(() => {
  $.done();
});
function _0x4bc8ae(_0x51f9c6) {
  if (typeof _0x51f9c6 == "string") try {
    return JSON.parse(_0x51f9c6);
  } catch (_0x3a39c5) {
    console.log(_0x3a39c5);
    $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
    return [];
  }
}