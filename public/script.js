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

window.onload = windowActions;