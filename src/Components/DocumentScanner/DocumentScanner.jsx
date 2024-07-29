import './DocumentScanner.css';

const DocumentScanner = () => {
  return (
    <div className="page">
      <img
        className="phone document-image"
        src="./public/document/Phone.svg"
        alt="document"
      />
      <div className="page-parag">
        <h2 id="subtitle" className="subtitle">
          DOCUMENT SCANNER
        </h2>
        <h2 className="header">Scan with Ease</h2>
        <p className="paragraph">
          Scan any document instantly with your mobile device by just a few
          steps. Save as PDF, JPG, ZIP, TXT, and Word format.
        </p>
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
};

export default DocumentScanner;
