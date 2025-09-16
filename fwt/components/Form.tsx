import '../styles/Form.sass'
import type { JSXElement } from 'solid-js'

interface Props {
  children: JSXElement
}

export default (props: Props) => {
  return (
    <>
      <form method="post" enctype="application/x-www-form-urlencoded">
        {props.children}
      </form>
    </>
  )
}
