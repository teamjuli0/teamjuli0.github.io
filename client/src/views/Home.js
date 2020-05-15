import React from 'react'
import { smileBitmoji } from '../images/ect'

const Home = () => (
  <>
    <div
      style={{
        margin: 'auto',
        maxWidth: '1000px',
        display: 'flex',
      }}
    >
      <div
        style={{
          margin: 'auto',
          width: '288px',
          display: 'box',
        }}
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
              // padding: '0 0 5px 0',
              // fontStyle: 'italic',
              borderRadius: '0 0 10px 20px',
              // overflow: 'hidden',
              backgroundColor: '#b7baba',
              boxShadow: '0 0 20px 0 #141414',
              MozBoxShadow: '0 0 20px 0 #141414',
              WebkitBoxShaddisplay: 'flex',
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
                fontSize: '30px',
                margin: '0 0 25px 0',
                color: '#262a2a',
                lineHeight: '40px',
                fontWeight: 'bold',
                // padding: '0 10px',
                backgroundColor: '#b7baba',
                borderRadius: '0 0 200px 100px',
              }}
            >
              About Me
            </p>
          </div>
          <div
            style={{
              width: '100%',
              // height: '183px',
              backgroundColor: '#4d5454',
              // padding: '5px 0 0 0',
              fontStyle: 'italic',
              // margin: '-10',
              // borderTop: '2px solid #434343',
              // boxShadow: '0 0 3px 0 #000000',
              // MozBoxShadow: '0 0 3px 0 #000000',
              // WebkitBoxShadow: '0 0 3px 0 #000000',
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
              I strive to build simple, yet elegant web applications with
              functionality and value at the core. The only time I'm not
              clicking away at a keyboard is when I'm kicking a ball with my
              son.
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
      <div
        style={{
          margin: 'auto',
          display: 'box',
        }}
      >
        {/* Hello World */}
      </div>
    </div>
  </>
)

export default Home
