import React, { useState, useRef, useEffect } from "react";
import { Nickname } from "../assets";
import { navLinks } from "../constants";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import gsap from "gsap";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {

    const menu = menuRef.current;
    const tl = gsap.timeline({ defaults: {  } });

    if (menuOpen) {
      gsap.to(menu, {
        x: 0,
        duration: 1,
        ease: "power3.inOut",
      });
      gsap.fromTo(
        menu.children,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          delay: 0.5,
          stagger: 0.3,//
          ease: "power3.out",
        }
      );

          // Hide elements when menu is open
          //gsap.to(['h2', 'h3', '.arrow'], { opacity: 0 });
        } else {
      gsap.to(menu, {
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
            // Show elements when menu is closed
            //gsap.to(['h2', 'h3', '.arrow'], { opacity: 1 });

    }


    
  }, [menuOpen]);

  return (
    <nav>
      <div className="m-4 w-40 fixed items-center justify-items-center z-20">
        <img src={Nickname} alt="egg" className="w-40 mx-1" />
        <h1 className="font-fredoka text-center text-base mx-1">Rhine's portfolio.</h1>
      </div>

      <div className="absolute m-8 top-4 right-4 z-50">
        {menuOpen ? (
          <RxCross2
            className="text-4xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <RxHamburgerMenu
            className="text-4xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>

            {menuOpen && (
                <div
                ref={menuRef}
                className={`w-full h-full p-6 bg-blue-gradient absolute top-0 left-0 mx-4 flex z-40`}
                style={{ transform: "translateX(100%)" }}       
                  >
                  <ul className="flex justify-between items-center flex-1 drop-shadow-4xl">
                    {navLinks.map((nav, index) => (
                      <li
                        key={nav.id}
                        className={`font-orbitron text-md cursor-pointer  
                        ${
                          active === nav.title ? "text-white" : "text-dimWhite"
                        } ${index === navLinks.length - 1 ? "m-5" : "m-4"}`}
                        onClick={() => {
                          setActive(nav.title);
                          setMenuOpen(false);
                        }}
                      >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              
            )}
            
    </nav>
  );
};

export default Navbar;
