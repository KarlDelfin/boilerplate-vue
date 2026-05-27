import { gsap, ScrollTrigger, SplitText, ScrambleTextPlugin, DrawSVGPlugin, MotionPathPlugin } from 'gsap/all'
import Lenis from 'lenis'
import { horizontalLoop } from './horizontalLoop'

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin, DrawSVGPlugin, MotionPathPlugin)

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


    mainTl.from([mainConTexts.lines], {
      filter: 'blur(10px)',
      opacity: 0,
      y: 50,
      stagger: 0.2
    })

    gsap.to('.main_image figure img', {
      filter: 'blur(0px)',
      objectPosition: '0% 50%',
      scrollTrigger: {
        trigger: '.main_image figure img',
        scrub: true,
        start: 'top center',
        end: 'bottom 80%',
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
      rotate: 900,
      scrollTrigger: {
        trigger: '.middle_info',
        scrub: true,
        end: '+=3000'
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

    /* BOTTOM */
    let bottomConTl = gsap.timeline({
       scrollTrigger: {
          trigger: '.bottom_con',
          scrub: true,
          start: 'top bottom',
          end: 'bottom bottom',
        }
      }
    )

    bottomConTl.from('.bottom_con ul li p', {
      filter: 'blur(10px)',
      opacity: 0,
      y: 50,
      stagger: 0.2
    })

    /* SHOWCASE */
    gsap.set(".bottom_con ul li img", { yPercent: -50, xPercent: -50 });

    let firstEnter;
    gsap.utils.toArray(".bottom_con ul li").forEach((el) => {
      const image = el.querySelector(".bottom_con ul li img"),
        setX = gsap.quickTo(image, "x", { duration: 0.4, ease: "power3" }),
        setY = gsap.quickTo(image, "y", { duration: 0.4, ease: "power3" }),
        align = (e) => {
          if (firstEnter) {
            setX(e.clientX, e.clientX);
            setY(e.clientY, e.clientY);
            firstEnter = false;
          } else {
            setX(e.clientX);
            setY(e.clientY);
          }
        },
        
        startFollow = () => document.addEventListener("mousemove", align),
        stopFollow = () => document.removeEventListener("mousemove", align),
        fade = gsap.to(image, {
          autoAlpha: 1,
          ease: "none",
          paused: true,
          duration: 0.1,
          onReverseComplete: stopFollow
        });

      el.addEventListener("mouseenter", (e) => {
        firstEnter = true;
        fade.play();
        startFollow();
        align(e);
      });

      el.addEventListener("mouseleave", () => fade.reverse());
    });

    /* MAINTAINED WEBSITES */
    const maintainedWesitesMarquee = horizontalLoop(
      document.querySelectorAll(".maintained_websites_con .bottom_info div h2"),
      {
        repeat: -1,
        paddingRight: 30,
        speed: 1,
        draggable: true,
      }
    );

    maintainedWesitesMarquee.timeScale(1);

    document.querySelectorAll(".bottom_con .bottom_info div h2").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(maintainedWesitesMarquee, { timeScale: 0.5, duration: 0.2 });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(maintainedWesitesMarquee, { timeScale: 1, duration: 0.2 });
      });
    });

    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",

      onUpdate: (self) => {
        let dir = self.direction;

        gsap.to(maintainedWesitesMarquee, {
          timeScale: dir * 2,
          duration: 0.3
        });
      }
    });

    /* PERSONAL PROECTS */
    const personalProjectsMarquee = horizontalLoop(
      document.querySelectorAll(".personal_projects_con .bottom_info div h2"),
      {
        repeat: -1,
        paddingRight: 30,
        speed: 1,
        draggable: true,
      }
    );

    personalProjectsMarquee.progress(1).timeScale(-1);

    document.querySelectorAll(".personal_projects_con .bottom_info div h2").forEach((item) => {
      item.addEventListener("mouseenter", () => {
          gsap.to(personalProjectsMarquee, {
            timeScale: -0.5,
            duration: 0.2
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(personalProjectsMarquee, {
            timeScale: -1,
            duration: 0.2
          });
        });
    });

    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",

      onUpdate: (self) => {
        let dir = self.direction;
        gsap.to(personalProjectsMarquee, {
          timeScale: dir * -2,
          duration: 0.3
        });
      }
    });

    /* FOOTER */
    gsap.to(".timeline_info h2", {
      duration: 2,
      scrambleText: {
        text: "Let's take it back.",
        chars: "lowerCase",
      },
      scrollTrigger: {
        trigger: '.timeline_info h2',
        start: 'top 90%',
      }
    })

    const pulses = gsap.timeline({
      defaults: {
        scale: 2,
        autoAlpha:1,
        transformOrigin: 'center', 
        ease: "elastic(1.5, 1)"
      }})
      .to(".ball02, .text01, .text_2022", {}, 0.84) 
      .to(".ball03, .text02, .text_2024", {}, 1.36)
      .to(".ball04, .text03, .text_2025", {}, 1.92)

      const main = gsap.timeline({
        scrollTrigger: {
          trigger: "#svg",
          scrub: true,
          start: "top center",
        }
      })
      .to(".ball01", {autoAlpha:1, duration:0.05})
      .from(".theLine", {drawSVG:0, duration:4}, 0)
      .to(".ball01", {motionPath:{
        path:".theLine",
        align:".theLine",
        alignOrigin:[0.5, 0.5],
      }, duration:4}, 0)
      .add(pulses, 0)

      /* CONTACT */
      let contactBgTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact_bg",
          scrub: true,
          start: "top bottom",
          end: 'bottom center',
        }
      })

      contactBgTl.to('.contact_bg', {
        scale: 25,
      })

      contactBgTl.from('.contact_info h2', {
        x: 1500,
      }, 0)
  })
}