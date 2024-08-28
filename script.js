gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#mouse")

page1Content.addEventListener("mousemove",function(dets){
    gsap.to(mouse,{
        x:dets.x,
        y:dets.y,
    })
    // cursor.style.left=dets.x+"px"
    // cursor.style.top=dets.y+"px"
})

page1Content.addEventListener("mouseenter",function(){
    gsap.to(mouse,{
        scale:1,
    })
})

page1Content.addEventListener("mouseleave",function(){
    gsap.to(mouse,{
        scale:0,
    })
})

function page2Animation(){
    gsap.from("#parta h5,#page2-nav h5,#page2-content h4",{
        y:150,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 50%",
            end:"top 70%",
            scrub:2
        }
    })
}
page2Animation()

function page4Animation(){
    gsap.from("#page4-content",{
        y:150,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            start:"top 50%",
            end:"top 70%",
            scrub:2
        }
    })
}
page4Animation()

function page5Animation(){
    gsap.from("#page5-content",{
        y:150,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            start:"top 50%",
            end:"top 70%",
            scrub:2
        }
    })
}
page5Animation()

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

function page7Animation(){
    gsap.from("#top-right,#top-left,#bot-top,#bot-bot",{
        y:150,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page7",
            scroller:"#main",
            start:"top 50%",
            end:"top 70%",
            scrub:2,
        }
    })
}
page7Animation()

var menu=document.querySelector("#Menu")
var open=document.querySelector("#menubar")

menu.addEventListener("click",function(){
    gsap.to("#menubar",{
        duration:0.65,
        opacity:1, 
        ease:"power1.inOut",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        zIndex:"12"
    })
    gsap.from("#right-bar h2,#left-bar",{
        y:30,
        stagger:0.10,
        ease:"power4.inOut",
        delay:-0.1,
        duration:1,
    })
})


var close=document.querySelector("#rightest")
close.addEventListener("click",function(){
    gsap.to("#menubar",{
        y:-100,
        duration:0.65,
        delay:0.15,
        ease:"power1.inOut",
        opacity:0, 
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        zIndex:"-3"
    })
    gsap.to("#right-bar h2,#left-bar",{
        y:40,
        stagger:0.10,
        ease:"power4.inOut",
        delay:-0.1,
        duration:1,
    })
})
