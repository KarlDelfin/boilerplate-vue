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
        <div class="version">🡺V2.0</div>
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

  <!-- LOADER -->
  <div id="loader">
    <div class="loader_con">
        <img src="../assets/images/person-in-window.png" alt="person in window">
    </div>
    <div class="loader_scene_con">
      <img src="../assets/images/mountain.jpg" alt="mountain">
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

  <!-- MAIN -->
  <div id="main">
    <div class="wrapper">
      <div class="main_con">
        <div class="main_info">
          <h2>I specialize in creating <mark>user-friendly interfaces</mark> based in <span class="location">Cebu, Philippines</span></h2>
          <h2>I am committed to continuously learning new technologies to advance my growth as a <span class="position">Web Developer</span></h2>
          <p>
            My name is Karl. A <mark>passionate web developer</mark>, I build memorable digital experiences.
            <span>🡺V2.0</span>
          </p>
        </div>
        <div class="main_image">
          <figure><img src="../assets/images/river.jpg" alt="river" /></figure>
        </div>
      </div>
    </div>
  </div>

  <!-- MIDDLE -->
  <div id="middle">
    <div class="middle_con">
      <div class="middle_info">
        <figure><img src="../assets/images/pin-wheel.webp" alt="pin wheel"></figure>
        <h2>Technology Stack</h2>
      </div> 
      <div class="middle_technology">
        <figure><img src="../assets/images/html.webp" alt="HTML"></figure>
        <figure><img src="../assets/images/css.webp" alt="CSS"></figure>
        <figure><img src="../assets/images/javascript.webp" alt="JavaScript"></figure>
        <figure><img src="../assets/images/c-sharp.webp" alt="CSharp"></figure>
        <figure><img src="../assets/images/vue.webp" alt="Vue"></figure>
        <figure><img src="../assets/images/gsap.webp" alt="GSAP"></figure>
      </div>
      
    </div>
  </div>

  <!-- BOTTOM -->
  <div id="bottom"></div>

  <!-- FOOTER -->
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
