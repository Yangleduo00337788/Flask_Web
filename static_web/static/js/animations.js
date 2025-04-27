// animations.js
document.addEventListener('DOMContentLoaded', function() {
    // 先给body添加类，启用动画
    document.body.classList.add('animations-enabled');

    // 确保所有内容加载完成
    window.addEventListener('load', function() {
        // 图片加载检测
        const images = document.querySelectorAll('img');
        let imagesToLoad = images.length;

        // 如果没有图片，直接初始化
        if(imagesToLoad === 0) {
            initAnimations();
            return;
        }

        // 图片加载回调
        const imageLoaded = () => {
            imagesToLoad--;
            if(imagesToLoad === 0) {
                initAnimations();
            }
        };

        // 设置图片加载监听
        images.forEach(img => {
            if(img.complete) {
                imageLoaded();
            } else {
                img.addEventListener('load', imageLoaded);
                img.addEventListener('error', imageLoaded);
            }
        });
    });

    function initAnimations() {
        const productCards = document.querySelectorAll('.product-card');

        // 初始隐藏产品卡片（通过CSS类控制）
        productCards.forEach(card => {
            card.style.opacity = '0';
            card.style.visibility = 'hidden';
        });

        // 立即显示一帧确保不会闪烁
        requestAnimationFrame(() => {
            // 滚动动画函数
            function animateOnScroll() {
                productCards.forEach((card, index) => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.2; // 调整触发点

                    if(cardPosition < screenPosition) {
                        card.style.visibility = 'visible';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        card.style.transition = `all 0.5s ease ${index * 0.2}s`;
                    }
                });
            }

            // 初始检查
            animateOnScroll();

            // 滚动监听
            window.addEventListener('scroll', animateOnScroll);
        });

        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
});