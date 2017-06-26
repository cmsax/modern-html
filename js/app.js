// 本人联系方式：cmsax@live.com
// js与css均已在GitHub开源

var week = new Array("日", "一", "二", "三", "四", "五", "六");
var weekday = '周' + week[new Date().getDay()];
var date = new Date().getDate();
var app1 = new Vue(
    {
        el: '#calender',
        data: {
            weekday: weekday,
            date: date,
            cap: '日历',
            content: '好好学技术，不要玩游戏。'
        }
    }
);

var todos = [
    { item: '学习数学' },
    { item: '学习钱端' },
    { item: '开发英语语言处理功能' },
    { item: '记单词' },
    { item: '练习Python可视化技术' },
    { item: '练习ECharts' },
    { item: '学习机器学习' },
];

Vue.component(
    'todo-item',
    {
        props: ['todo'],
        template: '<li>{{todo.item}}</li>'
    }
);

var app2 = new Vue(
    {
        el: '#todolist',
        data: {
            todos: todos,
            cap: 'ToDo-List'
        }
    }
);

var blog = new Vue(
    {
        el: '#blog',
        data: {
            url: 'http://www.unoiou.com/blog',
            cap: 'Blog System',
            icon: ''
        }
    }
);

var github = new Vue(
    {
        el: '#github',
        data: {
            url: 'https://github.com/cmsax',
            cap: 'GitHub'
        }
    }
);
var weibo = new Vue(
    {
        el: '#weibo',
        data: {
            url: 'https://www.weibo.com/cmsax',
            cap: 'Weibo'
        }
    }
);
var dollar = new Vue(
    {
        el: '#dollar',
        data: {
            url: 'http://www.unoiou.com/domain',
            cap: 'Domain'
        }
    }
);
var logging = new Vue(
    {
        el: '#logging',
        data: {
            cap: 'Loading...'
        }
    }
);
var msmstech = new Vue(
    {
        el: '#msmstech',
        data: {
            url: 'http://msms.tech',
            cap: '大微软国'
        }
    }
);
var microsoft = new Vue(
    {
        el: '#microsoft',
        data: {
            url: 'http://microsoft.com',
            cap: '微软中国'
        }
    }
);
var library = new Vue(
    {
        el: '#library',
        data: {
            url: 'http://www.lib.whu.edu.cn',
            cap: '图书馆'
        }
    }
);
var whu = new Vue(
    {
        el: '#whu',
        data: {
            url: 'http://www.whu.edu.cn',
            cap: '武汉大学'
        }
    }
);
var c9 = new Vue(
    {
        el: '#c9',
        data: {
            url: 'http://channel9.msdn.com',
            cap: 'Channel 9'
        }
    }
);
var msra = new Vue(
    {
        el: '#msra',
        data: {
            url: 'http://www.msra.cn',
            cap: 'MSRA'
        }
    }
);
var onedrive = new Vue(
    {
        el: '#onedrive',
        data: {
            url: 'https://onedrive.live.com',
            cap: 'OneDrive'
        }
    }
);
var outlook = new Vue(
    {
        el: '#outlook',
        data: {
            url: 'https://outlook.com',
            cap: 'Outlook'
        }
    }
);
var qiniu = new Vue(
    {
        el: '#qiniu',
        data: {
            url: 'https://qiniu.com',
            cap: 'Qiniu'
        }
    }
);
var tower = new Vue(
    {
        el: '#tower',
        data: {
            url: 'https://tower.im',
            cap: 'Tower'
        }
    }
);
var motto = new Vue(
    {
        el: '#motto',
        data: {
            cap: 'unoiou.com',
            title: 'Copyright',
            content: '道不行，乘桴浮于海。'
        }
    }
);