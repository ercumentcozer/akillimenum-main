<template>
  <div class="wrapper">
    <ul class="wrapper">
      <a href="https://akillimenum.com">
        <li>Ana Sayfa</li>
      </a>  
      <a href="https://panel.akillimenum.com">
        <li>Giriş</li>
      </a>
      <a href="/hakkimizda">
        <li>Hakkımızda</li>
      </a>
      <a href="/kunye">
        <li>Künye</li>
      </a>
    
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-left: 10%;

  ul {
    width: 350px;

    li {
      list-style: none;
      font-size: 20px;
      height: 60px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      font-family: arial, bold;
      box-sizing: border-box;
      padding-left: 10px;

      &:hover {
        border-left: 3px solid orangered;
      background: #535c68;
      text-decoration: none;
      color: white;
      }
    }
    a{
      text-decoration: none;
    }
  }
}
@media screen and (max-width: 576px) {
   .wrapper{
    display: none;
  }
}

@media screen and (min-width: 576px) {}

@media screen and (min-width: 768px) {}

@media screen and (min-width: 992px) {}

@media screen and (min-width: 1200px) {
 
}
</style>
