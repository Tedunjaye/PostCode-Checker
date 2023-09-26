import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import FilterListIcon from '@mui/icons-material/FilterList';

const PostCode = () => {
  return (
    <div className="post">
      <h1>Popular Postcodes</h1>
      <div className="container">
        <div className="top-bar">
          <div className="location">Location</div>
          <div className="postcode">postcode</div>
          <div className="filter">
            <FilterListIcon />
            <div>Filter</div>
          </div>
        </div>
        <div className="down-bar">
          <div className="birmingham">
            <span>Birmingham</span>
            <span>WA1 2WS</span>
          </div>
          <div className="manchester">
            <span>Manchester</span>
            <span>QWE FG3G</span>
          </div>
          <div className="leeds">
            <span>Leeds</span>
            <span>NJ8 I89</span>
          </div>
          <div className="bristol">
            <span>Bristol</span>
            <span>KLM 7Y6</span>
          </div>
          <div className="cornwall">
            <span>Cornwall</span>
            <span>SDR 7UT</span>
          </div>
          <div className="bristol">
            <span>Bristol</span>
            <span>KLM 7Y6</span>
          </div>
          <div className="page">
            <button>
              <KeyboardArrowLeftIcon />
            </button>
            <span className="pages"> Page 1 of 3</span>
            <button>
              <KeyboardArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCode;
