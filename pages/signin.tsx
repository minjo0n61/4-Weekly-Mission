import SigninHeader from '@/components/signin/SigininHeader';
import SigninForm from '@/components/signin/SigninForm';
import SocialLogin from '@/components/signin/SocialLogin';
import styles from '@/styles/Signin.module.css';

function Signin() {
  return (
    <div className={styles.signinContainer}>
      <SigninHeader />
      <SigninForm />
      <SocialLogin />
    </div>
  );
}

export default Signin;
