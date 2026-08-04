import { useNavigate } from 'react-router';
import Arrow from '@/shared/assets/icons/Arrow.svg?react';
import Users from '@/shared/assets/icons/Users.svg?react';
import { CustomButton } from '@/shared/ui/CustomButton/CustomButton';
import style from './MainWidgetWelcome.module.scss';
import { CustomSection } from '../../../shared/ui/CustomSection/CustomSection';
import { MainWidgetExample } from '../ui/MainWidgetExample/MainWidgetExample';

export function MainWidgetWelcome() {
  const navigate = useNavigate();

  const handleSotories = () => {
    navigate('/stories');
  };

  const handleSignUp = () => {
    navigate('/registry');
  };

  return (
    <CustomSection
      classNameContent={style.content}
      display="grid"
      variant="primary"
    >
      <div className={style.welcome}>
        <p className={style.chip}>
          <Users className={style.icon} />
          Text-based roleplay · 14+
        </p>
        <h1 className={style.title}>
          Stories written
          <br />
          <span className={style.titleFocus}>two lines at a time</span>
        </h1>
        <p className={style.subtitle}>
          Inkpact is a space for collaborative fiction writers. Find a story,
          match with a partner, and build something neither of you could write
          alone — message by message.
        </p>
        <div className={style.actions}>
          <CustomButton
            padding="10x20"
            variant="primary"
            onClick={handleSotories}
          >
            Browse stories
            <Arrow className={style.arrow} />
          </CustomButton>
          <CustomButton
            padding="10x20"
            variant="secondary"
            onClick={handleSignUp}
          >
            Create an account
          </CustomButton>
        </div>
      </div>
      <MainWidgetExample />
    </CustomSection>
  );
}
