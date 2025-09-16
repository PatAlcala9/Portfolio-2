import '../styles/Input.sass'
import { createSignal } from 'solid-js'

interface Props {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

export default (props: Props) => {
  const [inputValue, setInputValue] = createSignal(props.value || '')

  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    const newValue = target.value
    setInputValue(newValue)
    if (props.onChange) {
      props.onChange(newValue)
    }
  }

  return (
    <>
      <input class="input" type="text" placeholder={props.placeholder} value={inputValue()} onInput={handleChange} />
    </>
  )
}
