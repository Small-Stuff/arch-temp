var Site = {};

Site.logoAnimation = function(){
	console.log("logoAnimation")

}

Site.buildings = [
	{
		title: "BRIC Arts | Media House",
		time: "Monday, May 13, 12:00 till 1:00pm",
		architect: "Leeser Architecture"
	},
	{
		title: "Solomon R. Guggenheim Museum",
		time: "Tuesday, May 14, 6:00 till 7:00pm",
		architect: "Frank Lloyd Wright (1959)"
	},
	{
		title: "Staten Island Lighthouse Museum",
		time: "Wednesday, May 15, 6:00 till 7:00pm",
		architect: "(Architect TBD)"
	},
	{
		title: "Noguchi Museum Renovation",
		time: "Thursday, May 16, 12:00 till 1:00pm",
		architect: "Isamu Noguchi (1985); renovation by Sage and Coombe Architects"
	},
	{
		title: "Bronx River House",
		time: "Friday, May 17, 1:00 till 2:00pm",
		architect: "Kiss+Cathcart Architects"
	}
]

Site.appendInfo = function(){

	Site.buildings.forEach(function(building, index){

		$("#arch_preview").append(`<li>
				<a href="" target="_blank">
					<h2>${building.title}</h2>
					<h3>${building.time}</h3>
					<h4>${building.architect}</h4>
				</a>
			</li>`)

	})


}

$(document).ready(function(){
	console.log("Archtober 2019 👀 \n By Small Stuff + Lukas Eigler-Harding")
	Site.logoAnimation()
	Site.appendInfo()




})