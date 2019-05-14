<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Username: {{splitName()}}</p>
        <p>Many Details</p>

        <button @click="resetName">Reset</button>
    </div>
</template>

<script>
export default{
  props:{
    myName:{
      type:String,
    }
  },
  methods:{
    splitName(){
      return this.myName.split("").reverse().join("");
    },
    resetName(){
      this.myName='Timi';
      this.$emit('namereset',this.myName);
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

