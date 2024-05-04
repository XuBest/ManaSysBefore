<template>
    <div class="yuding-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                <span class="title"> 订票</span>
                            </div>
            <div class="form-database-form">
                 
 
            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item v-if="isRead" label="场馆编号" prop="ticketkey">
                                            {{  form.ticketkey  }}                                    </el-form-item>
                                            <el-form-item v-if="isRead" label="票务ID" prop="ticketid">
                                            {{  form.ticketid  }}                                    </el-form-item>
                                <el-form-item v-if="isRead" label="场馆名称" prop="ticketname">
                                            {{  form.ticketname  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="票价" prop="price" :rules="[{validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            {{  form.price  }}                                    </el-form-item>

                                <el-form-item label="订单号" prop="ordernum" :rules="[{required:true, message:'请填写订单号'}]">
                                            <el-input placeholder="输入订单号" style="width:250px;" v-model="form.ordernum" />                                    </el-form-item>

                                <el-form-item label="预订时间" prop="ordertime" required :rules="[{required:true, message:'请填写预订时间'}]">
                                            <el-date-picker
          v-model="form.ordertime"
          type="datetime"
          :editable="false"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择日期">
        </el-date-picker>                                    </el-form-item>

                                <el-form-item label="用票人姓名" prop="ordername">
                                            <el-input placeholder="输入用票人姓名" style="width:250px;" v-model="form.ordername" />                                    </el-form-item>

                                <el-form-item label="联系方式" prop="phonenum">
                                            <el-input placeholder="输入联系方式" style="width:250px;" v-model="form.phonenum" />                                    </el-form-item>

                                <el-form-item label="备注" prop="notice">
                                            <el-input type="textarea" v-model="form.notice"></el-input>                                    </el-form-item>

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
        name:'ticketinfo-add',
        data() {
            return {
                                readMap:{},
                                rule,
                loading:false,
                form:{ 
                    ticketid:0,
                    ticketkey:'',                
                    ticketname:'',               
                    picture:'',                        
                    price:'',              

                    ordernum:rule.getID(),
                    ordertime:'',
                    ordername:'',
                    phonenum:'',
                    ticketstatus:'待支付',
                    notice:'',
                    adder:this.$store.state.user.session.username,
                    
                    ifpay:"否"

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

                    this.$post(api.ticketinfo.insert , form).then(res=>{
                        this.loading = false;
                        if(res.code == api.code.OK){
                            this.$message.success('更新成功');
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
                this.$post(api.ticketinfo.create , {
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
                        form.ticketid = readMap.id;
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
