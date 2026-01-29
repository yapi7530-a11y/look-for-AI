// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 1. 初始化AOS动画
    AOS.init({
        duration: 1000, // 动画持续时间
        easing: 'ease-in-out', // 动画缓动效果
        once: true, // 只执行一次动画
        mirror: false // 滚动回滚时不重复执行
    });

    // 2. 初始化Swiper轮播
    const swiper = new Swiper('.mainSwiper', {
        loop: true, // 循环播放
        pagination: {
            el: '.swiper-pagination', // 分页器元素
            clickable: true, // 分页器可点击
        },
        autoplay: {
            delay: 5000, // 自动播放间隔
            disableOnInteraction: false // 交互后不停止自动播放
        },
        effect: 'fade', // 渐变切换效果
        fadeEffect: {
            crossFade: true
        }
    });

    // 3. 实现视差滚动效果
    const parallaxContainer = document.getElementById('parallaxContainer');
    const layers = parallaxContainer.querySelectorAll('.layer');

    // 监听滚动事件
    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;
        
        // 遍历所有视差层，根据depth计算偏移
        layers.forEach(layer => {
            const depth = parseFloat(layer.getAttribute('data-depth'));
            const movement = scrollY * depth; // 偏移量 = 滚动距离 * 深度值
            layer.style.transform = `translateY(${movement}px)`;
        });
    });

    // 4. 导航栏滚动效果
    const nav = document.querySelector('.custom-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 25, 47, 0.95)';
            nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
        } else {
            nav.style.background = 'rgba(10, 25, 47, 0.8)';
            nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        }
    });
});