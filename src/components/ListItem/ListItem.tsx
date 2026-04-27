import './ListItem.css'
import { Checkbox } from '../Checkbox/Checkbox'
import { Button } from '../Button/Button'

type ListItemProps = {
  label: string
  checked?: boolean
}

export const ListItem = ({ label, checked = false }: ListItemProps) => {
  return (
    <div className="list-item">
      <Checkbox checked={checked} />
      <span className="list-item__label">{label}</span>
      <Button label="Edit" variant="neutral" />
      <Button label="Delete" variant="subtle" />
    </div>
  )
}