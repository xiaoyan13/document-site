# 你所不知道的js2

## 异步的相关概念

- 异步，本质上是单线程的`js引擎`充分压榨`cpu`时间的行为。
- 在ES6之前，js语言是没有异步这个名词的，只有回调函数作为异步的天然实现。

- 并没有规范指定`console`方法族的工作规范，这并不是`js`标准的一部分。这个工作是宿主环境决定的事情。所以，一个离谱的可能性是，宿主环境把`console`输出设计成了异步请求，这将导致输出和代码运行顺序颠倒。这种行为特性被称为"I/O的异步化"。

- 不要去编写*同步*请求。尽管技术上可以，但是它看起来毫无用处：对于客户端来讲，它一般只会造成锁定用户`UI`的效果。

- 并发是一种能够同时处理多个任务的能力，而并行是一种多个处理器可以同时处理不同任务的能力。多线程是并发的实现。

  多线程的程序意味着多个线程执行一个代码。虽然本质上，只有一个线程在运作，但是这些线程共享资源。这意味这些线程运行完整个代码后得到的结果是不确定的。参见中卷p145页实例。

  js是单线程的。这意味我们不需要考虑这种底层行为。js采取的策略是异步，即充分的去压榨一个线程的资源：在cpu足够强大的今天，一个线程往往已经很够用了。总之，js的世界里不存在多线程，只存在单个线程中的事件循环，而且**事件**是以作用域（通常表现为**回调函数**）为单位排队处理的，而非语句顺序级别的处理。这种设计极大的降低了js的复杂度。

- 单线程的事件循环也是并发的实现。换句话说，当两个或多个任务可以在**某一极短时间段内**启动、执行和完成时，就可以称之为并发。

## js异步

- 当两个异步事件互不影响的时候，结果返回前后顺序的不确定性是可以接受的。我们讨论异步，其实就是在处理两个或多个异步事件相互影响的情况，即处理**竞态**。

-  `var`对于异步竞态的协调是一个麻烦事。最好不要有变量提升行为。异步本来就麻烦，还要牵扯的作用域提升，就很头疼了。
- 严格的，`setTimeout(..., 0)`并不直接把回调函数插入到事件循环队列中去。`Node.js`的`process.nextTick(...)`也如此。尽管它们都很方便，绝大多数情况下都可以直接使用，但是心中还是要有底，明白它们终究还是先和宿主环境打了交道，然后立即被插入到了循环队列中。
- 同步事件有时候也会出现类似于异步的阻塞现象（比如千万级的for循环），这个时候可以采用*并发协作*的方式，把它切割成多个小事件丢入事件循环队列或者任务队列中，让主代码得以在单次小事件结束后继续运行下去。