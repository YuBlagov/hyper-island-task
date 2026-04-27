import './Input.css'

type InputProps = {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <input
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}