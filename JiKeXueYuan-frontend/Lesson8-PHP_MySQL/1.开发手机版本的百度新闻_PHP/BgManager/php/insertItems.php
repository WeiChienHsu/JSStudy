<?php
/**
 * Created by PhpStorm.
 * User: Hsiang
 * Date: 2015/9/17
 * Time: 22:57
 */

header("Content-type:application/json;charset=utf-8");

$table = test_input($_POST['table']);
$title = test_input($_POST['title']);
$img_url = test_input($_POST['img_url']);
$content = test_input($_POST['content']);
$time = test_input($_POST['time']);
$from = test_input($_POST['from']);

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
    $sql = "INSERT INTO `$table`(`title`, `img_url`, `content`, `from`, `time`) VALUES ('$title','$img_url','$content','$from','$time')";
    $result = mysql_query($sql,$con);
    if (!$result)
      {
      die('Error: ' . mysql_error());
      }else{
        echo $result;
        }
    }
mysql_close($con);
?>