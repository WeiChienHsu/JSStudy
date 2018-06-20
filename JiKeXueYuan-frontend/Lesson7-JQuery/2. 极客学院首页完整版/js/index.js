var flag;

    //---输入框变化----
    $("input").focus(function(){
        $(".hot-words").css("display","none");
    });
    
    $("input").blur(function(){
        $(".hot-words").css("display","block");
    });
    
    //----右侧浮动广告关闭-------------
    $("#ad1Close").click(function(){
        $(".ad1").css("visibility","hidden");
    });
    $("#ad2Close").click(function(){
        $(".ad2").css("visibility","hidden");
    });

    //----返回最前面的按钮-------------
    $(window).scroll(function(){
        if($(window).scrollTop()>=300){
            $(".ad3s.add31").css("visibility","visible");
        }else{
            $(".ad3s.add31").css("visibility","hidden");
        }
    });

  
    $(".ad3s.add31").click(function(){
        var timeCrol = setInterval(function(){
                $(window).scrollTop($(window).scrollTop()-100);
                if($(window).scrollTop()==0){
                    clearInterval(timeCrol);   
                }
            },10);
    });
    

     //热门推荐Box-----------------------
    $("#hotreconmend").mouseenter(function(){
        $(".hotlessionbox.hotlessionboxFocus").removeClass("hotlessionboxFocus");
        $("#hotreconmend").addClass("hotlessionboxFocus");
        $(".hot-lessionbox.hot-lessionbox-focus").removeClass("hot-lessionbox-focus");
        $("#hotreconmendBox").addClass("hot-lessionbox-focus");
    });
    $("#newCourse").mouseenter(function(){
        $(".hotlessionbox.hotlessionboxFocus").removeClass("hotlessionboxFocus");
        $("#newCourse").addClass("hotlessionboxFocus");
        
        $(".hot-lessionbox.hot-lessionbox-focus").removeClass("hot-lessionbox-focus");
        $("#newCourseBox").addClass("hot-lessionbox-focus");
    });
    $("#freeCourse").mouseenter(function(){
        $(".hotlessionbox.hotlessionboxFocus").removeClass("hotlessionboxFocus");
        $("#freeCourse").addClass("hotlessionboxFocus");
        
        $(".hot-lessionbox.hot-lessionbox-focus").removeClass("hot-lessionbox-focus");
        $("#freeCourseBox").addClass("hot-lessionbox-focus");
    });
    $("#projectDoit").mouseenter(function(){
        $(".hotlessionbox.hotlessionboxFocus").removeClass("hotlessionboxFocus");
        $("#projectDoit").addClass("hotlessionboxFocus");
        
        $(".hot-lessionbox.hot-lessionbox-focus").removeClass("hot-lessionbox-focus");
        $("#projectDoitBox").addClass("hot-lessionbox-focus");
    });
    $("#globalPu").mouseenter(function(){
        $(".hotlessionbox.hotlessionboxFocus").removeClass("hotlessionboxFocus");
        $("#globalPu").addClass("hotlessionboxFocus");
        
        $(".hot-lessionbox.hot-lessionbox-focus").removeClass("hot-lessionbox-focus");
        $("#globalPuBox").addClass("hot-lessionbox-focus");
    });
    $("#enterpriseCo").mouseenter(function(){
        $(".hotlessionbox.hotlessionboxFocus").removeClass("hotlessionboxFocus");
        $("#enterpriseCo").addClass("hotlessionboxFocus");
        
        $(".hot-lessionbox.hot-lessionbox-focus").removeClass("hot-lessionbox-focus");
        $("#enterpriseCoBox").addClass("hot-lessionbox-focus");
    });
    
    //---------------主页轮播 start---------------------
    //自动轮播
    setInterval(function(){
        var imgBoxSize = $(".imgBox").size();
        var currImgBoxIndex = $(".imgBox.currSlider").index();
        if((currImgBoxIndex+1)==imgBoxSize){
            var targetImgBox = $(".imgBox").first();   
        }else{
            var targetImgBox = $(".imgBox.currSlider").next();   
        }
        siliderToTarget(targetImgBox);
    },6000);

    //左侧  
    $("#leftSidebar").click(function(){
        var imgBoxSize = $(".imgBox").size();
        var currImgBoxIndex = $(".imgBox.currSlider").index();
        if((currImgBoxIndex+1)==imgBoxSize){
            var targetImgBox = $(".imgBox").first();   
        }else{
            var targetImgBox = $(".imgBox.currSlider").next();   
        }
        siliderToTarget(targetImgBox);
    });     
    
    //右侧
    $("#rightSidebar").click(function(){
        var currImgbox = $(".imgBox.currSlider");
        var currImgBoxIndex = currImgbox.index();
        if(currImgBoxIndex==0){
            var targetImgBox = $(".imgBox").last();   
        }else{
            var targetImgBox = $(".imgBox.currSlider").prev();   
        }
        siliderToTarget(targetImgBox);
    });  
    
    //下部6个按钮
    $("#bottonBarInner1").click(function(){
        var index = $("#bottonBarInner1").index();
        var targetImgBox = $(".imgBox").eq(index);
        siliderToTarget(targetImgBox);
    });
    $("#bottonBarInner2").click(function(){
        var index = $("#bottonBarInner2").index();
        var targetImgBox = $(".imgBox").eq(index);
        siliderToTarget(targetImgBox);
    });
    $("#bottonBarInner3").click(function(){
        var index = $("#bottonBarInner3").index();
        var targetImgBox = $(".imgBox").eq(index);
        siliderToTarget(targetImgBox);
    });
    $("#bottonBarInner4").click(function(){
        var index = $("#bottonBarInner4").index();
        var targetImgBox = $(".imgBox").eq(index);
        siliderToTarget(targetImgBox);
    });
    $("#bottonBarInner5").click(function(){
        var index = $("#bottonBarInner5").index();
        var targetImgBox = $(".imgBox").eq(index);
        siliderToTarget(targetImgBox);
    });
    $("#bottonBarInner6").click(function(){
        var index = $("#bottonBarInner6").index();
        var targetImgBox = $(".imgBox").eq(index);
        siliderToTarget(targetImgBox);
    });


