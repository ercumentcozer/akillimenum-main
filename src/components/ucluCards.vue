<template>
<div id="sss"  v-scrollanimation>
    <div class="cards"  >
        <div class="first" >
            <div class="left">
                <h4>Akıllı Menümün Avantajları Nelerdir?</h4>
                <p>Özellikle içinde bulunduğumuz virüs salgını nedeni ile birçok firma ve işletmenin tercih ettiği yöntemlerden biri olan temassız menü sistemi oldukça avantajlı bir kullanım imkanını müşteri ve işletmelere sunuyor. Tabi sadece virüsle kalmayıp İşletmelerin her süreçte değiştirmek zorunda kaldığı menü baskısı, tasarımı, matbaa ücretleri gibi giderleri ortadan kaldırıyor.</p>
            </div>
            <div class="right">
                <img src="@/assets/stok2.jpg" width="90%">
            </div>
        </div>
        <div class="first">
            <div class="left">
                <img src="@/assets/stok3.jpg" width="90%">
            </div>
            <div class="right">
                <h4>Baskı Maliyetine Son! </h4>
                <p>Akıllı menüm ile sizleri yüksek baskı maliyetlerinden kurtartıyoruz. Kolay kullanım paneli ile birlikte dakikalar içerisinde yeni ürün ekleme, silme veya düzenleme işlemlerini yapabilirsiniz.
                </p>
            </div>
        </div>
        <div class="first">
            <div class="left">
                <h4>Tüm Akıllı Cihazlarla Uyumlu</h4>
                <p>Akıllı Menüm iOS,Android ve tarayıcı açabilen tüm bilgisayar işletim sistemleirinde uyumlu olarak çalışır. Telefonlar için sadece kameranızı açmanız, bilgisayarlar içinse tarayıcınızı açmanız yeterli.
                </p>
            </div>
            <div class="right">
                <img src="@/assets/stok4.jpg" width="90%">
            </div>
        </div>

    </div>

    <!-- RESPONSİVE DIV -->

    <div class="cardResp ">
        <div class="first">
            <div class="left">
                <img src="@/assets/stok2.jpg" width="90%">
                <h4>Akıllı Menümün Avantajları Nelerdir?</h4>
                <p>Özellikle içinde bulunduğumuz virüs salgını nedeni ile birçok firma ve işletmenin tercih ettiği yöntemlerden biri olan temassız menü sistemi oldukça avantajlı bir kullanım imkanını müşteri ve işletmelere sunuyor. Tabi sadece virüsle kalmayıp İşletmelerin her süreçte değiştirmek zorunda kaldığı menü baskısı, tasarımı, matbaa ücretleri gibi giderleri ortadan kaldırıyor.</p>
            </div>
        </div>
        <div class="first">
            <div class="left">
                <img src="@/assets/stok3.jpg" width="90%">
                <h4>Baskı Maliyetine Son! </h4>
                <p>Akıllı menüm ile sizleri yüksek baskı maliyetlerinden kurtartıyoruz. Kolay kullanım paneli ile birlikte dakikalar içerisinde yeni ürün ekleme, silme veya düzenleme işlemlerini yapmabilirsiniz.
                </p>
            </div>
        </div>
        <div class="first">
            <div class="left">
                <img src="@/assets/stok4.jpg" width="90%">
                <h4>Tüm Akıllı Cihazlarla Uyumlu</h4>
                <p>Akıllı Menüm iOS,Android ve tarayıcı açabilen tüm bilgisayar işletim sistemleirinde uyumlu olarak çalışır. Telefonlar için sadece kameranızı açmanız, bilgisayarlar içinse tarayıcınızı açmanız yeterli.
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cards {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;

    div {
        margin-top: 5%;
        margin-bottom: 5%;
    }

    .first {
        display: flex;
        align-items: center;

        img {
            border-top-right-radius: 20px;
            border-bottom-left-radius: 20px;
        }

        display: flex;

        .left {
            width: 45%;
        }

        .right {
            width: 45%;
            margin-left: 10%;

        }

        h4 {
            font-size: 25px;

        }

        p {
            font-family: 'Poppins', sans-serif;
            line-height: 20px;
        }
    }
}

.cardResp {
    display: none;
}
.before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.5s ease-out;
}

.enter {
    opacity: 1;
    transform: translateY(0px);
}
@media screen and (max-width:576px) {
    .cards {
        display: none;
    }

    .cardResp {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        margin-top: 30px;
        display: block;

        div {
            margin-top: 5%;
            margin-bottom: 5%;
        }

        .first {
            display: flex;
            align-items: center;

            img {
                max-height: 200px;
                border-top-right-radius: 20px;
                border-bottom-left-radius: 20px;
            }

            display: flex;

            .left {
                width: 100%;
            }

            h4 {
                font-size: 25px;
                margin-top: 20px;
                margin-bottom: 20px;
                font-weight: 900;

            }

            p {
                width: 90%;
                margin: 0 auto;
                font-family: 'Poppins', sans-serif;
                line-height: 20px;
            }
        }
    }
}

@media screen and (min-width:576px) {
       .cards {
        display: none;
    }

       .cardResp {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        margin-top: 30px;
        display: block;

        div {
            margin-top: 5%;
            margin-bottom: 5%;
        }

        .first {
            display: flex;
            align-items: center;

            img {
                border-top-right-radius: 20px;
                border-bottom-left-radius: 20px;
            }

            display: flex;

            .left {
                width: 100%;
            }

            h4 {
                font-size: 25px;
                margin-top: 20px;
                margin-bottom: 20px;
                font-weight: 900;

            }

            p {
                width: 90%;
                margin: 0 auto;
                font-family: 'Poppins', sans-serif;
                line-height: 20px;
            }
        }
    }
}

@media screen and (min-width:768px) {}
    
@media screen and (min-width:992px) {
    .cards {
    width: 80%;
    margin: 0 auto;
    margin-top: 15% !important;
    margin-bottom: 10%;
    display: block;

    div {
        margin-top: 5%;
        margin-bottom: 5%;
    }

    .first {
        display: flex;
        align-items: center;

        img {
            border-top-right-radius: 20px;
            border-bottom-left-radius: 20px;
            max-height: 300px;
        }

        display: flex;

        .left {
            width: 45%;
        }

        .right {
            width: 45%;
            margin-left: 10%;

        }

        h4 {
            font-size: 25px;
 font-weight: 900;
        }

        p {
            font-family: 'Poppins', sans-serif;
            line-height: 20px;
        }
    }
}

.cardResp {
    display: none;
}
}

@media screen and (min-width:1200px) {}
</style>
