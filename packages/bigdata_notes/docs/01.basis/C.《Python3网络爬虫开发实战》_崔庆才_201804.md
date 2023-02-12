
### 写在前面
- 书籍介绍：暂无。
- 我的简评：暂无。
- ！！福利：文末有书籍地址、笔记思维导图、相关资料下载地址哦

### 第一章 开发环境配置

#### 1.1.Python3的安装

- windows、linux、mac

- windows下安装有2种：通过Anaconda安装；直接下载安装包安装

- Linux下的安装：命令安装；源码安装；Anaconda安装

- Mac下安装：Homebrew；安装包安装；Anaconda安装

#### 1.2.请求库的安装

- requests、Selenium、ChromeDriver、GeckoDriver、PhantomJS、aiohttp

- 爬虫可以简单分为几步：抓取页面；分析页面；存储页面

- requests属于第三方库，Python默认不会自带这个库

- Selenium是一个自动化测试工具，利用它我们可以驱动浏览器执行特定的动作，如点击、下拉等操作

- Selenium需要浏览器来配合使用，只有安装ChromeDriver，才能驱动Chrome浏览器完成相应的操作，对于Firefox也可以使用同样的方式完成Selenium的对接

- 目前最新的Chrome浏览器版本已经支持无界面模式了

- PhantomJS是一个无界面的、可脚本编程的WebKit浏览器引擎，它原生支持多种Web标准：DOM操作、CSS选择器、JSON、Canvas以及SVG

- aiohttp是一个提供异步Web服务的库，从Python3.5版本开始，Python加入了async/await关键字，使得回调的写法更加直观和人性化

#### 1.3.解析库的安装

- lxml、Beautiful Soup、pyquery、tesserocr

- lxml是Python的一个解析库，支持HTML和XML的解析，支持XPath解析方式，而且解析效率非常高

- Beautiful Soup是Python的一个HTML或XML的解析库，可以用它来方便的从网页中提取数据

- pyquery同样是一个强大的网页解析工具，他提供了和jQuery类似的语法来解析HTML文档

- tesserocr是Python的一个OCR识别库

#### 1.4.数据库的安装

- mysql、mongodb、redis

- MySQL是一个轻量级的关系型数据库

- MongoDB是由C++语言编写的非关系型数据库，是一个基于分布式文件存储的开源数据库系统，其内容存储形式类似JSON对象，它的字段值可以包含其他文档、数组及文档数组

- Redis是一个基于内存的高效的非关系型数据库。推荐下载Redis Desktop Manager可视化管理工具，来管理Redis

#### 1.5.存储库的安装

- PyMySQL、PyMongo、redis-py、RedisDump

- MySQL需要安装PyMySQL、MongoDB需要安装PyMongo

- 对于Redis来说，我们要使用redis-py库莱与其交互

- RedisDump是一个用于Redis数据导入/导出的工具，是基于Ruby实现的

#### 1.6.Web库的安装

- Flask、Tornado

- Flask是一个轻量级的Web服务程序，它简单、易用、灵活

- Tornado是一个支持异步的Web框架，通过使用非阻塞I/O流，可以支撑成千上万的开放连接，效率非常高

#### 1.7.App爬取相关库的安装

- Charles、mitmproxy、Appium

- Charles是一个网络抓包工具，相比Fiddler，其功能更为强大，而且跨平台支持得更好，可以选用它作为主要的移动端抓包工具

- mitmproxy是一个支持HTTP和HTTPS的抓包程序，类似Fiddler、Charles的功能，只不过它通过控制台的形式操作

- Appium是移动端的自动化测试工具，类似前面所说的Selenium，利用它可以驱动Android、iOS等设备完成自动化测试，比如模拟点击、滑动、输入等操作

#### 1.8.爬虫框架的安装

- pyspider、Scrapyd、Scrapy-Splash、Scripy-Redis

- pyspider是国人binux编写的强大的网络爬虫框架，它带有强大的WebUI、脚本编辑器、任务监控器、项目管理器以及结果处理器，同时支持多种数据库后端、多种消息队列，另外还支持JavaScript渲染页面的爬取

