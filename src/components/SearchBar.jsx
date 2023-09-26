import { SearchTwoTone } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <Paper
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        sx={{
          borderRadius: 2,
          boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
          m: { sm: 7 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton type="submit" sx={{ pl: "50px", color: "grey" }}>
          <SearchTwoTone />
        </IconButton>
        <input
          placeholder="Search for a postcode or place name"
          value=""
          onChange={(e) => e.target.value}
        />
        <button className="search-btn">Search</button>
      </Paper>
      <span>{`Use your device's geolocation near you.`}</span>
    </div>
  );
};

export default SearchBar;
