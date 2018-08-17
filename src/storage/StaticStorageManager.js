var StaticStorageManager = {
  saveFile: function(path, blob, success, error) {
    success();
  },

  deleteFile: function(path, success, error) {
    success();
  },

  getPathUrl: function(path) {
    return path;
  },
  initStorage: function(success, error) {
    success();
  },
};
export default StaticStorageManager;
