<template>
    <div class="header-box" :class="{open:status}">
        <e-container>
            <div class="header-top clearfix">
                <div class="left">探索动物世界，共筑生态乐园</div>
                <div class="right">
                    <template v-if="$session.username">
                        <el-dropdown>
                              <span class="el-dropdown-link">
                                {{  $session.username  }} <i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-user" @click.native="$router.push('/admin')">个人中心</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-arrow-left" @click.native="logout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </template>
                    <template v-else>
                        <el-button type="primary" @click="$router.push('/login')" size="mini">
                            登录
                        </el-button>
                    </template>
                </div>
            </div>
        </e-container>
        <div class="marks-bg" @click="status=false"></div>
        <div class="header-nav">
            <e-container class="clearfix">
                <div class="logo nav-left">
                    <div class="brand" @click="status=true">
                        <span class="fa fa-bars"></span>
                    </div>
                    {{ setting.title }}
                </div>
                <div class="header-nav-ul nav-left clearfix">
                    <ul class="header-nav-left clearfix">
                        <li>
<router-link to="/">首页
</router-link>
</li>
<li>
<router-link to="/xinwenxinxi">新闻工作动态   <!--从web-router.js中找映射到的views界面 到xinwenxinxi/index里面-->
<i class="el-icon-arrow-down"></i><!-- 列表项信息-->
</router-link>
<ul class="submenu">
                    <li v-for="m in listMenuxinwenfenlei">
<router-link :to="'/xinwenxinxi?fenlei='+m.id" v-text="m.typename"></router-link>
</li>
</ul>
</li>
<li>
<router-link to="/difangmeishi">动物园基础信息
</router-link>
</li>

<li>
<router-link to="/jingdianxinxi">馆区信息
<i class="el-icon-arrow-down"></i>
</router-link>
<ul class="submenu">
                    <li v-for="m in listMenudiqu">
<router-link :to="'/jingdianxinxi?suoshudiqu='+m.id" v-text="m.diqumingcheng"></router-link>
</li>
</ul>
</li>
<li>
<router-link to="/lvyouxianlu">公告信息
</router-link>
</li>
<li>
<router-link to="/lvyouxianlu">活动动态
</router-link>
</li>
<li>
<router-link to="/liuyanbanadd">留言反馈
</router-link>
</li>
<li>
<router-link to="/yonghuadd">注册
</router-link>
</li>
                    </ul>
                </div>

            </e-container>
        </div>

    </div>
</template>
<style type="text/scss" lang="scss">

  .header-box {
    .header-top {
      padding: 5px;
    }
    .marks-bg,.brand{
      display: none;
    }
    .marks-bg{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
      background: rgba(0,0,0,.5);
    }
    .left {
      float: left;
      color:  #c40000fd;
      
    }
    .right {
      float: right;
    }
    .header-nav {
      background: #c40000fd;
      height: 55px;
      line-height: 55px;
      a {
        color: #ffffff;
      }
      .logo {
        font-size: 18px;
        color: #ffffff;
        margin-right: 10px;
      }
      .nav-left {
        float: left;
      }
      .nav-right {
        float: right;
      }
    }

    .header-nav-ul {
      > ul > li {
        float: left;
        position: relative;
        > a {
          display: block;
          padding: 0px 10px;

          > i {
            transition: .2s linear;
          }
        }

        > .submenu {
          visibility: hidden;
          opacity: .5;
          position: absolute;
          top: 100%;
          left: 0px;
          max-height: 0px;
          width: 200px;
          z-index: 5;
          background: rgb(235, 222, 39);
          transition: .5s cubic-bezier(0, 1, 0.5, 1);
          border-radius: 0 0 8px 8px;

          > li > a {
            line-height: 20px;
            display: block;
            padding: 10px 15px;
            border-bottom: 1px #c40000fd solid;/**这是字菜单里边的分隔线 */
          }

          > li:last-child > a {
            border-bottom: none;
          }
        }
      }

      > ul > li.active, > ul > li:hover {
        > a {
          background: #741c06e0;/**菜单栏经过会有变化 */
        }
      }

      > ul > li:hover {
        > a > i {
          transform: rotate(180deg);
        }

        > .submenu {
          visibility: initial;
          opacity: 1;
          max-height: 900px;
        }

        
      }
    }
  }

  @media screen and (max-width: 768px) {
    .header-box{
      .brand{
        display: inline;
        float: right;
      }
      .nav-right{
        display: none;
      }
      .logo{
        float: none;
        width: 100%;
      }
      .header-nav-ul{
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 120;
        transform: translateX(-100%);
        width: 50%;
        visibility: hidden;
        background: rgba(0,0,0,.5);
        transition: transform 100ms ease-in-out;
        .header-nav-left{
          >li{
            width: 100%;
            float: none;
            >.submenu{
              visibility: visible;
              max-height: none;
              position: static;
              background: transparent;
              padding-left: 20px;
              >li{
                >a{
                  border-bottom: none;
                }
              }
            }
          }
        }


      }
    }
    .header-box.open{
      .marks-bg{
        display: block;
      }
      .header-nav-ul{
        visibility: visible;
        transform: translateX(0);
      }
    }

  }
</style>
<script>
    import api from '@/api';
    import { extend } from '@/utils/extend';

    const setting = require('@/setting');

    export default {
        name: "bootstrap-header",
        data() {
            return {
                status:false,
                keyword:'',
                setting,
                                listMenuxinwenfenlei:[],
                                listMenudiqu:[],
                            }
        },
        watch: {
            $route(){
                this.status = false;
            }
        },
        computed: {
    
        },
        methods: {
            searchKeyword(){
                var filter = {};
                filter[""]= this.keyword;
                this.$router.push({
                    path:'/',
                    query:filter
                });
            },
            logout(){
                this.$confirm('确定退出登录？','确认信息').then(()=>{
                    // 退出登录
                    this.$store.dispatch('user/logout');
                });
            },

                    loadListMenu(module , target){
                this.$post(api.search.all,{ table:module, order:'id desc' }).then(res=>{
                    this[target] = res.data;
                });
            },
    
        },
        created() {
                this.loadListMenu('newstype','listMenuxinwenfenlei');
                this.loadListMenu('diqu','listMenudiqu');
                },
        mounted() {
        },
        destroyed() {
        }
    }
</script>
