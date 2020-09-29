<template>
<div id="dene">
    <h2 style="text-align:center; margin-top:5%;">Ücretsiz Demo Talebinde Bulunmak için Bizimle İletişme Geçin</h2>
    <form>
        <input type="text" @blur="$v.name.$touch()" id="name" placeholder="Ad Soyad / İşletme Adı">
        <input type="text" id="ePosta" v-model="email" @blur="$v.email.$touch()" :class="{redBorder: $v.email.$error}" placeholder="E-mail Adresi">
        <small v-if="!$v.email.email" class="form-text text-danger">Geçerli Bir E mail Adresi giriniz</small>
        <input type="tel" id="callNumber" placeholder="Telefon Numaranız" pattern="[0-9]{11}" required>
        <textarea name="" id="message" placeholder="İşletmeniz Hakkında Bilgi Veriniz"></textarea>
        <br>
        <center style="width:95%;"><button class="btn btn-primary">Gönder</button></center>
    </form>
</div>
</template>

<script>
import {
    required,
    email
} from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            email: null
        }
    },
    validations: {
        name: {
            required
        },
        email: {
            required,
            email
        }
    }
}
</script>

<style lang="scss" scoped>
form {
    width: 80%;
    margin: 0 auto;
    margin-top: 5%;

    input,
    textarea {
        border: 1px solid gray;
        outline-color: rgba(0, 210, 211, 0.3);
        border-radius: 3px;
    }

    #name,
    #ePosta {
        width: 48%;
        height: 35px;
        padding-left: 10px;
    }

    #ePosta {
        margin-left: 2%;

    }

    #callNumber {
        width: 98.5%;
        height: 35px;
        margin-top: 10px;
        padding-left: 10px;
    }

    #message {
        margin-top: 10px;
        width: 98.5%;
        height: 200px;
        padding-left: 10px;
        padding-top: 10px;
    }

}

@media screen and (max-width:576px) {
    form {
        width: 90%;
        margin: 0 auto;
        margin-top: 5%;

        input,
        textarea {
            border: 1px solid gray;
            outline-color: rgba(0, 210, 211, 0.3);
            border-radius: 3px;
        }

        #name,
        #ePosta {
            width: 48%;
            height: 35px;
            padding-left: 10px;
        }

        #ePosta {
            margin-left: 2%;

        }

        #callNumber {
            width: 98.5%;
            height: 35px;
            margin-top: 10px;
            padding-left: 10px;
        }

        #message {
            margin-top: 10px;
            width: 98.5%;
            height: 200px;
            padding-left: 10px;
            padding-top: 10px;
        }

        button {
            width: 30%;
            height: 40px;
            margin-top: 10px;
            text-align: center !important;
            padding-left: 7%;
        }
    }
}

@media screen and (min-width:576px) {}

@media screen and (min-width:768px) {}

@media screen and (min-width:992px) {
    .redBorder {
        outline: none;
        border-color: red !important;
    }
}

@media screen and (min-width:1200px) {}
</style>
