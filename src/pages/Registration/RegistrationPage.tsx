import { HeaderWidget } from '@/widgets/Header/HeaderWidget';
import { MainLayout } from '@/widgets/MainLayout/MainLayout';
import { RegistrationWidget } from '@/widgets/RegistrationWidget/RegistrationWidget';

export function RegistrationPage() {
  return (
    <>
      <HeaderWidget />
      <MainLayout>
        <RegistrationWidget />
      </MainLayout>
    </>
  );
}
