import { useEffect, useRef } from 'react';
import style from './Loading.module.scss';
import { animate, createScope, Scope } from 'animejs';

export function Loading() {
  const container = useRef<HTMLDivElement>(null);
  const scope = useRef<Scope>(null);

  useEffect(() => {
    console.log(scope.current, container.current, 'start');

    if (container.current) {
      scope.current = createScope({ root: container }).add(() => {
        animate('.gear', {
          rotate: '360deg',
          duration: 3500,
          loop: true,
          ease: 'linear',
          autoplay: true,
        });

        animate('.cry-1', {
          y: '10px',
          duration: 2000,
          delay: 1000,
          loop: true,
          ease: 'linear',
          autoplay: true,
        });

        animate('.cry-2', {
          y: '10px',
          duration: 4000,
          delay: 1500,
          loop: true,
          ease: 'linear',
          autoplay: true,
        });

        animate('.cry-3', {
          y: '10px',
          duration: 6000,
          loop: true,
          ease: 'linear',
          autoplay: true,
        });

        animate('.cry-4', {
          y: '10px',
          duration: 3000,
          delay: 500,
          loop: true,
          ease: 'easeInOutSine',
          autoplay: true,
        });

        animate('.cry-5', {
          y: '10px',
          duration: 2000,
          loop: true,
          ease: 'linear',
          autoplay: true,
        });
      });
    }

    return () => {
      scope.current && scope.current.revert();
    };
  }, []);

  return (
    <div className={style.container} ref={container}>
      <svg
        className={style.svg}
        width="101"
        height="101"
        viewBox="0 0 101 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="gear"
          style={{ transformOrigin: 'center' }}
          d="M97.8438 57.9929C99.6253 57.8543 101 56.3655 101 54.5808V46.419C101 44.6312 99.6253 43.1455 97.8438 43.0037L87.0281 42.1592C86.3408 42.1067 85.749 41.6753 85.4839 41.0372L81.927 32.453C81.6619 31.818 81.7729 31.0906 82.2229 30.5697L89.2751 22.3214C90.4341 20.962 90.3601 18.9401 89.0932 17.6764L83.3232 11.9064C82.0595 10.6427 80.0344 10.5624 78.6782 11.7245L70.4299 18.7767C69.909 19.2237 69.1785 19.3378 68.5467 19.0758L59.9595 15.5157C59.3245 15.2538 58.8899 14.6527 58.8345 13.9715L57.9929 3.15881C57.8543 1.37474 56.3687 0 54.581 0H46.4192C44.6313 0 43.1457 1.37474 43.0071 3.15941L42.1626 13.9721C42.1101 14.6564 41.6755 15.2544 41.0405 15.5163L32.4534 19.0764C31.8184 19.3383 31.091 19.2243 30.5669 18.7773L22.3218 11.7251C20.9656 10.563 18.9436 10.6433 17.6768 11.907L11.9068 17.677C10.6431 18.9407 10.5659 20.9626 11.7249 22.322L18.7771 30.5703C19.221 31.0912 19.3381 31.8186 19.073 32.4536L15.5161 41.0378C15.2571 41.6757 14.6562 42.1073 13.9749 42.1598L3.15625 43.0039C1.37474 43.1457 0 44.6314 0 46.4192V54.5779C0 56.3657 1.37474 57.8543 3.15625 57.9931L13.9751 58.8347C14.6562 58.8901 15.2573 59.3247 15.5163 59.9597L19.0732 68.5439C19.3383 69.1789 19.2212 69.9094 18.7773 70.4303L11.7251 78.6786C10.5661 80.0348 10.6433 82.0568 11.907 83.3236L17.677 89.0936C18.9438 90.3573 20.9658 90.4345 22.322 89.2724L30.5671 82.2201C31.091 81.7763 31.8186 81.6591 32.4535 81.9242L41.0407 85.4811C41.6757 85.7462 42.1103 86.341 42.1628 87.0285L43.0073 97.8412C43.1459 99.6227 44.6315 101.001 46.4194 101.001H54.5812C56.369 101.001 57.8547 99.6229 57.9933 97.8412L58.8349 87.0285C58.8903 86.3412 59.3249 85.7462 59.9599 85.4811L68.547 81.9242C69.1789 81.6591 69.9125 81.7763 70.4303 82.2201L78.6786 89.2724C80.0348 90.4345 82.0599 90.3573 83.3236 89.0936L89.0936 83.3236C90.3605 82.0568 90.4345 80.0348 89.2755 78.6786L82.2233 70.4303C81.7794 69.9094 81.6622 69.1789 81.9274 68.5439L85.4843 59.9597C85.7494 59.3247 86.3412 58.8901 87.0285 58.8347L97.8438 57.9929ZM50.5 67.5666C45.9414 67.5666 41.6538 65.7912 38.4297 62.5703C35.2056 59.3432 33.4302 55.0588 33.4302 50.497C33.4302 45.9384 35.2056 41.6509 38.4297 38.4299C41.6538 35.2028 45.9412 33.4304 50.5 33.4304C55.0618 33.4304 59.3462 35.2026 62.5703 38.4299C65.7944 41.6509 67.5698 45.9384 67.5698 50.497C67.5698 55.0588 65.7944 59.3432 62.5703 62.5703C59.3462 65.7912 55.0618 67.5666 50.5 67.5666Z"
          fill="white"
        />
        <path
          d="M28.1939 52.8189L51 75.625L73.8062 52.8189C76.4914 50.1336 78 46.4915 78 42.6939V42.0516C78 34.4983 71.8767 28.375 64.3235 28.375C60.1685 28.375 56.2391 30.2636 53.6437 33.5079L51 36.8125L48.3563 33.5079C45.7609 30.2636 41.8314 28.375 37.6766 28.375C30.1233 28.375 24 34.4983 24 42.0516V42.6939C24 46.4915 25.5086 50.1336 28.1939 52.8189Z"
          fill="black"
        />
        <line
          className="cry-1"
          x1="31"
          y1="46"
          x2="31"
          y2="51"
          stroke="black"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          className="cry-2"
          x1="38"
          y1="53"
          x2="38"
          y2="58"
          stroke="black"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          className="cry-3"
          x1="46"
          y1="62"
          x2="46"
          y2="67"
          stroke="black"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          className="cry-4"
          x1="56"
          y1="59"
          x2="56"
          y2="64"
          stroke="black"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          className="cry-5"
          x1="65"
          y1="51"
          x2="65"
          y2="56"
          stroke="black"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          className="cry-6"
          x1="72"
          y1="42"
          x2="72"
          y2="47"
          stroke="black"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
