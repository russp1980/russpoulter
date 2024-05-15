const { DateTime } = require("luxon");

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

  // Filters
	config.addFilter("readableDateLong", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "cccc dd LLLL yyyy");
	});
	config.addFilter("readableDateShort", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLL yyyy");
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