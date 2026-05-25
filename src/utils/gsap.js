import { gsap, ScrollTrigger, SplitText, ScrambleTextPlugin, DrawSVGPlugin } from 'gsap/all'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin, DrawSVGPlugin)

export function gsapController() {
  /* LENIS SCROLL */
  let lenis = new Lenis()
  gsap.ticker.add((time) => {
    lenis.raf(time * 300)
  })
  gsap.ticker.lagSmoothing(0)

  window.addEventListener('load', () => {
    /* LOADER */
    gsap.to('.loader_con img', {
      scale: 5,
      scrollTrigger: {
        trigger: '.loader_con',
        scrub: 3,
        start: 'top -15%',
        pin: true,
        pinSpacing: false,
        onEnterBack: function() {
          document.querySelector('.loader_con img').style.display = 'block'
        },
        onLeave: function() {
          document.querySelector('.loader_con img').style.display = 'none'
        }
      }
    })

    gsap.to('.loader_scene_con img', {
      y: -100,
      scrollTrigger: {
        trigger: '.loader_scene_con img',
        start: 'top top',
        scrub: 3,
        pin: true,
        pinSpacing: false
      }
    })

    /* HERO */
    let heroConVideoTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero_con',
        scrub: true,
        start: 'top -20%',
        end: '+=1000',
        pin: true,
      },
    })

    heroConVideoTl.to('.hero_con video', {
      width: '100vw',
    }, 0)

    let heroConH1Span = document.querySelectorAll('.hero_con h1 span');
    heroConH1Span.forEach((span, i) => {


      heroConVideoTl.to(span, {
        x: i % 2 === 0 ? '-250%' : '250%',
      }, 0);
    });

    let heroConPTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero_con p',
        scrub: true,
        start: 'top 10%',
        end: 'bottom -40%',
      },
    })
    
    let heroConP = new SplitText('.hero_con p', { type: 'lines, chars', linesClass: 'line' })
    heroConPTl.from(heroConP.chars, {
      filter: 'blur(10px)',
      y: 100,
      opacity: 0,
      stagger: 0.2,
    })

    gsap.to(['#header', '#nav'], {
      opacity: 0,
      scrollTrigger: {
        trigger: '#loader',
        scrub: true,
        start: 'top top',
        end: 'bottom center',
      },
    })

    let heroConH1SpanST = new SplitText(['.hero_con h1 span:first-child', '.hero_con h1 span:last-child'], {type: 'words'})
    gsap.from(heroConH1SpanST.words, {
      y: -100,
      opacity: 0,
    }, 0)

    /* MAIN */
    let mainConTexts = new SplitText(['.main_info h2', '.main_info p'], {type: 'lines'})
    let mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.main_con',
        scrub: true,
        start: 'top center',
        end: 'bottom bottom',
      }
    })

    mainTl.to('.main_image figure img', {
      filter: 'blur(0px)',
    })

    mainTl.from([mainConTexts.lines], {
      filter: 'blur(10px)',
      opacity: 0,
      y: 50,
      stagger: 0.2
    })

    gsap.to('.main_image figure img', {
      objectPosition: '0% 50%',
      scrollTrigger: {
        trigger: '.main_image figure img',
        scrub: true,
        start: 'top center',
        end: 'bottom center',
      }
    })

    let mainInfoH2SpanTl = gsap.timeline({
       scrollTrigger: {
        trigger: '.main_info',
        start: 'top 30%',
        end: 'bottom bottom',
      }
    })
    mainInfoH2SpanTl.to('.location', {
      rotate: 3,
      clipPath: 'inset(0% 0% 0% 0%)'
    })
    mainInfoH2SpanTl.to('.position', {
      rotate: -2,
      clipPath: 'inset(0% 0% 0% 0%)'
    })
    
    /* MIDDLE */
    gsap.to('.middle_info figure img', {
      rotate: 360,
      scrollTrigger: {
        trigger: '.middle_info',
        scrub: true,
      }
    })

    gsap.to('.middle_info h2', {
      scrollTrigger: {
        trigger: '.middle_info',
        scrub: true,
        start: 'top center',
        end: 'bottom center',
        pin: true,
      }
    })

    gsap.from('.middle_technology figure img', {
      x: 100,
      opacity: 0,
      filter: 'blur(10px)',
      stagger: {
        each: 0.2
      },
      scrollTrigger: {
        trigger: '.middle_technology',
        scrub: true,
        start: 'top 70%',
        end: 'bottom center',
      }
    })
  })
}