import { MouseEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './modal/Modal';
import changeNameImg from '@public/folderChangeName.svg';
import deleteImg from '@public/folderDelete.svg';
import sharedImg from '@public/folderShared.svg';
import { classNames, cond } from '@/utils/style';
import style from '@/styles/FolderList.module.css';
import { FolderDataType } from '@/types/folderDataType.type';
import Image from 'next/image';

interface FolderListProp {
  folderList: FolderDataType[];
  onClick: (folderId: string) => void;
}

const INIT_ACTIVE_FOLDER = {
  name: '전체',
  id: '',
};
let modalType = '';
let modalData = {};
function FolderList({ folderList, onClick }: FolderListProp) {
  const [activeFolderInfo, setActiveFolderInfo] =
    useState<FolderDataType>(INIT_ACTIVE_FOLDER);
  const [isModal, setIsModal] = useState(false);
  const handleFolderClick =
    (folder: FolderDataType) => (e: MouseEvent<HTMLButtonElement>) => {
      onClick(e.currentTarget.name);
      setActiveFolderInfo({ ...folder });
    };
  const enableFolderAddModal = (type: string) => {
    modalType = type;
    modalData = { ...activeFolderInfo };
    setIsModal(true);
  };
  useEffect(() => {
    setIsModal(false);
  }, []);

  const modalRoot = document.getElementById('modal-root') as HTMLDivElement;

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
      <div className={style.folderList}>
        <div className={style.flexBox}>
          <div className={classNames(style.flexBox, style.buttonWrap)}>
            <button
              className={classNames(
                style.folderBtn,
                cond(activeFolderInfo.id === '', style.active),
              )}
              onClick={() => {
                setActiveFolderInfo(INIT_ACTIVE_FOLDER);
                onClick('');
              }}
            >
              전체
            </button>
            {folderList.map((item, idx) => {
              return (
                <button
                  key={item.id}
                  name={item.id.toString()}
                  className={classNames(
                    style.folderBtn,
                    cond(activeFolderInfo.id === item.id, style.active),
                  )}
                  onClick={handleFolderClick(item)} // (e)=>handleFolderClick(item)(e) 를 축약한것
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          <div>
            <button
              className={style.addFolderBtn}
              onClick={() => enableFolderAddModal('FolderAdd')}
            >
              폴더 추가 +
            </button>
          </div>
        </div>
        <div className={style.flexBox}>
          <div>
            <span className={style.folderName}>{activeFolderInfo.name}</span>
          </div>
          <div className={style.flexBox}>
            {activeFolderInfo.id && (
              <>
                <Image
                  width={50}
                  height={50}
                  src={sharedImg}
                  alt="shared"
                  onClick={() => enableFolderAddModal('Share')}
                />
                <Image
                  width={75}
                  height={50}
                  src={changeNameImg}
                  alt="change"
                  onClick={() => enableFolderAddModal('Edit')}
                />
                <Image
                  width={50}
                  height={50}
                  src={deleteImg}
                  alt="delete"
                  onClick={() => enableFolderAddModal('FolderDelete')}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FolderList;
