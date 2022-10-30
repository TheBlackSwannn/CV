gsap.registerPlugin(ScrollTrigger);

const mouseIconTl = gsap.timeline({ 
    paused: true, 
    defaults: { duration: 2 },
    scrollTrigger: {
        trigger: ".scroll-downs",
        start: "+=100 +=600",
      }
})
.to(".scroll-downs", { opacity: 0 });

const ResumeTl = gsap.timeline({ 
    paused: true, 
    //defaults: { duration: 2 },
    scrollTrigger: {
        trigger: "#it1",
        start: "top center",
        //markers: true
      }
})
.from("#it2", { opacity: 0, x: 500, duration: 1 })
.from("#it1", { opacity: 0, x: -500, duration: 1})
.from("#it3", { opacity: 0, x: -500, duration: 1 })
.from("#it4", { opacity: 0, x: 500, duration: 1 })
.from("#it5", { opacity: 0, x: 500, duration: 1 });