<template>
  <!-- HEADER -->
  <div id="header">
    <div class="wrapper">
      <div class="header_con">
        <p>
          Quiet creator, <mark>bringing ideas to life,</mark
          ><span>through motion, detail and softness.</span>
        </p>
      </div>
    </div>
  </div>

  <!-- NAV -->
  <div id="nav">
    <div class="wrapper">
      <div class="nav_con">
        <div class="version">🡺V3.0</div>
        <div class="social_media">
          <a href="https://m.me/dkhrl" target="_blank">Facebook</a>
          <a href="mailto:dkhrl2000@gmail.com" target="_blank">Google</a>
          <a href="https://www.linkedin.com/in/karl-john-delfin-33b3b22a4/" target="_blank"
            >LinkedIn</a
          >
        </div>
        <div></div>
      </div>
    </div>
  </div>
  <!-- HERO -->
  <div id="hero">
    <div class="hero_con">
      <video src="../assets/videos/video.mp4" autoplay muted loop></video>
      <h1>
        <span>Karl</span>
        <span>Delfin</span>
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
    </div>
  </div>
  <div id="main">
    <div class="wrapper">
      <div class="main_con">
        <div class="main_info">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur
            adipiscing elit quisque faucibus.
          </h2>
          <p>
            My name is Karl. A passionate web developer, I build memorable digital experiences.
            <span>🡺V3.0</span>
          </p>
        </div>
        <div class="main_img">
          <figure><img src="" alt="" /></figure>
        </div>
      </div>
    </div>
  </div>
  <div id="middle"></div>
  <div id="bottom"></div>
  <div id="footer"></div>
</template>

<script>
import { gsapController } from '@/utils/gsap'
export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {
    gsapController()
  },
}
</script>
