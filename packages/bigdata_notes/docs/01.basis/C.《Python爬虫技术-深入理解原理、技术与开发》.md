
### 写在前面
- 书籍介绍：暂无。
- 我的简评：暂无。
- ！！福利：文末有书籍地址、笔记思维导图、相关资料下载地址哦

### 第1篇 基础知识

### 第1章 开发环境配置

#### 1、安装官方的Python运行环境

- 目前常用的操作系统是Windows、macOS和Linux三大平台

#### 2、配置PATH环境变量

- 为了更方便的执行python命令，建议将Python安装目录添加到PATH环境变量中

#### 3、安装Anaconda Python开发环境

- 集成的Python运行环境，除了包含Python本身的运行环境外，还集成了很多第三方模块，如numpy、pandas、flask等

#### 4、安装PyCharm

- 一个专门用于开发Python程序的IDE

#### 5、配置PyCharm

### 第2章 爬虫基础

#### 1、HTTP基础

- URI统一资源标识符，URL是URI的子集，URN统一资源名称，P2P下载中使用的磁力链接是URN的一种实现

- 在Web应用中，超文本主要是指HTML代码，在浏览器中看到的内容就是浏览器解析超文本后的输出结果

- 协议指数据传输协议，也就是数据的传输格式（数据传输规范）

- HTTP超文本传输协议，理论上可以传输任何类型的数据，包括超文本数据、普通的文本数据、二进制数据（如图像、视频文件等）

- HTTPS是安全的HTTP数据通道，可认为是HTTP的安全版本，即HTTP下加入SSL层

- 在Chrome页面右键菜单中单击”检查“命令打开开发者工具，然后切换到Network面板

- 详细信息页面有3个部分，General、Response Headers和Request Headers，分别表示基本信息、响应头信息和请求头信息

- GET和POST请求方法主要区别：GET请求中的参数都包含在URL中，数据可以在URL中看到，而POST请求提交的数据并不会包含在URL中；GET请求提交的数据最多只有1024个字节，而POST请求对提交数据的大小没有限制

- 请求头用来提供服务器使用的信息，由若干个请求字段组成，Accept告知客户端可以接收什么类型的信息、Content-Type请求体的文档类型、Cookie存储在本地的数据、Referer标识这个请求是从哪个页面发过来的、User-Agent表示客户端的操作系统和浏览器版本

- 服务端返回给客户端数据称为响应，可分为3部分：响应状态码、响应头、响应体

- 响应头包含了服务器对请求的应答信息，如Content-Type、Date、Server等

- 响应体是服务器对客户端具体的响应数据，可以包含任何格式的内容

#### 2、网页基础

- Web三剑客：HTML、CSS和JavaScript

- HTML用来描述网页的一种语言，用不同的标记表示各种节点

- CSS的主要作用是：将由HTML定义的页面节点安排到合适的位置即布局了；设置页面节点的样式；

- CSS的核心是选择器，选择器的作用就是让CSS知道需要设置哪些HTML节点

- 实现页面特效，或从服务端使用AJAX获取数据并动态显示在Web页面中就需要借助JavaScript

#### 3、爬虫的基本原理

- 爬虫，主要的功能是下载Internet或局域网中的各种资源

- 分类：全网爬虫、站内爬虫、定向爬虫

- 在Python语言中有很多库可以实现从网络上下载资源的功能，如urllib、request等

#### 4、Session与Cookie

- 静态页面的内容是使用HTML代码编写的，文件中的任何内容都是固定的，除非直接修改文件

- 动态页面的实现方式非常多，都是由服务端根据不同的条件动态向客户端发送内容

- 模拟登录的方式很多，其中最常用的方式就是Cookie劫持

- HTTP的无状态是指HTTP协议在客户端与服务端交互的过程中不保留状态

- Session与Cookies类似，只是将数据保存 服务端

- 查看Cookie的方式，最简单的就是通过Chrome浏览器开发者工具的Application选项卡

#### 5、实战案例：抓取所有的网络资源

- 全网爬虫至少有一个入口点，然后爬虫抓取这个入口点指向的页面，接下来将该页面中所有链接节点中href属性的提取出来

#### 6、实战案例：抓取博客文章列表

### 第2篇 网络库

### 第3章 网络库urllib

