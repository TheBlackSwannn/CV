gsap.registerPlugin(ScrollTrigger);

// gsap.to(".scroll-downs", {
//     x: 200000,
//     duration: 0.0001,
//     scrollTrigger: {
//       trigger: ".scroll-downs",
//       start: "+=100 +=600",
//       markers: true
//     }
// });

const tl = gsap.timeline({ 
    paused: true, 
    defaults: { duration: 2 },
    scrollTrigger: {
        trigger: ".scroll-downs",
        start: "+=100 +=600",
        markers: true
      }
})
.to(".scroll-downs", { opacity: 0 })