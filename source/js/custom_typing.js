/**
 * 最终版打字机脚本
 * 它会自己加载依赖库，并执行动画
 */

// 这是我们的动画逻辑
function runTypedAnimation() {
  const subtitleElement = document.querySelector('#subtitle');
  if (!subtitleElement) {
    console.error('Custom Typing Script: Element with id #subtitle not found.');
    return;
  }

  // 1. 为了排除所有干扰，我们直接在这里定义要显示的句子
  const myStrings = [
    "Welcome to The Earlgrey Blog.",
    "潜龙勿用，阳在下也--《易经》",
  ];

  // 2. 清空元素，准备开始动画
  subtitleElement.innerText = '';

  // 3. 创建我们自己的打字机实例
  new Typed('#subtitle', {
    strings: myStrings,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
    smartBackspace: true
  });
}

// 这是一个辅助函数，用来加载外部 JS 库
function loadScript(url, callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  
  // 当脚本加载成功后，执行我们的回调函数（也就是动画逻辑）
  script.onload = callback;
  
  script.onerror = function() {
    console.error('Custom Typing Script: Failed to load Typed.js from CDN.');
  };
  
  document.head.appendChild(script);
}

// 当页面主要内容加载完成后，开始执行我们的流程
document.addEventListener('DOMContentLoaded', function() {
  // 先从网上加载 Typed.js 核心库
  // 加载成功后，它会自动调用 runTypedAnimation 这个函数
  loadScript('https://cdn.jsdelivr.net/npm/typed.js@2.0.12', runTypedAnimation);
});