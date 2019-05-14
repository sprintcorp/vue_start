<template>

       <!--<Head v-for="(n,index) in 5" :key="index"></Head>-->
        <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
            </div>
        </div>
    </div>

</template>

<script>
import User from './Component/User.vue';
export default {



        components: {
            appUser: User
        }


}
</script>

<style>
 div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
