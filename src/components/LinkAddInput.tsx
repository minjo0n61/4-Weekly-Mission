import style from '@/styles/LinkAddInput.module.css';
import linkIcon from '@public/linkIcon.svg';
import Image from 'next/image';

function FolderInfo() {
  return (
    <div id={style.linkAddInputWrap}>
      <div className={style.linkAddInputBox}>
        <div className={style.inputBox}>
          <input
            className={style.linkAddInput}
            type="text"
            placeholder="링크를 추가해 보세요."
          />
          <Image
            width={20}
            height={20}
            className={style.linkIcon}
            src={linkIcon}
            alt="linkIcon"
          />
          <button className={style.linkAddBtn}>추가하기</button>
        </div>
      </div>
    </div>
  );
}

export default FolderInfo;
