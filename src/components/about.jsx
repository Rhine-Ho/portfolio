import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { INFO } from '../constants'; 

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);

  useEffect(() => {
    gsap.to(container,
      { opacity: 0, x: '100%' },
      {
      scrollTrigger: {
        opacity: 1,
        trigger: container,
        scrub: true
      }
     [container],

    })
    

   
  }, []);

  return (
    <div ref={container} className="flex flex-row gap-6 w-full justify-center">
      {INFO.map((item, index) => (
        <div
          key={item.id}
          className={`w-72 h-52 rounded-lg p-4 flex flex-col justify-center items-center ${index !== 0 ? 'ml-6' : ''}`}
          style={{
            backgroundImage: `url(${item.icon})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '500px',
            height: '400px',
          }}
        >
          <p className="text-sm p-9">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
