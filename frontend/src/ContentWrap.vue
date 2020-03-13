<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="content-wrap" :class="token!=='' ? 'content-wrapper' : ''">
    <!-- Content Header (Page header) -->
    <section class="content">
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'va-content-wrap',
  created () {

  },
  computed: {
    ...mapGetters([
      'token'
    ])
  }
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
