<template>
  <div id="app" class="doc fb fb-main-between">
    <section class="doc-navbar navbar">
      <navbar></navbar>
    </section>
    <section class="doc-content content">
      <div class="doc-content-comps">
        <router-view />
      </div>
    </section>
    <section class="doc-preview fb fb-main-center fb-cross-center">
      <div class="doc-preview-comps">
        <iframe
          :src="currentUrl"
          frameborder="0"
          class="doc-preview-comps-window"
        ></iframe>
      </div>
    </section>
  </div>
</template>
<script>
import navbar from './components/navbar'
export default {
  name: 'App',
  components: { navbar },
  data() {
    return {
      currentUrl: ''
    }
  },
  watch: {
    $route: {
      handler(to) {
        this.currentUrl =
          'http://component.dev.moredian.com:8000/h5/#' + to.path
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/reset.css';
@import './assets/css/font.css';
@import './assets/css/icon.css';
@import './assets/css/doc.css';

html,
body,
#app {
  height: 100%;
  box-sizing: border-box;
}
#app {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  div {
    box-sizing: border-box;
  }
  .dashboar-view {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
  }
}
.doc {
  height: 100%;
  &-navbar {
    width: 260px;
    max-width: 260px;
    min-width: 260px;
    height: 100%;
    overflow: auto;
    &-list {
      color: #4c555a;
      font-size: 14px;
      min-height: 100%;
      padding: 42px 0 42px 20px;
    }
  }
  &-content {
    height: 100%;
    width: 100%;
    &-comps {
      padding: 0px 10px;
      height: 100%;
      box-sizing: border-box;
      overflow: auto;
    }
  }
  &-preview {
    width: 460px;
    min-width: 460px;
    max-width: 460px;
    height: 100%;
    &-comps {
      margin-top: 60px;
      background-image: url('./assets/images/phone.png');
      background-repeat: no-repeat;
      background-size: 100%;
      height: calc(100% - 60px);
      padding: 100px 16px;
      box-sizing: border-box;
      width: 365px;
      &-window {
        width: 100%;
        height: 580px;
        background-color: #fff;
      }
    }
  }
}
</style>
