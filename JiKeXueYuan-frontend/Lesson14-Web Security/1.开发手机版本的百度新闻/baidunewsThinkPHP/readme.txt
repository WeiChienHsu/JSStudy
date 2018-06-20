1. 移动端百度新闻，后台使用ThinkPHP框架。

2. index.php为应用入口，指向BaiduNews首页；

3. 因为项目结构简单，只开放了三个模块用于访问：BaiduNews、BgManager和Login模块,如果访问其他路径直接404错误；

4. 数据库连接信息（包括用户名和密码）在：baidunewsThinkPHP\Application\Common\Conf\config.php；导出的数据库在根目录

XSS，SQL注入防御：
5. 默认的全局过滤，检查转义输入到服务器的字符：'DEFAULT_FILTER'=>'htmlspecialchars', // 默认参数过滤方法 由I函数执行...

CSRF防御：
6. 后台登录使用了验证码，使用session记录了登录状态

7. baidunews登录：http://localhost/baidunewsThinkPHP/
8. 后台登录：http://localhost/baidunewsThinkPHP/login
	user/mm:	admin/1234   
	user/mm:	user/user

9. 关于出现的问题的解决方案：
这个程序我在另外一台电脑也测试了，能打开，如果出现问题请执行以下操作。
1）将根目录的index.php中，这一行开启 define('APP_DEBUG',True);，进入debug模式。
2）清空application目录下runtime中的文件
3）登陆：http://localhost/baidunewsThinkPHP/Login/index/dologin查看返回信息，正常情况下只返回false。我当时只是发现了密码错误的提示信息～～改完就完美登录了。
js、ajax、thinkphp框架我没发现问题。

10.另外我在mac上进行xampp配置时，出现时出现了access forbidden的问题，当时按照这个网址的建议修复后就管用了
www.zhihu.com/question/19730130,希望能派上用场。



