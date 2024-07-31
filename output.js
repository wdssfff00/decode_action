//Wed Jul 31 2024 20:40:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x47f82a = function () {
  let _0x579b1f = true;
  return function (_0xf54b92, _0x8d0509) {
    const _0x281f03 = _0x579b1f ? function () {
      if (_0x8d0509) {
        const _0x1fdff5 = _0x8d0509.apply(_0xf54b92, arguments);
        return _0x8d0509 = null, _0x1fdff5;
      }
    } : function () {};
    return _0x579b1f = false, _0x281f03;
  };
}();
(function () {
  let _0x25ef3c;
  try {
    const _0x3a4cd2 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x25ef3c = _0x3a4cd2();
  } catch (_0x81248e) {
    _0x25ef3c = window;
  }
  _0x25ef3c.setInterval(_0x563430, 2000);
})();
(function () {
  _0x47f82a(this, function () {
    const _0x18b74e = new RegExp("function *\\( *\\)"),
      _0x30148d = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
      _0x5524a9 = _0x563430("init");
    !_0x18b74e.test(_0x5524a9 + "chain") || !_0x30148d.test(_0x5524a9 + "input") ? _0x5524a9("0") : _0x563430();
  })();
})();
const {
    sign: _0x17b63c,
    checkCk: _0x408471,
    getCookies: _0x543184,
    getUserInfo: _0x35b80f,
    validateCarmeWithType: _0x3069dd,
    checkCarmeCount: _0x31cd47,
    tryCatchPromise: _0x1a9f16,
    wait: _0x571c6c
  } = require("./common.js"),
  _0x4d6f23 = require("request"),
  _0x271e7c = 17,
  _0xa70d4a = process.env.ELE_CARME,
  _0x53cd4f = require("crypto"),
  _0x5165fb = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAntZvpNYeRv7UpTSvhzWtdVvUxPeSwfyFvV1hyhjByfc+RKLcBFHdkyI0nB4pMWcLln6zmXfhEJK+eSBovY7BR6LAP/fV+zhxTChnlMGjDwhr+E3/LEnlH24lVcIIFQaU/grflUGJHVJrCHtkJ3NPTLrit5gilviRNUSHMI+Y+PcX9HfzGCCEp1lnIPkzVrWVojtcXLjEYfdGZRijK/udICjSHNXp9No/vzrFxaH2jfk6PVLAcNXZAEGbNUdIzbfYorGdU6lf3tFJ8E2Fs1k6Q4BTFXYzkq+EejOYjHF64M5OTTKtfNcrHcZo13EDdjG5JRaKx7bGc5e5lUOSsBCWdwIDAQAB\n-----END PUBLIC KEY-----";
