<?php
namespace BgManager\Controller;
use Think\Controller;
class IndexController extends Controller {
    //返回主页面
    public function index(){
        
        //用户权限验证，
        $username =I('get.username','','string');
        
        if((session('AccessList_'.$username)==$username)&&(session('AccessList_'.$username)!=null)){
            //返回主页面
            $this->display('BgManager');
        }else{
            //返回登录面页
            $this->error('请登录~','/baidunewsThinkPHP/Login',3);
        }
        
       
    }
    
    //查找
    public function selectAll(){
        $table =I('post.table','','string');
        $news = M($table);
        $result = $news->order('time desc')->select();
        $this->ajaxReturn($result,'JSON');
    }   
    
    //增加
    public function insertItems(){
        $table =I('post.table','','string');
        $title =I('post.title','','number_int');
        $img_url =I('post.img_url','','url');
        $content =I('post.content','','string');
        $time =I('post.time');
        $from =I('post.from','','string');
        
        $news = M($table);
        if($news->create()){
            $result = $news->add();
        }
        //如果插入成功则resule为插入值的主键
        $this->ajaxReturn($result);
    }  
    
    //修改
    public function editItems(){
        //对输出进行过滤，并确定类型
        $table =I('post.table','','string');
        $id =I('post.id','','int');
        $title =I('post.title','','string');
        $img_url =I('post.img_url','','url');
        $content =I('post.content','','string');
        $time =I('post.time');
        $from =I('post.from','','string');
        
        $news = M($table);
        //根据表单提交的POST数据创建数据对象，自动
        $news->create();
        $result = $news->save();
        $this->ajaxReturn($result);
    }  
    
    //删除
    public function deleteItems(){
        $table =I('post.table','','string');
        $idsDel =I('post.idsDel','','int');

        $news = M($table);
        $result = $news->delete($idsDel);
        //返回删除条数
        $this->ajaxReturn($result);
    }  
    
    public function logout(){
        $username =I('post.username','','string');
        session('AccessList_'.$username,null);
        $this->ajaxReturn(TRUE);
    }
    
}