const ImageShortCode = require("./11ty/responsiveImage");

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy({
    "./src/site.webmanifest": "site.webmanifest",
  });

  eleventyConfig.addNunjucksAsyncShortcode("responsiveImage", ImageShortCode);

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
