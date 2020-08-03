import React from 'react'

const ClickableLink = (props) => (
  <a
    style={
      props.margin
        ? {
            color: '#7892ff',
            marginRight: '25px',
          }
        : {
            color: '#7892ff',
          }
    }
    href={props.link}
  >
    {props.name}
  </a>
)

export default ClickableLink
