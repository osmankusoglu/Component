import './ExportShare.css';

const ExportShare = () => {
  return (
    <div className="page">
      <img
        className="phone export-share-image"
        src="./public/export/Phone.png"
        alt="exportShare"
      />
      <div className="page-parag">
        <h2 id="subtitle" className="subtitle">
          EXPORT & SHARE
        </h2>
        <h2 className="header">All-Round Conversion</h2>
        <p className="paragraph">
          Export your scans as PDF, JPG, ZIP, TXT, and Word.
        </p>
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
};

export default ExportShare;
