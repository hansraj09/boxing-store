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
    <div className='flex flex-col my-6'>
      <img src={image} alt={id} className="h-[20rem] w-[20rem]" />
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
          <h2 className="font-cinzel font-semibold text-black">{title}</h2>
          <h1 className="font-cinzel text-black">{weight}</h1>
          <h1 className="font-cinzel text-black">{color}</h1>
        </div>
        <h4 className="font-cinzel text-black font-bold text-xl">{price}</h4>
      </div>			  
    </div>
  )
}

export default Card