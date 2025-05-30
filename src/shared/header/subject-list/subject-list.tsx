import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';

export function SubjectList() {
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
    { href: '/year-3', title: '3 курс' },
    { href: '/year-3/business', title: 'Бизнес информатика' },
  ];

  return (
    <>
      <Menu as="div" className={'relative'}>
        <MenuButton
          as="a"
          href="#"
          className="text-body w-max cursor-pointer border-b-[3px] border-transparent font-medium leading-relaxed text-[--c-text-primary] no-underline transition-[border] hover:border-sky-500 focus:outline-none"
        >
          Предметы
        </MenuButton>

        <MenuItems className="absolute left-0 mt-2 w-72 origin-top-left rounded-lg border-none bg-gray-700 py-2 focus:outline-none">
          {subjects.map((item) => {
            return (
              <MenuItem
                key={item.href}
                as={Link}
                href={item.href}
                className={'block px-4 py-2 no-underline hover:bg-gray-600 hover:text-white'}
              >
                {item.title}
              </MenuItem>
            );
          })}
        </MenuItems>
      </Menu>
    </>
  );
}
