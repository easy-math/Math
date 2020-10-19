# Math

## 先挖个坑

这里将围绕 JavaScript 里的标准内置对象 Math 上的常量和方法展开，介绍其数学推导和实现方式。

为了便于展示，我会使用 Python 的数学库 SymPy 来成文。不用担心，这里不会使用 Python 里深奥的语法，且都会附上 JavaScript 的实现。比起更复杂的高数，学习 Python 并会不占用你半天以上的精力。

* 自然底数 e 
* PI
* 自然对数 LN2
* 自然对数 LN10
* LOG2E 以 2 为底的 E 的对数
* LOG10E 以 10 为底的 E 的对数
* SQRT1_2 二分之一 ½ 的平方根，同时也是 2 的平方根的倒数  1
2
 ，
* SQRT2 2 的平方根

## 使用

* 如果你仅仅是阅读，可以直接在线阅读
* 如果你有使用过 Python，应该会了解 [Jupyter](https://jupyter.org/)，可以使用 `jupyter lab docs` 启动本文档
* 如果你不想折腾 Python 环境，可以直接使用 `npm run docker` 命令，启动已经封装好的环境（首次启动将拉取镜像）