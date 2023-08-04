interface ISimpleCard {
    name: string
    surname: string
    sayHello?: (key:string) => void
} 

// const SimpleCard:React.FC<ISimpleCard> = (props : ISimpleCard) => {
// or you can simplify above const declaration like below:
const SimpleCard:React.FC<ISimpleCard> = ({name, surname, sayHello}) => {

    return (
        <div>
        <p>Simple Card</p>
        {/* <h1>{props.name} {props.surname} </h1> */}
        {/* hence, after previous simplification in const declaration we can also simplify above props utilization */}
        <h1>{name} {surname}</h1>

        </div>
    )
}

export default SimpleCard;