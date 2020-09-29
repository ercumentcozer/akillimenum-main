<template>
<div class="wrapper" id="tanitim"  v-scrollanimation>
    <div class="first">
        <h3 style="height:70px;">QR Menü</h3>
        <img src="@/assets/qrmenu.png" width="50%" />
        <ul>
            <li>Kamera ile karekodu okutarak menünüze dijital olarak hızlıca erişilmesini sağlayın</li>
            <li>Çevre ve bütçe dostu yeni nesil menü</li>
            <li>Tüm ürünleriniz için hazırlanan mükemmel görsel & vidolar</li>
            <li>Müşteriler tüm menüyü hızlıca gezebilir</li>
            <li>Menünüze herhangi Program indirmeden mobil veya bilgisayar tarayıcılarından erişebilirsiniz.</li>
            <li>Kendinizi, çalışanlarınızı ve müşterilerinizi virüslere karşı koruyun.</li>
        </ul>
    </div>
    <div class="second">
        <h3 style="height:70px;">QR Menü Ve Sipariş Sitemi</h3>
        <img src="@/assets/siparis.png" width="50%" />
        <ul>
            <li>Müşterilerin tarafından verilen sipariş anında yönetim paneline düşer</li>
            <li>personel maliyetinizi azaltır</li>
            <li>Sınırsız kategori ve ürün ekleyebilirsiniz</li>
            <li>sınırsız dil seçenği</li>
            <li>Stok Takibi</li>
            <li>Günlük, haftalık ve aylık raporlar</li>
        </ul>
    </div>
    <div class="third">
        <h3 style="height:70px;">Mini Kiosk </h3>
        <img src="@/assets/kiosk.png" width="50%" />
        <ul>
            <li> Herhangi bir ürün veya fiyat değişimini yönetim panelinden dakikalar içinde yapabilirsiniz.</li>
            <li>Çalışanlar ile birlikte kullanılabilir aktif haberleşme sistemi</li>
            <li>Müşterileriniz hızlıca size değerlendirmelerini sunabilirler</li>
            <li>Müşterileriniz nerede olursa olsun, sizin iletişim bilgilerinize ve sosyal medya hesaplarınıza her zaman ulaşabilirler</li>
            <li>Güne özel ürünlerinizi Favori Menü özelliği ile ön plana çıkartabilirsiniz.</li>
            <li>kayan resimler ile kampanya menülerinizi müşterilere gösterebilirsiniz.</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {

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

.wrapper {
    width: 80%;
    margin: 0 auto;
    height: 1000px;
    margin-top: 10%;
    display: flex;

    ul {
        list-style: none;
        text-align: left;
        width: 80%;

        li {
            margin-top: 50px;
            height: 40px;
        }
    }

    .first {
        @include ucle;
    }

    .second {
        @include ucle;
    }

    .third {
        @include ucle;
    }
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
    .wrapper {
        width: 100%;
        margin: 0 auto;
        margin-top: 10%;
        display: inline-block;

        ul {
            list-style: none;
            text-align: center;
            width: 90%;
            margin-bottom: 30px;

            li {
                margin-top: 50px;
                height: 30px;
            }
        }

        .first,
        .second,
        .third {
            display: inline-block;
            width: 100%;

        }
    }
}

@media screen and (min-width:576px) {
    .wrapper {
        width: 100%;
        margin: 0 auto;
        margin-top: 10%;
        display: inline-block;

        ul {
            list-style: none;
            text-align: center;
            width: 90%;
            margin-bottom: 30px;

            li {
                margin-top: 50px;
                height: 30px;
            }
        }

        .first,
        .second,
        .third {
            display: inline-block;
            width: 100%;

        }
    }
}

@media screen and (min-width:768px) {}

@media screen and (min-width:992px) {
    .wrapper {
        width: 80%;
        margin: 0 auto;
        height: 1000px;
        margin-top: 10%;
        display: flex;

        ul {
            list-style: none;
            text-align: left;
            width: 80%;

            li {
                margin-top: 50px;
                height: 40px;
            }
        }

        .first {
            @include ucle;
        }

        .second {
            @include ucle;
        }

        .third {
            @include ucle;
        }
    }
}

@media screen and (min-width:1200px) {}
</style>
