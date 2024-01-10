function Nykaa({name, description, image}) {
    name = "Akanksha"
    return (
       
        <li>
            <p>{name}</p>
            <p>{description}</p>
           <p> <img src={image} className="rounded mx-auto d-block" alt={name}></img></p>
            {/* <p> <img className='imageSize' src = {props.image} alt =  /> </p> */}
        </li>

    )
}
export default Nykaa;