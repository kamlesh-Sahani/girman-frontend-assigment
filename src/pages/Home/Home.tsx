import GerminLogo from "../../assets/logo2.png"
import SearchBox from "../../components/SearchBox/SearchBox";
import "./home.css";
import { IoIosSearch } from "react-icons/io";
const Home = () => {
  return (
    <div className="home">
      <div className="name_logo">
        <img src={GerminLogo} alt="girman_logo" />
        <h1>Girman</h1>
      </div>
      <div className="search">
      <SearchBox />
      </div>
   
    </div>
  )
}

export default Home