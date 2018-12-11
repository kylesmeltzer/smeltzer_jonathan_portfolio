// Animation for main header image on desktop

(function() {
	"use strict"
	console.log("We're live.");
    
	
document.querySelector("#mainVignette").addEventListener("load", svgSetup, false);
	
	function svgSetup(){
		console.log("SVG Loaded");
		var mainVign = this.contentDocument;
        //lighting
        var statLight = mainVign.querySelector("#beam_x5F_static");
        var dynaLight1 = mainVign.querySelector("#beam_x5F_dyna1");
        var dynaLight2 = mainVign.querySelector("#beam_x5F_dyna2");
        //particles
        var backPart1 = mainVign.querySelector("#back_x5F_part1");
        var backPart2 = mainVign.querySelector("#back_x5F_part2");
        var backPart3 = mainVign.querySelector("#back_x5F_part3");
        var backPart4 = mainVign.querySelector("#back_x5F_part4");
        var backPart5 = mainVign.querySelector("#back_x5F_part5");
        var backPart6 = mainVign.querySelector("#back_x5F_part6");
        var backPart7 = mainVign.querySelector("#back_x5F_part7");
        var backPart8 = mainVign.querySelector("#back_x5F_part8");
        var backPart9 = mainVign.querySelector("#back_x5F_part9");
        var backPart10 = mainVign.querySelector("#back_x5F_part10");
        var backPart11 = mainVign.querySelector("#back_x5F_part11");
        var backPart12 = mainVign.querySelector("#back_x5F_part12");
        var backPart13 = mainVign.querySelector("#back_x5F_part13");
		var frontPart1 = mainVign.querySelector("#front_x5F_part1");
        var frontPart2 = mainVign.querySelector("#front_x5F_part2");
        var frontPart3 = mainVign.querySelector("#front_x5F_part3");
        var frontPart4 = mainVign.querySelector("#front_x5F_part4");
        var frontPart5 = mainVign.querySelector("#front_x5F_part5");
        var frontPart6 = mainVign.querySelector("#front_x5F_part6");
        var frontPart7 = mainVign.querySelector("#front_x5F_part7");
        var frontPart8 = mainVign.querySelector("#front_x5F_part8");
        var frontPart9 = mainVign.querySelector("#front_x5F_part9");
        var frontPart10 = mainVign.querySelector("#front_x5F_part10");
        var frontPart11 = mainVign.querySelector("#front_x5F_part11");
        var frontPart12 = mainVign.querySelector("#front_x5F_part12");
		var frontPart13 = mainVign.querySelector("#front_x5F_part13");
        //leaves
        var backShade1 = mainVign.querySelector("#backshade1_2_");
        var backShade2 = mainVign.querySelector("#backshade2_2_");
        var backShade3 = mainVign.querySelector("#backshade3_2_");
        var backShade4 = mainVign.querySelector("#backshade4_2_");
        var backShade5 = mainVign.querySelector("#backshade5_2_");
        var backShade6 = mainVign.querySelector("#backshade6_2_");
        var backShade7 = mainVign.querySelector("#backshade7_2_");
        var backShade8 = mainVign.querySelector("#backshade8_2_");
        var backShade9 = mainVign.querySelector("#backshade9_2_");
        
        
        
        
        //Lighting Properties
        
        statLight.style.backgroundBlendMode = "overlay";
        statLight.style.opacity = "0.3";
        dynaLight1.style.backgroundBlendMode = "overlay";
        dynaLight1.style.opacity = "0.3";
        dynaLight2.style.backgroundBlendMode = "overlay";
        dynaLight2.style.opacity = "0.3";
        
        //Backshade
        
        backShade1.style.opacity = "0.5";
        backShade2.style.opacity = "0.5";
        backShade3.style.opacity = "0.5";
        backShade4.style.opacity = "0.5";
        backShade5.style.opacity = "0.5";
        backShade6.style.opacity = "0.5";
        backShade7.style.opacity = "0.5";
        backShade8.style.opacity = "0.5";
        backShade9.style.opacity = "0.5";
        
        //Particles
        frontPart1.stylebackgroundBlendMode = "overlay";
        frontPart1.style.opacity= "0.2";
        frontPart2.stylebackgroundBlendMode = "overlay";
        frontPart2.style.opacity= "0.2";
        frontPart3.stylebackgroundBlendMode = "overlay";
        frontPart3.style.opacity= "0.2";
        frontPart4.stylebackgroundBlendMode = "overlay";
        frontPart4.style.opacity= "0.2";
        frontPart5.stylebackgroundBlendMode = "overlay";
        frontPart5.style.opacity= "0.2";
        frontPart6.stylebackgroundBlendMode = "overlay";
        frontPart6.style.opacity= "0.2";
        frontPart7.stylebackgroundBlendMode = "overlay";
        frontPart7.style.opacity= "0.2";
        frontPart8.stylebackgroundBlendMode = "overlay";
        frontPart8.style.opacity= "0.2";
        frontPart9.stylebackgroundBlendMode = "overlay";
        frontPart9.style.opacity= "0.2";
        frontPart10.stylebackgroundBlendMode = "overlay";
        frontPart10.style.opacity= "0.2";
        frontPart11.stylebackgroundBlendMode = "overlay";
        frontPart11.style.opacity= "0.2";
        frontPart12.stylebackgroundBlendMode = "overlay";
        frontPart12.style.opacity= "0.2";
        frontPart13.stylebackgroundBlendMode = "overlay";
        frontPart13.style.opacity= "0.2";
        backPart1.stylebackgroundBlendMode = "overlay";
        backPart1.style.opacity= "0.3";
        backPart2.stylebackgroundBlendMode = "overlay";
        backPart2.style.opacity= "0.3";
        backPart3.stylebackgroundBlendMode = "overlay";
        backPart3.style.opacity= "0.3";
        backPart4.stylebackgroundBlendMode = "overlay";
        backPart4.style.opacity= "0.3";
        backPart5.stylebackgroundBlendMode = "overlay";
        backPart5.style.opacity= "0.3";
        backPart6.stylebackgroundBlendMode = "overlay";
        backPart6.style.opacity= "0.3";
        backPart7.stylebackgroundBlendMode = "overlay";
        backPart7.style.opacity= "0.3";
        backPart8.stylebackgroundBlendMode = "overlay";
        backPart8.style.opacity= "0.3";
        backPart9.stylebackgroundBlendMode = "overlay";
        backPart9.style.opacity= "0.3";
        backPart10.stylebackgroundBlendMode = "overlay";
        backPart10.style.opacity= "0.3";
        backPart11.stylebackgroundBlendMode = "overlay";
        backPart11.style.opacity= "0.3";
        backPart12.stylebackgroundBlendMode = "overlay";
        backPart12.style.opacity= "0.3";
        backPart13.stylebackgroundBlendMode = "overlay";
        backPart13.style.opacity= "0.3";
        
        var tl1 = new TimelineMax();
        
        tl1.from(dynaLight2, 2, {y: "30px", opacity: 0.2, repeat:-1, yoyo:true, ease: Power1.easeInOut}, 0)
        .from(dynaLight1, 2, {y: "-25px", opacity: 0.4, repeat:-1, yoyo:true, ease: Power1.easeInOut}, 0)
        .from(frontPart1, 3, {scale: 0.8, y: "20px", opacity: 0.6, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .from(frontPart2, 4, {scale: 0.75, y: "20px", opacity: 0.5, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .to(frontPart3, 3, {scale: 1.05, y: "30px", opacity: 0.6, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .to(frontPart4, 4, {scale: 0.8, y: "30px", opacity: 0., ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .from(frontPart5, 3, {scale: 0.8, y: "20px", opacity: 0.6, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .from(frontPart6, 4, {scale: 0.75, y: "20px", opacity: 0.5, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .to(frontPart7, 3, {scale: 0.75, y: "30px", opacity: 0.6, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .to(frontPart8, 4, {scale: 0.8, y: "30px", opacity: 0., ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .from(frontPart9, 3, {scale: 0.8, y: "20px", opacity: 0.6, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .from(frontPart10, 4, {scale: 0.75, y: "20px", opacity: 0.5, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .to(frontPart11, 3, {scale: 0.75, y: "30px", opacity: 0.6, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .to(frontPart12, 4, {scale: 0.8, y: "30px", opacity: 0., ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .to(frontPart13, 3, {scale: 0.75, y: "30px", opacity: 0.6, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .from(backPart1, 3, {scale: 0.8, y: "20px", opacity: 0.6, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .from(backPart2, 4, {scale: 0.75, y: "20px", opacity: 0.5, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .to(backPart3, 3, {scale: 0.75, y: "30px", opacity: 0.6, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .to(backPart4, 4, {scale: 0.8, y: "30px", opacity: 0., ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .from(backPart5, 3, {scale: 0.8, y: "20px", opacity: 0.6, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .from(backPart6, 4, {scale: 0.75, y: "20px", opacity: 0.5, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .to(backPart7, 3, {scale: 0.75, y: "30px", opacity: 0.6, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .to(backPart8, 4, {scale: 0.8, y: "30px", opacity: 0., ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .from(backPart9, 3, {scale: 0.8, y: "20px", opacity: 0.6, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .from(backPart10, 4, {scale: 0.75, y: "20px", opacity: 0.5, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .to(backPart11, 3, {scale: 0.75, y: "30px", opacity: 0.6, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .to(backPart12, 4, {scale: 0.8, y: "30px", opacity: 0., ease:Power1.easeOut, yoyo:true, repeat:-1}, 0)
        .to(backPart13, 3, {scale: 0.75, y: "30px", opacity: 0.6, ease:Power1.easeOut, yoyo:true, repeat:-1}, 0);
        
	
        
        }
	
})();