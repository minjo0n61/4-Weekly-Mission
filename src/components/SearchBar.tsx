import searchIcon from '@public/Search.png';
import style from '@/styles/SearchBar.module.css';
import Image from 'next/image';

function SearchBar() {
  return (
    <div id={style.searchBar}>
      <input
        type="text"
        id={style.searchLink}
        placeholder="링크를 검색해 보세요."
      />
      <Image
        width={15}
        height={15}
        className={style.searchIcon}
        src={searchIcon}
        alt="icon"
      />
    </div>
  );
}

export default SearchBar;
