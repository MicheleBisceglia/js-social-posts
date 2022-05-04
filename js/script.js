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
        "created": "2022-01-25"
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
        "created": "2022-01-25"
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
        "created": "2022-01-23"
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
        "created": "2022-01-22"
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
        "created": "2022-01-13"
    }
];

//Milestone 2
//Ciclo foarEach (scorro l'array)
posts.forEach((element) => {
//creo la card nell'hatml
	const createDiv = document.createElement("div");
//assegno la classe alla card creata
	createDiv.classList.add("post-list");
//inserisco i dati nella card
	createDiv.innerHTML = `

    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${element.author.image}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.author.name}</div>
                    <div class="post-meta__time">${formateDate(element.created)}</div>
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
                    <a class="like-button  js-like-button" href="##" data-postid="${element.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>         
    </div> `
	document.getElementById("container").append(createDiv);

});

//Milestone 3 
const buttons = document.querySelectorAll(".like-button");
const likedArray = [];
console.log(likedArray);
buttons.forEach((button) => {
    //gestiamo il like al momento del click 
    button.addEventListener('click', function() {
        let id = this.getAttribute('data-postid');
        let like = document.querySelector("#like-counter-" + id);
        console.log('cliccato ' + id, like);
        let likeBtn = document.querySelector(".like-button")  
        //cambiamo il colore del tasto like al click
        likeBtn.classList.add("like-button--liked")
        console.log(likeBtn);
        //Preleviamo il valore del contatore dei like sotto formma numerica (parseInt)
        let likesnumber = parseInt(like.textContent)
        //aumentiamo il contatore del like di 1 al click
        likesnumber = likesnumber + 1;
        //stampo nella pagina il nuomo contatore dei like 
        like.innerHTML = likesnumber
        //pusho il numero di like dell'elemento cliccato in un array vuoto 
        likedArray.push(likesnumber)

    });
});

//Bonus 1 
//Formattare le date in formato italiano gg/mm/aa
function formateDate(originalDate) {
    //creare un array con i parmetri di mm gg aa 
    const originalDateArray = originalDate.split("-");
    //invertiamo l'ordine degli elementi nell'array
    const reverseDateArray = originalDateArray.reverse().join("/")
    console.log(reverseDateArray);
    return reverseDateArray
}






  
