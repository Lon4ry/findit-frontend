import LoginWithButton from '@/ui/components/login-with-button';
import { loginUrls } from '@/ui/screens/auth/login/login-urls';
import styles from './login-with.module.scss';

const LoginWith = ({ push }: { push: (...args: any[]) => void }) => {
  return (
    <div className={styles.loginWith}>
      <h1>Войти с помощью</h1>
      <ul>
        {loginUrls.slice(2).map((url) => (
          <li key={url.id}>
            <LoginWithButton
              src={url.img}
              alt={url.id}
              action={() => push(url.href)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LoginWith;
