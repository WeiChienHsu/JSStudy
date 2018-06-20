<?php
namespace Login\Controller;
use Think\Controller;
class PublicController extends Controller{
    Public function verify(){
        $Image = new \Org\Util\Image;
        $Image::buildImageVerify();

    }
}