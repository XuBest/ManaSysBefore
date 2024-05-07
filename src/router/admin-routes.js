import store from '@/store';

export default [ 
{
    path: 'pay',
        name: 'AdminPay',
    component: () => import('@/views/zhifu/zhifu'),
    meta: {authLogin: true},
},
 
{
    path: 'shoucangjilu',
        name: 'Adminshoucangjilu',
    component: () => import('@/views/shoucangjilu/list'),
    meta: {authLogin: true},
},

{
    path:"admins",
        name:"AdminadminsList",
    component: () => import("@/views/admins/list"),
    meta: { title:"管理员列表",authLogin:true }
},
{
    path:"adminsadd",
        name:"AdminadminsAdd",
    component: () => import("@/views/admins/add"),
    meta: { title:"添加管理员",authLogin:true }
},
{
    path:"adminsupdt",
        name:"AdminadminsUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/admins/updt"),
    meta: { title:"编辑管理员",authLogin:true }
},
{
    path:"adminsupdtself",
        name:"AdminadminsUpdtSelf",
    props:route=>({id:store.state.user.session.id}),
    component: () => import("@/views/admins/updt"),
    meta: { title:"编辑管理员",authLogin:true }
},
{
    path:"yonghu",
        name:"AdminyonghuList",
    component: () => import("@/views/yonghu/list"),
    meta: { title:"用户列表",authLogin:true }
},
{
    path:"yonghuadd",
        name:"AdminyonghuAdd",
    component: () => import("@/views/yonghu/add"),
    meta: { title:"添加用户",authLogin:true }
},
{
    path:"yonghuupdt",
        name:"AdminyonghuUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/yonghu/updt"),
    meta: { title:"编辑用户",authLogin:true }
},
{
    path:"yonghuupdtself",
        name:"AdminyonghuUpdtSelf",
    props:route=>({id:store.state.user.session.id}),
    component: () => import("@/views/yonghu/updt"),
    meta: { title:"编辑用户",authLogin:true }
},
{
    path:"xinwenfenlei",
        name:"AdminxinwenfenleiList",
    component: () => import("@/views/xinwenfenlei/list"),
    meta: { title:"新闻分类列表",authLogin:true }
},
{
    path:"xinwenfenleiadd",
        name:"AdminxinwenfenleiAdd",
    component: () => import("@/views/xinwenfenlei/add"),
    meta: { title:"添加新闻分类",authLogin:true }
},
{
    path:"xinwenfenleiupdt",
        name:"AdminxinwenfenleiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/xinwenfenlei/updt"),
    meta: { title:"编辑新闻分类",authLogin:true }
}, 
{
    path:"xinwenxinxi",
        name:"AdminxinwenxinxiList",
    component: () => import("@/views/xinwenxinxi/list"),
    meta: { title:"新闻信息列表",authLogin:true }
},
{
    path:"xinwenxinxi_tianjiaren",
        name:"AdminxinwenxinxiListtianjiaren",
    component: () => import("@/views/xinwenxinxi/list-tianjiaren"),
    meta: { title:"新闻信息列表",authLogin:true }
},
{
    path:"xinwenxinxiadd",
        name:"AdminxinwenxinxiAdd",
    component: () => import("@/views/xinwenxinxi/add"),
    meta: { title:"添加新闻信息",authLogin:true }
},
{
    path:"xinwenxinxiupdt",
        name:"AdminxinwenxinxiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/xinwenxinxi/updt"),
    meta: { title:"编辑新闻信息",authLogin:true }
},
{
    path:"xinwenxinxidetail",
        props:route=>({id:route.query.id}),
    name:"AdminxinwenxinxiDetail",
    component: () => import("@/views/xinwenxinxi/detail"),
    meta: { title:"新闻信息详情",authLogin:true }
},

{
    path:"noticeboard",
        name:"AdminnoticeboardList",
    component: () => import("@/views/noticeboard/list"),
    meta: { title:"公告信息列表",authLogin:true }
},
{
    path:"noticeboard_adder",
        name:"AdminnoticeboardListadder",
    component: () => import("@/views/noticeboard/list-adder"),
    meta: { title:"公告信息列表",authLogin:true }
},
{
    path:"noticeboardadd",
        name:"AdminnoticeboardAdd",
    component: () => import("@/views/noticeboard/add"),
    meta: { title:"添加公告信息",authLogin:true }
},
{
    path:"noticeboardupdt",
        name:"AdminnoticeboardUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/noticeboard/updt"),
    meta: { title:"编辑公告信息",authLogin:true }
},
{
    path:"noticeboarddetail",
        props:route=>({id:route.query.id}),
    name:"AdminnoticeboardDetail",
    component: () => import("@/views/noticeboard/detail"),
    meta: { title:"公告详情",authLogin:true }
},

