# Math

## 先挖个坑

这里将围绕 JavaScript 里的标准内置对象 Math 上的常量和方法展开，介绍其数学推导和实现方式。

为了便于展示，我会使用 Python 的数学库 SymPy 来成文。不用担心，这里不会使用 Python 里深奥的语法，且都会附上 JavaScript 的实现。比起更复杂的高数，学习 Python 并会不占用你半天以上的精力。

## 使用

* 如果你仅仅是阅读，可以直接在线阅读
* 如果你有使用过 Python，应该会了解 [Jupyter](https://jupyter.org/)，可以使用 `jupyter lab docs` 启动本文档
* 如果你不想折腾 Python 环境，可以直接使用 `npm run docker` 命令，启动已经封装好的环境（首次启动将拉取镜像）

## 常量

* Math.E [自然常数 e](https://math.haozi.me/E.html)
* Math.PI [圆周率 π](https://math.haozi.me/PI.html)
* Math.LN10 自然对数
* Math.LN2 自然对数
* Math.LOG10E 以 10 为底的 E 的对数
* Math.LOG2E 以 2 为底的 E 的对数
* Math.SQRT1_2 二分之一 ½ 的平方根，同时也是 2 的平方根的倒数
* Math.SQRT2 2的平方根

## 函数
* Math.pow() [指数(幂运算)](https://math.haozi.me/pow.html)
* Math.abs() [绝对值](https://math.haozi.me/abs.html)
* Math.acos()
* Math.acosh()
* Math.asin()
* Math.asinh()
* Math.atan()
* Math.atan2()
* Math.atanh()
* Math.cbrt()
* Math.ceil()
* Math.clz32()
* Math.cos()
* Math.cosh()
* Math.exp()
* Math.expm1()
* Math.floor()
* Math.fround()
* Math.hypot()
* Math.imul()
* Math.log()
* Math.log10()
* Math.log1p()
* Math.log2()
* Math.max()
* Math.min()
* Math.random()
* Math.round()
* Math.sign()
* Math.sin()
* Math.sinh()
* Math.sqrt()
* Math.tan()
* Math.tanh()
* Math.trunc()

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
