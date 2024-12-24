//Tue Dec 24 2024 10:20:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let cookie = "",
  originCookie = "";
const cookiesArr = Object.keys(jdCookie).map(il11Ii1l => jdCookie[il11Ii1l]).filter(IIlll1i => IIlll1i);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  $.baseUrlList = ["https://cjhy-isv.isvjcloud.com", "https://lzkj-isv.isvjd.com", "https://lzkj-isv.isvjcloud.com", "https://jinggeng-isv.isvjcloud.com", "https://txzj-isv.isvjcloud.com"];
  notify.config({
    "title": $.name
  });
  for (let ill1Il1I = 0; ill1Il1I < cookiesArr.length; ill1Il1I++) {
    {
      $.index = ill1Il1I + 1;
      cookie = cookiesArr[ill1Il1I];
      originCookie = cookiesArr[ill1Il1I];
      common.setCookie(originCookie);
      $.UserName = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
      $.message = notify.create($.index, $.UserName);
      $.nickName = "";
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "******\n");
      await Main();
      common.unsetCookie();
      if ($.outFlag || $.runEnd) break;
    }
  }
  const iilliIII = notify.getMessage();
  iilliIII && console.log("\n📣 运行结果\n" + iilliIII.replace(/：/g, " ➜ "));
})().catch(IIi1Iii => $.logErr(IIi1Iii)).finally(() => $.done());
async function Main() {
  try {
    const ilili1iI = $.baseUrlList[Math.floor(Math.random() * $.baseUrlList.length)],
      lI1Il1li = await getToken(originCookie, ilili1iI, false);
    lI1Il1li ? (console.log("缓存完毕"), $.message.fix("缓存完毕")) : (console.log("❌ 缓存失败"), $.message.fix("❌ 缓存失败"));
  } catch (l1Illll) {
    console.log("❌ 脚本运行遇到了错误\n" + l1Illll);
  }
}