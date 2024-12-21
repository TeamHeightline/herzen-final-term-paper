import { BasicsOfDataScience } from '@/subject/basics-of-data-science';

export default function Home() {
  return (
    <main className={'scroller flex w-screen flex-col items-center'}>
      <div className={'mt-5 max-w-3xl overflow-x-auto'}>
        <h1 className={'text-center'}>
          Веб-портфолио по дисциплине "Анализ данных и основы Data science"
        </h1>
        <div className={'flex justify-end'}>
          <p>Чирцов Тимофей Александрович</p>
        </div>
        <BasicsOfDataScience />
      </div>
    </main>
  );
}
