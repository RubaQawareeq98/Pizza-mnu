import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css'
import {Avetar,Intro} from "./card.js"
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  const skills = [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA"
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D"
    },
    {
      skill: "Web Design",
      level: "advanced",
      color: "#C3DCAF"
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33"
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60DAFB"
    },
    {
      skill: "Svelte",
      level: "beginner",
      color: "#FF3B00"
    }
  ];
  
function App(){
    return(
      <div className="card">
          <Avetar />
          <Intro />
          <Skills />
      </div>
      // <div>
      //   <Header />
      //   <Menu />
      //   <Footer />
      // </div>
        // <div className="card">
        // <img src="pizzas/funghi.jpg"></img>
        // <Content />
        // </div>
    );
}


function Content (){
  return(
    <main className="">
      <h2>Ruba Qawareeq</h2>
      <p>Front-end developer and Authorize student froom Gaza sky geeks
      Front-end developer and Authorize student froom Gaza sky geeks
      Front-end developer and Authorize student froom Gaza sky geeks
      </p>
    <Skills />
    </main>
  )
}
function Skills (){
let sk=skills

  return (
    <ul className="skills">
      {
        sk.map((s) => (
          <Skill skill={s} />
         
        ))
        
      }

      
   
    </ul>
  )

}

function Skill(props){

  return <li style={{backgroundColor:props.skill.color}}>
    {props.skill.level==="beginner" && "👶"}
    {props.skill.level==="advanced" && "💪"}
    {props.skill.level==="intermediate" && "👍"}
{props.skill.skill}

  </li>
}
function Header(){
  return(
    <header>
      <h1 className="header">Fast React Pizza .co</h1>

    </header>

  );
}



function Menu(){
 let pizzas=pizzaData
  return(
    <main className="menu">
      <h1>Our Menu</h1>
      {
        pizzas.length>0?  
       <ul>
        { 
        pizzas.map((pizza)=>(
         
          <Pizza pizzaObj={pizza} key={pizza.name} />
          
        ))}
      </ul>
      :<p>The menu is not ready right now comeback later</p>}
      
       
     
    </main>
  )
}
function Footer(){
let hour= new Date().getHours();
let oH=12;
let cH=16
let isOpen= hour && oH <=cH

  return(
  
    <footer className="footer"> 
    {isOpen ?
      <Order cH={cH}/>
    
      :<p>We are closed right now back later</p>}</footer>
  )
}
function Order(props){
  return <div>
  <p>We are open untill {props.cH}:00 you can visit us!</p>
  <button class= "btn">Order Now</button>
</div>

}
function Pizza(props){
  
    return <li className={`pizza ${props.pizzaObj.soldOut? "sold-out":""}`}>
       <img src={props.pizzaObj.photoName}></img>
         <h2>{props.pizzaObj.name}</h2>
         <p>Tomato, mozarella, spinach, and ricotta cheese</p>
         <span>{props.pizzaObj.price}</span>
    </li>
   
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
<React.StrictMode><App/></React.StrictMode>
)