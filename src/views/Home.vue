<template>
    <div class="login">
        <p>Click on this button to login</p>
        <button class= "button" @click="loginWithAutho">Login with autho</button>
      </div>
</template>
<script>
import {sdk} from '../../init';

  export default {
    name: 'Home',
    methods: {
      loginWithAutho: async function(){
        try {
          await sdk.account.createOAuth2Session('auth0', 'http://localhost:8081/dashboard', 'http://localhost:8081/error')
        } catch (error) {
          console.log(error)
        }
      }
    }
  };
</script>
<style>
.login, .user-details{
  width: 450px;
  height: 150px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border-radius: 7px;
  margin: 10% auto;
  text-align: center;
  padding: 30px;
}
.button{
  width: 150px;
  height: 40px;
  background-color: #111;
  color: #fff;
  border-radius: 30px;
}
span{
  font-weight: 600;
  
}

</style>