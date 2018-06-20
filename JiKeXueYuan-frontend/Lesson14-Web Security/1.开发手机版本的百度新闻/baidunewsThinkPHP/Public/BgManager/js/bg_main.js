requirejs.config({
    baseUrl: '/baidunewsThinkPHP/Public/BgManager/js',
    paths: {
        bg_main: 'bg_main',
        jquery: 'lib/jquery.min',

        findTableName: 'basic/findTableName',
        findRightItem: 'basic/findRightItem',
        convert2table: 'basic/convert2table',
        convert2selected: 'basic/convert2selected',
        calculateSelectedNum: 'basic/calculateSelectedNum',
        createInnerBoxFragment: 'findAll/createInnerBoxFragment',

        additems: 'add/additems',
        findAll: 'findAll/findAll',
        deleteitems: 'delete/deleteitems',
        edititems: 'edit/edititems',

        leftBarSelected: 'basic/leftBarSelected',
        
        getUrlParam:'basic/getUrlParam',
        
        quit: 'quit/quit'
    }
});

//主入口
requirejs(['jquery', 'additems', 'findAll', 'deleteitems', 'edititems', 'leftBarSelected','quit'], function($, additems, findAll, deleteitems, edititems, leftBarSelected,quit) {
    //开始载入--->推荐 
    $(document).ready(function() {
        var table = "news_recommend";
        findAll(table);
    });
    //添加新闻-模块,返回全部功能
    additems;
    //删除新闻-模块,返回全部功能
    deleteitems;
    //修改新闻-模块，,返回全部功能
    edititems;
    //左侧栏目选择事件
    leftBarSelected;
    //退出
    quit;
    
});