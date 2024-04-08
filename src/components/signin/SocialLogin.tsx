import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/SocialLogin.module.css';
import googleImg from '@public/google.png';
import kakaoImg from '@public/kakao.png';

function SocialLogin() {
  return (
    <div className={styles.socialLoginContainer}>
      <div className={styles.socialLogin}>
        <span className={styles.socialMessage}>소셜 로그인</span>
        <div className={styles.socialLink}>
          <Link className={styles.googleImg} href="https://www.google.com">
            <Image src={googleImg} alt="google 로그인" height={30} />
          </Link>
          <Link
            className={styles.kakaoImg}
            href="https://www.kakaocorp.com/page/"
          >
            <Image src={kakaoImg} alt="kakao 로그인" height={70} />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SocialLogin;
