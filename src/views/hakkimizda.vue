<template>
<div class="wrapper">
    <div class="left">
        <h1>Hakkımızda</h1>
        <hr>
        <p>
            Akıllı Menüm, 2020 yılında Cozer Group tarafından hayata geçirilmiş bir
            projedir. Yemek ve içme sektöründe işletmelerin satışlarınıı,
            performanslarını ve kalitelerini arttırıp bununla birlikte onları yüksek
            maaliyetlerden kurtaran yönetim panelli dijital menü uygulaması
            sunmaktayız
        </p>
        <p>
            Akıllı Menüm ekibi ile iletişime geçmek için info@akillimenum.com
            e-posta adresini kullanabilirsiniz. Daha detaylı ulaşım bilgileri için
            iletişim ve künye sayfalarını ziyaret edebilirsiniz.
        </p>
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
            color: orangered;
        }

        p {
            font-size: 18px;
            line-height: 1.5;
            font-family: Arial, Helvetica, sans-serif;
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

@media screen and (min-width: 576px) {}

@media screen and (min-width: 768px) {}

@media screen and (min-width: 992px) {}

@media screen and (min-width: 1200px) {
 
}

@media screen and (min-width: 1920px) {
    .wrapper {
        max-width: 1920px;
        margin: 0 auto;
    }
}
</style>
