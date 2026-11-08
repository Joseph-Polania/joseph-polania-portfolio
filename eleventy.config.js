
export default function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addPassthroughCopy("src/cv");

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    };
}
