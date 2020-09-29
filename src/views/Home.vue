<template>
<div class="wrapper">
    <div>
        <headers />
        <main>
            <tanitim />
            <ucluCards />
            <fiyatlar />
            <referans />
            <comment />
            <contact />
            <forms />
        </main>
        <footerWrapper />
    </div>
</div>
</template>

<script>
import headers from "@/components/header";
import tanitim from "@/components/tanitim";
import ucluCards from "@/components/ucluCards";
import fiyatlar from "@/components/fiyatlar";
import referans from "@/components/referans";
import comment from "@/components/comment";
import contact from "@/components/contact";
import forms from "@/components/forms";
import footerWrapper from "@/components/footerWrapper";
export default {
    components: {
        headers,
        tanitim,
        ucluCards,
        fiyatlar,
        referans,
        comment,
        contact,
        forms,
        footerWrapper,
    },
};
</script>

<style lang="scss">
body {
    margin: 0px;
    padding: 0px;
    border: 0px;
    font-size: 100%;
    font-family: arial;
    line-height: 1;
}

main {
    @mixin ucle {
        width: 33%;
        border-left: 1px solid #dfe6e9;
        padding-left: 3px;
        text-align: center;

        h3 {
            margin-bottom: 0px;
            font-size: 30px;
            height: 60px;
        }
    }
}

@media screen and (max-width: 576px) {}

@media screen and (min-width: 576px) {}

@media screen and (min-width: 768px) {}

@media screen and (min-width: 992px) {}

@media screen and (min-width: 1200px) {}

@media screen and (min-width: 1920px) {
    .wrapper {
        max-width: 1920px;
        margin: 0 auto;
    }
}
</style>
