import "./header.scss";
// import { ReactComponent as BookIcon } from 'assets/icon/book.svg';
import { ReactComponent as ForeignIcon } from 'assets/icon/book.svg';

const Header = () => {
  return (
    <div className="header">
      <h1>EPİAŞ</h1>
      <div className="icon-area">
        <div className="icon-area-item">
          <span><ForeignIcon /></span>
          <span>Çalışma Alanı</span>
        </div>
        <div className="icon-area-item">
        <span><ForeignIcon /></span>
          <span>Merhaba Ayhan</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
