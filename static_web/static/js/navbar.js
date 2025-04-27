// navbar.js
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // 滚动时改变导航栏样式
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // 高亮当前部分
        highlightCurrentSection();
    });

    // 移动端菜单切换
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // 点击导航链接后关闭移动菜单
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // 高亮当前可见部分
    function highlightCurrentSection() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-links a');

        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    }

    // 初始高亮
    highlightCurrentSection();
});
// 导航栏JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // ...原有代码...

    // 移动端下拉菜单功能
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');

        // 桌面端悬停效果
        if (window.innerWidth > 768) {
            dropdown.addEventListener('mouseenter', () => {
                dropdown.classList.add('hover');
            });

            dropdown.addEventListener('mouseleave', () => {
                dropdown.classList.remove('hover');
            });
        }

        // 移动端点击效果
        dropbtn.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');

                // 关闭其他打开的下拉菜单
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            }
        });
    });

    // 点击页面其他位置关闭下拉菜单
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown') && window.innerWidth <= 768) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // 窗口大小改变时重置下拉菜单
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});
// 搜索功能实现
document.addEventListener('DOMContentLoaded', function() {
    // ...原有代码...

    // 搜索功能
    const searchIcon = document.querySelector('.search-icon');
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" class="search-input" placeholder="搜索产品...">
    `;
    document.querySelector('.navbar').appendChild(searchContainer);

    searchIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        searchContainer.classList.toggle('active');

        if (searchContainer.classList.contains('active')) {
            searchContainer.querySelector('.search-input').focus();
        }
    });

    // 点击页面其他位置关闭搜索框
    document.addEventListener('click', function() {
        searchContainer.classList.remove('active');
    });

    // 阻止搜索框内部点击事件冒泡
    searchContainer.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // 购物车数量更新示例
    function updateCartCount(count) {
        document.querySelector('.cart-count').textContent = count;
    }

    // 模拟购物车更新
    // updateCartCount(3); // 实际使用时从购物车数据获取
});
// 导航栏购物车数量更新
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = totalItems;
  });
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
});
