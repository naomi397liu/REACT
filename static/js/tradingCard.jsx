"use strict";


const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.jpg'
  }
];



function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}

// define TradingCardContainer component
function TradingCardContainer(prop) {
  const tradingCards = [];

  for (const currentCard of tradingCardData) {
    tradingCards.push(
      <TradingCard
        name={currentCard.name}
        skill={currentCard.skill}
        imageUrl={currentCard.imageUrl}
      />
    );
  }

  return (
    <React.Fragment>
      {tradingCards}
    </React.Fragment>
  );
}

ReactDOM.render(
  (<TradingCardContainer/>),
  document.querySelector('#tradingcard') 
);
// Create a class in html and call it to the class instead of ID
// cardsList = [];
//   for (const card of tradingCardData){

//     cardsList.push(<TradingCard
//     name = {card.name}
//     skill = {card.skill}
//     imgUrl = {card.img}
//   />);

//   return(
//     {cardsList}
//   )
// }



  // loop over each data point
  // and make a TradingCard component
  // return all those TradingCard's we made


// mount just ONE thing onto the page:
// one TradingCardContainer component

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Balloonicorn"
//       skill="video games"
//       imgUrl="/static/img/balloonicorn.jpg"
//     />
//   ),
//   document.querySelector('#balloonicorn')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Float"
//       skill="baking pretzels"
//       imgUrl="/static/img/float.jpg"
//     />
//   ),
//   document.querySelector('#float')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Llambda"
//       skill="knitting scarves"
//       imgUrl="/static/img/llambda.jpg"
//     />
//   ),
//   document.querySelector('#llambda')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Seedpy"
//       skill="Cookie baking"
//       imgUrl="/static/img/seedpy.jpg"
//     />
//   ),
//   document.querySelector('#seedpy')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Polymorphism"
//       skill="Morphing"
//       imgUrl="/static/img/polymorphism.jpg"
//     />
//   ),
//   document.querySelector('#polymorphism')
// );



// object_dict = [{"name":"Balloonicorn", "skill":"video games", "imgUrl":"/static/img/balloonicorn.jpg"},
// {"name":"Float", "skill":"baking pretzels", "imgUrl":"/static/img/float.jpg"}]

// // for const [i, letter] of Object.entries[prop.word] => hello
// 0,"h"
// 1,"e"
// 2,"l"
// 3,"l"
// 4,"o"

// for individual in object_dict:
//     name = individual["name"]
//     skill = individual["skill"]