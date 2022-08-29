

// const loadMeals = (search) => {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayMeals(data.meals))
// }

// const displayMeals = meals => {
//     const mealsContainer = document.getElementById('meal-container')
//     mealsContainer.innerHTML = ``;
//     meals.forEach(meal => {
//         const mealDiv = document.createElement('div');
//         mealDiv.classList.add('col');
//         console.log(meal)
//         mealDiv.innerHTML = `
//         <div onclick="loadMealDetail(${meal.idMeal})" class="card">
//         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${meal.strMeal}</h5>
//             <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
//         </div>
//     </div>
//         `;
//         mealsContainer.appendChild(mealDiv);
//     })
// }


// const searchFood = () => {
//     const searchField = document.getElementById('search-field');
//     const search = searchField.value;
//     loadMeals(search)
//     searchField.value = '';
// }

// const loadMealDetail = (idMeal) => {
//     console.log(idMeal)
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => deisplayMealDetail(data.meals[0]))

// }


// const deisplayMealDetail = meal => {

//     const detailContainer = document.getElementById('detail-container');
//     detailContainer.innerHTML = ``;
//     const mealDiv = document.createElement('div');
//     mealDiv.classList.add('card');

//     mealDiv.innerHTML = `
//         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${meal.strMeal}</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of
//                 the
//                 card's content.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>        
//     `;
//     detailContainer.appendChild(mealDiv);

// }




// loadMeals('')



// const loadUserAsync = async () => {
//     const url = 'htt.womc';

//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         displayUser(data.result[0]);
//     }
//     catch {
//         console.log(error)
//     }

// }



const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => disPlayComments(data))
}

const disPlayComments = data => {
    const comments = data.slice(0, 20);

    comments.forEach(comment => {
        const { id, name, body, email, postId } = comment;
        const commentContainer = document.getElementById('comment-container');
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('card');
        commentDiv.classList.add('mb-4');

        commentDiv.innerHTML = `
        <div class="card-header">
            id: ${id};
        </div>
        <div class="card-body">
            <h5 class="card-title">Name: ${name}</h5>
            <p class="card-text">${body}</p>
            <a href="#" class="btn btn-primary" onclick = "loadPostDetails(${postId})">Post Details for this comment</a>
        </div>
        <div class="card-footer text-muted">
            Email: ${email}
        </div>
        `;

        commentContainer.appendChild(commentDiv);


    })

}

const loadPostDetails = (postId) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayPostDetails(data));
}


const displayPostDetails = data => {

    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = ``;
    const postDiv = document.createElement('div');
    const list = ['p-5', 'bg-dark', 'my-5', 'text-white']
    postDiv.classList.add(...list);
    postDiv.innerHTML = `
            <h1>${data.id}</h1>
            <h3>${data.title.toUpperCase()}</h3>
            <p>${data.body}</p>
        `;

    postContainer.appendChild(postDiv);

}


loadComments();


