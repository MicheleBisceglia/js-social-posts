//Milestone 1 - Creiamo il nostro array di oggetti
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?/1",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?/1"
        },
        "likes": 80,
        "created": "25-04-2022"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis",
        "media": "https://unsplash.it/600/300?/2",
        "author": {
            "name": "Jocopoco Majoco",
            "image": "https://unsplash.it/300/300?/2"
        },
        "likes": 23,
        "created": "25-04-2022"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut.",
        "media": "https://unsplash.it/600/300?/3",
        "author": {
            "name": "joe Jò",
            "image": "https://unsplash.it/300/300?/3"
        },
        "likes": 115,
        "created": "23-04-2022"
    },
    {
        "id": 4,
        "content": "Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?/4",
        "author": {
            "name": "Giovanna Lamanna",
            "image": "https://unsplash.it/300/300?/4"
        },
        "likes": 567,
        "created": "15-04-2022"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa.",
        "media": "https://unsplash.it/600/300?/5",
        "author": {
            "name": "Ilaria Condizionata",
            "image": "https://unsplash.it/300/300?/5"
        },
        "likes": 345,
        "created": "13-04-2022"
    }
];
//Ciclo foarEach
const newArray = posts.forEach((element) => {
//creo la card nell'hatml
	const createDiv = document.createElement("div");
//assegno la classe alla card creata
	createDiv.classList.add("post-list");
//inserisco icona e nome nella card
	createDiv.innerHTML = `

    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${element.author.image}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.author.name}</div>
                    <div class="post-meta__time">${element.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.content}</div>
        <div class="post__image">
            <img src="${element.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>         
    </div> `
	document.getElementById("container").append(createDiv);

});