- Scrapy是一个十分强大的爬虫框架，依赖的库比较多，至少需要依赖的库有Twisted14.0、lxml3.4和pyOpenSSL0.14

- Scrapy-Splash是一个Scrapy中支持JavaScript渲染的工具

- Scrapy-Redis是Scrapy的分布式扩展模块

#### 1.9.部署相关库的安装

- Docker、Scrapyd-Client、Scrapyd API、Scrapyrt、Gerapy

- Docker是一种容器技术，可以将应用和环境等进行打包，形成一个独立的、类似于iOS的App形式的“应用”

- Scrapyd是一个部署和运行Scrapy项目的工具，可以将写好的Scrapy项目上传到云主机并通过API来控制它的运行

- Scrapyrt为Scrapy提供了一个调度的HTTP接口，不需要再执行Scrapy命令而是通过请求一个HTTP接口来调度Scrapy任务了

- Gerapy是一个Scrapy分布式管理模块

### 第二章 爬虫基础

#### 2.1.HTTP基本原理

- URI、URL

- URI统一资源标志符；URL统一资源定位符；

- URL是URI的子集

- HTML超文本

- 在浏览器里看到的网页就是超文本解析而成的

- HTTP、HTTPS

- 访问资源需要的协议类型

- HTTP用于从网络传输超文本数据到本地浏览器的传送协议，它能保证高效而准确的传送超文本文档

- HTTPS是以安全为目标的HTTP通道

- 请求过程

- 打开Chrome浏览器，右击并选择“检查”项，即可打开浏览器的开发者工具

- 请求

- 请求由客户端向服务端发出，可以分为4部分内容：请求方法、请求地址、请求头、请求体

- 常见的请求方法有两种：GET和POST

- 请求的网址，即统一资源定位符URL

- 请求头用来说明服务器要使用的附加信息，比较重要的信息由Cookie、Referer、User-Agent等

- 请求体一般承载的内容是POST请求中的表单数据

- 响应

- 响应，由服务端返回客户端，可以分为三部分：响应状态码、响应头和响应体

- 响应头包含了服务器对请求的应答信息，如Content-Type、Server、Set-Cookie等

- 最重要的当属响应体的内容了

#### 2.2.网页基础

- 组成

- HTML相当于骨架，JavaScript相当于肌肉，CSS相当于皮肤

- 网页包括文字、按钮、图片和视频等各种复杂的元素，其基础架构就是HTML

- CSS即层叠样式表，“层叠”是指当在HTML中引用了数个样式文件，并且样式发生冲突时，浏览器能依据层叠顺序处理，“样式”指网页中文字大小、颜色、元素间距、排列等格式

- 网页里看到的一些交互和动画效果，如下载进度条、提示框、轮播图等就是JavaScript的功劳

- 结构

- 节点、节点树

- 所有标签定义的内容都是节点，他们构成了一个HTML DOM树

- W3C DOM标准被分为3个不同的部分：核心DOM针对任何结构化文档的标准模型；XML DOM针对XML文档的标准模型；HTML DOM针对HTML文档的标准模型

- HTML文档中德所有内容都是节点：整个文档是一个文档节点，每个HTML元素是元素节点，HTML元素内的文本是文本节点，每个HTML属性是属性节点，注释是注释节点

- 选择器

- 使用CSS选择器来定位节点

- CSS选择器还支持嵌套选择

#### 2.3.爬虫的基本原理

- 概述

- 爬虫就是获取网页并提取和保存信息的自动化程序

- 步骤：获取网页、提取信息、保存数据、自动化程序

- 能抓的数据

- 对应各自的URL，是基于HTTP或HTTPS协议的，只要是这种数据，爬虫都可以抓取

- JavaScript渲染页面

#### 2.4.会话和Cookies

- 静态网页和动态网页

- 动态网页可以动态解析URL中参数的变化，关联数据库并动态呈现不同页面内容，还可以实现用户登录和注册的功能

