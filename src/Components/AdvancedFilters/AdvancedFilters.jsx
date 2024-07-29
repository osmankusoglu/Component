import './AdvancedFilters.css';

const AdvancedFilters = () => {
  return (
    <div className="page">
      <img
        className="phone advanced-filters-image"
        src="./public/advanced/Phone.png"
        alt="advancedFilters"
      />
      <div>
        <img
          className="advanced-filters-second-image"
          src="./public/advanced/Group 41.png"
          alt="advancedFiltersSecond"
        />
      </div>
      <div>
        <img
          className="advanced-filters-third-image"
          src="./public/advanced/Group 42.png"
          alt="advancedFiltersThird"
        />
      </div>
      <div className="page-parag">
        <h2 id="subtitle" className="subtitle">
          ADVANCED FILTERS
        </h2>
        <h2 className="header">Unique Filters</h2>
        <p className="paragraph">
          Apply advanced filters and enhance quality with various custom made
          filters. Manually edit brightness and contrast by your own choice on
          the custom filters.
        </p>
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
};

export default AdvancedFilters;
