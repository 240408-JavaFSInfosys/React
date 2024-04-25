import { useEffect, useState } from "react"
import { UserInterface } from "../../interfaces/UserInterface"
import { UserPostComponent } from "./UserPostComponent"

export const UserComponent: React.FC = () => {

    /* Remember, state holds values related to a component that can be passed to a child component
    
    Using the useState hook to define state for this component
    Set it so that it can only use values from UserInterface (firstname, lastname, username, email) 
    Good way to enforce type safety!*/
    const [user, setUser] = useState<UserInterface>({
        firstName: '',
        lastName: '',
        userName: '',
        email: ''
    })

    //useEffect is a hook often used for populating data after a component loads (AKA on mount)
    //but it can pretty much be used for executing any logic after any event (button clicks, etc)

    //Assuming we made some HTTP call to a server (with axios) which grabs user data
    //(maybe login?) to set the fields of the state object defined above
    useEffect(() => {

        //assume the HTTP request happens here and we save the data to a variable...
        //but we're just going to hardcode the user data

        setUser({
            firstName: 'Bonjamin',
            lastName: 'P',
            userName: 'BigBon',
            email: 'ILuvReact111@gmail.com'
        })
    }, []) //Empty array means this effect runs once the component renders


    //In our TSX, we'll databind the values from our user state object
    return(
        <div>
            <h2>User: {user.firstName} {user.lastName}</h2>
            <h3>Email: {user.email}</h3>
            <UserPostComponent {...user}></UserPostComponent>
        </div>
        //To send entire state objects to a child's props, we can use "..."
        //This is known as the "spread operator" 
    )

}