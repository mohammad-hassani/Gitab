import { defineConfig } from "vitepress";

export default defineConfig({
    lang: "fa-IR",
    title: "farsiBooks",
    description: "مستندات ترجمه‌های فارسی",
    dir: "rtl",
    themeConfig: {
        logo: "/logo.png",
    },
    sidebar: {
        "/books/csharp-12/": [
            {
                text: "C# 12 in a Nutshell",
                items: [
                    { text: "مقدمه", link: "/books/csharp-12/preface" },
                    { text: "فصل اول", link: "/books/csharp-12/chapter1" },
                ],
            },
        ],
        "/books/clean-code/": [
            {
                text: "Clean Code in C#",
                items: [
                    { text: "مقدمه", link: "/books/clean-code/preface" },
                    { text: "فصل اول", link: "/books/clean-code/chapter1" },
                ],
            },
        ],
    },
    head: [["link", { rel: "stylesheet", href: "/fonts/shabnam.css" }]],
});
