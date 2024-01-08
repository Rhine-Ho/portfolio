import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { INFO } from '../constants'; // Assuming INFO is your data array

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = container.children;

    // Calculate total width of all cards
    const totalWidth = cards.length * 200; // 調整成比原先更小的數值

    gsap.to(cards, {
      xPercent: -40 * (cards.length - 1), // Negative value for left-to-right scrolling
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: true,

      },
    });
  }, []);

  return (
    <div ref={containerRef} className="flex flex-row gap-6 w-full justify-center">
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
