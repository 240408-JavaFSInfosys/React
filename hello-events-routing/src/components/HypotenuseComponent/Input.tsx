export const Input: React.FC<any> = (props:any) => {


    return(
        <div>
            <p>Enter {props.name} value:</p>
            <input type="number" name={props.name} onChange={props.onChange}/>
        </div>
    )

}