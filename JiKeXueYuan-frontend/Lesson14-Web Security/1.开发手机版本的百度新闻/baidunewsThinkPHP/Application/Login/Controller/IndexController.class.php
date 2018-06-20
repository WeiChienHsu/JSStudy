<?php
namespace Login\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        //输出登陆界面
        $this->display("login");
    }
    //登录验证
    public function doLogin(){
        
        //使用I函数过滤，username的类型是string,无默认值
        $username = I('post.username','','string');
        $password = I('post.password','','string');
        // $verify = $_POST['verify'];
        $verify = I('post.verify','','string');;

        $User = M('user');
        $condition['user_name'] = $username;
        $condition['user_password'] = $password;
        $result = $User->where($condition)->select();
        
        //session中存放了验证码的信息
        if(session('verify') != md5($verify)) {
            $this->ajaxReturn(FALSE);
          }
        
        // 如果有数据$result[0]=1；否则为null
        if(!$result[0]){
            $this->ajaxReturn(FALSE);
        }else{
            //登陆成功后分配一个session:用户名_AccessKey:用户名和密码的MD5值
            session('AccessList_'.$username,$username);
            $this->ajaxReturn(TRUE);
            
        }
    }

}