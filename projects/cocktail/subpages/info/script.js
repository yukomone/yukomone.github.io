onload = async function create() { 
    const option = document.createElement('option');
    option.value = 'none';
    option.textContent = 'None';
    document.querySelector('#select__ingredient--info').appendChild(option);
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
        .then(response => response.json())
        .then(data => {
            data.drinks.forEach(ingredient => {
                const option = document.createElement('option');
                option.value = ingredient.strIngredient1;
                option.textContent = ingredient.strIngredient1;
                document.querySelector('#select__ingredient--info').appendChild(option);
            })
        })
        .catch(error => console.error('Error:', error));
}

document.querySelector('#select__ingredient--info').addEventListener('change', show);
async function show() {
    document.querySelector('#output').innerHTML = '';
    selectIngredient = document.querySelector('#select__ingredient--info').value;
    if(selectIngredient == 'none') document.querySelector('#output').innerHTML = '';
    else {
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${selectIngredient}`)
        .then(response => response.json())
        .then(data => {
            const result = data.ingredients[0];
                const ingrHtmlDiv = document.createElement('div');
                const ingrTitle = document.createElement('p');
                const ingrDesc = document.createElement('p');
                const ingrAlc = document.createElement('p');

                ingrHtmlDiv.classList.add('ingr__section');

                ingrTitle.classList.add('ingr__title');
                ingrTitle.textContent = result.strIngredient;
                ingrDesc.classList.add('ingr__desc');
                ingrDesc.textContent = result.strDescription;
                ingrAlc.classList.add('ingr__alc');
                ingrAlc.textContent =  "Alcohol: "+ result.strAlcohol;

                ingrHtmlDiv.appendChild(ingrTitle);
                ingrHtmlDiv.appendChild(ingrDesc);
                ingrHtmlDiv.appendChild(ingrAlc);

                document.querySelector('#output').appendChild(ingrHtmlDiv);
        })
        .catch(error => console.error('Error:', error));
    }
}
