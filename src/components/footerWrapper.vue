<template>
<footer>
    <div class="wrapper">
        <div class="first">
            <img id="logo" src="@/assets/logo.png" width="40%" />
            <p>
                Restoran, Kafe, Otel ve benzeri işletmelerinizin Dijital Çözüm Ortağı!
            </p>
            <div class="direction">
                <i class="fas fa-caret-right">
                   <a href="https://panel.akillimenum.com">
                    Giriş
                    </a>
                  
                </i>
                <i class="fas fa-caret-right">
                    <router-link to="/hakkimizda">Hakkımızda</router-link>
                </i>
                <i class="fas fa-caret-right">
                    <router-link to="kunye">Künye</router-link>
                </i>
            </div>
        </div>
        <div class="second">
            <div class="location">
                <h4>İstanbul Ofis</h4>
                <p style="font-weight:300; font-family:aspira;height:50px; font-size:15px;">
                    Barış Mahallesi No:3 Beylikdüzü İstanbul
                </p>
                <ul>
                    <li>
                        <p id="first">Telefon</p>
                        <span> : + 90 555 878 87 48</span>
                    </li>
                    <li>
                        <p id="first">Bilgi</p>
                        <span> : info@akillimenum.com</span>
                    </li>
                    <li>
                        <p id="first">Şikayet</p>
                        <span> : sikayet@akillimenum.com</span>
                    </li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="third">
            <div class="location">
                <h4>Bizleri Takip Edin</h4>
                <p style="font-weight:300; height:50px; margin-bottom:0px; font-family:aspira; font-size:15px;">
                    Sosyal medya hesaplarımızı takip ederek yeniliklerimiz ve
                    kampanyalardan haberdar olabilirsiniz!
                </p>
                <div class="icons">
                    <a href="https://www.facebook.com/akillimenumcom" target="_blank"> <i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/akillimenumcom/"> <i class="fab fa-instagram"></i></a>
                    <a href="https://www.twitter.com/akillimenumcom/"> <i class="fab fa-twitter"></i></a>
                    <a href="mailto:mail@akillimenum.com"> <i class="far fa-envelope"></i></a>
                </div>
            </div>
        </div>
    </div>
    <br />
    <center>
        <p style="color:rgba(131, 149, 167,1.0); font-size:15px;" class="p-3 m-0">
            <i class="fab fa-vuejs" style="margin-right:5px;"></i>vue js
            katkılarıyla
        </p>
    </center>
</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
    a {
        text-decoration: none;
        color: white;
    }

    background: #333;

    .wrapper {
        width: 80%;
        margin: auto;
        display: flex;

        .first,
        .second,
        .third {
            width: 33%;
            display: inline-block;
        }

        .first {
            color: white;
            font-family: montserrat;
            line-height: 20px;

            #logo {
                margin-left: 10%;
                margin-top: 50px;
                border-left: 3px solid crimson;
            }

            p {
                margin-top: 20px;
                margin-left: 10%;
            }

            .direction {
                margin-top: 40px;
                margin-bottom: 10%;

                i {
                    display: block;
                    margin-left: 10%;
                    margin-top: 15px;
                    height: 30px;
                    border-bottom: 1px solid rgba(87, 101, 116, 1);

                    a {
                        margin-left: 10px;
                        font-family: arial;
                    }
                }
            }
        }

        .second,
        .third {
            color: white;
            font-weight: 900;

            .location {
                margin-left: 30%;
                line-height: 20px;
                font-size: 14px;

                h4 {
                    margin-top: 100px;
                    font-family: montserrat;
                    font-weight: 700;
                }

                ul {
                    margin-top: 30px;
                    padding: 0px;
                    width: 110%;

                    li {
                        list-style: none;
                        font-size: 13px;

                        #first {
                            display: inline-block;
                            width: 55px !important;
                        }
                    }
                }
            }
        }

        .third {
            .icons {
                display: flex;
                margin-top: 10%;

                i {
                    font-size: 18px;
                    margin-left: 10px;
                    padding: 10px;
                    border: 1px solid crimson;
                    border-radius: 5px;
                }
            }
        }
    }
}

