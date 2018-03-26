const path = requare('path')

const PATHS = {
  source: path.join(__dirname, 'source')
}
module.export = {
  entry: PATHS.source + 'index.js',
  output: {
    filename: "bundle.js",
  }
}
