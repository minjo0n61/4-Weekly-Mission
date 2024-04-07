import { useEffect } from 'react';
import kakaoShare from '@public/kakaoShare.png';
import facebookShare from '@public/facebookShare.png';
import linkShare from '@public/linkShare.png';
import style from '@/styles/modal/ShareModal.module.css';
import { ModalDataProp } from './types/modal.type';
import Image from 'next/image';

interface ShareModalProp {
  //depth를 낮추려고 했으나 prop으로 내려주는 과정에서
  //data로 묶어서 보내는게 보기 편할 것 같아 변경하지 않았습니다.
  data: {
    name: string;
    id: number;
    url?: string;
    link?: {
      count: number;
    };
  };
}

function ShareModal({ data }: ShareModalProp) {
  const { name, id } = data;
  const { Kakao }: any = window;

  const shareUrl = `${window.location.origin}/shared/${id}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).catch((err) => {
      console.error('클립보드 복사에 실패했습니다.', err);
    });
  };
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.NEXT_PUBLIC_LINKBRARY_KAKAO_MODAL_KEY);
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'text',
      text: '세상에 모든 정보를 쉽게 저장하고 관리해보세요',
      link: {
        mobileWebUrl: 'http://localhost:3000/shared/114',
        webUrl: 'http://localhost:3000/shared/114',
      },
    });
  };

  const shareFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl,
    )}`;
    window.open(facebookShareUrl, '_blank');
  };
  return (
    <div className={style.modalContentFlex}>
      <div className={style.modalTitle}>링크 삭제</div>
      <p className={style.modalData}>{name}</p>
      <div className={style.shareBox}>
        <Image
          width={55}
          height={75}
          src={kakaoShare}
          alt="kakao"
          onClick={shareKakao}
        />
        <Image
          width={55}
          height={75}
          src={facebookShare}
          alt="facebook"
          onClick={shareFacebook}
        />
        <Image
          width={55}
          height={75}
          src={linkShare}
          alt="link"
          onClick={copyToClipboard}
        />
      </div>
    </div>
  );
}

export default ShareModal;
