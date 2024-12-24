//Tue Dec 24 2024 10:07:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const jdCookie = require("./jdCookie"),
  notify = require("./utils/Rebels_sendJDNotify"),
  common = require("./utils/Rebels_jdCommon"),
  isNotify = process.env.jd_Advent_Exchange_Notify === "true";
let cookie = "";
const cookiesArr = Object.keys(jdCookie).map(lI11I1 => jdCookie[lI11I1]).filter(l1il11 => l1il11);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  notify.config({
    "title": $.name
  });
  for (let ii1I11 = 0; ii1I11 < cookiesArr.length; ii1I11++) {
    $.index = ii1I11 + 1;
    cookie = cookiesArr[ii1I11];
    common.setCookie(cookie);
    $.UserName = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
    $.UA = common.genUA($.UserName);
    $.message = notify.create($.index, $.UserName);
    $.nickName = "";
    console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "******\n");
    await Main();
    common.unsetCookie();
    if ($.runEnd) break;
    await $.wait(1000);
  }
  isNotify && notify.getMessage() && (notify.updateContent(notify.content + "\n"), await notify.push());
})().catch(liIi1 => $.logErr(liIi1)).finally(() => $.done());
async function Main() {
  const l1llI1 = await common.getLoginStatus(cookie);
  if (!l1llI1 && typeof l1llI1 === "boolean") {
    {
      console.log("账号无效");
      return;
    }
  }
  try {
    $.maxexchange = 7500;
    await sendRequest("jingBeanDetail");
    $.expirebeans = $.amount || 0;
    await $.wait(1000);
    if ($.expirebeans) {
      if ($.expirebeans < $.maxexchange) {
        console.log("您有" + $.expirebeans + "个京豆将在7天内过期,去执行兑换");
        if ($.expirebeans <= 100) {
          await $.wait(3000);
          $.expirebeans = "100";
          $.type = "1";
          await sendRequest("transfer");
          await $.wait(1000);
        } else await $.wait(3000), $.type = "1", await sendRequest("transfer"), await $.wait(1000);
      } else console.log("默认每次最多兑换" + $.maxexchange + "豆子");
    } else console.log("您未来7天内无过期京豆");
    await sendRequest("userAccount");
    await $.wait(3000);
    if ($.integral) {
      if ($.integral < $.maxexchange) console.log("您有" + $.integral + "个积分,去执行兑换"), $.integral < 100 ? console.log("你的积分不够100，不执行兑换") : (await $.wait(3000), $.type = "2", $.expirebeans = $.integral, await sendRequest("transfer"));else {
        console.log("默认每次最多兑换" + $.maxexchange + "豆子");
      }
    } else console.log("你当前没有积分，跳过~");
  } catch (IlI1Il) {
    console.log(IlI1Il.message);
  }
}
async function handleResponse(l1il1l, liIil) {
  try {
    switch (l1il1l) {
      case "jingBeanDetail":
        if (liIil?.["others"]?.["jingBeanExpire"]) {
          let iI1llI = liIil?.["others"]?.["jingBeanExpire"]["title"]["match"](/您有(\d+)个京豆将在7天内过期/);
          iI1llI ? $.amount = iI1llI[1] : $.amount = 0;
        } else console.log("❓" + l1il1l + " " + JSON.stringify(liIil));
        break;
      case "userAccount":
        liIil.code == 1 ? ($.integral = liIil?.["content"]?.["integral"] || 0, console.log("当前积分:" + $.integral)) : console.log("错误:" + liIil.errorMsg);
        break;
      case "transfer":
        liIil.code == 1 ? l1il1l == 1 ? console.log("京豆兑换" + liIil.msg + ",兑换" + $.expirebeans + "积分") : (console.log("积分兑换" + liIil.msg + ",兑换" + $.expirebeans + "京豆"), $.message.fix("\n【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n成功兑换" + $.expirebeans + "京豆！")) : console.log("兑换" + liIil.errorMsg);
        break;
    }
  } catch (i11I11) {
    console.log("❌ 未能正确处理 " + l1il1l + " 请求响应 " + (i11I11.message || i11I11));
  }
}
async function sendRequest(ii1I1l) {
  if ($.runEnd || $.outFlag) return;
  let llI = "",
    llliI = {},
    iI1li1 = "POST";
  switch (ii1I1l) {
    case "jingBeanDetail":
      bodyStr = "{ \"pageSize\": \"20\", \"page\": \"1\" }";
      sign = await common.getSign("jingBeanDetail", JSON.parse(bodyStr));
      llI = "https://api.m.jd.com/client.action?functionId=jingBeanDetail";
      llliI = sign;
      break;
    case "userAccount":
      bodyStr = [{
        "pin": "$cooMrdGatewayUid$"
      }];
      llI = "https://lop-proxy.jd.com/JingIntegralApi/userAccount";
      llliI = JSON.stringify(bodyStr);
      break;
    case "transfer":
      bodyStr = [{
        "pin": "$cooMrdGatewayUid$",
        "businessNo": guid(),
        "type": $.type,
        "transferNumber": $.expirebeans,
        "title": "京豆兑换物流积分"
      }];
      llI = "https://lop-proxy.jd.com/JingIntegralApi/transfer";
      llliI = JSON.stringify(bodyStr);
      break;
    default:
      console.log("❌ 未知请求 " + ii1I1l);
      return;
  }
  headers = {
    "User-Agent": $.UA,
    "Host": "api.m.jd.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": cookie
  };
  const lllii1 = {
    "url": llI,
    "method": iI1li1,
    "headers": {
      "Host": "lop-proxy.jd.com",
      "app-key": "jexpress",
      "access": "H5",
      "appparams": "{\"appid\":158,\"ticket_type\":\"m\"}",
      "x-requested-with": "XMLHttpRequest",
      "lop-dn": "jingcai.jd.com",
      "biz-type": "service - monitor",
      "source-client": "2",
      "sdkversion": "1.0.7",
      "user-agent": $.UA,
      "screen": "400 * 889",
      "content-type": "application/json; charset = utf-8",
      "clientinfo": "{ \"appName\": \"jingcai\", \"client\": \"m\" }",
      "accept": "application/json, text/plain, */*",
      "jexpress-report-time": new Date().getTime(),
      "forcebot": "0",
      "version": "1.0.0",
      "origin": "https://jingcai-h5.jd.com",
      "referer": "https://jingcai-h5.jd.com/",
      "accept-encoding": "gzip, deflate",
      "accept-language": "zh-CN,zh;q=0.9,th-CN;q=0.8,th;q=0.7,vi-CN;q=0.6,vi;q=0.5,en-US;q=0.4,en;q=0.3",
      "Cookie": cookie
    },
    "data": llliI,
    "timeout": 30000
  };
  iI1li1 === "GET" && (delete lllii1.body, delete lllii1.headers["Content-Type"]);
  ii1I1l === "jingBeanDetail" && (lllii1.headers = headers);
  const liIli = 1;
  let liIll = 0,
    IilIi1 = null,
    iI1liI = false;
  while (liIll < liIli) {
    {
      liIll > 0 && (await $.wait(1000));
      const l1lIi1 = await common.request(lllii1);
      if (!l1lIi1.success) {
        IilIi1 = "🚫 " + ii1I1l + " 请求失败 ➜ " + l1lIi1.error;
        liIll++;
        continue;
      }
      if (!l1lIi1?.["data"]) {
        IilIi1 = "🚫 " + ii1I1l + " 请求失败 ➜ 无响应数据";
        liIll++;
        continue;
      }
      handleResponse(ii1I1l, l1lIi1.data);
      iI1liI = false;
      break;
    }
  }
  liIll >= liIli && (console.log(IilIi1), iI1liI && ($.outFlag = true, $.message && $.message.fix(IilIi1)));
}
function guid() {
  function i1i1II() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return i1i1II() + i1i1II() + "-" + i1i1II() + "-" + i1i1II() + "-" + i1i1II() + "-" + i1i1II() + i1i1II() + i1i1II();
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
      this.isMute = false;
      this.isNeedRewrite = false;
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
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
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
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
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
      for (const t of i) if (r = Object(r)[t], undefined === r) return s;
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
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
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
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
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
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
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
      }, t => e(t));else if (this.isNode()) {
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
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
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