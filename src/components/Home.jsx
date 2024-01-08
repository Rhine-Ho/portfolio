import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import Video from '../assets/namecard.mkv';
import { RxDoubleArrowDown } from 'react-icons/rx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Nickname, cloud3, cloud4 } from '../assets';


const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.fromTo(
      'h2',
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 2.5 }
    );

    tl.fromTo(
      'h3',
      { opacity: 0 },
      { opacity: 1, duration: 3 }
    );

    tl.fromTo(
      '.arrow',
      { opacity: 0, y: '-10px' },
      {
        opacity: 0.5,
        ease: 'Bounce.easeOut',
        y: '5px',
        duration: 2,
        repeat: -1,
        yoyo: true,
      }
    );
      // Ghostegg 的動畫效果
    gsap.fromTo(
      '.ghostegg',
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '.ghostegg',
          scrub: 0.2,
          start: '20% top',
          end: ' bottom',
          //markers: true,
        },
        onComplete: () => {
          gsap.to('.ghostegg', { opacity: 0 });
        },
      }
    );
    // Cover1 的動畫效果
    gsap.fromTo(
      '.Cover1',      // 從左邊移入
      { opacity: 0, x: '-100%' },
      {
        opacity: 1,
        x: '15%',
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.Cover1',
          start: '-40% top',
          end: '30% top',
          scrub: 0.2,
         // markers: true,
        },
        onComplete: () => {
            gsap.to('.Cover1', { opacity: 0 });   
        },
      }
    );

    // Cover2 的動畫效果
    gsap.fromTo(
      '.Cover2',      // 從右邊移入
      { opacity: 0, x: '100%' },
      {
        opacity: 1,
        x: '0%',
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.Cover2',
          start: '-40% top',
          end: '30% top',
          scrub: 0.2,
          //markers: true,
        },
        onComplete: () => {
          gsap.to('.Cover2', { opacity: 0 });
        },
      }
    );
  }, []);

  return (
    <>
      <section id="Home">
        <div className="flex flex-col justify-end items-end">
            <div className="w-full h-full object-cover">
              <ReactPlayer
                url={Video}
                alt="namecard"
                playing={true}
                loop={false}
                muted
                width="100%"
                height="auto"
                className="namecard mt-1"
              />
            </div>
         
            <div className="w-full absolute font-orbitron flex flex-col items-center justify-end ">
              <h2 className="drop-shadow-md text-cyan-100 drop-shadow-4xl">Scroll down</h2>
              <h3 className="drop-shadow-md text-cyan-200 drop-shadow-4xl">view more</h3>
              <RxDoubleArrowDown className="arrow text-5xl text-cyan-300" />
              <img src={Nickname} alt="nickname" className="ghostegg  z-20 w-2/5 h-80 fixed top-0" />
            </div>

            <div className="absolute translate-y-96 flex z-20 w-full justify-center" >
              <img src={cloud3} alt="cloud" className='Cover1 h-96 w-1/2'/>
              <img src={cloud4} alt="cloud" className='Cover2 h-full w-1/2'/>
            </div>
        
        </div>
      </section>
    </>
  );
};

export default Home;
