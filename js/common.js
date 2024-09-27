// 判断是否为移动小屏设备
function isMobile() {
    // 获取屏幕宽度
    var screenWidth = window.screen.width || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    console.log('The isMobile() screenWidth='+ screenWidth);
    // 判断是否是手机
    return screenWidth < 500;
}

