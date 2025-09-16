interface Props {
  year: string
  name: string
}

export default (props: Props) => {
  return (
    <>
      <span>
        Copyright © {props.year} {props.name} All Rights Reserved.
      </span>
    </>
  )
}
