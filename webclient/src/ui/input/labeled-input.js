import { Input } from './input'

export const LabeledInput = ({ label, ...props }) => {
  return (
    <div>
      {label} <Input {...props}></Input>
    </div>
  )
}
