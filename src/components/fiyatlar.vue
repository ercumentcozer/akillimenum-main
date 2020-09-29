<template>
<div class="open fiyatlar" id="fiyat">
    <div class="first">

        <h3> QR Menü</h3>
        <ul>
            <li>
                <p> Menü Oluşturma Hizmeti </p>
            </li>
            <li>
                <p> Özel Tasarım Masa Sticker Karekod</p>
            </li>
            <li>
                <p> Sınırsız Ürün ve Kategori Ekleme</p>
            </li>
            <li>
                <p> Uzaktan Kurulum ve Eğitim</p>
            </li>
            <li>
                <p> Yönetim Paneli</p>
            </li>
            <li>
                <p> 7/24 Online Teknik Destek</p>
            </li>
            <li>
                <p> Depo Sistemi ile Stok Kontrolü</p>
            </li>
            <li id="draw">
                <p> Sipariş Alma Sistemi </p>
            </li>
            <li id="draw">
                <p> Günlük Rapor Tutucu</p>
            </li>
            <li id="draw">
                <p> Her Masaya Özel QR Menü</p>
            </li>
            <li id="draw">
                <p> İşletme Sahibine Özel Kullanabileceği Mobil Program</p>
            </li>
            <li id="draw">
                <p> Garsonlara Özel hazırlanan Mobil Sipariş programı</p>
            </li>
            <li id="draw">
                <p> Ekstra Masa Ayarları</p>
            </li>

        </ul>
        <button>100 TL / AY</button>
    </div>
    <div class="second">

        <h3>QR Menü ve Sipariş Sistemi</h3>
        <ul>
            <li>
                <p> Menü Oluşturma Hizmeti </p>
            </li>
            <li>
                <p> Özel Tasarım Masa Sticker Karekod</p>
            </li>
            <li>
                <p> Sınırsız Ürün ve Kategori Ekleme</p>
            </li>
            <li>
                <p> Uzaktan Kurulum ve Eğitim</p>
            </li>
            <li>
                <p> Yönetim Paneli</p>
            </li>
            <li>
                <p> 7/24 Online Teknik Destek</p>
            </li>
            <li>
                <p> Depo Sistemi ile Stok Kontrolü</p>
            </li>
            <li>
                <p> Sipariş Alma Sistemi </p>
            </li>
            <li>
                <p> Günlük Rapor Tutucu</p>
            </li>
            <li>
                <p> Her Masaya Özel QR Menü</p>
            </li>
            <li id="draw">
                <p> İşletme Sahibine Özel Kullanabileceği Mobil Program</p>
            </li>
            <li id="draw">
                <p> Garsonlara Özel hazırlanan Mobil Sipariş programı</p>
            </li>
            <li id="draw">
                <p> Ekstra Masa Ayarları</p>
            </li>
        </ul>
        <button>150 TL / AY</button>
    </div>
    <div class="third">

        <h3>Mini Kiosk</h3>
        <ul>
            <li>
                <p> Menü Oluşturma Hizmeti </p>
            </li>
            <li>
                <p> Özel Tasarım Masa Sticker Karekod</p>
            </li>
            <li>
                <p> Sınırsız Ürün ve Kategori Ekleme</p>
            </li>
            <li>
                <p> Uzaktan Kurulum ve Eğitim</p>
            </li>
            <li>
                <p> Yönetim Paneli</p>
            </li>
            <li>
                <p> 7/24 Online Teknik Destek</p>
            </li>
            <li>
                <p> Depo Sistemi ile Stok Kontrolü</p>
            </li>
            <li>
                <p> Sipariş Alma Sistemi </p>
            </li>
            <li>
                <p> Günlük Rapor Tutucu</p>
            </li>
            <li>
                <p> Her Masaya Özel QR Menü</p>
            </li>
            <li>
                <p> İşletme Sahibine Özel Kullanabileceği Mobil Program</p>
            </li>
            <li>
                <p> Garsonlara Özel hazırlanan Mobil Sipariş programı</p>
            </li>
            <li>
                <p> Ekstra Masa Ayarları</p>
            </li>
        </ul>
        <button>Fiyat Alınız</button>
    </div>
