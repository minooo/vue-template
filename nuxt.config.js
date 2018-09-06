module.exports = {
  // Global CSS
  css: ["~assets/styles/common.scss"],
  router: {
    middleware: "stats"
  },
  build: {
    analyze: {
      analyzerMode: "static"
    },
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        query: {
          limit: 10000, // 10KO
          name: "img/[name].[hash].[ext]"
        }
      }
    ],
    postcss: {
      plugins: {
        autoprefixer: {
          browsers: [
            "> 1%",
            "last 7 versions",
            "not ie <= 8",
            "ios >= 8",
            "android >= 4.0"
          ]
        }
      }
    },
    vendor: ["axios"]
  }
};
