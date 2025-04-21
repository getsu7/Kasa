import './Banner.scss';

function Banner({ bannerImage, text }) {
  return (
    <div className="banner">
      <img className="banner__img" src={bannerImage} alt="Banner" />
      {text &&
        (<h1 className="banner__title">{text}</h1>)}
    </div>
  );
}

export default Banner;
