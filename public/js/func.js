// 切换固定导航栏和头像显示状态的函数
function toggleNavbarAndAvatar(headerImgBottom) {
    const navbar = document.querySelector("#nav");
    const avatar = document.querySelector("#avatar");
    const togglebar = document.querySelector("#togglebar");
    if (headerImgBottom <= -128) {
        navbar.classList.add(...["fixed", "container", "top-0", "shadow-md"]);
        avatar.classList.remove("hidden"); // 当固定时显示
        avatar.classList.add(...["flex", "justify-center", "items-center"]);
        togglebar.classList.remove("hidden"); // 当固定时显示
        togglebar.classList.add(...["flex", "justify-center", "items-center"]);
    } else {
        navbar.classList.remove(...["fixed", "container", "top-0", "shadow-md"]);
        avatar.classList.add("hidden"); // 当不固定时隐藏
        avatar.classList.remove(...["flex", "justify-center", "items-center",]);
        togglebar.classList.add("hidden"); // 当不固定时隐藏
        togglebar.classList.remove(...["flex", "justify-center", "items-center",]);
    }
}

// 切换主题的函数
function toggleTheme() {
    const htmlElement = document.querySelector('html');
    const toggleButton = document.querySelector('.theme-toggle');

    // 检查本地存储中是否保存了主题状态
    const currentTheme = localStorage.getItem('theme');

    // 如果本地存储中有保存的主题状态，则根据其设置页面主题
    if (currentTheme) {
        htmlElement.classList.add(currentTheme);
    }

    // 监听按钮点击事件
    toggleButton.addEventListener('click', () => {
        // 切换暗色主题类
        htmlElement.classList.toggle('dark');

        // 更新本地存储中的主题状态
        const theme = htmlElement.classList.contains('dark') ? 'dark' : '';
        localStorage.setItem('theme', theme);
    });
}

// 添加滚动事件监听
window.addEventListener('scroll', () => {
    const headerImgBottom = document.querySelector("#header-img").getBoundingClientRect().bottom;
    toggleNavbarAndAvatar(headerImgBottom);
});

// 初始化主题切换
toggleTheme();
