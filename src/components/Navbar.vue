<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">VueLog</a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <span class="navbar-item is-size-7 is-dark"></span>
      </div>
      <div class="navbar-end">
        <div class="navbar-item is-size-7 is-dark">
          <router-link tag="a" to="/make/code">Code</router-link>
        </div>
        <div class="navbar-item is-size-7 is-dark">
          <router-link tag="a" to="/make/pr">Presentation</router-link>
        </div>        
      </div>
    </div>
  </nav>
</template>
<script>

import { SWITCH_LOCALE, ADD_USER, ALL_USER } from '../store/mutation-constants'

export default {
  name: 'Navbar',
  data () {
    return {
      icon: 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-1/p40x40/16999089_1425550700808814_7783169912414950586_n.jpg?oh=ede0d9dc1f2d05273397d7416bba6eaf&oe=5AB3DD18'
    }
  },
  computed: {
    my_locale () {
      return this.$i18n.locale
    }
  },
  methods: {
    addUser: function (e) {
      this.$store.dispatch(ADD_USER)
    },
    allUser: function (e) {
      this.$store.dispatch(ALL_USER)
    },
    change_en_US: function (e) {
      this.$i18n.locale = 'en-US'
      this.$store.dispatch(SWITCH_LOCALE, this.$i18n.locale)
    },
    change_ko_KR: function (e) {
      this.$i18n.locale = 'ko-KR'
      this.$store.dispatch(SWITCH_LOCALE, this.$i18n.locale)
    }
  }
}
</script>

<style lang="less" scoped>

@import "../sass/default.less";

nav {
  &.navbar {
    min-height: none;
    background-color: @nav-background;
    border-bottom: solid 1px #dbdbdb;
    overflow: auto;

    .navbar-brand {
        float:left;
    }

    .navbar-menu {
        float: right;
        display: flex;

        .navbar-start {
            flex: 1;
        }

        .navbar-end {
            flex: 1;
            width: 300px;
        }
    }



    .navbar-item {
        display:inline-block;
        padding-top: 10px;
        padding-bottom: 10px;
    }
  }
}

.navbar-brand > .navbar-item {
    padding-left: 10px
}
  

.profile-image {
  border-radius: 50%;
  height: 30px;
  width: 30px;

}
  
</style>
