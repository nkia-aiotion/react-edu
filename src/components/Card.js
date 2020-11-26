
const Card = ({ title, body }) => {

    return (
        <div className="Card">
            <h2 className="title">{title}</h2>
            <p className="body">{body}</p>
        </div>
    )
}

export default Card;