{
    path:"youqinglianjie",
        name:"AdminyouqinglianjieList",
    component: () => import("@/views/youqinglianjie/list"),
    meta: { title:"友情链接列表",authLogin:true }
},
{
    path:"youqinglianjieadd",
        name:"AdminyouqinglianjieAdd",
    component: () => import("@/views/youqinglianjie/add"),
    meta: { title:"添加友情链接",authLogin:true }
},
{
    path:"youqinglianjieupdt",
        name:"AdminyouqinglianjieUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/youqinglianjie/updt"),
    meta: { title:"编辑友情链接",authLogin:true }
},
{
    path:"liuyanban",
        name:"AdminliuyanbanList",
    component: () => import("@/views/liuyanban/list"),
    meta: { title:"留言板列表",authLogin:true }
},
{
    path:"liuyanban_liuyanren",
        name:"AdminliuyanbanListliuyanren",
    component: () => import("@/views/liuyanban/list-liuyanren"),
    meta: { title:"留言板列表",authLogin:true }
},
{
    path:"liuyanbanadd",
        name:"AdminliuyanbanAdd",
    component: () => import("@/views/liuyanban/add"),
    meta: { title:"添加留言板",authLogin:true }
},
{
    path:"liuyanbanupdt",
        name:"AdminliuyanbanUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/liuyanban/updt"),
    meta: { title:"编辑留言板",authLogin:true }
},
{
    path:"liuyanbandetail",
        props:route=>({id:route.query.id}),
    name:"AdminliuyanbanDetail",
    component: () => import("@/views/liuyanban/detail"),
    meta: { title:"留言板详情",authLogin:true }
},
{
    path:"lunbotu",
        name:"AdminlunbotuList",
    component: () => import("@/views/lunbotu/list"),
    meta: { title:"轮播图列表",authLogin:true }
},
{
    path:"lunbotuadd",
        name:"AdminlunbotuAdd",
    component: () => import("@/views/lunbotu/add"),
    meta: { title:"添加轮播图",authLogin:true }
},
{
    path:"lunbotuupdt",
        name:"AdminlunbotuUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/lunbotu/updt"),
    meta: { title:"编辑轮播图",authLogin:true }
},
{
    path:"jingdianxinxi",
        name:"AdminjingdianxinxiList",
    component: () => import("@/views/jingdianxinxi/list"),
    meta: { title:"景点信息列表",authLogin:true }
},
{
    path:"jingdianxinxiadd",
        name:"AdminjingdianxinxiAdd",
    component: () => import("@/views/jingdianxinxi/add"),
    meta: { title:"添加景点信息",authLogin:true }
},
{
    path:"jingdianxinxiupdt",
        name:"AdminjingdianxinxiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/jingdianxinxi/updt"),
    meta: { title:"编辑景点信息",authLogin:true }
},
{
    path:"jingdianxinxidetail",
        props:route=>({id:route.query.id}),
    name:"AdminjingdianxinxiDetail",
    component: () => import("@/views/jingdianxinxi/detail"),
    meta: { title:"景点信息详情",authLogin:true }
},
{
    path:"diqu",
        name:"AdmindiquList",
    component: () => import("@/views/diqu/list"),
    meta: { title:"地区列表",authLogin:true }
},
{
    path:"diquadd",
        name:"AdmindiquAdd",
    component: () => import("@/views/diqu/add"),
    meta: { title:"添加地区",authLogin:true }
},
{
    path:"diquupdt",
        name:"AdmindiquUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/diqu/updt"),
    meta: { title:"编辑地区",authLogin:true }
},
{
    path:"lvyouxianlu",
        name:"AdminlvyouxianluList",
    component: () => import("@/views/lvyouxianlu/list"),
    meta: { title:"旅游线路列表",authLogin:true }
},
{
    path:"lvyouxianluadd",
        name:"AdminlvyouxianluAdd",
    component: () => import("@/views/lvyouxianlu/add"),
    meta: { title:"添加旅游线路",authLogin:true }
},
{
    path:"lvyouxianluupdt",
        name:"AdminlvyouxianluUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/lvyouxianlu/updt"),
    meta: { title:"编辑旅游线路",authLogin:true }
},
{
    path:"lvyouxianludetail",
        props:route=>({id:route.query.id}),
    name:"AdminlvyouxianluDetail",
    component: () => import("@/views/lvyouxianlu/detail"),
    meta: { title:"旅游线路详情",authLogin:true }
},
{
    path:"yuding",
        name:"AdminyudingList",
    component: () => import("@/views/yuding/list"),
    meta: { title:"预定列表",authLogin:true }
},
{
    path:"yuding_yudingren",
        name:"AdminyudingListyudingren",
    component: () => import("@/views/yuding/list-yudingren"),
    meta: { title:"预定列表",authLogin:true }
},
{
    path:"yudingadd",
        name:"AdminyudingAdd",
    component: () => import("@/views/yuding/add"),
    meta: { title:"添加预定",authLogin:true }
},
{
    path:"yudingupdt",
        name:"AdminyudingUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/yuding/updt"),
    meta: { title:"编辑预定",authLogin:true }
},

