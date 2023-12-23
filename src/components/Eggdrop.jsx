import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from './about';


const Eggdrop = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    const frameCount = 646;
    const images = [];
    let egg = { frame: 0 };

    const preloadImages = async () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = (await import(`../assets/file/${i}.jpg`)).default; // 使用 import 引入圖片
        images.push(img);
      }
    };

    preloadImages(); // 預加載圖片

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[egg.frame], 0, 0, canvas.width, canvas.height);
    };

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(egg, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 2,
        pin: canvas,
        end: "400%",
      },
      onUpdate: render,
    });

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      // 在組件卸載時清除事件監聽和可能的動畫
      // 清除可能的動畫暫停 ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

  }, []);

  return (
      <>
          <section>
          <canvas ref={canvasRef} className="canvas" />
            <div className='fixed z-10'>
              <About />
            </div>

          <div id="Don't-hesitate" className="absolute w-1/2 h-1/3 z-10 -translate-y-96 translate-x-64 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="w-[125px] block mx-auto h-32 rounded-full sm:mx-0 sm:shrink-0" src="./src/assets/Rhine.jpg" alt="Rhine" />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        Rhine Ho.
                    </p>
                    <p className="text-slate-500 font-medium">
                        Front-End Engineer
                    </p>
                </div>
                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
            </div>
        </div>
        </section>
      </>

)};

export default Eggdrop;
