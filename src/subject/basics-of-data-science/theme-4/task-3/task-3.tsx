import { Carousel } from '@/shared/carousel';
import { DownloadButton } from '@/shared/download-button';

export function Task3() {
  return (
    <>
      <p>
        <strong>{'Часть 1. Задание 3.'}</strong>
      </p>
      <aside>
        Дано распределение результатов ЕГЭ среди зачисленных на первый курс направления "Информатика
        и вычислительная техника" САФУ им.Ломоносоова в 2022 году. Вычислить интервальный
        вариационный ряд и отобразить его графически.
      </aside>

      <Carousel
        urlArray={[
          '/images/theme4_task3_p1.png',
          '/images/theme4_task3_p2.png',
          '/images/theme4_task3_p3.png',
          '/images/theme4_task3_p4.png',
        ]}
      />
      <DownloadButton url={''} />
    </>
  );
}
