import { useEffect, useState } from "react";
import { UserInterface } from "../../interfaces/UserInterface";
import "./PostStyling.css"

//This component represents some hypothetical social media post by the user
//It has props of type UserInterface, so it can only accept a UserInterface object from a parent
export const UserPostComponent: React.FC<UserInterface> = (user:UserInterface) => {

    /* Destructuring - accomplished with {}
    
    Destructuring lets us break up a props object into individual variables
    The name inside the curly brace must match the name of the attribute you're trying to store*/
    const {userName} = user
    const {email} = user
    //We could have also grabbed the firstname and lastname in this way

    //let's define some state with useState and some logic to run on render with useEffect
    //we'll use these to generate a hypothetical post by the user

    const[post, setPost] = useState("")

    //for this useEffect, assume we GET this post via HTTP
    useEffect(() => {
        //use our mutator defined above to set some post data (random data with lorem)
        setPost("Thanks to useEffect, post content was set via the useState mutator on page load")
    }, []) 


    return(
        <div className="post-container">
            
            <div className="profile-container">
                <img className="profile-pic" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" alt="profile picture" />
                <h4>{userName}</h4>
            </div>

            <div className="content-container">
                <h5>{userName} says: </h5>
                <p>{post}</p>
            </div>

        </div>
    )

}