- 无状态HTTP

- HTTP协议对事务处理是没有记忆功能的，也就是说服务器不知道客户端是什么状态

- 会话Cookie就是把Cookie放在浏览器内存里，浏览器在关闭后该Cookie即失效；持久Cookie则会保存到客户端的硬盘中，下次还可以继续使用，用于保持用户登录状态

#### 2.5.代理的基本原理

- 基本原理

- 服务器会检测某个IP在单位时间内的请求次数，如果超过这个阈值，就会直接拒绝服务，返回一些错误信息

- 代理服务器的功能是代理网络信息

- 代理作用

- 代理的作用：突破自身IP的访问限制；访问一些单位或团体内部资源；提高访问速度；隐藏真实IP

- 爬虫代理

- 使用代理隐藏真实的IP，让服务器误以为是代理服务器在请求自己

- 代理分类

- 根据协议分类：FTP代理、SSL/TLS代理、RTSP代理、Telnet代理、POP3/SMTP代理、SOCKS代理

- 根据匿名程度区分：高度匿名代理（原封不动的转发）、普通匿名代理、透明代理、间谍代理

- 代理设置

- 使用网上的免费代理；使用付费代理服务；ADSL拨号

### 第三章 基本库的使用

- 最基础的HTTP库有urllib、httplib2、requests、treq等

#### 3.1.使用urllib

- 发送请求、处理异常、解析链接、分析Robots协议

- 包含如下4个模块：request最基本的HTTP请求模块，可以用来模拟发送请求；error异常处理模块，可以捕获异常然后进行重试或其他操作以保证程序不会意外终止；parse工具模块，提供了许多URL处理方法比如拆分、解析、合并等；robotparser主要用来识别网站的robots.txt文件然后判断哪些网站可以爬

- 高级用法有各种Handler子类继承BaseHandler，如HTTPDefaultErrorHandler用于处理HTTP响应错误，错误都会抛出HTTPError类型的异常；HTTPRedirectHandler用于处理重定向；HTTPCookieProcessor用于处理Cookies；ProxyHandler用于设置代理；HTTPPasswordMgr用于管理密码；HTTPBasicAuthHandler用于管理认证

- parse模块支持如下协议的URL处理：file、ftp、gopher、hdl、http、https、imap、mailto、mms、news、nntp、prospero、rsync、rtsp、rtspu、sftp、sip、sips、snews、svn、svn+ssh、telnet和wais

- Robots协议也称爬虫协议、机器人协议，全名叫做网络爬虫排除标准，用来告诉爬虫和搜索引擎哪些页面可以抓取，哪些不可以抓取

#### 3.2.使用requests

- 基本用法：GET请求抓取网页、JSON数据、二进制数据，POST请求添加headers处理响应

- 高级用法：文件上传files字段，cookies获取与设置，会话维持Seesion对象，SSL证书验证verify参数，代理设置proxies参数，超时设置timeout参数，身份认证auth类，预请求prepared request对象

#### 3.3.正则表达式

- match()匹配，search()扫描，findall()返回所有，sub()替换，compile()编译

#### 3.4.抓取猫眼电影排行

### 第四章 解析库的使用

#### 4.1.使用XPath

- 一门在XML文档中查找信息的语言

- 所有节点//*，子节点/，父节点..，属性匹配[@class='']，文本获取text()，属性获取@href，属性多值匹配li[contains(@class, 'itm')]，多属性匹配li[contains(@class, 'itm') and @name='itm']，按序选择[last()]、[position()<3]，节点轴选择ancestor、descendant、follow-sibling

#### 4.2.使用Beautiful Soup

- 强大的解析工具，借助网页的结构和属性等特性解析网页

- 节点选择器：选择元素soup.p、soup.title；提取信息soup.title.name、soup.p.attrs['name']、soup.p.string；嵌套选择soup.head.title.string；关联选择soup.p.contents、soup.p.children、soup.a.parent、soup.a.next_sibling、list(soup.a.parents)[0].attrs['class']

