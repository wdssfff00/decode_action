//Wed Jul 31 2024 19:32:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    getEnvsByName: _0x4a6dd6,
    DisableCk: _0x40be8c,
    EnableCk: _0x3afedc,
    updateEnv: _0x50a948,
    updateEnv11: _0x168e9c,
    getEnvByUserId: _0x13fbd3
  } = require("./ql"),
  {
    wait: _0xe5d73,
    validateCarmeWithType: _0x346edb,
    invalidCookieNotify: _0x3041c8,
    runOne: _0x4008fe,
    getCookieMap: _0x22c71f,
    getUserInfoWithX: _0xe9b66
  } = require("./common.js"),
  _0x23275 = require("moment");
(function () {
  let _0xe93f0c;
  try {
    const _0x3eb3c7 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0xe93f0c = _0x3eb3c7();
  } catch (_0x43460c) {
    _0xe93f0c = window;
  }
  _0xe93f0c.setInterval(_0x29a186, 2000);
})();
const _0x23dba0 = process.env.ELE_CARME,
  _0x36fc44 = 21;
function _0x25110c(_0x1129ba, _0x422b7a) {
  return Math.floor(Math.random() * (_0x422b7a - _0x1129ba + 1) + _0x1129ba);
}
function _0x1f796b(_0x15701f) {
  let _0x52de5b = "";
  for (let [_0x2bbd97, _0x124c57] of _0x15701f) {
    _0x52de5b += encodeURIComponent(_0x2bbd97) + "=" + encodeURIComponent(_0x124c57) + ";";
  }
  return _0x52de5b;
}
async function _0xe8f92a(_0x1a2259, _0x5ac5c1, _0x59fa13) {
  let _0x158996 = await _0x4008fe(_0x5ac5c1, _0x59fa13, _0x36fc44);
  if (_0x158996 && _0x158996.data) {
    let _0x305908 = _0x158996.data;
    if (_0x305908.code === 3000) {
      let _0x18c3a0 = JSON.parse(_0x305908.returnValue.data);
      const _0x1ba9d1 = _0x18c3a0.expires,
        _0x5a5d0f = _0x23275(_0x1ba9d1 * 1000).format("YYYY-MM-DD HH:mm:ss");
      let _0x2cbb0f = _0x22c71f(_0x5ac5c1),
        _0x6e7d54 = JSON.parse(_0x305908.returnValue.extMap.eleExt);
      for (let _0x9954be = 0; _0x9954be < _0x6e7d54.length; _0x9954be++) {
        let _0x16397f = _0x6e7d54[_0x9954be];
        if (_0x16397f.name === "SID") {
          _0x2cbb0f.SID = _0x16397f.value;
          break;
        }
      }
      let _0x1f4bc8 = await _0x4008fe(_0x5ac5c1, _0x2cbb0f.get("SID"), _0x36fc44);
      if (!_0x1f4bc8) {
        return;
      }
      _0x2cbb0f.cookie2 = _0x305908.returnValue.sid;
      let _0x573daa = _0x1f796b(_0x2cbb0f);
      _0x1a2259.id ? await _0x168e9c(_0x573daa, _0x1a2259.id, _0x1a2259.remarks) : await _0x50a948(_0x573daa, _0x1a2259._id, _0x1a2259.remarks);
      let _0x1287a2 = _0x2cbb0f.get("USERID"),
        _0x3921b5 = await _0x13fbd3(_0x1287a2);
      if (_0x3921b5) {
        console.log("检测到 elmqqck，将进行同步刷新");
        if (_0x3921b5.id) {
          await _0x168e9c(_0x573daa, _0x3921b5.id, _0x3921b5.remarks, "elmqqck");
        } else await _0x50a948(_0x573daa, _0x3921b5._id, _0x3921b5.remarks, "elmqqck");
      }
      let _0x56a720 = "刷新成功，ck 有效期为：" + _0x5a5d0f;
      return console.log(_0x56a720), _0x56a720;
    } else {
      return _0x305908.message ? console.log(_0x305908.message) : console.log(_0x158996.ret[0]), null;
    }
  }
}
(async function _0x13d7b1() {
  const _0xb7adfc = function () {
    let _0xa341e9 = true;
    return function (_0x23b362, _0x28f524) {
      const _0x127bbb = _0xa341e9 ? function () {
        if (_0x28f524) {
          const _0x413f4f = _0x28f524.apply(_0x23b362, arguments);
          return _0x28f524 = null, _0x413f4f;
        }
      } : function () {};
      return _0xa341e9 = false, _0x127bbb;
    };
  }();
  (function () {
    _0xb7adfc(this, function () {
      const _0x5e0301 = new RegExp("function *\\( *\\)"),
        _0x318baa = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
        _0x3ac347 = _0x29a186("init");
      !_0x5e0301.test(_0x3ac347 + "chain") || !_0x318baa.test(_0x3ac347 + "input") ? _0x3ac347("0") : _0x29a186();
    })();
  })();
  await _0x346edb(_0x23dba0, 1);
  const _0x1090da = await _0x4a6dd6("elmck");
  for (let _0x503784 = 0; _0x503784 < _0x1090da.length; _0x503784++) {
    let _0x446c42 = _0x1090da[_0x503784].value;
    if (!_0x446c42) console.log(" ❌无效用户信息, 请重新获取ck");else try {
      var _0x407e9f = 0;
      _0x1090da[_0x503784]._id && (_0x407e9f = _0x1090da[_0x503784]._id);
      _0x1090da[_0x503784].id && (_0x407e9f = _0x1090da[_0x503784].id);
      _0x446c42 = _0x446c42.replace(/\s/g, "");
      let _0xf31245 = await _0xe9b66(_0x446c42, _0x36fc44);
      if (_0xf31245 && (_0xf31245[0] || !_0xf31245.userName)) {
        let _0x4823ff = await _0xe8f92a(_0x1090da[_0x503784], _0x446c42);
        if (_0x4823ff && _0x4823ff.indexOf("刷新成功") !== -1) {
          await _0x3afedc(_0x407e9f);
          console.log("第", _0x503784 + 1, "账号正常😁\n");
        } else {
          const _0x1d049e = await _0x40be8c(_0x407e9f);
          _0x1d049e.code === 200 ? console.log("第", _0x503784 + 1, "账号失效！已🈲用") : console.log("第", _0x503784 + 1, "账号失效！请重新登录！！！😭");
          await _0x3041c8(_0x446c42, _0x1090da[_0x503784].remarks);
        }
      } else {
        await _0xe8f92a(_0x1090da[_0x503784], _0x446c42, _0x22c71f(_0x446c42).get("SID"));
        await _0x3afedc(_0x407e9f);
        console.log("第", _0x503784 + 1, "账号正常🎉🎉\n");
      }
    } catch (_0x1bfc00) {
      console.log(_0x1bfc00);
    }
    await _0xe5d73(_0x25110c(2, 3));
  }
  process.exit(0);
})();
function _0x29a186(_0x3fc978) {
  function _0xc08eaa(_0x344e92) {
    if (typeof _0x344e92 === "string") return function (_0x12bfc3) {}.constructor("while (true) {}").apply("counter");else {
      if (("" + _0x344e92 / _0x344e92).length !== 1 || _0x344e92 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0xc08eaa(++_0x344e92);
  }
  try {
    if (_0x3fc978) return _0xc08eaa;else _0xc08eaa(0);
  } catch (_0x394f43) {}
}