//--------------合作企业----------------
$("#enterpriseLeftBar").click(function(){
    var all = $(".entermedia");
    var selected = $(".entermedia.selectedMedia");
    var move = 159;
    var newCommer = 954;
    leftMediaBarClick(all,selected,move,newCommer);
});
  
$("#enterpriseRightBar").click(function(){
    var all = $(".entermedia");
    var selected = $(".entermedia.selectedMedia");
    var move = 159;
    var newCommer = -159;
    rightMediaBarClick(all,selected,move,newCommer);
});


//--------------合作院校----------------
$("#univerLeftBar").click(function(){
    var all = $(".univermedia");
    var selected = $(".univermedia.selectedMedia");
    var move = 137;
    var newCommer = 954;
    leftMediaBarClick(all,selected,move,newCommer);
});
  
$("#univerRightBar").click(function(){
    var all = $(".univermedia");
    var selected = $(".univermedia.selectedMedia");
    var move = 137;
    var newCommer = -137;
    rightMediaBarClick(all,selected,move,newCommer);
});



//--------------媒体报道----------------
$("#mediaLeftBar").click(function(){
    //
    var all = $(".media");
    var selected = $(".media.selectedMedia");
    var move = 159;
    var newCommer = 954;
    leftMediaBarClick(all,selected,move,newCommer);
});
  
$("#mediaRightBar").click(function(){
    var all = $(".media");
    var selected = $(".media.selectedMedia");
    var move = 159;
    var newCommer = -159;
    rightMediaBarClick(all,selected,move,newCommer);
});
     


//---------------函数实现部分---------------------

function innBoxMouseenter(){
    if(flag==0){
//             console.log("mouseenter还未结束");
            return 
        }
    flag = 0;
    $(".InnBoxImgBlack").fadeIn();

    $(".innBox").css("z-index","400");
    
    $(".innStateLearnPeo").slideDown(function(){
            $(".innStateLearnPeo").addClass("innBoxSelected");
    });
    
    $(".innStateLevel").slideDown(function(){
            $(".innStateLevel").addClass("innBoxSelected");
    });
    
    $(".innSubTitle").slideDown(function(){
            $(".innSubTitle").addClass("innBoxSelected");
    }); 
}


