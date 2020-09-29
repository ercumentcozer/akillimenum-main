<template>
<div class="main"   >
    <header>
        <div class="img">
            <nav class="containers">
                <img id="logo" src="https://i.ibb.co/zrVxd47/logo.png" />
                <div class="dropdown" @click="navbarAc = !navbarAc">
                    <i class="fas fa-bars" v-show="bars"></i>
                </div>

                <div class="navbar" v-show="showNavbar" :class="{ respo: navbarAc }">
                    <a href="#tanitim">ÇÖZÜMLER</a>
                    <a href="#fiyat">FİYATLANDIRMA</a>
                    <a href="#sss">SSS</a>
                    <a href="#dene" class="dene">HEMEN DENE</a>
                    <a href="giris">GİRİŞ</a>
                </div>
            </nav>
            <div class="tanitim">
                <h1 class="animate__animated animate__backInRight">Cebinizdeki Dijital Menünüz</h1>
                <h2 class="animate__animated animate__backInLeft">
                    İşletmenizde Akıllı Menüm kullanarak ürünlerinizi baskı maliyetine katlanmaksızın sunabilir, müşteri memnuniyetini ve satışlarınızı arttırabilirsiniz.
                </h2>
            </div>
        </div>
    </header>
    <div class="resp Tanitim">
        <h1>Cebinizdeki Dijital Menünüz</h1>
        <h2>
            Dünyanın 1 numaralı dijital menü platformu Akıllı Menüm, menülerinizi
            dijital hale getirerek satışlarınızı ve müşteri memnuniyetini
            arttırmanızı sağlar.
        </h2>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            fullWidth: null,
            showNavbar: true,
            active: true,
            navbarAc: false,
            bars: false,
        };
    },
    mounted() {
        window.addEventListener("resize", this.handleResize);
    },
    beforeDestroy: function () {
        window.removeEventListener("resize", this.handleResize);
    },
    methods: {
        handleResize(event) {
            this.fullWidth = document.documentElement.clientWidth;
        },
    },
    watch: {
        fullWidth: function (yeni) {
            if (yeni < 992) {
                this.showNavbar = false;
                this.bars = true;
                this.navbarAc = false;
            } else {
                this.showNavbar = true;
                this.bars = false;
                this.navbarAc = false;
            }
        },
    },
    created() {
        this.fullWidth = document.documentElement.clientWidth;
     
    },
};
</script>

<style lang="scss" scoped>
.containers {
    margin-left: 11%;
    margin-right: 8%;
}

.resp {
    display: none;
}

header {
    .resp {
        display: none;
    }

    #logo {
        width: 120px !important;
        margin-bottom: 10px;
        height: 120px;
    }

    .img {
        width: 100%;
        max-height: 100%;
        border-bottom-left-radius: 45%;
        border-bottom-right-radius: 45%;
        background-image: url("../assets/stok.jpg");
        background-size: 100% 100%;
        padding-bottom: 15%;

        nav {
            display: flex;
            justify-content: space-between;

            .fas {
                color: white;
                font-size: 20px;
                margin-top: 50px;
            }

            .navbar {
                display: flex;
                margin-bottom: 10px;
            }

            a {
                margin-left: 30px;
                color: #333;
                text-decoration: none;
                cursor: pointer;
                transition: color 1s;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: 900;

                &:hover {
                    color: orangered;
                }
            }
        }

        .tanitim {
            width: 40%;
            margin-left: 11%;
            color: white;
            margin-top: 5%;

            h2 {
                font-size: 20px;
                font-weight: 300;
            }
        }
    }
}

.respo {
    display: inline-block !important;
    width: 80%;
    margin-left: 0px !important;
    margin-top: 80px !important;
    word-wrap: break-word;
    background: white;
    -webkit-box-shadow: -4px 16px 14px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -4px 16px 14px -9px rgba(0, 0, 0, 0.75);
    box-shadow: -4px 16px 14px -9px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    border-top-right-radius: 0px;
    position: absolute;

    .dene {
        color: white !important;
        border-radius: 10px;
        background: #2ed573;
        padding: 5px;
    }

    a {
        text-align: left;
        margin-left: 0px !important;
        margin: 0 auto;
        font-size: 15px;
        margin-top: 15px;
        width: 100%;
        display: block;
        text-align: center;
    }
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
@media screen and (max-width: 576px) {
    .resp {
        display: inline-block;
    }

    .main {
        width: 100%;

        .img {
            width: 100%;

            border-bottom-left-radius: 45%;
            border-bottom-right-radius: 45%;
            background-image: url("../assets/stok.jpg");
            background-size: 100% 100%;
            padding-bottom: 20%;

            nav {
                display: flex;

                .navbar {
                    display: none;
                    margin-left: 35%;
                    margin-top: 40px;

                    a {
                        margin-left: 30px;
                        cursor: pointer;
                        color: black;
                        font-weight: 600;

                        &:hover {
                            color: orangered;
                        }
                    }
                }
            }

            .tanitim {
                display: none;
            }
        }
    }

    .Tanitim {
        margin-top: 20px;

        h1 {
            text-align: center;
            font-size: 30px;
            font-family: montserrat;
            font-weight: 600;
        }

        h2 {
            font-size: 15px;
            width: 90%;
            margin-top: 20px !important;
            margin: 0 auto;
            text-align: center;
        }
    }
}

@media screen and (min-width: 576px) {
    .containers {
        margin-left: 9%;
        margin-right: 5%;
    }

    .resp {
        display: inline-block;
    }

    .main {
        width: 100%;

        .img {
            width: 100%;

            border-bottom-left-radius: 45%;
            border-bottom-right-radius: 45%;
            background-image: url("../assets/stok.jpg");
            background-image: url("../assets/stok.jpg");
            background-size: 100% 100%;
            padding-bottom: 20%;

            nav {
                display: flex;

                .navbar {
                    margin-top: 0px;

                    a {
                        margin-left: 30px;
                        cursor: pointer;
                        color: black;
                        font-weight: 600;

                        &:hover {
                            color: orangered;
                        }
                    }
                }
            }

            .tanitim {
                display: none;
            }
        }
    }

    .Tanitim {
        margin-top: 20px;

        h1 {
            text-align: center;
            font-size: 30px;
            font-family: montserrat;
            font-weight: 600;
        }

        h2 {
            font-size: 15px;
            width: 90%;
            margin-top: 20px !important;
            margin: 0 auto;
            text-align: center;
        }
    }
}

@media screen and (min-width: 768px) {}

@media screen and (min-width: 992px) {
    .img {
        height: 100% !important;
    }

    .Tanitim {
        display: none !important;
    }

    .tanitim {
        display: block !important;
    }

    .navbar a {
        color: white !important;

        &:hover {
            color: orangered !important;
        }
    }
}

@media screen and (min-width: 1200px) {
    .navbar a {
        color: white !important;

        &:hover {
            color: orangered !important;
        }
    }
}
</style>