function _0xc17d56(_0x6c3327) {
  const _0xbbed27 = Buffer.from(_0x6c3327, "utf8"),
    _0x20db2b = _0x53cd4f.publicEncrypt(_0x5165fb, _0xbbed27);
  return _0x20db2b.toString("base64");
}
function _0x339b66(_0x2f10c3) {
  return Object.values(_0x2f10c3).length === 0;
}
function _0x467663(_0x5e7c7a) {
  if (!_0x5e7c7a) return "-1";
  for (var _0x380c56 = _0x5e7c7a.split(";"), _0x17ea53 = 0; _0x17ea53 < _0x380c56.length; _0x17ea53++) {
    var _0x13e9d2 = _0x380c56[_0x17ea53].split("=");
    if ([" _m_h5_tk", "_m_h5_tk"].includes(_0x13e9d2[0])) return _0x13e9d2[1];
  }
  return "-1";
}
const _0x737a01 = async (_0x3c2a08, _0x367b50, _0x122603 = 5) => {
  if (_0x122603 === 0) return console.log("网络异常，请检查网络状况"), "";
  const _0x4a2fd3 = _0x467663(_0x3c2a08),
    _0x905328 = _0x4a2fd3.split("_")[0],
    _0x4e31ff = {
      "carmi": _0xa70d4a,
      "content": _0xc17d56(_0x905328) + _0x367b50,
      "type": 1
    };
  var _0x40a87a = {
      "content-type": "application/json"
    },
    _0x1f8ad5 = {
      "url": "http://api.94wan.fun/new/sign",
      "method": "POST",
      "headers": _0x40a87a,
      "body": JSON.stringify(_0x4e31ff)
    };
  return _0x1a9f16(_0x5a3752 => {
    _0x4d6f23(_0x1f8ad5, async (_0x1a1d88, _0x41ad28, _0x454577) => {
      if (!_0x1a1d88 && _0x41ad28.statusCode === 200) {
        const _0x1be5cd = JSON.parse(_0x454577);
        _0x1be5cd.code !== 20000 ? (console.error(_0x1be5cd.message), process.exit(0)) : _0x5a3752(_0x1be5cd.data.msg);
      } else {
        if (_0x1a1d88 && (_0x1a1d88.message.indexOf("socket hang up") !== -1 || _0x1a1d88.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0x571c6c(2);
          _0x5a3752(await _0x737a01(_0x3c2a08, _0x367b50, _0x122603 - 1));
        } else console.log("网络异常，请检查网络状况"), _0x5a3752("");
      }
    });
  });
};
async function _0xcb2b46(_0x22cdf8) {
  var _0x2a488a = {
    "cookie": _0x22cdf8,
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x563c5c = {
      "missionCollectionId": "532",
      "locationInfos": "[\"{\\\"lng\\\":120.21287675946951,\\\"lat\\\":30.182377863675356,\\\"city\\\":\\\"330100\\\"}\"]"
    },
    _0x361f13 = new Date().getTime(),
    _0x2f42dd = 12574478;
  var _0xe7a6b5 = "data=" + encodeURIComponent(JSON.stringify(_0x563c5c));
  const _0x949261 = _0x467663(_0x22cdf8),
    _0x72302f = await _0x737a01(_0x22cdf8, "&" + _0x361f13 + "&" + _0x2f42dd + "&" + JSON.stringify(_0x563c5c), _0xa70d4a);
  var _0x325582 = {
    "url": "https://mtop.ele.me/h5/mtop.ele.biz.growth.task.core.querytask/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x361f13 + "&sign=" + _0x72302f + "&api=mtop.ele.biz.growth.task.core.querytask&v=1.0&type=originaljson&dataType=json&timeout=5000&pageDomain=ele.me&ttid=1601274958480%40eleme_android_10.14.3",
    "method": "GET",
    "headers": _0x2a488a,
    "body": _0xe7a6b5
  };
  return _0x1a9f16(_0x559002 => {
    _0x4d6f23(_0x325582, async (_0x5eace8, _0x1339d8, _0x4abf3f) => {
      if (!_0x5eace8 && _0x1339d8.statusCode == 200) {
        try {
          const _0x4f1969 = JSON.parse(_0x4abf3f),
            _0x16e3d8 = _0x4f1969.data.mlist;
          _0x559002(_0x16e3d8);
        } catch (_0x24b2a4) {
          console.log(_0x4abf3f);
        }
      } else _0x559002(null);
    });
  });
}
async function _0x461d7e(_0x466ac8, _0x40e4ca, _0x4ac2b9, _0x426d76, _0x2cb18b, _0x159da9, _0x1317b2) {
  var _0x458681 = {
    "cookie": _0x466ac8,
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x2b7a6d = {
      "missionCollectionId": _0x40e4ca,
      "missionId": _0x4ac2b9,
      "count": _0x1317b2,
      "extInfo": "{\"token\":\"" + _0x159da9 + "\",\"type\":\"Task\",\"count\":" + _0x1317b2 + "}",
      "missionXId": _0x426d76,
      "instanceId": _0x2cb18b,
      "umiToken": "1",
      "ua": "1",
      "locationInfos": "[\"{\\\"lng\\\":120.21287675946951,\\\"lat\\\":30.182377863675356,\\\"city\\\":\\\"330100\\\"}\"]"
    },
    _0x4f298c = new Date().getTime(),
    _0x4d1f8f = 12574478;
  var _0x422e76 = "data=" + encodeURIComponent(JSON.stringify(_0x2b7a6d));
  const _0x5f4fdf = _0x467663(_0x466ac8),
    _0xa18961 = _0x5f4fdf.split("_")[0],
    _0x47dc99 = await _0x17b63c(_0xa18961 + "&" + _0x4f298c + "&" + _0x4d1f8f + "&" + JSON.stringify(_0x2b7a6d), _0xa70d4a);
  var _0x4c7025 = {
    "url": "https://shopping.ele.me/h5/mtop.ele.biz.growth.task.core.receiveprize/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x4f298c + "&sign=" + _0x47dc99 + "&api=mtop.ele.biz.growth.task.core.receiveprize&v=1.0&type=originaljson&dataType=json",
    "method": "GET",
    "headers": _0x458681,
    "body": _0x422e76
  };
  return _0x1a9f16(_0x38f2ac => {
    _0x4d6f23(_0x4c7025, async (_0x400a57, _0x2171c5, _0x4ff4a5) => {
      if (!_0x400a57 && _0x2171c5.statusCode === 200) try {
        const _0x7e292a = JSON.parse(_0x4ff4a5),
          _0x8d13ec = _0x7e292a.data.rlist;
        console.log("完成饿了个饿任务，获得", _0x8d13ec[0].value, "体力");
        _0x38f2ac(_0x8d13ec);
      } catch (_0x336fd3) {
        _0x38f2ac(null);
      } else _0x38f2ac(null);
    });
  });
}
async function _0x566692(_0x58b2f2, _0x33468f) {
  var _0x11b5df = {
    "cookie": _0x58b2f2,
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x407e91 = new Date().getTime(),
    _0x58e5ed = 12574478;
  var _0xfa0ec1 = "data=" + encodeURIComponent(JSON.stringify(_0x33468f));
  const _0x2cee42 = _0x467663(_0x58b2f2),
    _0x44db69 = _0x2cee42.split("_")[0],
    _0x48c62f = await _0x17b63c(_0x44db69 + "&" + _0x407e91 + "&" + _0x58e5ed + "&" + JSON.stringify(_0x33468f), _0xa70d4a);
  var _0x2dd20e = {
    "url": "https://mtop.ele.me/h5/mtop.ele.biz.growth.task.core.querytask/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x407e91 + "&sign=" + _0x48c62f + "&api=mtop.ele.biz.growth.task.core.querytask&v=1.0&type=originaljson&dataType=json&timeout=5000&pageDomain=ele.me&ttid=1601274958480%40eleme_android_10.14.3",
    "method": "GET",
    "headers": _0x11b5df,
    "body": _0xfa0ec1
  };
  return _0x1a9f16(_0x3b0f7e => {
    _0x4d6f23(_0x2dd20e, async (_0x3789c8, _0x5f18b6, _0x5b539b) => {
      if (!_0x3789c8 && _0x5f18b6.statusCode == 200) try {
        const _0x5ec418 = JSON.parse(_0x5b539b),
          _0x41bc6a = _0x5ec418.data.mlist;
        _0x3b0f7e(_0x41bc6a);
      } catch (_0x5bb3bc) {
        console.log(_0x5b539b);
      } else _0x3b0f7e(null);
    });
  });
}
async function _0x2f2832(_0xe27a2b, _0x3f6909, _0x57d545, _0x9a42f4 = 1) {
  const _0x372857 = _0xe27a2b.actionConfig.actionValue.pageSpm,
    _0x536e90 = _0xe27a2b.name,
    _0x17b67a = _0xe27a2b.missionDefId,
    _0x519e83 = _0xe27a2b.missionCollectionId;
  if (_0x536e90.indexOf("逛游戏专属淘宝优惠") !== -1) {
    await _0x443586(_0x3f6909, _0xe27a2b.missionDefId, _0xe27a2b.missionCollectionId, _0x372857);
    const _0x325414 = {
      "missionCollectionId": _0x519e83,
      "missionId": _0x17b67a,
      "locationInfos": "[\"{\\\"lng\\\":120.21287675946951,\\\"lat\\\":30.182377863675356,\\\"city\\\":\\\"330100\\\"}\"]"
    };
    let _0x20a076 = await _0x566692(_0x3f6909, _0x325414),
      _0x30d0c5 = _0x20a076[0];
    if (_0x30d0c5.status === "FINISH") {
      await _0x461d7e(_0x3f6909, _0x30d0c5.missionCollectionId, _0x30d0c5.missionDefId, _0x30d0c5.missionXId, _0x30d0c5.id, _0x57d545, _0x9a42f4);
    } else for (let _0x8d5c73 = 0; _0x8d5c73 < _0x30d0c5.missionStageDTOS.length; _0x8d5c73++) {
      let _0x5b9640 = _0x30d0c5.missionStageDTOS[_0x8d5c73];
      _0x5b9640.rewardStatus === "TODO" && (await _0x461d7e(_0x3f6909, _0x30d0c5.missionCollectionId, _0x30d0c5.missionDefId, _0x30d0c5.missionXId, _0x30d0c5.id, _0x57d545, _0x8d5c73 + 1), await _0x571c6c(1), await _0x443586(_0x3f6909, _0xe27a2b.missionDefId, _0xe27a2b.missionCollectionId, _0x372857), _0x20a076 = await _0x566692(_0x3f6909, _0x325414), _0x30d0c5 = _0x20a076[0]);
    }
  } else _0x536e90.indexOf("开启活动提醒") !== -1 ? await _0x461d7e(_0x3f6909, _0xe27a2b.missionCollectionId, _0xe27a2b.missionDefId, _0xe27a2b.missionXId, _0xe27a2b.id, _0x57d545, _0xe27a2b.nextStageCount) : (await _0x443586(_0x3f6909, _0xe27a2b.missionDefId, _0xe27a2b.missionCollectionId, _0x372857), await _0x1a5635(_0x3f6909, _0xe27a2b.missionDefId, _0xe27a2b.missionCollectionId, _0xe27a2b.missionXId, _0x57d545));
}
async function _0x5af543(_0x5894a8, _0xed9ec2) {
  let _0x1b85be = await _0xcb2b46(_0x5894a8);
  if (_0x1b85be) for (let _0x631d09 = 0; _0x631d09 < _0x1b85be.length; _0x631d09++) {
    const _0x3c8090 = _0x1b85be[_0x631d09];
    if (_0x3c8090.actionConfig.actionType === "OPEN_APP_PUSH" && _0x3c8090.status === "RUNNING") {
      const _0x297ea8 = {
          "bizScene": "FOOD_ELIMINATE",
          "bizMethod": "setSubscribe",
          "bizParam": "{\"state\":true,\"gameId\":null,\"token\":\"" + _0xed9ec2 + "\"}"
        },
        _0x16b625 = await _0x52de73(_0x5894a8, _0x297ea8);
      if (_0x16b625) {
        const _0x205ffc = {
            "bizScene": "FOOD_ELIMINATE",
            "bizMethod": "finisheTask",
            "bizParam": "{\"taskId\":\"T001\",\"gameId\":null,\"token\":\"" + _0xed9ec2 + "\"}"
          },
          _0x14e22a = await _0x52de73(_0x5894a8, _0x205ffc);
        _0x14e22a && (await _0x2f2832(_0x3c8090, _0x5894a8, _0xed9ec2));
      }
    } else {
      if (_0x3c8090.status === "FINISH") for (let _0x3ee14a = 0; _0x3ee14a < _0x3c8090.missionStageDTOS.length; _0x3ee14a++) {
        let _0x1ee80d = _0x3c8090.missionStageDTOS[_0x3ee14a];
        _0x1ee80d.rewardStatus === "TODO" && (await _0x2f2832(_0x3c8090, _0x5894a8, _0xed9ec2, _0x3ee14a + 1));
      } else {
        if (!(_0x3c8090.actionConfig.actionType === "PAGEVIEW" && _0x3c8090.status === "RUNNING")) continue;
        await _0x2f2832(_0x3c8090, _0x5894a8, _0xed9ec2);
      }
    }
  }
}
async function _0x1a5635(_0x21af2a, _0x1ac182, _0x53f6bb, _0x21074e, _0xd44db3) {
  const _0x2f5370 = {
    "missionCollectionId": _0x53f6bb,
    "missionId": _0x1ac182,
    "count": "1",
    "extInfo": "{\"token\":\"" + _0xd44db3 + "\",\"type\":\"Task\",\"count\":1}",
    "missionXId": _0x21074e,
    "umiToken": "1",
    "ua": "1",
    "locationInfos": "[\"{\\\"lng\\\":120.21287675946951,\\\"lat\\\":30.182377863675356,\\\"city\\\":\\\"330100\\\"}\"]"
  };
  let _0x56ef0c = await _0x500608(_0x21af2a, "mtop.ele.biz.growth.task.core.receiveprize", _0x2f5370, "h5%40chrome_android_87.0.4280.141");
  if (_0x56ef0c) {
    let _0x50f75e = _0x56ef0c.rlist[0].value;
    console.log("完成饿了个饿任务，获得", _0x50f75e, "体力");
  }
}
async function _0x443586(_0x361ab7, _0x128c46, _0x4b10f1, _0x4f3108) {
  const _0x4f39cb = {
    "collectionId": _0x4b10f1,
    "missionId": _0x128c46,
    "actionCode": "PAGEVIEW",
    "pageFrom": _0x4f3108,
    "viewTime": "15",
    "bizScene": "FOOD_ELIMINATE",
    "accountPlan": "HAVANA_COMMON",
    "sync": "false"
  };
  return await _0x500608(_0x361ab7, "mtop.ele.biz.growth.task.event.pageview", _0x4f39cb);
}
async function _0x500608(_0x24ee6a, _0x5c7d68, _0x2c0f40, _0x1727e4 = "1608030065155%40eleme_android_11.1.38") {
  var _0x3984b1 = {
    "cookie": _0x24ee6a,
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x29f5f3 = new Date().getTime(),
    _0x5eba06 = 12574478;
  var _0x20edaa = "data=" + encodeURIComponent(JSON.stringify(_0x2c0f40));
  const _0x323250 = _0x467663(_0x24ee6a),
    _0x58709d = _0x323250.split("_")[0],
    _0x3aff88 = await _0x17b63c(_0x58709d + "&" + _0x29f5f3 + "&" + _0x5eba06 + "&" + JSON.stringify(_0x2c0f40), _0xa70d4a);
  var _0x4ae364 = {
    "url": "https://guide-acs.m.taobao.com/h5/" + _0x5c7d68 + "/1.0/?jsv=2.7.0&appKey=12574478&t=" + _0x29f5f3 + "&sign=" + _0x3aff88 + "&api=" + _0x5c7d68 + "&v=1.0&type=originaljson&dataType=json&ttid=" + _0x1727e4 + "&needLogin=true&LoginRequest=true",
    "method": "GET",
    "headers": _0x3984b1,
    "body": _0x20edaa
  };
  return _0x1a9f16(_0x2669cd => {
    _0x4d6f23(_0x4ae364, async (_0x415b7f, _0x39529e, _0x9371c6) => {
      if (!_0x415b7f && _0x39529e.statusCode == 200) try {
        const _0x27e7e6 = JSON.parse(_0x9371c6);
        let _0x596a5a = _0x27e7e6.data;
        if (_0x339b66(_0x596a5a) && _0x27e7e6.ret[0].indexOf("接口调用成功") === -1) console.log(_0x27e7e6.ret[0]), _0x2669cd(null);else {
          _0x2669cd(_0x596a5a);
        }
      } catch (_0x481967) {
        console.log(_0x9371c6);
        _0x2669cd(null);
      } else _0x2669cd(null);
    });
  });
}
async function _0x26947b(_0x1de819) {
  const _0x263980 = {
      "bizScene": "FOOD_ELIMINATE",
      "bizMethod": "login",
      "bizParam": "{\"inviterId\":null,\"gameId\":null,\"token\":\"token\"}"
    },
    _0x54a31f = await _0x52de73(_0x1de819, _0x263980);
  return _0x54a31f.data.token;
}
async function _0x44aa1f(_0xf5a0, _0x41f564, _0x5bfe26) {
  const _0x1317db = {
    "bizScene": "FOOD_ELIMINATE",
    "bizMethod": "updateTask",
    "bizParam": "{\"taskId\":\"" + _0x5bfe26 + "\",\"gameId\":null,\"token\":\"" + _0x41f564 + "\"}"
  };
  let _0x9b6f94 = await _0x52de73(_0xf5a0, _0x1317db);
  if (!_0x9b6f94.bizSuccess) console.log(_0x9b6f94.bizErrorMsg);else {
    let _0xacc9f4 = _0x9b6f94.data.task.isFinishe;
    while (!_0xacc9f4) {
      await _0x571c6c(1);
      await _0x5b4b6a(_0xf5a0, _0x41f564, _0x5bfe26);
      _0x9b6f94 = await _0x52de73(_0xf5a0, _0x1317db);
      if (_0x9b6f94.bizSuccess) {
        _0xacc9f4 = _0x9b6f94.data.task.isFinishe;
      } else {
        _0xacc9f4 = true;
      }
    }
  }
}
async function _0x5b4b6a(_0x3a0050, _0x18c1c8, _0x33f871) {
  const _0x1c4966 = {
      "bizScene": "FOOD_ELIMINATE",
      "bizMethod": "finisheTask",
      "bizParam": "{\"taskId\":\"" + _0x33f871 + "\",\"gameId\":null,\"token\":\"" + _0x18c1c8 + "\"}"
    },
    _0x5d0bee = await _0x52de73(_0x3a0050, _0x1c4966);
  if (_0x5d0bee) {
    const _0x57e616 = _0x5d0bee.data.rewardItems[0].num;
    _0x57e616 && console.log("完成饿了么内的任务，获得", _0x57e616, "体力");
  }
}
async function _0x52de73(_0x1d9a04, _0x25cfea) {
  var _0x3dcd93 = {
    "authority": "shopping.ele.me",
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "origin": "https://r.ele.me",
    "pragma": "no-cache",
    "referer": "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    "cookie": _0x1d9a04,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x44ddb8 = new Date().getTime(),
    _0x1a24a4 = 12574478;
  var _0x2ce54f = "data=" + encodeURIComponent(JSON.stringify(_0x25cfea));
  const _0x55f5b1 = _0x467663(_0x1d9a04),
    _0x4a68c1 = _0x55f5b1.split("_")[0],
    _0x3ffa12 = await _0x17b63c(_0x4a68c1 + "&" + _0x44ddb8 + "&" + _0x1a24a4 + "&" + JSON.stringify(_0x25cfea), _0xa70d4a);
  var _0x272ab5 = {
    "url": "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x44ddb8 + "&sign=" + _0x3ffa12 + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    "method": "POST",
    "headers": _0x3dcd93,
    "body": _0x2ce54f
  };
  return _0x1a9f16(_0x59e48e => {
    _0x4d6f23(_0x272ab5, async (_0x18f8ce, _0x3a4c65, _0x356851) => {
      if (!_0x18f8ce && _0x3a4c65.statusCode == 200) {
        try {
          const _0x250094 = JSON.parse(_0x356851),
            _0x1d96bc = JSON.parse(_0x250094.data.data);
          _0x59e48e(_0x1d96bc);
        } catch (_0x5a615e) {
          console.log(_0x356851);
          _0x59e48e(null);
        }
      } else _0x59e48e(null);
    });
  });
}
async function _0x2ac3d5(_0x10073d, _0x38dd66) {
  const _0x3a6f75 = await _0x5cdcf5(_0x10073d, _0x38dd66);
  let _0x7eaf0b = Object.values(_0x3a6f75).length;
  if (_0x7eaf0b === 1000) {
    console.log("饿了个饿已通关");
    return;
  }
  let _0x4131a6 = true,
    _0x5942ff = await _0x493bc3(_0x10073d, _0x38dd66, _0x7eaf0b + 1);
  while (_0x5942ff) {
    _0x7eaf0b = await _0x2e0857(_0x10073d, _0x5942ff, _0x38dd66);
    await _0x571c6c(1);
    _0x5942ff = await _0x493bc3(_0x10073d, _0x38dd66, _0x7eaf0b);
    if (_0x4131a6) {
      console.log("------ 开始领取体力 ------");
      await _0x44aa1f(_0x10073d, _0x38dd66, "T002");
      await _0x571c6c(1);
      await _0x5f0c69(_0x10073d, _0x38dd66);
      await _0x571c6c(1);
      await _0x5f0c69(_0x10073d, _0x38dd66);
      _0x4131a6 = false;
    }
  }
}
async function _0x5f0c69(_0x536082, _0x3da6b6) {
  const _0x141df3 = {
      "bizScene": "FOOD_ELIMINATE",
      "bizMethod": "getPackage",
      "bizParam": "{\"gameId\":null,\"token\":\"" + _0x3da6b6 + "\"}"
    },
    _0x3e5ff8 = await _0x52de73(_0x536082, _0x141df3);
  return _0x3e5ff8.data.energy;
}
async function _0x5cdcf5(_0x4ec5b8, _0x321b17) {
  const _0x4025cb = {
      "bizScene": "FOOD_ELIMINATE",
      "bizMethod": "queryLevels",
      "bizParam": "{\"gameId\":null,\"token\":\"" + _0x321b17 + "\"}"
    },
    _0x15ea88 = await _0x52de73(_0x4ec5b8, _0x4025cb);
  if (!_0x15ea88.data) {
    return console.log(_0x15ea88.bizErrorMsg), null;
  }
  return _0x15ea88.data.levels;
}
async function _0x493bc3(_0x135b31, _0x1fb194, _0xd02e0c) {
  const _0x3e670e = {
      "bizScene": "FOOD_ELIMINATE",
      "bizMethod": "startGame",
      "bizParam": "{\"levelId\":\"" + _0xd02e0c + "\",\"gameId\":null,\"token\":\"" + _0x1fb194 + "\"}"
    },
    _0x364f40 = await _0x52de73(_0x135b31, _0x3e670e);
  if (_0x364f40.bizErrorMsg !== "success") return console.log("饿了个饿，体力已耗尽，结束"), null;
  return _0x364f40.data.gameCode;
}
async function _0x2e0857(_0x53d642, _0x2c05c0, _0x204792) {
  const _0x284d81 = {
      "bizScene": "FOOD_ELIMINATE",
      "bizMethod": "settlement",
      "bizParam": "{\"gameCode\":\"" + _0x2c05c0 + "\",\"star\":3,\"gameId\":null,\"token\":\"" + _0x204792 + "\"}"
    },
    _0x27285a = await _0x52de73(_0x53d642, _0x284d81);
  if (_0x27285a.bizErrorMsg !== "success") return console.log(_0x27285a.bizErrorMsg), null;
  return _0x27285a.data.lastLevelId;
}
async function _0x2683be(_0x30eb03, _0x10f1c8) {
  const _0x23e600 = {
    "bizScene": "FOOD_ELIMINATE",
    "bizMethod": "updateTask",
    "bizParam": "{\"taskId\":\"T004\",\"gameId\":null,\"token\":\"" + _0x10f1c8 + "\"}"
  };
  let _0x2ba7e8 = await _0x52de73(_0x30eb03, _0x23e600);
  _0x2ba7e8.data && console.log("分享饿了个饿，获得 5 乐园币");
}
async function _0x77bade() {
  await _0x3069dd(_0xa70d4a, 1);
  const _0x482c1a = _0x543184();
  for (let _0x34ea95 = 0; _0x34ea95 < _0x482c1a.length; _0x34ea95++) {
    const _0x5c0b68 = _0x482c1a[_0x34ea95];
    if (!_0x5c0b68) console.log(" ❌无效用户信息, 请重新获取ck");else try {
      let _0x407ef1 = await _0x408471(_0x5c0b68, _0x34ea95);
      if (!_0x407ef1) {
        continue;
      }
      let _0x5ca704 = await _0x35b80f(_0x407ef1);
      if (!_0x5ca704.username) {
        console.log("第", _0x34ea95 + 1, "账号失效！请重新登录！！！😭");
        continue;
      }
      const _0x413c83 = _0x5ca704.user_id;
      await _0x31cd47(_0xa70d4a, _0x413c83, _0x271e7c);
      console.log("******开始【饿了么账号", _0x34ea95 + 1, "】", _0x5ca704.username, "*********");
      const _0x49edef = await _0x26947b(_0x407ef1);
      console.log("------ 开始领取体力 ------");
      await _0x5af543(_0x407ef1, _0x49edef);
      console.log("------ 开始闯关 ------");
      await _0x2ac3d5(_0x407ef1, _0x49edef);
      await _0x2683be(_0x407ef1, _0x49edef);
      console.log("防止黑号延时5-10秒");
      await _0x571c6c(_0x1317aa(5, 10));
    } catch (_0x42d030) {
      console.log(_0x42d030);
    }
  }
  process.exit(0);
}
_0x77bade();
function _0x1317aa(_0x352a12, _0x99741d) {
  return Math.floor(Math.random() * (_0x99741d - _0x352a12 + 1) + _0x352a12);
}
function _0x563430(_0x26ac3f) {
  function _0x4f6939(_0x328e43) {
    if (typeof _0x328e43 === "string") {
      return function (_0x66820d) {}.constructor("while (true) {}").apply("counter");
    } else ("" + _0x328e43 / _0x328e43).length !== 1 || _0x328e43 % 20 === 0 ? function () {
      return true;
    }.constructor("debugger").call("action") : function () {
      return false;
    }.constructor("debugger").apply("stateObject");
    _0x4f6939(++_0x328e43);
  }
  try {
    if (_0x26ac3f) return _0x4f6939;else _0x4f6939(0);
  } catch (_0x579552) {}
}