/**这是ticket,ticketinfo的路径映射 */
{
    path:"ticket",
        name:"AdminticketList",
    component: () => import("@/views/ticket/list"),
    meta: { title:"园区票务列表",authLogin:true }
},
{
    path:"ticketadd",
        name:"AdminticketAdd",
    component: () => import("@/views/ticket/add"),
    meta: { title:"添加收费馆区",authLogin:true }
},
{
    path:"ticketupdt",
        name:"AdminticketUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/ticket/updt"),
    meta: { title:"编辑馆区收费信息",authLogin:true }
},
{
    path:"ticketdetail",
        props:route=>({id:route.query.id}),
    name:"AdminticketDetail",
    component: () => import("@/views/ticket/detail"),
    meta: { title:"馆区收费详情",authLogin:true }
},
{
    path:"ticketinfo",
        name:"AdminticketinfoList",
    component: () => import("@/views/ticketinfo/list"),
    meta: { title:"预定票务列表",authLogin:true }
},
{
    path:"ticketinfo_adder",
        name:"AdminticketinfoListadder",
    component: () => import("@/views/ticketinfo/list-adder"),
    meta: { title:"预定票务列表",authLogin:true }
},
{
    path:"ticketinfoadd",
        name:"AdminticketinfoAdd",
    component: () => import("@/views/ticketinfo/add"),
    meta: { title:"添加票务预定",authLogin:true }
},
{
    path:"ticketinfoupdt",
        name:"AdminticketinfoUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/ticketinfo/updt"),
    meta: { title:"编辑票务预定",authLogin:true }
},

/**这是events,registrationinfo的路径映射 */
{
    path:"events",
        name:"AdmineventsList",
    component: () => import("@/views/events/list"),
    meta: { title:"活动列表",authLogin:true }
},
{
    path:"eventsadd",
        name:"AdmineventsAdd",
    component: () => import("@/views/events/add"),
    meta: { title:"添加活动",authLogin:true }
},
{
    path:"eventsupdt",
        name:"AdmineventsUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/events/updt"),
    meta: { title:"编辑活动信息",authLogin:true }
},
{
    path:"eventsdetail",
        props:route=>({id:route.query.id}),
    name:"AdmineventsDetail",
    component: () => import("@/views/events/detail"),
    meta: { title:"活动详情",authLogin:true }
},
{
    path:"registrationinfo",
        name:"AdminregistrationinfoList",
    component: () => import("@/views/registrationinfo/list"),
    meta: { title:"活动报名信息列表",authLogin:true }
},
{
    path:"registrationinfo_adder",
        name:"AdminregistrationinfoListadder",
    component: () => import("@/views/registrationinfo/list-adder"),
    meta: { title:"该用户活动报名信息列表",authLogin:true }
},
{
    path:"registrationinfoadd",
        name:"AdminregistrationinfoAdd",
    component: () => import("@/views/registrationinfo/add"),
    meta: { title:"活动信息添加",authLogin:true }
},
{/**活动报名信息更新，即审核信息 */
    path:"registrationinfoupdt",
        name:"AdminregistrationinfoUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/registrationinfo/updt"),
    meta: { title:"处理报名信息",authLogin:true }
},
/**地方美食、地区信息管理---->馆区信息 */
{
    path:"difangmeishi",
        name:"AdmindifangmeishiList",
    component: () => import("@/views/difangmeishi/list"),
    meta: { title:"地方美食列表",authLogin:true }
},
{
    path:"difangmeishiadd",
        name:"AdmindifangmeishiAdd",
    component: () => import("@/views/difangmeishi/add"),
    meta: { title:"添加地方美食",authLogin:true }
},
{
    path:"difangmeishiupdt",
        name:"AdmindifangmeishiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/difangmeishi/updt"),
    meta: { title:"编辑地方美食",authLogin:true }
},
{
    path:"difangmeishidetail",
        props:route=>({id:route.query.id}),
    name:"AdmindifangmeishiDetail",
    component: () => import("@/views/difangmeishi/detail"),
    meta: { title:"地方美食详情",authLogin:true }
},
{
    path:"meishifenlei",
        name:"AdminmeishifenleiList",
    component: () => import("@/views/meishifenlei/list"),
    meta: { title:"美食分类列表",authLogin:true }
},
{
    path:"meishifenleiadd",
        name:"AdminmeishifenleiAdd",
    component: () => import("@/views/meishifenlei/add"),
    meta: { title:"添加美食分类",authLogin:true }
},
{
    path:"meishifenleiupdt",
        name:"AdminmeishifenleiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/meishifenlei/updt"),
    meta: { title:"编辑美食分类",authLogin:true }
},
]
