import React from 'react'
import { smileBitmoji } from '../images/ect'

const Home = () => (
  <>
    <div
      className='uk-grid-small uk-child-width-expand@s'
      uk-grid=''
      style={{
        height: '',
        maxWidth: '1000px',
        margin: 'auto',
        paddingTop: '80px',
      }}
    >
      <div className='uk-width-auto'>
        <img src={smileBitmoji} />
      </div>
      <div className='uk-width-expand'>World</div>
    </div>
  </>
)

export default Home
