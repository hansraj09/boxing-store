type buttonProps = {
  text: string,
  style: string,
  onClick: () => void,
}

const Button = ({text, style, onClick}: buttonProps) => {
  return (
    <button onClick={onClick} type="button" className={`${style} py-4 px-6 bg-red-gradient
      font-cinzel font-extrabold text-lg text-white outline-none rounded-xl hover:text-black transition-all`}>
      {text}
    </button>
  )
}

export default Button