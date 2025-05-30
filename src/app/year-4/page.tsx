import Link from 'next/link';

export default function Year4() {
  const subjects = [
    { href: '/year-4', title: '4 курс' },
    { href: '/year-4/course-work', title: 'Курсовая работа' },
    { href: '/year-4/basics-of-data-science', title: 'Анализ данных и основы Data Science' },
    { href: '/year-4/it-recruitment', title: 'IT рекрутмент' },
    { href: '/year-4/practice-7-sem', title: 'Практика за 7 семестр' },
    { href: '/year-4/reserch-project', title: 'Научно-исследовательский проект' },
    { href: '/year-4/specification', title: 'Языки написания спецификаций' },
    { href: '/year-4/english', title: 'Английский' },
    { href: '/year-4/info-ingeneering', title: 'Инженерия знаний' },
    {
      href: '/year-4/engineering-calculations',
      title: 'Информационные технологии инженерных расчётов',
    },
    { href: '/year-4/personal', title: 'ИТ оценки персонала' },
    { href: '/year-4/libraries', title: 'Мировые инф. ресурсы и цифровые библиотеки' },
    { href: '/year-4/programming', title: 'Программирование' },
    { href: '/year-4/social-questions', title: 'Соц. и проф. вопросы информатики и ИТ' },
  ];
  return (
    <>
      <h1 className={'text-center'}>Предметы 4 курса</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {subjects.map(({ href, title }) => (
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
