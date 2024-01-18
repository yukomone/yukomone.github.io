onload = async function create() { 
    let selectIngr = `<option value='none'>none</option>`;
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
        .then(response => response.json())
        .then(data => {
            data.drinks.forEach(ingredient => {
                //console.log(ingredient.strIngredient1);
                const option = `<option value='${ingredient.strIngredient1}'>${ingredient.strIngredient1}</option>`;
                selectIngr += option;
            })
        })
        .catch(error => console.error('Error:', error));
    document.querySelector('#select__ingredient--info').innerHTML = selectIngr;
}
// selectIngredient = document.querySelector('#select__ingredient').value;