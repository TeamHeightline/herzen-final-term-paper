import Link from 'next/link';

const year1Subjects = [
  {
    href: 'algoses',
    title: 'Алгоритмы и решение задач',
  },
  {
    href: 'analytics-geometry',
    title: 'Аналитическая геометрия',
  },
  {
    href: 'bzd',
    title: 'Безопасность жизнедеятельности',
  },
  {
    href: 'bzd',
    title: 'Дискретные структуры и основы теории вероятности',
  },
  {
    href: 'bzd',
    title: 'Иностранный язык',
  },
  {
    href: 'bzd',
    title: 'Информатика',
  },
  {
    href: 'bzd',
    title: 'Информационные технологии',
  },
  {
    href: 'bzd',
    title: 'Информационные технологии в математике',
  },
  {
    href: 'bzd',
    title: 'Информационные технологии в физике',
  },
  {
    href: 'bzd',
    title: 'История',
  },
  {
    href: 'bzd',
    title: 'Курсовая работа',
  },
  {
    href: 'bzd',
    title: 'Линейная алгебра и теория матриц',
  },
  {
    href: 'bzd',
    title: 'Математический анализ',
  },
  {
    href: 'bzd',
    title: 'Основы компьютерной алгебры',
  },
  {
    href: 'bzd',
    title: 'Практика',
  },
  {
    href: 'bzd',
    title: 'Программирование',
  },
  {
    href: 'bzd',
    title: 'Философия',
  },
];
export default function Year2() {
  return (
    <>
      <h1 className={'text-center'}>Предметы 1 курса</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {year1Subjects.map(({ href, title }) => (
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
