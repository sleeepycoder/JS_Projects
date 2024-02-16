const cardArray =[
{
    name:'milkshake',
    img:'images/milkshake.png'
},
{
    name:'blank',
    img:'images/blank.png'
},{
    name:'cheeseburger',
    img:'images/cheeseburger.png'
},{
    name:'fries',
    img:'images/fries.png'
},{
    name:'hotdog',
    img:'images/hotdog.png'
},{
    name:'ice-cream',
    img:'images/ice-cream.png'
},{
    name:'pizza',
    img:'images/pizza.png'
},{
    name:'white',
    img:'images/white.png'
},
]
cardArray.sort(()=>0.5 - Math.random());


const gridDisplay =document.querySelector('#grid');
let cardChosen =[]
let cardChosenId=[]

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card);
        console.log(card, i);
    }
}
createBoard();

function checkForMatch() {
   console.log("check");
   const cards =document.querySelectorAll('img')
   if(cardChosen[0] === cardChosen[1]){
    alert("you are matched");
cards[cardChosenId[0]].setAttribute('src','images/white.png')   
}

}


function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}