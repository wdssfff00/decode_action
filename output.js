//Mon Apr 07 2025 09:53:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
活动名称：京东国际任务
环境变量：jd_gmart_interval // 自定义运行间隔时长（整数，单位毫秒），默认1500
        jd_gmart_notify // 是否推送通知（true/false），默认不推送
        jd_gmart_pinFilter // 账号pin过滤，多个用@进行分割
        jd_gmart_signapi // 自定义SIGN的API

cron:15 1,17 * * *

*/

const $ = new Env("\u4EAC\u4E1C\u56FD\u9645\u4EFB\u52A1");
var iｉl = "jsjiami.com.v7";
const III111 = iii1II;
(function (llii1I, iiIiIi, l1lll1, IilI, liIlli, lil11, Iillll) {
  return llii1I = llii1I >> 8, lil11 = "hs", Iillll = "hs", function (lllI1, III11I, Ilii1, ll11i1, ili1I1) {
    const ll11l = iii1II;
    ll11i1 = "tfi", lil11 = ll11i1 + lil11, ili1I1 = "up", Iillll += ili1I1, lil11 = Ilii1(lil11), Iillll = Ilii1(Iillll), Ilii1 = 0;
    const Iill = lllI1();
    while (true && --IilI + III11I) {
      try {
        ll11i1 = -parseInt(ll11l(287, "7lHq")) / 1 * (parseInt(ll11l(268, "(Mbl")) / 2) + parseInt(ll11l(577, "]O#u")) / 3 + parseInt(ll11l(233, "qrJB")) / 4 + -parseInt(ll11l(473, "qrJB")) / 5 + parseInt(ll11l(446, "g4He")) / 6 + parseInt(ll11l(349, "5ZkG")) / 7 + -parseInt(ll11l(526, "gdK*")) / 8;
      } catch (ili1II) {
        ll11i1 = Ilii1;
      } finally {
        ili1I1 = Iill[lil11]();
        if (llii1I <= IilI) Ilii1 ? liIlli ? ll11i1 = ili1I1 : liIlli = ili1I1 : Ilii1 = ili1I1;else {
          if (Ilii1 == liIlli["replace"](/[kTVFUDORKdxLWEpSCPXAJ=]/g, "")) {
            if (ll11i1 === III11I) {
              Iill["un" + lil11](ili1I1);
              break;
            }
            Iill[Iillll](ili1I1);
          }
        }
      }
    }
  }(l1lll1, iiIiIi, function (liIllI, ll11i, iI1lI1, I1I1li, l1i11, IlI1li, IlI1ll) {
    return ll11i = "split", liIllI = arguments[0], liIllI = liIllI[ll11i](""), iI1lI1 = `\x72\x65\x76\x65\x72\x73\x65`, liIllI = liIllI[iI1lI1]("v"), I1I1li = `\x6a\x6f\x69\x6e`, 1542609, liIllI[I1I1li]("");
  });
}(50688, 691794, Iii11l, 200), Iii11l) && (iｉl = 7622);
const jdCookie = require(III111(552, "UPWv")),
  notify = require(III111(423, "@S%E")),
  common = require(III111(408, "7lHq")),
  CryptoJS = require(III111(407, "dSkw"));
let taskThreads = process[III111(227, "qrJB")][III111(190, "#F8e")] || "1";
const runInterval = process[III111(168, "sUJW")]["jd_gmart_interval"] || III111(504, "N@iz"),
  isNotify = (process[III111(587, "5ZkG")][III111(244, "L2kF")] || process[III111(191, "Ykc)")]["jd_gmart_Notify"]) === III111(383, "0OSy"),
  pinFilter = (process[III111(531, "f(Uw")]["jd_gmart_pinFilter"] || "")[III111(454, "xVrB")]("@"),
  randomApi = process[III111(165, "]O#u")][III111(591, "6daN")] || III111(570, "MDtz"),
  maxThreads = 1;
