
$(document).ready(function(){
 //////////////////////////////////////////////////////////// SWITCH CLASSES YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
      $('#colorbtny').click(function(){
        $(this).data('clicked', true);
        if($('#colorbtny').data('clicked')) {
 //////////////////////////////////////////////////////////// NAV YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#nav').toggleClass('navbarbgy');
          $('#navlicol, #navlicol1, #navlicol2, #navlicol3, #navlicol4, #navlicol5, #navlicol6, #navlicol7, #navlicol8, #navlicol9').toggleClass('navlicol');
          $('#change-color').toggleClass('color-yellow');
          $('#button-color').toggleClass('colorbg-yellow');
//////////////////////////////////////////////////////////// ABOUT YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#bordercolor1').toggleClass('border-black');
          $('#bordercolor2').toggleClass('border-yellow');
          $('#button-about-color').toggleClass('colorbg-yellow');
//////////////////////////////////////////////////////////// PORTOFOLIO YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-portofolio1').toggleClass('border-black');
          $('#border-color-portofolio2').toggleClass('border-yellow');
          $('#overlay-color1, #overlay-color2, #overlay-color3, #overlay-color4, #overlay-color5, #overlay-color6').toggleClass('overlaybgcol');
          $('#overlay-text-color1, #overlay-text-color2, #overlay-text-color3, #overlay-text-color4, #overlay-text-color5, #overlay-text-color6').toggleClass('overlaycol');
//////////////////////////////////////////////////////////// SERVICES YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-services1').toggleClass('border-black');
          $('#border-color-services2').toggleClass('border-yellow');
          $('#icon-services1, #icon-services2, #icon-services3').toggleClass('border-yellow');
          $('#change-color-services1, #change-color-services2, #change-color-services3').toggleClass('color-yellow');
//////////////////////////////////////////////////////////// PRICING YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-pricing1').toggleClass('border-black');
          $('#border-color-pricing2').toggleClass('border-yellow');
          $('#change-color-price1, #change-color-price2').toggleClass('princing-boxyellow');
          $('#icon-color1, #icon-color2, #icon-color3, #icon-color4, #icon-color5, #icon-color6, #icon-color7, #icon-color8, #icon-color9, #icon-color10').toggleClass('color-yellow');
          $('#background-box').toggleClass('footeryellow');
          $('#change-color-purple').toggleClass('princing-boxblack');
          $('#change-colorb,#change-colorb1,#change-colorb2,#change-colorb3,#change-colorb4').toggleClass('color-black');
          $('#btn-pricing1, #btn-pricing2').toggleClass('colorbg-yellow');
          $('#btn-pricing-color').toggleClass('colorbg-black');
//////////////////////////////////////////////////////////// TEAM YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-team1').toggleClass('border-black');
          $('#border-color-team2').toggleClass('border-yellow');
          $('#team-color1, #team-color2, #team-color3, #team-color4').toggleClass('color-yellow');
          $('#social-color-team1, #social-color-team2, #social-color-team3, #social-color-team4, #social-color-team5, #social-color-team6, #social-color-team7, #social-color-team8,    #social-color-team9, #social-color-team10, #social-color-team11, #social-color-team12, #social-color-team13, #social-color-team14, #social-color-team15, #social-color-team16').toggleClass('colorsm');
//////////////////////////////////////////////////////////// TESTIMONIAL YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-testimonials1, #border-testimonials3, #border-testimonials5, #border-testimonials7').toggleClass('border-yellow');
          $('#border-testimonials2, #border-testimonials4, #border-testimonials6').toggleClass('border-yellow2');
          $('#testimonials-members-color1, #testimonials-members-color2, #testimonials-members-color3').toggleClass('color-yellow');
          //////////////////////////////////////////////////////////// BLOG YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-blog1').toggleClass('border-black');
          $('#border-color-blog2').toggleClass('border-yellow');
          $('#blog-color1, #blog-color2, #blog-color3').toggleClass('color-yellow');
          $('#blog-social-color1, #blog-social-color2, #blog-social-color3, #blog-social-color4, #blog-social-color5, #blog-social-color6').toggleClass('hovyellow');
          $('#blog-icon-color1, #blog-icon-color2, #blog-icon-color3, #blog-icon-color4, #blog-icon-color5, #blog-icon-color6').toggleClass('hovyellow');
          //////////////////////////////////////////////////////////// FORM YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#form-color1, #form-color2, #form-color3, #form-color4').toggleClass('form-color-yellow');
          $('#form-btn-color').toggleClass('colorbg-yellow');
          $('#form-icon-color1, #form-icon-color2, #form-icon-color3').toggleClass('color-yellow');
          //////////////////////////////////////////////////////////// FOOTER YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#footer-color').toggleClass('footeryellow');
          ////////////////////////////////////////////////////////////BUTTONS YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#topbtn').toggleClass('colorbg-yellow');
          $('#opened').toggleClass('colorbg-yellow');
          $('#btn-icon-color1, #btn-icon-color2').toggleClass('buttons-yellow');
          //////////////////////////////////////////////////////////// END SWITCH CLASSES YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////

          //////////////////////////////////////////////////////////// REMOVE NAV GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#nav').removeClass('navbarbgg');
          $('#navlicol, #navlicol1, #navlicol2, #navlicol3, #navlicol4, #navlicol5, #navlicol6, #navlicol7, #navlicol8, #navlicol9').removeClass('navlicolg');
          $('#change-color').removeClass('color-green');
          $('#button-color').removeClass('colorbg-green');
          /////////////////////////////////////////////////// REMOVE ABOUT GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#bordercolor2').removeClass('border-green');
          $('#button-about-color').removeClass('colorbg-green');
          /////////////////////////////////////////////////// REMOVE PORTOFOLIO GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-portofolio2').removeClass('border-green');
          $('#overlay-color1, #overlay-color2, #overlay-color3, #overlay-color4, #overlay-color5, #overlay-color6').removeClass('overlaybgcolg');
          $('#overlay-text-color1, #overlay-text-color2, #overlay-text-color3, #overlay-text-color4, #overlay-text-color5, #overlay-text-color6').removeClass('overlaycolorg');
          /////////////////////////////////////////////////// REMOVE SERVICES GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-services2').removeClass('border-green');
          $('#icon-services1, #icon-services2, #icon-services3').removeClass('border-green');
          $('#change-color-services1, #change-color-services2, #change-color-services3').removeClass('color-green');
          /////////////////////////////////////////////////// REMOVE PRICING GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-pricing2').removeClass('border-green');
          $('#change-color-price1, #change-color-price2').removeClass('princing-boxgreen');
          $('#icon-color1, #icon-color2, #icon-color3, #icon-color4, #icon-color5, #icon-color6, #icon-color7, #icon-color8, #icon-color9, #icon-color10').removeClass('color-green');
          $('#background-box').removeClass('footergreen');
          $('#change-color-purple').removeClass('pricing-boxwhite');
          $('#btn-pricing1, #btn-pricing2').removeClass('colorbg-green');
          $('#btn-pricing-color').removeClass('colorbg-white');
          /////////////////////////////////////////////////// REMOVE TEAM GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-team2').removeClass('border-green');
          $('#team-color1, #team-color2, #team-color3, #team-color4').removeClass('color-green');
          $('#social-color-team1, #social-color-team2, #social-color-team3, #social-color-team4, #social-color-team5, #social-color-team6, #social-color-team7, #social-color-team8,    #social-color-team9, #social-color-team10, #social-color-team11, #social-color-team12, #social-color-team13, #social-color-team14, #social-color-team15, #social-color-team16').removeClass('colorsmg');
          /////////////////////////////////////////////////// REMOVE TESTIMONIALS GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-testimonials1, #border-testimonials3, #border-testimonials5, #border-testimonials7').removeClass('border-green');
          $('#border-testimonials2, #border-testimonials4, #border-testimonials6').removeClass('border-green2');
          $('#testimonials-members-color1, #testimonials-members-color2, #testimonials-members-color3').removeClass('color-green');
          ////////////////////////////////////////////////////////////REMOVE BLOG GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-blog2').removeClass('border-green');
          $('#blog-color1, #blog-color2, #blog-color3').removeClass('color-green');
          $('#blog-social-color1, #blog-social-color2, #blog-social-color3, #blog-social-color4, #blog-social-color5, #blog-social-color6').removeClass('hovgreen');
          $('#blog-icon-color1, #blog-icon-color2, #blog-icon-color3, #blog-icon-color4, #blog-icon-color5, #blog-icon-color6').removeClass('hovgreen');
          //////////////////////////////////////////////////////////// REMOVE FORM GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#form-color1, #form-color2, #form-color3, #form-color4').removeClass('form-color-green');
          $('#form-btn-color').removeClass('colorbg-green');
          $('#form-icon-color1, #form-icon-color2, #form-icon-color3').removeClass('color-green');
          ////////////////////////////////////////////////////////////REMOVE FOOTER GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#footer-color').removeClass('footergreen');
          ////////////////////////////////////////////////////////////REMOVE BUTTONS GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#topbtn').removeClass('colorbg-green');
          $('#opened').removeClass('colorbg-green');
          $('#btn-icon-color1, #btn-icon-color2').removeClass('buttons-green');
          //////////////////////////////////////////////////////////// END REMOVE CLASSES GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
           ////////////////////////////////////////////////////////////REMOVE NAV BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
           $('#nav').removeClass('navbarbgblue');
           $('#navlicol, #navlicol1, #navlicol2, #navlicol3, #navlicol4, #navlicol5, #navlicol6, #navlicol7, #navlicol8, #navlicol9').removeClass('navlicolgray');
           $('#change-color').removeClass('color-blue');
           $('#button-color').removeClass('colorbg-blue');
           ////////////////////////////////////////////////////////////REMOVE ABOUT BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
           $('#bordercolor1').removeClass('border-gray');
           $('#bordercolor2').removeClass('border-blue');
           $('#button-about-color').removeClass('colorbg-blue');
           ////////////////////////////////////////////////////////////REMOVE PORTOFOLIO BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
           $('#border-color-portofolio1').removeClass('border-gray');
           $('#border-color-portofolio2').removeClass('border-blue');
           $('#overlay-color1, #overlay-color2, #overlay-color3, #overlay-color4, #overlay-color5, #overlay-color6').removeClass('overlaybgcolblue');
           $('#overlay-text-color1, #overlay-text-color2, #overlay-text-color3, #overlay-text-color4, #overlay-text-color5, #overlay-text-color6').removeClass('overlaycolblue');
           ////////////////////////////////////////////////////////////REMOVE SERVICES BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
           $('#border-color-services1').removeClass('border-gray');
           $('#border-color-services2').removeClass('border-blue');
           $('#icon-services1, #icon-services2, #icon-services3').removeClass('border-blue');
           $('#change-color-services1, #change-color-services2, #change-color-services3').removeClass('color-blue');
           ////////////////////////////////////////////////////////////REMOVE PRICING BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
           $('#border-color-pricing1').removeClass('border-gray');
           $('#border-color-pricing2').removeClass('border-blue');
           $('#change-color-price1, #change-color-price2').removeClass('princing-boxblue');
           $('#icon-color1, #icon-color2, #icon-color3, #icon-color4, #icon-color5, #icon-color6, #icon-color7, #icon-color8, #icon-color9, #icon-color10').removeClass('color-blue');
           $('#background-box').removeClass('footerblue');
           $('#change-color-purple').removeClass('pricing-boxgray');
           $('#change-colorb,#change-colorb1,#change-colorb2,#change-colorb3,#change-colorb4').removeClass('color-gray');
           $('#btn-pricing1, #btn-pricing2').removeClass('colorbg-blue');
           $('#btn-pricing-color').removeClass('colorbg-gray');
           ////////////////////////////////////////////////////////////REMOVE TEAM BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
           $('#border-color-team1').removeClass('border-gray');
           $('#border-color-team2').removeClass('border-blue');
           $('#team-color1, #team-color2, #team-color3, #team-color4').removeClass('color-blue');
           $('#social-color-team1, #social-color-team2, #social-color-team3, #social-color-team4, #social-color-team5, #social-color-team6, #social-color-team7, #social-color-team8,    #social-color-team9, #social-color-team10, #social-color-team11, #social-color-team12, #social-color-team13, #social-color-team14, #social-color-team15, #social-color-team16').removeClass('colorsmblue');
           ////////////////////////////////////////////////////////////REMOVE TESTIMONIAL BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
           $('#border-testimonials1, #border-testimonials3, #border-testimonials5, #border-testimonials7').removeClass('border-blue');
           $('#border-testimonials2, #border-testimonials4, #border-testimonials6').removeClass('border-blue2');
           $('#testimonials-members-color1, #testimonials-members-color2, #testimonials-members-color3').removeClass('color-blue');
           ////////////////////////////////////////////////////////////REMOVE BLOG BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
           $('#border-color-blog1').removeClass('border-gray');
           $('#border-color-blog2').removeClass('border-blue');
           $('#blog-color1, #blog-color2, #blog-color3').removeClass('color-blue');
           $('#blog-social-color1, #blog-social-color2, #blog-social-color3, #blog-social-color4, #blog-social-color5, #blog-social-color6').removeClass('hovblue');
           $('#blog-icon-color1, #blog-icon-color2, #blog-icon-color3, #blog-icon-color4, #blog-icon-color5, #blog-icon-color6').removeClass('hovblue');
           ////////////////////////////////////////////////////////////REMOVE FORM BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
           $('#form-color1, #form-color2, #form-color3, #form-color4').removeClass('form-color-blue');
           $('#form-btn-color').removeClass('colorbg-blue');
           $('#form-icon-color1, #form-icon-color2, #form-icon-color3').removeClass('color-blue');
           ////////////////////////////////////////////////////////////REMOVE FOOTER BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
           $('#footer-color').removeClass('footerblue');
           ////////////////////////////////////////////////////////////REMOVE BUTTONS BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
           $('#topbtn').removeClass('colorbg-blue');
           $('#opened').removeClass('colorbg-blue');
           $('#btn-icon-color1, #btn-icon-color2').removeClass('buttons-blue');
           //////////////////////////////////////////////////////////// END REMOVE CLASSES BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
  
                
      } else {
      }
      
      });  

      //////////////////////////////////////////////////////////// SWITCH CLASSES GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////

      $('#colorbtng').click(function(){
        $(this).data('clicked', true);
        if($('#colorbtng').data('clicked')) {
          //////////////////////////////////////////////////////////// NAV GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#nav').toggleClass('navbarbgg');
          $('#navlicol, #navlicol1, #navlicol2, #navlicol3, #navlicol4, #navlicol5, #navlicol6, #navlicol7, #navlicol8, #navlicol9').toggleClass('navlicolg');
          $('#change-color').toggleClass('color-green');
          $('#button-color').toggleClass('colorbg-green');
          //////////////////////////////////////////////////////////// ABOUT GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#bordercolor2').toggleClass('border-green');
          $('#button-about-color').toggleClass('colorbg-green');
          //////////////////////////////////////////////////////////// PORTOFOLIO GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-portofolio2').toggleClass('border-green');
          $('#overlay-color1, #overlay-color2, #overlay-color3, #overlay-color4, #overlay-color5, #overlay-color6').toggleClass('overlaybgcolg');
          $('#overlay-text-color1, #overlay-text-color2, #overlay-text-color3, #overlay-text-color4, #overlay-text-color5, #overlay-text-color6').toggleClass('overlaycolorg');
          //////////////////////////////////////////////////////////// SERVICES GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-services2').toggleClass('border-green');
          $('#icon-services1, #icon-services2, #icon-services3').toggleClass('border-green');
          $('#change-color-services1, #change-color-services2, #change-color-services3').toggleClass('color-green');
          //////////////////////////////////////////////////////////// PRICING GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-pricing2').toggleClass('border-green');
          $('#change-color-price1, #change-color-price2').toggleClass('princing-boxgreen');
          $('#icon-color1, #icon-color2, #icon-color3, #icon-color4, #icon-color5, #icon-color6, #icon-color7, #icon-color8, #icon-color9, #icon-color10').toggleClass('color-green');
          $('#background-box').toggleClass('footergreen');
          $('#change-color-purple').toggleClass('pricing-boxwhite');
          $('#btn-pricing1, #btn-pricing2').toggleClass('colorbg-green');
          $('#btn-pricing-color').toggleClass('colorbg-white');
          //////////////////////////////////////////////////////////// SOCIAl GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-team2').toggleClass('border-green');
          $('#team-color1, #team-color2, #team-color3, #team-color4').toggleClass('color-green');
          $('#social-color-team1, #social-color-team2, #social-color-team3, #social-color-team4, #social-color-team5, #social-color-team6, #social-color-team7, #social-color-team8,    #social-color-team9, #social-color-team10, #social-color-team11, #social-color-team12, #social-color-team13, #social-color-team14, #social-color-team15, #social-color-team16').toggleClass('colorsmg');
          //////////////////////////////////////////////////////////// TESTIMONIALS GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-testimonials1, #border-testimonials3, #border-testimonials5, #border-testimonials7').toggleClass('border-green');
          $('#border-testimonials2, #border-testimonials4, #border-testimonials6').toggleClass('border-green2');
          $('#testimonials-members-color1, #testimonials-members-color2, #testimonials-members-color3').toggleClass('color-green');
           //////////////////////////////////////////////////////////// BLOG GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
           $('#border-color-blog2').toggleClass('border-green');
           $('#blog-color1, #blog-color2, #blog-color3').toggleClass('color-green');
           $('#blog-social-color1, #blog-social-color2, #blog-social-color3, #blog-social-color4, #blog-social-color5, #blog-social-color6').toggleClass('hovgreen');
           $('#blog-icon-color1, #blog-icon-color2, #blog-icon-color3, #blog-icon-color4, #blog-icon-color5, #blog-icon-color6').toggleClass('hovgreen');
             //////////////////////////////////////////////////////////// FORM GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#form-color1, #form-color2, #form-color3, #form-color4').toggleClass('form-color-green');
          $('#form-btn-color').toggleClass('colorbg-green')
          $('#form-icon-color1, #form-icon-color2, #form-icon-color3').toggleClass('color-green');
          //////////////////////////////////////////////////////////// FOOTER GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#footer-color').toggleClass('footergreen');
          ////////////////////////////////////////////////////////////BUTTONS GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#topbtn').toggleClass('colorbg-green');
          $('#opened').toggleClass('colorbg-green');
          $('#btn-icon-color1, #btn-icon-color2').toggleClass('buttons-green');
          //////////////////////////////////////////////////////////// END SWITCH CLASSES GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
 
          //////////////////////////////////////////////////////////// REMOVE CLASSES FROM YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          /////////////////////////////////////////////////// REMOVE NAV YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#nav').removeClass('navbarbgy');
          $('#navlicol, #navlicol1, #navlicol2, #navlicol3, #navlicol4, #navlicol5, #navlicol6, #navlicol7, #navlicol8, #navlicol9').removeClass('navlicol');
          $('#change-color').removeClass('color-yellow');
          $('#button-color').removeClass('colorbg-yellow');  
          /////////////////////////////////////////////////// REMOVE ABOUT YELLOW COLOR //////////////////////////////////////////////////////////////////////////////////////// 
          $('#bordercolor1').removeClass('border-black');
          $('#bordercolor2').removeClass('border-yellow');
          $('#button-about-color').removeClass('colorbg-yellow');
          /////////////////////////////////////////////////// REMOVE PORTOFOLIO YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-portofolio1').removeClass('border-black');
          $('#border-color-portofolio2').removeClass('border-yellow');
          $('#overlay-color1, #overlay-color2, #overlay-color3, #overlay-color4, #overlay-color5, #overlay-color6').removeClass('overlaybgcol');
          $('#overlay-text-color1, #overlay-text-color2, #overlay-text-color3, #overlay-text-color4, #overlay-text-color5, #overlay-text-color6').removeClass('overlaycol');
          /////////////////////////////////////////////////// REMOVE SERVICES YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-services1').removeClass('border-black');
          $('#border-color-services2').removeClass('border-yellow');
          $('#icon-services1, #icon-services2, #icon-services3').removeClass('border-yellow');
          $('#change-color-services1, #change-color-services2, #change-color-services3').removeClass('color-yellow');
          /////////////////////////////////////////////////// REMOVE PRICING YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-pricing1').removeClass('border-black');
          $('#border-color-pricing2').removeClass('border-yellow');
          $('#change-color-price1, #change-color-price2').removeClass('princing-boxyellow');
          $('#icon-color1, #icon-color2, #icon-color3, #icon-color4, #icon-color5, #icon-color6, #icon-color7, #icon-color8, #icon-color9, #icon-color10').removeClass('color-yellow');
          $('#background-box').removeClass('footeryellow');
          $('#change-color-purple').removeClass('princing-boxblack');
          $('#change-colorb,#change-colorb1,#change-colorb2,#change-colorb3,#change-colorb4').removeClass('color-black');
          $('#btn-pricing1, #btn-pricing2').removeClass('colorbg-yellow');
          $('#btn-pricing-color').removeClass('colorbg-black');
          /////////////////////////////////////////////////// REMOVE TESTIMONIALS YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-team1').removeClass('border-black');
          $('#border-color-team2').removeClass('border-yellow');
          $('#team-color1, #team-color2, #team-color3, #team-color4').removeClass('color-yellow');
          $('#social-color-team1, #social-color-team2, #social-color-team3, #social-color-team4, #social-color-team5, #social-color-team6, #social-color-team7, #social-color-team8,    #social-color-team9, #social-color-team10, #social-color-team11, #social-color-team12, #social-color-team13, #social-color-team14, #social-color-team15, #social-color-team16').removeClass('colorsm');
          $('#border-testimonials1, #border-testimonials3, #border-testimonials5, #border-testimonials7').removeClass('border-yellow');
          $('#border-testimonials2, #border-testimonials4, #border-testimonials6').removeClass('border-yellow2');
          $('#testimonials-members-color1, #testimonials-members-color2, #testimonials-members-color3').removeClass('color-yellow');
           ////////////////////////////////////////////////////////////REMOVE BLOG YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
           $('#border-color-blog1').removeClass('border-black');
           $('#border-color-blog2').removeClass('border-yellow');
           $('#blog-color1, #blog-color2, #blog-color3').removeClass('color-yellow');
           $('#blog-social-color1, #blog-social-color2, #blog-social-color3, #blog-social-color4, #blog-social-color5, #blog-social-color6').removeClass('hovyellow');
           $('#blog-icon-color1, #blog-icon-color2, #blog-icon-color3, #blog-icon-color4, #blog-icon-color5, #blog-icon-color6').removeClass('hovyellow');
            ////////////////////////////////////////////////////////////REMOVE FORM YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#form-color1, #form-color2, #form-color3, #form-color4').removeClass('form-color-yellow');
          $('#form-btn-color').removeClass('colorbg-yellow');
          $('#form-icon-color1, #form-icon-color2, #form-icon-color3').removeClass('color-yellow');
          //////////////////////////////////////////////////////////// FOOTER YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#footer-color').removeClass('footeryellow');
          ////////////////////////////////////////////////////////////BUTTONS YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#topbtn').removeClass('colorbg-yellow');
          $('#opened').removeClass('colorbg-yellow');
          $('#btn-icon-color1, #btn-icon-color2').removeClass('buttons-yellow');
          //////////////////////////////////////////////////////////// END REMOVE CLASSES YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////REMOVE NAV BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#nav').removeClass('navbarbgblue');
          $('#navlicol, #navlicol1, #navlicol2, #navlicol3, #navlicol4, #navlicol5, #navlicol6, #navlicol7, #navlicol8, #navlicol9').removeClass('navlicolgray');
          $('#change-color').removeClass('color-blue');
          $('#button-color').removeClass('colorbg-blue');
          ////////////////////////////////////////////////////////////REMOVE ABOUT BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#bordercolor1').removeClass('border-gray');
          $('#bordercolor2').removeClass('border-blue');
          $('#button-about-color').removeClass('colorbg-blue');
          ////////////////////////////////////////////////////////////REMOVE PORTOFOLIO BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-portofolio1').removeClass('border-gray');
          $('#border-color-portofolio2').removeClass('border-blue');
          $('#overlay-color1, #overlay-color2, #overlay-color3, #overlay-color4, #overlay-color5, #overlay-color6').removeClass('overlaybgcolblue');
          $('#overlay-text-color1, #overlay-text-color2, #overlay-text-color3, #overlay-text-color4, #overlay-text-color5, #overlay-text-color6').removeClass('overlaycolblue');
          ////////////////////////////////////////////////////////////REMOVE SERVICES BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-services1').removeClass('border-gray');
          $('#border-color-services2').removeClass('border-blue');
          $('#icon-services1, #icon-services2, #icon-services3').removeClass('border-blue');
          $('#change-color-services1, #change-color-services2, #change-color-services3').removeClass('color-blue');
          ////////////////////////////////////////////////////////////REMOVE PRICING BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-pricing1').removeClass('border-gray');
          $('#border-color-pricing2').removeClass('border-blue');
          $('#change-color-price1, #change-color-price2').removeClass('princing-boxblue');
          $('#icon-color1, #icon-color2, #icon-color3, #icon-color4, #icon-color5, #icon-color6, #icon-color7, #icon-color8, #icon-color9, #icon-color10').removeClass('color-blue');
          $('#background-box').removeClass('footerblue');
          $('#change-color-purple').removeClass('pricing-boxgray');
          $('#change-colorb,#change-colorb1,#change-colorb2,#change-colorb3,#change-colorb4').removeClass('color-gray');
          $('#btn-pricing1, #btn-pricing2').removeClass('colorbg-blue');
          $('#btn-pricing-color').removeClass('colorbg-gray');
          ////////////////////////////////////////////////////////////REMOVE TEAM BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-team1').removeClass('border-gray');
          $('#border-color-team2').removeClass('border-blue');
          $('#team-color1, #team-color2, #team-color3, #team-color4').removeClass('color-blue');
          $('#social-color-team1, #social-color-team2, #social-color-team3, #social-color-team4, #social-color-team5, #social-color-team6, #social-color-team7, #social-color-team8,    #social-color-team9, #social-color-team10, #social-color-team11, #social-color-team12, #social-color-team13, #social-color-team14, #social-color-team15, #social-color-team16').removeClass('colorsmblue');
          ////////////////////////////////////////////////////////////REMOVE TESTIMONIAL BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-testimonials1, #border-testimonials3, #border-testimonials5, #border-testimonials7').removeClass('border-blue');
          $('#border-testimonials2, #border-testimonials4, #border-testimonials6').removeClass('border-blue2');
          $('#testimonials-members-color1, #testimonials-members-color2, #testimonials-members-color3').removeClass('color-blue');
          ////////////////////////////////////////////////////////////REMOVE BLOG BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-blog1').removeClass('border-gray');
          $('#border-color-blog2').removeClass('border-blue');
          $('#blog-color1, #blog-color2, #blog-color3').removeClass('color-blue');
          $('#blog-social-color1, #blog-social-color2, #blog-social-color3, #blog-social-color4, #blog-social-color5, #blog-social-color6').removeClass('hovblue');
          $('#blog-icon-color1, #blog-icon-color2, #blog-icon-color3, #blog-icon-color4, #blog-icon-color5, #blog-icon-color6').removeClass('hovblue');
          ////////////////////////////////////////////////////////////REMOVE FORM BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#form-color1, #form-color2, #form-color3, #form-color4').removeClass('form-color-blue');
          $('#form-btn-color').removeClass('colorbg-blue');
          $('#form-icon-color1, #form-icon-color2, #form-icon-color3').removeClass('color-blue');
          ////////////////////////////////////////////////////////////REMOVE FOOTER BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#footer-color').removeClass('footerblue');
          ////////////////////////////////////////////////////////////REMOVE BUTTONS BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#topbtn').removeClass('colorbg-blue');
          $('#opened').removeClass('colorbg-blue');
          $('#btn-icon-color1, #btn-icon-color2').removeClass('buttons-blue');
          //////////////////////////////////////////////////////////// END REMOVE CLASSES BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
 


      } else {
          //run function2
      }  
          });

          //////////////////////////////////////////////////////////// SWITCH CLASSES BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
  $('#colorbtnb').click(function(){
    $(this).data('clicked', true);
      if($('#colorbtnb').data('clicked')) {
           //////////////////////////////////////////////////////////// NAV BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#nav').toggleClass('navbarbgblue');
          $('#navlicol, #navlicol1, #navlicol2, #navlicol3, #navlicol4, #navlicol5, #navlicol6, #navlicol7, #navlicol8, #navlicol9').toggleClass('navlicolgray');
          $('#change-color').toggleClass('color-blue');
          $('#button-color').toggleClass('colorbg-blue');
          //////////////////////////////////////////////////////////// ABOUT BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#bordercolor1').toggleClass('border-gray');
          $('#bordercolor2').toggleClass('border-blue');
          $('#button-about-color').toggleClass('colorbg-blue');
          //////////////////////////////////////////////////////////// PORTOFOLIO BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-portofolio1').toggleClass('border-gray');
          $('#border-color-portofolio2').toggleClass('border-blue');
          $('#overlay-color1, #overlay-color2, #overlay-color3, #overlay-color4, #overlay-color5, #overlay-color6').toggleClass('overlaybgcolblue');
          $('#overlay-text-color1, #overlay-text-color2, #overlay-text-color3, #overlay-text-color4, #overlay-text-color5, #overlay-text-color6').toggleClass('overlaycolblue');
          //////////////////////////////////////////////////////////// SERVICES BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-services1').toggleClass('border-gray');
          $('#border-color-services2').toggleClass('border-blue');
          $('#icon-services1, #icon-services2, #icon-services3').toggleClass('border-blue');
          $('#change-color-services1, #change-color-services2, #change-color-services3').toggleClass('color-blue');
          //////////////////////////////////////////////////////////// PRICING BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-pricing1').toggleClass('border-gray');
          $('#border-color-pricing2').toggleClass('border-blue');
          $('#change-color-price1, #change-color-price2').toggleClass('princing-boxblue');
          $('#icon-color1, #icon-color2, #icon-color3, #icon-color4, #icon-color5, #icon-color6, #icon-color7, #icon-color8, #icon-color9, #icon-color10').toggleClass('color-blue');
          $('#background-box').toggleClass('footerblue');
          $('#change-color-purple').toggleClass('pricing-boxgray');
          $('#change-colorb,#change-colorb1,#change-colorb2,#change-colorb3,#change-colorb4').toggleClass('color-gray');
          $('#btn-pricing1, #btn-pricing2').toggleClass('colorbg-blue');
          $('#btn-pricing-color').toggleClass('colorbg-gray');
          //////////////////////////////////////////////////////////// TEAM BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-team1').toggleClass('border-gray');
          $('#border-color-team2').toggleClass('border-blue');
          $('#team-color1, #team-color2, #team-color3, #team-color4').toggleClass('color-blue');
          $('#social-color-team1, #social-color-team2, #social-color-team3, #social-color-team4, #social-color-team5, #social-color-team6, #social-color-team7, #social-color-team8,    #social-color-team9, #social-color-team10, #social-color-team11, #social-color-team12, #social-color-team13, #social-color-team14, #social-color-team15, #social-color-team16').toggleClass('colorsmblue');
          //////////////////////////////////////////////////////////// TESTIMONIAL BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-testimonials1, #border-testimonials3, #border-testimonials5, #border-testimonials7').toggleClass('border-blue');
          $('#border-testimonials2, #border-testimonials4, #border-testimonials6').toggleClass('border-blue2');
          $('#testimonials-members-color1, #testimonials-members-color2, #testimonials-members-color3').toggleClass('color-blue');
          //////////////////////////////////////////////////////////// BLOG BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-blog1').toggleClass('border-gray');
          $('#border-color-blog2').toggleClass('border-blue');
          $('#blog-color1, #blog-color2, #blog-color3').toggleClass('color-blue');
          $('#blog-social-color1, #blog-social-color2, #blog-social-color3, #blog-social-color4, #blog-social-color5, #blog-social-color6').toggleClass('hovblue');
          $('#blog-icon-color1, #blog-icon-color2, #blog-icon-color3, #blog-icon-color4, #blog-icon-color5, #blog-icon-color6').toggleClass('hovblue');
          //////////////////////////////////////////////////////////// FORM BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#form-color1, #form-color2, #form-color3, #form-color4').toggleClass('form-color-blue');
          $('#form-btn-color').toggleClass('colorbg-blue');
          $('#form-icon-color1, #form-icon-color2, #form-icon-color3').toggleClass('color-blue');
          //////////////////////////////////////////////////////////// FOOTER BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#footer-color').toggleClass('footerblue');
          ////////////////////////////////////////////////////////////BUTTONS BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#topbtn').toggleClass('colorbg-blue');
          $('#opened').toggleClass('colorbg-blue');
          $('#btn-icon-color1, #btn-icon-color2').toggleClass('buttons-blue');
          //////////////////////////////////////////////////////////// END SWITCH CLASSES BLUE COLOR ////////////////////////////////////////////////////////////////////////////////////////

          //////////////////////////////////////////////////////////// REMOVE NAV GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#nav').removeClass('navbarbgg');
          $('#navlicol, #navlicol1, #navlicol2, #navlicol3, #navlicol4, #navlicol5, #navlicol6, #navlicol7, #navlicol8, #navlicol9').removeClass('navlicolg');
          $('#change-color').removeClass('color-green');
          $('#button-color').removeClass('colorbg-green');
          /////////////////////////////////////////////////// REMOVE ABOUT GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#bordercolor2').removeClass('border-green');
          $('#button-about-color').removeClass('colorbg-green');
          /////////////////////////////////////////////////// REMOVE PORTOFOLIO GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-portofolio2').removeClass('border-green');
          $('#overlay-color1, #overlay-color2, #overlay-color3, #overlay-color4, #overlay-color5, #overlay-color6').removeClass('overlaybgcolg');
          $('#overlay-text-color1, #overlay-text-color2, #overlay-text-color3, #overlay-text-color4, #overlay-text-color5, #overlay-text-color6').removeClass('overlaycolorg');
          /////////////////////////////////////////////////// REMOVE SERVICES GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-services2').removeClass('border-green');
          $('#icon-services1, #icon-services2, #icon-services3').removeClass('border-green');
          $('#change-color-services1, #change-color-services2, #change-color-services3').removeClass('color-green');
          /////////////////////////////////////////////////// REMOVE PRICING GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-pricing2').removeClass('border-green');
          $('#change-color-price1, #change-color-price2').removeClass('princing-boxgreen');
          $('#icon-color1, #icon-color2, #icon-color3, #icon-color4, #icon-color5, #icon-color6, #icon-color7, #icon-color8, #icon-color9, #icon-color10').removeClass('color-green');
          $('#background-box').removeClass('footergreen');
          $('#change-color-purple').removeClass('pricing-boxwhite');
          $('#btn-pricing1, #btn-pricing2').removeClass('colorbg-green');
          $('#btn-pricing-color').removeClass('colorbg-white');
          /////////////////////////////////////////////////// REMOVE TEAM GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-team2').removeClass('border-green');
          $('#team-color1, #team-color2, #team-color3, #team-color4').removeClass('color-green');
          $('#social-color-team1, #social-color-team2, #social-color-team3, #social-color-team4, #social-color-team5, #social-color-team6, #social-color-team7, #social-color-team8,    #social-color-team9, #social-color-team10, #social-color-team11, #social-color-team12, #social-color-team13, #social-color-team14, #social-color-team15, #social-color-team16').removeClass('colorsmg');
          /////////////////////////////////////////////////// REMOVE TESTIMONIALS GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-testimonials1, #border-testimonials3, #border-testimonials5, #border-testimonials7').removeClass('border-green');
          $('#border-testimonials2, #border-testimonials4, #border-testimonials6').removeClass('border-green2');
          $('#testimonials-members-color1, #testimonials-members-color2, #testimonials-members-color3').removeClass('color-green');
          ////////////////////////////////////////////////////////////REMOVE BLOG GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-blog2').removeClass('border-green');
          $('#blog-color1, #blog-color2, #blog-color3').removeClass('color-green');
          $('#blog-social-color1, #blog-social-color2, #blog-social-color3, #blog-social-color4, #blog-social-color5, #blog-social-color6').removeClass('hovgreen');
          $('#blog-icon-color1, #blog-icon-color2, #blog-icon-color3, #blog-icon-color4, #blog-icon-color5, #blog-icon-color6').removeClass('hovgreen');
          //////////////////////////////////////////////////////////// REMOVE FORM GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#form-color1, #form-color2, #form-color3, #form-color4').removeClass('form-color-green');
          $('#form-btn-color').removeClass('colorbg-green');
          $('#form-icon-color1, #form-icon-color2, #form-icon-color3').removeClass('color-green');
          ////////////////////////////////////////////////////////////REMOVE FOOTER GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#footer-color').removeClass('footergreen');
          ////////////////////////////////////////////////////////////REMOVE BUTTONS GREEN COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#topbtn').removeClass('colorbg-green');
          $('#opened').removeClass('colorbg-green');
          $('#btn-icon-color1, #btn-icon-color2').removeClass('buttons-green');

          //////////////////////////////////////////////////////////// REMOVE CLASSES FROM YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          /////////////////////////////////////////////////// REMOVE NAV YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#nav').removeClass('navbarbgy');
          $('#navlicol, #navlicol1, #navlicol2, #navlicol3, #navlicol4, #navlicol5, #navlicol6, #navlicol7, #navlicol8, #navlicol9').removeClass('navlicol');
          $('#change-color').removeClass('color-yellow');
          $('#button-color').removeClass('colorbg-yellow');  
          /////////////////////////////////////////////////// REMOVE ABOUT YELLOW COLOR //////////////////////////////////////////////////////////////////////////////////////// 
          $('#bordercolor1').removeClass('border-black');
          $('#bordercolor2').removeClass('border-yellow');
          $('#button-about-color').removeClass('colorbg-yellow');
          /////////////////////////////////////////////////// REMOVE PORTOFOLIO YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-portofolio1').removeClass('border-black');
          $('#border-color-portofolio2').removeClass('border-yellow');
          $('#overlay-color1, #overlay-color2, #overlay-color3, #overlay-color4, #overlay-color5, #overlay-color6').removeClass('overlaybgcol');
          $('#overlay-text-color1, #overlay-text-color2, #overlay-text-color3, #overlay-text-color4, #overlay-text-color5, #overlay-text-color6').removeClass('overlaycol');
          /////////////////////////////////////////////////// REMOVE SERVICES YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-services1').removeClass('border-black');
          $('#border-color-services2').removeClass('border-yellow');
          $('#icon-services1, #icon-services2, #icon-services3').removeClass('border-yellow');
          $('#change-color-services1, #change-color-services2, #change-color-services3').removeClass('color-yellow');
          /////////////////////////////////////////////////// REMOVE PRICING YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-pricing1').removeClass('border-black');
          $('#border-color-pricing2').removeClass('border-yellow');
          $('#change-color-price1, #change-color-price2').removeClass('princing-boxyellow');
          $('#icon-color1, #icon-color2, #icon-color3, #icon-color4, #icon-color5, #icon-color6, #icon-color7, #icon-color8, #icon-color9, #icon-color10').removeClass('color-yellow');
          $('#background-box').removeClass('footeryellow');
          $('#change-color-purple').removeClass('princing-boxblack');
          $('#change-colorb,#change-colorb1,#change-colorb2,#change-colorb3,#change-colorb4').removeClass('color-black');
          $('#btn-pricing1, #btn-pricing2').removeClass('colorbg-yellow');
          $('#btn-pricing-color').removeClass('colorbg-black');
          /////////////////////////////////////////////////// REMOVE TESTIMONIALS YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-team1').removeClass('border-black');
          $('#border-color-team2').removeClass('border-yellow');
          $('#team-color1, #team-color2, #team-color3, #team-color4').removeClass('color-yellow');
          $('#social-color-team1, #social-color-team2, #social-color-team3, #social-color-team4, #social-color-team5, #social-color-team6, #social-color-team7, #social-color-team8,    #social-color-team9, #social-color-team10, #social-color-team11, #social-color-team12, #social-color-team13, #social-color-team14, #social-color-team15, #social-color-team16').removeClass('colorsm');
          $('#border-testimonials1, #border-testimonials3, #border-testimonials5, #border-testimonials7').removeClass('border-yellow');
          $('#border-testimonials2, #border-testimonials4, #border-testimonials6').removeClass('border-yellow2');
          $('#testimonials-members-color1, #testimonials-members-color2, #testimonials-members-color3').removeClass('color-yellow');
          ////////////////////////////////////////////////////////////REMOVE BLOG YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#border-color-blog1').removeClass('border-black');
          $('#border-color-blog2').removeClass('border-yellow');
          $('#blog-color1, #blog-color2, #blog-color3').removeClass('color-yellow');
          $('#blog-social-color1, #blog-social-color2, #blog-social-color3, #blog-social-color4, #blog-social-color5, #blog-social-color6').removeClass('hovyellow');
          $('#blog-icon-color1, #blog-icon-color2, #blog-icon-color3, #blog-icon-color4, #blog-icon-color5, #blog-icon-color6').removeClass('hovyellow');
            ////////////////////////////////////////////////////////////REMOVE FORM YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#form-color1, #form-color2, #form-color3, #form-color4').removeClass('form-color-yellow');
          $('#form-btn-color').removeClass('colorbg-yellow');
          $('#form-icon-color1, #form-icon-color2, #form-icon-color3').removeClass('color-yellow');
          //////////////////////////////////////////////////////////// FOOTER YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#footer-color').removeClass('footeryellow');
          ////////////////////////////////////////////////////////////BUTTONS YELLOW COLOR ////////////////////////////////////////////////////////////////////////////////////////
          $('#topbtn').removeClass('colorbg-yellow');
          $('#opened').removeClass('colorbg-yellow');
          $('#btn-icon-color1, #btn-icon-color2').removeClass('buttons-yellow');
                
    } else {
    }
      
  });
});
     
   
 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("topbtn").style.display = "block";
  } else {
    document.getElementById("topbtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

style_switcher = $('.wrapside'),
		panelWidth = style_switcher.outerWidth(true);
		$('.wrapside .opener').on("click", function(){
			var $this = $(this);
			if ($(".wrapside.closed").length>0) {
				style_switcher.animate({"left" : "0em"});
				$(".wrapside.closed").removeClass("closed");
				$(".wrapside").addClass("opened");
			} else {
				$(".wrapside.opened").removeClass("opened");
				$(".wrapside").addClass("closed");
				style_switcher.animate({"left" : '-' + panelWidth});
			}
			return false;
		});

  

