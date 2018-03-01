module.export = function npmi(opts, cb) {
  console.log('npmi cannot work in browser');
  console.log(opts);
  cb(new Error('npm in browser does not work'));
  // TODO replace with a resolver from unpkg.com ?
};