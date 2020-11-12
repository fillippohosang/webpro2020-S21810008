
const Card = ({name, institution, address, phone}) =>{
    return (
        <div className="card-container">
            <p>{name}</p>
            <p>{institution}</p>
            <p>{address}</p>
            <p>{phone}</p>
        </div>
    )
}

export default Card;