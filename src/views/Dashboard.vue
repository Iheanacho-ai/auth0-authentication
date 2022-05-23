<template>
    <div class="user-details">
        <p><span>Name: </span>{{name}}</p>
        <p><span>Email: </span>{{email}}</p>
        <button class= "button" @click="logOutWithAutho">LogOut with Auth0</button>
    </div>
    
</template>
<script>
import {sdk} from '../../init';

  export default {
    name: 'Dashboard',
    data(){
      return{
        namme: '',
        email: '',
        response: ''
      }
    },
    mounted: function(){
        this.getUserSession()
    },
    methods: {
      getUserSession: async function(){
        try {
          this.response = await sdk.account.get()

          if (this.response) {
            this.name = this.response.name,
            this.email = this.response.email 
          }
          
        } catch (error) {
          console.log(error)
        }
      },
      logOutWithAutho: async function(){
        try {
          await sdk.account.deleteSession('current')
          alert('logout successful')
          this.$router.push('/') 
        } catch (error) {
          console.log(error)
        }
      }
    }
  };


</script>
<style>

</style>