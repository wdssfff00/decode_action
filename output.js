//Mon Nov 04 2024 17:26:04 GMT+0000 (Coordinated Universal Time)
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
    console.log("账号无效");
    return;
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
      bodyStr = "{ \"pageSize\": \"20\", \"page\": \"1\" }", sign = await common.getSign("jingBeanDetail", JSON.parse(bodyStr)), llI = "https://api.m.jd.com/client.action?functionId=jingBeanDetail", llliI = sign;
      break;
    case "userAccount":
      bodyStr = [{
        "pin": "$cooMrdGatewayUid$"
      }], llI = "https://lop-proxy.jd.com/JingIntegralApi/userAccount", llliI = JSON.stringify(bodyStr);
      break;
    case "transfer":
      bodyStr = [{
        "pin": "$cooMrdGatewayUid$",
        "businessNo": guid(),
        "type": $.type,
        "transferNumber": $.expirebeans,
        "title": "京豆兑换物流积分"
      }], llI = "https://lop-proxy.jd.com/JingIntegralApi/transfer", llliI = JSON.stringify(bodyStr);
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
  liIll >= liIli && (console.log(IilIi1), iI1liI && ($.outFlag = true, $.message && $.message.fix(IilIi1)));
}
function guid() {
  function i1i1II() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return i1i1II() + i1i1II() + "-" + i1i1II() + "-" + i1i1II() + "-" + i1i1II() + "-" + i1i1II() + i1i1II() + i1i1II();
}