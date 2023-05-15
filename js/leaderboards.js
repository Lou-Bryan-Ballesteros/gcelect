window.onload = function () {
	var chart = new CanvasJS.Chart("presidentContainer",
	{
		theme: "light2",
		animationEnabled: true,
		exportEnabled:true,

		// title:{
		// 	text: "Gaming Consoles Sold in 2012"
		// },		
		data: [
		{       
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			yValueFormatString: "#,##0,,.## Million",
			legendText: "{indexLabel}",
			dataPoints: [
				{  y: 4181563, indexLabel: "PlayStation 3" },
				{  y: 2175498, indexLabel: "Wii" },
			]
		}
		]
	});
	chart.render();

    var chart = new CanvasJS.Chart("vicePresidentContainer",
	{
		theme: "light2",
		animationEnabled: true,
		exportEnabled:true,
        
		// title:{
		// 	text: "Gaming Consoles Sold in 2012"
		// },		
		data: [
		{       
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			yValueFormatString: "#,##0,,.## Million",
			legendText: "{indexLabel}",
			dataPoints: [
				{  y: 4181563, indexLabel: "PlayStation 3" },
				{  y: 2175498, indexLabel: "Wii" },
				{  y: 3125844, indexLabel: "Xbox 360" },
			]
		}
		]
	});
	chart.render();

    var chart = new CanvasJS.Chart("secretaryContainer",
	{
		theme: "light2",
		animationEnabled: true,
		exportEnabled:true,
        
		// title:{
		// 	text: "Gaming Consoles Sold in 2012"
		// },		
		data: [
		{       
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			yValueFormatString: "#,##0,,.## Million",
			legendText: "{indexLabel}",
			dataPoints: [
				{  y: 4181563, indexLabel: "PlayStation 3" },
				{  y: 2175498, indexLabel: "Wii" },
				{  y: 3125844, indexLabel: "Xbox 360" },
				{  y: 1176121, indexLabel: "Nintendo DS"},
			]
		}
		]
	});
	chart.render();

    var chart = new CanvasJS.Chart("treasurerContainer",
	{
		theme: "light2",
		animationEnabled: true,
		exportEnabled:true,
        
		// title:{
		// 	text: "Gaming Consoles Sold in 2012"
		// },		
		data: [
		{       
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			yValueFormatString: "#,##0,,.## Million",
			legendText: "{indexLabel}",
			dataPoints: [
				{  y: 4181563, indexLabel: "PlayStation 3" },
				{  y: 2175498, indexLabel: "Wii" },
				{  y: 3125844, indexLabel: "Xbox 360" },
				{  y: 1176121, indexLabel: "Nintendo DS"},
				{  y: 1727161, indexLabel: "PSP" },
				{  y: 4303364, indexLabel: "Nintendo 3DS"},
			]
		}
		]
	});
	chart.render();
}