import Link from 'next/link';

const year3Subjects = [
  { href: '/year-3/course-work', title: 'Курсовая работа' },
  { href: '/year-3/business', title: 'Бизнес информатика' },
  { href: '/year-3/info-protection', title: 'Защита информации' },
  { href: '/year-3/graphics', title: 'Инженерная графика' },
  { href: '/year-3/it-in-languages', title: 'ИТ в иностранных языках' },
  { href: '/year-3/it-in-business-analytics', title: 'ИТ и системы бизнес-аналитики' },
  { href: '/year-3/compute-graphics', title: 'Компьютерная графика' },
  { href: '/year-3/e-learning-basics', title: 'Основы корпоративного электронного обучения' },
  { href: '/year-3/packages-of-programs', title: 'Пакеты прикладных программ' },
  { href: '/year-3/apply-inform-tech', title: 'Прикладные информационные технологии' },
  { href: '/year-3/pro-translate', title: 'Профессиональный перевод научных текстов' },
  { href: '/year-3/networks', title: 'Сетевые технологии' },
];
export default function Year3() {
  return (
    <>
      <h1 className={'text-center'}>Предметы 3 курса</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {year3Subjects.map(({ href, title }) => (
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
