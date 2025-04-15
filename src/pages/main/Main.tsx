import { ColoredText } from '@/components/ui/components/ColoredText/ColoredText';
import { ReactElement } from 'react';
// import style from './Main.module.scss';

export function Main(): ReactElement {
  // useEffect(() => {
  //   fetch('https://fonts.googleapis.com/css2?family=Shafarik&display=swap', {
  //     method: 'GET',
  //     mode: 'no-cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //   })
  //     .then((res) => {
  //       return res.ok ? res.json() : res;
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err, 'error'));
  // }, []);

  return (
    <main>
      <ColoredText Shell="h1" text="Welcome to the Secret Shop" />
    </main>
  );
}
