import { IoIosSearch } from "react-icons/io";
import "./searchBox.css";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBox = () => {
  const [filterName, setFilterName] = useState<string>("");
  const navigate = useNavigate();
  const filterHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/result?name=${filterName}`);
  };
  return (
    <form onSubmit={filterHandler} className="searchBox">
      <IoIosSearch />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setFilterName(e.target.value)}
      />
    </form>
  );
};

export default SearchBox;
