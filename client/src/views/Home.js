import React from 'react'
import { MainCard } from '../components/cards'
import {
  TriviaImg,
  LiriImg,
  TabernaculoImg,
  PortfolioImg,
} from '../images/html-images'

const Home = (props) => (
  <>
    <div
      style={
        props.currentWidth < 776
          ? {
              margin: 'auto',
              minHeight: '517px',
              maxWidth: '1000px',
            }
          : {
              margin: 'auto',
              minHeight: '517px',
              maxWidth: '800px',
              display: 'flex',
              // background: '#696969',
              // borderRadius: '10px 35px',
              // boxShadow: '0 0 20px 0 #141414',
              // MozBoxShadow: '0 0 20px 0 #141414',
              // WebkitBoxShadow: '0 0 20px 0 #141414',
            }
      }
    >
      <MainCard currentWidth={props.currentWidth} isMobile={props.isMobile} />
      <div
        style={
          props.currentWidth < 776
            ? {
                margin: 'auto',
              }
            : {
                width: '170px',
                margin: 'auto',
              }
        }
      >
        <a href='https://trivia.teamjuli0.com/'>
          <div
            style={
              props.currentWidth < 776
                ? {
                    width: '280px',
                    height: '280px',
                    margin: '45px auto 30px auto',
                    backgroundImage: `url(${TriviaImg})`,
                    backgroundSize: 'cover',
                    borderRadius: '10px',
                    boxShadow: '0 0 20px 0 #141414',
                    MozBoxShadow: '0 0 20px 0 #141414',
                    WebkitBoxShadow: '0 0 20px 0 #141414',
                    transform: 'rotate(5deg)',
                  }
                : {
                    width: '210px',
                    height: '210px',
                    margin: '30px auto',
                    backgroundImage: `url(${TriviaImg})`,
                    backgroundSize: 'cover',
                    borderRadius: '10px',
                    boxShadow: '0 0 20px 0 #141414',
                    MozBoxShadow: '0 0 20px 0 #141414',
                    WebkitBoxShadow: '0 0 20px 0 #141414',
                    transform: 'rotate(5deg)',
                  }
            }
          ></div>
        </a>

        <div
          style={
            props.currentWidth < 776
              ? {
                  width: '280px',
                  height: '280px',
                  margin: '30px auto',
                  backgroundImage: `url(${TabernaculoImg})`,
                  backgroundSize: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 0 20px 0 #141414',
                  MozBoxShadow: '0 0 20px 0 #141414',
                  WebkitBoxShadow: '0 0 20px 0 #141414',
                  transform: 'rotate(-5deg)',
                }
              : {
                  width: '170px',
                  height: '170px',
                  margin: '30px auto',
                  backgroundImage: `url(${TabernaculoImg})`,
                  backgroundSize: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 0 20px 0 #141414',
                  MozBoxShadow: '0 0 20px 0 #141414',
                  WebkitBoxShadow: '0 0 20px 0 #141414',
                  transform: 'rotate(-5deg)',
                }
          }
        ></div>
      </div>
      <div
        style={{
          margin: 'auto',
        }}
      >
        <div
          style={
            props.currentWidth < 776
              ? {
                  width: '280px',
                  height: '280px',
                  margin: '30px auto',
                  backgroundImage: `url(${LiriImg})`,
                  backgroundSize: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 0 20px 0 #141414',
                  MozBoxShadow: '0 0 20px 0 #141414',
                  WebkitBoxShadow: '0 0 20px 0 #141414',
                  transform: 'rotate(-2deg)',
                }
              : {
                  width: '160px',
                  height: '160px',
                  margin: '30px auto',
                  backgroundImage: `url(${LiriImg})`,
                  backgroundSize: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 0 20px 0 #141414',
                  MozBoxShadow: '0 0 20px 0 #141414',
                  WebkitBoxShadow: '0 0 20px 0 #141414',
                  transform: 'rotate(-2deg)',
                }
          }
        ></div>
        <div
          style={
            props.currentWidth < 776
              ? {
                  width: '280px',
                  height: '280px',
                  margin: '30px auto',
                  backgroundImage: `url(${PortfolioImg})`,
                  backgroundSize: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 0 20px 0 #141414',
                  MozBoxShadow: '0 0 20px 0 #141414',
                  WebkitBoxShadow: '0 0 20px 0 #141414',
                  transform: 'rotate(3deg)',
                }
              : {
                  width: '200px',
                  height: '200px',
                  margin: '30px auto',
                  backgroundImage: `url(${PortfolioImg})`,
                  backgroundSize: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 0 20px 0 #141414',
                  MozBoxShadow: '0 0 20px 0 #141414',
                  WebkitBoxShadow: '0 0 20px 0 #141414',
                  transform: 'rotate(3deg)',
                }
          }
        ></div>
      </div>
    </div>
  </>
)

export default Home
