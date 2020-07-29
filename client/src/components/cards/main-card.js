import React from 'react'
import { smileBitmoji } from '../../images/ect'

const mainCard = (props) => {
  return (
    <div
      style={
        props.currentWidth < 776
          ? {
              height: '517px',
              margin: 'auto',
              width: '288px',
              display: 'box',
            }
          : {
              height: '517px',
              width: '288px',
              display: 'box',
            }
      }
    >
      <div
        style={{
          height: '517px',
          width: '288px',
          backgroundColor: '#4d5454',
          // margin: '0 100px',
          borderRadius: '5px 30px 30px 30px',
          overflow: 'hidden',
          boxShadow: '0 0 20px 0 #141414',
          MozBoxShadow: '0 0 20px 0 #141414',
          WebkitBoxShadow: '0 0 20px 0 #141414',
        }}
      >
        <div
          style={{
            borderRadius: '0 0 10px 20px',
            backgroundColor: '#b7baba',
            boxShadow: '0 0 20px 0 #141414',
            MozBoxShadow: '0 0 20px 0 #141414',
            WebkitBoxShadow: '0 0 20px 0 #141414',
            ow: '0 0 20px 0 #141414',
          }}
        >
          <img
            src={smileBitmoji}
            style={{
              width: '100%',
              padding: '10px',
            }}
          />
          <p
            style={{
              textAlign: 'center',
              fontSize: '25px',
              margin: '0 0 25px 0',
              color: '#262a2a',
              lineHeight: '40px',
              fontWeight: 'bold',
              backgroundColor: '#b7baba',
              borderRadius: '0 0 200px 100px',
            }}
          >
            Projects
          </p>
        </div>
        <div
          style={{
            width: '100%',
            backgroundColor: '#4d5454',
            fontStyle: 'italic',
          }}
        >
          <p
            style={{
              padding: '0 30px 15px 30px',
              margin: '0',
              fontSize: '14px',
              color: '#dedede',
            }}
          >
            I strive to build awesome web applications with functionality and
            simplicity at the core. The only time I'm not clicking away at a
            keyboard is when I'm kicking a ball with my son.
          </p>
        </div>
        <div
          style={{
            height: '25px',
            width: '100%',
            backgroundColor: '#3d4343',
            fontStyle: 'italic',
            fontSize: '14px',
            margin: 'auto',
            color: '#a6a9a9',
            lineHeight: '24px',
            padding: '0 20px 0 10px',
            textAlign: 'center',
          }}
        >
          Also, Dad jokes will never die
        </div>
      </div>
    </div>
  )
}

export default mainCard
