import { Footer } from '@/widgets/Footer/Footer';
import { HeaderWidget } from '@/widgets/Header/HeaderWidget';
import { MainLayout } from '@/widgets/MainLayout/MainLayout';
import { MainWidget } from '@/widgets/MainWidget/MainWidget';

export default function MainPage() {
  return (
    <>
      <HeaderWidget />
      <MainLayout>
        <MainWidget />
      </MainLayout>
      <Footer />
    </>
  );
}
