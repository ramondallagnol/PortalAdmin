<template>
  <div id="app">
    <div :class="token!=='' ? 'wrapper' : ''">
      <va-navibar v-if="token"></va-navibar>
      <va-slider v-show="token" :slideMenuItems="slideMenuItems"></va-slider>
      <va-content-wrap></va-content-wrap>
      <Modal></Modal>
    </div>
  </div>
</template>

<script>
import VANaviBar from 'NaviBar.vue'
import VASlider from 'Slider.vue'
import VAContentWrap from 'ContentWrap.vue'
import Modal from './components/Modal.vue'
import store from './vuex/store.js'
import slideMenuItems from './lib/slideMenuItems.js'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      slideMenuItems: slideMenuItems,
      isLogado: false
    }
  },
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  methods: {
    ...mapActions([
      'getUser',
      'userLogout'
    ])
  },
  created () {
    if (this.$store.getters.isAuthenticated) {
      this.getUser({'token': this.token}).then((result) => {}).catch(() => {
        this.userLogout().then(() => this.$router.push('/'))
      })
    }
  },
  components: {
    'va-navibar': VANaviBar,
    'va-slider': VASlider,
    'va-content-wrap': VAContentWrap,
    Modal
  },
  store
}
</script>

<style>

</style>
