## 任务 14: 熟悉网络安全以及React、ReactNative

### 1.完善百度新闻PHP或Node版本安全性漏洞

#### 要求：
* 完善百度新闻安全性漏洞，并新建文件readme.txt写好注释修改了哪些安全漏洞，写在了哪里有什么样的作用。

#### 备注：

内容包括：

1. 前端js代码使用requirejs进行模块化构建
2. 后端使用THinkPHP框架实现,一共完成了3个页面:移动版百度新闻首页, 后台登陆, 百度新闻后台管理.
3. 后端设置了XSS, CSRF防护,验证码和SQL注入预防
4. 设置session检测授权许可

进入须知：

1. 进入后台需要登录，用户名：admin；密码：1234
2. db登录，用户名：root；密码：
3. db在根目录中，数据库名-->baidunews
4. 主页：http://localhost/baidunewsThinkPHP/
5. 登陆页：http://localhost/baidunewsThinkPHP/login
