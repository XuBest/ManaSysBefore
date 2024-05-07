<template>
    <div class="lvyouxianlu-detail" v-loading="loading">
        <div>
<e-container> 
            <div  style="margin:10px 0 0 0;background-color:#FFFFFF">
<e-module-model-box title="活动信息详情">
    
<div class="">
    <div class="goods-info clearfix">
        <div class="gallery-list">
            <e-shangpinban :images="map.picture"></e-shangpinban>
        </div>
        <div class="goods-right-content">
            <h3 class="title" v-text="map.eventName"></h3>
            <div class="descount">
                                    <div>
                        <span class="name">
                           活动容量：
                        </span>
                        <span class="val">
                            {{ map.maxJoin }}                        </span>
                    </div>
                    <div>
                        <span class="name">
                           报名成功人数：
                        </span>
                        <span class="val">
                            {{ map.success }}                        </span>
                    </div>
                                    <div>
                        <span class="name">
                            活动发布时间：
                        </span>
                        <span class="val">
                            {{ map.publishTime }}                        </span>
                    </div>
                    <div>
                        <span class="name">
                            截止时间：
                        </span>
                        <span class="val">
                            {{ map.endTime }}                        </span>
                    </div>
                    <div>
                        <span class="name">
                            浏览量：
                        </span>
                        <span class="val">
                            {{ map.counter }}                        </span>
                    </div>
                            </div>
 
                            <el-button type="primary" @click="$router.push('/registrationinfoadd?id='+map.id)">报名活动</el-button> 
                            <e-collect v-model="isCollect"
                           module="events"
                           ziduan="eventName"
                           :id="map.id"></e-collect>
            
        </div>
    </div>
    <div class="goods-content">
            </div>
</div>

</e-module-model-box>

</div>    

</e-container>
</div>
<div>
<e-container>
            <div  style="margin:15px 0 15px 0;background-color:#FFFFFF">


<e-container>
    <el-tabs type="border-card">
                <el-tab-pane label="内容">
            <div  style="margin:15px 0 15px 0;background-color:#FFFFFF">

<div style="text-indent: 2em">
<div v-html="map.eventContent"></div></div>

</div>        </el-tab-pane>
            </el-tabs>
</e-container>

</div>    

</e-container>
</div>    </div>
</template>
<style type="text/scss" scoped lang="scss">
    </style>
<script>
    import api from '@/api';
    import { extend } from '@/utils/extend';
        export default {
        data() {
            return {
                loading:false,   // 加载
                                isCollect:false, // 是否已经收藏
                         map:{
                            eventName:'',                
                            eventContent:'',               
                            maxJoin:'',  
                            publishTime:'',
                            endTime:'',
                            eventStatus:'正在报名中',
                            counter:'',
                            success:'',
                            reginum:'',                
                            picture:'',
                            
                            },
                            }
        },
                props:{
            id:{
                type:[String,Number],
                required:true
            }
        },
        watch: {
            id:{
                handler(){
                    this.loadDetail();
                },
                immediate:true
            },
                    },
        computed: {
                    },
        methods: {
            loadDetail(){
                if(this.loading) return;
                this.loading = true;
                this.$get(api.events.webdetail , {
                    id:this.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this,res.data);
                    }else{
                        this.$message.error(res.msg);
                    }
                }).catch(err=>{
                    this.loading = false;
                    this.$message.error(err.message);
                });
            },

                    },
        created() {
                    },
        mounted() {
                    },
        destroyed() {
                    }
    }
</script>
