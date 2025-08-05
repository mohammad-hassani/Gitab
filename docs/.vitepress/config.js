import { defineConfig } from "vitepress";

export default defineConfig({
    lang: "fa-IR",
    title: "پارس کتاب",
    description: "مستندات ترجمه‌های فارسی",
    dir: "rtl",
    themeConfig: {
        logo: "/logo.png",
    },
    head: [["link", { rel: "stylesheet", href: "/fonts/shabnam.css" }]],
});
