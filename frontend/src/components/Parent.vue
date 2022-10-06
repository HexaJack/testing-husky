<template>
    <div >
        <!-- Parent -->
        <Child></Child>
    </div>
  </template>
  
  <script>
import Child from './Child.vue';
  export default {
    name: 'Parent_name',
    components: {
    Child,
  }
}
  </script>
  