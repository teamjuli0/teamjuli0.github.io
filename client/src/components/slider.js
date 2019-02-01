import React from 'react'
import Slider from 'react-slick'
import FithubIcon from '../images/fitHub.png'
import OneReviewIcon from '../images/oneReview.png'
import GifTasticIcon from '../images/gifTastic.png'
import TriviaGameIcon from '../images/triviaGame.png'
import LiriIcon from '../images/liri.png'

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      adaptiveHeight: true
    }
    return (
      <Slider {...settings}>
        <div>
          <a href='https://frozen-eyrie-10750.herokuapp.com/'>
            <img
              src={FithubIcon}
              alt=''
              class='webImg fitHub'
              style={{ margin: 'auto', width: '35vw' }}
            />
          </a>
        </div>
        <div>
          <a href='https://teamjuli0.github.io/oneReview/'>
            <img
              src={OneReviewIcon}
              alt=''
              class='webImg oneReview'
              style={{ margin: 'auto', width: '35vw' }}
            />
          </a>
        </div>
        <div>
          <a href='https://teamjuli0.github.io/GifTastic/'>
            <img
              src={GifTasticIcon}
              alt=''
              class='webImg gifTastic'
              style={{ margin: 'auto', width: '35vw' }}
            />
          </a>
        </div>
        <div>
          <a href='https://teamjuli0.github.io/TriviaGame/'>
            <img
              src={TriviaGameIcon}
              alt=''
              class='webImg triviaGameWebsite'
              style={{ margin: 'auto', width: '35vw' }}
            />
          </a>
        </div>
        <div>
          <a href='https://github.com/teamjuli0/liri-node-app'>
            <img
              src={LiriIcon}
              alt=''
              class='webImg liriNodeApp'
              style={{ margin: 'auto', width: '35vw' }}
            />
          </a>
        </div>
      </Slider>
    )
  }
}

export default SimpleSlider
