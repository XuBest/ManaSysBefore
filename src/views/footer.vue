<template>
<div class="footer mt10">
            <div class="copyrightnr link">
           探索动物世界，共筑生态乐园&nbsp;
          <!--  <a v-for="v in likeList" :key="v.wangzhi" target="_blank">{{  v.wangzhanmingcheng  }}</a> &nbsp;-->
        </div>
   
    <div class="copyrightnr">
        地址:动物生态路303号 电话:0000-00000000  邮政编码:510000
            <br />
            CopyRight：茗 动物园信息管理Sys     </div>
</div>
</template>
 
<style type="text/scss" scoped lang="scss">
    .footer{
        padding: 15px;
        color: #767676;
        text-align: center;
        .link{
            a:after{
                content: ' | ';
            }
            a:last-child:after{
                content: '';
            }
        }
    }
</style>
<script>
    import api from '@/api';
    import {extend} from '@/utils/extend';
    const setting = require('@/setting');

    export default {
        data(){
            return {
                likeList:[]
            };
        },
        methods:{
            loadListMenu(module, target) {
                this.$post(api.search.all, {table: module, order: 'id desc'}).then(res => {
                    this[target] = res.data;
                });
            },
        },
        created(){
                        this.loadListMenu("youqinglianjie",'likeList');
                    }
    }

</script>
