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

console.log ("Civilian Unemployment Data");

//I will add a Google data fusion table to bring data into my Google visualization.

//I am adding a function here that will retrieve the data. The name of my data is joblessInfo.
//I must remember to check the web page only in Firefox and not Chrome to ensure the data has been loaded.

function newData(unemploymentData){

	var gDataList = new google.visualization.DataList();
	
		
		//When I add columns, the first parameter is the data type in that column.
		//The second parameter is the name of the column.
		
		gDataList.addColumn('string', unemploymentData.columns[0]);
		gDataList.addColumn('number', unemploymentData.columns[1]);
		
		gDataList.addRows(unemploymentData.rows); //This only works becuase it is a google.visualization object.
		
		//Create a var for the updated chart and give it a title.
		
		var mupdatedChartoptions = {
			title: "Unemployment in the United States"
			
		};		

	//I will add a variable to put a lable on "Observations" in the data in my JSON file.

	var mobservationsArray = unemploymentData.observations;

	
	//Now I'm going to create a container to hold all the other lists.

	var mmasterDataList = [];

	//I have changed the "new header" list to "joblessInfo.columns". T
	//Then I'll add code from the Google Developers page to create a new empty DataTable 
	//to populate manually with data.
	
	var mnewHeader = junemploymentData.columns;
	
	var data = new google.visualization.DataList();
	gDataList.addColumn('string', newHeader[0]);
	gDataList.addColumn('number', newHeader[1]);
	gDataList.addRows(oblessInfo.rows);


	masterDataList.push(newHeader);


	//To create my visualiazation, I need to convert my JSON data to an array of arrays.
	//To do this, I will have to use for loops to loop individual data point arrays
	//from the "date" and "value" data and use it to drive the visualization. 
	//I'm using the length prperty of the array to make sure the "observations" cycles 
	//through all the data. 
	//Then I will add a var to tell the computer to get the apropriate object.
	//Next, I'll create a little array with just "date" and "value."
	//Final thing is to put the data array into the data list.
	//Then the masterList should be populated with an array of arrays that is all
	//the observations containing only the "date" and "value."

	for(var i=0; i<observationsArray.length; i++) {
		var indieObject = observationsArray[i];	
		var mainDataArray = [indieObject.date, Number(indieObject.value)];	
		masterDataList.push(mainDataArray);
}
	//I am creating an object to convert a string to a number.
	var num = new Number(100);

	console.log(masterList);

	//I am creating a new variable for the data table with a title property.
	//This will be the header of my data table.
	var options = {
		title: "Unemployment in the United States"
	};

	console.log(masterDataList);

	//Now I am going to use an array to data table function and pass the set of arrays 
	//I created to generate the data table to pass to the visualization function.

	var mainDataTable = google.visualization.arrayToDataTable(masterList);
	//I'm going to create a chart variable. The document.getElementByID is the 
	//equivalent of the jQuery $("#divName"). I must add the raw JavaScript command
	//"mainChartDiv" here.
	//For my Fusion Table Project, I am making this a line chart.
	var mainDataChart = new google.visualization.LineChart(document.getElementById("mainDataChartDiv"));
	mainDataChart.draw(mainDataTable, options);
}
          

//I am adding a function here that is the "Polo" of the google name "Marco."*/

function newDataLoaded(){
	console.log("my project loaded");
/*I'm going to set up my jQuery call with a get command to get the data.
 "$.get is the "Marco" and "infoLoaded"" is the "Polo."
 */
//Now I'm adding in the https address with a WHERE parameter to add the Google fusion table data.
//I have to add an ">" after the "DATE", then go directly to the date 1969-12-01.

		$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*FROM+1fcALUPt1J06yQQx349URVcxAqRcgZFdWDgwO932j+WHERE+DATE>'1969-12-01'&key=AIzaSyBxm3yDApl-FkVRwHUKGACLeBhMMTX2ubI")
}


/*I am adding a function here that is the "Polo."*/
function pageReady(){
	console.log("page done")
	//Step 1 is now done. Next step is to load the Google charting package. Write the "google load" function
	//followed by a list of parameters. The google name is the "Marco" and the function name is the "Polo."
	google.load("visualization", "1", {packages:["corechart"], "callback":newDataLoaded})


}

/*I will add a callback name via a document ready function.
Document ready is the "Marco" and the function is the "Polo."*/
$(document).ready(pageReady);



