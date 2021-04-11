function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

async function getMeals() {
    console.log('data request');
    const diningRequest = await fetch('/api/wholeMeal');
    const diningData = await diningRequest.json();
    return diningData;
}

async function windowActions() {
    console.log('loaded window');
    const results = await getMeals();
    const meals = results.data;
    
    const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const selectedMeals = mealArray.map((element) => {
        const random = getRandomIntInclusive(0, meals.length -1);
        return meals[random];
    });

    console.table(selectedMeals);
}

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Evening Sales in a Restaurant"
        },
        axisX: {
            valueFormatString: "DDD"
        },
        axisY: {
            prefix: "$"
        },
        toolTip: {
            shared: true
        },
        legend:{
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "stackedBar",
            name: "Meals",
            showInLegend: "true",
            xValueFormatString: "DD, MMM",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0, 30), y: 56 },
                { x: new Date(2017, 0, 31), y: 45 },
                { x: new Date(2017, 1, 1), y: 71 },
                { x: new Date(2017, 1, 2), y: 41 },
                { x: new Date(2017, 1, 3), y: 60 },
                { x: new Date(2017, 1, 4), y: 75 },
                { x: new Date(2017, 1, 5), y: 98 }
            ]
        },
        {
            type: "stackedBar",
            name: "Snacks",
            showInLegend: "true",
            xValueFormatString: "DD, MMM",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0, 30), y: 86 },
                { x: new Date(2017, 0, 31), y: 95 },
                { x: new Date(2017, 1, 1), y: 71 },
                { x: new Date(2017, 1, 2), y: 58 },
                { x: new Date(2017, 1, 3), y: 60 },
                { x: new Date(2017, 1, 4), y: 65 },
                { x: new Date(2017, 1, 5), y: 89 }
            ]
        },
        {
            type: "stackedBar",
            name: "Drinks",
            showInLegend: "true",
            xValueFormatString: "DD, MMM",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0, 30), y: 48 },
                { x: new Date(2017, 0, 31), y: 45 },
                { x: new Date(2017, 1, 1), y: 41 },
                { x: new Date(2017, 1, 2), y: 55 },
                { x: new Date(2017, 1, 3), y: 80 },
                { x: new Date(2017, 1, 4), y: 85 },
                { x: new Date(2017, 1, 5), y: 83 }
            ]
        },
        {
            type: "stackedBar",
            name: "Dessert",
            showInLegend: "true",
            xValueFormatString: "DD, MMM",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0, 30), y: 61 },
                { x: new Date(2017, 0, 31), y: 55 },
                { x: new Date(2017, 1, 1), y: 61 },
                { x: new Date(2017, 1, 2), y: 75 },
                { x: new Date(2017, 1, 3), y: 80 },
                { x: new Date(2017, 1, 4), y: 85 },
                { x: new Date(2017, 1, 5), y: 105 }
            ]
        },
        {
            type: "stackedBar",
            name: "Takeaway",
            showInLegend: "true",
            xValueFormatString: "DD, MMM",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0, 30), y: 52 },
                { x: new Date(2017, 0, 31), y: 55 },
                { x: new Date(2017, 1, 1), y: 20 },
                { x: new Date(2017, 1, 2), y: 35 },
                { x: new Date(2017, 1, 3), y: 30 },
                { x: new Date(2017, 1, 4), y: 45 },
                { x: new Date(2017, 1, 5), y: 25 }
            ]
        }]
    });
    chart.render();
    
    function toggleDataSeries(e) {
        if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }
    
    }

window.onload = windowActions;