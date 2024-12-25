import { Theme4 } from '@/subject/basics-of-data-science/theme-4/theme-4';
import { ContentList } from '@/shared/content-list';

interface Section {
  name: string;
  anchor: string;
}

const SECTIONS: Section[] = [
  {
    name: 'Задание 1',
    anchor: 'task-1',
  },
  {
    name: 'Задание 2',
    anchor: 'task-2',
  },
];

export function BasicsOfDataScience() {
  return (
    <>
      <ContentList sections={SECTIONS} />
      <Theme4 />
    </>
  );
}
