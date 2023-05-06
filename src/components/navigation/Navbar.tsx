import { navLinks } from "../../data";
import { Outlet, NavLink } from "react-router-dom";
import { DoubleGlove } from "./DoubleGlove";
import styles from "../../style";
import { menu, close } from "../../assets";
import { useState } from "react";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="w-full overflow-hidden border-b-4 border-b-black">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <nav className="flex w-full py-3 justify-between items-center">
            <NavLink to="/home"><DoubleGlove /></NavLink>
            <ul className="sm:flex hidden flex-1 list-none justify-end items-center lg:space-x-32 space-x-6">
              {navLinks.map((nav, index) => (
                <li key={index} className="font-sedgwick font-normal cursor-pointer text-xl">
                  <NavLink to={`/${nav.id}`}>
                    {({ isActive }) => (
                      <div>
                        {nav.title}
                        {isActive && (
                          <div className="font-bold text-xl text-center">
                            *
                          </div>
                        )}                        
                      </div>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/*For small screens*/}
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
              />

              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 bg-light-gray-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-cinzel font-medium cursor-pointer text-[16px] 
                      ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                      onClick={() => setToggle(false)}
                    >
                      <NavLink to={`/${nav.id}`}>{nav.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Outlet />
    </>

  )
}

export default Navbar