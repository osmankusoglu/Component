import './SignStamp.css';

const SignStamp = () => {
  return (
    <div className="page">
      <img
        className="phone sign-stamp-image"
        src="./public/sign/Frame.png"
        alt="signStamp"
      />
      <div>
        <img
          className="sign-stamp-second-image"
          src="./public/sign/Group 48.png"
          alt="signStampSecond"
        />
      </div>
      <div>
        <img
          className="sign-stamp-third-image"
          src="./public/sign/Group 55.png"
          alt="signStampThird"
        />
      </div>
      <div className="page-parag">
        <h2 id="subtitle" className="subtitle">
          SIGN & STAMP
        </h2>
        <h2 className="header">One-Tap Focus</h2>
        <p className="paragraph">
          Draw, scan or import your signature and stamp with a simple touch.
          Sign and stamp any document with just a single tap!
        </p>
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
};

export default SignStamp;
