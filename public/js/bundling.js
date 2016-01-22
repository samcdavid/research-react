new webpack.DefinePlugin({
  "process_env": {
    NODE_ENV: JSON.stringify("production")
  }
});

require("./components/comment-box.js");
