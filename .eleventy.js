module.exports = function (eleventyConfig) {
    // کپی استایل‌ها به فولدر خروجی
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/books/book1/assets/image");

    return {
        dir: {
            input: "src", // ورودی همه فایل‌ها از این پوشه
            output: "_site", // خروجی سایت
            includes: "includes", // قالب‌ها
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    };
};
