import { config, THEME_NAME, THEME_TOGGLE_BUT_ID } from "./consts";

const getTheme = () => (localStorage.getItem(THEME_NAME) == "dark" ? "dark" : "light");

const setTheme = () => {
    const toggleButton = document.getElementById(THEME_TOGGLE_BUT_ID);
    const htmlElement = document.documentElement;
    // 切换主题
    // 监听按钮点击事件
    toggleButton?.addEventListener("click", () => {
        htmlElement.classList.toggle("dark");
        htmlElement.classList.toggle("light");
        const theme = htmlElement.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem(THEME_NAME, theme);
        // 若使用giscuc 同步切换主题
        if (config.giscus.enable) {
            sendMessage({ setConfig: { theme: theme } });
        }
    });
};

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
    document.head.appendChild(script);
};


// 定义一个搜索函数
function SimpleSearch(options) {
    const defaults = {
        searchInput: null,
        resultsContainer: null,
        json: null,
        searchResultTemplate: "",
        noResultsText: `没有找到匹配的文章`,
        limit: 10,
        fuzzy: false,
    };
    // 合并用户提供的选项和默认选项
    const settings = Object.assign({}, defaults, options);
    const regexPost = (data, query) => {
        const regex = new RegExp(query.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "gi");
        const results: any[] = [];
        data.forEach((post) => {
            const { data } = post;
            if (
                (settings.fuzzy &&
                    (data.title.match(regex) || data.tags.join(",").match(regex) || data.pubDate.match(regex))) ||
                (!settings.fuzzy &&
                    (data.title.toLowerCase().includes(query.toLowerCase()) ||
                        data.tags.join(",").toLowerCase().includes(query.toLowerCase()) ||
                        data.pubDate.toLowerCase().includes(query.toLowerCase())))
            ) {
                results.push(post);
            }
        });
        renderResults(results.slice(0, settings.limit));
    };

    // 执行搜索的函数
    async function search(query) {
        const results: any[] = [];
        if (query === "") {
            settings.resultsContainer.innerHTML = "";
            return;
        }

        // 尝试从 localStorage 中获取缓存的 JSON 数据
        const cachedData = sessionStorage.getItem("searchCache");
        if (cachedData) {
            // 解析缓存数据
            const parsedData = JSON.parse(cachedData);
            // 检查数据是否已过期
            const now = new Date().getTime();
            const expirationTime = parsedData.expirationTime || now;
            if (now < expirationTime) {
                results.push(...parsedData.data);
            }
        }
        if (results.length > 0) {
            regexPost(results, query);
        } else {
            const content = await fetch(settings.json);
            const { posts } = await content.json();
            // 设置数据的有效期
            const expirationTime = new Date(Date.now() + 1000 * 60 * 60 * 24).getTime(); // 设置有效期为 24 小时
            // 更新缓存数据并存储
            const updatedData = {
                data: posts,
                expirationTime: expirationTime,
            };
            sessionStorage.setItem("searchCache", JSON.stringify(updatedData));
            regexPost(posts, query);
        }
    }

    // 渲染搜索结果的函数
    function renderResults(results) {
        const container = settings.resultsContainer;
        container.innerHTML = "";

        if (results.length === 0) {
            container.innerHTML = `${settings.noResultsText}`;
        } else {
            results.forEach((result) => {
                let tagHTML = "";
                //   // 遍历标签数组，为每个标签生成 HTML 元素
                const { slug, data } = result;
                const { title, pubDate, tags } = data;
                tags.forEach((tag) => {
                    tagHTML += `<a href="/tags/${tag}" class="tag">#${tag}</a>`;
                });
                container.innerHTML += `<li class="flex flex-col flex-auto justify-between p-5 space-y-2">
                                        <a class="inline-block" href="/blog/${slug}/" title="${title}">
                                            <h2>${title}</h2>
                                        </a>
                                        <div class="flex justify-between items-center w-full ">
                                            <div class="flex justify-around space-x-2">${tagHTML}</div>
                                            <time>${pubDate}</time>
                                        </div>
                                    </li>
                                    `;
            });
        }
    }

    // 监听整个文档的点击事件
    document.addEventListener("click", function (event) {
        const inputElement = settings.searchInput; // 替换成你的输入框的实际 ID
        const resultsContainer = settings.resultsContainer; // 替换成你搜索结果容器的实际 ID

        // 检查点击事件的目标是否是输入框以外的元素，并且搜索结果容器是可见的
        if (
            event.target !== inputElement &&
            !inputElement.contains(event.target) &&
            event.target !== resultsContainer &&
            !resultsContainer.contains(event.target)
        ) {
            // 销毁搜索结果
            destroyResults();
        }
    });

    // 销毁搜索结果的函数
    function destroyResults() {
        const resultsContainer = settings.resultsContainer; // 替换成你搜索结果容器的实际 ID
        resultsContainer.innerHTML = ""; // 清空搜索结果容器的内容，或者隐藏搜索结果容器
    }

    function debounce(func, delay) {
        let debounceTimer;
        return function (...args) {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(this, args), delay);
        };
    }

    const handleInputDebounced = debounce(search, 300);

    // 初始化搜索功能
    function init() {
        const input = settings.searchInput;
        if (!input) return;

        input.addEventListener("input", function (event) {
            handleInputDebounced(event.target.value);
        });
    }

    // 返回公共方法
    return {
        init: init,
        search: search,
    };
}

export { giscusScript, getTheme, setTheme, SimpleSearch };
