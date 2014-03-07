/**
 * @author Roseanne
 */

/*
 * Project steps:
 1. Set up document ready
 2. Load Google charts package
 3. Load data
 4. Render the chart
  
*/

//For this project, I am adding a Google data fusion table as another way to bring data into my Google visualization.

	function newDataLoaded(unemploymentData){
		
	console.log(unemploymentData);	
	
	var gDataTable = new google.visualization.DataTable();
	
	
	//When I add columns, the first parameter is the data type in that column.
	//The second parameter is the name of the column.
		
	gDataTable.addColumn('string', unemploymentData.columns[0]);
	gDataTable.addColumn('number', unemploymentData.columns[1]);
		
	gDataTable.addRows(unemploymentData.rows); 
		
	//This only works because it is a google.visualization object.
		
	//I'm creating a var for the updated chart and giving it a title.
		
	var myChartOptions = {
	title: "Unemployment in the United States"
			
	};	
		
	//Now I'm going to create a line chart.
		
	var myGoogleChart = new google.visualizationLineChart(document.getElementById("unemploymentChart"));
		
	{	
		
	myGoogleChart.draw(gDataTable, myChartOptions);
	
	}
	
	function googleLoaded (){
	
	console.log("googleLoaded"); 
	
	//Now I'm going to load the data from a Google fusion table instead of from the json file.
	// I'm adding in the https address with a WHERE parameter to specifiy certain years for the data. 
	// I have to add an ">" after the "DATE", then go directly to the date '1969-12-01'.

	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1fSVYn7aezbKW9l1Vxi93-jH46rN7x2mxbwr_-2o3&key=AIzaSyBxm3yDApl-FkVRwHUKGACLeBhMMTX2ubI", newDataLoaded, "json");
	}

	console.log("googleLoaded");
	
	
	//I am working with the Google chart loading function.
	function pageLoaded(){
		
	//Now I'll load the Google vizualization library.
	google.load("vizualization", '1', {
	packages : ["corechart"],
	callback : ["googleLoaded"]
	
});

		
	}
	
	$(document).ready(gDataTable);
	
}

