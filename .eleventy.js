module.exports = function (eleventyConfig) {
    // کپی استایل‌ها به فولدر خروجی
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/books/book1/assets");
    eleventyConfig.addPassthroughCopy("src/books/book2/assets");
    
    eleventyConfig.addPassthroughCopy("src/icone");
    eleventyConfig.addGlobalData("layout", "layout.njk");
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
