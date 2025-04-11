import './Banner.scss';
import bannerImage from '../../../assets/images/banner.png';

function Banner() {
  return (
    <div className="banner">
      <img className="banner__img" src={bannerImage} alt="Banner" />
      <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
