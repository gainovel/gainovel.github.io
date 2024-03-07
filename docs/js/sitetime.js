var now = new Date();
function createtime() {
    // 当前时间
    now.setTime(now.getTime() + 250);
    var grt = new Date("2018/05/27 00:00:00"); //网站诞生时间
    years = (now - grt) / 1000 / 60 / 60 / 24 / 365;
    ynum = Math.floor(years);
    days = (now - grt) / 1000 / 60 / 60 / 24 - (365 * ynum);
    totalDays = (now - grt) / 1000 / 60 / 60 / 24
    dnum = Math.floor(days);
    totalDNum = Math.floor(totalDays);
    hours = (now - grt) / 1000 / 60 / 60 - (24 * totalDNum);
    hnum = Math.floor(hours);
    if (String(hnum).length == 1) {
        hnum = "0" + hnum;
    }
    minutes = (now - grt) / 1000 / 60 - (24 * 60 * totalDNum) - (60 * hnum);
    mnum = Math.floor(minutes);
    if (String(mnum).length == 1) {
        mnum = "0" + mnum;
    }
    seconds = (now - grt) / 1000 - (24 * 60 * 60 * totalDNum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds);
    if (String(snum).length == 1) {
        snum = "0" + snum;
    }
    if (ynum == 0) {
        if (document.getElementById("timeYear") == null) {
            document.getElementById("timeDate").innerHTML = "⏳ 本站已运行 " + dnum + " 天 ";
            document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒"
        } else {
            document.getElementById("timeYear").remove()
            document.getElementById("timeDate").innerHTML = "⏳ 本站已运行 " + dnum + " 天 ";
            document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒"
        }
    } else {
        document.getElementById("timeYear").innerHTML = "⏳ 本站已运行 " + ynum + " 年 ";
        document.getElementById("timeDate").innerHTML = dnum + " 天 ";
        document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒"
    }
}
setInterval("createtime()", 250);