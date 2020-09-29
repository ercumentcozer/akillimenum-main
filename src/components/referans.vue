<template>
<div class="ref" id="deneme">
    <h1>Referanslarımız</h1>
    <div class="card">
        <img src="@/assets/hayalcafeLogo.png">
    </div>
    <div class="card">
        <img src="@/assets/Png.png">
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.ref {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 100px;
    

    h1 {
        font-family: montserrat;
        text-align: center;
        font-weight: 600;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .card {
        width: 200px;
        height: 200px;
        margin-left: 1%;
        
        display: inline-block;
        margin-top: 10px;
        border: 1px solid gray;

    }

    img {
        width: 60%;
        height: 60%;
        margin-top: 20%;
        margin-left: 20%;
        border-radius: 10px;
    }
}

@media screen and (max-width:576px) {
    .ref {
        width: 100%;
        margin: 0 auto;
        margin-bottom: 100px;

        h1 {
            font-family: montserrat;
            text-align: center;
        }

        .card {

            width: 30%;
            height: 120px;
            display: inline-block;
            margin-top: 10px;
            margin-left: 10px;

        }

        img {
            width: 60%;
            height: 60%;
            margin-top: 20%;
            margin-left: 20%;
            border-radius: 10px;
        }
    }
}

@media screen and (min-width:576px) {
    
}

@media screen and (min-width:768px) {}

@media screen and (min-width:992px) {}

@media screen and (min-width:1200px) {}
</style>
