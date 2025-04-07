//Mon Apr 07 2025 10:04:14 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const jdCookie = require("./jdCookie"),
  notify = require("./utils/Rebels_sendJDNotify"),
  common = require("./utils/Rebels_jdCommon"),
  CryptoJS = require("crypto-js");
let taskThreads = process.env.jd_gmart_bykq_threads || "1";
const runInterval = process.env.jd_gmart_interval || "1500",
  isNotify = (process.env.jd_gmart_notify || process.env.jd_gmart_Notify) === "true",
  pinFilter = (process.env.jd_gmart_pinFilter || "").split("@"),
  randomApi = process.env.jd_gmart_signapi || "http://rsign.257999.xyz/rsign",
  maxThreads = 1;
let cookiesArr = Object.keys(jdCookie).map(i1ii1 => jdCookie[i1ii1]).filter(il1ii => il1ii);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  notify.config({
    "title": $.name
  });
  await Main();
  isNotify && notify.getMessage() && (await notify.push());
})().catch(I1il11 => $.logErr(I1il11)).finally(() => $.done());
async function Main() {
  try {
    try {
      const iI1Iil = parseInt(taskThreads);
      iI1Iil > 0 && iI1Iil !== 1 && (taskThreads = iI1Iil);
    } catch {
      taskThreads = 1;
    }
    taskThreads = Math.min(taskThreads, maxThreads);
    $.waitTime = null;
    if (runInterval) try {
      const il1iI = parseInt(runInterval);
      il1iI >= 0 && ($.waitTime = il1iI);
    } catch {
      console.log("⚠ 自定义运行间隔时长设置错误");
    }
    $.needRemoveCookieIndex = [];
    console.log("==========" + $.name + "变量开启状态==========");
    console.log("活动入口：APP首页-京东国际");
    console.log("SIGN服务: [" + (process.env.jd_gmart_signapi ? "" + process.env.jd_gmart_signapi : "内置SIGN服务") + "]");
    console.log("间隔时长: [" + $.waitTime / 1000 + "秒]运行间隔时长");
    console.log("代理开关: [" + common.getProxyStatus() + "]");
    console.log("通知推送: [" + (isNotify ? "开启" : "关闭") + "]");
    console.log("账号过滤: [" + pinFilter.join(", ") + "]");
    console.log("==========" + $.name + "变量状态结束==========");
    console.log("");
    if (!randomApi) {
      console.log("⚠ 请先定义SIGN环境变量后再运行脚本！");
      return;
    }
    await common.concTask(taskThreads, cookiesArr, taskFnc);
    $.runEnd = false;
    $.needRemoveCookieIndex.length > 0 && (cookiesArr = cookiesArr.filter((i1iIii, i1iIil) => !$.needRemoveCookieIndex.includes(i1iIil + 1)), $.needRemoveCookieIndex = []);
    const lIIiIl = notify.getMessage();
    lIIiIl && console.log("\n📣 运行结果\n" + lIIiIl.replace(/：/g, " ➜ "));
  } catch (liI1il) {
    console.log("❌ 脚本运行遇到了错误\n" + liI1il);
  }
}
async function taskFnc(llIlIi, llIlIl) {
  if ($.runEnd) return {
    "runEnd": true
  };
  const il1i1 = decodeURIComponent(common.getCookieValue(llIlIi, "pt_pin"));
  function lIIiIi(iI111I, IIIlI1) {
    {
      if (iI111I.length <= 4) return iI111I;else {
        {
          const IiiIl = iI111I.slice(0, 2),
            ii1l1l = iI111I.slice(-2),
            l1lli1 = Math.max(IIIlI1 - IiiIl.length - ii1l1l.length, 0),
            IiiIi = "*".repeat(l1lli1);
          return IiiIl + IiiIi + ii1l1l;
        }
      }
    }
  }
  const liI1iI = decodeURIComponent(il1i1),
    iI1Il1 = lIIiIi(liI1iI, 6),
    i1iIl1 = "【账号" + llIlIl + "】" + iI1Il1 + "：",
    i1lli1 = notify.create(llIlIl, il1i1);
  if (pinFilter.length > 0 && (pinFilter.includes(il1i1) || pinFilter.includes(encodeURIComponent(il1i1)))) {
    {
      i1lli1.fix("已设置跳过运行当前账号");
      console.log(i1lli1.getInlineContent());
      $.needRemoveCookieIndex.push(llIlIl);
      return;
    }
  }
  const llIlII = await common.getLoginStatus(llIlIi);
  if (!llIlII && typeof llIlII === "boolean") {
    {
      console.log(i1iIl1 + "账号无效");
      i1lli1.fix("账号无效");
      $.needRemoveCookieIndex.push(llIlIl);
      return;
    }
  }
  const IIlII = common.genUA(il1i1);
  let lIIiII = false,
    i1iIlI = 2876,
    li111,
    liI1lI,
    lIIiI1,
    ll1I1,
    Ii1ili = CryptoJS.MD5("android" + il1i1 + "taskRun" + i1iIlI).toString(),
    iI1Ii1 = CryptoJS.MD5("android" + il1i1 + "receiveReward" + i1iIlI).toString(),
    Ii1ill = CryptoJS.MD5("android" + il1i1 + "signInWithPrize" + i1iIlI).toString(),
    llIlI1 = new Date().getTime() + "1",
    iI1IiI = CryptoJS.MD5("android" + il1i1 + "globalTask" + i1iIlI + llIlI1).toString(),
    IIlI1 = 83596858,
    i1iIli = null,
    i1iIll = "";
  li111 = "";
  await liI1l1("queryLayout");
  await $.wait(parseInt($.waitTime * 1 + 1000, 10));
  if (li111) {
    {
      for (let iI111i of li111.navigationPage.tabPage.floors || []) {
        iI111i.floorType == "BROWSE_AWARDS_WIDGET" && (IIlI1 = iI111i.floorId);
        iI111i.floorType == "TASK_FLOAT" && (i1iIli = iI111i.floorId);
      }
      liI1lI = "";
      await liI1l1("globalMainList");
      await $.wait(parseInt($.waitTime * 1 + 1000, 10));
      if (liI1lI) for (let iI111l of liI1lI.datas || []) {
        lIIiI1 = iI111l;
        if (lIIiI1.status === "1") continue;
        lIIiI1.name.includes("签到") && (await liI1l1("userFollow"), await $.wait(parseInt($.waitTime * 1 + 1000, 10)), await liI1l1("signInWithPrize"), await $.wait(parseInt($.waitTime * 1 + 1000, 10)));
        for (let i1lIii of lIIiI1.items) {
          {
            ll1I1 = i1lIii;
            if (ll1I1.status === "1") continue;
            console.log(i1iIl1 + "去做任务: [" + ll1I1.name + "]");
            for (let III11l of Array(ll1I1.totalTimes - ll1I1.currentTimes)) {
              if (ll1I1.name.includes("商品")) {
                {
                  i1iIll = getRandomInt(3333333, 3336666);
                  await liI1l1("globalTask");
                  if (lIIiII) break;
                  await $.wait(parseInt($.waitTime * 1 + 1000, 10));
                }
              } else {
                await liI1l1("_globalTask");
                if (lIIiII) break;
                await $.wait(parseInt($.waitTime * 1 + 1000, 10));
              }
              if (lIIiII) break;
            }
            if (lIIiII) break;
          }
        }
        if (lIIiII) break;
      }
      if (lIIiII) return;
      for (let llIl1l of Array(7)) {
        {
          await liI1l1("taskRun");
          if (lIIiII) break;
          await $.wait(parseInt($.waitTime * 1 + 1000, 10));
          await liI1l1("receiveReward");
          if (lIIiII) break;
          await $.wait(parseInt($.waitTime * 1 + 10000, 10));
        }
      }
    }
  }
  if ($.runEnd) return {
    "runEnd": true
  };
  await $.wait(parseInt($.waitTime * 1 + 1000, 10));
  async function i1lliI(Iiil, IIIli) {
    try {
      switch (Iiil) {
        case "queryLayout":
          if (IIIli.code === "0") li111 = IIIli.result;else {
            msg = common.getErrorMsg(IIIli);
            console.log(i1iIl1 + "首页失败：" + msg);
          }
          break;
        case "globalMainList":
          IIIli.code === "0" ? liI1lI = IIIli.result : (msg = common.getErrorMsg(IIIli), console.log(i1iIl1 + "任务列表失败：" + msg));
          break;
        case "globalTask":
        case "_globalTask":
          IIIli.code === "0" ? IIIli.result ? IIIli.result.status === "1" ? console.log(i1iIl1 + "浏览完成，" + IIIli.result.msg) : console.log(i1iIl1 + "浏览完成") : (msg = common.getErrorMsg(IIIli), ["火爆"].some(l1llil => msg.includes(l1llil)) ? (console.log(i1iIl1 + "浏览失败：任务火爆"), lIIiII = true) : console.log(i1iIl1 + "浏览失败：" + msg)) : (msg = common.getErrorMsg(IIIli), ["火爆"].some(IIIlIi => msg.includes(IIIlIi)) ? (console.log(i1iIl1 + "浏览失败：任务火爆"), lIIiII = true) : console.log(i1iIl1 + "浏览失败：" + msg));
          break;
        case "taskRun":
          IIIli.code === "0" ? IIIli.result ? ["火爆"].some(llIl1I => IIIli.result.msg.includes(llIl1I)) ? (console.log(i1iIl1 + "分享失败：任务已完成"), lIIiII = true) : console.log(i1iIl1 + "分享成功：" + IIIli.result.msg) : (msg = common.getErrorMsg(IIIli), console.log(i1iIl1 + "分享失败：" + msg)) : (msg = common.getErrorMsg(IIIli), console.log(i1iIl1 + "分享失败：" + msg));
          break;
        case "receiveReward":
          if (IIIli.code === "0") IIIli.result ? ["火爆"].some(IIIlIl => IIIli.result.msg.includes(IIIlIl)) ? (console.log(i1iIl1 + "领取失败：任务已完成"), lIIiII = true) : console.log(i1iIl1 + "领取分享奖励：" + IIIli.result.msg) : (msg = common.getErrorMsg(IIIli), console.log(i1iIl1 + "领取失败：" + msg));else {
            msg = common.getErrorMsg(IIIli);
            console.log(i1iIl1 + "领取失败：" + msg);
          }
          break;
        case "signInWithPrize":
          if (IIIli.code === "0") {
            {
              if (IIIli.result && IIIli.result.isFans === 1) {
                let l1lliI = IIIli.result.signInText;
                l1lliI.includes("恭喜") ? (console.log(i1iIl1 + "签到成功：" + IIIli.result.signInText), i1lli1.insert("" + IIIli.result.signInText)) : console.log(i1iIl1 + "签到结果：" + IIIli.result.signInText);
              } else console.log(i1iIl1 + "签到失败：" + IIIli.result.signInText);
            }
          } else msg = common.getErrorMsg(IIIli), console.log(i1iIl1 + "签到失败：" + msg), ["与京豆"].some(IIIlII => msg.includes(IIIlII)) && (lIIiII = true);
          break;
        case "userFollow":
          if (IIIli.code === "0") {} else msg = common.getErrorMsg(IIIli), console.log(i1iIl1 + "关注失败：" + msg);
          break;
      }
    } catch (Iilll1) {
      console.log("❌ 未能正确处理 " + Iiil + " 请求响应 " + (Iilll1.message || Iilll1));
    }
  }
  async function liI1l1(ll11I) {
    if ($.runEnd) return;
    let iIi1I = "",
      liIIl = null,
      IlI1lI = null,
      liIIi = null,
      IilllI = "POST";
    switch (ll11I) {
      case "queryLayout":
        iIi1I = "https://api.m.jd.com/client.action";
        IlI1lI = {
          "beginTime": "",
          "applicationId": "11"
        };
        liIIi = {
          "functionId": ll11I
        };
        liIIl = common.queryStringToObject(await common.randomSign(ll11I, IlI1lI, randomApi));
        break;
      case "globalMainList":
        iIi1I = "https://api.m.jd.com/client.action";
        IlI1lI = {
          "floorId": "83596864"
        };
        liIIi = {
          "functionId": ll11I
        };
        liIIl = common.queryStringToObject(await common.randomSign(ll11I, IlI1lI, randomApi));
        break;
      case "globalTask":
        iIi1I = "https://api.m.jd.com/client.action";
        IlI1lI = {
          "timestamp": iI1IiI,
          "taskId": ll1I1.taskId,
          "type": ll1I1.type,
          "token": llIlI1,
          "floorId": "83596864",
          "skuId": i1iIll.toString()
        };
        liIIi = {
          "functionId": ll11I
        };
        liIIl = common.queryStringToObject(await common.randomSign(ll11I, IlI1lI, randomApi));
        break;
      case "_globalTask":
        iIi1I = "https://api.m.jd.com/client.action";
        IlI1lI = {
          "timestamp": iI1IiI,
          "taskId": ll1I1.taskId,
          "type": ll1I1.type,
          "token": llIlI1,
          "floorId": "83596864"
        };
        liIIi = {
          "functionId": "globalTask"
        };
        liIIl = common.queryStringToObject(await common.randomSign("globalTask", IlI1lI, randomApi));
        break;
      case "taskRun":
        iIi1I = "https://api.m.jd.com/client.action";
        IlI1lI = {
          "floatId": IIlI1,
          "timestamp": Ii1ili
        };
        liIIi = {
          "functionId": ll11I
        };
        liIIl = common.queryStringToObject(await common.randomSign(ll11I, IlI1lI, randomApi));
        break;
      case "receiveReward":
        iIi1I = "https://api.m.jd.com/client.action";
        IlI1lI = {
          "floatId": IIlI1,
          "timestamp": iI1Ii1
        };
        liIIi = {
          "functionId": ll11I
        };
        liIIl = common.queryStringToObject(await common.randomSign(ll11I, IlI1lI, randomApi));
        break;
      case "signInWithPrize":
        iIi1I = "https://api.m.jd.com/client.action";
        IlI1lI = {
          "floorId": "83596522",
          "timestamp": Ii1ill
        };
        liIIi = {
          "functionId": ll11I
        };
        liIIl = common.queryStringToObject(await common.randomSign(ll11I, IlI1lI, randomApi));
        break;
      case "userFollow":
        iIi1I = "https://api.m.jd.com/client.action";
        IlI1lI = {
          "businessId": "1",
          "type": "1",
          "themeId": "331",
          "uuid": ""
        };
        liIIi = {
          "functionId": ll11I
        };
        liIIl = common.queryStringToObject(await common.randomSign(ll11I, IlI1lI, randomApi));
        break;
      default:
        console.log("❌ 未知请求 " + ll11I);
        return;
    }
    if (Object.keys(liIIl).length === 0) {
      {
        console.log("SIGN服务请求失败，请检查网络或API地址是否正确");
        return;
      }
    }
    const iI1lIi = {};
    liIIl && Object.assign(liIIl, iI1lIi);
    liIIi && Object.assign(liIIi, iI1lIi);
    const l1lllI = {
      "url": iIi1I,
      "method": IilllI,
      "headers": {
        "Host": "api.m.jd.com",
        "Accept": "*/*",
        "Cookie": llIlIi,
        "User-Agent": IIlII,
        "Accept-Language": "zh-Hans-CN;q=1",
        "Accept-Encoding": "gzip, deflate, br"
      },
      "params": liIIi,
      "data": liIIl,
      "timeout": 30000
    };
    IilllI === "GET" && (delete l1lllI.data, delete l1lllI.headers["Content-Type"]);
    const llliIi = 1;
    let i1lIli = 0,
      i1lIll = null;
    while (i1lIli < llliIi) {
      i1lIli > 0 && (await $.wait(1000));
      const ll11il = await common.request(l1lllI);
      if (!ll11il.success) {
        {
          i1lIll = "🚫 " + ll11I + " 请求失败 ➜ " + ll11il.error;
          i1lIli++;
          continue;
        }
      }
      if (!ll11il.data) {
        i1lIll = "🚫 " + ll11I + " 请求失败 ➜ 无响应数据";
        i1lIli++;
        continue;
      }
      await i1lliI(ll11I, ll11il.data);
      break;
    }
    i1lIli >= llliIi && console.log(i1lIll);
  }
}
function getRandomInt(iiIiII, Iili) {
  return Math.floor(Math.random() * (Iili - iiIiII + 1)) + iiIiII;
}