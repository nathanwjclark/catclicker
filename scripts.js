var cats = [["cat1","Kitten",0,0],['cat2','Ninja',0,1],['cat3','Tubemaster',0,2],['cat4','Bananadevourer',0,3]];

$(document).ready(function(){
	for(i=0; i<cats.length; i++){
		$('#catcon').append("<div id="+cats[i][1]+">"+cats[i][1]+"</div>");
		$('#menu').append(
			"<div><a href='#"+cats[i][1]+"'>"
				+cats[i][1]+
			"</a></div>");
		$('#catcon').append("<div>Clicks: "+cats[i][2]+"</div>");
		$('#catcon').append("<div catnum="+cats[i][3]+"><img id='acat' src='resources/"+cats[i][0]+".jpg' alt='' /></div><p></p><p></p>");
	}
	$("[catnum]").click(function(){
		catid=$(this).attr("catnum");
		catid=parseInt(catid);
		cats[catid][2]++;
		catloc=5*(catid+1)-2;
		$("#catcon div:nth-child("+catloc+")").html("Clicks: "+cats[catid][2]);
	});
});

var isToggled = 0;
var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
	e.preventDefault();
    $hamburger.toggleClass("is-active");
	if(isToggled==0){
		$('#catcon').animate({
			'marginLeft' : "+=100px" //moves right
			}, 130);
		isToggled=1;
		console.log("right");
	} else {
		$('#catcon').animate({
			'marginLeft' : "-=100px" //moves left
			}, 130);
		isToggled=0;
		console.log("left");
	};
    $('#menu').toggle();
  });