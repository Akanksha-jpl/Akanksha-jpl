//const name = "Akkuu"
function PropHello(props) {
    return (
        <li>
            <p> {props.name}</p>
            <p> {props.description}</p>
            <p> <img src={props.image} className="rounded mx-auto d-block" alt={props.name} /></p>
        </li>
    );
}
export default PropHello;