- 方法选择器：find_all(name='ul')、find_all(attrs={'id': 'list-1'})、find_all(text=re.compile('link'))；find()、find_parents()、find_next_siblings、find_next()

- CSS选择器：select('li')、select('ul')[0].attrs['id']、select('ul')[0].get_text()

#### 4.3.使用pyquery

- 多种初始化方式：传入字符串、传入url、传入文件名

- 基本CSS选择器：doc("#container .list li")

- 查找节点：find('li')、children('.active')、parent()、siblings()、doc('li').items()

- 获取信息：a.attr('href')、doc('.active a').text()

- 节点操作：addClass('active')、attr('name', 'link')、doc.find('p').remove()

- 伪类选择器：doc('li:first-child')、doc('li:gt(2)')

### 第五章 数据存储

#### 5.1.文件存储

- Text、JSON、CSV

- TXT文本存储：with open()、file.write()、file.close()

- JSON文件存储：json.loads()、json.dumps()

- CSV文件存储：csv.writer(csvfile)、writer.writerow(['id', 'name'])、csv.reader(csvfile)

#### 5.2.关系型数据库存储

- MySQL

- 连接connect()、获取游标cursor()、执行execute()、关闭close()、事务commit()和rollback()

#### 5.3.非关系型数据库存储

- MongoDB、Redis

- Mongo存储：连接pymongo.MongoClient('mongodb://localhost:/27017')；指定数据库client.test；指定集合db.students；插入collection.insert(student)；查询collection.find_one({'name': 'Mike'})；计数collection.find().count()；更新collection.update_one(condition, {'$inc': {'age': 1}})；删除collection.remove({'name': 'Kevin'})

- Redis存储：连接StrictRedis(host='localhost', port=6379, db=0, password='xxx')；键操作exists(name)、type(name)、set(name, value)

- RedisDump提供两个可执行命令，redis-dump用于导出数据，redis-load用于导入数据

### 第六章 Ajax数据爬取

#### 6.1.什么是Ajax

- 异步的JavaScript和XML

- 基本原理：发送Ajax请求到网页更新的过程分为3步发送请求、解析内容、渲染网页

#### 6.2.Ajax分析方法

- 特殊的请求类型xhr

- 点击请求查看Request URL、Request Headers、Response Headers、Response Body

#### 6.3.Ajax结果提取

#### 6.4.分析Ajax爬取今日头条街拍美图

### 第七章 动态渲染页面爬取

- Python提供了许多模拟浏览器运行的库，如Selenium、Splash、PyV8、Ghost等

#### 7.1.Selenium的使用

- 可以驱动浏览器执行特定的动作，可以获取浏览器当前呈现的页面源代码

- 基本使用：browser=webdriver.Chrome();brower.get('https://www.baidu.com');

- 声明浏览器对象：from selenium import webdriver; browser = webdriver.Firefox()

- 访问页面：browser.get()、browser.close()

- 查找节点：browser.find_element_by_id('q')、browser.find_elements_by_css_selector('.service-bd li')

- 节点交互：输入文字send_keys()、清空文字clear()、点击按钮click()

- 动作链：鼠标拖拽actions = ActionChains(browser); actions.drag_and_drop(source, target); actions.perform();

- 执行JavaScript：browser.execute_script('alert("hah")')

- 获取节点信息：获取属性get_attribute()、获取文本值get_text()、获取id位置标签名等等element.tag_name

- 切换iframe：browser.switch_to.frame('iframeResult')

- 延时等待：browser.implicitly_wait(10)隐式等待；wait.until(EC.element_to_be_clickable(By.CSS_SELECTOR, '.btn-search'))显式等待；

- 前进后退：browser.back()、browser.forward()

- Cookies：browser.get_cookies()、browser.add_cookie({'name': 'bob'})

- 选项卡管理：browser.switch_to_window(browser.window_handles[1])

- 异常处理：try except来捕获异常

#### 7.2.Splash的使用

