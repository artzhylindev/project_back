<template>
  <div>
    <div class="mainWrapper">
      <div class="contentWrapper">
        <mainHeader></mainHeader>
        <div class="mcontainer">
          <post></post>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {

  components: {
    mainHeader: () => import(/* webpackChunkName: "main-header" */ './header/mainHeader.vue'),
    // navbar: () => import(/* webpackChunkName: "navbar" */ './parts/navbar.vue'),
    post: () => import(/* webpackChunkName: "post" */ './pages/posts/index.vue'),
  },

}
</script>