/* eslint-disable react/prop-types */
import { Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
export default function Searchbar(props) {

  const [searchData, setSearchData] = useState([]);
  let searchResults;
  const searchFieldChange = (e) => {
    searchResults = props.data.filter((data) => {
      return data.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(searchResults, "sökresultat");
    setSearchData(searchResults);
  };
  return (
    <div>
      <div className="items-center flex flex-row p-2 gap-x-1 lg:flex">
        <div className="relative flex w-full gap-2 md:w-max">
          <FontAwesomeIcon icon={faSearch} />
          <Input
            type="search"
            placeholder="Search"
            containerProps={{
              className: "min-w-[180px]",
            }}
            className="!border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={searchFieldChange}
          />
        </div>
      </div>
      <div id="a1" className="z-10">
        {searchData.map((x) => (
            <div className="flex flex-row items-center gap-x-9" key={x.prodNumber} >
              <img alt="Card image cap" src={x.img} className="w-10 h-16" />
              <div>
                <h5>{x.title}</h5>
              </div>
            </div>
  
          ))}
      </div>
    </div>
  );
}
