import indexCss from './public/css/index.css'
import imgSrc from './public/imgs/3.jpg'

let pp = document.createElement('p')
pp.innerHTML = "我爱你赵丽颖"
document.getElementById('root').appendChild(pp)

let myFunc = () => {
  console.log('嘿嘿');
}
myFunc()

//创建图片
let imgNode = new Image()
// let imgNode = document.createElement('image')
imgNode.src = imgSrc
document.getElementById('root').appendChild(imgNode)

let a = 100
console.log(a);