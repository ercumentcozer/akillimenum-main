<template>
<div>
    <h2 style="text-align:center; margin-bottom:30px;">Müşteri Yorumları</h2>
    <carousel :per-page="1" :autoplay="true" :autoplayTimeout="5000" :centerMode="true" :loop="true" :paginationSize="5" :paginationPadding="3" :speed="1000" :touchDrag="true">
        <slide>
            <div class="comment">
                <img src="@/assets/hayalcafeLogo.png">
                <div style="width:100%;">
                    <p id="name">Hayal Cafe</p>
                    <i class="fas fa-star" v-for="star in 5" :key="star"></i>
                    <p id="desp">İnanılmaz bir uygulama – menünüze ürün ekleyip çıkartırken, fiyat değişikliği yaparken, spesiyaller oluştururken tekrar basım masrafına girmeden tüm kontrol elinizde.</p>
                </div>
            </div>

        </slide>
        <slide>
            <div class="comment">
                <img src="@/assets/Png.png">
                <div style="width:100%;">
                    <p id="name">Tiger Cafe</p>

                    <i class="fas fa-star" v-for="star in 5" :key="star"></i>
                    <p id="desp"> Kendilerine vermiş oldukları hizmetten dolayı ne kadar teşekkür etsek azdır. .</p>
                </div>
            </div>
        </slide>
    </carousel>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.comment {
    width: 45%;
    height: 200px;
    margin: 0 auto;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;

    img {
        width: 150px;
        height: 150px;
        margin-right: 20px;
        margin-top: 20px;
        margin-left: 10px;
    }

    #name {
        font-size: 25px;
        margin-top: 30px;
        width: 80%;
        text-align: center;
        font-family: montserrat;
        font-weight: 700;
    }

    #desp {
        width: 90%;
    }

    i {
        color: #f9ca24
    }
}

@media screen and (max-width:576px) {
    .comment {
        width: 90%;
        height: 150px;
        margin: 0 auto;
        display: flex;
        font-family: Arial, Helvetica, sans-serif;
        -webkit-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
        border-radius: 10px;
        margin-top: 10px;
        margin-bottom: 10px;

        img {
            width: 30%;
            height: 70%;
            margin-right: 20px;
            margin-top: 20px;
            margin-left: 10px;
        }

        #name {
            font-size: 20px;
            margin-top: 20px;
            margin-bottom: 10px;
            width: 80%;
            text-align: center;
            font-family: montserrat;
            font-weight: 700;
        }

        #desp {
            width: 90%;
            font-size: 12px;
        }

        i {
            color: #f9ca24;
            font-size: 10px
        }
    }
}

@media screen and (min-width:576px) {
    .comment {
        width: 90%;
        height: 150px;
        margin: 0 auto;
        display: flex;
        font-family: Arial, Helvetica, sans-serif;
        -webkit-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
        border-radius: 10px;
        margin-top: 10px;
        margin-bottom: 10px;

        img {
            width: 30%;
            height: 70%;
            margin-right: 20px;
            margin-top: 20px;
            margin-left: 10px;
        }

        #name {
            font-size: 20px;
            margin-top: 20px;
            margin-bottom: 10px;
            width: 80%;
            text-align: center;
            font-family: montserrat;
            font-weight: 700;
        }

        #desp {
            width: 90%;
            font-size: 12px;
        }

        i {
            color: #f9ca24;
            font-size: 10px
        }
    }
}

@media screen and (min-width:768px) {
    .comment {
        width: 45%;
        height: 200px;
        margin: 0 auto;
        display: flex;
        font-family: Arial, Helvetica, sans-serif;
        -webkit-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
        border-radius: 10px;
        margin-top: 10px;
        margin-bottom: 10px;

        img {
            width: 150px;
            height: 150px;
            margin-right: 20px;
            margin-top: 20px;
            margin-left: 10px;
        }

        #name {
            font-size: 25px;
            margin-top: 30px;
            width: 80%;
            text-align: center;
            font-family: montserrat;
            font-weight: 700;
        }

        #desp {
            width: 90%;
            margin-top: 5px;
            font-size: 15px;
        }

        i {
            color: #f9ca24
        }
    }
    .fa-star{
        font-size: 15px !important;
    }
}

@media screen and (min-width:992px) {}

@media screen and (min-width:1200px) {}
</style>
