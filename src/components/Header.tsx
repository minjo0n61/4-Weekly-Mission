import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@public/logo.svg';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { getUser } from '@/services/api';
import style from '@/styles/Header.module.css';
import useAsync from '@/hooks/useAsync';

interface UserInfo {
  name: string;
  email: string;
  image_source: string;
}

function Header() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    image_source: '',
  });
  const asyncGetUser = useAsync(getUser);
  const router = useRouter();

  const apiGetUser = useCallback(async () => {
    const { data } = await asyncGetUser();
    if (!data) return;
    const { name, email, image_source } = data[0];
    setUserInfo({ name, email, image_source });
  }, [asyncGetUser]);

  useEffect(() => {
    apiGetUser();
  }, [apiGetUser]);

  return (
    <nav
      id={style.header}
      style={router.pathname === '/folder' ? { position: 'static' } : {}}
    >
      <div className={style.headerBox}>
        <div className={style.headerLogoBox}>
          <Link href="/">
            <Image src={logoImg} alt="logo" width="133" height="24" />
          </Link>
        </div>
        <div className={style.loginBox}>
          {Object.keys(userInfo).length ? (
            <div className={style.userInfoBox}>
              <Image
                className={style.userImg}
                src={userInfo.image_source}
                alt="user-img"
                width="28"
                height="28"
              />
              <div className={style.userEmail}>{userInfo?.email}</div>
            </div>
          ) : (
            <Link href="/signin">
              <div className={style.loginBtn}>로그인</div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
