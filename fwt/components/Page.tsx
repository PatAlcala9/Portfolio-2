import '../styles/Page.sass'
import { Show } from 'solid-js'

interface Props {
  children?: any
  alignment?: 'row' | 'column'
}

export default (props: Props) => {
  return (
    <>
      <Show when={props.alignment}>
        <main class={props.alignment}>{props.children}</main>
      </Show>
      <Show when={!props.alignment}>
        <main class="page">{props.children}</main>
      </Show>
    </>
  )
}
