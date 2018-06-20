<?php
/**
 * Created by PhpStorm.
 * User: Hsiang
 * Date: 2015/9/17
 * Time: 22:57
 */

$username = test_input($_POST['username']);
$password = test_input($_POST['password']);


function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}


$con = mysql_connect("localhost:3306","root","1234");
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}else{
    mysql_select_db("baidunews",$con);
    mysql_query("set names 'utf8'");
    $sql = "SELECT  `user_name`, `user_password` FROM `user` WHERE `user_name`='$username' AND `user_password`='$password'";



    $result = mysql_query($sql,$con);

    if(!$row = mysql_fetch_array($result)){
        die('Could not find: ' . mysql_error());
    }else{
//        echo $row['user_name'] . " " . $row['user_password'];
        $data = true;
    }
}

echo $data;
mysql_close($con);
?>
