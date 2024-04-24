/* Hopefully you all remember how Java Interfaces work :)
In TS, they have very similar behavior, but we store OBJECTS, not abstact method

I think these are MOST comparable to Model Classes in Java
We will be making User objects based on this Interface

We will make a UserComponent that uses this Interface*/


export interface UserInterface {
    firstName?:string, 
    lastName?:string,
    userName?:string,
    email?:string
}

//? just means it's optional AKA nullable. This lends very well to object flexibility