import header_logo_lg from "./../../img/header/header_logo_lg.png";
import header_logo_fixed from "./../../img/header/header_logo_fixed.png";
import header_logo_sp from "./../../img/header/header_logo_sp.jpg";
import ico_world from "./../../img/header/ico_word.png";
import ico_search from "./../../img/header/ico_search.png";
import tobu from "./../../img/header/tobu.png";
import ico_pop from "./../../img/header/ico_pop.png";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header">
          <div className="header_container header_container_blue">
            <div className="top_menu">
              <a className="header__logo" href="#">
                <img src={header_logo_sp} alt="Sky Tree Logo" />
              </a>

              <div className="top_menu_menu">
                <button className="menu_button">
                  <img src={ico_world} alt="World" width={23} height={23} />

                  <p>LANGUAGE</p>
                </button>

                <button className="menu_button">
                  <img src={ico_search} alt="Search" width={23} height={23} />

                  <p>Search this website</p>
                </button>

                <button className="menu_button">
                  <img src={ico_pop} alt="Pop" width={23} height={23} />

                  <p>TOBU RAILWAY</p>
                </button>

                <button className="menu_button">
                  <p className="town__bt">TOKYO SKYTREE TOWN</p>
                </button>
              </div>

              <img
                className="tobu_img"
                src={tobu}
                alt="Tobu"
                width={77}
                height={45}
              />
            </div>
          </div>

          <div className="header__nav">
            <ul className="list">
              <li className="item">
                <div className="tickets"></div>
              </li>
              <li className="item">
                <div className="access"></div>
              </li>
              <li className="item">
                <div className="floor"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
