import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';

export function SubjectList() {
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
          <MenuItem
            as={Link}
            href="/year-4"
            className={'block px-4 py-2 no-underline hover:bg-gray-600 hover:text-white'}
          >
            4 семестр
          </MenuItem>
          <MenuItem
            as={Link}
            href="/year-4/basics-of-data-science"
            className={'block px-4 py-2 no-underline hover:bg-gray-600 hover:text-white'}
          >
            Анализ данных и основы Data Science
          </MenuItem>
          <MenuItem
            as={Link}
            href="/year-4/it-recruitment"
            className={'block px-4 py-2 no-underline hover:bg-gray-600 hover:text-white'}
          >
            IT рекрутмент
          </MenuItem>
          <MenuItem
            as={Link}
            href="/year-4/practice-7-sem"
            className={'block px-4 py-2 no-underline hover:bg-gray-600 hover:text-white'}
          >
            Практика за 7 семестр
          </MenuItem>
          <MenuItem
            as={Link}
            href="/year-4/reserch-project"
            className={'block px-4 py-2 no-underline hover:bg-gray-600 hover:text-white'}
          >
            Научно-исследовательский проект
          </MenuItem>
          <MenuItem
            as={Link}
            href="/year-4/specification"
            className={'block px-4 py-2 no-underline hover:bg-gray-600 hover:text-white'}
          >
            Языки написания спецификаций
          </MenuItem>
          <MenuItem
            as={Link}
            href="/year-4/english"
            className={'block px-4 py-2 no-underline hover:bg-gray-600 hover:text-white'}
          >
            Английский
          </MenuItem>
        </MenuItems>
      </Menu>
    </>
  );
}