- 异步方式处理多个网页渲染过程，获取渲染后页面源代码或截图。通过关闭图片渲染或使用block规则来加速页面渲染速度，可执行特定的JavaScript脚本，可通过Lua脚本来控制页面渲染过程，获取渲染详细过程并通过HAR格式呈现

- Splash是一个JavaScript渲染服务，是一个带有HTTP API的轻量级浏览器，同时它对接了Python中的Twisted和QT库

- Splash对象属性：args加载时配置参数、js_enabled执行开关JavaScript、resource_timeout加载超时时间、images_enabled是否加载图片、plugins_enabled浏览器插件是否开启、scroll_position控制页面滚动

- Splash对象的方法：go()请求某个链接、wait()控制页面的等待时间、jsfunc()直接调用JavaScript定义的方法、evaljs()执行JavaScript代码并返回最后的执行结果、runjs()执行JavaScript代码更偏向于执行某些动作或声明某些方法、autoload()设置每个页面自动加载的对象、call_later()通过设置定时任务和延时时间来实现任务延时执行、http_get()模拟发送HTTP的GET请求、set_content()设置页面的内容、html()获取网页的源代码、png()获取PNG格式的网页截图、har()获取页面加载过程描述、get_cookies()获取当前页面的Cookies、set_viewport_size()设置当前浏览器页面的大小、set_custom_headers()设置请求头、select_all()选中所有符合条件的节点、mouse_click()模拟鼠标点击操作

- Splash API调用：render.html用于获取JavaScript渲染的页面的HTML代码、render.png获取网页截图、render.har()获取页面加载的HAR数据、render.json()获取接口返回的响应数据、execute()最为强大的接口

#### 7.3.Splash负载均衡配置

- 搭建一个负载均衡器来把压力分散到各个服务器上

- 配置负载均衡：upstream定义服务集群配置、weight指定各个服务的权重

#### 7.4.使用Selenium爬取淘宝商品

### 第八章 验证码的识别

#### 8.1.图形验证码的识别

- 对一些有干扰的图片做一些灰度和二值化处理，会提高图片识别的正确率

- 用tessercr库识别该验证码

- 要将原图先转换为灰度图像，然后再指定二值化阈值

#### 8.2.极验滑动验证码的识别

- 模拟点击验证按钮识别滑动缺口的位置模拟拖动滑块

- 识别并通过极验验证码的验证，包括分析识别思路、识别缺口位置、生成滑块拖动路径、模拟实现滑块拼合通过验证等步骤

- 极验验证码广泛应用于直播视频、金融服务、电子商务、游戏娱乐、政府企业等各大类型网站

- 极验验证码还增加了机器学习的方法来识别拖动轨迹

- 官方网站的安全防护有如下几点说明：三角防护之防模拟、三角防护之防伪造、三角防护之防暴力

- 采用直接模拟浏览器动作的方式来完成验证

- 验证码图片缺口的四周边缘有明显的断裂边缘，边缘与边缘周围有明显的区别

#### 8.3.点触验证码的识别

- 借助在线验证码平台

- 12306就是典型的点触验证码

- 一个专门提供点触验证码服务的站点TouClick

- 识别的思路：一是文字识别；二是图像识别；

#### 8.4.微博宫格验证码的识别

- 新型交互式验证码，每个宫格之间会有一条指示连线，指示了应该的滑动轨迹

- 获取模板、模板匹配、模拟拖动

### 第九章 代理的使用

#### 9.1.代理的设置

- response=request.get('http://xxx.;')

- Selenium同样是可以设置代理，包括两种方式：一种是有界面浏览器如Chrome；另一种是无界面浏览器如PhantomJS

#### 9.2.代理池的维护

- 存储模块、获取模块、检测模块、接口模块

- 存储模块使用Redis的有序集合，用来做代理的去重和状态标识，同时它也是中心模块和基础模块，将其他模块串联起来

- 获取模块定时从代理网站获取代理，将获取的代理传递给存储模块，并保存到数据库

