import { NavLink } from 'react-router';
import { Chip } from '@/shared/ui/Chip/Chip';
import { CustomContainer } from '@/shared/ui/CustomContainer/CustomContainer';
import { CustomLabel } from '@/shared/ui/CustomLabel/CustomLabel';
import { EmptyText } from '@/shared/ui/EmptyText/EmptyText';
import style from './ProfileStyle.module.scss';

type TProfileStyleProps = {
  styles: string[];
};

export function ProfileStyle({ styles }: TProfileStyleProps) {
  return (
    <CustomContainer>
      <CustomLabel label="Writing style" />
      <div className={style.list}>
        {styles.length === 0 && <EmptyText text="There is nothing" />}
        {styles.map((i) => (
          <Chip
            key={i}
            to={`/stories?tags=${i}`}
            label={i}
            component={NavLink}
          />
        ))}
      </div>
    </CustomContainer>
  );
}
