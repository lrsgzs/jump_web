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

var data = GetRequest();
var type = data["type"];
if (type == null) {
    document.getElementById("message").innerHTML = "跳转失败！";
} else if (type == "bv") {
    var id = data["id"];
    if (id == null) {
        document.getElementById("message").innerHTML = "跳转失败！";
    } else {
        location.href = "https://www.bilibili.com/video/" + id;
    }
} else if (type == "xescode") {
    var id = data["id"];
    var code_type = data["code_type"];
    if (id == null || code_type == null) {
        document.getElementById("message").innerHTML = "跳转失败！";
    } else {
        if (code_type == "cpp") {
            location.href = "https://code.xueersi.com/home/project/detail?lang=code&pid=" + id + "&version=cpp&form=cpp&langType=cpp";
        } else if (code_type == "webpy") {
            location.href = "https://code.xueersi.com/home/project/detail?lang=code&pid=" + id + "&version=webpy&form=python&langType=python";
        } else if (code_type == "offpy") {
            location.href = "https://code.xueersi.com/home/project/detail?lang=code&pid=" + id + "&version=offline&form=python&langType=python";
        } else if (code_type == "python") {
            location.href = "https://code.xueersi.com/home/project/detail?lang=code&pid=" + id + "&version=python&form=python&langType=python";
        } else if (code_type == "scratch") {
            location.href = "https://code.xueersi.com/home/project/detail?lang=scratch&pid=" + id + "&version=3.0&langType=scratch";
        } else {
            document.getElementById("message").innerHTML = "跳转失败！";
        }
    }
}
