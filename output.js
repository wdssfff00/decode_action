//Sat Aug 03 2024 15:20:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const middleware = require("./middleware.js"),
  axios = require("axios"),
  {
    error
  } = require("console"),
  FormData = require("form-data"),
  path = require("path"),
  senderID = middleware.getSenderID(),
  s = new middleware.Sender(senderID);
class AutAPI {
  constructor(_0xb51193, _0x2865d6, _0x26397f) {
    const _0x28ab55 = {
      "Accept": "application/json, text/plain, */*",
      "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
      "Accept-Encoding": "gzip, compress, deflate, br"
    };
    this.get_instructions = () => {
      return _0x313578("get_instructions", {
        "url": this.host + "/open/instructions",
        "method": "get"
      });
    };
    this.get_gallery = () => {
      return _0x313578("get_instructions", {
        "url": this.host + "/open/gallery",
        "method": "get"
      });
    };
    this.post_gallery = _0x3687b4 => {
      var _0x3687b4 = new FormData();
      return _0x3687b4.append("imgfile", _0x3687b4), _0x313578("post_gallery", {
        "url": this.host + "/open/gallery",
        "method": "post",
        "data": _0x3687b4
      });
    };
    this.get_log = _0x39e064 => {
      const _0x395cdf = /(?<=\/autMan\/task\/logs\/).*/.exec(_0x39e064);
      if (Array.isArray(_0x395cdf)) {
        const _0x415b2a = _0x395cdf[0].split("/"),
          _0x4ae26c = encodeURIComponent(_0x415b2a.pop()),
          _0x3c28e6 = encodeURIComponent(_0x415b2a.join("/"));
        return _0x313578("get_log", {
          "url": this.host + "/open/logs/" + _0x4ae26c + "?path=" + _0x3c28e6,
          "method": "get"
        });
      } else {
        return rebug("【AutAPI】 get_log: 路径错误：" + _0x39e064, false);
      }
    };
    this.get_logs_memu = () => {
      return _0x313578("get_logs_memu", {
        "url": this.host + "/open/logs/memu",
        "method": "get"
      });
    };
    this.require = async (..._0x92149f) => {
      const _0x344eaf = new Array();
      for (let _0x199e28 of _0x92149f) {
        let _0x91ab58;
        try {
          _0x91ab58 = require(_0x199e28);
          rebug("【AutAPI】 载入模块: " + _0x199e28, true);
        } catch (_0x44ccc8) {
          _0x91ab58 = null;
          rebug("【AutAPI】 载入模块失败，尝试安装: " + _0x199e28);
          if (_0x44ccc8.code == "MODULE_NOT_FOUND") {
            await s.reply("尝试安装依赖: " + _0x199e28);
            let _0x3a63ec = await this.post_dependencies([{
              "name": _0x199e28,
              "type": "nodejs"
            }]);
            if (_0x3a63ec.code == 200) {
              await s.reply("开始安装");
              for (let _0x368025 = 1; _0x368025 <= 3; _0x368025++) {
                console.log(await sleep(5));
                await s.reply("依赖安装中 " + ".".repeat(_0x368025));
                _0x3a63ec = await this.get_dependencies(_0x199e28);
                rebug("【 AutAPI 】require: 查询依赖安装结果: " + JSON.stringify(_0x3a63ec));
                if (_0x3a63ec.code == 200) {
                  if (_0x3a63ec.data[0].status == 1) {
                    await s.reply("依赖安装成功: " + _0x199e28);
                    break;
                  }
                } else {
                  await s.reply("依赖状态检测失败, 跳过");
                  break;
                }
              }
              if (_0x3a63ec.data[0].status != 1) await s.reply("依赖安装失败");
            } else await s.reply("依赖安装失败，跳过");
          } else {
            rebug(JSON.stringify(_0x44ccc8));
            await s.reply("加载依赖失败，未知错误");
          }
        }
        _0x344eaf.push(_0x91ab58);
      }
      return _0x344eaf;
    };
    this.post_dependencies = _0x430f5b => {
      return _0x313578("post_dependencies", {
        "url": this.host + "/open/dependencies",
        "method": "post",
        "data": _0x430f5b
      });
    };
    this.get_dependencies = (_0x3c0519 = "") => {
      return _0x313578("get_dependencies", {
        "url": this.host + "/open/dependencies?searchValue=" + _0x3c0519,
        "method": "get"
      });
    };
    this.get_dependencies_log = _0x241cdf => {
      return _0x313578("get_dependencies_log", {
        "url": this.host + "/open/dependencies/" + _0x241cdf + "/log",
        "method": "get"
      });
    };
    this.get_users = () => {
      return _0x313578("get_users", {
        "url": this.host + "/open/users?searchValue=",
        "method": "get"
      });
    };
    this.put_users = _0x4875cf => {
      return s.reply(JSON.stringify(_0x4875cf)), _0x313578("put_users", {
        "url": this.host + "/open/users",
        "method": "PUT",
        "data": JSON.stringify(_0x4875cf)
      });
    };
    this.get_nameids = (_0xf063c7 = "", _0x2c6806 = "", _0x2a0ccf = "") => {
      return _0x313578("get_nameids", {
        "url": this.host + "/open/nameids?searchValue=" + _0xf063c7 + "&page=" + _0x2c6806 + "&pageSize=" + _0x2a0ccf,
        "method": "get"
      });
    };
    this.get_croncmds = (_0x42bff0 = "") => {
      return _0x313578("get_croncmds", {
        "url": this.host + "/open/croncmds?searchValue=" + _0x42bff0,
        "method": "get"
      });
    };
    this.get_croncmd_by_id = _0x517693 => {
      return _0x313578("get_croncmd_by_id", {
        "url": this.host + "/open/croncmds/" + _0x517693,
        "method": "get"
      });
    };
    this.put_croncmds = _0xa4e1fa => {
      const {
        id: _0x38c170,
        disable: _0x3e0b73,
        cron: _0x243a66,
        cmd: _0x3ad0b5,
        to_self: _0xa3174f,
        disguise_imtype: _0x37ecb2,
        disguise_group: _0x2ef169,
        disguise_user: _0x2fa665,
        to_others: _0x6ab658,
        memo: _0x5e471b
      } = _0xa4e1fa;
      return _0x313578("put_croncmds", {
        "url": this.host + "/open/croncmds",
        "method": "PUT",
        "data": {
          "id": _0x38c170,
          "disable": _0x3e0b73,
          "cron": _0x243a66,
          "cmd": _0x3ad0b5,
          "to_self": _0xa3174f,
          "disguise_imtype": _0x37ecb2,
          "disguise_group": _0x2ef169,
          "disguise_user": _0x2fa665,
          "to_others": _0x6ab658,
          "memo": _0x5e471b
        }
      });
    };
    this.post_croncmds = (_0x258b41 = {
      "cron": cron,
      "cmd": cmd,
      "to_self": to_self,
      "to_others": to_others,
      "memo": memo
    }) => {
      return _0x313578("post_croncmds", {
        "url": this.host + "/open/croncmds",
        "method": "POST",
        "data": _0x258b41
      });
    };
    this.del_croncmds = (_0x492e7b = []) => {
      return _0x313578("del_croncmds", {
        "url": this.host + "/open/croncmds",
        "method": "DELETE",
        "data": _0x492e7b
      });
    };
    this.post_encrypt = _0x42cc44 => {
      return _0x313578("post_encrypt", {
        "url": this.host + "/open/js/encrypt",
        "method": "post",
        "data": JSON.stringify(_0x42cc44)
      });
    };
    function _0x3fa188(_0x23529b, _0xefbb21, _0x261ca1) {
      return _0x313578("get_token", {
        "url": _0x23529b + "/open/auth/token?client_id=" + _0xefbb21 + "&client_secret=" + _0x261ca1,
        "method": "get"
      });
    }
    function _0x313578(_0x1ba15e, _0x101260) {
      return axios({
        ...{
          "headers": _0x28ab55,
          "redirect": "follow",
          "responseType": "json"
        },
        ..._0x101260
      }).then(({
        data: {
          message: _0x59ddd5,
          code: _0x312a73,
          data: _0x6e8d44
        }
      }) => {
        return rebug("【AutAPI】 " + _0x1ba15e + ": " + _0x312a73 + " - \"" + (_0x59ddd5 ? _0x59ddd5 : "") + "\"", true, _0x312a73, _0x6e8d44);
      }).catch(_0x5016f4 => {
        return rebug("【AutAPI】 " + _0x1ba15e + ": " + (_0x5016f4.status || _0x5016f4.code) + " - " + (_0x5016f4.name + ": " || "") + (_0x5016f4.statusText || _0x5016f4.message || _0x5016f4.msg || ""), false, _0x5016f4.status, _0x5016f4.stack || _0x5016f4.data || null);
      });
    }
    return new Promise(async (_0x783713, _0x168084) => {
      this.host = _0xb51193 || (await middleware.bucketGet("jusapi", "host"));
      this.client_id = _0x2865d6 || (await middleware.bucketGet("jusapi", "client_id"));
      this.client_secret = _0x26397f || (await middleware.bucketGet("jusapi", "client_secret"));
      if (!this.host || !this.client_id || !this.client_secret) {
        console.error("【jusapi】请设置配参");
        process.exit();
      }
      await _0x3fa188(this.host, this.client_id, this.client_secret).then(_0x387b5b => {
        if (_0x387b5b.success) _0x28ab55.Authorization = (_0x387b5b.data.token_type || "") + " " + (_0x387b5b.data.token || "");else _0x28ab55.Authorization = undefined;
        rebug("【AutAPI】 " + this.host + " - " + _0x28ab55.Authorization, true);
        _0x783713(this);
      }).catch(_0x168084);
    });
  }
}
sendNotify = async (_0xc44768, _0x19d5b8) => {
  if (!/([a-z]+:[a-z\d\-]+,?)+/.test(_0xc44768)) return rebug("【sendNotify】目标参数格式错误", false, 401, _0x19d5b8);
  return await Promise.all(_0xc44768.split(",").map(_0x1359ca => {
    const [_0x4546fe, _0x4fecda] = _0x1359ca.split(":");
    return {
      "im": _0x4546fe,
      "id": _0x4fecda
    };
  }).map(_0x31402c => {
    if (_0x31402c.im) {
      let _0x175f51, _0x4481ba, _0x14d2a3;
      _0x175f51 = /^.*(?=(group|indiv))/i.exec(_0x31402c.im)[0];
      _0x4481ba = /group/i.test(_0x31402c.im) ? _0x31402c.id : null;
      _0x14d2a3 = /indiv/i.test(_0x31402c.im) ? _0x31402c.id : null;
      rebug("【sendNotify】[" + _0x175f51 + "]" + _0x31402c.id + " 开始推送", true);
      try {
        return middleware.push(_0x175f51, _0x4481ba, _0x14d2a3, "", _0x19d5b8);
      } catch (_0x1110ff) {
        rebug("【sendNotify】[" + _0x175f51 + "]" + _0x31402c.id + " 推送异常");
      }
    }
  })), rebug("【sendNotify】推送完成", true, 200, _0x19d5b8);
};
function rebug(_0x2659e7, _0x5ba1f1 = false, _0x1c9bd9 = 0, _0x4251bf = null) {
  let _0x32940a = /^【.*】\s?/.exec(_0x2659e7);
  _0x32940a = _0x32940a ? _0x32940a[0] : "【rebug】";
  let _0x304e7c = _0x2659e7.replace(/^【[^】]+】/, "");
  if (module.exports.isDebug) {
    let _0x237d91 = typeof _0x2659e7;
    if (_0x237d91 == "object") {
      if (Array.isArray(_0x2659e7)) _0x237d91 = "array";else {
        if (_0x2659e7 instanceof RegExp) _0x237d91 = "regexp";else _0x2659e7 == null && (_0x237d91 = "null");
      }
    }
    if (_0x5ba1f1) console.log("[40;32m", _0x32940a, "[42;30m", _0x237d91, ":", _0x304e7c, "[0m");else {
      console.error(_0x2659e7);
    }
  }
  return {
    "message": _0x304e7c.replace(/^【.+?】 /, ""),
    "success": _0x5ba1f1,
    "code": _0x1c9bd9,
    "data": _0x4251bf
  };
}
async function encodeQR(_0x275276) {
  const _0xa1619b = await new AutAPI(),
    [_0x1e6954, _0xfb1f68] = await _0xa1619b.require("qr-image", "uuid"),
    _0xb29387 = _0xfb1f68.v4() + ".png",
    _0x5c150e = await middleware.bucketGet("jusapi", "host"),
    _0x1d8acf = _0x5c150e + "/tmp/static/" + _0xb29387,
    _0x511ff0 = path.resolve("../web/tmp/static") + "/" + _0xb29387,
    _0x157753 = _0x1e6954.image(_0x275276, {
      "ec_level": "H",
      "type": "png",
      "size": 10
    });
  return _0x157753.pipe(fs.createWriteStream(_0x511ff0)), rebug("【 encodeQR 】URL: " + _0x1d8acf + "，本地路径: " + _0x511ff0, true, 200, {
    "local": _0x511ff0,
    "lan": _0x1d8acf
  });
}
async function resend(_0x3c89a0, _0x1a0bc0 = false, _0x291f32 = 0, _0x49aa8a = null) {
  const _0xd86f8f = await s.reply(_0x3c89a0);
  if (module.exports.recallTime && _0xd86f8f) setTimeout(() => {
    s.recallMessage(_0xd86f8f[0]).catch(_0x34bc6c => rebug("【 resend 】撤回用户消息失败"));
  }, module.exports.recallTime * 1000);
  return rebug("【 resend 】 success: " + _0x1a0bc0, _0x1a0bc0, _0x291f32, _0x49aa8a);
}
function sleep(_0x3ab753) {
  return new Promise(_0x4880cf => setTimeout(() => _0x4880cf(), _0x3ab753 * 1000));
}
async function inputReg(_0x5cb678 = null, _0x35ea9a = null) {
  if (module.exports.recallTime && _0x5cb678) s.recallMessage(await s.getMessageID()).catch(_0x2ace6f => rebug("【 inputReg 】撤回用户消息失败"));
  try {
    var _0x225f1c = _0x5cb678 ? await s.reply(_0x5cb678) : null;
  } catch (_0xcae811) {
    return rebug("【inputReg】 系统错误", false, 500, _0xcae811);
  }
  let _0x5784e0 = await s.input(module.exports.inputTime * 1000, 1, false).then(_0x388c72 => {
    if (!_0x388c72) return rebug("【inputReg】 输入超时", true, 408, e);
    if (/^q$/i.test(_0x388c72)) return rebug("【inputReg】 用户取消");
    if (_0x35ea9a) {
      if (!_0x35ea9a.test(_0x388c72)) return rebug("【inputReg】 输入错误（" + _0x35ea9a + "）: " + _0x388c72, false, 401, _0x388c72);
    }
    return rebug("【inputReg】 输入: " + _0x388c72, true, 200, _0x388c72);
  }).catch(_0x2af6f4 => rebug("【inputReg】 输入超时", false, 408, _0x2af6f4));
  return module.exports.recallTime && _0x5cb678 && (rebug("【 inputReg 】撤回 tip"), s.recallMessage(_0x225f1c[0]).catch(_0x341396 => rebug("【 inputReg 】撤回机器人消息失败，ID: " + _0x225f1c[0])), s.recallMessage(await s.getMessageID()).catch(_0xc19434 => rebug("【 inputReg 】撤回用户消息失败"))), _0x5784e0;
}
async function waitPay(_0x4855f2 = null) {
  let _0x3f9478 = module.exports.appreciate;
  if (!_0x3f9478) return rebug("【waitPay】 获取收款码失败", false, 502, false);
  if (await s.atWaitPay()) return rebug("【waitPay】 他人支付中，请稍后重试", false, 503, false);
  const _0x5208fa = await s.getImtype();
  if (/^(qb)|(tb)|(ds)|(kk)|(dd)|(ss)$/i.test(_0x5208fa)) {
    rebug("【waitPay】 当前平台【" + _0x5208fa + "】需要转链", 1);
    _0x3f9478 = await img2aut(_0x3f9478);
    if (_0x3f9478.success) _0x3f9478 = _0x3f9478.data;else return _0x3f9478;
  }
  const _0x1076f5 = _0x4855f2 || "请在 " + module.exports.payTime + " 秒内使用微信扫码完成支付（q 退出）";
  try {
    var _0x3aa6aa = await s.reply(_0x1076f5),
      _0x2d62b8 = await s.replyImage(_0x3f9478);
  } catch (_0x227808) {
    return rebug("【 waitPay 】 系统错误", false, 500, _0x227808);
  }
  rebug("【waitPay】 等待支付，收款码: " + _0x3f9478, 1);
  let _0xfef832;
  const _0x33424b = await s.waitPay("q", module.exports.payTime * 1000).then(async _0x193e79 => {
    _0xfef832 = await s.getMessageID();
    if (typeof _0x193e79 == "string") return rebug("【waitPay】退出", false, 0, "退出");else return rebug("【waitPay】支付完成", true, 200, _0x193e79);
  }).catch(_0x4de4b4 => {
    if (_0x4de4b4.data) return rebug("【waitPay_ed】" + _0x4de4b4.data.message, false, _0x4de4b4.data.status, _0x4de4b4.data);else return rebug("【waitPay_e】" + _0x4de4b4.message, false, _0x4de4b4.status || _0x4de4b4.code, _0x4de4b4);
  });
  if (module.exports.recallTime && _0x3aa6aa) {
    console.log(_0xfef832);
    await s.recallMessage(_0xfef832);
    await s.recallMessage(_0x2d62b8[0]);
    await s.recallMessage(_0x3aa6aa[0]);
  }
  return _0x33424b;
}
async function img2aut(_0x20ec1e) {
  const _0x3bc58b = await file2stream(_0x20ec1e);
  if (_0x3bc58b.success == false) return rebug("【 img2aut 】 读取文件失败", false, 0, null);
  const _0x17af74 = await s.bucketGet("cloud", "username"),
    _0x28a7ce = await s.bucketGet("cloud", "password");
  if (!(_0x17af74 && _0x28a7ce)) return rebug("【 img2aut 】 获取 autman 账号失败", false, 0, null);
  const _0xb2ceb3 = new FormData();
  return _0xb2ceb3.append("imgfile", _0x3bc58b.data), _0xb2ceb3.append("username", _0x17af74), _0xb2ceb3.append("password", _0x28a7ce), await axios({
    "method": "post",
    "url": "http://aut.zhelee.cn/imgUpload",
    "headers": {
      "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
      ..._0xb2ceb3.getHeaders()
    },
    "data": _0xb2ceb3
  }).then(function (_0x202b1c) {
    return rebug("【 img2aut 】 " + _0x202b1c.data.msg, _0x202b1c.data.code == 200, _0x202b1c.data.code, _0x202b1c.data.code == 200 ? _0x202b1c.data.result.path : _0x202b1c.data);
  }).catch(function (_0xf774be) {
    return rebug("【 img2aut 】 " + JSON.stringify(_0xf774be), false, 0, _0xf774be);
  });
}
async function file2stream(_0xe197ee) {
  let _0x3bc96b;
  if (isURL(encodeURI(_0xe197ee))) {
    const _0x26cb96 = await axios.get(encodeURI(_0xe197ee), {
      "responseType": "stream"
    });
    return _0x3bc96b = _0x26cb96.data, rebug("【 file2stream 】 网络文件: " + (_0x26cb96.code || _0x26cb96.status) + "} - " + (_0x26cb96.message || _0x26cb96.status || ""), true, _0x26cb96.code || _0x26cb96.status, _0x3bc96b || _0x26cb96);
  } else {
    if (fs.existsSync(encodeURI(_0xe197ee))) return await fs.promises.readFile(encodeURI(_0xe197ee), "utf8").then(_0x4e47e3 => rebug("【 file2stream 】 本地文件 - 读取文件成功", true, 1, _0x4e47e3)).catch(_0x2a9042 => rebug("【 file2stream 】 本地文件:" + _0x2a9042.name + "[" + _0x2a9042.code + "] - " + _0x2a9042.message));else {
      if (isBase64(_0xe197ee)) {
        const _0x54d839 = Buffer.from(_0xe197ee, "base64");
        return await fs.promises.readFile(_0x54d839, "utf8").then(_0x4bed6b => rebug("【 file2stream 】 BASE64文件 - 读取文件成功", true, 1, _0x4bed6b)).catch(_0x2d71a9 => rebug("【 file2stream 】 BASE64文件:" + _0x2d71a9.name + "[" + _0x2d71a9.code + "] - " + _0x2d71a9.message));
      } else {
        if (_0xe197ee instanceof stream.Readable) return _0x3bc96b = _0xe197ee, rebug("【 file2stream 】 文件流", true, 1, _0x3bc96b);else {
          return rebug("【 file2stream 】 Unsupported image source type", false, 0, _0xe197ee);
        }
      }
    }
  }
}
async function file2local(_0x1cf672) {}
function isURL(_0x4983b2) {
  try {
    return new URL(_0x4983b2), true;
  } catch (_0x580166) {
    return false;
  }
}
function isBase64(_0x156cb5) {
  try {
    return Buffer.from(_0x156cb5, "base64").toString("base64") === _0x156cb5;
  } catch (_0x3dfe4f) {
    return false;
  }
}
async function sendFile(_0x2adeee, _0x42ec0a = "") {
  const _0x39bbca = await s.getImtype();
  let _0x301142;
  if (_0x42ec0a) _0x301142 = _0x42ec0a;else {
    _0x301142 = /(?<=[\/\\]?)[^\/\\]+?\.\w+$/.exec(_0x2adeee);
    _0x301142 = _0x301142 ? _0x301142[0] : "未知文件 by jusapi";
  }
  rebug("【 sendFile 】" + _0x39bbca + " - 发送文件: " + _0x301142, 1);
  if (/^qq$/i.test(_0x39bbca)) return await s.reply("[CQ:file,file=" + _0x2adeee + "]").then(_0x458a1b => rebug("【 sendFile 】" + _0x39bbca + " 发送完成", true, 200, _0x458a1b[0]));
  if (/^wx$/i.test(_0x39bbca)) return await xyo_sendFile(_0x2adeee, _0x301142);
  const _0x36c8c5 = await file2stream(_0x2adeee);
  if (_0x36c8c5.success == false) return rebug("【 sendFile 】" + _0x39bbca + " - 读取文件失败");
  if (/^tb$/i.test(_0x39bbca)) return await tb_sendFile(_0x36c8c5.data, _0x301142);else {
    if (/^dc$/i.test(_0x39bbca)) return await dc_sendFile(_0x36c8c5.data, _0x301142);else {
      if (/^sk$/i.test(_0x39bbca)) return await sk_sendFile(_0x36c8c5.data, _0x301142);else {
        if (/^kk$/i.test(_0x39bbca)) return await kk_sendFile(_0x36c8c5.data, _0x301142);else return await s.reply("[CQ:file,file=" + _0x2adeee + "]");
      }
    }
  }
}
async function xyo_sendFile(_0xf55a4a, _0x3a0b01, _0x35da84 = "", _0x50c3f2 = "", _0x2db890 = "", _0x1ce274 = "") {
  const _0x2d2520 = await file2win(_0xf55a4a, _0x3a0b01),
    _0x481b84 = await s.getImtype();
  if (!_0x2d2520.success) return rebug("【 xyo_sendFile 】" + _0x481b84 + " - 上传文件失败");
  const _0x2fee77 = _0x50c3f2 || (await middleware.bucketGet("wx", "vlw_addr")),
    _0x2f32bf = _0x2db890 || (await middleware.bucketGet("wx", "vlw_token")),
    _0x795e61 = _0x1ce274 || (await middleware.bucketGet("wx", "robot_wxid"));
  if (!(_0x795e61 && _0x2fee77 && _0x2f32bf)) return rebug("【 xyo_sendFile 】" + _0x481b84 + " - 未获取到 vlw 配置");
  const _0x1f19a8 = await s.getChatID(),
    _0x2d4ee8 = _0x35da84 || _0x1f19a8 ? _0x1f19a8 + "@chatroom" : await s.getUserID();
  return await axios({
    "url": _0x2fee77,
    "method": "post",
    "data": {
      "token": _0x2f32bf,
      "api": "SendFileMsg",
      "robot_wxid": _0x795e61,
      "to_wxid": _0x2d4ee8,
      "path": _0x2d2520.data
    }
  }).then(_0x210285 => rebug("【 xyo_sendFile 】" + (_0x210285.code || _0x210285.status) + " - " + (_0x210285.message || _0x210285.statusText), true, _0x210285.code || _0x210285.status, _0x210285.data || _0x210285)).catch(_0x495eb6 => _0x495eb6.response ? _0x495eb6.response.data ? rebug("【 xyo_sendFile 】" + (_0x495eb6.response.data.code || _0x495eb6.response.data.status) + " - " + (_0x495eb6.response.data.message || _0x495eb6.response.data.statusText), false, _0x495eb6.response.data.code || _0x495eb6.response.data.status, _0x495eb6.response.data) : rebug("【 xyo_sendFile 】" + (_0x495eb6.response.code || _0x495eb6.response.status) + " - " + (_0x495eb6.response.message || _0x495eb6.response.statusText), false, _0x495eb6.response.code || _0x495eb6.response.status, _0x495eb6.response) : rebug("【 xyo_sendFile 】" + (_0x495eb6.code || _0x495eb6.status) + " - " + (_0x495eb6.message || _0x495eb6.statusText), false, _0x495eb6.code || _0x495eb6.status, _0x495eb6));
}
async function kk_sendFile(_0x5346b0, _0x9e3a35, _0x284e8e = "", _0xbf1bf = "") {
  const _0xcfcac4 = _0x284e8e || (await s.getChatID());
  if (!_0xcfcac4) return rebug("【 dc_sendFile 】未找到 channelId，目前仅支持群聊发送文件");
  const _0x477e90 = _0xbf1bf || (await middleware.bucketGet("kk", "token"));
  if (!_0x477e90) return rebug("【 kk_sendFile 】未找到 token");
  const _0x80f36c = new FormData();
  _0x80f36c.append("file", _0x5346b0, {
    "filename": _0x9e3a35
  });
  _0x80f36c.append("target_id", _0xcfcac4);
  _0x80f36c.append("guild_id", _0xcfcac4);
  const _0x38b50e = await axios({
    "url": "https://www.kookapp.cn/api/v3/asset/create",
    "method": "post",
    "headers": {
      "Content-type": "form-data",
      "Authorization": "Bot " + _0x477e90
    },
    "data": _0x80f36c
  }).then(_0x2defd6 => _0x2defd6.data ? rebug("【 kk_asset_create 】" + (_0x2defd6.data.code + 1 ? _0x2defd6.data.code : null) + " - " + (_0x2defd6.data.message || _0x2defd6.data.statusText), true, _0x2defd6.data.code || _0x2defd6.data.status, _0x2defd6.data.data || _0x2defd6.data) : rebug("【 kk_asset_create 】" + (_0x2defd6.code || _0x2defd6.status) + " - " + (_0x2defd6.message || _0x2defd6.statusText), true, _0x2defd6.code || _0x2defd6.status, _0x2defd6.data || _0x2defd6)).catch(_0x30eeb2 => _0x30eeb2.response ? _0x30eeb2.response.data ? rebug("【 kk_asset_create 】" + (_0x30eeb2.response.data.code || _0x30eeb2.response.data.status) + " - " + (_0x30eeb2.response.data.message || _0x30eeb2.response.data.statusText), false, _0x30eeb2.response.data.code || _0x30eeb2.response.data.status, _0x30eeb2.response.data) : rebug("【 kk_asset_create 】" + (_0x30eeb2.response.code || _0x30eeb2.response.status) + " - " + (_0x30eeb2.response.message || _0x30eeb2.response.statusText), false, _0x30eeb2.response.code || _0x30eeb2.response.status, _0x30eeb2.response) : rebug("【 kk_asset_create 】" + (_0x30eeb2.code || _0x30eeb2.status) + " - " + (_0x30eeb2.message || _0x30eeb2.statusText), false, _0x30eeb2.code || _0x30eeb2.status, _0x30eeb2));
  if (!_0x38b50e.success || _0x38b50e.code) return _0x38b50e;
  return rebug("【 kk_asset_create 】" + _0x38b50e.data.url, 1), axios({
    "method": "post",
    "url": "https://www.kookapp.cn/api/v3/message/create",
    "headers": {
      "Content-type": "application/json",
      "Authorization": "Bot " + _0x477e90
    },
    "data": {
      "content": JSON.stringify([{
        "type": "card",
        "theme": "secondary",
        "size": "lg",
        "modules": [{
          "type": "file",
          "title": _0x9e3a35,
          "src": _0x38b50e.data.url,
          "size": "?"
        }]
      }]),
      "target_id": _0xcfcac4,
      "type": 10
    }
  }).then(_0x5515f2 => _0x5515f2.data ? rebug("【 kk_asset_create 】" + (_0x5515f2.data.code + 1 ? _0x5515f2.data.code : null) + " - " + (_0x5515f2.data.message || _0x5515f2.data.statusText), true, _0x5515f2.data.code || _0x5515f2.data.status, _0x5515f2.data.data || _0x5515f2.data) : rebug("【 kk_asset_create 】" + (_0x5515f2.code || _0x5515f2.status) + " - " + (_0x5515f2.message || _0x5515f2.statusText), true, _0x5515f2.code || _0x5515f2.status, _0x5515f2.data || _0x5515f2)).catch(_0x4e15d5 => _0x4e15d5.response ? _0x4e15d5.response.data ? rebug("【 kk_sendFile 】" + (_0x4e15d5.response.data.code || _0x4e15d5.response.data.status) + " - " + (_0x4e15d5.response.data.message || _0x4e15d5.response.data.statusText), false, _0x4e15d5.response.data.code || _0x4e15d5.response.data.status, _0x4e15d5.response.data) : rebug("【 kk_sendFile 】" + (_0x4e15d5.response.code || _0x4e15d5.response.status) + " - " + (_0x4e15d5.response.message || _0x4e15d5.response.statusText), false, _0x4e15d5.response.code || _0x4e15d5.response.status, _0x4e15d5.response) : rebug("【 kk_sendFile 】" + (_0x4e15d5.code || _0x4e15d5.status) + " - " + (_0x4e15d5.message || _0x4e15d5.statusText), false, _0x4e15d5.code || _0x4e15d5.status, _0x4e15d5));
}
async function sk_sendFile(_0x1cf7ba, _0x40c2f0, _0x4995b4 = "", _0x435f13 = "") {
  const _0x2c3089 = _0x4995b4 || (await s.getChatID()) || (await s.getUserID()),
    _0x267a51 = _0x435f13 || (await middleware.bucketGet("sk", "SLACK_BOT_TOKEN"));
  if (!_0x267a51) return rebug("【 sk_sendFile 】未找到 SLACK_BOT_TOKEN");
  const _0x1e3dd3 = new FormData();
  return _0x1e3dd3.append("file", _0x1cf7ba, {
    "filename": _0x40c2f0
  }), _0x1e3dd3.append("channels", _0x2c3089), axios({
    "method": "post",
    "url": "https://slack.com/api/files.upload",
    "headers": {
      "Content-Type": "multipart/form-data",
      "Authorization": "Bearer " + _0x267a51
    },
    "data": _0x1e3dd3
  }).then(_0x24f6a4 => rebug("【 sk_sendFile 】" + (_0x24f6a4.code || _0x24f6a4.status) + " - " + (_0x24f6a4.message || _0x24f6a4.statusText), true, _0x24f6a4.code || _0x24f6a4.status, _0x24f6a4.data || _0x24f6a4)).catch(_0xaec102 => _0xaec102.response ? _0xaec102.response.data ? rebug("【 sk_sendFile 】" + (_0xaec102.response.data.code || _0xaec102.response.data.status) + " - " + (_0xaec102.response.data.message || _0xaec102.response.data.statusText), false, _0xaec102.response.data.code || _0xaec102.response.data.status, _0xaec102.response.data) : rebug("【 sk_sendFile 】" + (_0xaec102.response.code || _0xaec102.response.status) + " - " + (_0xaec102.response.message || _0xaec102.response.statusText), false, _0xaec102.response.code || _0xaec102.response.status, _0xaec102.response) : rebug("【 sk_sendFile 】" + (_0xaec102.code || _0xaec102.status) + " - " + (_0xaec102.message || _0xaec102.statusText), false, _0xaec102.code || _0xaec102.status, _0xaec102));
}
async function dc_sendFile(_0x3459a4, _0x55dcaa, _0x10d8f3 = "", _0x17807b = "") {
  const _0x4eba96 = _0x10d8f3 || (await s.getChatID());
  if (!_0x4eba96) return rebug("【 dc_sendFile 】未找到 channelId，目前仅支持群聊发送文件");
  const _0x5baf1d = _0x17807b || (await middleware.bucketGet("dc", "token"));
  if (!_0x5baf1d) return rebug("【 dc_sendFile 】未找到 token");
  const _0x4afbef = new FormData();
  return _0x4afbef.append("file", _0x3459a4, {
    "filename": _0x55dcaa
  }), await axios({
    "url": "https://discord.com/api/v9/channels/" + _0x4eba96 + "/messages",
    "method": "post",
    "headers": {
      "Content-Type": " multipart/form-data; boundary=" + _0x4afbef.getBoundary(),
      "Authorization": "Bot " + _0x5baf1d
    },
    "data": _0x4afbef
  }).then(_0xb06e95 => rebug("【 dc_sendFile 】" + (_0xb06e95.code || _0xb06e95.status) + " - " + (_0xb06e95.message || _0xb06e95.statusText), true, _0xb06e95.code || _0xb06e95.status, _0xb06e95.data || _0xb06e95)).catch(_0x4ff774 => _0x4ff774.response ? _0x4ff774.response.data ? rebug("【 dc_sendFile 】" + (_0x4ff774.response.data.code || _0x4ff774.response.data.status) + " - " + (_0x4ff774.response.data.message || _0x4ff774.response.data.statusText), false, _0x4ff774.response.data.code || _0x4ff774.response.data.status, _0x4ff774.response.data) : rebug("【 dc_sendFile 】" + (_0x4ff774.response.code || _0x4ff774.response.status) + " - " + (_0x4ff774.response.message || _0x4ff774.response.statusText), false, _0x4ff774.response.code || _0x4ff774.response.status, _0x4ff774.response) : rebug("【 dc_sendFile 】" + (_0x4ff774.code || _0x4ff774.status) + " - " + (_0x4ff774.message || _0x4ff774.statusText), false, _0x4ff774.code || _0x4ff774.status, _0x4ff774));
}
async function tb_sendFile(_0xce4a13, _0x46b481, _0x559342 = "", _0x2fcb24 = "") {
  const _0x498292 = _0x559342 || (await s.getChatID()) || (await s.getUserID()),
    _0x32d40b = _0x2fcb24 || (await middleware.bucketGet("tb", "token"));
  if (!_0x32d40b) return rebug("【 tb_sendFile 】未找到 token");
  const _0x4a2903 = new FormData();
  return _0x4a2903.append("document", _0xce4a13, {
    "filename": _0x46b481
  }), await axios.post("https://api.telegram.org/bot" + _0x32d40b + "/sendDocument", _0x4a2903, {
    "headers": {
      ..._0x4a2903.getHeaders()
    },
    "params": {
      "chat_id": _0x498292
    }
  }).then(_0x552413 => rebug("【 tb_sendFile 】" + (_0x552413.code || _0x552413.status) + " - " + (_0x552413.message || _0x552413.statusText), true, _0x552413.code || _0x552413.status, _0x552413.data || _0x552413)).catch(_0x45ec97 => _0x45ec97.response ? _0x45ec97.response.data ? rebug("【 tb_sendFile 】" + (_0x45ec97.response.data.code || _0x45ec97.response.data.status) + " - " + (_0x45ec97.response.data.message || _0x45ec97.response.data.statusText), false, _0x45ec97.response.data.code || _0x45ec97.response.data.status, _0x45ec97.response.data) : rebug("【 tb_sendFile 】" + (_0x45ec97.response.code || _0x45ec97.response.status) + " - " + (_0x45ec97.response.message || _0x45ec97.response.statusText), false, _0x45ec97.response.code || _0x45ec97.response.status, _0x45ec97.response) : rebug("【 tb_sendFile 】" + (_0x45ec97.code || _0x45ec97.status) + " - " + (_0x45ec97.message || _0x45ec97.statusText), false, _0x45ec97.code || _0x45ec97.status, _0x45ec97));
}
async function file2win(_0x440b3d, _0x1df62a) {
  const _0x3a77b5 = await middleware.bucketGet("jusapi", "win_server");
  if (!_0x3a77b5) return rebug("【 file2win 】 获取win_server_host失败");
  const _0x3335b2 = await file2stream(_0x440b3d);
  if (_0x3335b2.success == false) return rebug("【 file2win 】 读取文件失败");
  return await axios({
    "method": "post",
    "url": _0x3a77b5,
    "headers": {
      "Content-Type": "application/octet-stream",
      "x-file-name": encodeURI(_0x1df62a)
    },
    "data": _0x3335b2.data
  }).then(function (_0x2ca07e) {
    return rebug("【 file2win 】 " + (_0x2ca07e.code || _0x2ca07e.status) + " - " + (_0x2ca07e.message || _0x2ca07e.statusText) + ": " + _0x2ca07e.data, true, _0x2ca07e.code || _0x2ca07e.status, _0x2ca07e.data);
  }).catch(function (_0x1b9f1a) {
    return rebug("【 file2win 】 " + (_0x1b9f1a.code || _0x1b9f1a.status) + " - " + (_0x1b9f1a.message || _0x1b9f1a.statusText));
  });
}
module.exports = {
  "version": "0.0.4",
  "isDebug": false,
  "inputTime": 120,
  "payTime": 60,
  "recallTime": 120,
  "sleep": sleep,
  "rebug": rebug,
  "resend": resend,
  "inputReg": inputReg,
  "waitPay": waitPay,
  "img2aut": img2aut,
  "file2stream": file2stream,
  "sendFile": sendFile,
  "encodeQR": encodeQR,
  "sendNotify": sendNotify,
  "AutAPI": AutAPI
};
!(async () => {
  module.exports.isDebug = await middleware.bucketGet("jusapi", "isDebug");
  module.exports.appreciate = await middleware.bucketGet("jusapi", "appreciate");
  if (/^true$/i.test(module.exports.isDebug)) rebug("【jusapi】 已开启调试功能", true);
  const _0x5c8f5e = await s.isAdmin(),
    _0x5b9099 = await s.getChatID();
  _0x5c8f5e && !_0x5b9099 && axios.get("https://raw.githubusercontent.com/iCouldFly/autman_plugins/scripts/jusapi.js").then(({
    status: _0x396ef7,
    statusText: _0x49352a,
    headers: _0x34f275,
    config: _0x409af4,
    request: _0x429223,
    data: _0x3316a1
  }) => {
    const _0x513d65 = _0x3316a1.match(/(?<=\/\/\s*\[version\:\s*)[\d\.]+/g);
    if (!_0x513d65) return console.log("jusapi 版本号获取失败");
    if (+_0x513d65[0].split(".").join("") > module.exports.version.split(".").join("")) {
      console.log("jusapi 发现新版本，尝试更新，版本:", _0x513d65[0]);
      const _0x4c1818 = path.join(path.resolve(__dirname), "jusapi.js");
      fs.writeFile(_0x4c1818, _0x3316a1, _0x479cc7 => _0x479cc7 ? console.error("jusapi 更新失败:", _0x479cc7) : (s.reply("jusapi 已更新至: " + _0x513d65[0]), console.log("保存路径:", _0x4c1818.toString())));
    }
  }).catch(({
    port: _0x5e66b5,
    address: _0x20b842,
    syscall: _0xe86af1,
    code: _0x380359,
    errno: _0x34a0f8,
    message: _0x4f8cb6,
    stack: _0x303c22,
    name: _0x45c25d,
    config: _0x2fff57,
    request: _0x44ff77
  }) => console.error("jusapi 检查更新失败:", _0x4f8cb6));
})();