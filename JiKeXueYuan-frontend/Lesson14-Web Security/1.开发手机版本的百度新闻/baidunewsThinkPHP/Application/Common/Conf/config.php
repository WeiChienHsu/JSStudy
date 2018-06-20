<?php
return array(
	//'配置项'=>'配置值'
	'DB_TYPE'               =>  'mysql',     // 数据库类型
    'DB_HOST'               =>  'localhost', // 服务器地址
    'DB_NAME'               =>  'baidunews',          // 数据库名
    'DB_USER'               =>  'root',      // 用户名
    'DB_PWD'                =>  '',          // 密码
    'DB_PORT'               =>  '3306',        // 端口
    'DB_PREFIX'             =>  '',    // 数据库表前缀,当前项目没有表前缀
	
	'DEFAULT_MODULE'        =>  'BaiduNews',  // 默认模块,直接进入
    
//      URL模式	URL_MODEL设置
//      普通模式	0
//      PATHINFO模式	1
//      REWRITE模式	2
//      兼容模式	3
	'URL_MODEL'             =>  1, 	// URL访问模式,可选参数0、1、2、3,代表以下四种模式：
    
    //禁止访问的模块,用于被其他模块调用或者不开放访问
    // 'MODULE_DENY_LIST'      =>  array('Common','Runtime','BgManager'),  // 设置禁止访问的模块列表
    
    // 设置访问列表
    // 'MODULE_ALLOW_LIST'    =>    array('BaiduNews','Login','BgManager'),
    //加入404面页
    'ERROR_PAGE'            =>  '/baidunewsThinkPHP/Public/404.html',	// 错误定向页面
    'SHOW_ERROR_MSG'        =>  false,    // 显示错误信息
   
);