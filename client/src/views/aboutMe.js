import React from 'react'

class AboutMe extends React.Component {
  render() {
    return (
      <div
        className='container-fluid'
        style={{
          width: '100vw',
          paddingTop: '15vh',
          height: '100vh',
          backgroundColor: '#dddddd71'
        }}
      >
        <div className='row'>
          <div className='col-sm-1' />
          <div className='col-sm-10'>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '6vw',
                color: '#666'
              }}
            >
              ABOUT ME
            </p>
            <p
              style={{
                fontSize: '1.25vw',
                marginBottom: '1vh',
                fontWeight: 100,
                color: '#157ec4'
              }}
            >
              LIKE THERE'S MUCH TO KNOW
            </p>
            <p style={{ fontSize: '1.75vw' }}>
              Welcome to my portfolio! My name is Julio Valdez (otherwise known
              as Lilo) and I am 23 years young with a beautiful wife and son. I
              grew up in El Monte, CA with mom and 3 brothers as well as
              spending lots of time with my dad in Boyle Heights before settling
              in the DownTown Los Angeles area. Unlike most kids my age, I spent
              most of my highschool years learning about smartphones and tablets
              and discovering the versatility found in the Google/Android
              ecosystem as well as digging through root files of an old iphone
              5s to accomplish a high score on flappy bird that none of my
              friends or family could beat. My days also consisted heavily on
              hours of playing Call of Duty: Modern Warfare 2. And as any
              honest, hardcore fan of the franchise would do, I started looking
              into different ways to mod my profile. After finding a mod menu
              which I really enjoyed using, I attempted to modify it in order to
              create my own version. This was my first real time actually coding
              something and learning a new programming language without even
              realizing it. Little did I know this would turn into a passion
              that would be hard to let go of, so much so that I would quit one
              of my jobs and put everything on the line just for an opportunity
              at doing what I learned to love and loved to learn. Some people
              learn coding for the money. Not me. It's been very important for
              me to realize that passion is what should be motivating me do what
              I do for a living. I've gone from management to self-employed to
              working at a bank and even tried being a stay-at-home dad but
              every time I thought to myself "This is it, this is where I want
              to be" I failed to feel satisfaction and fulfilment. That is until
              now! I would be lying if I said that the money did not play a role
              in my excitement for this new career path I am embarking in but I
              would also be underselling myself if I didn't let you know that
              it's not only about the money or didn't tell you about the
              countless nights spent in front of a computer screen, typing
              without realizing I only had a couple of hours left until I had to
              wake up to go to work in the morning. I want to go from getting in
              trouble for coding on a piece of paper because I'm at work to
              actually contributing with someone who makes an impact in the
              world around us while doing what I love to do. All I'm looking for
              is an opportunity to grow as a person and professionally while
              doing what I love to do. Just to be clear, what I love to do is
              code. A job doesn't push people to new limits. Their Passion Does.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe
