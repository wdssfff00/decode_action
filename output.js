//Sat Oct 05 2024 14:20:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const bdy_0x3487a0 = require("crypto-js"),
  bdy_0x363a7f = require("got"),
  bdy_0x1f2aa3 = {};
function bdy_0x250b9e() {
  var _0x462f86,
    _0x15b47c = arguments.length > 0 && "undefined" !== arguments[0] ? arguments[0] : {},
    _0xbd844d = _0x15b47c.size,
    _0x2ba4d6 = "undefined" === _0xbd844d ? 10 : _0xbd844d,
    _0x5baf0d = _0x15b47c.num,
    _0x4d25d3 = "";
  if (_0x5baf0d && "string" == typeof _0x5baf0d) {
    _0x462f86 = _0x5baf0d;
  }
  for (; _0x2ba4d6--;) {
    _0x4d25d3 += _0x462f86[Math.floor(Math.random() * _0x462f86.length)];
  }
  return _0x4d25d3;
}
function bdy_0x24b771(_0x45d7a6) {
  let _0x376550 = _0x45d7a6.type,
    _0x3a5674 = "",
    _0x369a8a = _0x45d7a6.customDict;
  if (_0x369a8a && "string" == typeof _0x369a8a) {
    _0x376550 = _0x369a8a;
  } else {
    switch (_0x376550) {
      case "alphabet":
        _0x376550 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      case "max":
        _0x376550 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
        break;
      case "number":
      default:
        _0x376550 = "0123456789";
    }
  }
  for (; _0x45d7a6.size--;) {
    _0x3a5674 += _0x376550[Math.random() * _0x376550.length | 0];
  }
  return _0x3a5674;
}
function bdy_0xaaef9e() {
  var _0x44cac0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
    _0x1ef132 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd",
    _0x5847fd = new Date(_0x44cac0),
    _0x390e75 = _0x1ef132,
    _0x1f89d7 = {
      "M+": _0x5847fd.getMonth() + 1,
      "d+": _0x5847fd.getDate(),
      "D+": _0x5847fd.getDate(),
      "h+": _0x5847fd.getHours(),
      "H+": _0x5847fd.getHours(),
      "m+": _0x5847fd.getMinutes(),
      "s+": _0x5847fd.getSeconds(),
      "w+": _0x5847fd.getDay(),
      "q+": Math.floor((_0x5847fd.getMonth() + 3) / 3),
      "S+": _0x5847fd.getMilliseconds()
    };
  /(y+)/i.test(_0x390e75) && (_0x390e75 = _0x390e75.replace(RegExp.$1, "".concat(_0x5847fd.getFullYear()).substr(4 - RegExp.$1.length)));
  Object.keys(_0x1f89d7).forEach(function (_0x4bce9e) {
    if (new RegExp("(".concat(_0x4bce9e, ")")).test(_0x390e75)) {
      var _0x36da24 = "S+" === _0x4bce9e ? "000" : "00";
      _0x390e75 = _0x390e75.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x1f89d7[_0x4bce9e] : "".concat(_0x36da24).concat(_0x1f89d7[_0x4bce9e]).substr("".concat(_0x1f89d7[_0x4bce9e]).length));
    }
  });
  return _0x390e75;
}
function bdy_0x4c8451(_0x16a236, _0x3d1814, _0x4956a6, _0x37ab99) {
  let _0x106f14 = {
    version: "4.2",
    fp: _0x3d1814,
    appId: _0x16a236,
    timestamp: Date.now(),
    platform: "web",
    expandParams: "",
    fv: "h5_npm_v4.2.0"
  };
  _0x106f14.expandParams = _0x37ab99 || "";
  const _0x48d03e = {
    Host: "cactus.jd.com",
    "Content-Type": "application/json",
    "User-agent": _0x4956a6
  };
  let _0x430558 = {
    url: "https://cactus.jd.com/request_algo?g_ty=ajax",
    body: JSON.stringify(_0x106f14),
    headers: _0x48d03e,
    timeout: 30000
  };
  return new Promise(async _0x3dde37 => {
    bdy_0x46d5f6(_0x430558, (_0x219179, _0x8cd33f, _0xa76c4b) => {
      try {
        if (_0x219179) {
          console.log("" + JSON.stringify(_0x219179));
          console.log("algo请求失败，请检查网路重试");
        } else {
          _0xa76c4b = JSON.parse(_0xa76c4b);
          _0xa76c4b = _0xa76c4b.data.result;
        }
      } catch (_0x1ddaa5) {
        console(_0x1ddaa5, _0x8cd33f);
      } finally {
        _0x3dde37(_0xa76c4b);
      }
    });
  });
}
function bdy_0x1a319d(_0x43c35c) {
  let _0xc8c12b = _0x43c35c.size,
    _0x188c49 = _0x43c35c.num,
    _0x3a44e8 = _0x188c49,
    _0x5316fd = "";
  for (; _0xc8c12b--;) {
    _0x5316fd += _0x3a44e8[Math.random() * _0x3a44e8.length | 0];
  }
  return _0x5316fd;
}
function bdy_0x1a4477(_0x49ca46, _0x16b65f) {
  for (let _0x6ede73 = 0; _0x6ede73 < _0x16b65f.length; _0x6ede73++) {
    let _0xdaf70d = _0x49ca46.indexOf(_0x16b65f[_0x6ede73]);
    _0xdaf70d !== -1 && (_0x49ca46 = _0x49ca46.replace(_0x16b65f[_0x6ede73], ""));
  }
  return _0x49ca46;
}
function bdy_0x9e0785(_0x3755ed, _0x2bf87e) {
  let _0x16850d = [],
    _0x791540 = _0x3755ed.length;
  for (let _0x433905 = 0; _0x433905 < 10; _0x433905++) {
    let _0x10bf3d = _0x3755ed[_0x433905];
    if (Math.random() * _0x791540 < _0x2bf87e && (_0x16850d.push(_0x10bf3d), --_0x2bf87e == 0)) {
      break;
    }
    _0x791540--;
  }
  let _0x6afbb4 = "";
  for (let _0x2eeccb = 0; _0x2eeccb < _0x16850d.length; _0x2eeccb++) {
    let _0x170e5e = Math.random() * (_0x16850d.length - _0x2eeccb) | 0;
    _0x6afbb4 += _0x16850d[_0x170e5e];
    _0x16850d[_0x170e5e] = _0x16850d[_0x16850d.length - _0x2eeccb - 1];
  }
  return _0x6afbb4;
}
function bdy_0x10987b() {
  let _0x45f8fc = "6d0jhqw3pa",
    _0x2a14c8 = bdy_0x9e0785(_0x45f8fc, 4),
    _0x55a1d3 = Math.random() * 10 | 0,
    _0x5e4ad2 = bdy_0x1a4477(_0x45f8fc, _0x2a14c8),
    _0x35c32c = {
      size: _0x55a1d3,
      num: _0x5e4ad2
    };
  let _0x4afbae = bdy_0x1a319d(_0x35c32c) + _0x2a14c8 + bdy_0x1a319d({
      size: 12 - _0x55a1d3 - 1,
      num: _0x5e4ad2
    }) + _0x55a1d3,
    _0x415582 = _0x4afbae.split(""),
    _0x259021 = _0x415582.slice(0, 14),
    _0x2589a1 = _0x415582.slice(14),
    _0xc99114 = [];
  for (; _0x259021.length > 0;) {
    _0xc99114.push((35 - parseInt(_0x259021.pop(), 36)).toString(36));
  }
  _0xc99114 = _0xc99114.concat(_0x2589a1);
  let _0x39641a = _0xc99114.join("");
  return _0x39641a;
}
function bdy_0x4def44(_0x2b4bbd) {
  let _0x4b9048 = _0x2b4bbd.size,
    _0x5306bf = _0x2b4bbd.num,
    _0x2c6134 = "";
  for (; _0x4b9048--;) {
    _0x2c6134 += _0x5306bf[Math.random() * _0x5306bf.length | 0];
  }
  return _0x2c6134;
}
async function bdy_0x1be970() {
  let {
    body: _0x13d88a,
    ua: _0x2b2b47,
    user: _0x1daf87,
    ver: _0x2b860e,
    cl: _0x137a13,
    fn: _0x3690d3,
    appId: _0x41f656,
    code: _0x347240,
    apid: _0x221205,
    xcr: _0x2f09b6,
    nco: _0x52d259
  } = arguments[0];
  const _0x4f91e4 = {
    size: 10,
    type: "max"
  };
  let _0x1a0c89 = bdy_0x24b771(_0x4f91e4),
    _0x1aa76c = bdy_0x24b771({
      size: 10,
      type: "max"
    });
  (!bdy_0x1f2aa3[_0x41f656] || _0x2f09b6) && (bdy_0x1f2aa3[_0x41f656] = {}, bdy_0x1f2aa3[_0x41f656].fp = bdy_0x10987b());
  _0x13d88a = typeof _0x13d88a !== "string" ? JSON.stringify(_0x13d88a) : _0x13d88a;
  let _0x312f5b = ["wc", "wd", "l", "ls", "ml", "pl", "av", "ua", "sua", "pp", "extend", "pp1", "w", "h", "ow", "oh", "url", "og", "pr", "re", "random"],
    _0x575e45 = {};
  const _0x13709d = {
    p1: _0x1daf87
  };
  const _0x30bf39 = {
    wd: 0,
    l: 0,
    ls: 0,
    wk: 0,
    bu1: "9.9.9"
  };
  let _0x38ff04 = [1, 0, "zh-CN", "zh-CN", 0, 0, "", _0x2b2b47, _0x2b2b47.match(/\(([^\)]+)\)/)[1], _0x13709d, _0x30bf39, "", 393, 873, 393, 779, "", "", 2.75, "", _0x1a0c89];
  for (let _0x203a74 in _0x312f5b) {
    _0x575e45[_0x312f5b[_0x203a74]] = _0x38ff04[_0x203a74];
  }
  const _0x123f80 = {
    referer: "",
    v: "h5_npm_v4.2.0",
    ai: _0x41f656,
    fp: bdy_0x1f2aa3[_0x41f656].fp
  };
  const _0x2e8204 = {
    ..._0x575e45,
    ..._0x123f80
  };
  let _0x300775 = _0x2e8204,
    _0x51ae99 = bdy_0x3487a0.AES.encrypt(JSON.stringify(_0x300775, null, 2), bdy_0x3487a0.enc.Utf8.parse("wm0!@w-s#ll1flo("), {
      iv: bdy_0x3487a0.enc.Utf8.parse("0102030405060708"),
      mode: bdy_0x3487a0.mode.CBC,
      padding: bdy_0x3487a0.pad.Pkcs7
    }),
    _0x4df2a5 = _0x51ae99.ciphertext.toString(),
    _0x5a7d33 = new Date().getTime();
  if (!bdy_0x1f2aa3[_0x41f656].tk || _0x2f09b6) {
    let _0xc6251 = await bdy_0x4c8451(_0x41f656, bdy_0x1f2aa3[_0x41f656].fp, _0x2b2b47, _0x4df2a5);
    if (!_0xc6251) {
      _0xc6251 = await bdy_0x4c8451(_0x41f656, bdy_0x1f2aa3[_0x41f656].fp, _0x2b2b47, _0x4df2a5);
    }
    if (!_0xc6251) {
      return "functionId=" + _0x3690d3 + "&appid=" + _0x221205 + "&body=" + _0x13d88a;
    }
    bdy_0x1f2aa3[_0x41f656].tk = _0xc6251.tk;
    bdy_0x1f2aa3[_0x41f656].algo = _0xc6251.algo;
  }
  let _0x1d8159 = new Date().getTime(),
    _0x3feccd = bdy_0xaaef9e(_0x1d8159, "yyyyMMddhhmmssSSS"),
    _0x4ec9fd = bdy_0x1f2aa3[_0x41f656].tk,
    _0x304aa8 = new Function("return " + bdy_0x1f2aa3[_0x41f656].algo)(),
    _0x4f347b = _0x3feccd + "74",
    _0x40d7d0 = await _0x304aa8(_0x4ec9fd, bdy_0x1f2aa3[_0x41f656].fp, _0x4f347b, _0x41f656, bdy_0x3487a0).toString();
  const _0x35aa88 = {
    appid: _0x221205,
    functionId: _0x3690d3,
    body: _0x13d88a
  };
  _0x347240 && (_0x35aa88.t = _0x5a7d33);
  _0x2b860e && (_0x35aa88.clientVersion = _0x2b860e);
  _0x137a13 && (_0x35aa88.client = _0x137a13);
  let _0x840cb = _0x35aa88,
    _0x1296db = ["appid", "body", "client", "clientVersion", "functionId", "t"],
    _0x482306 = _0x1296db.filter(_0x99459d => _0x35aa88[_0x99459d]).map(_0x1987d6 => _0x1987d6 + ":" + (_0x1987d6 == "body" ? bdy_0x3487a0.SHA256(_0x35aa88[_0x1987d6]).toString() : _0x35aa88[_0x1987d6])).join("&"),
    _0xe8bbde = Date.now() > "1727784013000" ? bdy_0x3487a0.MD5(_0x482306).toString(bdy_0x3487a0.enc.Hex) : bdy_0x3487a0.SHA256(_0x40d7d0 + _0x482306 + _0x40d7d0).toString(bdy_0x3487a0.enc.Hex),
    _0x4e36d3 = "",
    _0x287760 = {
      sua: _0x2b2b47.match(/\(([^\)]+)\)/)[1],
      pp: {},
      fp: bdy_0x1f2aa3[_0x41f656].fp
    };
  _0x287760.pp.p1 = _0x1daf87;
  const _0x4ebca3 = {
    wd: 0,
    l: 0,
    ls: 0,
    wk: 0,
    bu1: "9.9.9"
  };
  _0x287760.extend = _0x4ebca3;
  _0x287760.random = _0x1aa76c;
  _0x287760.referer = "";
  _0x287760.v = "h5_npm_v4.2.0";
  let _0x3c66e7 = bdy_0x3487a0.AES.encrypt(JSON.stringify(_0x287760, null, 2), bdy_0x3487a0.enc.Utf8.parse("DNiHi703B0&17hh1"), {
    iv: bdy_0x3487a0.enc.Utf8.parse("0102030405060708"),
    mode: bdy_0x3487a0.mode.CBC,
    padding: bdy_0x3487a0.pad.Pkcs7
  });
  _0x4e36d3 = _0x3c66e7.ciphertext.toString();
  let _0x2b6651 = [_0x3feccd, bdy_0x1f2aa3[_0x41f656].fp, _0x41f656, _0x4ec9fd, _0xe8bbde, 4.2, _0x1d8159, _0x4e36d3].join(";"),
    _0x51f5bc = Object.entries(_0x840cb).map(([_0x1fd902, _0x1b3314]) => _0x1fd902 + "=" + (typeof _0x1b3314 == "string" ? encodeURIComponent(_0x1b3314) : encodeURIComponent(JSON.stringify(_0x1b3314)))).join("&");
  return _0x51f5bc + "&h5st=" + encodeURIComponent(_0x2b6651);
}
function bdy_0x46d5f6(_0x921c84, _0x4bec53 = () => {}) {
  const {
    url: _0x376bfe,
    ..._0x5eceab
  } = _0x921c84;
  bdy_0x363a7f.post(_0x376bfe, _0x5eceab).then(_0x474797 => {
    const {
        statusCode: _0x4bc192,
        statusCode: _0x1f40ad,
        headers: _0x3d8490,
        body: _0x1c4d54
      } = _0x474797,
      _0x304f4e = {
        status: _0x4bc192,
        statusCode: _0x1f40ad,
        headers: _0x3d8490,
        body: _0x1c4d54
      };
    _0x4bec53(null, _0x304f4e, _0x1c4d54);
  }, _0x415e68 => {
    const {
      message: _0x1a17ea,
      response: _0x4e191a
    } = _0x415e68;
    _0x4bec53(_0x1a17ea, _0x4e191a, _0x4e191a && _0x4e191a.body);
  });
}
class bdy_0x248132 {
  constructor(_0x5193b3, _0x460e71, _0x4117bf) {
    this.appId = _0x5193b3;
    this.ua = _0x460e71;
    this.fp = _0x4117bf || this.__genFp();
  }
  __genFp() {
    let _0x1624b3 = "0123456789",
      _0x3f92e1 = 13,
      _0x5ac0c3 = "";
    for (; _0x3f92e1--;) {
      _0x5ac0c3 += _0x1624b3[Math.random() * _0x1624b3.length | 0];
    }
    return (_0x5ac0c3 + Date.now()).slice(0, 16);
  }
  async __genAlgo() {
    this.time = Date.now();
    this.timestamp = format(this.time, "yyyyMMddHHmmssSSS");
    let {
      data: _0x420dbc
    } = await axios.post("https://cactus.jd.com/request_algo?g_ty=ajax", {
      version: "3.0",
      fp: this.fp,
      appId: this.appId.toString(),
      timestamp: this.time,
      platform: "web",
      expandParams: ""
    }, {
      headers: {
        Host: "cactus.jd.com",
        accept: "application/json",
        "content-type": "application/json",
        "user-agent": this.ua
      }
    });
    this.tk = _0x420dbc.data.result.tk;
    this.rd = _0x420dbc.data.result.algo.match(/rd='(.*)'/)[1];
    this.enc = _0x420dbc.data.result.algo.match(/algo\.(.*)\(/)[1];
  }
  __genKey(_0x401f94, _0x2655cd, _0xe69729, _0x364a49, _0x3b7806) {
    let _0x3fddb0 = "" + _0x401f94 + _0x2655cd + _0xe69729 + _0x364a49 + this.rd;
    return _0x3b7806[this.enc](_0x3fddb0, _0x401f94);
  }
  __genH5st(_0x406509) {
    let _0x578a65 = this.__genKey(this.tk, this.fp, this.timestamp, this.appId, CryptoJS).toString(CryptoJS.enc.Hex),
      _0x86ee36 = "";
    for (let _0x221994 of Object.keys(_0x406509)) {
      _0x221994 === "body" ? _0x86ee36 += _0x221994 + ":" + CryptoJS.SHA256(_0x406509[_0x221994]).toString(CryptoJS.enc.Hex) + "&" : _0x86ee36 += _0x221994 + ":" + _0x406509[_0x221994] + "&";
    }
    _0x86ee36 = _0x86ee36.slice(0, -1);
    _0x86ee36 = CryptoJS.HmacSHA256(_0x86ee36, _0x578a65).toString(CryptoJS.enc.Hex);
    return encodeURIComponent(this.timestamp + ";" + this.fp + ";" + this.appId.toString() + ";" + this.tk + ";" + _0x86ee36 + ";3.0;" + this.time.toString());
  }
}
const bdy_0x274d73 = {
  getbody: bdy_0x1be970,
  H5ST: bdy_0x248132
};
module.exports = bdy_0x274d73;