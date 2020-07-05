import Vue from 'vue'
Vue.filter('nonZero', function (value) {
    if (typeof value === 'number') {
        if (value <= 0) {
            return "--"
        }
        return value;
    }
    return value
})

//* 分钟前 *小时前  昨天 00:00  06-24 2019-03-12 05:33
//时间戳转换到"之前多久"
Vue.filter('t2b', function (value) {

    value = isNaN(value) ? parseInt(value) : value
    let nowTime = new Date();
    let targetTime = new Date(value);

    let timeDiff = (nowTime - value) / 1000;

    function doubleNum(val) {
        return val.toString().padStart(2, "0");
    }

    if (timeDiff < 60) {
        return "刚刚"
    }

    if (timeDiff > 60 && timeDiff < 3600) {
        return Math.floor(timeDiff / 60) + " 分钟前"
    }

    if (timeDiff > 3600 && timeDiff < 86400) {
        return Math.floor(timeDiff / (60 * 60)) + " 小时前"
    }

    if (timeDiff > 86400 && timeDiff < 172800) {
        return "昨天 " + doubleNum(targetTime.getHours()) + ":" + doubleNum(targetTime.getMinutes());
    }

    if (timeDiff > 172800 && nowTime.getFullYear() == targetTime.getFullYear()) {
        return doubleNum(targetTime.getMonth()) + "-" + doubleNum(targetTime.getDay())
    } else {
        return targetTime.getFullYear() + "-" + doubleNum(targetTime.getMonth() + 1) + "-" +
            doubleNum(targetTime.getDay()) + " " + doubleNum(targetTime.getHours()) + ":" + doubleNum(targetTime.getMinutes());
    }


})
export default {}