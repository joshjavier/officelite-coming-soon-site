/* ----------------------------------------------------------------------------
process CSS files with Lightning CSS
---------------------------------------------------------------------------- */
const browserslist = require('browserslist');
const lighting = require('lightningcss');
const path = require('node:path');

module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats('css');
  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    async compile(inputContent, inputPath) {
      const baseDir = path.basename(path.dirname(inputPath));
      if (baseDir.startsWith('_')) {
        return undefined;
      }
      const files = [];
      const targets = lighting.browserslistToTargets(browserslist('last 2 versions, not dead, > 0.2%'));
      const result = await lighting.bundleAsync({
        filename: inputPath,
        minify: true,
        sourceMap: true,
        drafts: {
          customMedia: true,
          nesting: true,
        },
        resolver: {
          resolve(specifier, from) {
            const importPath = path.resolve(path.dirname(from), specifier);
            files.push(importPath);
            return path.resolve(path.dirname(from), specifier);
          },
        },
        targets,
      });
      this.addDependencies(inputPath, files);
      return () => result.code.toString();
    },
  });
};