</div>
</template>

<script>
export default {
data() {
    return {
        active:true
    }

},
    created() {
           ScrollReveal().reveal('.headline');
    },
}
</script>

<style lang="scss" scoped>
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

.fiyatlar {
    width: 80%;
    margin: 0 auto;

    display: flex;

    h3 {
        font-size: 28px;
        margin-top: 20px;

    }

    .first,
    .second,
    .third {
        height: 800px;

        button {
            margin-top: 20px;
            width: 60%;
            height: 40px;
            border: 2px solid #f9ca24;
            color: white;

            font : {
                size: 20px;
                family: arial;
                weight: 900;
            }

            outline: 0;
            cursor: pointer;
            border-radius: 30px;
            background: none;
            transition: background 0.5s;

            &:hover {
                background: #f9ca24;
            }
        }
    }

    .first {
        @include ucle;
        background: #0a3d62;
        border-radius: 20px;
        color: white;
        margin-bottom: 10px;
    }

    .second {
        @include ucle;
        background: #0a3d62;
        color: white;
        margin-bottom: 10px;
        margin-left: 20px;
        border-radius: 20px;
    }

    .third {
        @include ucle;
        background: #0a3d62;
        -webkit-box-shadow: 0px 1px 25px -6px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 1px 25px -6px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 1px 25px -6px rgba(0, 0, 0, 0.75);
        color: white;
        margin-left: 20px;
        margin-bottom: 10px;
        border-radius: 20px;
    }

    ul {
        margin-top: 40px;

        li {
            text-align: left;
            margin: 0 auto;
            margin-top: 20px;
            height: 25px;
            width: 90%;
            font-size: 14px;
            font-weight: 600;
            list-style: none;

            p {
                display: inline-block;
                margin: 0px;
                margin-left: 10px;
            }
        }

    }

    #draw {
        text-decoration: line-through;
        color: #8395a7;
    }

}

br {
    display: none;
}
.before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
}

.enter {
    opacity: 1;
    transform: translateY(0px);
}
@media screen and (max-width:576px) {
    br {
        display: block;
    }

    .fiyatlar {
        width: 100%;
        margin: 0 auto;
        display: inline-block;

        h3 {
            font-size: 28px;
            padding-top: 30px;

            height: 120px !important;

        }

        .first,
        .second,
        .third {
            height: 800px;
            width: 90%;
            margin: 0 auto;

            button {
                margin-top: 20px;
                width: 60%;
                height: 40px;
                border: 2px solid #f9ca24;
                color: white;

                font : {
                    size: 20px;
                    family: arial;
                    weight: 900;
                }

                outline: 0;
                cursor: pointer;
                border-radius: 30px;
                background: none;
                transition: background 0.5s;

                &:hover {
                    background: #f9ca24;
                }
            }
        }

        .first {

            background: #0a3d62;
            border-radius: 20px;
            color: white;
            margin-bottom: 10px;
        }

        .second {

            background: #0a3d62;
            color: white;
            margin-bottom: 10px;
            margin-left: 20px;
            border-radius: 20px;
        }

        .third {

            background: #0a3d62;
            -webkit-box-shadow: 0px 1px 25px -6px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px 1px 25px -6px rgba(0, 0, 0, 0.75);
            box-shadow: 0px 1px 25px -6px rgba(0, 0, 0, 0.75);
            color: white;
            margin-left: 20px;
            margin-bottom: 10px;
            border-radius: 20px;
        }

        ul {
            margin-top: 10px;

            li {
                text-align: left;
                margin: 0 auto;
                margin-top: 20px;
                height: 25px;
                width: 90%;
                font-size: 14px;
                font-weight: 600;
                list-style: circle;

                p {
                    display: inline-block;
                    margin: 0px;
                    margin-left: 10px;
                }
            }

        }

        #draw {
            text-decoration: line-through;
            color: #8395a7;
        }

    }
}

