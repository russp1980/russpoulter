module.exports = config => {
  // Set directories to pass through to the dist folder
  // config.addPassthroughCopy("css");

    return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: "src",
      output: "_site"
    }
  };
};