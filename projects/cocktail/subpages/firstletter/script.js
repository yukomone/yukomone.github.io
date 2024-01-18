onload = function create() { 
    const option = document.createElement('option');
    option.value = 'none';
    option.textContent = 'None';
    document.querySelector('#select__first-letter').appendChild(option);
    let alphabet = 'abcdefghijklmnopqrstuvwyz'.split('');
    for(i=0; i<alphabet.length; i++) {
        const option = document.createElement('option');
        option.value = alphabet[i];
        option.textContent = alphabet[i];
        document.querySelector('#select__first-letter').appendChild(option);
    }
}
document.querySelector('#select__first-letter').addEventListener('change', show);
async function show() {
    document.querySelector('#output').innerHTML = '';
    selectLetter = document.querySelector('#select__first-letter').value;
    if(selectLetter == 'none') document.querySelector('#output').innerHTML = '';
    else {
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${selectLetter}`)
        .then(response => response.json())
        .then(data => {
            data.drinks.forEach(drink => {
                const drinkHtmlDiv = document.createElement('div');
                drinkHtmlDiv.classList.add('drink__section');

                const drinkImgIngr = document.createElement('div');
                drinkImgIngr.classList.add('drink__section--sub');

                const drinkIngr = document.createElement('div');
                drinkIngr.classList.add('drink__section--ingr');

                const drinkRec = document.createElement('p');
                drinkRec.classList.add('drink__recipe');
                drinkRec.textContent = drink.strInstructions;

                const drinkIngredients = document.createElement('ul');
                drinkIngredients.classList.add('drink__ingredients-list');

                for(i=1; i<=15; i++){
                    const ingredientKey = `strIngredient${i}`;
                    const ingredientValue = drink[ingredientKey];
                    const measureKey = `strMeasure${i}`;
                    if(ingredientValue != null) {
                            const drinkIngredient = document.createElement('li');
                            if(drink[measureKey] == null) drinkIngredient.textContent = drink[ingredientKey];
                            else drinkIngredient.textContent = drink[ingredientKey] + ' - ' + drink[measureKey];
                            drinkIngredients.appendChild(drinkIngredient);
                    }
                }
                
                const drinkTitle = document.createElement('p');
                const drinkImg = document.createElement('img');
                drinkTitle.classList.add('drink__title');
                drinkTitle.textContent = drink.strDrink;
                drinkImg.classList.add('drink__img');
                drinkImg.src = drink.strDrinkThumb;

                drinkIngr.appendChild(drinkRec);
                drinkIngr.appendChild(drinkIngredients);

                drinkImgIngr.appendChild(drinkImg);
                drinkImgIngr.appendChild(drinkIngr);

                drinkHtmlDiv.appendChild(drinkTitle);
                drinkHtmlDiv.appendChild(drinkImgIngr);

                document.querySelector('#output').appendChild(drinkHtmlDiv);
            })
        })
        .catch(error => console.error('Error:', error));
    }
}