import { useState, useEffect, MouseEvent } from 'react';
import { dateParse, diffDate } from '@/utils/date';
import noImg from '@public/no-image-link.png';
import starDefault from '@public/star-Default.svg';
import kebabImg from '@public/kebab.svg';
import style from '@/styles/LinkCard.module.css';
import { FolderList } from '@/types/folderDataType.type';
import Link from 'next/link';
import Image from 'next/image';

interface DataProp {
  title: string;
  url: string;
  createdAt: string;
  created_at: string;
  imageSource: string;
  image_source: string;
}
interface LinkCard {
  data: DataProp;
  openModal: (type: string, data?: FolderList[] | DataProp) => void;
}

function LinkCard({ data, openModal }: LinkCard) {
  const [popOver, setPopOver] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    data?.imageSource || data?.image_source || noImg,
  );

  const handleKebabClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setPopOver((prevData) => !prevData);
  };

  const handleError = () => {
    setImgSrc(noImg);
  };

  useEffect(() => {
    setPopOver(false);
    document.addEventListener('click', () => {
      setPopOver(false);
    });
    return () => {
      document.removeEventListener('click', () => {
        setPopOver(false);
      });
    };
  }, []);
  return (
    <div className={style.linkGridItem}>
      <div className={style.itemImg}>
        <Image
          width={150}
          height={150}
          src={imgSrc}
          alt="link image"
          onError={handleError}
        />
      </div>
      <div className={style.itemInfo}>
        <div className={style.flexBox}>
          <div className={style.dateDiff}>
            {diffDate(dateParse(data?.createdAt || data?.created_at))}
          </div>
          <div className={style.kebabBox} onClick={handleKebabClick}>
            <Image width={20} height={20} src={kebabImg} alt="kebab" />
            {popOver && (
              <div className={style.popOver}>
                <ul>
                  <li onClick={() => openModal('LinkDelete', data)}>
                    <div>삭제하기</div>
                  </li>
                  <li onClick={() => openModal('LinkAdd')}>
                    <div>폴더에 추가</div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <Link href={data?.url} target="_blank" rel="noopener noreferrer">
          <div className={style.itemContext}>{data?.title}</div>
        </Link>
        <div className={style.itemDate}>
          {dateParse(data?.createdAt || data?.created_at)}
        </div>
      </div>
      <Image
        width={30}
        height={30}
        className={style.starBtn}
        src={starDefault}
        alt="star"
      />
    </div>
  );
}

export default LinkCard;
