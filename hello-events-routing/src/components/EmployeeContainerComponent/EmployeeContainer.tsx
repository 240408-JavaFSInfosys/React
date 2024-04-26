import { useEffect, useState } from "react"
import { Employee } from "./Employee"

export const EmployeeContainer: React.FC<any> = (incomingData:any) => {


    //state variable to store an array of employee data (which will be sent in as props)
    const[employees, setEmployees] = useState([])

    //useEffect that populates the employees array with incoming employee data
    //(This emulates a get all that happens on component render... view all reimbs for instance)
    useEffect(() => {
        
        //we will set the employee state object to the Array found in employeeData.ts
        setEmployees(incomingData.incomingData)

        //what is THIS^ we're extracting the value called "incomingData" from our prop called "incomingData". We could have done this in the Child Component, but here is fine.

        //Yes, we could have just set this as default state... useState(incomingData.data)

        //just so we can see the incoming Data in the state variable
        console.log("Employees:")
        console.log(employees)

    }, ) //no square brackets! now this will run on render, and every time state changes

    return(
        <div>
            <h2>Employees:</h2>

            {/* Using .map() to render an Employee Component for every element in the employees array */}
            <div>
                {employees.map((employee:any) => {
                    return <Employee {...employee} key={employee.userId}></Employee>
                })}
            </div>

        </div>

        /* This .map() syntax looks a bit confusing, what's going on?
        
        "For every element in the employees Array (which holds our employee data)...
        Render on Employee Component!"

        In the Employee Component, we send an individual employee object, and a key of the userId
        
        What is ...employee? This is the "spread operator", which lets us send entire objects as props.
        It lets us avoid having to send each individual employee value as a separate prop.*/
    )

}