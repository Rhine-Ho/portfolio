import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import{ footerLinks, ground } from'../constants';
gsap.registerPlugin(Draggable);

const THRESHOLD = 200;

const getDistance = () =>
  Math.random() > 0.5 ? gsap.utils.random(-100, -50) : gsap.utils.random(50, 100);


const Works = ({ stack: propsStack, duration = 0.5 }) => {

  const stackRef = useRef(null);
  const dragRef = useRef(null);
  const [stack, setStack] = useState(propsStack);

  const setNext = () => {
    let newStack = [...stack];
    newStack.push(newStack.shift());
    setStack(newStack);
  };

  const next = () => {
    gsap
      .timeline({
        onComplete: () => {
          setNext();
        },
      })
      .to(stackRef.current.children[0], {
        duration,
        xPercent: getDistance(),
        yPercent: getDistance(),
      }, 0)
      .to(stackRef.current.children[0], {
        opacity: 0,
        duration: duration * 0.5,
      }, duration * 0.5)
      .to(stackRef.current.children[1], {
        xPercent: 0,
        yPercent: 0,
        duration,
      }, 0);
  };

  // ... (rest of the code remains the same)

  return (
    <> 
        <section>
        <div className="stack__container">
            <button className="stack__control stack__control--next" onClick={next}>
              <span className="sr-only">Next</span>
            </button>
            {/* Rest of your JSX for controls and stack */}
          </div>
        </section>
    </>
   
  );
};

export default Works;
