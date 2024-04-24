/* Recall how arrow functions work. They can take in values, and then execute some code 
In our FirstComponent, we're sending in no arguments hence the empty ()
React Components take two arguments: props and state, which we'll see later*/
export const FirstComponent: React.FC = () => {

    //define a variable
    let words:String = "I am stored in a variable in a component"

    //We will data bind the words variable into the TSX view below

    return(
        <div>
            <h3>Hello from our first component</h3>  
            <p>Data bound value: {words}</p>
        </div>
    )

}