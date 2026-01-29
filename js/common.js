document.addEventListener('DOMContentLoaded', function() {
    
    AOS.init({ duration: 1000, once: true });

    // 1. Swiper 设置
    new Swiper('.mainSwiper', {
        loop: true,
        parallax: true,
        speed: 1200,
        autoplay: { delay: 6000 },
        pagination: { el: '.swiper-pagination', clickable: true }
    });

    // 2. 复合视差引擎
    const layers = document.querySelectorAll('.layer');
    const container = document.getElementById('parallaxContainer');

    // A. 鼠标跟随逻辑
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5);
        const y = (e.clientY / window.innerHeight - 0.5);

        layers.forEach(layer => {
            const depth = layer.getAttribute('data-depth');
            const moveX = x * (depth * 100);
            const moveY = y * (depth * 100);
            // 保持原本的滚动位移，叠加鼠标位移
            layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        });
    });

    // B. 滚动视差增强
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        // 导航栏联动
        const nav = document.querySelector('.custom-nav');
        if (scrolled > 80) {
            nav.style.background = "rgba(255,255,255,0.95)";
            nav.style.padding = "10px 0";
        } else {
            nav.style.background = "rgba(255,255,255,0.7)";
            nav.style.padding = "20px 0";
        }
    });
});