#### 1、urllib简介

- urllib包含4个模块：request基本HTTP请求模块；error异常处理模块；parse工具模块；robotparser识别网站robots文件

#### 2、发送请求与获得响应

- 1.发送HTTP请求通过urlopen函数就可以搞定

- 2.urlopen函数返回的是HTTPResponse类型的对象，主要包含read、getheader、getheaders等方法，以及msg、version、status、debuglevel、closed等属性

- 3.发送HTTP POST请求需要使用data命令参数，该参数是bytes类型

- 4.请求超时通过urlopen函数的timeout命名参数进行设置，单位为秒

- 5.要想色值HTTP请求头，需要为urlopen函数传入Request对象，可以通过Request类构造方法的headers命名参数设置HTTP请求头

- 6.有时需要将HTTP请求头的值设为中文，但直接设成中文，会抛出异常。为了解决这个问题，在设置HTTP请求头时需要将中文编码，发送到服务端后，在服务端用同样的规则解码

- 7.用户名和密码是通过HTTP请求头的Authrization字段发送给服务端的，所以在访问该页面时可以直接设置Authorization字段

- 8.使用ProxyHandler类可以设置HTTP和HTTPS代理

- 9.读取Cookie需要创建http.cookiejar.CookieJar类的实例传入urllib.request.HTTPCookieProcessor类的实例，并将http.cookiejar.CookieJar类的实例传入urllib.request.HTTPCookieProcessor类的构造方法中

#### 3、异常处理

- 1.异常类都在urllib的error模块中定义，主要有两个异常类：URLError和HTTPError

- 2.URLError类属于urllib库的error模块，该类从OSError类继承，是error模块中的异常基类，由request模块产生的异常都可以通过URLError来捕获

- 3.HTTPError是URLError的子类，专门用于处理HTTP请求错误，比如400、404错误

#### 4、解析链接

- 1.urllib库里的parse模块可以用来解析URL

- 2.parse模块支持如下协议的URL处理：file、ftp、gopher、hdl、http、https、imap、mailto、mms、news、nntp、prospero、rsync、rtsp、rtspu、sftp、shttp、sip、sips、snews、svn、svn+ssh、wais、ws、wss

- 3.拆分与合并URL（urlparse、urlunparse）；另一种拆分与合并的方式（urlsplit、urlunsplit）；连接URL（urljoin）；URL编码（urlencode）；编码与解码（quote与unquote）；参数转换（parse_qs与parse_qsl）

#### 5、Robots协议

- 1.Robots协议也称作爬虫协议、机器人协议，它的全名是网络爬虫排除标准，用来告诉爬虫和搜索引擎哪些页面可以抓取，哪些不可以抓取

- 2.robots.txt文件中有2个重要的授权指令：Disallow和Allow，前者表示禁止抓取，后者表示允许抓取

- 3.RobotFileParser类的构造方法也可以接收一个URL，然后使用can_fetch方法判断是否可以抓取某一个页面

### 第4章 网络库urllib3

#### 1、urllib3简介

- 1.urllib主要侧重于URL的请求构造，而urllib2侧重于HTTP请求的处理，而urllib3则是服务于升级的HTTP1.1标准，且拥有高效HTTP连接池管理及HTTP代理服务的功能库

#### 2、urllib3模块

- 1.urllib3提供了很多python标准库里所没有的重要特性，这些特性包括：线程安全；连接池；客户端SSL/TLS验证；使用multipart编码上传文件；协助处理重复请求和HTTP重定位；支持压缩编码；支持HTTP和Socks代理；100%测试覆盖率；

#### 3、发送HTTP GET请求

#### 4、发送HTTP POST请求

#### 5、HTTP请求头

- 1.通过PoolManager对象的request方法的headers关键字参数可以指定字典形式的HTTP请求头

#### 6、HTTP响应头

#### 7、上传文件

#### 8、超时

- 1.由于HTTP底层是基于Socket实现的，所以连接的过程中也可能超时。Socket超时分为连接超时和读超时

### 第5章 网络库requests

- requests是功能强大且使用方便的Python网络库

#### 1、基本用法

- 1.get方法指定的URL不仅可以是网页，还可以是任何二进制文件，如png图像、pdf文档等

#### 2、高级用法

