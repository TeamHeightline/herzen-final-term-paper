import { BasicsOfDataScience } from '@/subject/basics-of-data-science';
import { Header } from '@/shared/header';

export default function Home() {
  return (
    <>
      <div className={'max-w-4xl overflow-x-auto pt-20'}>
        <h1 className={'text-center'}>Анализ данных и основы Data science</h1>
        <BasicsOfDataScience />
      </div>
    </>
  );
}
