module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('fnando/i18n-js#~2.1.2');
  }
};