function innBoxMouseleave(){
    $(".InnBoxImgBlack").fadeOut();
    
    $(".innStateLearnPeo").slideUp(function(){
            $(".innStateLearnPeo").removeClass("innBoxSelected"); 
        });
    $(".innStateLevel").slideUp(function(){
            $(".innStateLevel").removeClass("innBoxSelected");
        });
    $(".innSubTitle").slideUp(function(){
            $(".innSubTitle").removeClass("innBoxSelected");
            $(".innBox").css("z-index",0);
//    console.log("mouse结束");
    
        flag = 1;
        });
    
}


//---------------主页轮播 over---------------------
    
    function siliderToTarget(targetImgBox){
        if(flag==0){
             //console.log("还未结束");
            return 
        }
        flag = 0;
        var imgBoxSize = $(".imgBox").size();
        var currImgbox = $(".imgBox.currSlider");
        var currImgBoxIndex = currImgbox.index();
        var targetImgBoxIndex = targetImgBox.index();
        $(".bottonBarInner.currBottonbar").removeClass("currBottonbar");
        $(".bottonBarInner").eq(targetImgBoxIndex).addClass("currBottonbar");
        
    //right
        if(currImgBoxIndex>targetImgBoxIndex){
            var prev = currImgbox.prev();
            currImgbox.animate({left:"570px"});
            targetImgBox.css({"left":-570});
            targetImgBox.addClass("currSlider");
            targetImgBox.animate({left:"0"});
            setTimeout(function(){
                currImgbox.removeClass("currSlider");
                flag = 1;
            },500);
        }
        //left
        if(currImgBoxIndex<targetImgBoxIndex){
            var next = currImgbox.next();
            currImgbox.animate({left:"-570px"});
            targetImgBox.css({"left":570});
            targetImgBox.addClass("currSlider");
            targetImgBox.animate({left:"0"});
            setTimeout(function(){
                currImgbox.removeClass("currSlider");
                flag = 1;
            },500);
        }
    } 

