
### 写在前面
- 书籍介绍：暂无。
- 我的简评：暂无。
- ！！福利：文末有书籍地址、笔记思维导图、相关资料下载地址哦

### 第1章 初识Scrapy

#### 1、网络爬虫是什么

- 网络爬虫是指在互联网上自动爬取网站内容信息的程序，也被称为网络蜘蛛或网络机器人

- 大型的爬虫程序广泛应用于搜索引擎、数据挖掘等领域，个人用户或企业也可以利用爬虫收集对自身有价值的数据

- 一个网络爬虫程序的基本执行流程可以总结为以下循环：下载页面；提取页面中的数据；提取页面中的链接

- 设计爬虫程序时，还要考虑防止重复爬取相同页面（URL去重）、网页搜索策略（深度优先或广度优先等）、爬虫访问边界限定等一系列问题

#### 2、Scrapy简介及安装

- Scrapy简单易用、灵活易拓展、开发社区活跃，并且是跨平台的

#### 3、编写第一个Scrapy爬虫

### 第2章 编写Spider

#### 1、Scrapy框架结构及工作原理

- Scrapy框架中的各个组件：ENGINE引擎，框架的核心，其他所有组件在其控制下协同工作；SCHEDULER调度器，负责对SPIDER提交的下载请求进行调度；DOWNLOADER下载器，负责下载页面（发送HTTP请求/接收HTTP响应）；SPIDER爬虫，负责提取页面中的数据，并产生对新页面的下载请求；MIDDELWARE中间件，负责对Request对象和Response对象进行处理；ITEM PIPELINE数据管道，负责对爬取到的数据进行处理

- 框架数据流中的3个对象：REQUEST（Scrapy中的HTTP请求对象）、RESPONSE（Scrapy中的HTTP响应对象）、ITEM（从页面中爬取的一项数据）

#### 2、Request和Response对象

- Request对象用来描述一个HTTP请求。可以根据需求访问Request对象的属性，常用的几个：url、method、headers、body、meta

- Response对象描述一个HTTP响应，Response只是基类，根据响应内容的不同有如下子类：TextResponse、HtmlRespnse、XmlResponse。

- HtmlResponse对象有很多属性，最常用的3个方法：xpath、css、urljoin

#### 3、Spider开发流程

- Spider基类实现了以下内容：供Scrapy引擎调用的接口；供用户使用的实用工具函数；供用户访问的属性；

- 实现一个Spider只需要完成下面4个步骤：继承scrapy.Spider、为Spider取名、设定起始爬取点、实现页面解析函数

- 爬虫设定起始爬取点的两种方式：定义start_urls属性、实现start_request方法

- 页面解析函数是实现Spider中最核心的部分需要完成以下两项工作：使用选择器提取页面中的数据，将数据封装后提交给Scrapy引擎；使用选择器或LinkExtractor提取页面中的链接，用其构造新的Request对象并提交给Scrapy引擎

### 第3章 使用Selector提取数据

#### 1、Selector对象

- Python中常用以下模块处理文本解析：BeautifulSoup、lxml

- Selector类的实现位于scrapy.selector模块

- 调用Selector对象的xpath方法或css方法可以选中文档中的某个或某些部分

- 调用Selector或SelectorLis对象的以下方法可将选中的内容提取：extract()、re()、extract_first()、re_first()

#### 2、Response内置Selector

- 几乎不需要手动创建Selector对象，Response对象内部会以自身为参数自动创建Selector对象，并将该Selector对象缓存

- Response对象还提供了xpath和css方法

#### 3、XPath

- XPath即XML路径语言，是一种用来确定xml文档中某部分位置的语言

- XPath还提供许多函数，如数字、字符串、时间、日期、统计等

#### 4、CSS选择器

- CSS即层叠样式表，其选择器是一种用来确定HTML文档中某部分位置的语言

- 当我们调用Selector对象的CSS方法时，在其内部会使用Python库cssselect将CSS选择器表达式翻译成XPath表达式，然后调用Selector对象的XPATH方法

### 第4章 使用Item 封装数据

#### 1、Item和Field

- Scrapy提供以下两个类，用户可以使用它们自定义数据类，封装爬取到的数据

#### 2、拓展Item子类

#### 3、Field元数据

- 一项数据由Spider提交给Scrapy引擎后，可能会被递送给其他组件（Item Pipeline、Exporter）处理

### 第5章 使用Item Pipeline处理数据

#### 1、Item Pipeline

- 在Scrapy中，Item Pipeline是处理数据的组件，一个Item Pipeline就是一个包含特定接口上的类，通常只负责一种功能的数据处理，在一个项目中可以同时启用多个Item Pipeline，他们按指定次序级联起来，形成一条数据处理流水线

- Item Pipeline的几种典型应用：清洗数据、验证数据的有效性、过滤掉重复的数据、将数据存入数据库

- process_item方法是Item Pipeline的核心

- 还有3个比较常用的方法，可根据需求选择实现：open_spider（通常用于在开始处理数据之前完成某些初始化工作）；close_spider（通常用于在处理完所有数据之后完成某些清理工作）；from_crawer（通过crawler.settings读取配置，根据配置创建Item Pipeline对象）

#### 2、更多例子

- 过滤重复数据

- 将数据存入MongoDB

### 第6章 使用LinkExtractor提取链接

#### 1、使用LinkExtractor

- 提取链接有使用Selector和使用LinkExtractor两种方法

- Scrapy提供了一个专门用于提取链接的类LinkExtractor，在提取大量链接或提取规则比较复杂时，使用LinkExtractor更加方便

#### 2、描述提取规则

- LinkExtractor构造器的所有参数都有默认值，如果构造对象时不传递任何参数（使用默认值），就提取页面中的所有链接

- allow提取绝对url与正则表达式匹配的链接，deny相反；allow_domains提取指定域名的链接，deny_domains相反；restrict_xpaths提取XPath表达式选中区域下的链接；restrcit_css提取CSS选择器选中区域下的链接；tags提取指定标签内的链接；attrs提取指定属性内的链接；process_value接收一个回调函数

### 第7章 使用Exporter导出数据

#### 1、指定如何导出数据

- 负责导出数据的组件被称为Exporter（导出器），Scrapy内部实现了多个Exporter，每个Exporter实现一种数据格式的导出，支持的数据格式如下：JSON、JSON lines、CSV、XML、Pickle、Marshal

- 导出数据时，需向Scrapy提供以下信息：导出文件路径、导出数据格式

- 可以通过以下两种方式指定爬虫如何导出数据：命令行参数指定、配置文件指定

#### 2、添加导出数据格式

- BaseItemExporter定义了一些抽象接口待子类实现

### 第8章 项目练习

#### 1、项目需求

#### 2、页面分析

#### 3、编码实现

### 第9章 下载文件和图片

#### 1、FilesPipeline和ImagesPipeline

- Scrapy框架内部提供了两个Item Pipeline，专门用于下载文件和图片：FilesPipeline、ImagesPipeline

- 下载结果信息包括以下内容：path文件下载到本地的路径、checksum文件的校验和、url文件的地址

#### 2、项目实战：爬取matplotlib

- matplotlib是一个非常著名的Python绘图库，广泛应用于科学计算和数据分析等领域

#### 3、项目实战：下载360图片

### 第10章 模拟登录

#### 1、登录实质

- 响应头部中长长的Set-Cookie字段就是网站服务器程序保存在客户端（浏览器）的cookie信息，其中包含标识用户身份的session信息，之后对该网站发送的其他HTTP请求都会带上这个身份证（session）信息，服务器程序通过这个身份证识别出发送请求的用户，从而决定响应怎样的页面

- 其核心是向服务器发送含有表单数据的HTTP请求（通常是POST）

#### 2、Scrapy模拟登录

- Scrapy提供了一个FormRequest类（Request的子类），专门用于构造含有表单数据的请求，FormRequest的构造器方法有一个formdata参数，接收字典形式的表单数据

#### 3、识别验证码

- OCR是光学字符识别的缩写，用于在图像中提取文本信息，tesseract是利用该技术实现的一个验证码识别库，在Python中可以通过第三方库pytesseract调用它

- 有些付费平台提供了HTTP服务接口，用户可以通过HTTP请求将验证码图片发送给平台，平台识别后将结果通过HTTP响应返回

- 人工识别验证码也是可行的，其实现也非常简单：在Scrapy下载完验证码图片后，调用Image.show方法将图片显示出来，然后调用Python内置的input函数，等待用户肉眼识别后输入识别结果

#### 4、Cookie登录

- 不用管各种浏览器将Cookie以哪种形式存储在哪里，使用第三方Python库browsercookie便可以获取Chrome和Firefox浏览器中的Cookie

- Scrapy爬虫所使用的Cookie由内置下载中间件CookiesMiddleware自动处理

- BrowserCookiesMiddleware的实现核心思想是：在构造BrowserCookiesMiddleware对象时，使用browsercookie将浏览器中的Cookie提取，存储到CookieJar字典self.jars中

### 第11章 爬取动态页面

#### 1、Splash渲染引擎

- Splash是Scrapy官方推荐的JavaScript渲染引擎，他是使用Webkit开发的轻量级无界面浏览器，提供基于HTTP接口的JavaScript渲染服务

- 它支持的功能有：为用户返回经过渲染的HTML页面或页面截图；并发渲染多个页面；关闭图片加载，加速渲染；在页面中执行用户自定义的JavaScript代码；执行用户自定义的渲染脚本（lua），功能类似于PhantomJS

- JavaScript页面渲染服务是Splash中最基础的服务

