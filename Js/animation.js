$(document).ready(function(){
    

    gsap.fromTo('.myLogo', { y: '-60px' }, { duration: 1, y: '0%', ease: 'power2.out', delay: 5 });
    gsap.from(" .fullName .h4", 1.5, {delay: 0.5, y: -500,stagger: {amount: 1.5 },ease: "power4.inOut"});
    gsap.from(" .devLovText .h4", 2.5, {delay: 1, y: -500,stagger: {amount: 2.5 },ease: "power4.inOut"});
    // gsap.fromTo('.bannerText', { x: '-500px' }, { duration: 1, x: '0%', ease: 'power2.out', delay: 2.5 });
    gsap.from(" .bannerText > p", 1.5, {delay: 2, x: -500,stagger: {amount: 0.1 },ease: "bounce.out"});
    gsap.from(" .introName span", 2.5, {delay: 2, x: -500,stagger: {amount: 0.1 },ease: "bounce.out"});
    gsap.from(" .introName .nameSingnature span", 2.5, {delay: 3, opacity:0, stagger: {amount: 0.1 },ease: "power4.inOut"});

   


// /SignutureAnima/ 
    $('.text5').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='_text3'>$&</span>"));
      });
      var $text5 = $(".text5 span"),
          tl_5 = new TimelineMax({repeat:-1, repeatDelay: 0.5});
      
      tl_5
        .staggerFrom($text5, 0.1, {alpha: 0, x: -40, ease: Power3.easeOut, }, 0.1,'+=2')
        .staggerTo($text5, 0.1, {alpha: 0, x: -40, ease: Power3.easeOut,}, 0.1, '+=2')
 // /SignutureAnima/       
       
// 


gsap.to('.bannerText p:after', {
    y: -50,
    duration: 0.5,
    ease: 'bounce.out',
    yoyo: true,
    repeat: 1
  });

}); 





