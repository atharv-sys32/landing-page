import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO Course.edu ' title='Best Online Education Expertise' />
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
