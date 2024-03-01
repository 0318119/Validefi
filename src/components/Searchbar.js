import React, { useState } from "react";
import "../css/SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close"; 
import bitcoin_icon from '../images/bitcoin.png';
import Ethcoin_icon from '../images/eth.svg'

// const handleClick = () => {
//   alert('hamza');
// }


const Results = () => (
  <div className="search-results">
    <div className="scroll_box">
        <li className="top_box">
          <img src={Ethcoin_icon}/>
          <span>ETHEREUM</span>
        </li>
        <li className="top_box">
          <img src={bitcoin_icon}/>
          <span>ETHEREUM</span>
        </li>
        <li className="top_box">
          <img src={Ethcoin_icon}/>
          <span>ETHEREUM</span>
        </li>
        <li className="top_box">
          <img src={bitcoin_icon}/>
          <span>ETHEREUM</span>
        </li>
        <li className="top_box">
          <img src={Ethcoin_icon}/>
          <span>ETHEREUM</span>
        </li>
        <li className="top_box">
          <img src={bitcoin_icon}/>
          <span>ETHEREUM</span>
        </li>
        <li className="top_box">
          <img src={Ethcoin_icon}/>
          <span>ETHEREUM</span>
        </li>
        <li className="top_box">
          <img src={bitcoin_icon}/>
          <span>ETHEREUM</span>
        </li>
        <li className="top_box">
          <img src={Ethcoin_icon}/>
          <span>ETHEREUM</span>
        </li>
        <li className="top_box">
          <img src={bitcoin_icon}/>
          <span>ETHEREUM</span>
        </li>
        <li className="top_box">
          <img src={Ethcoin_icon}/>
          <span>ETHEREUM</span>
        </li>
        <li className="top_box">
          <img src={bitcoin_icon}/>
          <span>ETHEREUM</span>
        </li>
    </div>
  </div>
)

function Searchbar({data }) {

  const [showResults, setShowResults] = useState()
  const handleClick = () => setShowResults(true)

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    // this.handleFilter.css("border-radius","19px 0 0 12px");
    
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };


  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search_box">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search Token Name/ Address"
          value={wordEntered}
          onChange={handleFilter}
          onClick={handleClick}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      <div>
            { showResults ? <Results /> : null}
      </div>
      {filteredData.length != 0 && (
        <>
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <>
                <div className="dataItem" target="_blank">
                  <div>
                    <a className="filterData_coins">
                      <img src={bitcoin_icon} className=""/> 
                      <li>{value.title}</li>
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        </>
      )}
    </div>
  );
}

export default Searchbar