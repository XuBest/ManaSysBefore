<template>
    <div class="lvyouxianlu-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                <span class="title"> 添加馆区收费项目</span>
                            </div>
            <div class="form-database-form">
                

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item label="票务编号" prop="ticketkey" :rules="[{required:true, message:'请填写线路编号'}]">
                                            <el-input placeholder="输入票务编号" style="width:250px;" v-model="form.ticketkey" />                                    </el-form-item>

                                <el-form-item label="票务名称" prop="ticketname" required :rules="[{required:true, message:'请填写线路名称'}]">
                                            <el-input placeholder="输入票务名称" style="width:450px;" v-model="form.ticketname" />                                    </el-form-item>

                                <el-form-item label="图片" prop="picture">
                                            <e-upload-images v-model="form.picture"></e-upload-images>                                    </el-form-item>

                                <el-form-item label="票价" prop="price" required :rules="[{required:true, message:'请填写价格'}, {validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            <el-input placeholder="输入票价" style="width:250px;" v-model="form.price" />                                    </el-form-item>

                                <el-form-item label="特色" prop="special">
                                            <e-editor v-model="form.special"></e-editor>                                    </el-form-item>

                                <el-form-item label="简介" prop="overview">
                                            <e-editor v-model="form.overview"></e-editor>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

            </div>
        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">

</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'ticket-add',
        data() {
            return {
                                rule,
                loading:false,
                form:{
                    ticketkey:rule.getID(),                
                    ticketname:'',               
                    picture:'',                        
                    price:'',                 
                    special:'',
                    overview:'',      
                                    
                },

            
            }
        },
                watch: {
                    },
        props: {
            isRead:{
                type:Boolean,
                default:true
            },
            btnText:{
                type:String,
                default:'提交'
            },
                    },

        computed: {},
        methods: {
            submit(){
                this.$refs.formModel.validate().then(res=>{
                    if(this.loading)return;
                    this.loading = true;
                    var form = this.form;

                    this.$post(api.ticket.insert , form).then(res=>{
                        this.loading = false;
                        if(res.code == api.code.OK){
                            this.$message.success('添加成功');
                            this.$emit('success' , res.data);
                            this.$refs.formModel.resetFields();
                                                        this.loadInfo();
                                                    }else{
                            this.$message.error(res.msg);
                        }
                    }).catch(err=>{
                        this.loading = false;
                        this.$message.error(err.message);
                    })

                }).catch(err=>{
                    console.log(err.message);
                })

            },
            loadInfo(){

                                var form = this.form;
                // 获取模块得数据
                this.loading = true;
                this.$post(api.ticket.create , {
                    id:this.$route.query.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this , res.data);
                                            }else{
                        this.$message.error(res.msg);
                        this.$router.go(-1);
                    }
                }).catch(err=>{
                    this.$message.error(err.message);
                    this.$router.go(-1);
                });
                            },
                    },
        created() {
            this.loadInfo();
                    },
        mounted() {
                    },
        destroyed() {
                    }
    }
</script>
