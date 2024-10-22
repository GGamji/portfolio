

// main_visual
const mainSwiper = new Swiper('.main_visual .txt-swiper', {
  effect: 'fade',
  autoplay: {
    delay: 5000
  }
})



// About
gsap.registerPlugin(ScrollTrigger);

gsap.to(".img_box", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".img_box",
    start: "top 90%",
    end: "bottom 80%",
    scrub: true,
    // markers: true,
    // pin: true,
  },
});



// Skill
$(window).ready(function(){
  draw(90, '.skill_html', '#FC490B');
  draw(75, '.skill_css', '#72A8D7');
  draw(60, '.skill_script','#FCB040');
  draw(55, '.skill_jquery','#0865A6');
  draw(50, '.skill_photo','#001E36');
  draw(70, '.skill_illust','#320607');
});

function draw(max, classname, colorname){
  let i=1;
  const func1 = setInterval(function(){
    if(i<max){
      color1(i,classname,colorname);
      i++;
    } else{
      clearInterval(func1);
    }
  },10);
}

function color1(i, classname,colorname){
  $(classname).css({
    "background":"conic-gradient("+colorname+" 0% "+i+"%, #FFF7F0 "+i+"% 100%)"
  });
}

gsap.to(".skill_txt_box", {
  scrollTrigger: {
    trigger: ".skill_txt_box",
    start: "top 40%",
    end: "bottom 90%",
    scrub: true,
    markers: true,
    animation:draw()
    // pin: true,
  },
});



  // project-swiper
  const projectSwiper = new Swiper('.project-swiper', {
    loop: true,
    autoplay: {
      delay: 4000,
    },
    // loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })