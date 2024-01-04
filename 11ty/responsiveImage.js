const Image = require("@11ty/eleventy-img");

/* 
Usage: {% responsiveImage "src" + image, alt %}
*/

async function imageShortCode(
  src,
  alt,
  classList = "featured-image",
  sizes = "100vw"
) {
  let metadata = await Image(src, {
    widths: [160],
    formats: ["jpeg", "webp"],
    outputDir: "_site/assets/images/",
    urlPath: "/assets/images/",
    sharpOptions: {
      animated: true,
    },
    filenameFormat: function (id, src, width, format, options) {
      // id: hash of the original image
      // src: original image path
      // width: current width in px
      // format: current file format
      // options: set of options passed to the Image call
      return `${alt
        .replace(/[^A-Z0-9]/gi, "-")
        .toLowerCase()}-${width}w.${format}`;
    },
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
    class: classList,
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = imageShortCode;
