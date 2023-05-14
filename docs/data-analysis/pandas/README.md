# 概述

这里对利用pandas进行数据分析进行了归纳总结，以便日后忘掉。

## 为什么使用Python

最为重要的一点是胶水语言特性。python代码可以解决双语言问题，取长补短，科学计算底层可以采用速度快的C，而python代码本身又十分简洁，所以才如此快的被大众接受。

## 数据流向图

- 数据获取：通过数据源获取数据，典型的有爬虫。除此之外，这部分还涉及到了数据的读取和存储的问题，例如与各种数据文件，数据库交互。虽然直接利用`python`进行数据读取不失为一件优雅的做法（`python`对文件读取处理使用起来非常简单），但是我们一般采用`pandas`库中封装好的针对特定数据文件进行读取的方案。具体函数参见官网。

- 数据预处理：对获取到的数据进行清洗和预处理。如处理缺失值和数据规整。

- 数据可视化：对处理后的数据进行绘图操作。

整个流程全部通过`python`代码实现。每一步都需要借助于不同的`python`工具。

## 最基本的工具

基础：

- `numpy`：语言基础, 是`python`这门语言针对数值计算的再封装。
- `pandas`库：数据处理基础。
- `matplotlib`：绘图基础。

其他：

- `SciPy`：各种科学数据计算的编程解决方案。
- `scikit-learn`：跑机器学习的工具。

## 环境

- `candas`：包管理工具，用来取代`pip`，`pip`对于依赖安装及其麻烦，`candas`更加方便。
  - `candas`自带了一个`python`，所以电脑中不必安装`python`；对于已经有`python`的电脑，注意安装的时候不要勾选添加至环境变量。
  - 绝大部分环境在安装好`candas`后就已经解决了，后续需要用到的库可以在`candas`中安装。
- `jupyter`：编写代码的编辑器（官方用语：一个适用于多种语言的交互式计算工具）。`candas`软件中下载即可。默认自带`ipython`内核。（内核：一种语言编程模式。）

## 环境使用常见技巧

毋庸置疑，使用键盘进行操作的效率是比鼠标快N倍的。但对于初学者以及不常用`jupyter`和数据分析的人来说（比如我），记下这些快捷键基本上没有任何意义。下面记录了一些最最基本的命令。

- 自动补全键`Tab`
- `?`提示
- `%run`指令运行python文件（详见python魔术命令）

## 参考

学习数据分析很大程度上就是在记忆各种函数。总结性的东西很大程度不会包含太多参数，也绝不会详细，很多地方必须要结合文档。

[pandas](https://pandas.pydata.org/docs/index.html)

[matplotlib](https://matplotlib.org/stable/tutorials/index.html)

[matplotlib_CN](https://www.matplotlib.org.cn/)

### 实体书籍

《利用pandas进行数据分析》，机械工业出版社

《Python学习手册》，机械工业出版社