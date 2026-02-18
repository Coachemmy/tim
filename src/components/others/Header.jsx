/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { logo1 } from "../../assets";
import { MdMenu, MdClose, MdArrowDropDown } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  };

  const projects = [
    { name: "ICT Skills for Girls", path: "/projects/ict" },
    { name: "Women Health", path: "/projects/health" },
    { name: "Beautiful Minds Scholarship", path: "/projects/scholarship" },
    { name: "Women Empowerment", path: "/projects/empowerment" },
  ];

  return (
    <div className="top-0 flex items-center text-[#292496] shadow-sm justify-between px-8 py-2 relative z-50">
      <div className="flex items-center gap-4">
        <div className="md:hidden cursor-pointer">
          {isMenuOpen ? (
            <MdClose
              onClick={() => setIsMenuOpen(false)}
              className="text-black text-2xl"
            />
          ) : (
            <MdMenu
              onClick={() => setIsMenuOpen(true)}
              className="text-black text-2xl"
            />
          )}
        </div>
        <Link to="/" className="flex items-center">
          <img
            src={logo1}
            alt="Reach Out to Girls Logo"
            className="w-[50%] max-w-[200px] cursor-pointer rounded-lg ml-4"
            onClick={handleClick}
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <div className="flex justify-center items-center gap-28 text-lg font-medium">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about-us">ABOUT US</NavLink>

          <div
            className="relative"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <span>PROJECTS</span>
              <MdArrowDropDown
                className={`transition-transform duration-300 ${
                  isSolutionsOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            <div
              className={`absolute top-full -left-28 mt-2 w-[300px] text-center bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-[9999] transition-all duration-200 ease-out ${
                isSolutionsOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {projects.map((project, idx) => (
                <Link
                  key={idx}
                  to={project.path}
                  className="block px-4 py-2 text-gray-800 hover:bg-[#f0f4f8] hover:text-[#292496] transition-colors"
                  onClick={() => setIsSolutionsOpen(false)}
                >
                  {project.name}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/blog">BLOG</NavLink>
          <NavLink to="/contact">CONTACT US</NavLink>
          <Link
            to="/donate"
            className="bg-[#292496] text-white hover:bg-opacity-90 p-3 rounded-md block text-center font-medium transition-all duration-200"
          >
            DONATE
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div
            className="md:hidden fixed top-0 left-0 h-screen w-[70vw] bg-[#292496] text-white z-50 transform transition-transform duration-300 ease-in-out"
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <div className="flex justify-between items-center p-4 border-b border-white">
              <span className="text-lg font-bold">Menu</span>
              <MdClose
                className="text-2xl cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>

            <div className="py-4">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>
                HOME
              </MobileNavLink>
              <MobileNavLink
                to="/about-us"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </MobileNavLink>

              {/* Projects Dropdown - Mobile */}
              <div className="border-t border-white/20">
                <div
                  className="py-4 px-6 font-semibold flex items-center justify-between cursor-pointer"
                  onClick={() =>
                    setIsMobileSolutionsOpen(!isMobileSolutionsOpen)
                  }
                >
                  <span>PROJECTS</span>
                  <MdArrowDropDown
                    className={`transition-transform duration-300 ${
                      isMobileSolutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isMobileSolutionsOpen
                      ? "max-h-60 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {projects.map((project, idx) => (
                    <Link
                      key={idx}
                      to={project.path}
                      className="block py-3 px-6 text-white hover:bg-white/10 transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileSolutionsOpen(false);
                      }}
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              </div>

              <MobileNavLink to="/blog" onClick={() => setIsMenuOpen(false)}>
                BLOG
              </MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                CONTACT US
              </MobileNavLink>
              <MobileNavLink to="/donate" onClick={() => setIsMenuOpen(false)}>
                DONATE
              </MobileNavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const NavLink = ({ to, children }) => {
  const [active, setActive] = useState(false);
  const currentUrl = window.location.pathname;

  useEffect(() => {
    setActive(currentUrl === to);
  }, [currentUrl, to]);

  return (
    <div className="relative cursor-pointer">
      <Link to={to} className={`${active ? "font-bold" : ""} relative`}>
        {children}
        <span
          style={{
            transform: active ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-1 left-0 h-1 w-full bg-[#292496] rounded-full transition-transform duration-300 origin-left"
        />
      </Link>
    </div>
  );
};

const MobileNavLink = ({ to, children, onClick }) => {
  const currentUrl = window.location.pathname;

  return (
    <div
      className={`py-4 px-6 cursor-pointer hover:bg-white hover:text-black duration-300 border-b border-white/20 ${
        currentUrl === to ? "font-extrabold bg-white text-black" : "font-light"
      }`}
      onClick={onClick}
    >
      <Link to={to} className="block">
        {children}
      </Link>
    </div>
  );
};

export default Header;
