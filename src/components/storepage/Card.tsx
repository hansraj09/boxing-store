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
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-red-600 blur opacity-0 group-hover:opacity-100 transition-all"></div>
      <div className='relative flex flex-col my-6 shadow-2xl'>
        <img src={image} alt={id} className="h-[20rem] w-[20rem] object-cover border-2 border-black shadow-xl" />
        <div className='flex flex-row justify-between bg-white'>
          <div className='flex flex-col ml-2 mt-2'>
            <h2 className="font-cinzel font-semibold text-black text-lg">{title}</h2>
            <h1 className="font-cinzel text-black">{weight}</h1>
            <h1 className="font-cinzel text-black">{color}</h1>
          </div>
          <div className="flex text-center items-center justify-center">
            <h4 className="font-cinzel text-black font-bold text-3xl mr-4">{price}</h4>
          </div>
        </div>			  
      </div>
    </div>
  )
}

export default Card