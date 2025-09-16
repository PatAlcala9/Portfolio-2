interface Props {
  avif: string
  webp: string
  size?: number
  alt?: string
  radius?: number
}

export default (props: Props) => {
  return (
    <>
      <picture>
        <source srcset={props.avif} type="image/avif" />
        <source srcset={props.webp} type="image/webp" />
        <img style={`border-radius: ${props.radius}rem`} width={props.size} height="auto" decoding="async" loading="lazy" alt={props.alt} />
      </picture>
    </>
  )
}
