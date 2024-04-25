import { useState } from "react"
import { Input } from "./Input"
import "./Hypotenuse.css"

//This component will hold a hypotenuse calculator
export const Hypotenuse: React.FC = () => {

    //let's define some state variables to store the 2 values for our calculation and the result of the calculation
    //(Remember, to calculate a hypotenuse, we need the 2 shorter sides of the triangle - Side A and Side B)
    const [sideA, setSideA] = useState(0)
    const [sideB, setSideB] = useState(0)
    const [result, setResult] = useState(0)

    //This function will store the sideA or sideB input values (depending on which one changed)
    //we will take the name of the input, and assign values to state depending on that name
    const storeValues = (input:any) =>{

        //input.target.name = the "name" attribute of the input box
        //input.target.value = the value inside the input box
        if(input.target.name === "side A"){
            setSideA(input.target.value)
        } else {
            setSideB(input.target.value)
        }
    }

    const calculateHypotenuse = () => {

        //calculate the hypotenuse given the sideA and sideB state values
        let hypotenuse:number = Math.hypot(sideA, sideB)

        //set the result state variable based on our calculation above
        setResult(hypotenuse)

    } 

    return(
        <div className="input-container">
            <h3>Hypotenuse Calculator</h3>
            <Input name="side A" onChange={storeValues}></Input>
            <Input name="side B" onChange={storeValues}></Input>


            {/* Conditional Rendering! if the sideA and sideB state variables are truthy, the error message doesn't render*/}
            <p style={{color:"red"}}>
                {sideA > 0 && sideB > 0 ? '' : "Please enter both numbers"}
            </p>

            {/* If the result state variable is truthy, render the result. Otherwise, render nothing */}
            <div>
                {result ? <p>You Calculated: {result}</p> : ''}
            </div>

            <button onClick={calculateHypotenuse}>Calculate!</button>

        </div>
    )

}