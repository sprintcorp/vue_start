<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changename">change name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName='name' @namereset="name = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data(){
          return{
            name:'Timi'
          }
        },
        methods:{
          changename(){
            this.name="Frederick";
          }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
