<template>
    <!--这个信息更新功能主要就是提供给后台管理员端的，因为用户自己没办法对已经提交的报名信息
    进行修改-->
    <div class="yuding-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix updt">
                                    <el-page-header @back="$router.go(-1)" content="活动报名信息更新">
                    </el-page-header>
                            </div>
            <div class="form-database-form">
                

                <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item v-if="isRead" label="活动ID" prop="eventid">
                                            {{  form.eventid  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="活动名称" prop="eventName">
                                            {{  form.eventName  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="参与者" prop="reserver">
                                    {{  form.reserver  }}
                                </el-form-item>

                                <el-form-item label="联系方式" prop="telephone">
                                            <el-input placeholder="输入联系方式" style="width:250px;" v-model="form.telephone" />                                    </el-form-item>

                                <el-form-item v-if="isRead" label="备注" prop="notes">
                                    {{  form.notes  }}
                                </el-form-item>

                                <el-form-item v-if="isRead" label="添加人" prop="adder">
                                    {{  form.adder  }}
                                </el-form-item>
                                
                                <el-form-item label="活动报名状态" prop="regiStatus">
                                    <el-select v-model="form.regiStatus">
                                        <el-option label="已报名待审核" value="已报名待审核"></el-option>
                                        <el-option label="报名成功" value="报名成功"></el-option>
                                        <el-option label="报名失败" value="报名失败"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item v-if="isRead" label="活动截止报名时间" prop="endTime">
                                            {{  form.endTime  }}                                    </el-form-item>
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
        name:'ticketinfo-add',
        data() {
            return {
                                rule,
                loading:false,
                form:{
                    eventid:0,
                    eventName:'',                
                    telephone:'',               
                    picture:'',   
                    eventStatus:'正在报名中',                     
                    regiStatus:'已报名待审核',              
                    notes:'',
                    regiTime:'',
                    endTime:'',
                    reserver:'',
                    adder:this.$store.state.user.session.username,
                    

                },

            
            }
        },
                watch: {
                        id: {
                handler() {
                    this.loadInfo();
                }
            }
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
                        id: {
                type: [String, Number],
                required: true
            },
                    },

        computed: {},
        methods: {
            submit(){
                this.$refs.formModel.validate().then(res=>{
                    if(this.loading)return;
                    this.loading = true;
                    var form = this.form;

                    this.$post(api.registrationinfo.update , form).then(res=>{
                        this.loading = false;
                        if(res.code == api.code.OK){
                            this.$message.success('活动信息更新成功');
                            this.$emit('success' , res.data);
                            this.$refs.formModel.resetFields();
                                                        this.$router.go(-1);
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

                                // 更新数据,获取数据
                this.loading = true;
                var form = this.form;
                this.$post(api.registrationinfo.edit , {
                    id:this.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this , res.data);
                        this.form = res.data.mmm;

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
