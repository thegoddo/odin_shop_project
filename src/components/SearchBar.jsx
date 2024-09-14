import { useEffect, useState } from "react";
import useApi from "../utils/useApi";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const { shopItems } = useApi();

  useEffect(() => {
    const results = shopItems.filter((item) => {
      item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSuggestions(results);
  }, [searchTerm, shopItems]);

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.title);
    setSuggestions([]);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <ul className="suggestions">
        {suggestions.map((suggestion) => (
          <li
            key={suggestion.id}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
