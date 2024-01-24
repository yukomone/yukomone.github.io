onload = async function show() {
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(response => response.json())
        .then(data => {
            const drink = data.drinks[0];
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
        .catch(error => console.error('Error:', error));
    }

