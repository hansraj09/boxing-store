import { navLinks } from "../data";
import { Outlet, NavLink } from "react-router-dom";
import { DoubleGlove } from "./DoubleGlove";
import styles from "../style";

const Navbar = () => {
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
                            {/*add animation on this element*/}
                            *
                          </div>
                        )}                        
                      </div>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* render side panel for small screens */}
          </nav>
        </div>
      </div>
      <Outlet />
    </>

  )
}

export default Navbar