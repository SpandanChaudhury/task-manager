<template>
  <v-app>
    <v-main>
      <div>
        <router-view></router-view>

      </div>
    </v-main>
  </v-app>
</template>

<script>
// import { useRouter } from 'vue-router';
export default ({
  name: 'App',
  created(){
    console.log('created');
    // console.log(this.user);
    // const router = useRouter();

  },
  data: () => {
    // user: null
  }
})
</script>

