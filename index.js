/* jshint node: true */
'use strict';
const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ui-flag',
  description: 'quickly and easily display country flags in EmberJS applications',

  included(app, parentAddon) {
    const target = (parentAddon || app);
    this._super.included(target);

    const sassOptions = app.options.sassOptions || { includePaths: []};
    const bootstrapPath = path.join(app.bowerDirectory, 'flag-icon-css/sass');
    sassOptions.includePaths.push(bootstrapPath);
    // target.import(path.join(app.bowerDirectory, 'flag-icon-css/sass/flag-icon-base.scss'));
    // target.import(path.join(app.bowerDirectory, 'flag-icon-css/sass/variables.scss'));
  },

  treeForStyles: function(tree) {
    const flagsScss = path.join('bower_components', 'flag-icon-css/sass');
    const trees = [];
    if(tree) {
      trees.push(tree);
    }
    const existingStyle = this._super.treeForStyles.apply(this, arguments);
    const flags = new Funnel(flagsScss, {
      srcDir: '/',
      destDir: '/',
      exclude: ['variables.scss']
    });
    trees.push(flags);
    const uiFlagVendor = new Funnel('vendor/ui-flag');
    trees.push(uiFlagVendor);

    if (existingStyle) {
      trees.push(existingStyle);
    }

    return mergeTrees(trees);
  },

  treeForPublic: function(tree) {
    const bootstrapPath = path.join('bower_components', 'flag-icon-css');
    const trees = [];

    if(tree) {
      trees.push(tree);
    }

    const svgs = new Funnel(bootstrapPath, {
      srcDir: '/flags',
      destDir: '/flags'
    });
    trees.push(svgs);

    return mergeTrees(trees);
  },

  isDevelopingAddon: function () {
    return true;
  }
};
