import { useState } from "react"
import { ChildComponent } from "../ChildComponent/ChildComponent"

export const ParentComponent: React.FC = () => {

    /* State is an object that stores data related to a component
       The advantage of using state is that we can pass state data to a CHILD COMPONENT

       How do we define state? With something called useState()

       useState allows us to store and manipualte a component's state

       We declare:
        1) a variable that lets us ACCESS the state variable
        2) a mutator (like a setter in java) to CHANGE the state value
        3) the useState hook, which lets us set a default value
    */

    let[favColor, setColor] = useState('blue')
    let[favAnimal, setAnimal] = useState('hippo')

    

    return(
        <div>
            <h1>Hello from the Parent Component! My Fav color is: {favColor}</h1>
            <ChildComponent color={favColor} animal={favAnimal}></ChildComponent>
        </div>
    )

}