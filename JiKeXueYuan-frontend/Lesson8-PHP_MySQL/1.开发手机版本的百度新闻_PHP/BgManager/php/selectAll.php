<?php
/**
 * Created by PhpStorm.
 * User: Hsiang
 * Date: 2015/9/17
 * Time: 22:57
 */

$table = test_input($_GET['table']);
//$table = "news_recommend";

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

//拼接的html语句
$stringID = <<<EOT
<div class="content-innerbox"><table class="table-position" border="1"><tbody><tr><td rowspan="4" scope="row" class="content-item-id" onclick="contentItemId(this)"><span class="itemid">
EOT;
//这里是id
$stringTitle = <<<LLK
</span></th><th class="context-item-title"><span class="fa fa-server"></span> 新闻标题</th><td class="context-item-contant1" colspan="3">
LLK;
//这里是新闻标题
$stringImgURL = <<<QWE
</td></tr><tr><th class="context-item-title"><span class="fa fa-image"></span> 图片地址</th><td class="context-item-contant1" colspan="3">
QWE;
//这里是图片地址    
$stringTime = <<<WER
</td></tr><tr><th class="context-item-title"><span class="fa fa-bars"></span> 新闻内容</th><td class="context-item-contant1" colspan="3">
WER;
//这里是新闻内容
$stringContant =<<<KIJ
    </td></tr><tr><th class="context-item-title"><span class="fa fa-calendar"></span> 新闻日期</th><td class="newsTime">
KIJ;
//这里是新闻时间
$stringFrom = <<<WDS
</td><th class="context-item-title"><span class="fa fa-cart-arrow-down"></span> 新闻来源</th><td class="newsFrom">
WDS;
//这里是新闻来源
$stringLast = <<<TYU
</td></tr></tbody></table></div>
TYU;

$con = mysql_connect("localhost:3306","root","1234");
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}else{
    mysql_select_db("baidunews",$con);
    mysql_query("set names 'utf8'");
    $sql = "SELECT * FROM `$table` order by `time` desc";
    $result = mysql_query($sql,$con);
        while($row = mysql_fetch_array($result)){
            
            $temp = $stringID.$row['id']
                .$stringTitle.$row['title']
                .$stringImgURL.$row['img_url']
                .$stringTime.$row['content']
                .$stringContant.$row['time']
                .$stringFrom.$row['from']
                .$stringLast;
            echo  $temp;
        }
    }
mysql_close($con);
?>