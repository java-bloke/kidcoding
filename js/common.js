
// 判断是否为移动小屏设备
function isMobile() {
    // 获取屏幕宽度
    var screenWidth = getScreenWidth();
    console.log('The isMobile() screenWidth='+ screenWidth);
    // 判断是否是手机
    return screenWidth < 700;
}

function getScreenWidth() {
    console.log('InnerWidth='+ window.innerWidth);
    console.log('ScreenWidth='+ window.screen.width);
    console.log('body.ClientWidth='+ document.body.clientWidth);
    console.log('doc.ClientWidth='+ document.documentElement.clientWidth);
    return document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth || window.screen.width;
}

/*
关于clientHeight、offsetHeight、scrollHeight

网页正文部分上： window.screenTop
网页正文部分左： window.screenLeft
屏幕分辨率的宽、返回当前屏幕宽度(分辨率值)： window.screen.width
屏幕分辨率的高、返回当前屏幕高度(分辨率值)： window.screen.height
屏幕可用工作区宽度、返回当前屏幕宽度(空白空间)：window.screen.availWidth
屏幕可用工作区高度、返回当前屏幕高度(空白空间) ：window.screen.availHeight
返回当前网页宽度：window.document.body.offsetWidth;
返回当前网页高度：window.document.body.offsetHeight;

网页可见区域宽： document.body.clientWidth
网页可见区域高： document.body.clientHeight
网页正文全文宽： document.body.scrollWidth
网页正文全文高： document.body.scrollHeight
网页被卷去的高： document.body.scrollTop
网页被卷去的左： document.body.scrollLeft
网页可见区域宽(包括边线的宽)：document.body.offsetWidth
网页可见区域高(包括边线的宽)：document.body.offsetHeight
*/

//文档的总高度
function getScrollHeight() {
    return scrollHeight = document.documentElement.scrollHeight;
}

//滚动条在Y轴上的滚动距离
function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}

//浏览器视口的高度
function getWindowHeight() {
    return document.compatMode == "CSS1Compat" ? windowHeight = document.documentElement.clientHeight : windowHeight = document.body.clientHeight;
}

// 判断是否滚动到底部
function isScrollBottom(relative) {
    var sum = getScrollTop() + getWindowHeight();
    var bottomHeight = getScrollHeight() - relative;
//    console.log(getScrollTop(), getWindowHeight(), sum, getScrollHeight(), relative, bottomHeight);
    return sum >= bottomHeight;
}

/*
// 在网页的滚动事件中，使用JavaScript来监听滚动事件，并根据滚动的位置动态调整div元素的位置。
window.addEventListener('scroll', function() {
    if (getScrollTop() % 1500 == 0) {
        var fixedDiv = document.getElementById('chapter-sidebar');
        fixedDiv.style.top = getScrollTop() + 'px';
    }
});
*/
