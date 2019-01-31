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
          <img
            src={FithubIcon}
            alt=''
            class='webImg fitHub'
            style={{ margin: 'auto', width: '35vw' }}
          />
        </div>
        <div>
          <img
            src={OneReviewIcon}
            alt=''
            class='webImg oneReview'
            style={{ margin: 'auto', width: '35vw' }}
          />
        </div>
        <div>
          <img
            src={GifTasticIcon}
            alt=''
            class='webImg gifTastic'
            style={{ margin: 'auto', width: '35vw' }}
          />
        </div>
        <div>
          <img
            src={TriviaGameIcon}
            alt=''
            class='webImg triviaGameWebsite'
            style={{ margin: 'auto', width: '35vw' }}
          />
        </div>
        <div>
          <img
            src={LiriIcon}
            alt=''
            class='webImg liriNodeApp'
            style={{ margin: 'auto', width: '35vw' }}
          />
        </div>
      </Slider>
    )
  }
}

export default SimpleSlider
