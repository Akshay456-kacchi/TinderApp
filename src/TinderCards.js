import React,{useState} from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setPeople] = useState([
        
        {
            name:'Elon Musk',
            url:"https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        },
        {
            name:'Jeff Bezos',
            url:"https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg",
        },
          
        {
            name:'David Warner',
            url:"https://english.cdn.zeenews.com/sites/default/files/2021/11/15/987677-warnerfinchbear.jpg"        
        
        },
    ]);

    const swiped = (direction, nameToDelete) =>{
        console.log("removing" + nameToDelete);
        // setLastDirection(direction)
    };

    const outOfFrame =(name) =>{
        console.log(name + " left the screen! ")
    };
        

    return (
        <div className="tindercards">
            <div className="tinderCards___cardContainer">

            {people.map((person) => (
                <TinderCard
                   className ="swipe"
                    key ={person.name}
                    preventSwipe={["up" ,"down"]}
                    onSwipe={(dir) => swiped(dir , person.name)}
                    onCardLeftScreen ={() => outOfFrame(person.name)}
                   
                >
                    <div style={{ backgroundImage:  `url(${person.url})` }}
                     className="card"
                    >

                     <h3>{person.name}</h3>

                    </div>
                </TinderCard>
            ))}
            
            </div>
           
        </div>
    )
}

export default TinderCards