- 检测模块定时通过存储模块获取所有代理，并对代理进行检测，根据不同的检测结果对代理设置不同的标识

- 接口模块通过Web API提供服务接口，接口通过连接数据库并通过Web形式返回可用的代理

#### 9.3.付费代理的使用

- 迅代理、阿布云代理

- 讯代理上可供选购的代理类别：优质代理、独享动态、独享秒切、动态混拨、优质定制

#### 9.4.ADSL拨号代理

- 代理池可以挑选出许多可用代理，但是常常其稳定性不高、响应速度慢

- 要追求更加稳定的代理，就需要购买专有代理或者自己搭建代理服务器

- ADSL非对称数字用户环路，它的上行和下行带宽不对称，采用频分复用技术把普通的电话线分成了电话、上行和下行3个相对独立的信道，从而避免了相互之间的干扰

- ADSL通过拨号的方式上网，需要输入ADSL账号和密码，每次拨号就更换一个IP

- 首先需要成功安装Redis数据库并启动服务，另外还需要安装requests、redis-py、Tornado库

- 要做的两件事：一是怎样将主机设置为代理服务器，二是怎样实时获取拨号主机的IP

- 设计的架构要考虑支持多主机的问题

- 数据库要做的就是定时对每台主机的代理进行更新，而更新时又需要拨号主机的唯一标识，根据主机标识查出这条数据，然后将这条数据对应的代理更新

#### 9.5.使用代理爬取微信公众号文章

### 第十章 模拟登录

- 实际是在客户端生成了Cookies。而Cookies里面保存了SessionID的信息，登录之后的后续请求都会携带生成后的Cookie发送给服务器

#### 10.1.模拟登录并爬取GitHub

- Headers里面包含了Cookies、Host、Origin、Referer、User-Agent等信息

- Form Data包含了5个字段，commit是固定的字符串Sign in，utf-8是一个勾选字符，authenticity_token较长，其初步判断是一个Base64加密的字符串，login是登录的用户名，password是登录的密码

- 访问登录页面要完成两件事：一是通过此页面获取初始的Cookies，而是提取出authenticity_token

#### 10.2.Cookies池的搭建

- 不登录直接爬取的一些弊端：1、设置了登录限制的页面无法爬取；2、一些页面和接口虽然可以直接请求，但是请求一旦频繁，访问就容易被限制或者IP直接被封

- Cookies池需要有自动生成Cookies、定时检测Cookies、提供随机Cookies等几大核心功能

- 思路：Cookies池中保存了许多账号和登录后的Cookies信息，并且Cookies池还需要定时检测每个Cookies的有效性，如果某Cookies无效，那就删除该Cookies并模拟登陆生成新的Cookies

- 存储模块负责存储每个账号的用户名密码以及每个账号对应的Cookies信息，同时还需要提供一些方法来实现方便的存取操作

- 生成模块负责生成新的Cookies。会从存储模块逐一拿取账号的用户名和密码，然后模拟登录目标页面，判断登陆成功，就将Cookies返回并交给存储模块存储

- 检测模块需要定时检测数据库中的Cookies。需要设置一个检测链接，不同的站点检测链接不同，检测模块会逐个拿取账号对应的Cookies去请求链接，如果返回的状态是有效的，那么此Cookies没有失效，否则Cookies失效并移除

- 接口模块需要用API来提供对外服务的接口。由于可用的Cookies可能有多个，可以随机返回Cookies的接口，这样保证每个Cookies都有可能被取到。Cookies越多，每个Cookies被取到的概率就会越小，从而减少被封号的风险

### 第十一章 App的爬取

- App的爬取相比Web端爬取更加容易，反爬虫能力没那么强，而且数据大多是以JSON形式传输，解析更加简单

- 常用的抓包软件有WireShark、Fiddler、Charles、mitmproxy、AnyProxy等，他们的原理基本是相同的

#### 11.1.Charles的使用

- 相比Fiddler来说，Charles的功能更强大，而且跨平台支持更好

