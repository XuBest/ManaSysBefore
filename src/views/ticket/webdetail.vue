<template>
    <div class="lvyouxianlu-detail" v-loading="loading">
        <div>
<e-container> 
            <div  style="margin:10px 0 0 0;background-color:#FFFFFF">
<e-module-model-box title="场馆票务详情页面">
    
<div class="">
    <div class="goods-info clearfix">
        <div class="gallery-list">
            <e-shangpinban :images="map.picture"></e-shangpinban>
        </div>
        <div class="goods-right-content">
            <h3 class="title" v-text="map.ticketname"></h3>
            <div class="descount">
                                    <div>
                        <span class="name">
                            票价：
                        </span>
                        <span class="val">
                            {{ map.price }}                        </span>
                    </div>
                                    <div>
                        <span class="name">
                            浏览量：
                        </span>
                        <span class="val">
                            {{ map.counter }}                        </span>
                    </div>
                            </div>

                            <el-button type="primary" @click="$router.push('/ticketinfoadd?id='+map.id)">购票</el-button> 
                            <e-collect v-model="isCollect"
                           module="ticket"
                           ziduan="ticketname"
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
                <el-tab-pane label="线路特色">
            <div  style="margin:15px 0 15px 0;background-color:#FFFFFF">

<div style="text-indent: 2em">
<div v-html="map.special"></div></div>

</div>        </el-tab-pane>
                <el-tab-pane label="线路简介">
            <div  style="margin:15px 0 15px 0;background-color:#FFFFFF">

<div style="text-indent: 2em">
<div v-html="map.overview"></div></div>

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
                            ticketkey:'',                
                            ticketname:'',               
                            picture:'',                        
                            price:'',           
                            counter:'',   
                            special:'',
                            overview:'',      
                            addtime:'',
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
                this.$get(api.ticket.webdetail , {
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
