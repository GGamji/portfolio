// header
// $(window).on('scroll', function() {
//   if($(window).scrollTop() > 10) {
//     $('.header_box').addClass('scroll')
//   } else {
//     $('.header_box').removeClass('scroll')
//   }
// })

$('body').on('mousewheel', function(event) {

  if(event.originalEvent.deltaY > 0) {
    $('.header_box').addClass('scroll')
  } else if(event.originalEvent.deltaY < 0) {
    $('.header_box').removeClass('scroll')
  }
})

// $(window).scroll(function() { //스크롤링이 될 때마다
// 	if($(window).scrollTop() >= 10) {
// 		$('header').addClass('on')
// 	}
// 	else {
// 		$('header').removeClass('on')
// 	}
// 	// console.log($(window).scrollTop());
// })

$('.nav a').click(function(e) {
  e.preventDefault()
  let name = $(this).text()
  console.log($('.' + name));
  $('html').animate({
    scrollTop: $('.' + name).offset().top
  })

})


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
    "background":"conic-gradient("+colorname+" 3% "+i+"%, #eee "+i+"% 100%)"
  });
}

const skills = [
  {max: 90, classname: '.skill_html', colorname: '#FC490B'},
  {max: 75, classname: '.skill_css', colorname: '#72A8D7'},
  {max: 60, classname: '.skill_script', colorname: '#FCB040'},
  {max: 55, classname: '.skill_jquery', colorname: '#0865A6'},
  {max: 50, classname: '.skill_photo', colorname: '#001E36'},
  {max: 70, classname: '.skill_illust', colorname: '#320607'}
]

ScrollTrigger.create({
  trigger: '.skills_content',
  start: "top 70px",
  end: "50% 30%",
  // pin: true,
  scrub: true,
  onEnter: () => {
    skills.forEach(skill =>
      draw(skill.max, skill.classname, skill.colorname));
  },
  markers: true,
  // toggleActions: "play none none reset"
})



// project-swiper
const projectSwiper = new Swiper('.project-swiper', {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})


// contact
const ani5 = gsap.timeline();

ani5.from('.contact .t1', {y: 50, autoAlpha: 0, duration: 2}, '+=1')
  .from('.contact .t2', {y: 50, autoAlpha: 0, duration: 2}, '+=1')
  .from('.contact .t3', {y: 50, autoAlpha: 0, duration: 2}, '+=1')
  .from('.contact .t4', {y: 50, autoAlpha: 0, duration: 2}, '+=1')
  .from('.contact .t5', {y: 50, autoAlpha: 0, duration: 2}, '+=1')
  .from('.contact .t6', {y: 50, autoAlpha: 0, duration: 2}, '+=1')
  .from('.contact .t7', {y: 50, autoAlpha: 0, duration: 2}, '+=1')
  .from('.contact .t8', {y: 50, autoAlpha: 0, duration: 2}, '+=1')

ScrollTrigger.create({
  animation: ani5,
  trigger: '.contact',
  start: 'top top',
  end: 'bottom top',
  pin: true,
  anticipatePin: 1,
  scrub: true,
})