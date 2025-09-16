import '../styles/Viewport.sass'
import { type JSXElement, Switch, Match } from 'solid-js'

interface Props {
  children: JSXElement
  desktop?: boolean
  tablet?: boolean
  mobile?: boolean
}

export default (props: Props) => {
  return (
    <>
      <Switch>
        <Match when={props.desktop && !props.tablet && !props.mobile}>
          <div class="on-desktop-only">{props.children}</div>
        </Match>

        <Match when={!props.desktop && props.tablet && !props.mobile}>
          <div class="on-tablet-only">{props.children}</div>
        </Match>

        <Match when={!props.desktop && !props.tablet && props.mobile}>
          <div class="on-mobile-only">{props.children}</div>
        </Match>

        <Match when={props.desktop && props.tablet && !props.mobile}>
          <div class="on-desktop-tablet-only">{props.children}</div>
        </Match>

        <Match when={props.desktop && !props.tablet && props.mobile}>
          <div class="on-desktop-mobile-only">{props.children}</div>
        </Match>

        <Match when={!props.desktop && props.tablet && props.mobile}>
          <div class="on-tablet-mobile-only">{props.children}</div>
        </Match>
      </Switch>
    </>
  )
}