@media screen and (min-width:576px) {
        br {
        display: block;
    }

    .fiyatlar {
        width: 100%;
        margin: 0 auto;
        display: inline-block;

        h3 {
            font-size: 28px;
            padding-top: 30px;

            height: 120px !important;

        }

        .first,
        .second,
        .third {
            height: 800px;
            width: 90%;
            margin: 0 auto;

            button {
                margin-top: 20px;
                width: 60%;
                height: 40px;
                border: 2px solid #f9ca24;
                color: white;

                font : {
                    size: 20px;
                    family: arial;
                    weight: 900;
                }

                outline: 0;
                cursor: pointer;
                border-radius: 30px;
                background: none;
                transition: background 0.5s;

                &:hover {
                    background: #f9ca24;
                }
            }
        }

        .first {

            background: #0a3d62;
            border-radius: 20px;
            color: white;
            margin-bottom: 10px;
        }

        .second {

            background: #0a3d62;
            color: white;
            margin-bottom: 10px;
            margin-left: 20px;
            border-radius: 20px;
        }

        .third {

            background: #0a3d62;
            -webkit-box-shadow: 0px 1px 25px -6px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px 1px 25px -6px rgba(0, 0, 0, 0.75);
            box-shadow: 0px 1px 25px -6px rgba(0, 0, 0, 0.75);
            color: white;
            margin-left: 20px;
            margin-bottom: 10px;
            border-radius: 20px;
        }

        ul {
            margin-top: 10px;

            li {
                text-align: left;
                margin: 0 auto;
                margin-top: 20px;
                height: 25px;
                width: 90%;
                font-size: 14px;
                font-weight: 600;
                list-style: circle;

                p {
                    display: inline-block;
                    margin: 0px;
                    margin-left: 10px;
                }
            }

        }

        #draw {
            text-decoration: line-through;
            color: #8395a7;
        }

    }
}

@media screen and (min-width:768px) {
    
}

@media screen and (min-width:992px) {
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

.fiyatlar {
    width: 80%;
    margin: 0 auto;

    display: flex;

    h3 {
        font-size: 28px;
        margin-top: 20px;

    }

    .first,
    .second,
    .third {
        height: 850px;

        button {
            margin-top: 20px;
            width: 60%;
            height: 40px;
            border: 2px solid #f9ca24;
            color: white;

            font : {
                size: 20px;
                family: arial;
                weight: 900;
            }

            outline: 0;
            cursor: pointer;
            border-radius: 30px;
            background: none;
            transition: background 0.5s;

            &:hover {
                background: #f9ca24;
            }
        }
    }

    .first {
        @include ucle;
        background: #0a3d62;
        border-radius: 20px;
        color: white;
        margin-bottom: 10px;
    }

    .second {
        @include ucle;
        background: #0a3d62;
        color: white;
        margin-bottom: 10px;
        margin-left: 20px;
        border-radius: 20px;
    }

    .third {
        @include ucle;
        background: #0a3d62;
        -webkit-box-shadow: 0px 1px 25px -6px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 1px 25px -6px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 1px 25px -6px rgba(0, 0, 0, 0.75);
        color: white;
        margin-left: 20px;
        margin-bottom: 10px;
        border-radius: 20px;
    }

    ul {
        margin-top: 40px;

        li {
            text-align: left;
            margin: 0 auto;
            margin-top: 20px;
            height: 25px;
            width: 90%;
            font-size: 14px;
            font-weight: 600;
            list-style: none;

            p {
                display: inline-block;
                margin: 0px;
                margin-left: 10px;
            }
        }

    }

    #draw {
        text-decoration: line-through;
        color: #8395a7;
    }

}

br {
    display: none;
}
}

@media screen and (min-width:1200px) {}
</style>
