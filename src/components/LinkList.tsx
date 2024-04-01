import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import LinkCard from '@/components/LinkCard';
import Modal from './modal/Modal';
import style from '@/styles/LinkList.module.css';
import { FolderList } from '@/types/folderDataType.type';

interface LinkList {
  id: number;
  title: string;
  url: string;
  createdAt: string;
  created_at: string;
  imageSource: string;
  image_source: string;
}
interface LinkListProp {
  linkList: LinkList[];
  folderList?: FolderList[] | any;
}

let modalType = '';
let modalData = {};
let modalRoot: HTMLDivElement;
function LinkList({ linkList, folderList }: LinkListProp) {
  const [isModal, setIsModal] = useState(false);
  const enableFolderAddModal = (type: string, data = folderList) => {
    modalType = type;
    modalData = data;
    setIsModal(true);
  };

  useEffect(() => {
    modalRoot = document.getElementById('modal-root') as HTMLDivElement;
    setIsModal(false);
  }, []);

  return (
    <>
      {isModal &&
        createPortal(
          <Modal
            type={modalType}
            onClose={() => setIsModal(false)}
            data={modalData}
          />,
          modalRoot,
        )}
      <div id={style.linkList}>
        <div className={style.linkGridBox}>
          {linkList.length
            ? linkList.map((item, index) => {
                return (
                  <LinkCard
                    data={item}
                    key={item?.id}
                    openModal={enableFolderAddModal}
                  />
                );
              })
            : null}
        </div>
        {!linkList.length && (
          <div className={style.noLink}>저장된 링크가 없습니다</div>
        )}
      </div>
    </>
  );
}

export default LinkList;
