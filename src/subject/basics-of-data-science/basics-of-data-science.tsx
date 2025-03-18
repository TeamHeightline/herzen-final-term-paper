import { ContentList } from '@/shared/content-list';

interface Section {
  name: string;
  anchor: string;
}

const SECTIONS: Section[] = [
  {
    name: 'Лабораторная работа №1',
    anchor: 'lr1',
  },
  {
    name: 'Лабораторная работа №2',
    anchor: 'lr2',
  },
  {
    name: 'Лабораторная работа №3',
    anchor: 'lr3',
  },
  {
    name: 'Лабораторная работа №4',
    anchor: 'lr4',
  },
  {
    name: 'Лабораторная работа №5',
    anchor: 'lr5',
  },
  {
    name: 'Лабораторная работа №6',
    anchor: 'lr6',
  },
  {
    name: 'Лабораторная работа №7',
    anchor: 'lr7',
  },
];

export function BasicsOfDataScience() {
  return (
    <>
      <ContentList sections={SECTIONS} />

      <h2 id={'lr1'}>Лабораторная работа №1</h2>
      <aside>
        Цель: реализовать нахождения погрешностей средством электронных таблиц и программного кода
      </aside>
      <embed
        className={'mt-4'}
        src="/herzen-final-term-paper/files/data-analysis-and-ds/LR1.pdf"
        width="100%"
        height="700px"
      />
      <h2 id={'lr1'}>Лабораторная работа №1 (iframe)</h2>
      <iframe
        src="/herzen-final-term-paper/files/data-analysis-and-ds/LR1.pdf"
        width="800"
        height="600"
      />

      <h2 id={'lr2'}>Лабораторная работа №2</h2>
      <aside>
        Цель: построить дискретные и интервальные вариационные ряды и их графические изображения
      </aside>
      <embed
        className={'mt-4'}
        src="/herzen-final-term-paper/files/data-analysis-and-ds/LR2.pdf"
        width="100%"
        height="700px"
      />
      <h2 id={'lr3'}>Лабораторная работа №3</h2>
      <p>
        <strong id={'lr3p1'}>Часть 1</strong>
      </p>
      <aside>Цель: вычислить математические характеристики вариационного ряда</aside>

      <embed
        className={'mt-4'}
        src="/herzen-final-term-paper/files/data-analysis-and-ds/LR3.pdf"
        width="100%"
        height="700px"
      />
      <p>
        <strong id={'lr3p2'}>Часть 2</strong>
      </p>
      <aside>
        Цель: построить дискретные и интервальные вариационные ряды и их графические изображения
      </aside>
      <embed
        className={'mt-4'}
        src="/herzen-final-term-paper/files/data-analysis-and-ds/LR3P2.pdf"
        width="100%"
        height="700px"
      />
      <h2 id={'lr4'}>Лабораторная работа №4</h2>
      <aside>Цель: проверить данные на соответствие нормальному закону распределения</aside>
      <embed
        className={'mt-4'}
        src="/herzen-final-term-paper/files/data-analysis-and-ds/LR4.pdf"
        width="100%"
        height="700px"
      />
      <h2 id={'lr5'}>Лабораторная работа №5</h2>
      <aside>
        Цель: построить эмпирическую функцию распределения для дискретного и интервального
        вариационного ряда.
      </aside>
      <embed
        className={'mt-4'}
        src="/herzen-final-term-paper/files/data-analysis-and-ds/LR5.pdf"
        width="100%"
        height="700px"
      />
      <h2 id={'lr6'}>Лабораторная работа №6</h2>
      <p>
        <strong id={'lr6p1'}>Часть 1</strong>
      </p>
      <aside>
        Цель работы: проверить статистическую гипотезу о нормальном законе распределения данных,
        приведенных в решаемой задаче.
      </aside>

      <embed
        className={'mt-4'}
        src="/herzen-final-term-paper/files/data-analysis-and-ds/LR6P1.pdf"
        width="100%"
        height="700px"
      />
      <p>
        <strong id={'lr6p2'}>Часть 2</strong>
      </p>
      <aside>
        Цель работы: проверить статистическую гипотезу о нормальном законе распределения данных,
        приведенных в решаемой задаче.
      </aside>
      <embed
        className={'mt-4'}
        src="/herzen-final-term-paper/files/data-analysis-and-ds/LR6P2.pdf"
        width="100%"
        height="700px"
      />
      <p>
        <strong id={'lr6p3'}>Часть 3</strong>
      </p>
      <aside>
        Цель работы: проверить статистическую гипотезу о нормальном законе распределения данных,
        приведенных в решаемой задаче.
      </aside>
      <embed
        className={'mt-4'}
        src="/herzen-final-term-paper/files/data-analysis-and-ds/LR6P3.pdf"
        width="100%"
        height="700px"
      />
      <h2 id={'lr7'}>Лабораторная работа №7</h2>
      <p>
        <strong id={'lr7p1'}>Часть 1</strong>
      </p>
      <aside>
        Цель работы: провести вычисления коэффициентов корреляции, ранговой корреляции и линейной
        корреляции.
      </aside>
      <embed
        className={'mt-4'}
        src="/herzen-final-term-paper/files/data-analysis-and-ds/LR7P1.pdf"
        width="100%"
        height="700px"
      />
      <p>
        <strong id={'lr7p2'}>Часть 2</strong>
      </p>
      <aside>
        Цель работы: провести вычисления коэффициентов корреляции, ранговой корреляции и линейной
        корреляции.
      </aside>
      <embed
        className={'mt-4'}
        src="/herzen-final-term-paper/files/data-analysis-and-ds/LR7P2.pdf"
        width="100%"
        height="700px"
      />
      <p>
        <strong id={'lr7p3'}>Часть 3</strong>
      </p>
      <aside>
        Цель работы: провести вычисления коэффициентов корреляции, ранговой корреляции и линейной
        корреляции.
      </aside>
      <embed
        className={'mt-4'}
        src="/herzen-final-term-paper/files/data-analysis-and-ds/LR7P3.pdf"
        width="100%"
        height="700px"
      />
    </>
  );
}
