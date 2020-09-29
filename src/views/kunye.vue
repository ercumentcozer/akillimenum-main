<template>
<div class="wrapper">
    <div class="left">
        <h1>Künye</h1>
        <hr>
        <br />
        <h4>Ünvan</h4>
        <p class="altlar">Cozer Group</p>
        <hr style="width:100%; margin-top:0px; float:left;" />
        <br />
        <h4>Proje Sorumlusu</h4>
        <p class="altlar">Emirhan Irmak</p>
        <p class="altlar">Erdem Efe</p>
        <hr style="width:100%; margin-top:0px; float:left;" />
        <br />
        <h4>Yazılım</h4>
        <p class="altlar">Erdem Efe</p>
        <p class="altlar">Emirhan Irmak</p>
        <hr style="width:100%; margin-top:0px; float:left;" />
        <br />
        <h4>Tasarım</h4>
        <p class="altlar">Tuğcan Uslu</p>
        <hr style="width:100%; margin-top:0px; float:left;" />
        <br />
    </div>
    <div class="right">
        <rightNav />
    </div>
</div>
</template>

<script>
import rightNav from "@/components/rightNav.vue";
export default {
    components: {
        rightNav,
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    margin: 5% 0% 0px 5%;
    display: flex;

    .left {
        width: 60%;

        h1 {
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 600;
            color:orangered;
        }

        h4 {
       
            height: 30px;
            color: #f9ca24;
        }

        .altlar {
            font-size: 16px;
        }

        p {
            font-size: 18px;
            line-height: 1.5;
            font-family: Arial, Helvetica, sans-serif;
            margin-bottom: 5px;
        }
    }

    .right {
        width: 40%;
    }
}
@media screen and (max-width: 576px) {
.wrapper{
    text-align: center;
   
    .left{
        width: 95%;
    }
    .right{
        display: none;
    }
}
}

@media screen and (min-width: 1920px) {
    .wrapper {
        max-width: 1920px;
        margin: 0 auto;
    }
}
</style>
