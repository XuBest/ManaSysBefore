<template>
    <!--管理员端的 活动详情信息的查看 可展示的信息和用户端的detail页面可展示的信息不同-->
    <div class="lvyouxianlu-detail" v-loading="loading" ref="print">
        <el-page-header @back="goBack" content="活动详情页面"></el-page-header>
        <div class="admin-detail">

            <div class="detail detail-text">
                <div class="detail-title">
                    活动名称：
                </div>
                <div class="detail-content">
                    {{ map.eventName }}
                </div>
            </div> 
            
            <div class="detail detail-autotime">
                <div class="detail-title">
                    活动容量：
                </div>
                <div class="detail-content">
                    {{ map.maxJoin }}
                </div>
            </div>   
            <div class="detail detail-autotime">
                <div class="detail-title">
                    已报名人数：
                </div>
                <div class="detail-content">
                    {{ map.reginum }}
                </div>
            </div>   
            <div class="detail detail-autotime">
                <div class="detail-title">
                    报名成功人数：
                </div>
                <div class="detail-content">
                    {{ map.success }}
                </div>
            </div>   
            <div class="detail detail-autotime">
                <div class="detail-title">
                    活动发布时间：
                </div>
                <div class="detail-content">
                    {{ map.publishTime }}
                </div>
            </div>   

            <div class="detail detail-number">
                <div class="detail-title">
                    浏览量：
                </div>
                <div class="detail-content">
                    {{ map.counter }}
                </div>
            </div> 

            <div class="detail detail-autotime">
                <div class="detail-title">
                    活动截止时间：
                </div>
                <div class="detail-content">
                    {{ map.endTime }}
                </div>
            </div>            
            <div class="detail detail-images">
                <div class="detail-title">
                    图片：
                </div>
                <div class="detail-content">
                    <e-images :src="map.picture" type="detail"></e-images>
                </div>
            </div>  
            <div class="detail detail-editor">
                <div class="detail-title">
                    活动内容：
                </div>
                <div class="detail-content">
                    <div v-html="map.eventContent"></div>
                </div>
            </div>                                
        <div class="mt10">
            <el-button type="default"   @click="$router.go(-1)">
                返回
            </el-button>
            <el-button class="mycustom-button"   @click="$print">
                打印本页
            </el-button>
        </div>
    </div>
</div>
</template>
<style type="text/scss" scoped lang="scss">
.lvyouxianlu-detail{
    .admin-detail {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        .detail {
            width: 50%;
            padding: 5px;
            display: flex;
            margin-bottom: 10px;
            border-bottom: 1px solid #DEDEDE;
            .detail-title {
                width: 120px;
                text-align: right;
              flex-shrink: 0;
            }
            .detail-content {
                flex-grow: 1;
            }
        }
        .detail.detail-images {
            width: 100%;
            flex-wrap: wrap;
            .detail-title {
                display: none;
            }

            .detail-content {
                width: 100%;
                padding: 10px;
            }
        }
        .detail.detail-editor,.detail.detail-dataset  {
            width: 100%;
            flex-wrap: wrap;
            .detail-title {
                width: 100%;
                padding: 10px;
                margin-top: 10px;
                background: #9a0606;
                color: #ffffff;
                text-align: left;
            }
            .detail-content{
                padding: 10px;
            }
        }
    }
}
</style>
<script>
    import api from '@/api';
    import { extend } from '@/utils/extend';

    
    export default {
        data() {
            return {
                loading:false,
                map:{},

                            }
        },
                props:{
            id:{
                type:[String,Number],
                required:true
            },
                    },
        watch: {
            id:{
                handler(){
                    this.loadDetail();
                },
                immediate:true
            }
        },
        computed: {
                    },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            loadDetail(){
                if(this.loading) return;
                this.loading = true;
                this.$get(api.events.detail , {
                    id:this.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this , res.data);
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
