import { useEffect, useState } from "react"

export const EmployeeContainer: React.FC<any> = (incomingData:any) => {


    //state variable to store an array of employee data (which will be sent in as props)
    const[employees, setEmployees] = useState([])

    //useEffect that populates the employees array with incoming employee data
    //(This emulates a get all that happens on component render... view all reimbs for instance)
    useEffect(() => {
        
        //we will set the employee state object to the Array found in employeeData.ts
        setEmployees(incomingData)

        //Yes, we could have just set this as default state... useState(incomingData.data)

        //just so we can see the incoming Data in the state variable
        console.log("Employees:")
        console.log(employees)

    }, [])

    return(
        <div>
            <h4>Employees:</h4>
        </div>
    )

}