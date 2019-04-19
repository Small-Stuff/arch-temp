var Site = {};

Site.buildings = [
	{
		title: "BRIC Arts | Media House",
		time: "Monday, May 13,<br>12:00 – 1:00pm",
		architect: "Leeser Architecture",
		image: "images/BRIC_Exterior_temp.jpg",
		link: "https://archtober.org",
		style:{ 
			size: "small",
			color: "#C028B9"
		},
		description: "The project is a community arts center for two arts organizations. While pursuing wildly different types of work, the mission of each organization is centered around community outreach and participation. The primary project objective is the expansion of BRIC and UrbanGlass to the vacant ground floor and to visually open the building to the street. Leeser Architecture juggled complex programmatic demands and highly specific uses to create an open and accessible arts facility that can connect the community as well as invite them inside to engage with the myriad of activities occurring within.</p><p>Leeser Architecture’s renovation and expansion of this existing, under-utilized building involves two user groups, BRIC Arts | Media | Brooklyn and UrbanGlass. The project includes a full renovation of the interior space to create new theaters, television broadcasting studios, art galleries, glass workshops, media labs, classrooms, administrative and operation offices, and support spaces."
	},
	{
		title: "Solomon R. Guggenheim Museum",
		time: "Tuesday, May 14,<br>6:00 – 7:00pm",
		architect: "Frank Lloyd Wright (1959)",
		image: "images/guggenheim.jpg",
		link: "https://archtober.org",
		style:{ 
			size: "medium",
			color: "#FF4438"
		},
		description: "An in-depth look at the design, construction and history of the iconic Frank Lloyd Wright-designed building. Ashley Mendelsohn, Assistant Curator of Architecture and Digital Initiatives will give a tour that focuses on how the structure challenges curators, artists and exhibitions designers to reinvent the space anew for each exhibition."
	},
	{
		title: "Staten Island Lighthouse Museum",
		time: "Wednesday, May 15,<br>6:00 – 7:00pm",
		architect: "(Architect TBD)",
		image: "images/DJI_0046.JPG",
		link: "https://archtober.org",
		style:{ 
			size: "small",
			color: "#0082CA"
		},
		description: "A three minute walk from the Staten Island Ferry, the National Lighthouse Museum site tour explores the history of the seven remaining buildings from the United States Lighthouse Establishment era (1864-1939). Built for the Treasury Department of the US Government, these buildings housed lampists, blacksmiths, clerks, engineers, and inspectors that helped supply the nation's light stations. This tour will also cover how lighthouse engineering and design changed over time. Free Museum admission is included."
	},
	{
		title: "Noguchi Museum Renovation",
		time: "Thursday, May 16,<br>12:00 – 1:00pm",
		architect: "Isamu Noguchi (1985); renovation by Sage and Coombe Architects",
		image: "images/3-The-Noguchi-Museum-New-York-Area-14--photo-Nicholas-Knight.jpg",
		link: "https://archtober.org",
		style:{ 
			size: "large",
			color: "#FF5100"
		},
		description: "Sage and Coombe worked with the Noguchi Museum in Long Island City, Queens for more than a decade to renovate and modernize the historic building in three phases, affording the Museum accessibility, allowing it to remain open year-round, and bringing it to the rigorous standards of contemporary museums – all while maintaining the unique character of the space. The renovation encompassed all areas of the Museum building and garden, with construction on the final phase completed in Spring 2016."
	},
	{
		title: "Bronx River House",
		time: "Friday, May 17,<br>1:00 – 2:00pm",
		architect: "Kiss+Cathcart Architects",
		image: "images/Construction_Image.jpg",
		link: "https://archtober.org",
		style:{ 
			size: "medium",
			color: "#789904"
		},
		description: "The Bronx River Greenway River House, nearing completion, is the base of operations for the restoration and operation of the Bronx River Greenway and the adjacent portion of the Bronx River. The Bronx River Alliance will occupy the building and manage it on behalf of the Park and public and community groups. The Bronx River House will approach net-zero energy and will use rainwater-irrigated living facades to create a favorable microclimate. The project received a Design Award from the Art Commission of the City of New York."
	}
]

Site.appendInfo = function(){

	Site.buildings.forEach(function(building, index){
//onmouseover="this.style.backgroundColor='${building.style.color}'" onmouseout="this.style.backgroundColor='#D8CDCB'"
		$("#arch_preview").append(`<li class="preview_building ${building.style.size}">
				<h5>NYCxDesign Building of the Day Preview</h5>
				<h2>
					<a href="${building.link}" target="_blank" style="background-color: ${building.style.color};">${building.title}</a>
				</h2>
				<h3>${building.time}</h3>
				<h4>${building.architect}</h4>
				<div class="building_content">
					<p>${building.description}</p>
				</div><img class="building_content" src="${building.image}">
			</li>`)

	})


}


Site.logoAnimation = function(){	
	// currently uses actual images instead of raw svg...
	var svgArray = [
		"silhouttes/archtober-silhoutte-bric-full.svg",
		"silhouttes/archtober-silhoutte-guggenheim-full.svg",
		"silhouttes/archtober-silhoutte-lighthouse-full.svg",
		"silhouttes/archtober-silhoutte-noguchi-full.svg",
		"silhouttes/archtober-silhoutte-bronx-full.svg"
	]

	var svgArrayOutlines = [
		"silhouttes/archtober-silhoutte-bric-outline.svg",
		"silhouttes/archtober-silhoutte-guggenheim-outline.svg",
		"silhouttes/archtober-silhoutte-lighthouse-outline.svg",
		"silhouttes/archtober-silhoutte-noguchi-outline.svg",
		"silhouttes/archtober-silhoutte-bronx-outline.svg"
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
					$("#archtober_animation").css({"background-image" : "url(" + svgArrayOutlines[svgArray.length - 1] + ")"})
				}else{
					$("#archtober_animation").css({"background-image" : "url(" + svgArrayOutlines[$(this).index()] + ")"})
				}
			}
		})
	})

}

$(document).ready(function(){
	console.log("Archtober 2019 👀 \n By Small Stuff + Lukas Eigler-Harding")
	Site.logoAnimation()
	Site.appendInfo()
})