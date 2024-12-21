import { Carousel } from '@/shared/carousel';
import { DownloadButton } from '@/shared/download-button';

export function Task1() {
  return (
    <>
      <p>
        <strong>{'Часть 1. Задание 1.'}</strong>
      </p>
      <aside>
        Дан ряд распределения хозяйств по количеству рабочих на 100 га сельскохозяйственных угодий
        (количество хозяйств n = 60)
      </aside>

      <Carousel
        urlArray={[
          '/images/theme4_task1_p1.png',
          '/images/theme4_task1_p2.png',
          '/images/theme4_task1_p3.png',
        ]}
      />
      <DownloadButton url={''} />
    </>
  );
}
