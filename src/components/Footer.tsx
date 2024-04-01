import facebookImg from '@public/sns-facebook.svg';
import twitterImg from '@public/sns-twitter.svg';
import youtubeImg from '@public/sns-youtube.svg';
import instargramImg from '@public/sns-instargram.svg';
import style from '@/styles/Footer.module.css';
import Image from 'next/image';

function Footer() {
  return (
    <footer>
      <div id={style.footer}>
        <div className={style.footerBox}>
          <div className={`${style.copyright}`}>©codeit - 2023</div>
          <div className={`${style.privacy}`}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/faq">FAQ</a>
          </div>
          <div>
            <ul className={`${style.sns}`}>
              <li>
                <a href="https://www.facebook.com/">
                  <Image
                    width={20}
                    height={20}
                    src={facebookImg}
                    alt="facebook"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <Image
                    width={20}
                    height={20}
                    src={twitterImg}
                    alt="twitter"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <Image
                    width={20}
                    height={20}
                    src={youtubeImg}
                    alt="youtube"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <Image
                    width={20}
                    height={20}
                    src={instargramImg}
                    alt="instargram"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
