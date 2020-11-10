# Math

## 先挖个坑

市面上的高数课程大都面向考研，应试和算术技巧偏多。

由于本人的工作关系，于是打算结合自己的学习心得，写个适合前端入门的高数系列。想学明白机器学习或者大数据相关领域，高数是必须迈过的坎，而数学又是个环环相扣的知识体系，需要打扎实每一步基础。

本系列打算先由 JavaScript 的 Math 库展开，先讲一下上面所有方法和常量实现，然后是 JS 里没有 Python 里有的比如复数。再逐步引出线性代数、集合论、解析几何、概率统计这几个在机器学习、动画应用较多的分支。受群友建议，计划再补一点牛顿经典力学。

由于 JS 语言的擅长方向并不是数学研究，为了便于演示，我会使用 Python 的专业数学库 [SymPy](https://www.sympy.org/) 来成文。不过不用担心，这里不会使用 Python 里深奥的语法，且都尽量附上 JS 的实现。比起更复杂的高数，学习 Python 并不会占用你半天以上的精力。

本系列最希望讲清的是数学的定义和推导过程。不会着重算法工程优化和 V8 具体实现，这方面可以去看专业的计算机数值计算相关书籍或 V8 源码。

由于个人水平非常有限，说错的地方请多多指教并提 issue 和 PR。由于坑实在挖得太大，也非常希望有兴趣的朋友一起加入协作，欢迎投稿或 PR，并将以[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 署名协议进行发布。


## 使用

* 如果你仅仅是阅读，可以直接在线阅读
* 如果你有使用过 Python，应该会了解 [Jupyter](https://jupyter.org/)，可以 [clone](https://github.com/haozi/Math) 并使用 `jupyter lab docs` 启动本文档
* 如果你不想折腾 Python 环境，可以直接使用 `npm run docker` 命令，启动已经封装好的环境（首次启动将拉取镜像）

## 常量

* Math.E [自然常数 e](https://math.haozi.me/E.html)
* Math.PI [圆周率 π](https://math.haozi.me/PI.html)
* Math.LN10 [自然对数，$\log_e10$](https://math.haozi.me/log.html)
* Math.LN2 [自然对数，$\log_e2$](https://math.haozi.me/log.html)
* Math.LOG10E [以 10 为底的 E 的对数, $\log_{10}e$](https://math.haozi.me/log.html)
* Math.LOG2E [以 2 为底的 E 的对数, $\log_2e$](https://math.haozi.me/log.html)
* Math.SQRT1_2 二分之一 ½ 的平方根，同时也是 2 的平方根的倒数
* Math.SQRT2 根号2

## 函数

* 指数
  * Math.pow() [指数(幂运算)](https://math.haozi.me/pow.html)
  * Math.exp() [$e^x$](https://math.haozi.me/pow.html)
  * Math.expm1()[$e^x - 1$](https://math.haozi.me/pow.html)
* 开方
  * Math.sqrt() [开平方运算](https://math.haozi.me/sqrt.html)
  * Math.cbrt() [开立方运算](https://math.haozi.me/sqrt.html)
* Math.abs() [绝对值](https://math.haozi.me/abs.html)
* 对数
  * Math.log10() [以 10 为底的对数 $\log_{10}x$](https://math.haozi.me/log.html)
  * Math.log2() [以 2 为底的对数 $\log_2x$](https://math.haozi.me/log.html)
  * Math.log() [以 e 为底的对数 $\log_ex$](https://math.haozi.me/log.html)
  * Math.log1p() [以 e 为底，$x + 1$ 的值 $\log_e{(x + 1)}$](https://math.haozi.me/log.html)
* Math.random() [伪随机](https://math.haozi.me/random.html)
* 取整
  * Math.floor() [下取整，也叫高斯函数](https://math.haozi.me/floor.html)
  * Math.ceil() [上取整](https://math.haozi.me/floor.html)
  * Math.round() [中文翻译成四舍五入，但其实不准确](https://math.haozi.me/round.html)
  * Math.trunc() [截尾取整](https://math.haozi.me/trunc.html)
* 三角函数
  * Math.sin() [三角函数](https://math.haozi.me/trigonometric.html)
  * Math.cos() [三角函数](https://math.haozi.me/trigonometric.html)
  * Math.tan() [三角函数](https://math.haozi.me/trigonometric.html)
* Math.acos()
* Math.acosh()
* Math.asin()
* Math.asinh()
* Math.atan()
* Math.atan2()
* Math.atanh()
* Math.clz32()
* Math.cosh()
* Math.fround()
* Math.hypot()
* Math.imul()
* Math.max()
* Math.min()
* Math.sign()
* Math.sinh()
* Math.tanh()

## 线性代数

### 行列式

* 二阶与三阶行列式
* 全排列和对换
* n阶行列式的定义
* 行列式的性质
* 行列式按行（列）展开

### 矩阵及其运算

* 线性方程组和矩阵
* 矩阵的运算
* 逆矩阵
* 克拉默法则
* 矩阵分块法

### 矩阵的初等变换和线性方程组

* 矩阵的初等变换
* 矩阵的秩
* 线性方程组的解

### 向量组的线性相关性

* 向量组及其线性组合
* 向量组的线性相关性
* 向量组的秩
* 线性方程组的解的结构
* 向量空间

### 相似矩阵及二次型

* 向量的内积、长度及正交性
* 方阵的特征值与特征向量
* 相似矩阵
* 对称矩阵的对角化
* 二次型及其标准型
* 用配方法化二次型成标准型
* 正定二次型

### 线性空间与线性变换

* 线性空间的定义与性质
* 维数、基与坐标
* 基变换与坐标变换
* 线性变换
* 线性变换的矩阵表达式

## 概率论
### 随机事件及其概率

* 随机事件
* 随机事件的概率
* 古典概型与几何概型
* 条件概率
* 事件的独立性

### 随机变量及其分布

* 随机变量
* 离散型随机变量及其概率分布
* 随机变量的分布函数
* 连续型随机变量及其概率密度
* 随机变量函数的分布

### 多维随机变量及其分布

* 二维随机变量及其分布
* 条件分布与随机变量的独立性
* 二维随机变量函数的分布

### 随机变量的数字特征
* 数学期望
* 方差
* 协方差与相关系数
* 大数定理与中心极限定理

### 数理统计的基础知识
* 数理统计的基本概念
* 常用统计分布
* 抽样分布

### 参数估计

* 点估计问题概述
* 点估计的常用方法
* 置信区间
* 正态总体的置信区间

### 假设检验
* 假设检验的基本概念
* 单正态总体的假设检验
* 双正态总体的假设检验
* 关于一般总体数学期望的假设检验
* 分布拟合检验

### 方差分析与回归分析

* 单因素假设检验的方差分析
* 双因素假设检验的方差分析
* 一元线性回归

## 解析几何

// TODO

## 牛顿经典力学

// TODO


## 联系我们

![](https://raw.githubusercontent.com/haozi/Math/master/scripts/.vuepress/public/wechat.jpg)

(如果二维码扫不开，可加微信 _ha0z1，并注明来意)
