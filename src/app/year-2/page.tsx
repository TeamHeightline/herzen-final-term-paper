import Link from 'next/link';

const year2Subjects = [
  {
    href: 'data-analysis',
    title: 'Анализ данных',
  },
  {
    href: 'db',
    title: 'Базы данных',
  },
  {
    href: 'web',
    title: 'Веб-проектирование',
  },
  {
    href: 'calc',
    title: 'Вычислительная математика',
  },
  {
    href: 'calc-technics',
    title: 'Вычислительная техника',
  },
  {
    href: 'diffurs',
    title: 'Интеграллы и дифференциальные уравнения',
  },
  {
    href: 'pc-practice',
    title: 'Компьютерный практикум',
  },
  {
    href: 'course-work',
    title: 'Курсовая работа',
  },
  {
    href: 'os',
    title: 'Операционные системы',
  },
  {
    href: 'practice',
    title: 'Практика',
  },
  {
    href: 'programming',
    title: 'Программирование',
  },
  {
    href: 'modeling',
    title: 'Технологии компьютерного моделирования',
  },
  {
    href: 'physics',
    title: 'Физика',
  },
  {
    href: 'physics-conduct',
    title: 'Физика полупроводников',
  },
];
export default function Year2() {
  return (
    <>
      <h1 className={'text-center'}>Предметы 2 курса</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {year2Subjects.map(({ href, title }) => (
          <Link
            key={href}
            href={href}
            className="group relative block rounded-none border-l-2 border-h1-color-from bg-aside-color p-5 no-underline shadow-md transition hover:-translate-y-1 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:ring-offset-2"
          >
            <h3 className="text-lg font-semibold text-[--c-text-primary] no-underline transition-colors group-hover:text-white group-focus:text-white">
              {title}
            </h3>
          </Link>
        ))}
      </div>
    </>
  );
}
