import React from 'react'

const ClickableLink = (props) => (
  <a
    style={
      props.margin
        ? {
            color: '#4ca1c6',
            marginRight: '25px',
          }
        : {
            color: '#4ca1c6',
          }
    }
    href={props.link}
  >
    {props.name}
  </a>
)

export default ClickableLink
