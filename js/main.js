
// main_visual
const mainSwiper = new Swiper('.main_visual .txt-swiper', {
  effect: 'fade',
  autoplay: {
    delay: 5000
  }
})


// project-swiper
const projectSwiper = new Swiper('.project-swiper', {
  autoplay: {
    delay: 3000,
  },
  // loop: true,
  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
  }
})


// About
gsap.registerPlugin(ScrollTrigger);

gsap.to(".img_box", {
  scale: 1.3,
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
  draw(75, '.skill_css', '#1775BB');
  draw(60, '.skill_script','#FCB040');
  draw(55, '.skill_jquery','#ff0');
  draw(50, '.skill_photo','#ff0');
  draw(70, '.skill_illust','#ff0');
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