- 1.使用requests上传文件是相当简单的，只需指定post方法的files参数即可

- 2.requests使用代理非常容易，只需指定proxies参数即可

- 3.为了避免抛出异常而导致的程序崩溃，通常的做法是使用try...except语句来捕捉超时异常

#### 3、小结

- 1.requests使用起来真是太方便了，很多案例都完成了复杂的功能，但代码量却很少

### 第6章 Twisted网络框架

- Twisted是一个完整的事件驱动的网络框架。爬虫框架Scrapy就是使用Twisted框架编写的

#### 1、异步编程模型

- 1.目前常用的编程模型有3种：同步编程模型、线程编程模型和异步编程模型

- 2.如果要完成多个任务，比较有效的方式是将这些任务分解，然后启动多个线程，每个线程处理一部分任务，最后再将处理结果合并

- 3.采用异步编程模型，当一个任务被阻塞后，就会立刻执行另一个任务

#### 2、Reactor（反应堆）模式

- 1.这种利用循环体来等待事件发生，然后处理发生的事件的模型被设计成了一个模式：Reactor（反应堆）模式

#### 3、HelloWorld，Twisted框架

- 1.用于回调的代码是我们传递给Twisted的

#### 4、用Twisted实现时间戳客户端

- 1.Twisted框架的异步机制是整个框架的基础，可以在这个基础上实现很多基于异步编程模型的应用

#### 5、用Twisted实现时间戳服务端

### 第3篇 解析库

### 第7章 正则表达式

- Python语言内置的功能主要是正则表达式，通过正则表达式，可以对任意字符串进行搜索、分组等复杂操作

#### 1、使用正则表达式

- 1.使用match方法匹配字符串，该方法用于指定文本模式和待匹配的字符串

- 2.使用search方法在一个字符串中查找模式，该方法用于在一段文本中找到一个或多个与文本模式相匹配的字符串

- 3.匹配多个字符串，最简单的方法是在文本模式字符串中使用择一匹配符号（|）

- 4.匹配一类字符串的特殊符号：点(.)

- 5.使用字符集，某些字符可以有多个选择，就需要使用字符集（[]）

- 6.重复、可选和特殊字符，要对重复模式进行匹配，就需要使用两个符号："*"和"+"

- 7.分组，可以通过group方法的参数获取指定的组匹配的字符串

- 8.匹配字符串的起始和结尾以及单词边界，"^"符号用于表示匹配字符串的开始，"$"符号用于表示匹配字符串的结束

- 9.使用findall和finditer查找每一个出现的位置。findall函数用于查询字符串中某个正则表达式模式全部的非重复出现情况。与match函数和search函数不同之处在于，findall函数总是返回一个包含搜索结果的列表。finditer函数在功能上与findall函数类似，只是更节省内存

- 10.用sub和subn搜索与替换，用于实现搜索和替换功能。

- 11.使用split分隔字符串。用于根据正则表达式分隔字符串

#### 2、一些常用的正则表达式

- 1.Email：'[0-9a-zA-Z]+@[0-9a-zA-Z]+\\.[a-zA-Z]{2,3}'

- 2.IP地址：'\\d{1,3}.\\d{1,3}.\\d{1,3}.\\d{1,3}'

- 3.Web地址：'https?:/{2}\\w.+'

#### 6、小结

- 1.其实正则表达式并不是解决搜索和匹配问题的唯一方式，有很多现成的库提供了大量的API可以对复杂数据进行搜索和定位

### 第8章 lxml与XPath

#### 1、lxml基础

- 1.lxml是Python的一个解析库，用于解析HTML和XML，支持XPath解析方式

- 2.lxml底层是使用C语言编写的，所以解析效率非常高

- 3.parse函数返回值是lxml.etree._ElementTree对象

- 4.使用lxml操作HTML的方式与操作XML非常类似

#### 2、XPath

- 1.XPath的英文全称是XML Path Language，中文是XML路径语言，是一种XML文档中查找信息的语言，最初 是用于在XML文档中搜索节点的，但同样可用于HTML文档的搜索

- 2.XPath的功能非常强大，提供了非常简单的路径选择表达式

