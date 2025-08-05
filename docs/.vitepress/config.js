import { defineConfig } from "vitepress";

export default defineConfig({
    lang: "fa-IR",
    title: "کتابخانه من",
    description: "مستندات ترجمه‌های فارسی",
    dir: "rtl",
    themeConfig: {
        logo: "/logo.png",
    },
    // head: [
    //     [
    //         "link",
    //         {
    //             rel: "stylesheet",
    //             href: "https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam.css",
    //         },
    //     ],
    //     [
    //         "style",
    //         {},
    //         `
    //   body {
    //     font-family: 'Shabnam', sans-serif;
    //   }
    // `,
    //     ],
    // ],
    head: [["link", { rel: "stylesheet", href: "/fonts/shabnam.css" }]],
});