function Iii11l() {
  const lil1i = function () {
    return [...[iｉl, "SFjkJPsLjpiKAEaAWmOTixR.coVmCS.OTDvEU7Xd==", "o37cG8oyzq", "wSoTqe9F", "lNddUG", "FYlcMCoJj8oWW6tdNdLQ", "BJhcRSo1nW", "rSolWOzpWPyLcvFcUNJdU8oYWQa", "p8oNWQDuWQlcLmoZW6NdJcpcHrRcGa", "WQddOxC0WP1VWOpcGtO0W57dPdNcPG7dMSoXCCkadHHyWOGmhSoCCSkTgZVdTSk3W7pdTa", "W4mZWP1VmW", "WQivdmk+W7BdGgTrWO99WPGyWOWW", "gmkwW6e", "umo7gG", "o3xdQ8kEW4G", "WRlcGZ9+D3ldVhm", "5lIg5lUE6lc1", "WOddLCkneSk0ya", "WQLfy8kyWOvrWPxcPG", "WRZdPCk2lSkH", "lG0MwSovWRldVW", "gdjHfZvsDLRdQSk+WOL3amoC", "W5KrbJRcISoV", "W5VcMHVdOSowWO9IWPhcOmoo", "W6fzW5O", "WOzmWQjvyG", "W4BcLHNdQmonWOrBWPVcRSoFntxcTCo7W6X4FJ4XAN8", "smo1dIPAW5VcUG", "pbm8ua", "Ag8J", "mJqvmCoJ", "nHWBfmo7ggnvdZ0", "CCoSWOzmzd1KW5m", "CGq+WQLP", "W6mRWQi", "DcRdNSksW6G", "x8oLWQDlxG", "t8oova", "5Rs56kAB5AsM6lwB772i5lUi5yQJ54gy54Qd", "4P+UW53MNitOGOdMRl7NOiZLP6/NKjxcNa", "pmkNW7OJW5S", "W6fGW7JcPvu", "AxmJ", "gJXW", "rConxeTpW6JcNa", "W4WpWOG0eW", "WQ/cVJ15Ca", "vCofcZzo", "p3JdJW", "WRxdK8kXeCkm", "W58QWQ9+lW", "WQXezW", "W4NdMmoWvGbBWOBcOCkd", "W7jHdM/dRCoeCwb/vf7dOSo4wqfVWRFdOSoKwhjCka", "AY7cISoihmoSW5/dIWXTmq", "atj+cGzAB1y", "AmkZW7r5W73dPq", "W719mu/cPdm", "WQVdUMCH", "W7H8jq", "iqtcHqm", "5yw/5RkJ5AEp6lAO7720", "WRBcIc9Hy3hdVa", "W43cLJhdNSoT", "562Z5yUG57Mg5P+W776i", "qSopv1zsW4JcNa", "W5BcR0tdOCoO", "W7GLWQXn", "iMtcI8o5b8oYW4pcLHn7neddLsabnSoazSkzW6ydW5/dOXC9WQ7cUa", "cd8bWQBcMNjPBcJdM8keW7FdSwXCWP7cKSoMfCkMFvBdJ8kXBCk/WQtcGLZcPCo2vCo5WRK", "WQGdhW", "d0JcSSoxAa", "W5lcVt7dISot", "nCojWR0Hba", "W4/cJKK", "j8k7bSo4xW", "mLFdGmk7W6e", "W7dcOeG", "pSoYWP8", "W4JdR8oDCJS", "AmoOWOPCyJfKW5KkW5xcQCkHWPRcR2fuWPBcSCo8amkt", "CSoOsK9N", "W4vlW43cIuex", "uUISHEAZS+wsT+w4UZu", "WRZdLmk5pSkY", "EexdSCogwq", "56Yi5yMJ5OIh5yUH772i", "kSoRWOWOfG", "W5LrW5NcPa", "WPj6vCkyWR4", "6ykH556/5O2q6ygWFhmD", "qMOGs2SdoL/dN8kNWRvejG", "WRWvkmkJW70", "WPzCWRC", "amkxW4ewW452va", "4P6xW43OHyBMNl7OV5lOOzRPG57LIldKU6/PL5VORlDh", "kW4Tua", "WQ5GwCk9WRe", "dtGs", "WRyafmkBW60", "WPLCWRtcOa", "WPGal2RdPW", "W6XfW45Ymb8", "4P62e+AFUUIaUoAVSUEHREwNKEEqVLS", "EZ3dQSkRW5S", "WOzgWRLo", "W4pdHmoQsGfqW47cUa", "c8owWPSppq", "W4W8WQ9sja", "4PQGEoIfKUwSRUs7HoI9H+IHHEMxRUMBQEAwQ+MuSEITLEE9U+MxTEIUNG", "irqig8ob", "DdZcVCofnW", "W63cRgpdHSoLiG", "W4pcH8kn", "qtNdImoTW7W", "xMBdR8oe", "mMpcGSowEry2f8oFW7f4", "yKBdMW", "WQVdOd7cTCk5FSkteSkcyJLTxG", "W4CBeG", "W54nWRvwgG", "W5PqW4VcUeyw", "kX/cHaVdTa", "W4yheG", "W453W7zQaq", "w8kgW70OW6u", "W4j+W7HbgW", "WRDkACkaWQrCWP3cSa", "efZdOSkKWRfqzeRcRwWCW4Xmra", "W78uWQWajq", "56Yi5yMJ5AsM6lwB772i", "AIFcKCoIhmoxW5q", "WOxdTgr3ua", "d8okWRRcKmo4AGBdTbycWRG0", "W4tcOSozW63dSW", "pqamfmo6", "5RsV6kAd5A+55OUg77+L", "DtBdHCkT", "gSkgW4ukW5WVhHtcGx/dVSkoWOXWkSo+BItdSSo8W67dVCo0bsnBW7vphSk8W4OPWQJcUq", "WQbrWR5oDuSClvdcObFdQW", "WRjoCCkbWPvgWOq", "WQaEdG", "5REN6ks75Awn6lAP776f5lIA5yQx54kF54UE", "WPFdLmkXfmkG", "nqRcIbldK8kUW7XB", "jCoCWPealq", "bvZdPCkbWQ9l", "CINcSvOymJPj", "WQSil8kCW4K", "ouDdW44", "wSo4eI56"], ...function () {
      return [...["W4jYc0pcUa", "WQBdLgXgwW", "bvJdUmkqWQXst1RcMxy", "56A/W5lOV57OOlhPL5NPMi7MLBdPLyq", "6Aky5y6f5yQ65lM15AEM5yQ4776N", "WRuGghFdSComzZW", "A1CDt8kc", "W71dtColWQ/cNZql", "6Aol5yYa5Aw26lAu77Yp", "WQToECkh", "WRFcGJS", "cSoJyr9mW7BdKLOAW4a", "W4hcKKOy", "W45XW6FcQ0a", "lGtcHG", "5Rs56kAB5A6B5OMU", "W7GNWR1Uoa", "WOHsWR7cOCo+BSkgurZdUW", "Amk5W70", "x8kEW5qwW5C", "mwJcI8kmWRtcOtLUbq4yWPfe", "6lwq5y6K5PE35Ps2", "WQ5kBCkr", "WRaRfxZdSmoa", "5Rwd6kAd5AEp6lAO7720", "W6OQWRm", "WQNdLNuDWOC", "zgFdPmoAya", "W6H2r8obxvq", "gKRdSq", "6AAi6AcM5AAn6lE7776Q", "W70wpCojW40iW43dQb4l", "W7O4WRm6pG", "W7WRWQHC", "WR9uFHBcNwXoWRtcVLldVCkNdqldRxK", "fmkEW54vW50", "FZ7cNCoUc8oTW4m", "W7DYnKNcVG", "WRBcJcq", "AuZdImovrxLQB8k9W57dOG", "5RAt6kAg5Awk6ls+776E5lMt5yQJ54cK54IR", "j2pcHCoMzXa", "BsVdNW", "6AgA5y6y5Awk6ls+776E5lMt5yQJ5BA95A6H5OIH", "k8orWOSGhG", "etOKWQhcPq", "dCkowub+W47cL8k4W4JcSq", "eI4gWQpcHtW", "e8kvW6NdVf3cS3anWPxdGq", "WQNcIc9NBMi", "W5HrW4/cVKO2gSoUWQG1WPhcIgbPgXVdN8k4vq", "tLebvCkV", "WQKFhW", "j8kWW4hdKoACSEwjVUIVK+AWRUwNL+I2J++8M+IVLoAJRUADVEE/TUE6LoAiS2RcPhJLN6JLN6hMMOFLKkdMRlBNO5m", "W41lxCo+FW", "imkZnmocDmodtq", "qmkJW4WvW4m", "W4FdI8o5", "edG7fmo1", "EXSuWPb4maLtWP5N", "W5NdHSoGrre", "5yMo5lQY5AAZ6lEy77635lUw5yMR5Bwm5A+I5OUQ", "W6KcpdNcKenWWRJcTq", "EtBdImkBW4j7W5ibjs0f", "WRRdS3LDe8kuACogW57cKsVcHg0HjSkbFMldMCoDW6mIWOhdGxagW4nLqW", "WODrWR5F", "qeldL8otwa", "kSk3amolra", "ft0xWRhcHG", "tCoevKbVW4tcLCk8W5FcSCkcW6bxfwdcT8o6yCkStCoM", "WR0gdmkrW7m", "pb7cJSkObZ41s8kiW6ddTeVcSq", "nmoXWPCKdI4exCk8", "g8kHm8oAxa", "q8kiW6CbW6e", "WOiEiSk0W5e", "WR7dQgO", "kCk3m8oq", "WPnDWRpcQCoKz8kWsW", "n8kybCo3wq", "W613uW", "W6VcRCoo", "yuVdMCoErW", "W6lcPSowW77dGCkE", "W6yQWQzvibddR00", "WQPpx8ktWP1uWOlcOxXfW77dSe4NihO", "WQZcJdvM", "W45MW599pq", "hCkxW6xdSKNcU0eF", "CN0TCG", "W5dcMf0imry", "hmkdW7yvW64", "562D5yQr5OIJ5yQ777YN", "iZWbWO/cOW", "et4qWQtcKaqNoIBdNSkz", "5ysU57YAjGBcOCov5PYC5yM4", "wsldHSkPW4m", "DmofWOvRFW", "amoUDG", "W5xcL1NdRCon", "cSk9W6qSW40", "FXmAWOO", "bSkCW7xdQ1dcQW", "5lIN5yUV5yMS6kgZ5AA16lAn77Yy", "bGiii8o4", "W6JcUgtdTW", "WO9rWRC", "WRBcNJS", "A0FdIG", "WQXqAa/cKMDc", "5RAx6kE55A6g5OMp77+/", "kmk4mq", "W67cRgJdSCoYfCosm8kevsPlE8oHW4rLWQddKW0", "nu9oW4mmy2alW5SU", "FuxdLCoZuG", "WRrEBq", "W5nAv8oEyG", "W70HWQzCpaldR2ZcQJT/WPhcOa", "oNJdRmkzW4jaWPNdLWNcLa", "5y+a5yk/5lQC5yIHywFcMa", "hSoEWQBcHSoYAq", "W7pcTMO", "WO5NyHVcHa", "EHCaWOTDkG", "WQPqzdVcNg10WRpcVh8", "W5NdV8ozxZ8", "mHZcPdBdGW", "uCoeqffrW5u", "4P+bfUAEL+EFVUIUOoAWSWa", "ECk/W4yyW6ddImkTW5G", "W7KiWRCMfryzzqi8hmkJWPddHCoEWQf3m25L", "W4dcPgGCgG", "zcdcUxOa", "W4naW7xcQ14ehmoOWP45WO/cT355drNdImk+qftcPG", "cmoHEa", "D0ZdRmobuW", "tWpcKSoRfa", "kq8Tr8oiWPldVW", "WOJINA9C", "ASoIWOG", "DmoOWPXnxca", "tCoaxKe", "W48vas4", "EYRcL8o5", "W6rNW4TSeq", "4PQSA+IeLowSL+s4P+I9JUIJVoMvJEMBLEAxQoMuQEIUM+E/L+MvIUIUSq", "o3ddPCktW6rdWP7dMXBcJG", "562c5yQK57QU5P+D77Ys", "hSoGyXG", "oI0GWRJcKq", "W7vGmupcSsK"], ...function () {
        return ["W7PxW5rV", "W699uCoaFuuiWO1qj8ktW7q0aCk/cSoiWRSNdrS", "W51Lc0JcTq", "5yId5lUJ5OUi5yQX772w", "6lAN5y+V5PEu5PES", "W7pcUwuWkW", "W6H2v8oiwKqaWPe", "mrqpeCo7eG", "5y+q6yA954Uf5Oo/57UI5PYbyaVdMY4umLFcPxFcHa", "W4iaW7a", "FYlcMCoJj8oWW6FdKdv2bLFdKcK7", "W6fGj1JcKcGCxCkgW5m", "BdFdNW", "g8oEWQhcLSojBr/dHq", "WR/dRMm", "W4FcMhNdUSoC", "WQBdQf5zw8oskmot", "DSo4WPXq", "44cE5O+556Ag44kb6k+a5ywd6i6Y5y+lWRpdGSoQA8kOAq", "W7RcT3S", "W47cKKK", "WQ8HfN4", "aspcJqddVq", "bCkmW6pdRexcJfaEWO/dHhb3qCoxW4uIqeJcGa", "gh/dMSkwWQi", "WQ3dOt7cU8k7CSoxnSkNDX5n", "W4W7WPef", "wNSOACkHcv9WWRNcGCot", "imoSWQhcUmon", "W5W/WOWYktWTttaRl8klWRBdVW", "h8ohzc5I", "6lwZ5y+X6lYX5RM3muqc", "dcqs", "W5CQWQSvcG", "DmoSWOfCxZLAW58BW54", "kaaFWR/cUq", "BSkYW4v5W6tdRmoDWQKdW5xdShPSmwa", "5yIy5lU45AAn6lE7776Q", "56675yMa5Awj6lEx776d", "D8k5W7D7", "aCoGAq", "W4W7WPefeJORqq", "DSkZW6LRW6xdUq", "W6dcOSovW7W", "bCo7EG1EWQdcQrqiW5TsW5HjWQu+W4xdQSowW4ddTLSpWPRcLCk/W4ybW6yVW4bKW7CRW4S", "W6lcRmoF", "WO1BWRvEqKafB3lcVctdOuPEBdzdWObznI4", "W7ZcPSolW6ZdMCkc", "qmkyW45VW6O", "WPv1pW", "W67cOc7dU8oO", "WQddSMnOr8oF", "W4WuWQDFpW", "oCkVn8ou", "amoqWQ8", "dCkLtxeWWPJdPHBcMb1Sge8", "WQ9TtmkwWPe", "W4BcKHhdQq", "WQtdVbRcO8oIcmkWia", "fCkecSoL", "pmoJWQmkW7hdOSkuW53dMG", "l0RdRSkyWOu", "W6bgW59Pdq", "pN/dOCkSWPe", "r8kEW7z4W7m", "hmkxW5qEW71WxftcLMRdLmopWO41kCo/csNdUCo0WRK", "qWpcU8oxiG", "n8kRnCookq", "amkxW4ipW4nH", "BbChWQzO", "W5WWndJcKW", "WQr7WOq", "iCoPWPK/cqK", "DevpqSklqaDedXRcG8kBqa", "W75FW5P1hH93aSojWOXrq8oMAwK", "l3xdRCkFW4XbWP7dNX3cKq", "Dd3cVvW1ccnEW6RdHSosW7iRWP7cQ19IW6LA", "W6z2mv/cUJm", "yCk/W7i", "W659ssJdNSoHqrD4sa", "WR7dGSkyo8kY", "W7/cOeVdVW", "5RAk6kA45Awj6lEx776d", "jCo8WPe/", "vmkmW73dM8kRpetcLa", "W73cQwJdR8kE", "WPXRWPVcPSoE", "bYCAWRtcIcqliIddHCkHWRddRZy", "W4STWR0HaG", "WOrBWQr3DvyBywpcVa", "iXKtfCoaiK5aeG", "W63cVh7dTSoNmG", "yKZdKSo3q2m", "dW05WRtcIa", "cHC1nmoO", "gGTHcaq", "W54DWQ1siq", "WQddPMnjrSowfCoDW4RcLG", "5yMl5lM95Aw26lAu77Yp5lMF5yQj5Bwo5AYk5OML", "pUIUPoAZVUwNR+I2LsNINkft5PAi5zkt5BU25Pw95O6r", "kmkuhSoMyW", "W5CfWRfaaG", "WRzqzZO", "5BsU6k+W57Yv6lEO6l2d6l246kgo5BYC5yMG6lsx5y+l", "wI/cTeeUoJT4W6ldM8oE", "56+w5yUd5Awn6lAP776f", "FKtdHmocva", "f8kkaa", "oNZdSSkrW4XoWQ8", "B1Pw", "hSoAWRVcL8oXCa", "6AoM5y6D5Awe6lEZ77+Z5lQZ5yUN5BAX5A+f5OQ7", "bdzKcZ5h", "xZJcK8ougW", "WQVcMc96", "y8kZW65BW7VdV8oaWQ8rW4JdUa", "a8khW5qiW5zgruNcIwhdSmo0WO4riSoWjstdQq", "WQ4epg/dOq", "Fv3dNCoKqNG", "jM/cKCo9qGOnamoQW7y", "W5DVqmopzG", "a+kCVrm", "tSoXdJrKW5O", "DSkZW7L7W6ddU8okWO85W4ZdVNXH", "iN3dNCkAW4bmWRJdIJhcICklW5pcKmkramoJ", "WOvMWPTzxW", "AsFcVW", "q8k7W74VW70", "WRJdO1jkrmoAnmoaW7lcIYxcJs1Yy8oF", "h8oUybLcW7C", "4PMYWQFOR7RLHAxLRRpKU7ivW73dQSk254+J5AgP5y6B6yEC5zcD5ys76l6x6kcx6iE65P+F776A", "W73cTMldR8oUj8oi", "W5/cKHxdUmolWOHBWPe", "W7RcOSolW7ldVmks", "WRVdQw5bxmoFi8oh", "ASoOWOfFrdW", "oHqNCmojWP8", "EqCwWOXidsLeWO99tLSfW5COW5pdTvxdMG", "6Ago5y2d5AsY6lwH77+0", "5yQz5lMY5As86lAM776r", "ASkZW796W5VdQmocWRiQW57dNgfQphddTfzvD8kpWO8", "WR/dSSkiWQNcJCoaW6VcRe7dH2/dN8oe", "sLqbxmkp", "yCoOWPT9qIzMW4qXW4pcJq", "W4vlW40", "bfddSCkAWOPrsfBcHMW", "z8k/W7Wc", "tWGKWR16", "W4jGxSopxG"];
      }()];
    }()];
  }();
  Iii11l = function () {
    return lil1i;
  };
  return Iii11l();
}
;
function iii1II(_0x55300d, _0xb333b7) {
  const _0x2a46df = Iii11l();
  return iii1II = function (_0x20c2a4, _0x47fba3) {
    _0x20c2a4 = _0x20c2a4 - 148;
    let _0x32de1a = _0x2a46df[_0x20c2a4];
    if (iii1II["nghuIT"] === undefined) {
      var _0x25afca = function (_0x5cc61a) {
        const _0x2b2362 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x8b22d = "",
          _0x5d1517 = "";
        for (let _0x3f2dc9 = 0, _0x47fafd, _0x48cb60, _0x1910ee = 0; _0x48cb60 = _0x5cc61a["charAt"](_0x1910ee++); ~_0x48cb60 && (_0x47fafd = _0x3f2dc9 % 4 ? _0x47fafd * 64 + _0x48cb60 : _0x48cb60, _0x3f2dc9++ % 4) ? _0x8b22d += String["fromCharCode"](255 & _0x47fafd >> (-2 * _0x3f2dc9 & 6)) : 0) {
          _0x48cb60 = _0x2b2362["indexOf"](_0x48cb60);
        }
        for (let _0x1ee499 = 0, _0x424bd5 = _0x8b22d["length"]; _0x1ee499 < _0x424bd5; _0x1ee499++) {
          _0x5d1517 += "%" + ("00" + _0x8b22d["charCodeAt"](_0x1ee499)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x5d1517);
      };
      const _0x10c1e0 = function (_0x1ea0d4, _0x534338) {
        let _0x5918ee = [],
          _0x2a1a56 = 0,
          _0x3602f2,
          _0x107508 = "";
        _0x1ea0d4 = _0x25afca(_0x1ea0d4);
        let _0x153d57;
        for (_0x153d57 = 0; _0x153d57 < 256; _0x153d57++) {
          _0x5918ee[_0x153d57] = _0x153d57;
        }
        for (_0x153d57 = 0; _0x153d57 < 256; _0x153d57++) {
          _0x2a1a56 = (_0x2a1a56 + _0x5918ee[_0x153d57] + _0x534338["charCodeAt"](_0x153d57 % _0x534338["length"])) % 256, _0x3602f2 = _0x5918ee[_0x153d57], _0x5918ee[_0x153d57] = _0x5918ee[_0x2a1a56], _0x5918ee[_0x2a1a56] = _0x3602f2;
        }
        _0x153d57 = 0, _0x2a1a56 = 0;
        for (let _0x380bd9 = 0; _0x380bd9 < _0x1ea0d4["length"]; _0x380bd9++) {
          _0x153d57 = (_0x153d57 + 1) % 256, _0x2a1a56 = (_0x2a1a56 + _0x5918ee[_0x153d57]) % 256, _0x3602f2 = _0x5918ee[_0x153d57], _0x5918ee[_0x153d57] = _0x5918ee[_0x2a1a56], _0x5918ee[_0x2a1a56] = _0x3602f2, _0x107508 += String["fromCharCode"](_0x1ea0d4["charCodeAt"](_0x380bd9) ^ _0x5918ee[(_0x5918ee[_0x153d57] + _0x5918ee[_0x2a1a56]) % 256]);
        }
        return _0x107508;
      };
      iii1II["EpPGoC"] = _0x10c1e0, _0x55300d = arguments, iii1II["nghuIT"] = true;
    }
    const _0x387a52 = _0x2a46df[0],
      _0x41a515 = _0x20c2a4 + _0x387a52,
      _0x421bc2 = _0x55300d[_0x41a515];
    return !_0x421bc2 ? (iii1II["elmdfy"] === undefined && (iii1II["elmdfy"] = true), _0x32de1a = iii1II["EpPGoC"](_0x32de1a, _0x47fba3), _0x55300d[_0x41a515] = _0x32de1a) : _0x32de1a = _0x421bc2, _0x32de1a;
  }, iii1II(_0x55300d, _0xb333b7);
}
let cookiesArr = Object[III111(492, "57FX")](jdCookie)[III111(563, "dSkw")](i1ii1 => jdCookie[i1ii1])["filter"](il1ii => il1ii);
!cookiesArr[0] && ($[III111(548, "gdK*")]($["name"], "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6Cookie"), process[III111(460, "hDyf")](1));
!(async () => {
  const liIll1 = III111,
    llI111 = {
      "zvMWX": function (i1iIiI) {
        return i1iIiI();
      },
      "gUMgs": liIll1(442, "Y3XQ")
    };
  notify["config"]({
    "title": $[liIll1(528, "6daN")]
  }), await llI111[liIll1(388, "N@iz")](Main), isNotify && notify[liIll1(297, "hDyf")]() && (llI111[liIll1(519, "#F8e")] === liIll1(576, "xVrB") ? await notify[liIll1(443, "#F8e")]() : (lli = liIlI[liIll1(471, "luiB")](lll), llli1[liIll1(582, "MDtz")](iIli1i + liIll1(347, "qrJB") + iI1lii)));
})()[III111(543, "(]B@")](I1il11 => $[III111(437, "#F8e")](I1il11))["finally"](() => $[III111(571, "hDyf")]());
async function Main() {
  const l1llli = III111,
    lI1l11 = {
      "enVuk": function (II11l, II11i) {
        return II11l > II11i;
      },
      "aCvYi": l1llli(202, "@S%E"),
      "ZNDDc": function (iI1Iii, liI1ii) {
        return iI1Iii / liI1ii;
      },
      "mpbrZ": l1llli(338, "MDtz")
    };
  try {
    try {
      const iI1Iil = parseInt(taskThreads);
      lI1l11[l1llli(459, "57FX")](iI1Iil, 0) && iI1Iil !== 1 && (taskThreads = iI1Iil);
    } catch {
      taskThreads = 1;
    }
    taskThreads = Math[l1llli(222, "MDtz")](taskThreads, maxThreads), $["waitTime"] = null;
    if (runInterval) try {
      const il1iI = parseInt(runInterval);
      il1iI >= 0 && ($[l1llli(502, "wWHL")] = il1iI);
    } catch {
      console["log"](lI1l11[l1llli(532, "E24g")]);
    }
    $[l1llli(273, "JXXl")] = [], console[l1llli(433, "Y3XQ")](l1llli(170, "N@iz") + $[l1llli(251, "5ZkG")] + "\u53D8\u91CF\u5F00\u542F\u72B6\u6001=========="), console[l1llli(406, "6daN")]("\u6D3B\u52A8\u5165\u53E3\uFF1AAPP\u9996\u9875-\u4EAC\u4E1C\u56FD\u9645"), console[l1llli(392, "UPWv")]("SIGN\u670D\u52A1: [" + (process[l1llli(496, "xVrB")][l1llli(332, "7s^%")] ? "" + process["env"][l1llli(336, "MDtz")] : l1llli(152, "7JI5")) + "]"), console[l1llli(262, "I[)B")]("\u95F4\u9694\u65F6\u957F: [" + lI1l11[l1llli(426, "luiB")]($[l1llli(482, "6daN")], 1000) + l1llli(509, "Ykc)")), console[l1llli(379, "Vb$w")]("\u4EE3\u7406\u5F00\u5173: [" + common[l1llli(483, "24e*")]() + "]"), console[l1llli(558, "xVrB")](l1llli(445, "wToH") + (isNotify ? "\u5F00\u542F" : "\u5173\u95ED") + "]"), console[l1llli(414, "(]B@")](l1llli(239, "luiB") + pinFilter[l1llli(354, "(Mbl")](", ") + "]"), console[l1llli(228, "twsk")](l1llli(537, "6daN") + $[l1llli(310, "ZWrS")] + l1llli(216, "N@iz")), console["log"]("");
    if (!randomApi) {
      console[l1llli(379, "Vb$w")](lI1l11[l1llli(270, "Vb$w")]);
      return;
    }
    await common["concTask"](taskThreads, cookiesArr, taskFnc), $[l1llli(344, "0OSy")] = false;
    $[l1llli(209, "c%je")]["length"] > 0 && (cookiesArr = cookiesArr["filter"]((i1iIii, i1iIil) => !$[l1llli(254, "hDyf")]["includes"](i1iIil + 1)), $[l1llli(381, "k9Ph")] = []);
    const lIIiIl = notify["getMessage"]();
    lIIiIl && console[l1llli(172, "ZWrS")]("\n\uD83D\uDCE3 \u8FD0\u884C\u7ED3\u679C\n" + lIIiIl[l1llli(449, "JXXl")](/：/g, l1llli(195, "k9Ph")));
  } catch (liI1il) {
    console["log"](l1llli(450, "n&7D") + liI1il);
  }
}
async function taskFnc(llIlIi, llIlIl) {
  const iI1lII = III111,
    II11I = {
      "zNBFL": function (IllIlI, IiillI) {
        return IllIlI !== IiillI;
      },
      "LNRNr": iI1lII(475, "f(Uw"),
      "LreLg": iI1lII(564, "UMbf"),
      "detXY": function (ili11I, li11l) {
        return ili11I - li11l;
      },
      "cFIGo": function (lliiIl, li11i) {
        return lliiIl + li11i;
      },
      "NdDIg": function (lliiIi, iiIi1I) {
        return lliiIi * iiIi1I;
      },
      "bzPxY": function (IllIl1, ll1Ii) {
        return IllIl1 + ll1Ii;
      },
      "LwXVf": iI1lII(329, "UPWv"),
      "bYFaG": function (ll1Il, iiIi11) {
        return ll1Il(iiIi11);
      },
      "Gdoix": function (ill1II, i1llil) {
        return ill1II !== i1llil;
      },
      "ARTCG": function (i1llii, l1i1I1) {
        return i1llii - l1i1I1;
      },
      "obeNp": function (llIIil, llIIii) {
        return llIIil + llIIii;
      },
      "AapYq": iI1lII(464, "gdK*"),
      "yLskb": iI1lII(479, "Vb$w"),
      "gTEjx": "queryLayout",
      "QIykZ": "HVQeV",
      "rJGte": "globalMainList",
      "qqQwL": iI1lII(312, "wWHL"),
      "CwtYJ": function (Ii1I1i, llIIlI) {
        return Ii1I1i !== llIIlI;
      },
      "GzWCK": iI1lII(572, "]O#u"),
      "NUKYt": iI1lII(382, "^1M@"),
      "nqGoA": "sUPyK",
      "OHEZL": function (Ii1I1l, IIlIl) {
        return Ii1I1l === IIlIl;
      },
      "edLcu": iI1lII(579, "sUJW"),
      "ahaTL": "KcaKO",
      "GnZFH": iI1lII(462, "Y3XQ"),
      "vlMVn": iI1lII(434, "dSkw"),
      "wDAwu": iI1lII(533, "]O#u"),
      "yWfrZ": function (ili11l, Iiilll) {
        return ili11l === Iiilll;
      },
      "fXKcO": "SJBfZ",
      "nxWnP": iI1lII(396, "#F8e"),
      "jmAIJ": iI1lII(321, "@S%E"),
      "ObINZ": iI1lII(371, "N@iz"),
      "SmHyG": "RRLlr",
      "RNAzE": iI1lII(219, "(]B@"),
      "eeMRr": iI1lII(226, "]O#u"),
      "fRwzA": iI1lII(513, "xVrB"),
      "iQvwF": iI1lII(554, "t7&X"),
      "CPbfj": iI1lII(364, "E24g"),
      "lpSdL": "receiveReward",
      "VVhDw": function (Iiilli, IIlIi) {
        return Iiilli === IIlIi;
      },
      "WNIDM": iI1lII(293, "8($^"),
      "GYXdg": iI1lII(269, "24e*"),
      "lXvvV": function (ili11i, iiIi1l) {
        return ili11i !== iiIi1l;
      },
      "IFwXR": iI1lII(490, "UMbf"),
      "VJtPh": iI1lII(522, "f(Uw"),
      "YhHsn": iI1lII(538, "wToH"),
      "xwCHY": "api.m.jd.com",
      "xOUVb": iI1lII(317, "UMbf"),
      "RBczM": iI1lII(494, "hDyf"),
      "EMxPK": function (li11I, lliiII) {
        return li11I(lliiII);
      },
      "oFLba": function (iiIi1i, liI1ll, ll1II) {
        return iiIi1i(liI1ll, ll1II);
      },
      "NXrms": function (IllIii, liI1li) {
        return IllIii > liI1li;
      },
      "HKjiP": function (IllIil, ill1Ii) {
        return IllIil !== ill1Ii;
      },
      "oVNCa": iI1lII(223, "qrJB"),
      "TYmht": iI1lII(311, "7lHq"),
      "uvbgo": iI1lII(390, "57FX"),
      "KMESl": function (llIIl1, ill1Il) {
        return llIIl1 + ill1Il;
      },
      "pmxRc": function (i1lll1, Ii1I1I) {
        return i1lll1 + Ii1I1I;
      },
      "URgqI": function (l1i1Ii, l1iI1) {
        return l1i1Ii + l1iI1;
      },
      "CHlfz": function (lliiI1, IiiI1) {
        return lliiI1 + IiiI1;
      },
      "Cxjkq": iI1lII(194, "0OSy"),
      "FSRww": function (lilII, IIIiI) {
        return lilII(IIIiI);
      },
      "nxuKn": iI1lII(153, "57FX"),
      "QHAjj": iI1lII(187, "wToH"),
      "qrAGM": function (iii1i1, IllIll) {
        return iii1i1 == IllIll;
      },
      "DNTqc": function (i1lllI, llIIi1, iI1IlI) {
        return i1lllI(llIIi1, iI1IlI);
      },
      "IvIbc": function (l1i1Il, ill1I1) {
        return l1i1Il * ill1I1;
      },
      "rHjSO": function (l1i1II, ili111) {
        return l1i1II + ili111;
      },
      "QYhkt": function (Ii1I11, IllIli) {
        return Ii1I11 * IllIli;
      },
      "iitgb": iI1lII(401, "n&7D"),
      "gaGzQ": function (ii1Ii, ii1Il) {
        return ii1Ii(ii1Il);
      },
      "QDKMv": function (l1iII, iI1Ill) {
        return l1iII - iI1Ill;
      },
      "wAiKQ": function (lilI1, IIIi1, i1llli) {
        return lilI1(IIIi1, i1llli);
      },
      "eBYWv": function (i1llll, iI1Ili) {
        return i1llll * iI1Ili;
      },
      "tnFkk": function (llIIiI, iI1111) {
        return llIIiI === iI1111;
      },
      "PnjGz": iI1lII(489, "5ZkG"),
      "gvZfM": function (IIIl1, ii1ii) {
        return IIIl1(ii1ii);
      },
      "WsiZy": function (Iii1, I1I1lI) {
        return Iii1(I1I1lI);
      },
      "GcLfY": function (ii1il, l1iIlI) {
        return ii1il * l1iIlI;
      }
    };
  if ($[iI1lII(467, "qrJB")]) return {
    "runEnd": true
  };
  const il1i1 = II11I["EMxPK"](decodeURIComponent, common[iI1lII(237, "wToH")](llIlIi, "pt_pin"));
  function lIIiIi(iI111I, IIIlI1) {
    const ll11iI = iI1lII;
    if (II11I["zNBFL"](II11I["LNRNr"], II11I[ll11iI(275, "3oQ!")])) i11I1i[ll11iI(253, "5ZkG")](IillIl + "\u6D4F\u89C8\u5931\u8D25\uFF1A" + llliil);else {
      if (iI111I[ll11iI(411, "L2kF")] <= 4) return iI111I;else {
        if (II11I[ll11iI(288, "hVy1")] === "UMGnG") {
          const IiiIl = iI111I[ll11iI(566, "dSkw")](0, 2),
            ii1l1l = iI111I[ll11iI(171, "]O#u")](-2),
            l1lli1 = Math[ll11iI(544, "n&7D")](II11I[ll11iI(277, "N@iz")](IIIlI1 - IiiIl[ll11iI(300, "]O#u")], ii1l1l[ll11iI(529, "7lHq")]), 0),
            IiiIi = "*"["repeat"](l1lli1);
          return II11I["cFIGo"](IiiIl, IiiIi) + ii1l1l;
        } else {
          let l1iIl1 = ilil11["result"]["signInText"];
          l1iIl1[ll11iI(461, "dSkw")]("\u606D\u559C") ? (iiilil[ll11iI(163, "hDyf")](iil1li + ll11iI(149, "UPWv") + lillIl[ll11iI(318, "I[)B")][ll11iI(565, "N@iz")]), iIiIl[ll11iI(412, "(]B@")]("" + iiilii["result"][ll11iI(203, "7s^%")])) : li1i1i[ll11iI(248, "Ykc)")](IlIli1 + "\u7B7E\u5230\u7ED3\u679C\uFF1A" + illIiI["result"][ll11iI(360, "@S%E")]);
        }
      }
    }
  }
  const liI1iI = decodeURIComponent(il1i1),
    iI1Il1 = II11I[iI1lII(301, "kMCw")](lIIiIi, liI1iI, 6),
    i1iIl1 = "\u3010\u8D26\u53F7" + llIlIl + "\u3011" + iI1Il1 + "\uFF1A",
    i1lli1 = notify["create"](llIlIl, il1i1);
  if (II11I[iI1lII(580, "(Mbl")](pinFilter["length"], 0) && (pinFilter[iI1lII(590, "f(Uw")](il1i1) || pinFilter[iI1lII(342, "MDtz")](encodeURIComponent(il1i1)))) {
    if (II11I[iI1lII(243, "kMCw")](II11I["oVNCa"], iI1lII(309, "f(Uw"))) return i1illi;else {
      i1lli1["fix"](II11I["TYmht"]), console[iI1lII(253, "5ZkG")](i1lli1[iI1lII(540, "ZWrS")]()), $["needRemoveCookieIndex"][iI1lII(225, "d8&P")](llIlIl);
      return;
    }
  }
  const llIlII = await common[iI1lII(366, "xVrB")](llIlIi);
  if (!llIlII && II11I[iI1lII(350, "8T3X")](typeof llIlII, iI1lII(339, "qrJB"))) {
    if (II11I[iI1lII(574, "kMCw")] === iI1lII(562, "(Mbl")) lilIIi["log"](i1l1Il);else {
      console[iI1lII(315, "3oQ!")](i1iIl1 + iI1lII(212, "c%je")), i1lli1[iI1lII(359, "7s^%")](iI1lII(527, "g4He")), $[iI1lII(575, "UPWv")][iI1lII(322, "n&7D")](llIlIl);
      return;
    }
  }
  const IIlII = common["genUA"](il1i1);
  let lIIiII = false,
    i1iIlI = 2876,
    li111,
    liI1lI,
    lIIiI1,
    ll1I1,
    Ii1ili = CryptoJS[iI1lII(217, "f(Uw")](II11I["KMESl"](II11I[iI1lII(314, "]O#u")]("android", il1i1), II11I[iI1lII(395, "JXXl")]) + i1iIlI)["toString"](),
    iI1Ii1 = CryptoJS[iI1lII(468, "5ZkG")](II11I[iI1lII(557, "8T3X")](II11I["URgqI"](iI1lII(420, "UPWv") + il1i1, iI1lII(174, "f(Uw")), i1iIlI))["toString"](),
    Ii1ill = CryptoJS["MD5"](II11I[iI1lII(193, "@S%E")](II11I[iI1lII(356, "c%je")] + il1i1, "signInWithPrize") + i1iIlI)[iI1lII(186, "(Mbl")](),
    llIlI1 = new Date()["getTime"]() + "1",
    iI1IiI = CryptoJS[iI1lII(257, "ZWrS")](II11I["CHlfz"](II11I[iI1lII(463, "f(Uw")] + il1i1 + II11I[iI1lII(201, "Vb$w")], i1iIlI) + llIlI1)["toString"](),
    IIlI1 = 83596858,
    i1iIli = null,
    i1iIll = "";
  li111 = "", await II11I[iI1lII(258, "k9Ph")](liI1l1, "queryLayout"), await $["wait"](II11I[iI1lII(232, "24e*")](parseInt, II11I[iI1lII(272, "L2kF")]($[iI1lII(249, "wToH")] * 1, 1000), 10));
  if (li111) {
    if ("Gqzws" !== II11I[iI1lII(357, "luiB")]) return IiiliI[iI1lII(505, "^1M@")](II11I[iI1lII(439, "hVy1")](iii1iI[iI1lII(337, "Ykc)")](), II11I[iI1lII(361, "@S%E")](llIll - il1iII, 1))) + iilli;else {
      for (let iI111i of li111[iI1lII(376, "g4He")][iI1lII(166, "ZWrS")]["floors"] || []) {
        iI111i[iI1lII(578, "Y3XQ")] == II11I["QHAjj"] && (II11I[iI1lII(480, "(Mbl")](iI1lII(192, "]O#u"), iI1lII(447, "xVrB")) ? IIlI1 = iI111i[iI1lII(375, "0OSy")] : ill111["log"]("\n\uD83D\uDCE3 \u8FD0\u884C\u7ED3\u679C\n" + Iliil1[iI1lII(316, "7s^%")](/：/g, II11I[iI1lII(365, "f(Uw")]))), II11I["qrAGM"](iI111i[iI1lII(298, "UMbf")], "TASK_FLOAT") && (i1iIli = iI111i[iI1lII(486, "@S%E")]);
      }
      liI1lI = "", await liI1l1(II11I["rJGte"]), await $[iI1lII(162, "qrJB")](II11I[iI1lII(456, "7lHq")](parseInt, II11I[iI1lII(210, "(]B@")]($[iI1lII(340, "k9Ph")], 1) + 1000, 10));
      if (liI1lI) for (let iI111l of liI1lI[iI1lII(465, "UMbf")] || []) {
        lIIiI1 = iI111l;
        if (lIIiI1[iI1lII(280, "Y3XQ")] === "1") continue;
        lIIiI1[iI1lII(267, "3oQ!")]["includes"]("\u7B7E\u5230") && (await liI1l1("userFollow"), await $[iI1lII(422, "f(Uw")](II11I[iI1lII(264, "6daN")](parseInt, II11I[iI1lII(421, "qrJB")]($[iI1lII(410, "g4He")], 1) + 1000, 10)), await liI1l1(iI1lII(282, "Vb$w")), await $[iI1lII(158, "N@iz")](II11I[iI1lII(256, "L2kF")](parseInt, II11I[iI1lII(154, "d8&P")](II11I[iI1lII(304, "f(Uw")]($[iI1lII(387, "d8&P")], 1), 1000), 10)));
        for (let i1lIii of lIIiI1[iI1lII(477, "4Y^O")]) {
          if (II11I["iitgb"] !== iI1lII(507, "MDtz")) {
            const i1lIil = II11I[iI1lII(188, "twsk")](i1ili1, i1l1l1);
            i1lIil > 0 && II11I["Gdoix"](i1lIil, 1) && (II11Ii = i1lIil);
          } else {
            ll1I1 = i1lIii;
            if (ll1I1[iI1lII(326, "]O#u")] === "1") continue;
            console[iI1lII(253, "5ZkG")](i1iIl1 + iI1lII(176, "3oQ!") + ll1I1[iI1lII(198, "UPWv")] + "]");
            for (let III11l of II11I[iI1lII(573, "sUJW")](Array, II11I[iI1lII(213, "twsk")](ll1I1["totalTimes"], ll1I1[iI1lII(488, "I[)B")]))) {
              if (ll1I1[iI1lII(265, "k9Ph")][iI1lII(373, "6daN")]("\u5546\u54C1")) {
                if (II11I["Gdoix"](iI1lII(236, "I[)B"), iI1lII(560, "c%je"))) ii1ili["log"](iI1lII(394, "twsk") + liil1i + " \u8BF7\u6C42\u54CD\u5E94 " + (lI1lil[iI1lII(561, "sUJW")] || i1l1iI));else {
                  i1iIll = getRandomInt(3333333, 3336666), await liI1l1(II11I[iI1lII(402, "^1M@")]);
                  if (lIIiII) break;
                  await $[iI1lII(234, "wToH")](II11I[iI1lII(385, "UMbf")](parseInt, II11I[iI1lII(230, "4Y^O")](II11I["QYhkt"]($["waitTime"], 1), 1000), 10));
                }
              } else {
                await liI1l1(iI1lII(235, "8T3X"));
                if (lIIiII) break;
                await $[iI1lII(592, "n&7D")](II11I[iI1lII(484, "wToH")](parseInt, II11I[iI1lII(308, "sUJW")]($["waitTime"], 1) + 1000, 10));
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
        if (II11I["tnFkk"](II11I["PnjGz"], II11I[iI1lII(405, "f(Uw")])) {
          await II11I["gvZfM"](liI1l1, II11I[iI1lII(374, "hVy1")]);
          if (lIIiII) break;
          await $[iI1lII(208, "Vb$w")](parseInt(II11I[iI1lII(238, "Ykc)")]($["waitTime"] * 1, 1000), 10)), await II11I[iI1lII(487, "MDtz")](liI1l1, II11I[iI1lII(241, "wToH")]);
          if (lIIiII) break;
          await $[iI1lII(200, "@S%E")](II11I[iI1lII(500, "Y3XQ")](parseInt, $[iI1lII(221, "I[)B")] * 1 + 10000, 10));
        } else IlI1ii = lIIiii["floorId"];
      }
    }
  }
  if ($[iI1lII(259, "MDtz")]) return {
    "runEnd": true
  };
  await $[iI1lII(595, "8T3X")](parseInt(II11I[iI1lII(404, "hVy1")]($[iI1lII(499, "4Y^O")], 1) + 1000, 10));
  async function i1lliI(Iiil, IIIli) {
    const l1i1I = iI1lII;
    if (II11I[l1i1I(427, "k9Ph")](l1i1I(183, "4Y^O"), l1i1I(296, "wToH"))) {
      if (i1illI[l1i1I(589, "5ZkG")] <= 4) return l1l1II;else {
        const Iiii = Iil1I1["slice"](0, 2),
          llIl11 = Ii1iII[l1i1I(369, "7s^%")](-2),
          IIIll = l1i11I[l1i1I(155, "Ykc)")](II11I["ARTCG"](II11I["detXY"](II11II, Iiii[l1i1I(343, "d8&P")]), llIl11["length"]), 0),
          I1I1il = "*"[l1i1I(372, "hVy1")](IIIll);
        return II11I[l1i1I(588, "]O#u")](Iiii, I1I1il) + llIl11;
      }
    } else try {
      if (II11I[l1i1I(358, "UPWv")] === II11I[l1i1I(550, "Y3XQ")]) switch (Iiil) {
        case II11I[l1i1I(428, "Y3XQ")]:
          if (IIIli[l1i1I(289, "8($^")] === "0") li111 = IIIli["result"];else {
            if (II11I["QIykZ"] === II11I[l1i1I(436, "UPWv")]) msg = common["getErrorMsg"](IIIli), console[l1i1I(432, "8($^")](i1iIl1 + l1i1I(536, "57FX") + msg);else {
              const liII1 = lI1Iil(lilIiI);
              liII1 >= 0 && (IiilIi["waitTime"] = liII1);
            }
          }
          break;
        case II11I[l1i1I(325, "7lHq")]:
          IIIli[l1i1I(451, "0OSy")] === "0" ? liI1lI = IIIli[l1i1I(197, "d8&P")] : (msg = common[l1i1I(545, "]O#u")](IIIli), console[l1i1I(389, "f(Uw")](i1iIl1 + "\u4EFB\u52A1\u5217\u8868\u5931\u8D25\uFF1A" + msg));
          break;
        case l1i1I(517, "Ykc)"):
        case II11I["qqQwL"]:
          IIIli[l1i1I(413, "E24g")] === "0" ? IIIli[l1i1I(553, "kMCw")] ? IIIli[l1i1I(555, "n&7D")][l1i1I(476, "#F8e")] === "1" ? console["log"](i1iIl1 + l1i1I(167, "ZWrS") + IIIli[l1i1I(184, "UPWv")]["msg"]) : console[l1i1I(397, "8T3X")](i1iIl1 + l1i1I(521, "g4He")) : II11I[l1i1I(161, "UMbf")](II11I[l1i1I(355, "N@iz")], l1i1I(335, "(Mbl")) ? (illlIi["log"](I1lIii + l1i1I(319, "kMCw")), IiI1I = true) : (msg = common["getErrorMsg"](IIIli), ["\u706B\u7206"][l1i1I(205, "Ykc)")](l1llil => msg["includes"](l1llil)) ? (console["log"](i1iIl1 + l1i1I(546, "7lHq")), lIIiII = true) : console[l1i1I(352, "#F8e")](i1iIl1 + l1i1I(530, "@S%E") + msg)) : (msg = common[l1i1I(351, "d8&P")](IIIli), ["\u706B\u7206"][l1i1I(539, "f(Uw")](IIIlIi => msg["includes"](IIIlIi)) ? (console[l1i1I(406, "6daN")](i1iIl1 + l1i1I(497, "k9Ph")), lIIiII = true) : console[l1i1I(228, "twsk")](i1iIl1 + l1i1I(290, "xVrB") + msg));
          break;
        case II11I[l1i1I(374, "hVy1")]:
          IIIli[l1i1I(455, "R5wa")] === "0" ? l1i1I(182, "dSkw") === II11I[l1i1I(148, "JXXl")] ? IIIli["result"] ? ["\u706B\u7206"]["some"](llIl1I => IIIli["result"][l1i1I(164, "n&7D")][l1i1I(594, "t7&X")](llIl1I)) ? II11I[l1i1I(274, "@S%E")](II11I[l1i1I(498, "hVy1")], l1i1I(328, "c%je")) ? (console[l1i1I(367, "t7&X")](i1iIl1 + l1i1I(567, "7s^%")), lIIiII = true) : lI1IiI[l1i1I(340, "k9Ph")] = i1lI : console["log"](i1iIl1 + "\u5206\u4EAB\u6210\u529F\uFF1A" + IIIli[l1i1I(180, "N@iz")][l1i1I(535, "24e*")]) : (msg = common[l1i1I(409, "@S%E")](IIIli), console["log"](i1iIl1 + l1i1I(245, "57FX") + msg)) : IiiIll = IIlii[l1i1I(399, "UPWv")] : (msg = common["getErrorMsg"](IIIli), console[l1i1I(286, "(Mbl")](i1iIl1 + "\u5206\u4EAB\u5931\u8D25\uFF1A" + msg));
          break;
        case l1i1I(331, "L2kF"):
          if (IIIli["code"] === "0") II11I[l1i1I(189, "wWHL")] !== II11I[l1i1I(581, "xVrB")] ? IIIli[l1i1I(299, "qrJB")] ? ["\u706B\u7206"]["some"](IIIlIl => IIIli[l1i1I(285, "(]B@")][l1i1I(429, "twsk")][l1i1I(370, "n&7D")](IIIlIl)) ? II11I[l1i1I(150, "kMCw")]("bETTO", II11I[l1i1I(440, "]O#u")]) ? (IillIi[l1i1I(368, "^1M@")](lii + l1i1I(393, "g4He")), IllI1i = true) : (console["log"](i1iIl1 + l1i1I(549, "7lHq")), lIIiII = true) : II11I[l1i1I(481, "Vb$w")](l1i1I(533, "]O#u"), II11I[l1i1I(278, "7JI5")]) ? console[l1i1I(448, "R5wa")](i1iIl1 + l1i1I(510, "57FX") + IIIli[l1i1I(501, "24e*")]["msg"]) : liIll[l1i1I(433, "Y3XQ")](IilIi1 + l1i1I(211, "wWHL") + iI1liI[l1i1I(555, "n&7D")][l1i1I(384, "8T3X")]) : II11I["OHEZL"](l1i1I(156, "qrJB"), l1i1I(444, "6daN")) ? iii1I1 = 1 : (msg = common["getErrorMsg"](IIIli), console[l1i1I(474, "7JI5")](i1iIl1 + l1i1I(514, "sUJW") + msg)) : (IIllI = lliilI[l1i1I(323, "L2kF")](lili1), ll1l1[l1i1I(448, "R5wa")](IllIIi + l1i1I(160, "7lHq") + IllIIl));else {
            if (l1i1I(400, "wToH") !== "wUpEU") try {
              const iIi1l = lI1Iii(i1li);
              iIi1l >= 0 && (IliI11[l1i1I(387, "d8&P")] = iIi1l);
            } catch {
              i1l1lI[l1i1I(472, "]O#u")](II11I[l1i1I(469, "gdK*")]);
            } else msg = common[l1i1I(569, "57FX")](IIIli), console[l1i1I(398, "g4He")](i1iIl1 + l1i1I(346, "E24g") + msg);
          }
          break;
        case "signInWithPrize":
          if (II11I["yWfrZ"](IIIli[l1i1I(518, "twsk")], "0")) {
            if (II11I[l1i1I(585, "sUJW")](II11I[l1i1I(333, "hDyf")], II11I[l1i1I(294, "R5wa")])) iIiII[l1i1I(586, "c%je")](iil1lI + l1i1I(204, "^1M@") + iiiliI["result"]["signInText"]);else {
              if (IIIli[l1i1I(320, "g4He")] && IIIli[l1i1I(547, "luiB")]["isFans"] === 1) {
                let l1lliI = IIIli[l1i1I(250, "L2kF")][l1i1I(386, "UMbf")];
                l1lliI[l1i1I(214, "c%je")]("\u606D\u559C") ? (console[l1i1I(334, "wWHL")](i1iIl1 + l1i1I(441, "g4He") + IIIli[l1i1I(276, "JXXl")][l1i1I(378, "k9Ph")]), i1lli1[l1i1I(534, "c%je")]("" + IIIli[l1i1I(377, "7JI5")]["signInText"])) : console["log"](i1iIl1 + l1i1I(419, "(Mbl") + IIIli[l1i1I(255, "5ZkG")]["signInText"]);
              } else II11I[l1i1I(431, "7s^%")](II11I[l1i1I(503, "xVrB")], II11I[l1i1I(430, "sUJW")]) ? console[l1i1I(472, "]O#u")](i1iIl1 + l1i1I(313, "k9Ph") + IIIli[l1i1I(285, "(]B@")][l1i1I(353, "24e*")]) : IliI1i[l1i1I(197, "d8&P")]["status"] === "1" ? ll1il["log"](IiiIiI + l1i1I(491, "kMCw") + lilii[l1i1I(159, "t7&X")][l1i1I(453, "kMCw")]) : l1iiI[l1i1I(220, "gdK*")](ll1li + l1i1I(521, "g4He"));
            }
          } else msg = common[l1i1I(545, "]O#u")](IIIli), console[l1i1I(352, "#F8e")](i1iIl1 + l1i1I(485, "g4He") + msg), [II11I[l1i1I(302, "UMbf")]][l1i1I(247, "L2kF")](IIIlII => msg[l1i1I(511, "7lHq")](IIIlII)) && (II11I["SmHyG"] === "ODhYj" ? ["\u706B\u7206"][l1i1I(229, "7lHq")](ili1Il => i11I1I[l1i1I(285, "(]B@")]["msg"][l1i1I(584, "R5wa")](ili1Il)) ? (l1il1i[l1i1I(474, "7JI5")](ll1 + l1i1I(306, "sUJW")), iI1llI = true) : llliii[l1i1I(524, "L2kF")](IllI11 + "\u5206\u4EAB\u6210\u529F\uFF1A" + l1llIi[l1i1I(596, "twsk")][l1i1I(478, "7JI5")]) : lIIiII = true);
          break;
        case II11I[l1i1I(525, "(Mbl")]:
          if (IIIli[l1i1I(415, "4Y^O")] === "0") {} else msg = common["getErrorMsg"](IIIli), console[l1i1I(240, "kMCw")](i1iIl1 + l1i1I(416, "@S%E") + msg);
          break;
      } else II1Il = lilIlI;
    } catch (Iilll1) {
      console[l1i1I(220, "gdK*")](l1i1I(458, "R5wa") + Iiil + l1i1I(438, "JXXl") + (Iilll1[l1i1I(417, "n&7D")] || Iilll1));
    }
  }
  async function liI1l1(ll11I) {
    const l1llll = iI1lII;
    if ($["runEnd"]) return;
    let iIi1I = "",
      liIIl = null,
      IlI1lI = null,
      liIIi = null,
      IilllI = l1llll(470, "]O#u");
    switch (ll11I) {
      case l1llll(151, "kMCw"):
        iIi1I = l1llll(252, "Ykc)"), IlI1lI = {
          "beginTime": "",
          "applicationId": "11"
        }, liIIi = {
          "functionId": ll11I
        }, liIIl = common["queryStringToObject"](await common[l1llll(181, "ZWrS")](ll11I, IlI1lI, randomApi));
        break;
      case l1llll(295, "kMCw"):
        iIi1I = "https://api.m.jd.com/client.action", IlI1lI = {
          "floorId": II11I["fRwzA"]
        }, liIIi = {
          "functionId": ll11I
        }, liIIl = common[l1llll(169, "qrJB")](await common[l1llll(175, "7s^%")](ll11I, IlI1lI, randomApi));
        break;
      case II11I[l1llll(201, "Vb$w")]:
        iIi1I = II11I[l1llll(593, "Vb$w")], IlI1lI = {
          "timestamp": iI1IiI,
          "taskId": ll1I1[l1llll(215, "UMbf")],
          "type": ll1I1[l1llll(261, "sUJW")],
          "token": llIlI1,
          "floorId": II11I["fRwzA"],
          "skuId": i1iIll[l1llll(224, "MDtz")]()
        }, liIIi = {
          "functionId": ll11I
        }, liIIl = common[l1llll(231, "t7&X")](await common[l1llll(305, "MDtz")](ll11I, IlI1lI, randomApi));
        break;
      case II11I[l1llll(551, "kMCw")]:
        iIi1I = II11I["CPbfj"], IlI1lI = {
          "timestamp": iI1IiI,
          "taskId": ll1I1[l1llll(341, "5ZkG")],
          "type": ll1I1["type"],
          "token": llIlI1,
          "floorId": l1llll(292, "I[)B")
        }, liIIi = {
          "functionId": II11I["iQvwF"]
        }, liIIl = common[l1llll(556, "#F8e")](await common["randomSign"](l1llll(283, "7s^%"), IlI1lI, randomApi));
        break;
      case II11I["NUKYt"]:
        iIi1I = l1llll(493, "JXXl"), IlI1lI = {
          "floatId": IIlI1,
          "timestamp": Ii1ili
        }, liIIi = {
          "functionId": ll11I
        }, liIIl = common[l1llll(345, "N@iz")](await common[l1llll(523, "R5wa")](ll11I, IlI1lI, randomApi));
        break;
      case II11I["lpSdL"]:
        iIi1I = "https://api.m.jd.com/client.action", IlI1lI = {
          "floatId": IIlI1,
          "timestamp": iI1Ii1
        }, liIIi = {
          "functionId": ll11I
        }, liIIl = common[l1llll(324, "JXXl")](await common[l1llll(508, "24e*")](ll11I, IlI1lI, randomApi));
        break;
      case l1llll(218, "@S%E"):
        iIi1I = l1llll(424, "kMCw"), IlI1lI = {
          "floorId": l1llll(266, "8($^"),
          "timestamp": Ii1ill
        }, liIIi = {
          "functionId": ll11I
        }, liIIl = common[l1llll(324, "JXXl")](await common[l1llll(242, "d8&P")](ll11I, IlI1lI, randomApi));
        break;
      case "userFollow":
        iIi1I = II11I[l1llll(260, "f(Uw")], IlI1lI = {
          "businessId": "1",
          "type": "1",
          "themeId": l1llll(403, "@S%E"),
          "uuid": ""
        }, liIIi = {
          "functionId": ll11I
        }, liIIl = common[l1llll(284, "wWHL")](await common["randomSign"](ll11I, IlI1lI, randomApi));
        break;
      default:
        console[l1llll(368, "^1M@")](l1llll(185, "Vb$w") + ll11I);
        return;
    }
    if (II11I[l1llll(179, "ZWrS")](Object[l1llll(515, "6daN")](liIIl)[l1llll(343, "d8&P")], 0)) {
      if (II11I["WNIDM"] === II11I["GYXdg"]) lI1llI[l1llll(178, "qrJB")](illIil + l1llll(246, "xVrB") + Ill1I[l1llll(330, "^1M@")][l1llll(327, "luiB")]);else {
        console[l1llll(196, "d8&P")](l1llll(559, "t7&X"));
        return;
      }
    }
    const iI1lIi = {};
    liIIl && (II11I[l1llll(303, "g4He")](II11I[l1llll(271, "24e*")], II11I["VJtPh"]) ? Object[l1llll(207, "(]B@")](liIIl, iI1lIi) : (lilIl1[l1llll(425, "xVrB")](i1l1ii["name"], II11I[l1llll(418, "k9Ph")]), i1l1["exit"](1)));
    liIIi && (II11I[l1llll(391, "d8&P")] !== "VeYeh" ? Object[l1llll(457, "Vb$w")](liIIi, iI1lIi) : (li1I1 = i1ilil["filter"]((liIlil, llii1i) => !iIIl1l[l1llll(435, "d8&P")][l1llll(584, "R5wa")](llii1i + 1)), i1ill1[l1llll(348, "L2kF")] = []));
    const l1lllI = {
      "url": iIi1I,
      "method": IilllI,
      "headers": {
        "Host": II11I[l1llll(466, "@S%E")],
        "Accept": II11I[l1llll(157, "JXXl")],
        "Cookie": llIlIi,
        "User-Agent": IIlII,
        "Accept-Language": "zh-Hans-CN;q=1",
        "Accept-Encoding": "gzip, deflate, br"
      },
      "params": liIIi,
      "data": liIIl,
      "timeout": 30000
    };
    II11I["VVhDw"](IilllI, l1llll(279, "hDyf")) && (delete l1lllI[l1llll(199, "7JI5")], delete l1lllI["headers"][II11I[l1llll(173, "c%je")]]);
    const llliIi = 1;
    let i1lIli = 0,
      i1lIll = null;
    while (i1lIli < llliIi) {
      i1lIli > 0 && (await $[l1llll(291, "Y3XQ")](1000));
      const ll11il = await common[l1llll(495, "6daN")](l1lllI);
      if (!ll11il[l1llll(542, "@S%E")]) {
        if (l1llll(452, "6daN") !== l1llll(512, "8T3X")) iiill1 = lIli1i["getErrorMsg"](IIIII1), I1lIlI[l1llll(516, "n&7D")](ii1ill + "\u5173\u6CE8\u5931\u8D25\uFF1A" + II1iI);else {
          i1lIll = "\uD83D\uDEAB " + ll11I + " \u8BF7\u6C42\u5931\u8D25 \u279C " + ll11il[l1llll(380, "hDyf")], i1lIli++;
          continue;
        }
      }
      if (!ll11il["data"]) {
        i1lIll = "\uD83D\uDEAB " + ll11I + l1llll(307, "57FX"), i1lIli++;
        continue;
      }
      await i1lliI(ll11I, ll11il[l1llll(583, "sUJW")]);
      break;
    }
    i1lIli >= llliIi && console[l1llll(520, "4Y^O")](i1lIll);
  }
}
function getRandomInt(iiIiII, Iili) {
  const I1I1ll = III111,
    iIi11 = {
      "VaIin": function (Iil1, ll11lI) {
        return Iil1 + ll11lI;
      },
      "ZfUnx": function (llliI1, liIII) {
        return llliI1 + liIII;
      }
    };
  return iIi11[I1I1ll(506, "(]B@")](Math[I1I1ll(541, "JXXl")](Math[I1I1ll(177, "I[)B")]() * iIi11[I1I1ll(206, "kMCw")](Iili - iiIiII, 1)), iiIiII);
}
var version_ = "jsjiami.com.v7";
// prettier-ignore
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
      return "POST" === e && (s = this.post), new Promise((e, i) => {
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
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = false, this.isNeedRewrite = false, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
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
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
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
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
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
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
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
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
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
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
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
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
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
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
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
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
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
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}