- 3.以2个斜杠(//)开头的XPath规则会选取所有符合要求的节点

- 4.在选取子节点时，通常会将'//'和'/'规则放在一起使用，只有一个斜杠（/）表示选取当前节点下的直接子节点

- 5.知道子节点，想得到父节点可以使用'..'，还可以使用'parent::*'

- 6.引用属性值需要在属性名前面加@

- 7.在很多情况下，需要同时通过多个属性过滤节点，就需要用到XPath中的and和or关键字

- 8.XPath提供了很多节点轴选择方法，包括获取祖先节点、兄弟节点、子孙节点等

- 9.Chrome中Elements选项卡定位到选择对应的HTML代码，右击可以选择执行Copy-Copy XPath命令得到对应的XPath路径

- 10.复制XPath代码，在Console选项卡中输入"$x('//*[@id="nav"]')"可以用来运行XPath函数

#### 5、小结

### 第9章 Beautiful Soup库

- 由于Beautiful Soup提供了多种选择器，使用起来不仅比XPath方便，而且更灵活

#### 1、Beautiful Soup库

- 1.Beautiful Soup是一个强大的基于Python语言的XML和HTML解析库

- 2.Beautiful Soup提供了一些简单的函数来处理导航、搜索、修改分析树等功能

#### 2、Beautiful Soup基础

- 1.由于Beautiful Soup底层需要依赖于解析器，所以在使用时需要为其指定解析器

#### 3、节点选择器

- 1.获取节点的名称，使用name属性

- 2.获取节点的属性，使用attrs

- 3.获取节点的内容，使用string属性

- 4.获取直接子节点，使用contents属性或children属性

- 5.获取所有子孙节点，使用descendants属性

- 6.选择父节点，使用parent属性，所有父节点使用parents属性

- 7.选择兄弟节点，使用next_sibling属性

#### 4、方法选择器

- 1.find_all方法用于根据节点名、属性、文本内容等选择所有符合要求的节点，常用的参数包括name、attrs、text等

- 2.find方法与find_all方法的几点不同：find方法查询满足条件的第一个节点；find方法返回的是bs4.element.Tag对象

#### 5、CSS选择器

- 1.使用CSS选择器需要使用Tag对象的select方法。常用的CSS选择器有：.classname、nodename、#idname

#### 8、小结

- Beautiful Soup简直太方便了，而且还有多种选择器可以使用

### 第10章 pyquery库

- 虽然Beautiful Soup库的功能非常强大，但CSS选择器功能有些弱

#### 1、pyquery简介

- 1.喜欢用CSS选择器，而且对jQuery有所了解，那么使用pyquery正好适合

#### 2、pyquery基础

- 1.可以通过如下3种方式将HTML文档传入PyQuery对象：字符串、URL、文件

#### 3、CSS选择器

- 1.pyquery的CSS选择器用于指定CSS代码，并通过CSS代码选取HTML文档中对应的节点

#### 4、查找节点

- 1.查找子节点需要使用find方法

- 2.通过parent方法可以查找直接父节点

- 3.使用siblings方法可以查询当前节点的所有兄弟节点

- 4.节点包括如下信息：节点名称、节点属性、节点文本、整个节点的HTML代码、节点内部的HTML代码

#### 5、修改节点

- 1.添加和移除节点的样式：addClass和removeClass

- 2.修改节点属性和文本内容：attr、removeAttr、text和html

- 3.删除节点：remove

#### 6、伪类选择器

- 1.CSS选择器之所以强大，一个很重要的原因就是它支持多种多样的伪类选择器

#### 9、小结

- 1.lxml的功能比较简单，只支持XPath，但运行速度比较快

- 2.Beautiful Soup的功能丰富，支持多种选择器（节点选择器、方法选择器和CSS选择器），不过不如pyquery丰富

- 3.pyquery虽然CSS选择器功能强大，但只支持CSS选择器，如果需要使用XPath选取节点，仍需要使用lxml或Beautiful Soup

### 第4篇 数据存储

### 第11章 文件存储

- 保存数据有多种方式，其中最简单、成本最低的就是将数据保存在二进制或文本文件中

#### 1、打开文件

- open函数用于打开文件，第1个参数指定文件名，第2个参数指定文件模式

#### 2、操作文件的基本方法

- 1.使用open函数打开文件后，会返回一个TextIOWrapper对象

- 2.对文件完成相关操作后关闭文件也没什么坏处，而且还可以避免浪费操作系统中打开文件的配额

- 3.要读写一行或多行文本，建议使用readline方法、readlines方法和writelines方法

#### 3、使用FileInput对象读取文件

- 1.使用readlines函数会占用太多内存

- 2.FileInput对象使用的缓存机制，并不会一次性读取文件的所有内容

#### 4、处理XML格式的数据

- 1.在Python语言中需要导入xml模块或其子模块，并利用其中提供的API来操作XML文件

- 2.生成XML文件的方式有很多，可以按字符串方式生成XML文件，也可以按其他方式生成文件

- 3.将XML字符串转换为字典，需要导入xmltodict模块

#### 5、处理JSON格式的数据

- 1.JSON格式要比XML格式更简约

- 2.将JSON字符串转换为字典可以使用下面两种方法：使用json模块的loads函数；使用eval函数将JSON字符串当作普通的Python代码执行

- 3.通过loads函数的object_hook关键字参数指定一个类或一个回调函数，可以将JSON字符串转换为类实例

- 4.dumps函数不仅可以将字典转换为JSON字符串，还可以将类实例转换位JSON字符串

#### 6、将JSON字符串转换为XML字符串

- 1.将JSON字符串转换为XML字符串其实只需要做一下中转即可，也就是先将JSON字符串转换为字典，然后再使用dicttoxml模块中的dicttoxml函数将字典转换为XML字符串

#### 7、CSV文件存储

- 1.CSV文件以纯文本形式存储表格数据

- 数据存储不仅仅只有文本文件，还有各种各样的数据库，如SQLite、MySQL、Mongodb等

### 第12章 数据库存储

#### 1、SQLite数据库

- 1.SQLite是一个开源、小巧、零配置的关系型数据库，支持多种平台，包括Windows、Mac OS X、Linux、Android、IOS等

- 2.sqlite3模块式Python语言内置的，不需要安装，直接导入就可以

#### 2、MySQL数据库

- 1.MySQL是一个功能强大的网络关系型数据库，支持通过网络多人同时连接和操作数据库

- 2.在Python语言中需要使用pymysql模块来操作MySQL数据库

- 3.记住几个函数和方法：connect、cursor、execute、commit、rollback

#### 3、非关系型数据库

- 1.非关系型数据库主要包括对象数据库、键值数据库、文档数据库、图形数据库、表格数据库等

- 2.MongoDB是非常有名的文档数据库，所有的数据以文档形式存储

- 3.在Python语言中使用MongoDB数据库需要先导入pymongo模块

#### 6、小结

- 1.如果抓取的数据量比较大，而且需要后期整理和查询，建议保存到数据库中

- 2.抓取的数据只用于用户自己分析和实验，可以保存到SQLite数据库中

- 3.抓取的数据需要让多人访问和分析，可以考虑MySQL数据库

- 4.抓取的数据很难整理成二位表的形式，可以考虑MongoDB这样的文档数据库

### 第5篇 爬虫高级应用

### 第13章 抓取异步数据

#### 1、异步加载与AJAX

- 其实AJAX有两层含义，一层含义是异步，指请求和下载数据的方式是异步的；另一层含义是指传输数据的格式，目前经常使用的数据格式是JSON

#### 2、基本原理

- AJAX的实现分为3步：发送请求（通常是指HTTP请求）、解析响应（通常是指JSON格式的数据）和渲染页面（通常是指将JSON格式的数据显示在Web页面的某些元素上）

#### 3、逆向工程

- 和破解一个可执行程序一样，需要用二进制编辑工具一点一点跟踪

- 要注意的是，XHR过滤的URL与返回数据的格式无关，只与发送请求的方式有关

#### 4、提取结果

#### 5、项目实战：支持搜索功能的图片爬取

#### 6、项目实战：抓取京东图书评价

### 第14章 可见即可爬：Selenium

- 数据通过AJAX方式获取，由于很多参数都是加密的，很难找到什么规律，要想抓到数据，就需要模拟浏览器来加载页面

- Python语言支持很多第三方模拟浏览器的程序库，如Selenium、Splash、PyV8、Ghost等

#### 1、安装Selenium

- Selenium本质上是一款自动化测试工具，主要用于测试Web应用

#### 2、安装WebDriver

- WebDriver是一个W3C规范，用于定义控制浏览器的API

- ChromeDriver分为Windows、Linux和Mac版本

#### 3、Selenium的基本使用方法

- 主要功能有以下几类：打开浏览器；获取浏览器页面的特定内容；控制浏览器页面上的控件；关闭浏览器；

- WebDriver可以模拟浏览器的一类重要操作，就是模拟按键

#### 4、查找节点

- 以find_element开头的方法都是用于查找单个节点的API

- 以find_elements开头的方法是可以查找多个节点的API

#### 5、节点交互

- 就是模拟浏览器的动作

#### 6、动作链

- 有一类交互动作，没有特定的执行对象，如鼠标拖拽

- 动作链需要创建ActionChains对象，并通过ActionChains类的若干方法向浏览器发送一个或多个动作

#### 7、执行JavaScript代码

- 使用execute_script方法直接运行JavaScript代码，以便扩展selenium的功能

#### 8、获取节点信息

- 使用selenium的API还可以获得详细的节点信息，如节点的位置，节点名称，节点尺寸，节点属性值等

- ul.text、ul.id、ul.location

#### 9、管理Cookies

- 可以方便的管理Cookie，例如获取Cookie、添加和删除Cookie等

- browser.get_cookies()、borwser.add_cookie()

#### 10、改变节点的属性值

- 可以通过执行JavaScript代码的方式设置节点属性，而且通过selenium获取的节点可以直接作为DOM使用

#### 11、项目实战：抓取QQ空间说说的内容

### 第15章 基于Splash的爬虫

- Splash是一个JavaScript渲染服务，是一个带有HTTP API的轻量级浏览器。可以使用Lua语言编写代码对页面进行渲染，Python可以通过HTTP API调用Splash内部的功能，甚至可以与Lua代码进行交互

#### 1、Splash基础

- 功能简介：异步处理多个网页的渲染；获取渲染后的页面源代码或截图；使用Adblock规则来加快页面渲染速度；使用JavaScript处理网页内容；通过Lua脚本来控制页面渲染过程；获取渲染的详细过程并通过HAR格式呈现

#### 2、Splash Lua脚本

- Splash可以通过Lua脚本执行一系列渲染操作

- 基本操作：访问页面splash:go("xxx")；加载等待splash:wait(0.5)；执行JavaScript（splash:evaljs("document.title")）

- Splash支持异步处理，go方法就是通过异步方式访问页面的

- Splash对象属性：args获取加载配置参数、js_enabled控制是否可以执行JavaScript代码、resource_timeout设置加载时间、images_enabled设置图片是否可以加载、plugins_enabled控制浏览器插件是否开启、scroll_position控制页面上下或左右滚动、go请求某个链接、wait控制页面的等待时间、jsfunc直接调用JavaScript定义的函数、autoload设置每个页面访问时自动加载的JavaScript代码、call_later设置任务的延长时间实现任务延时执行、http_get模拟发送HTTP GET请求、set_content设置页面的内容、html方法获取网页源码、png方法获取png格式的页面截图、har方法导出加载网页时的详细性能数据、get_cookies()获取当前页面的cookies、get_viewport_size方法可以获取浏览器页面的尺寸、set_user_agent方法设置浏览器的User-Agent

#### 3、使用CSS选择器

- select方法用于查找第1个符合条件的节点

- select_all用于查找所有符合条件的节点

#### 4、模拟鼠标和键盘的动作

- mouse_click方法可以模拟鼠标单击的动作

- send_keys可以模拟键盘按键的动作

#### 5、Splash HTTP API

- Splash提供的一组URL，通过为这些URL指定各种参数，可以完成对页面的各种渲染工作

- 常用API：render.html获取JavaScript渲染的页面的HTML代码、render.png获取网页截图、render.har获取页面加载的HAR数据、execute可以实现Python与Lua对接

#### 6、项目实战：使用Splash Lua抓取京东搜索结果

### 第16章 抓取移动App的数据

- 移动App通常都会采用异步的方式从服务端获取数据

- 要想监控移动App发送的请求，就需要使用抓包工具，例如Charles、WireShark、Fiddler、mitmproxy等

- 抓包工具的基本原理是在PC上可以作为代理运行，然后在手机上设置代理服务器和端口号

#### 1、使用Charles

- Charles是一个跨平台网络抓包工具，支持Windows、Mac和Linux平台

- 首先启动Charles，然后单击Proxy->Proxy Settings命令。在手机端需要在访问网络时先连接代理服务器，也就是Charles应用

- 要想通过Charles监听HTTPS数据，必须在PC端和手机端安装证书

- Charles有一个重要特性是可以重复发送请求

#### 2、使用mitmproxy

- mitmproxy是一个支持HTTP和HTTPS的抓包程序，功能与Charles类似，只不过mitmproxy是一个控制台程序，操作都需要在控制台完成

- mitmproxy有两个关联组件：mitmdump和mitmweb

- mitmproxy的主要功能如下：拦截HTTP和HTTPS请求和响应；保存HTTP回源，并进行分析；模拟客户端发起请求，模拟服务器返回响应；利用反向代理将浏览转发给指定的服务器；支持Mac和Linux上透明代理；利用Python对HTTP请求和响应进行实时代理

- mitmproxy可以通过命令行对截获的信息进行编辑，可以利用这个功能重新编辑请求

- mitmdump是mitmproxy的命令行接口，同时还可以对接Python对请求进行处理，这要比使用Charles方便不少

- mitmproxy有3种监听请求与响应的方式：mitmproxy控制台方式；mitmdump与Python对接的方式；mitmweb可视化方式；

- 通常会使用mitmweb分析请求和响应数据，而使用mitmdump与Python结合的方式抓取并处理数据

#### 3、项目实战：实时抓取“得到”App在线课程

### 第17章 使用Appium在移动端抓取数据

#### 1、安装Appium

- Appium桌面端支持全平台安装，而且提供源代码

- AppImage是一种通用的Linux安装程序，在传统的Linux安装程序中，不同发行版本会使用不同类型的安装程序

#### 2、Appium的基本使用方法

- 获取App的appPackage至少有2种方式：利用手机本身的功能；从AndroidManifest.xml文件中获得Package

#### 3、使用Python控制手机

#### 4、AppiumPythonClient Api

- 可以使用Selenium中差值方法来实现对App中UI元素的查找，推荐使用ID查找

- 单击元素可以使用tap方法，该方法可以模拟手指点击动作，支持多指触摸

- 可以使用scroll方法模拟屏幕滚动

- 可以使用swipe方法模拟从A点滑动到B点

- 使用drag_and_drop方法可以将某一个元素拖拽到另一个目标元素上

- 使用set_text方法和send_keys方法都可以实现文本输入

- 与Senium中的ActionChains类似，Appium中的TouchAction可支持的方法包括tap、press、long_press、release、move_to、cancel、wait等

#### 5、项目实战：利用Appium抓取微信朋友圈信息

### 第18章 多线程和多进程爬虫

#### 1、线程与进程

- 只有可执行程序被调入内存中才叫进程

- 每个进程都拥有自己的地址空间、内存、数据栈以及其他用于跟踪执行的辅助数据

- 进程可以派生（fork或spawn）新的进程来执行其他任务，不过由于每个新进程也都拥有自己的内存和数据栈等

- 线程是在同一个进程下执行的，并共享同一个上下文

- 线程属于进程，而且线程必须依赖进程才能执行。一个进程可以包含一个或多个线程

- 线程包括开始、执行和结束三部分

- 一个进程中的各个线程与主进程共享同一块数据空间

- 要注意的是，线程的执行时间是不平均的

#### 2、Python与线程

- Python多线程在底层使用了兼容POSIX的线程，也就是众所周知的pthread

- 要注意的是，在Python2.x中这个模块叫thread，从Python3.x开始，thread更名为_thread

- 锁并不是将程序锁住不退出，而是通过锁可以让程序了解是否还有线程函数没执行完，而且可以做到当所有的线程函数执行完后，程序会立刻退出，而无须任何等待

#### 3、高级线程模块

- 在threading模块中有一个非常重要的Thread类，该类的实例表示一个执行线程的对象

- _thread模块可以看作线程的面向过程版本，而Thread类可以看作线程的面向对象版本

- Thread类构造方法的target关键字参数不仅可以是一个函数，还可以是一个对象，可以称这个对象为线程对象

- 从Thread类继承最简单的方式是在子类的构造方法中通过super()函数调用父类的构造方法，并传入相应的参数值

#### 4、线程同步

- 线程锁的目的是将一段代码锁住，一旦获得了锁权限，除非释放线程锁，否则其他任何代码都无法再次获得锁权限

- 信号量是最古老的同步原语之一，它是一个计数器，用于记录资源消耗情况

- 要注意的是信号量对象的acquire方法与release方法

#### 5、生产者--消费者问题与queue模块

#### 6、多进程

- 可以使用multiprocessing模块的进程池（Pool类），通过Pool类构造方法的processes参数，然后指定创建的进程数

#### 7、项目实战：抓取豆瓣音乐Top250排行榜（多线程版）

#### 8、项目实战：抓取豆瓣音乐Top250排行榜（多进程版）

### 第19章 网络爬虫框架：Scrapy

#### 1、Scrapy基础知识

- 通过Scrapy框架，可以非常轻松的实现强大的爬虫系统。

- 外围的工作，如抓取页面、保存数据、任务调度、分布式等，直接交给Scrapy就可以了

- 包括6个部分：Scrapy Engine（Scrapy引擎）：用来处理整个系统的数据流，触发各种事件；Scheduler（调度器）：从URL队列中取出一个URL；Downloader（下载器）：从Internet上下载Web资源；Spiders（网络爬虫）：接收下载器下载的原始数据，做进一步处理；Item Pipeline（项目管道）：接收网络爬虫传过来的数据，以便做进一步处理；中间件：整个Scrapy框架有很多中间件，如下载器中间件、网络爬虫中间件等

- 整个流程图中，整体在Scrapy Engine的调度下，首先运行的是Scheduler，Scheduler从下载队列中取一个URL，将这个URL交给Downloader，Downloader下载这个URL对应的Web资源，然后将下载的原始数据交给Spiders，Spiders会从原始数据中提取出有用的信息，最后将提取出来的数据交给Item Pipeline，可以通过Item Pipeline将数据保存到数据库、文本文件或其他存储介质上

- Scrapy提供了一个Shell，相当于Python的REPL环境

- Scrapy主要是使用XPath过滤HTML页面的内容

#### 2、用Scrapy编写网络爬虫

- Scrapy框架提供了一个scrapy命令用来建立Scrapy工程

- PyCharm不支持建立Scrapy工程

- PyCharm扩展工具允许在PyCharm中通过单击命令执行外部命令

- parse方法的返回值会被传给Item Pipeline，并由相应的Item Pipeline将数据保存成相应格式的文件。parse方法的返回值类型必须是scrapy.Item或其scrapy.Item的子类。

- 本质上，ItemLoader对象也是通过返回一个item的方式保存数据的，只不过ItemLoader对象将item和reponse进行了封装

- 转换的基本原理是将CSV格式的文件作为数据源来读取，然后在parse方法中将CSV文件中的数据通过Item转换为指定的格式，如JSON格式

#### 3、Scrapy的高级应用

- Scrapy允许使用中间件干预数据的抓取过程，以及完成其他数据处理工作

- Scrapy提供了很多内建的下载器中间件，例如下载超时、自动重定向、设置默认HTTP请求头等

- 爬虫中间件会在3个位置起作用：向服务器发送Request之前；在Downloader生成Response并发送Spider之前；在Spider生成Item并发送给Item管道之前

- Item管道的主要功能如下：数据清理，主要清理HTML数据；校验抓取的数据，检查抓取的字段数据；查重并丢弃重复的内容；数据存储；

- CrawlSpider是Scrapy提供的一个通用爬虫

- 一些内置的处理器：Identity最简单的Processor；TakeFirst返回列表的第一个非空值；Join处理器用于将列表中每个元素首尾相接合成一个字符串；Compose处理器允许将多个处理器或函数组成在一起使用；MapCompose可以迭代处理一个列表输入值；SelectJmes可以通过key获得JSON对象的value

### 第20章 综合爬虫项目：可视化爬虫


### 写在后面
- pdf书籍、笔记思维导图、资料打包下载地址：暂无
- 思维导图在线查看：[点击打开](/bigdata_notes/attachment/C.《Python爬虫技术-深入理解原理、技术与开发》.svg)
- 得到电子书地址：暂无