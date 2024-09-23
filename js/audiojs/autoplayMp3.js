
window.addEventListener('DOMContentLoaded', function() {
    var backgroundMusic = document.getElementById('backgroundMusic');
    if (backgroundMusic.paused) {
        var promise = backgroundMusic.play();
        if (promise !== undefined) {
            promise.then(_ => {
                // Autoplay started!
            }).catch(error => {
                // Uncaught (in promise) NotAllowedError: play() failed because the user didn't interact with the document first.
                // Autoplay was prevented.
                // Show a "Play" button so that user can start playback.
            });
        }
    }
});

window.onload = function() {
    document.addEventListener("DOMContentLoaded", function() {
        var backgroundMusic = document.getElementById('backgroundMusic');
        if (backgroundMusic.paused) {
            var promise = backgroundMusic.play();
            if (promise !== undefined) {
                promise.then(_ => {
                    // Autoplay started!
                }).catch(error => {
                    // Uncaught (in promise) NotAllowedError: play() failed because the user didn't interact with the document first.
                    // Autoplay was prevented.
                    // Show a "Play" button so that user can start playback.
                });
            }
        }
    }, false);
};

// 在微信沙箱环境中播放音乐，需要加入WeixinJSBridgeReady的事件中
window.onload = function () {
    document.addEventListener("WeixinJSBridgeReady", function() {
        var backgroundMusic = document.getElementById('backgroundMusic');
        if (backgroundMusic.paused) {
            var promise = backgroundMusic.play();
            if (promise !== undefined) {
                promise.then(_ => {
                    // Autoplay started!
                }).catch(error => {
                    // Uncaught (in promise) NotAllowedError: play() failed because the user didn't interact with the document first.
                    // Autoplay was prevented.
                    // Show a "Play" button so that user can start playback.
                });
            }
        }
    }, false);
};
