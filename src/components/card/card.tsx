import "./card.css"
interface CardProps {
    image: string,
    title: string,
    description: string,
    price: number
}
export function Card({image, title, description, price} : CardProps) {
    return (
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p><b>Valor:</b>{price}</p>
        </div>
    )
}