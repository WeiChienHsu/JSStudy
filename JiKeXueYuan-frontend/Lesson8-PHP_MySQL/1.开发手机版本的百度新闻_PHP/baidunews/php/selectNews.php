<?php
/**
 * Created by PhpStorm.
 * User: Hsiang
 * Date: 2015/9/17
 * Time: 22:57
 */

$table = test_input($_GET['table']);
$offset = test_input($_GET['offset']);
$findNum = test_input($_GET['findNum']);
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

//拼接的html语句
$img_url = <<<EOT
<div class="newsInnerBox"><div class="newsInnerBox_img"><img src="
EOT;

$title = <<<GFG
"></div><div class="newsInnerBox_right"><div class="newsInnerBox_right_text"><div class="newsInnerBox_title">
GFG;
//中国约4亿人不能用普通话交流

$content = <<<WWW
</div><div class="newsInnerBox_content">
WWW;
//目前中国有70％的人口具备普通话应用能力，95％以上的识字人口使用规范汉字。

$time = <<<QQQ
</div></div></div><div class="newsInnerBox_time_from"><span class="newsInnerBox_time">
QQQ;
    
//32分钟前
 
$from = <<<DDD
</span><span class="newsInnerBox_from">
DDD;
    
//百度
 
$last = <<<LLL
</span></div></div>
LLL;





/**
 +----------------------------------------------------------
 * 字符串截取，支持中文和其他编码
 +----------------------------------------------------------
 * @static
 * @access public
 +----------------------------------------------------------
 * @param string $str 需要转换的字符串
 * @param string $start 开始位置
 * @param string $length 截取长度
 * @param string $charset 编码格式
 * @param string $suffix 截断显示字符
 +----------------------------------------------------------
 * @return string
 +----------------------------------------------------------
 */
function msubstr($str, $start, $length, $charset="utf-8", $suffix=true)
{
    if(function_exists("mb_substr")){
        $slice = mb_substr($str, $start, $length, $charset);
    }elseif(function_exists('iconv_substr')) {
        $slice = iconv_substr($str,$start,$length,$charset);
        if(false === $slice) {
            $slice = '';
        }
    }else{
        $re['utf-8']   = "/[\x01-\x7f]|[\xc2-\xdf][\x80-\xbf]|[\xe0-\xef][\x80-\xbf]{2}|[\xf0-\xff][\x80-\xbf]{3}/";
        $re['gb2312'] = "/[\x01-\x7f]|[\xb0-\xf7][\xa0-\xfe]/";
        $re['gbk']    = "/[\x01-\x7f]|[\x81-\xfe][\x40-\xfe]/";
        $re['big5']   = "/[\x01-\x7f]|[\x81-\xfe]([\x40-\x7e]|\xa1-\xfe])/";
        preg_match_all($re[$charset], $str, $match);
        $slice = join("",array_slice($match[0], $start, $length));
    }
    return $suffix ? $slice.'...' : $slice;
}


/**
 * 时间差计算
 *
 * @param Timestamp $time
 * @return String Time Elapsed
 * @author Shelley Shyan
 * @copyright http://phparch.cn (Professional PHP Architecture)
 */
function time2Units ($time)
{
   $year   = floor($time / 60 / 60 / 24 / 365);
   $time  -= $year * 60 * 60 * 24 * 365;
   $month  = floor($time / 60 / 60 / 24 / 30);
   $time  -= $month * 60 * 60 * 24 * 30;
   $week   = floor($time / 60 / 60 / 24 / 7);
   $time  -= $week * 60 * 60 * 24 * 7;
   $day    = floor($time / 60 / 60 / 24);
   $time  -= $day * 60 * 60 * 24;
   $hour   = floor($time / 60 / 60);
   $time  -= $hour * 60 * 60;
   $minute = floor($time / 60);
   $time  -= $minute * 60;
   $second = $time;
   $elapse = '';

   $unitArr = array('年'  =>'year', '个月'=>'month',  '周'=>'week', '天'=>'day',
                    '小时'=>'hour', '分钟'=>'minute', '秒'=>'second'
                    );
   foreach ( $unitArr as $cn => $u )
   {
       if ( $$u > 0 )
       {
           $elapse = $$u . $cn;
           break;
       }
   }
   return $elapse;
}

$con = mysql_connect("localhost:3306","root","1234");
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}else{
    mysql_select_db("baidunews",$con);
    mysql_query("set names 'utf8'");
    $sql = "SELECT * FROM `$table` order by `time` desc LIMIT $findNum OFFSET $offset";
//    echo $sql;
    $result = mysql_query($sql,$con);
        while($row = mysql_fetch_array($result)){
            //缩短content的字符长度
            $subContent = msubstr($row['content'],0,45);
            //设置时区
            date_default_timezone_set('PRC');
            //得到新闻时间
            $newstime = strtotime($row['time']);
            //当前时间
            $now  = time(); 
            $difftime = $now - $newstime;
            $beforeNow = time2Units($difftime) . '前';
            $temp = $img_url.$row['img_url']
                .$title.$row['title']
                .$content.$subContent
                .$time.$beforeNow
                .$from.$row['from']
                .$last;         
            echo  $temp;
        }
    }
mysql_close($con);
?>