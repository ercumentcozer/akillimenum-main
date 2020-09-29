<template>
<div class="contact">
    <h1> Bize ulaşın </h1>
    <p>Sorularınızı, isteklerinizi yada şikayetlerinizi aşağıdaki formu doldurarak gönderebilirsiniz. En kısa sürede dönüş yapacağımızdan emin olun.
    </p>
    <div class="info">
        <div id="konum">
            <i class="fas fa-map-marker-alt"></i>
            <p id="baslik">ADRES</p>
            <p>Barış Mahallesi no:3 Beylikdüzü/istanbul</p>
        </div>
        <div id="telefon">
            <i class="fas fa-phone-alt"></i>
            <p id="baslik">TELEFON</p>
            <p>+90 555 878 87 48</p>
        </div>
        <div id="ePosta">
            <i class="fas fa-envelope"></i>
            <p id="baslik">E-POSTA </p>
            <p>info@akillimenum.com</p>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@mixin info {
    width: 33%;
    display: inline-block;
    border-right: 1px solid gray;
    margin-top: 50px;
}

.contact {
    margin-top: 100px;
    text-align: center;

    h1 {

        margin-top: 5%;
    }

    .info {

        div {
            @include info;
            height: 200px;

            i {
                font-size: 40px;
                margin-top: 30px;

                height: 50px;
                display: block;
                color: #ee5253;
            }

            #baslik {
                margin-top: 20px;
                margin-bottom: 0px;
                font-size: 18px;
                font-weight: 900;
                font-family: arial !important;
                font-weight: 900 !important;
            }

            p {
                font-size: 16px;
                font-family: montserrat;
                font-weight: 500;
                margin-top: 10px;

            }
        }

        #konum {
            text-align: center;

        }
    }
}

@media screen and (max-width:576px) {
    @mixin info {
        width: 100%;
        display: inline-block;
        margin-top: 30px;
    }

    .contact {
        margin-top: 100px;
        text-align: center;

        h1 {

            margin-top: 5%;
        }

        .info {

            div {
                @include info;
                height: 200px;
                text-align: center;

                i {
                    font-size: 40px;
                    margin-top: 30px;

                    height: 50px;
                    display: block;
                    color: #ee5253;
                }

                #baslik {
                    margin-top: 20px;
                    margin-bottom: 0px;
                    font-size: 18px;
                    font-weight: 900;
                    font-family: arial !important;
                    font-weight: 900 !important;

                }

                p {
                    font-size: 16px;
                    font-family: montserrat;
                    font-weight: 500;
                    margin-top: 10px;

                }
            }

            #konum {
                text-align: center;

            }
        }
    }
}

@media screen and (min-width:576px) {
       @mixin info {
        width: 100%;
        display: inline-block;
    
        margin-top: 30px;
    }

    .contact {
        margin-top: 100px;
        text-align: center;

        h1 {

            margin-top: 5%;
        }

        .info {

            div {
                @include info;
                height: 200px;
                text-align: center;

                i {
                    font-size: 40px;
                    margin-top: 30px;

                    height: 50px;
                    display: block;
                    color: #ee5253;
                }

                #baslik {
                    margin-top: 20px;
                    margin-bottom: 0px;
                    font-size: 18px;
                    font-weight: 900;
                    font-family: arial !important;
                    font-weight: 900 !important;

                }

                p {
                    font-size: 16px;
                    font-family: montserrat;
                    font-weight: 500;
                    margin-top: 10px;

                }
            }

            #konum {
                text-align: center;

            }
        }
    }
}

@media screen and (min-width:768px) {}

@media screen and (min-width:992px) {
    @mixin info {
    width: 33%;
    display: inline-block;
    border-right: 1px solid gray;
    margin-top: 50px;
}

.contact {
    margin-top: 100px;
    text-align: center;

    h1 {

        margin-top: 5%;
    }

    .info {

        div {
            @include info;
            height: 200px;

            i {
                font-size: 40px;
                margin-top: 30px;

                height: 50px;
                display: block;
                color: #ee5253;
            }

            #baslik {
                margin-top: 20px;
                margin-bottom: 0px;
                font-size: 18px;
                font-weight: 900;
                font-family: arial !important;
                font-weight: 900 !important;
            }

            p {
                font-size: 16px;
                font-family: montserrat;
                font-weight: 500;
                margin-top: 10px;

            }
        }

        #konum {
            text-align: center;

        }
    }
}
}

@media screen and (min-width:1200px) {}
</style>
