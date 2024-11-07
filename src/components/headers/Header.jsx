import { useLocation } from "react-router-dom";
import BottomHeader from "./BottomHeader";
import SearchHeader from "./SearchHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  const location = useLocation();

  // check if the current path is '/Products' to display the search bar
  const showSearchBar = location.pathname === "/Products";

  return (
    <header style={{ backgroundColor: "var(--primary-color)" }}>
      <nav>
        <TopHeader />
        {showSearchBar && <SearchHeader />}
        {/* only display search bar on the Products page */}
        <BottomHeader />
      </nav>
    </header>
  );
};

export default Header;
