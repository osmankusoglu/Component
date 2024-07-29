import './BatchScanning.css';

const BatchScanning = () => {
  return (
    <div className="page">
      <img
        className="phone batch-scanning-image"
        src="./public/batch/Frame.png"
        alt="batchScanning"
      />
      <div>
        <img
          className="batch-scanning-second-image"
          src="./public/batch/File Preview.png"
          alt="batchScanningSecond"
        />
      </div>
      <div>
        <img
          className="batch-scanning-third-image"
          src="./public/batch/File Preview (1).png"
          alt="batchScanningThird"
        />
      </div>
      <div>
        <img
          className="batch-scanning-fourth-image"
          src="./public/batch/File Preview (2).png"
          alt="batchScanningThird"
        />
      </div>
      <div className="page-parag">
        <h2 id="subtitle" className="subtitle">
          BATCH SCANNING
        </h2>
        <h2 className="header">Multiple Page Scan</h2>
        <p className="paragraph">
          Scan multiple pages or documents in multiple-scanning mode. Batch all
          scans as a single document.
        </p>
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
};

export default BatchScanning;
