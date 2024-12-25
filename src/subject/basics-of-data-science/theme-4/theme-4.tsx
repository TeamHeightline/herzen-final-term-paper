import { Task1 } from '@/subject/basics-of-data-science/theme-4/task-1';
import { Task3 } from '@/subject/basics-of-data-science/theme-4/task-3/task-3';

export function Theme4() {
  return (
    <>
      <h2 className={'roboto-medium'}>
        3 семестр. <br /> Тема № 4 Числовые характеристики вариационных рядов
      </h2>

      <section id={'task-1'}>
        <Task1 />
      </section>
      <section id={'task-2'}>
        <Task3 />
      </section>
    </>
  );
}
