import { THEME_NAME, THEME_TOGGLE_BUT_ID } from "./consts";

const getTheme = () => (localStorage.getItem(THEME_NAME) == "dark" ? "dark" : "light");

const setTheme = () => {
    const toggleButton = document.getElementById(THEME_TOGGLE_BUT_ID);
    const htmlElement = document.documentElement;
    // 切换主题
    // 监听按钮点击事件
    toggleButton?.addEventListener("click", () => {
        htmlElement.classList.toggle("dark");
        const theme = htmlElement.classList.contains("dark") ? "dark" : "";
        localStorage.setItem(THEME_NAME, theme);
    });
}

const sendMessage = (message) => {
    const iframe = document.querySelector("iframe.giscus-frame") as HTMLIFrameElement;
    console.log(message);
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage({ giscus: message }, "https://giscus.app");
    }
};
const giscusScript = (optionConfig) => {
    const script = document.createElement("script");
    for (let key in optionConfig) {
        if (optionConfig.hasOwnProperty(key)) {
            script.setAttribute(key, optionConfig[key]);
        }
    }
    script.async = true;
    script.setAttribute("data-theme", getTheme());
    const toggleButton = document.getElementById(THEME_TOGGLE_BUT_ID);
    // 切换主题
    // 监听按钮点击事件
    toggleButton?.addEventListener("click", () =>
        sendMessage({ setConfig: { theme: getTheme() } })
    );
    document.head.appendChild(script);
};

export { giscusScript, getTheme, setTheme }