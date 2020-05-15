import React from 'react'
import {
  blueMountains,
  blueMountainsSquare,
  backgroundVideo,
} from '../../images/backgrounds'

const VideoBg = (props) => (
  <>
    <div
      style={{
        height: '417px',
        width: '100%',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'absolute',
          zIndex: 1,
          height: '417px',
          width: '100%',
        }}
      >
        <div
          style={{
            maxWidth: '1050px',
            margin: 'auto',
          }}
        >
          {props.children}
        </div>
      </div>
      <video
        playsInline
        autoPlay
        muted
        loop
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'relative',
          zIndex: '0',
        }}
      >
        <source src={backgroundVideo} type='video/mp4' />
      </video>
    </div>
  </>
)

export default VideoBg
