<template>
    <div class="yuding-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                <span class="title"> 活动报名</span>
                            </div>
            <div class="form-database-form">
                   
 
            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item v-if="isRead" label="活动名称" prop="eventName">
                                            {{  form.eventName  }}                                    </el-form-item>
                                <el-form-item v-if="isRead" label="活动状态" prop="eventStatus" >
                                            {{  form.eventStatus  }}                                    </el-form-item>
                                <el-form-item v-if="isRead" label="截止时间" prop="endTime">
                                            {{  form.endTime  }}                                    </el-form-item>

                                
                                <!--isRead就是，该字段只允许查看，不允许更改！-->
                                  </el-form-item>

                                <el-form-item label="参与者姓名" prop="reserver"  required :rules="[{required:true, message:'请填写姓名'}]">
                                            <el-input placeholder="输入活动参与者姓名" style="width:250px;" v-model="form.reserver" />                                    </el-form-item>

                                <el-form-item label="联系方式" prop="telephone"  required :rules="[{required:true, message:'请填写联系方式'}]">
                                            <el-input placeholder="输入联系方式" style="width:250px;" v-model="form.telephone" />                                    </el-form-item>

                                <el-form-item label="备注" prop="notes">
                                            <el-input type="textarea" v-model="form.notes"></el-input>                                    </el-form-item>

                                <el-form-item label="预订人" prop="adder">
                                            <el-input v-model="form.adder" readonly style="width: 250px;"></el-input>                                    </el-form-item>

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
        name:'registrationinfo-add',
        data() {
            return {
                                readMap:{},
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

                    this.$post(api.registrationinfo.insert , form).then(res=>{
                        this.loading = false;
                        if(res.code == api.code.OK){
                            this.$message.success('已报名待审核');
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

                var form = this.form;
                // 获取模块得数据
                this.loading = true;
                this.$post(api.registrationinfo.create , {
                    id:this.$route.query.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this , res.data);
                                                var readMap = res.data.readMap;
                        for (var i in form){
                            if(readMap[i] && i != 'id')
                            {
                                form[i] = res.data.readMap[i];
                            }
                        }
                        form.eventid = readMap.id;
                        form.endTime = readMap.endTime;
                        readMap.reginum++; /**想着说，这里能实现，点击报名后，给reginum实现加1，从而统计已报名活动人数 */
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
