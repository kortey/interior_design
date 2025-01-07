gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip, CSSRulePlugin);

const header = document.querySelector('header');
const images = document.querySelectorAll('img');
const headig = document.querySelector('h1');
const catigories = gsap.utils.toArray('h6');


const beforeRule = CSSRulePlugin.getRule(".message_section::before");
const afterRule = CSSRulePlugin.getRule("h2::after");




window.addEventListener("DOMContentLoaded", () => {
    const state = Flip.getState(".overlay");
    Flip.from(state, {
        left:'100vw',
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
            gsap.set(".overlay", {display: "none"});
        }
    });

    const tl = gsap.timeline({delay:1.5});
    
    tl.from('.heroimage', {
        height:"100vh",
        opacity: 0,
        duration: 2,
        
    }).from('h1', {
        y: 100,
        opacity: 0,
        duration: 2,
    }, "-=1").from(beforeRule, {
        width:"0px",
        duration: 2,
    }, "-=1.5").from("header", {
        opacity: 0,
        duration: 2,
    }, "-=1.5");

 
    
 gsap.to(".section2 img", {
        scrollTrigger: {
            trigger: ".section2",
            start: "top top",
            end: "bottom center",
            
        },
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
    });

    gsap.from(".section3 h2", {
        scrollTrigger: {
            trigger: ".section3 h2",
            start: "top bottom",
            end: "bottom center",
            scrub: true,
        },
      
        opacity:1,
        duration: 2,
    });

    gsap.from(".section3 p", {
        scrollTrigger: {
            trigger: ".section3",
            start: "top bottom",
            end: "bottom center",
            scrub: true,
        },
        text: "",
        duration: 0.01,
        ease:"power2.in",
    });


     
    
    
})



    