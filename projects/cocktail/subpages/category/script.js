onload = async function create() { 
    const option = document.createElement('option');
    option.value = 'none';
    option.textContent = 'None';
    document.querySelector('#select__category').appendChild(option);
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then(response => response.json())
        .then(data => {
            data.drinks.forEach(category => {
                const option = document.createElement('option');
                option.value = category.strCategory;
                option.textContent = category.strCategory;
                document.querySelector('#select__category').appendChild(option);
            })
        })
        .catch(error => console.error('Error:', error));
}
document.querySelector('#select__category').addEventListener('change', show);
async function show() {
    document.querySelector('#output').innerHTML = '';
    selectCategory = document.querySelector('#select__category').value;
    if(selectCategory == 'none') document.querySelector('#output').innerHTML = '';
    else {
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selectCategory}`)
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