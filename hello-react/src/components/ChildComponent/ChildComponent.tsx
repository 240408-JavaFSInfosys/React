/* In this component, props is of <any> type. What is props?

Props is the object sent in from a parent component. 
ParentComponent will render ChildComponent in its TSX, and pass its state object to the child
The child's props object will get populated with the Parent's state object 

ParentComponent will send a state containing color and animal. 
The state coming from the ParentComponent will ALWAYS be the props in the ChildComponent*/
export const ChildComponent: React.FC<any> = ({color, animal}) => {

    

    return(
        <div>
            <h3>Hello from the ChildComponent</h3>
            <h4 style={{color}}>My parent's favorite color is: {color}</h4>
            <h4>My parent's favorite animal is: {animal}</h4>
        </div>
    )

}