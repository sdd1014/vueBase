const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');//打包带着html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//每次打包自动清理dist
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),//入口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  mode:'development',
  //配置各种loader
  module:{
    rules:[
      //解析ES6
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          //本身并不能解析es6语法，它依赖的是babel/preset-env去解析的
          //babel/preset-env包含了一系列的ES6语法解析的插件,每个插件对应一个ES6语法
          //babel-loader它就是依靠这些插件去解析的
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      //打包css vue-style-loader是npmstyle-loader的一个增强版本
      {
        test: /\.css$/,
        // use: [ 'style-loader', 'css-loader' ] //使用loader的时候有顺序，从后往前
        use: [ 'vue-style-loader', 'css-loader' ] //使用vue
      },
      //打包图片， 内部会使用到file-loader
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',//内部使用到file-loader
            options: {
              limit: 8192, //如果图片小于这个值，会被base64编码为一个字符串，提高效率，减少请求
              name:'[hash:8].[ext]' //打包后的图片名字，截取哈希值的前八位
            }
          }
        ]
      },
      //配置loader处理vue文件
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },

  //配置插件完成其他搞不定功能
  plugins:[
    new HtmlWebpackPlugin({
      //配置html模板文件
      template:'./src/public/index.html'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),//vue相关插件
  ],

  devServer: {
    port:8080,//服务启动的端口
    open:true,//是否自动打开浏览器
    quiet:true,//输出少量的提示信息
  },

  devtool:'cheap-module-eval-source-map', //定位出错所在的原始代码行
  resolve:{
    extensions: [".js", ".json", ".vue"], //解决导入省略后缀名称
    alias:{
      "vue$":"vue/dist/vue.esm.js"
    }
  }
};