const cardArray=[
    {
         name:'fries',
         img:'fries.png'
    },
    {
        name:'cheeseburger',
        img:'cheeseburger.png',
   },
   {
        name:'ice-cream',
        img:'ice-cream.png'
   },
   {
        name:'hotdog',
        img:'hotdog.png'
   },
   {
         name:'milkshake',
         img:'milkshake.png'
   },
   {
         name:'pizza',
        img:'pizza.png'
   },
       {
         name:'fries',
         img:'fries.png'
    },
    {
        name:'cheeseburger',
        img:'cheeseburger.png',
   },
   {
        name:'ice-cream',
        img:'ice-cream.png'
   },
   {
        name:'hotdog',
        img:'hotdog.png'
   },
   {
         name:'milkshake',
         img:'milkshake.png'
   },
   {
         name:'pizza',
        img:'pizza.png'
   },
]
cardArray.sort(()=> 0.5-Math.random())
// console.log(cardArray)
const gridDisplay=document.querySelector('#grid')
const result=document.getElementById('result');
let cardsChosen=[];
let cardsChosenIds=[];
let cardsWon=[]
// console.log(gridDisplay);
function createBoard()
{
    for(let i=0;i<cardArray.length;i++)
    {                                                                //1st execute create img tags inside div grid
       const card= document.createElement('img');
       card.setAttribute('src','blank.png');                          //actually set src attribute
       card.setAttribute('data-id',i);                                //set data-id for unique identification .its very similar to id
       card.addEventListener('click',flipCard)                        //if user click, its call the flipCard function
       gridDisplay.appendChild(card);                                  //its main function add img tag with html file div
    }
}
createBoard();
function checkMatch()
{
    var cards=document.querySelectorAll('img');
    console.log("thani");
   const check1= cardsChosenIds[0];
   const check2=cardsChosenIds[1];
   console.log(cardsChosen.length)
   if(check1 == check2) 
   {
    cards[check1].setAttribute('src','blank.png')
    cards[check2].setAttribute('src','blank.png')
    alert('You have clicked same image :)')
   }
    if(cardsChosen[0] == cardsChosen[1])
    {
        alert("you found a match");
        cards[check1].setAttribute('src','white.png')
        cards[check2].setAttribute('src','white.png')
        cards[check1].removeEventListener('click',flipCard)   //disable the click option by user
        cards[check2].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen);
        console.log(cardsWon);
    }
    else 
    {
        cards[check1].setAttribute('src','blank.png')
        cards[check2].setAttribute('src','blank.png')
        alert("OOPS:( Try Again");
    }
    result.innerHTML=cardsWon.length;
    cardsChosenIds=[];    //once we compare continous 2 try and do empty the both array carsChosenIds and cardsChosen
    cardsChosen=[];
    if(cardsWon.length == (cardArray.length/2))
    {
         result.innerHTML="Congratulation you found all :)"
    }
}
function flipCard()
{
    // console.log(cardArray);
  const cardId= this.getAttribute('data-id');     //this is used for specify the img tag in this case
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId);                  //create new array name is cardsChosenIds for store the cardid which is user clicked
  console.log(cardsChosen);
  this.setAttribute('src',cardArray[cardId].img);
  if(cardsChosen.length === 2)                    //continous 2 try is same or not?
  {
    setTimeout(checkMatch,500)
  }
}