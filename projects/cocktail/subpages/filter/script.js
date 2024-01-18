onload = async function create() { 
    const option = document.createElement('option');
    option.value = 'none';
    option.textContent = 'None';
    document.querySelector('#select__ingredient').appendChild(option);
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
        .then(response => response.json())
        .then(data => {
            data.drinks.forEach(ingredient => {
                const option = document.createElement('option');
                option.value = ingredient.strIngredient1;
                option.textContent = ingredient.strIngredient1;
                document.querySelector('#select__ingredient').appendChild(option);
            })
        })
        .catch(error => console.error('Error:', error));
}
document.querySelector('#select__ingredient').addEventListener('change', show);
async function show() {
    document.querySelector('#output').innerHTML = '';
    selectIngredient = document.querySelector('#select__ingredient').value;
    if(selectIngredient == 'none') document.querySelector('#output').innerHTML = '';
    else {
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selectIngredient}`)
        .then(response => response.json())
        .then(data => {
            data.drinks.forEach(drink => {
                const drinkHtmlDiv = document.createElement('div');
                const drinkTitle = document.createElement('p');
                const drinkImg = document.createElement('img');

                drinkHtmlDiv.classList.add('drink__section');
                drinkTitle.classList.add('drink__title');
                drinkTitle.textContent = drink.strDrink;
                drinkImg.classList.add('drink__img');
                drinkImg.src = drink.strDrinkThumb;

                drinkHtmlDiv.appendChild(drinkTitle);
                drinkHtmlDiv.appendChild(drinkImg);

                document.querySelector('#output').appendChild(drinkHtmlDiv);
            })
        })
        .catch(error => console.error('Error:', error));
    }
}
