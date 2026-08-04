import { FooterWidget } from '@/widgets/FooterWidget/FooterWidget';
import { HeaderWidget } from '@/widgets/Header/HeaderWidget';
import { LoginWidget } from '@/widgets/LoginWidget/LoginWidget';
import { MainLayout } from '@/widgets/MainLayout/MainLayout';

export function LoginPage() {
  return (
    <>
      <HeaderWidget />
      <MainLayout>
        <LoginWidget />
      </MainLayout>
      <FooterWidget />
    </>
  );
}