#### 11.2.mitmproxy的使用

- mitmproxy是一个支持HTTP和HTTPS的抓包程序，有类似Fiddler、Charles的功能，只不过它是一个控制台的形式操作

- mitmproxy有如下几项功能：拦截HTTP和HTTPS请求和响应；保存HTTP会话并进行分析；模拟客户端发起请求，模拟服务器返回响应；利用反向代理将流量转发给指定的服务器；支持Mac和Linux上的透明代理；利用Python对HTTP请求和响应进行实时处理

- mitmproxy还提供了命令行式的编辑功能

- mitmproxy的强大之处体现在它的另一个工具mitmdump

#### 11.3.mitm爬取“得到”App电子书信息

#### 11.4.Appium的基本使用

- Appium是一个跨平台移动端自动化测试工具，可以非常便捷地为iOS和Android平台创建自动化测试用例

#### 11.5.Appium的基本使用

#### 11.6.Appium+mitmdump爬取京东商品

### 第十二章 pyspider框架的使用

#### 12.1.pyspider框架介绍

- 国人binux编写的强大网络爬虫系统

- 带有强大的WebUI、脚本编辑器、任务监控器、项目管理器、结果处理器

- 与scrapy的比较：提供了WebUI给编写和调试用；调试非常简便；支持PhantomJS来进行JavaScript渲染页面的采集；内置了pyquery作为选择器；可扩展程度不足；

- 如果要快速实现一个页面的抓取，推荐使用pyspider；如果要应对反爬程度很强、超大规模的抓取，推荐使用scrapy

- pyspider的架构主要分为Scheduler（调度器）、Fetcher（抓取器）、Processer（处理器）三个部分，整个爬取过程受到Monitor（监控器）的监控，抓取的结果被Result Worker（结果处理器）处理

- Scheduler发起任务调度，Fetcher负责抓取网页内容，Processer负责解析网页内容，然后将生成的Request发给Scheduler进行调度，将生成的提取结果输出保存

#### 12.2.pyspider的基本使用

#### 12.3.pyspider用法详解

### 第十三章 Scrapy框架的使用

#### 13.1.Scrapy框架介绍

- 基于Twisted的异步处理框架、功能强大爬取效率高，相关扩展组件多，可配置和可扩展高

#### 13.2.Scrapy入门

#### 13.3.Selector的用法

#### 13.4.Spider的用法

#### 13.5.Downloader Middleware的用法

#### 13.6.Spider Middleware的用法

#### 13.7.Item Pipeline的用法

#### 13.8.Scrapy对接Seleium

#### 13.9.Scripy对接Splash

#### 13.10.Scrapy通用爬虫

#### 13.11.Scrapyrt的使用

#### 13.12.Scrapy对接Docker

#### 13.13.Scrapy爬取新浪微博

### 第十四章 分布式爬虫

#### 准备工作、搭建Redis服务器、部署代理池和Cookie池、配置Scrapy-redis、配置存储目标、运行结果

#### 14.1.分布式爬虫原理

#### 14.2.Scrapy-Redis源码解析

#### 14.3.Scrapy分布式实现

#### 14.4.Bloom Filter的对接

### 第十五章 分布式爬虫的部署

#### 15.1.Scrapyd分布式部署

- Scrapyd提供一系列HTTP接口来帮助我们部署、启动、停止、删除爬虫程序，支持版本管理，可以管理多个爬虫任务

#### 15.2.Scrapyd-Client的使用

#### 15.3.Scrapyd对接Docker

#### 15.4.Scrapyd批量部署

#### 15.5.Gerapy分布式管理

- Gerapy是一个基于Scrapyd、Scrapyd API、Django、Vue搭建的分布式爬虫管理框架


### 写在后面
- pdf书籍、笔记思维导图、资料打包下载地址：暂无
- 思维导图在线查看：[点击打开](/bigdata_notes/attachment/C.《Python3网络爬虫开发实战》_崔庆才_201804.svg)
- 得到电子书地址：暂无