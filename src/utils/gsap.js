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

  /* HERO */
  let heroConVideoTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#hero',
      scrub: true,
      start: 'top -20%',
      end: '+=1000',
      pin: true,
      pinSpacing: false,
      markers: true,
    },
  })

  heroConVideoTl.to('.hero_con video', {
    width: '100vw',
  })

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

  heroConPTl.to(['#header', '#nav'], {
    opacity: 0,
  }, 0)

  /* MAIN */
  let mainConTexts = new SplitText(['.main_con .main_info h2', '.main_con .main_info p', '.main_con .main_info span'], {type: 'lines, lines', linesClass: 'line'})
  let mainTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.main_con',
      scrub: true,
      start: 'top center',
      end: 'bottom center',
      markers: true
    }
  })

  mainTl.from([mainConTexts.lines], {
    filter: 'blur(10px)',
    opacity: 0,
    y: 50,
    stagger: 0.2
  })

}