//------------------------------
//注意：
//此函数用于处理多画面轮播的展示每点击一次移动一个广告位
//函数分为左右两个按钮部分，按钮自行添加
//需要将展播的图片设为relative及先期top，left定位
//被激活的类名设为selectedMedia
//all:全部集合
//selected:被激活的集合
//move:单次点击移动距离
//newCommer:新元素起始位置
function leftMediaBarClick(all,selected,move,newCommer){
    if(flag==0){
        //console.log("还未结束");
        return 
    }
    flag = 0;
    //找到头尾
    if(!all.eq(0).is(selected)){
        if(all.last().is(selected)){
            var head = selected.first();
            var last = selected.last();
            //走到了末尾
            all.first().addClass("selectedMedia");
            last = all.first();
            last.css({left:newCommer});
            //多出来的那个单独设置
            var leftValue = last.position().left-move;
            last.animate({left:(leftValue+"px")});
            var segmentstart = head;
            for(var i = 0;i<selected.size();i++){
                var leftValue = segmentstart.position().left-move;
                segmentstart.animate({left:(leftValue+"px")});
                segmentstart = segmentstart.next();
            }
            setTimeout(function(){
                head.removeClass("selectedMedia");
                flag = 1;
            },500);
            return;
            
        }else{
            //alert("走到了中间");
            var head = selected.first();
            var last = selected.last();
            last = last.next();
            last.addClass("selectedMedia");
            selected = selected.add(last);
            last.css({left:newCommer});
            var segmentstart = selected.first();
            for(var i = 0;i<selected.size();i++){
                var leftValue = segmentstart.position().left-move;
                segmentstart.animate({left:(leftValue+"px")});
                segmentstart = segmentstart.next();
            }
            setTimeout(function(){
                head.removeClass("selectedMedia");
                flag = 1;
            },500);  
            return;
        } 
    }
    if(all.eq(0).is(selected)){
        if(!all.last().is(selected)){
            var head = selected.first();
            var last = selected.last();
            //最开始的时候
            last = last.next();
            last.addClass("selectedMedia");
            selected = selected.add(last);
            last.css({left:newCommer});  
            var segmentstart = selected.first();
            for(var i = 0;i<selected.size();i++){
                var leftValue = segmentstart.position().left-move;
                segmentstart.animate({left:(leftValue+"px")});
                segmentstart = segmentstart.next();
            }   
            setTimeout(function(){
                head.removeClass("selectedMedia");
                flag = 1;
            },500);
            return;   
        }else{
            //alert("开始分层");
            var h =all.last();
            var r = 0;
            while(h.is(selected)){
                h = h.prev();
                r++;
            }
            var head = h.next();
            var segmentstart = all.last();
            for(var i = 0;i<r;i++){
                var leftValue = segmentstart.position().left-move;
                segmentstart.animate({left:(leftValue+"px")});
                segmentstart = segmentstart.prev();
            }      
            r = 0
            h = all.first();
            while(h.is(selected)){
                r++;
                h = h.next();
            }
            var last = h; 
            last.addClass("selectedMedia");
            r++;
            selected = selected.add(last);
            last.css({left:newCommer});
            
            var segmentstart = all.first();
            for(var i = 0;i<r;i++){  
                var leftValue = segmentstart.position().left-move;
                segmentstart.animate({left:(leftValue+"px")});
                segmentstart = segmentstart.next();  
            }       
            setTimeout(function(){
                head.removeClass("selectedMedia");
                flag = 1;
            },500);
            return;      
        }
    }   
}
//------------------------------------
//all:全部集合
//selected:被激活的集合
//move:单次点击移动距离
//newCommer:新元素起始位置 
function rightMediaBarClick(all,selected,move,newCommer){  
    if(flag==0){
        //console.log("还未结束");
        return 
    }
    flag = 0;
    //找到头尾
    if(!all.eq(0).is(selected)){
        if(all.last().is(selected)){
            var last = selected.first();
            var head = selected.last();
            //2最开始的时候
            //alert("最开始的时候");
            last = last.prev();
            last.addClass("selectedMedia");
            selected = selected.add(last);
            last.css({left:newCommer});  
            var segmentstart = selected.first();
            for(var i = 0;i<selected.size();i++){  
                var leftValue = segmentstart.position().left+move;
                segmentstart.animate({left:(leftValue+"px")});
                segmentstart = segmentstart.next();     
            }           
            setTimeout(function(){
                head.removeClass("selectedMedia");
                flag = 1;
            },500);
            return;
        }else{
            //alert("走到了中间");
            var last = selected.first();
            var head = selected.last();
            last = last.prev();
            last.addClass("selectedMedia");
            selected = selected.add(last);
            last.css({left:newCommer});
            var segmentstart = selected.first();
            for(var i = 0;i<selected.size();i++){
                var leftValue = segmentstart.position().left+move;
                segmentstart.animate({left:(leftValue+"px")});
                segmentstart = segmentstart.next();
            }
            setTimeout(function(){
                head.removeClass("selectedMedia");
                flag = 1;
            },500);  
            return;
        } 
    }
    if(all.eq(0).is(selected)){
        if(!all.last().is(selected)){
            var head = selected.first();
            var last = selected.last();
            //alert("走到了末尾");
            //1走到了末尾
            all.last().addClass("selectedMedia");
            head = all.last();
            head.css({left:newCommer});
            selected = selected.add(head);
            //多出来的那个单独设置
            var leftValue = head.position().left+move;
            head.animate({left:(leftValue+"px")});
            var segmentstart = selected.first();
            for(var i = 1;i<selected.size();i++){
                var leftValue = segmentstart.position().left+move;
                segmentstart.animate({left:(leftValue+"px")});
                segmentstart = segmentstart.next();
            }
            setTimeout(function(){
                last.removeClass("selectedMedia");
                flag = 1;
            },500);
            return;   
        }else{
            //alert("开始分层");
            var h =all.last();
            var r = 0;
            while(h.is(selected)){
                
                h = h.prev();
                r++;
            }
            var last = h;     
            last.addClass("selectedMedia");
            r++;
            selected = selected.add(last);
            last.css({left:newCommer});           
            var segmentstart = all.last();
            for(var i = 0;i<r;i++){
                var leftValue = segmentstart.position().left+move;
                segmentstart.animate({left:(leftValue+"px")});
                segmentstart = segmentstart.prev();
            }               
            r = 0
            h = all.first();
            while(h.is(selected)){
                r++;
                h = h.next();
            }
            var head = h.prev(); 
            var segmentstart = all.first();
            for(var i = 0;i<r;i++){  
                var leftValue = segmentstart.position().left+move;
                selected.eq(i).animate({left:(leftValue+"px")});
                segmentstart = segmentstart.next();  
            }       
            setTimeout(function(){
                head.removeClass("selectedMedia");
                flag = 1;
            },500);
            return;      
        }
    }   
}
//------------------------------------
