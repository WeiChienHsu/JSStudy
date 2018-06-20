<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2014 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 常量	描述
// THINK_PATH	框架目录
// APP_PATH	应用目录
// RUNTIME_PATH	应用运行时目录（可写）
// APP_DEBUG	应用调试模式 （默认为false）
// STORAGE_TYPE	存储类型（默认为File）
// APP_MODE	应用模式（默认为common）
// 公共模块的位置可以通过COMMON_PATH常量改变

// 应用入口文件

// 检测PHP环境
if(version_compare(PHP_VERSION,'5.3.0','<'))  die('require PHP > 5.3.0 !');

// 开启调试模式 建议开发阶段开启 部署阶段注释或者设为false
// define('APP_DEBUG',True);

// 定义应用目录
define('APP_PATH','./Application/');

//定义BaiduNews前台新闻模块,rukou
// define('BIND_MODULE','BaiduNews');
// //定义BgManager后台管理模块
// define('BIND_MODULE','BgManager');
// //定义Login登录模块
// define('BIND_MODULE','Login');

// 引入ThinkPHP入口文件
require './ThinkPHP/ThinkPHP.php';

// 亲^_^ 后面不需要任何代码了 就是如此简单