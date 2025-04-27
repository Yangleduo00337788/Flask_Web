// 产品卡片点击效果
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('shadow-lg');
    });
});

// 控制台欢迎信息
console.log('欢迎来到科技产品商城！');