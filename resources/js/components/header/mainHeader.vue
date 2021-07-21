<template>
<div>
  <header class="mainHeader">
    <div class="mcontainer">
      <navbar></navbar>
    </div>
  </header>
</div>
</template>

<script>
export default {

  components: {
    navbar: () => import(/* webpackChunkName: "navbar" */ '../parts/navbar.vue')
  },

}
</script>