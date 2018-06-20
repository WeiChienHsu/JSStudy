define([], function() {
    //计算选中的新闻数目，在 推荐 旁边。
    function getUrlParam(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null){
            return unescape(r[2]);
        }   
        return null; 
    }
    return getUrlParam;
});