export const menus = [
    {key: '/app/dashboard/index', title: '首页', icon: 'cloud'},
    {
        key: '/app/ui', title: 'Ui', icon: 'appstore-o',
        sub: [
            {key: '/app/ui/buttons', title: '按钮', icon: 'database'},
            {key: '/app/ui/icons', title: '图标', icon: 'star'},
            {key: '/app/ui/loadings', title: '加载', icon: 'loading'},
            {key: '/app/ui/conversations', title: '对话框', icon: 'message'},
            {key: '/app/ui/notices', title: '通知提示栏', icon: 'phone'},
            {key: '/app/ui/tags', title: '标签页', icon: 'tag-o'},
            {key: '/app/ui/banners', title: '轮播图', icon: 'eye'},
            {key: '/app/ui/editors', title: '富文本', icon: 'solution'},
            {key: '/app/ui/draggable', title: '拖拽', icon: 'cloud-o'},
            {key: '/app/ui/galleries', title: '画廊', icon: 'camera'},
            {key: '/app/ui/maps', title: '地图', icon: 'environment'},
        ]
    },
    {
        key:'/app/animation',title:'动画',icon:'smile',
        sub:[
            {key: '/app/animation/basics', title: '基础动画', icon: 'meh'},
            {key: '/app/animation/cases', title: '动画案例', icon: 'meh-o'},
        ]
    },
    {
        key:'/app/table',title:'表格',icon:'table',
        sub:[
            {key: '/app/table/basic', title: '基础动画', icon: 'meh'},
            {key: '/app/table/cases', title: '动画案例', icon: 'meh-o'},
        ]
    },
    {
        key:'/app/form',title:'表单',icon:'form',
        sub:[
            {key: '/app/form/basic', title: '基础动画', icon: 'database'},
            {key: '/app/form/cases', title: '动画案例', icon: 'database'},
        ]
    }
]