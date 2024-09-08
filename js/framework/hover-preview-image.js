/* hover-preview-image */
//鼠标hover【onmouseover, onmousemove】显示图片
function displayImg(divId, imgId, imgSrc) {
   document.getElementById(imgId).src = imgSrc;
   var imgDiv = document.getElementById(divId);
   var e = event || window.event;
   var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
   var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
   var x = e.pageX || e.clientX + scrollX;
   var y = e.pageY || e.clientY + scrollY;
   imgDiv.style.left = x + 10 + "px";
   imgDiv.style.top = y + 10 + "px";
   imgDiv.style.display = "block";
}

//鼠标out【onmouseout】图片消失
function vanishImg(divId){
   //给firefox定义contains()方法，ie下不起作用
   if(typeof(HTMLElement)!="undefined"){
      HTMLElement.prototype.contains=function(obj){
      //通过循环对比来判断是不是obj的父元素
      while(obj!=null&&typeof(obj.tagName)!="undefind"){
         if(obj==this) return true;
            obj=obj.parentNode;
         }
         return false;
      };
   }

   var theEvent = arguments.callee.caller.arguments[0] || window.event;
   if (theEvent){
      var browser=navigator.userAgent; //取得浏览器属性
      if (browser.indexOf("Firefox")>0){ //如果是Firefox
         if (document.getElementById(divId).contains(theEvent.relatedTarget)) { //如果是子元素
            return; //结束函式
         }
      }
      //if (browser.indexOf("MSIE")>0){ //如果是IE
         //if (document.getElementById(divId).contains(event.toElement)) { //如果是子元素
            //return; //结束函式
         //}
     //}
   }
   /*要执行的操作*/
   var imageDiv = document.getElementById(divId);
   imageDiv.style.display = "none";
}


async function copyMobileToClipboard(mobile) {
   copyToClipboard(mobile, "复制成功", "老师的手机号【"+ mobile +"】已复制，快去联系TA吧！~");
}

/*
复制文本到剪贴板的函数
使用方法示例：
复制电话号码的文本变量: const yzcMobileToCopy = '15216602141';
调用函数: copyToClipboard(yzcMobileToCopy);
*/
async function copyToClipboard(text, dialogTitle, dialogMsg) {
   try {
      // 使用 navigator.clipboard.writeText 复制文本
      await navigator.clipboard.writeText(text);
      console.log('文本已复制到剪贴板: '+ text);
      if (isNotEmptyString(dialogMsg)) {
         //alert(dialogMsg);
         showDialog(dialogTitle, dialogMsg);
      }
   } catch (err) {
      // 如果复制失败（例如，用户拒绝了权限），则显示错误消息
      console.error('无法复制文本: ', err);
   }
}

/*
检查是否为空字符串或者null/undefined。示例如下：
console.log(isEmptyString("")); // true
console.log(isEmptyString(" ")); // false
console.log(isEmptyString("Hello")); // false
console.log(isEmptyString(null)); // true
console.log(isEmptyString(undefined)); // true
*/
function isEmptyString(str) {
   if (!str || str.length === 0) {
      return true;
   }
   return false;
}

function isNotEmptyString(str) {
   return !isEmptyString(str);
}

/* 自定义Alert弹框 */
async function showDialog(dialogTitle, dialogMsg) {
    var customDialogDiv = document.createElement("div");
  //customDialogDiv.className = "custom-dialog";
    customDialogDiv.id = "dialog";
    customDialogDiv.innerHTML = "<div id='dialog-content'>"
        + "<h2>"+ dialogTitle +"</h2>"
        + "<p>"+ dialogMsg +"</p>"
        + "<button onclick='closeDialog()'>确定</button>";

    document.body.appendChild(customDialogDiv);
    //设置弹窗div显视属性为flex弹性
    //document.getElementById("dialog").style.display = "flex";
}

function closeDialog() {
  //var customAlert = document.querySelector(".custom-dialog");
    var customAlert = document.getElementById("dialog");
    if (customAlert) {
        document.body.removeChild(customAlert);
    }
    //设置弹窗div显视属性隐藏
    //document.getElementById("dialog").style.display = "none";
}