- 可以将execute端点的服务看作一个可用lua语言编程的浏览器，功能类似于PhantomJS

- splash对象常用的属性和方法：args、js_enabled、images_enabled、go、wait、evaljs、runjs、url、html、get_cookies

#### 2、在Scrapy中使用Splash

- python库中scrapy-splash是非常好的选择

- SplashRequest构造器方法中德一些常用参数：url、headers、cookies、args、cache_args、endpoint、splash_url

#### 3、项目实战：爬取toscrape中的名人名言

#### 4、项目实战：爬取京东商城中德书籍信息

### 第12章 存入数据库

#### 1、SQLite

- SQLite是一个文件型轻量级数据库，处理速度非常快，在数据量不是很大的情况下，使用SQLite就够了

- 在Python中访问SQLite数据库可使用Python标准库中的sqlite3模块

#### 2、MySQL

- MySQL是一个应用及其广泛的关系型数据库，它是开源免费的，可以支持大型数据库，在个人用户和中小企业中成为技术首选

- 在Python2中访问MySQL数据库可以使用第三方库MySQL-Python，在Python3中可以使用另一个第三方库mysqlclient作为替代

- Scrapy框架自身是使用另一个Python框架爱=Twisted编写的程序，Twisted是一个事件驱动型的异步网络框架，鼓励用户编写异步代码

- Twisted中提供了以异步方式多线程访问数据库的模块adbapi，使用该模块可以显著提高程序访问数据库的效率

#### 3、MongoDB

- MongoDB是一个面向文档的非关系型数据库（NoSQL），它功能强大、灵活、易于扩展

- 在Python中可以使用第三方库pymongo访问MongoDB数据库

#### 4、Redis

- Redis是一个使用ANSIC编写的高性能Key-Value数据库，使用内存作为主存储，内存中的数据也可以被持久化到硬盘

- 在Python可以使用第三方库redis-py访问Redis数据库

### 第13章 使用HTTP代理

#### 1、HttpProxyMiddleware

- HTTP代理服务器可以比作客户端与Web服务器（网站）之间的一个信息中转站，客户端发送的HTTP请求和Web服务器返回的HTTP响应通过代理服务器转发给对象

- Scrapy内部提供了一个下载中间件HttpProxyMiddleware，专门用于给Scrapy爬虫设置代理

- HttpProxyMiddleware默认便是启动的，它会在系统环境变量中搜索当前系统代理，作为Scrapy爬虫使用的代理

- 一般我们使用的是无须身份验证的代理服务器，还有一些代理服务器需要用户提供账号、密码进行身份验证，验证成功后才提供代理服务

#### 2、使用多个代理

- 如果想使用多个代理，可以在构造每一个Request对象时，通过meta参数的proxy字段手动设置代理

#### 3、获取免费代理

- 通过Google或百度找到一些免费代理服务器信息的网站

#### 4、实现随机代理

#### 5、项目实战：爬取豆瓣电影信息

### 第14章 分布式爬取

- 分布式爬取的思想是“人多力量大”，在网络中的多台计算机上同时运行爬虫程序，共同完成一个大型爬取任务

- Scrapy本身并不是一个为分布式爬取而设计的框架，但第三方库scrapy-redis为其拓展了分布式爬取的功能，两者结合便是一个分布式Scrapy爬虫框架

- 在分布式爬虫框架中，需要使用某种通信机制协调各个爬虫的工作，让每一个爬虫明确自己的任务，其中包括：当前的爬取任务，即下载+提取数据（分配任务）；当前爬取任务是否已经被其他爬虫执行过（任务去重）；如何存储爬取到的数据（数据存储）

#### 1、Redis的使用

- Redis是一个非常快的非关系型数据库，使用内存作为主存储，其中德值可以分为以下5种类型：字符串string、哈希hash、列表list、集合set、有序集合zset

- 安装redis，在ubuntu上使用apt-get install redis-server

- 在Python中可以使用第三方库redis-py访问Redis数据库

#### 2、scrapy-redis源码分析

- scrapy-redis为多个爬虫分配爬取任务的方式：让所有爬虫共享一个存在于Redis数据库中德请求队列（替代各爬虫独立的请求队列），每个爬虫从请求队列中获取请求，下载并解析页面后，将解析出的新请求再添加到请求队列中，因此每个爬虫即是下载任务的生产者又是消费者

- 为实现多个爬虫的任务分配，scrapy-redis重新实现了以下组件：基于redis的请求队列（优先队列、FIFO、LIFO）；基于Redis的请求去重过滤器（过滤掉重复的请求）；基于以上两个组件的调度器

#### 3、使用scrapy-redis进行分布式爬取


### 写在后面
- pdf书籍、笔记思维导图、资料打包下载地址：暂无
- 思维导图在线查看：[点击打开](/bigdata_notes/attachment/C.《精通Scrapy网络爬虫》.svg)
- 得到电子书地址：暂无