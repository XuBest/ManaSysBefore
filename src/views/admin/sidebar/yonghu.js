

export default [
        {
        label:'我的信息管理',
        to:'',
        children:[
                        {
                label:'活动报名信息',
                to:'/admin/',
                /*label:'我的预定查询',
                to:'/admin/yuding_yudingren',*/
            },
            {
                label:'购票信息',
                to:'/admin/',
            },
            {
                label:'留言反馈信息',
                to:'/admin/liuyanban_liuyanren',
            },
                    ]
    },
        {
        label:'个人中心',
        to:'',
        children:[
                        {
                label:'修改个人资料',
                to:'/admin/yonghuupdtself',
            },
                        {
                label:'修改密码',
                to:'/admin/mod',
            },
                   /*     {
                label:'我的收藏',
                to:'/admin/shoucangjilu',
            },*/
                       
                    ]
    },
    ]
