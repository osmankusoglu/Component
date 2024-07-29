import { useEffect, useState } from 'react';
import '../HomeButtons/HomeButtons.css';
import './HomeContent.css';

const HomeContent = ({ content }) => {
  const [prevContent, setPrevContent] = useState(content);
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    setPrevContent(content);
    setFadeClass('fade-out');

    const timer = setTimeout(() => {
      setPrevContent(content);
      setFadeClass('fade-in');
    }, 350);

    return () => clearTimeout(timer);
  }, [content]);

  const contentData = {
    document: {
      subTitle: 'DOCUMENT SCANNER',
      header: 'Scan with Ease',
      paragraph:
        'Scan any document instantly with your mobile device by just a few steps. Save as PDF, JPG, ZIP, TXT, and Word format.',
      imgSrc: './public/document/Phone.svg',
      imgClass: 'document-image',
    },
    signStamp: {
      subTitle: 'SIGN & STAMP',
      header: 'One-Tap Focus',
      paragraph:
        'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
      imgSrc: './public/sign/Frame.png',
      seconsecondImgSrc: './public/sign/Group 48.png',
      thirdImgSrc: './public/sign/Group 55.png',
      imgClass: 'sign-stamp-image',
      secondImgClass: 'second-sign-stamp-image',
      thirdImgClass: 'third-sign-stamp-image',
    },
    batchScanning: {
      subTitle: 'BATCH SCANNING',
      header: 'Multiple Page Scan',
      paragraph:
        'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
      imgSrc: './public/batch/Frame.png',
      seconsecondImgSrc: './public/batch/File Preview.png',
      thirdImgSrc: './public/batch/File Preview (1).png',
      fourdImgSrc: './public/batch/File Preview (2).png',
      imgClass: 'batch-scanning-image',
      secondImgClass: 'batch-scanning-second-image',
      thirdImgClass: 'batch-scanning-third-image',
      fourdImgClass: 'batch-scanning-fourd-image',
    },
    advancedFilters: {
      subTitle: 'ADVANCED FILTERS',
      header: 'Unique Filters',
      paragraph:
        'Apply advanced filters and enhance quality with various custom-made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
      imgSrc: './public/advanced/Frame.png',
      seconsecondImgSrc: './public/advanced/Group 42.png',
      thirdImgSrc: './public/advanced/Group 41.png',
      imgClass: 'advanced-filters-image',
      secondImgClass: 'second-advanced-filters-image',
      thirdImgClass: 'third-advanced-filters-image',
    },
    exportShare: {
      subTitle: 'EXPORT & SHARE',
      header: 'All-Round Conversion',
      paragraph: 'Export your scans as PDF, JPG, ZIP, TXT, and Word.',
      imgSrc: './public/export/Frame.png',
      seconsecondImgSrc: './public/export/Vector.png',
      thirdImgSrc: './public/export/pdf.png',
      fourdImgSrc: './public/export/Group.png',
      fifthImgSrc: './public/export/txt.png',
      imgClass: 'export-share-image',
      secondImgClass: 'export-share-second-image',
      thirdImgClass: 'export-share-third-image',
      fourdImgClass: 'export-share-fourd-image',
      fifthImgClass: 'export-share-fifth-image',
    },
  };

  const currentContent = contentData[content] || contentData.document;

  return (
    <div className={`page ${content}`}>
      <div className="page-phone">
        <img
          className={`phone ${currentContent.imgClass} ${
            content !== prevContent ? 'rise-up' : ''
          }`}
          src={currentContent.imgSrc}
          alt={content}
        />
      </div>
      {content === 'signStamp' && (
        <>
          <div>
            <img
              className={`sign-stamp-second-image ${currentContent.secondImgClass}`}
              src={currentContent.seconsecondImgSrc}
              alt="signStampSecond"
            />
          </div>
          <div>
            <img
              className={`sign-stamp-third-image ${currentContent.thirdImgClass}`}
              src={currentContent.thirdImgSrc}
              alt="signStampThird"
            />
          </div>
        </>
      )}
      {content === 'batchScanning' && (
        <>
          <div>
            <img
              className={`batch-scanning-second-image ${currentContent.secondImgClass}`}
              src={currentContent.seconsecondImgSrc}
              alt="batchScanningSecond"
            />
          </div>
          <div>
            <img
              className={`batch-scanning-third-image ${currentContent.thirdImgClass}`}
              src={currentContent.thirdImgSrc}
              alt="batchScanningThird"
            />
          </div>
          <div>
            <img
              className={`batch-scanning-fourd-image ${currentContent.fourdImgClass}`}
              src={currentContent.fourdImgSrc}
              alt="batchScanningFourth"
            />
          </div>
        </>
      )}
      {content === 'advancedFilters' && (
        <>
          <div>
            <img
              className={`advanced-filters-second-image ${currentContent.secondImgClass}`}
              src={currentContent.seconsecondImgSrc}
              alt="advancedFiltersSecond"
            />
          </div>
          <div>
            <img
              className={`advanced-filters-third-image ${currentContent.thirdImgClass}`}
              src={currentContent.thirdImgSrc}
              alt="advancedFiltersThird"
            />
          </div>
        </>
      )}
      {content === 'exportShare' && (
        <>
          <div>
            <img
              className={`export-share-second-image ${currentContent.secondImgClass}`}
              src={currentContent.seconsecondImgSrc}
              alt="exportShareSecond"
            />
          </div>
          <div>
            <img
              className={`export-share-third-image ${currentContent.thirdImgClass}`}
              src={currentContent.thirdImgSrc}
              alt="exportShareThird"
            />
          </div>
          <div>
            <img
              className={`export-share-fourd-image ${currentContent.fourdImgClass}`}
              src={currentContent.fourdImgSrc}
              alt="exportShareFourth"
            />
          </div>
          <div>
            <img
              className={`export-share-fifth-image ${currentContent.fifthImgClass}`}
              src={currentContent.fifthImgSrc}
              alt="exportShareFifth"
            />
          </div>
        </>
      )}
      <div className={`page-parag ${fadeClass}`}>
        <h2 id="subtitle" className="subtitle">
          {currentContent.subTitle}
        </h2>
        <h2 className="header">{currentContent.header}</h2>
        <p className="paragraph">{currentContent.paragraph}</p>
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
};

export default HomeContent;
