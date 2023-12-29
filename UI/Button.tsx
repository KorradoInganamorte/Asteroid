type ButtonProps = {
    name: string
    onClick?: () => void
}

const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className='decoration-div_large'>{name}</button>
  )
}

export default Button