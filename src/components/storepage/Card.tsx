import styles from "../../style"

type cardProps = {
  id: string,
  image: string,
  title: string,
  weight: string,
  color: string,
  price: string,
}

const Card = ({id, image, title, weight, color, price } : cardProps) => {
  return (
    <div className='flex flex-col'>
      <img src={image} alt={id} />
      <div className='flex flex-row'>
        <div className='flex flex-col'>
          <h2>{title}</h2>
          <h1>{weight}</h1>
          <h1>{color}</h1>
        </div>
        <h4>{price}</h4>
      </div>			  
    </div>
  )
}

export default Card