@media screen and (max-width: 576px) {
    footer {
        background: #333;
        margin-top: 10px;

        .wrapper {
            width: 90%;
            display: inline-block;

            .first,
            .second,
            .third {
                width: 100%;
                display: inline-block;
                text-align: left;
            }

            .first {
                color: white;
                font-family: montserrat;
                line-height: 20px;

                #logo {
                    margin-left: 10%;
                    margin-top: 50px;
                    border-left: 3px solid crimson;
                }

                p {
                    margin-top: 20px;
                    margin-left: 10%;
                }

                .direction {
                    margin-top: 40px;
                    margin-bottom: 10%;
                    margin: 0 auto;

                    i {
                        display: block;

                        margin-top: 15px;
                        height: 30px;
                        border-bottom: none;

                        a {
                            margin-left: 10px;
                            font-family: arial;
                        }
                    }
                }
            }

            .second,
            .third {
                color: white;
                font-weight: 900;

                .location {
                    margin-left: 10%;
                    line-height: 20px;
                    font-size: 14px;

                    h4 {
                        margin-top: 100px;
                        font-family: montserrat;
                        font-weight: 700;
                    }

                    ul {
                        margin-top: 30px;
                        padding: 0px;

                        li {
                            list-style: none;

                            #first {
                                display: inline-block;
                                width: 55px !important;
                            }
                        }
                    }
                }
            }

            .third {
                .icons {
                    display: flex;
                    margin-top: 20%;
                    margin-bottom: 10%;

                    i {
                        font-size: 18px;
                        margin-left: 10px;
                        padding: 10px;
                        border: 1px solid crimson;
                        border-radius: 5px;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 576px) {
    footer {
        background: #333;
        margin-top: 10px;

        .wrapper {
            width: 90%;
            display: inline-block;

            .first,
            .second,
            .third {
                width: 100%;
                display: inline-block;
                text-align: left;
            }

            .first {
                color: white;
                font-family: montserrat;
                line-height: 20px;

                #logo {
                    margin-left: 10%;
                    margin-top: 50px;
                    border-left: 3px solid crimson;
                }

                p {
                    margin-top: 20px;
                    margin-left: 10%;
                }

                .direction {
                    margin-top: 40px;
                    margin-bottom: 10%;
                    margin: 0 auto;

                    i {
                        display: block;

                        margin-top: 15px;
                        height: 30px;
                        border-bottom: none;

                        a {
                            margin-left: 10px;
                            font-family: arial;
                        }
                    }
                }
            }

            .second,
            .third {
                color: white;
                font-weight: 900;

                .location {
                    margin-left: 10%;
                    line-height: 20px;
                    font-size: 14px;

                    h4 {
                        margin-top: 100px;
                        font-family: montserrat;
                        font-weight: 700;
                    }

                    ul {
                        margin-top: 30px;
                        padding: 0px;

                        li {
                            list-style: none;

                            #first {
                                display: inline-block;
                                width: 55px !important;
                            }
                        }
                    }
                }
            }

            .third {
                .icons {
                    display: flex;
                    margin-top: 20%;
                    margin-bottom: 10%;

                    i {
                        font-size: 18px;
                        margin-left: 10px;
                        padding: 10px;
                        border: 1px solid crimson;
                        border-radius: 5px;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 768px) {}

@media screen and (min-width: 992px) {
    footer {
        background: #333;

        .wrapper {
            width: 80%;
            margin: auto;
            display: flex;

            .first,
            .second,
            .third {
                width: 33%;
                display: inline-block;
            }

            .first {
                color: white;
                font-family: montserrat;
                line-height: 20px;

                #logo {
                    margin-left: 10%;
                    margin-top: 50px;
                    border-left: 3px solid crimson;
                }

                p {
                    margin-top: 20px;
                    margin-left: 10%;
                }

                .direction {
                    margin-top: 40px;
                    margin-bottom: 10%;

                    i {
                        display: block;
                        margin-left: 10%;
                        margin-top: 15px;
                        height: 30px;
                        border-bottom: 1px solid rgba(87, 101, 116, 1);

                        a {
                            margin-left: 10px;
                            font-family: arial;
                        }
                    }
                }
            }

            .second,
            .third {
                color: white;
                font-weight: 900;

                .location {
                    margin-left: 30%;
                    line-height: 20px;
                    font-size: 14px;

                    h4 {
                        margin-top: 100px;
                        font-family: montserrat;
                        font-weight: 700;
                    }

                    ul {
                        margin-top: 30px;
                        padding: 0px;

                        li {
                            list-style: none;

                            #first {
                                display: inline-block;
                                width: 55px !important;
                            }
                        }
                    }
                }
            }

            .third {
                .icons {
                    display: flex;
                    margin-top: 10%;

                    i {
                        font-size: 18px;
                        margin-left: 10px;
                        margin-top: 20px;
                        padding: 10px;
                        border: 1px solid crimson;
                        border-radius: 5px;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 1200px) {}
</style>
