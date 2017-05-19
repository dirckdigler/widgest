$(document).ready(function() {
	
	function getTime() {
	   	var dt = new Date();
		var time = dt.getHours() + ":" + dt.getMinutes();	
		return time;
	}

	var jsonObject = JSON.parse(stock); 
	$.each(jsonObject, function (key, value) { 
		$(function () {
	  		$("#chartContainer").CanvasJSChart({ //Pass chart options
	    	data: [{
				type: "splineArea", 
				dataPoints: [
					{ x: 15, y: 320 },
					{ x: 19, y: 280 },
					{ x: 21, y: 150 },
					{ x: 22, y: 170 },
					{ x: 24, y: 400 },
					{ x: 25, y: 180 },
					{ x: 33, y: 250 },
					{ x: 35, y: 270 },
					{ x: 47, y: 510 },
					{ x: 50, y: 350 },
					{ x: 55, y: 400 },
					{ x: 57, y: 415 },
					{ x: 62, y: 360 },
					{ x: 69, y: 634.39 },

		    	]}
	  		]});
		});
		if($("#widget-3").length) {
	    	$('#widget-3').find('.max-point').html(value.y);	
	    	$('#widget-3').find('.info-hr').html('<span class="time">  '+getTime()+'</span>');
	    }		
	});	
});