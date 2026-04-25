import './Button.css'

type ButtonProps = {
  label: string
  variant?: 'primary' | 'neutral' | 'subtle'
  onClick?: () => void
}

export const Button = ({ label, variant = 'primary', onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`btn btn--${variant}`}>
      {label}
    </button>
  )
}