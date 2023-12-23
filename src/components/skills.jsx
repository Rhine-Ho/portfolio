import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import{ skillsINFO } from'../constants';


const skills = () => {
  /*useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const contactSection = document.getElementById('Contact');

    if (contactSection) {
      gsap.fromTo(contactSection, {
        opacity: 1,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: contactSection,
          start: 'bottom bottom', // 從底部觸發
          end: 'bottom top', // 滾動到底部時觸發
          toggleActions: 'play none none reverse', // 觸發時播放動畫，滾動出去時反向播放
        },
      });
    }
  }, []);*/


  return (
    <section id="Skills">
        
    </section>
  );
};

export default skills;
