import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/SigninHeader.module.css';
import logoImg from '@public/logo.svg';

function SigninHeader() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.headerLogo}
          src={logoImg}
          alt="home"
          height={60.8}
        />
      </Link>
      <p className={styles.headerMessage}>
        회원이 아니신가요?
        <Link href="/signup" className={styles.headerSignupLink}>
          회원 가입하기
        </Link>
      </p>
    </header>
  );
}

export default SigninHeader;
