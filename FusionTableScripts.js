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
//Here I previously had confused the data object with the Google function name.
//Now I'm passing the data from the fusion table to the new DataLoaded () function with the name "CivilianUnemploymentData_030714."

function newDataLoaded(UNRATE) {

	console.log(UNRATE);

	var googleDataSource = new google.visualization.DataTable();

	//When I add columns, the first parameter is the data type in that column.
	//The second parameter is the name of the column.

	googleDataSource.addColumn('string'), UNRATE.columns[0];
	googleDataSource.addColumn('number'), UNRATE.columns[1];
	googleDataSource.addRows(UNRATE.rows);

	//This only works because it is a Google visualization object.
	//I'm creating a var for the updated chart and giving it a title.

	var myChartOptions = {
		title: "Unemployment in the United States"
	};

	//Now I'm going to create a line chart. Then I must pass the Google DataTable variable I've created here.

	var mygoogleChart = new google.visualization.LineChart(document.getElementById("unemploymentChartDiv"));
	myGoogleChart.draw(googleDataSource, myChartOptions);

}

function googleLoaded() {

	console.log("googleLoaded");

	//Now I'm going to load the data from a Google fusion table instead of from the json file.
	//I added the data file name and my API key ID to the https address.
	// Now I'm going to add a WHERE parameter in the https address to specify certain years for the data.
	// The WHERE parameter will display the chart data for 1969-12-01 and beyond.

	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1sJdI-HjjB2yBpsxv9rzRjJwP7Y0HJYvkmjklpnDk+WHERE+DATE>'1969-12-01'&key=AIzaSyBxm3yDApl-FkVRwHUKGACLeBhMMTX2ubI",newDataLoaded,"json");

}

//I am working with the Google chart loading function.
function DataSource() {

	//Now I'll load the Google vizualization library.
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "googleLoaded"

	});

}


$(document).ready(DataSource);

