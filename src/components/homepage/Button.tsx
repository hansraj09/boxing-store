type buttonProps = {
  text: string,
  style: string,
}

const Button = ({text, style}: buttonProps) => {
  return (
    <button type="button" className={`${style} py-4 px-6 bg-red-gradient
      font-cinzel font-extrabold text-lg text-white outline-none rounded-xl`}>
      {text}
    </button>
  )
}

export default Button