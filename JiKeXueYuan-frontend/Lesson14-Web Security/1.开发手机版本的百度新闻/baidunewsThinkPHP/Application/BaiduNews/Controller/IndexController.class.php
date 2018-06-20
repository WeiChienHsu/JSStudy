<?php
namespace BaiduNews\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        //显示
        $this->display('BaiduNews');
    }
    public function findAll(){
            //查找
        $table = I('post.table','','string');
        $findNum = I('post.findNum','','int');
        $offset = I('post.offset','','int');
        
        $news = M($table);
        $result = $news->order('time desc')->limit($offset,$findNum)->select();
        $this->ajaxReturn($result,'JSON');
    }
    
    
}