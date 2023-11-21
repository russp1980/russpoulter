module.exports = function(config) {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy("css");
  config.addPassthroughCopy('./src/images/');
  config.addPassthroughCopy('./src/js/');

  // Returns work items, sorted by display order
  config.addCollection('work', collection => {
  return collection
    .getFilteredByGlob('./src/work/*.md')
    .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
});

config.addCollection('words', collection => {
  return [... collection.getFilteredByGlob('./src/words/*.md')].reverse();
});

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