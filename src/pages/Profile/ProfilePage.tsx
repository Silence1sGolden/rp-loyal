import { HeaderWidget } from '@/widgets/Header/HeaderWidget';
import { MainLayout } from '@/widgets/MainLayout/MainLayout';
import { ProfileWidget } from '@/widgets/Profile/ProfileWidget';

export function ProfilePage() {
  return (
    <>
      <HeaderWidget />
      <MainLayout>
        <ProfileWidget />
      </MainLayout>
    </>
  );
}
