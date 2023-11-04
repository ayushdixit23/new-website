"use client";
import First from './components/First'
import Second from './components/Second'
import Four from './components/Four'
import Five from './components/Five'
import Seven from './components/Seven'
import Six from './components/Six'
import Footer from './components/Footer'
import Third from './components/Third'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div className='scrollbar-hide h-screen'>
        <div className='overflow-x-hidden select-none
        '>
          <div data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-easing="ease-in-out" data-aos="fade-up">
            <First />
          </div>
          <div data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-easing="ease-in-out" data-aos="fade-right">
            <Second />
          </div>
          <div data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-easing="ease-in-out" data-aos="fade-left">
            <Third />
          </div>
          <div data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-easing="ease-in-out" data-aos="fade-right">
            <Four />
          </div>
          <div>
            {/* data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-easing="ease-in-out" data-aos="fade-left"> */}

            <Five />
          </div>
          <div data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-easing="ease-in-out" data-aos="fade-right">
            <Six />
          </div>
          <div data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-easing="ease-in-out" data-aos="fade-left">
            <Seven />
          </div>
          <div data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-easing="ease-in-out" data-aos="fade-down">
            <Footer />
          </div >
        </div >
      </div >
    </>
  )
}
