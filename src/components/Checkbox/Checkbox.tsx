import './Checkbox.css'

type CheckboxProps = {
  label?: string
  checked?: boolean
  onChange?: () => void
}

export const Checkbox = ({ label, checked = false, onChange }: CheckboxProps) => {
  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label && <span>{label}</span>}
    </label>
  )
}