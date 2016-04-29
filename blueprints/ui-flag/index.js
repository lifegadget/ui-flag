/*jshint node:true*/
module.exports = {
  description: '',

  normalizeEntityName: function() {

  },

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([
      { name: 'flag-icon-css', version: '^2.1.0' }
    ]);
  }
};
