
window.onload = function () {

	var options = {
		exportEnabled: true,
		animationEnabled: true,
		axisY: {
			gridThickness: 0,
			stripLines: [
				{
					value: 0,
					showOnTop: true,
					color: "gray",
					thickness: 0
				}
			]
		},
		data: [
			{
				type: "splineArea", //change it to column, spline, line, pie, etc
				dataPoints: [
					{ x: 20, y: 1 },
					{ x: 21, y: 2 },
					{ x: 22, y: 3 },
					{ x: 23, y: 4 },
					{ x: 24, y: 5 },
					{ x: 25, y: 6 }
				]
			}
		]
	};
	$("#chartContainer").CanvasJSChart(options);

}
