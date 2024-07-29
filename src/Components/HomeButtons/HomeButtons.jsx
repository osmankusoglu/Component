import { useState } from "react";
import "./HomeButtons.css";

const HomeButtons = ({ onClick }) => {
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
    onClick(buttonId);
  };

  return (
    <div id="btnsDiv">
      <button
        id="document"
        className={`document-btn ${
          activeButton === "document" ? "active" : ""
        }`}
        onClick={() => handleClick("document")}
      >
        <img
          src={
            activeButton === "document"
              ? "./public/document/blue.svg"
              : "./public/document/Icon.svg"
          }
          alt=""
          className="icon"
        />
        Document Scanner
      </button>
      <button
        id="signStamp"
        className={`sign-stamp-btn ${
          activeButton === "signStamp" ? "active" : ""
        }`}
        onClick={() => handleClick("signStamp")}
      >
        <img
          src={
            activeButton === "signStamp"
              ? "./public/sign/blue.svg"
              : "./public/sign/Icon.svg"
          }
          alt=""
          className="icon"
        />
        Sign & Stamp
      </button>
      <button
        id="batchScanning"
        className={`batch-scanning-btn ${
          activeButton === "batchScanning" ? "active" : ""
        }`}
        onClick={() => handleClick("batchScanning")}
      >
        <img
          src={
            activeButton === "batchScanning"
              ? "./public/batch/blue.svg"
              : "./public/batch/Icon.svg"
          }
          alt=""
          className="icon"
        />
        Batch Scanning
      </button>
      <button
        id="advancedFilters"
        className={`advanced-filters-btn ${
          activeButton === "advancedFilters" ? "active" : ""
        }`}
        onClick={() => handleClick("advancedFilters")}
      >
        <img
          src={
            activeButton === "advancedFilters"
              ? "./public/advanced/blue.svg"
              : "./public/advanced/Icon.svg"
          }
          alt=""
          className="icon"
        />
        Advanced Filters
      </button>
      <button
        id="exportShare"
        className={`export-share-btn ${
          activeButton === "exportShare" ? "active" : ""
        }`}
        onClick={() => handleClick("exportShare")}
      >
        <img
          src={
            activeButton === "exportShare"
              ? "./public/export/Time Circle.svg"
              : "./public/export/Icons.svg"
          }
          alt=""
          className="icon"
        />
        Export & Share
      </button>
    </div>
  );
};

export default HomeButtons;
