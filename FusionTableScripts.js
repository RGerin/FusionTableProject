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

	function newDataLoaded(DataTable) {
	
	var googleDataTable = new google.visualization.DataTable();
	
	
	//When I add columns, the first parameter is the data type in that column.
	//The second parameter is the name of the column.
		
	googleDataTable.addColumn('string'), DataTable.columns[0];
	googleDataTable.addColumn('number'), DataTable.columns[1];
	googleDataTable.addRows(DataTable.rows); 
		
	//This only works because it is a Google visualization object.
		
	//I'm creating a var for the updated chart and giving it a title.
		
	var myChartOptions = {
	title: "Unemployment in the United States"
	};	
		
	//Now I'm going to create a line chart.
		
	var myGoogleChart = new google.visualizationLineChart(document.getElementById("unemploymentChart"));
		myGoogleChart.draw(DataTable, myChartOptions);
	
	}
	
	function googleLoaded(){
	
	console.log("googleLoaded"); 
	
	//Now I'm going to load the data from a Google fusion table instead of from the json file.
	//I added the data file name and my API key ID to the https address.
	// Now I'm going to add a WHERE parameter in the https address to specify certain years for the data. 
	// The WHERE parameter will display the chart data for 1969-12-01 and beyond.

	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1fSVYn7aezbKW9l1Vxi93-jH46rN7x2mxbwr_-2o3+WHERE+DATE>%271969-12-01%27&key=AIzaSyBxm3yDApl-FkVRwHUKGACLeBhMMTX2ubI", newDataLoaded, "json");
	}
	
	//I am working with the Google chart loading function.
	function pageLoaded(){
		
	//Now I'll load the Google vizualization library.
	google.load("visualization", "1", {packages:["corechart"], "callback":googleLoaded});	
	
	}
	
	$(document).ready(pageLoaded);
	
	
	