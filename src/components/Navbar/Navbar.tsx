import GirmanLogo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import SearchBox from "../SearchBox/SearchBox";
const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <Link to={"/"}>
        <div className="logo">
          <img src={GirmanLogo} alt="girman_logo" />
          <div className="logo_company_name">
            <h1>Girman</h1>
            <p>TECHNOLOGIES</p>
          </div>
        </div>
      </Link>
      {location?.pathname === "/result" ? (
        <div className="result_search">
          <SearchBox />
        </div>
      ) : (
        <div className="links">
          <LinkComponent value="Search" redirectTo="/" />
          <LinkComponent value="Website" redirectTo="https://girmantech.com" />
          <LinkComponent
            value="Linkedin"
            redirectTo="https://www.linkedin.com/company/girmantech/"
          />
          <a href="contact@girmantech.com.">CONTACT</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;

const LinkComponent = ({
  value,
  redirectTo,
}: {
  value: string;
  redirectTo: string;
}) => <Link to={redirectTo}>{value}</Link>;
