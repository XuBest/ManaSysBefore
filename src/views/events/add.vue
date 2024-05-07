<template>
    <div class="lvyouxianlu-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                <span class="title"> 新增活动</span>
                            </div>
            <div class="form-database-form">
                

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item label="活动名称" prop="eventName" :rules="[{required:true, message:'请填写活动名称'}]">
                                            <el-input placeholder="输入活动名称" style="width:250px;" v-model="form.eventName" />                                    </el-form-item>

                                <el-form-item v-if="isRead" label="活动状态" prop="eventStatus">
                                    {{  form.eventStatus  }}                                    </el-form-item>

                                <el-form-item label="图片" prop="picture">
                                            <e-upload-images v-model="form.picture"></e-upload-images>                                    </el-form-item>

                                <el-form-item label="活动容量" prop="maxJoin" required :rules="[{required:true, message:'请填写人数'}, {validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            <el-input placeholder="请输入" style="width:250px;" v-model="form.maxJoin" />                                    </el-form-item>

                                <el-form-item label="截止时间" prop="endTime" required :rules="[{required:true, message:'请填写截止时间'}]">
                                            <el-date-picker
                                             v-model="form.endTime"
                                             type="datetime"
                                             :editable="false"
                                             value-format="yyyy-MM-dd HH:mm:ss"
                                             placeholder="选择日期">
                                            </el-date-picker>                                   
                                </el-form-item>

                                <el-form-item label="活动内容" prop="eventContent">
                                            <e-editor v-model="form.eventContent"></e-editor>                                    </el-form-item>

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
                    eventName:'',   
                    picture:'',              
                    eventContent:'',               
                    maxJoin:'', 
                    endTime:'',     
                    eventStatus:'正在报名中',                                      
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

                    this.$post(api.events.insert , form).then(res=>{
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
                this.$post(api.events.create , {
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
