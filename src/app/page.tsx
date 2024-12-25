import { BasicsOfDataScience } from '@/subject/basics-of-data-science';
import { Header } from '@/shared/header';

export default function Home() {
  return (
    <main className={'scroller flex w-screen flex-col items-center'}>
      <Header />

      <div className={'max-w-4xl overflow-x-auto pt-20'}>
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
