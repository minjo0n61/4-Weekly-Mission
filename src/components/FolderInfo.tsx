import style from '@/styles/FolderInfo.module.css';

interface FolderInfoProp {
  name: string;
  owner?: {
    name: string;
    profileImageSource: string;
  };
}

/**
 * 사용자 폴더의 정보를 나타내는 컴포넌트
 * 폴더의 name, owner, profileImage를 나타냄
 *
 * @component
 * @param {FolderInfoProp} props - props에 적용되는 interface 타입
 * @param {string} props.name - 폴더 name
 * @param {Object} [props.owner] - 폴더 owner 정보
 * @param {string} props.owner.name - 폴더 owner name
 * @param {string} props.owner.profileImageSource - 폴더 owner profile image
 */

function FolderInfo({ name, owner }: FolderInfoProp) {
  return (
    <div id={style.folderInfo}>
      <div className={style.infoBox}>
        <div className={style.profileImg}>
          <img src={owner?.profileImageSource} alt="profile" />
        </div>
        <div className={style.userName}>
          <div>{owner?.name}</div>
        </div>
        <div className={style.folderName}>
          <div>{name}</div>
        </div>
      </div>
    </div>
  );
}

export default FolderInfo;
