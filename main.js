// 获取数据函数
function GetRequest() {
    const url = location.search;
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        strs = str.split("&");
        for(let i = 0; i < strs.length; i ++) {
           theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
   return theRequest;
}

// 解码
function getDecode(str){
    return decodeURIComponent(atob(str).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
}

function crash() {
    document.getElementById("message").innerHTML = "跳转失败！";
}

var data = GetRequest();
var type = data["t"];
if (type == null) {
    crash();
} else if (type == "bv") {
    var id = data["i"];
    if (id == null) {
        crash();
    } else {
        location.href = "https://www.bilibili.com/video/BV" + id;
    }
} else if (type == "av") {
    var id = data["i"];
    if (id == null) {
        crash();
    } else {
        location.href = "https://www.bilibili.com/video/AV" + id;
    }
} else if (type == "xcc") {
    var id = data["i"];
    if (id == null) {
        crash();
    } else {
        location.href = "https://code.xueersi.com/home/project/detail?lang=code&pid=" + id + "&version=cpp&form=cpp&langType=cpp";
    }
} else if (type == "xcw") {
    var id = data["i"];
    if (id == null) {
        document.getElementById("message").innerHTML = "跳转失败！";
    } else {
        location.href = "https://code.xueersi.com/home/project/detail?lang=code&pid=" + id + "&version=webpy&form=python&langType=python";
    }
} else if (type == "xco") {
    var id = data["i"];
    if (id == null) {
        crash();
    } else {
        location.href = "https://code.xueersi.com/home/project/detail?lang=code&pid=" + id + "&version=offline&form=python&langType=python";
    }
} else if (type == "xcp") {
    var id = data["i"];
    if (id == null) {
        crash();
    } else {
        location.href = "https://code.xueersi.com/home/project/detail?lang=code&pid=" + id + "&version=python&form=python&langType=python";
    }
} else if (type == "xcs") {
    var id = data["i"];
    if (id == null) {
        crash();
    } else {
        location.href = "https://code.xueersi.com/home/project/detail?lang=scratch&pid=" + id + "&version=3.0&langType=scratch";
    }
} else if (type == "xcsp") {
    var id = data["i"];
    if (id == null) {
        crash();
    } else {
        location.href = "https://code.xueersi.com/space/" + id;
    }
} else if (type == "xcwe") {
    var id = data["i"];
    if (id == null) {
        crash();
    } else {
        location.href = "https://code.xueersi.com/live/creator/1?template_project_id=" + id + "&work_type=xes_class_work";
    }
} else if (type == "xcdn") {
    var id = data["i"];
    if (id == null) {
        crash();
    } else {
        location.href = "https://livefile.xesimg.com/programme/python_assets/" + id;
    }
} else {
    document.getElementById("message").innerHTML = "跳转失败！";
}
