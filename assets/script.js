var Site = {};

Site.buildings = [
	{
		title: "BRIC Arts | Media House",
		time: "Monday, May 13,<br>12:00 till 1:00pm",
		architect: "Leeser Architecture",
		image: "",
		link: "https://archtober.org",
		style:{ 
			size: "small",
			color: "rgba(67, 22, 10, 0.95)"
		},
		description: "Donec sed odio dui. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
	},
	{
		title: "Solomon R. Guggenheim Museum",
		time: "Tuesday, May 14,<br>6:00 till 7:00pm",
		architect: "Frank Lloyd Wright (1959)",
		image: "/images/guggenheim.jpg",
		link: "https://archtober.org",
		style:{ 
			size: "medium",
			color: "rgba(89, 87, 15, 0.95)"
		},
		description: "Donec sed odio dui. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
	},
	{
		title: "Staten Island Lighthouse Museum",
		time: "Wednesday, May 15,<br>6:00 till 7:00pm",
		architect: "(Architect TBD)",
		image: "/images/DJI_0046.JPG",
		link: "https://archtober.org",
		style:{ 
			size: "small",
			color: "rgba(89, 87, 15, 0.95)"
		},
		description: "Donec sed odio dui. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
	},
	{
		title: "Noguchi Museum Renovation",
		time: "Thursday, May 16,<br>12:00 till 1:00pm",
		architect: "Isamu Noguchi (1985); renovation by Sage and Coombe Architects",
		image: "/images/3-The-Noguchi-Museum-New-York-Area-14--photo-Nicholas-Knight.jpg",
		link: "https://archtober.org",
		style:{ 
			size: "large",
			color: "rgba(67, 22, 10, 0.95)"
		},
		description: "Donec sed odio dui. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
	},
	{
		title: "Bronx River House",
		time: "Friday, May 17,<br>1:00 till 2:00pm",
		architect: "Kiss+Cathcart Architects",
		image: "/images/Construction_Image.jpg",
		link: "https://archtober.org",
		style:{ 
			size: "medium",
			color: "rgba(89, 87, 15, 0.95)"
		},
		description: "Donec sed odio dui. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
	}
]

Site.appendInfo = function(){

	Site.buildings.forEach(function(building, index){

		$("#arch_preview").append(`<li class="preview_building ${building.style.size}">
				<h2>
					<a href="${building.link}" target="_blank">${building.title}</a>

				</h2>
				<h3>${building.time}</h3>
				<div class="building_content">
					<h4>${building.architect}</h4>
					<p>${building.description}</p>
				</div><img class="building_content" src="${building.image}">
			</li>`)

	})


}


Site.logoAnimation = function(){	
	console.log("logoAnimation")

	// currently uses actual images instead of raw svg...
	var svgArray = [
		"silhouttes/archtober-1.svg",
		"silhouttes/archtober-2.svg",
		"silhouttes/archtober-3.svg",
		"silhouttes/archtober-4.svg"
	]

	var animationRunning = true;
	var animationCounter = 0;
	// initial animation
	var svgCycle = function(){

		$("#archtober_animation").css({"background-image" : "url(" + svgArray[animationCounter] + ")"})

		if(animationCounter < svgArray.length - 1){
			animationCounter++
		}else{
			animationCounter = 0
		}
	};
	var animationCycle = setInterval(svgCycle, 1000)

	$(window).on('scroll', function(event){
		var scrollPosition = $(window).scrollTop();
		// if scroll position is before the last element (i.e. someone scrolled back to top)

		if(scrollPosition + ($(window).innerHeight()/2) < $(".preview_building").first().offset().top && animationRunning != true){
			animationCycle = setInterval(svgCycle, 1000);
			animationRunning = true;
		}

		$(".preview_building").each(function(){
			if(scrollPosition + ($(window).innerHeight()/2) > $(this).offset().top){
				// if this element is more than halfway across the current window
				if(animationRunning){
					clearInterval(animationCycle)
					animationRunning = false;
				}
				
				if($(this).index() > svgArray.length - 1){
					$("#archtober_animation").css({"background-image" : "url(" + svgArray[svgArray.length - 1] + ")"})
				}else{
					$("#archtober_animation").css({"background-image" : "url(" + svgArray[$(this).index()] + ")"})
				}


				

				// add svg



			}
		})
	})

}

$(document).ready(function(){
	console.log("Archtober 2019 👀 \n By Small Stuff + Lukas Eigler-Harding")
	Site.logoAnimation()
	Site.appendInfo()




})