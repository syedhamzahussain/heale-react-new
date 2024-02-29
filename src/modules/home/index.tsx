import { useStyletron } from 'styletron-react';
import { useNavigate } from 'react-router-dom';
import { Button, SHAPE, KIND } from 'baseui/button';
import Logo from 'modules/shared/components/logo';
import landingBackgroundImage from 'assets/images/landing.png';

const Home = () => {
  const [css] = useStyletron();
  const navigate = useNavigate();

  const navigateToRoute = (route: string) => {
    navigate(route);
  };

  return (
    <div
      className={css({
        backgroundImage: 'url(' + landingBackgroundImage + ')',
        width: '100vw',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <div
        className={css({
          display: 'flex',
          padding: '24px',
          justifyContent: 'space-between',
        })}
      >
        <div>
          <Logo width={120} height={50} clicked={() => {}} />
        </div>
        <div
          className={css({
            display: 'flex',
          })}
        >
          <div className={css({ paddingRight: '10px' })}>
            <Button
              kind={KIND.secondary}
              shape={SHAPE.pill}
              onClick={() => navigateToRoute('auth/signIn')}
            >
              Sign in
            </Button>
          </div>
          <div className={css({ paddingLeft: '10px' })}>
            <Button
              shape={SHAPE.pill}
              onClick={() => navigateToRoute('auth/signUp')}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
