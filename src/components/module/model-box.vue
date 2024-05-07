<template>
    <div class="subtitle-modelbox-widget">
        <h3 class="section-title">
            {{title}}
        </h3>
        <div class="sidebar-widget-body">
            <slot></slot>
        </div>
        <!-- /.sidebar-widget-body -->
    </div>
</template>
<style type="text/scss" scoped lang="scss">
    .subtitle-modelbox-widget {
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.08);
        .section-title {
            font-size: 20px;
            font-family: 'Open Sans', sans-serif;
            border-bottom: 1px solid #e3e3e3;
            padding-bottom: 10px;
            color: rgba(196, 0, 0, 0.9921568627) ;
            text-transform: uppercase;
            font-weight: bold;
            margin-top: 0px;
            padding-left: 20px;
            padding-top: 20px;
        }
        .sidebar-widget-body{
            padding: 20px;
        }
        .mycustom-button {
            background-color:#ebd419;
            border-color:#d4c823;
            color: white;
}.mycustom-button:hover {
    background-color:#c9b40f;  /* 当鼠标悬浮时，按钮背景色变为暗黄色 */
    border-color: #d4c823;
}

    }

</style>
<script>
    export default {
        name: "e-module-model-box",
        data() {
            return {

            }
        },
        props:{
            title:String
        },
        watch: {},
        computed: {

        },
        methods: {},
        created() {
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>
