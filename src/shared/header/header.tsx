import Link from 'next/link';
import { SubjectList } from '@/shared/header/subject-list/subject-list';

export function Header() {
  return (
    <div
      className={
        'bg-body fixed left-0 top-0 z-50 w-screen supports-[backdrop-filter]:bg-transparent supports-[backdrop-filter]:backdrop-blur'
      }
    >
      <div
        className={'mx-auto flex h-[72px] w-full max-w-screen-xl items-center justify-between px-4'}
      >
        <div className={'w-80 text-lg font-bold leading-relaxed text-white'}>Чирцов Тимофей</div>

        <div className={'hidden w-full items-center md:flex'}>
          <div className={'flex flex-1 flex-row gap-9'}>
            <Link
              href={'/about-me'}
              className={
                'text-body w-max border-b-[3px] border-transparent font-medium leading-relaxed text-[--c-text-primary] no-underline transition-[border] hover:border-sky-500'
              }
            >
              Обо мне
            </Link>
            <a
              className={
                'text-body w-max border-b-[3px] border-transparent font-medium leading-relaxed text-[--c-text-primary] no-underline transition-[border] hover:border-sky-500'
              }
            >
              Предметы
            </a>
            <SubjectList />
            <a
              className={
                'text-body w-max border-b-[3px] border-transparent font-medium leading-relaxed text-[--c-text-primary] no-underline transition-[border] hover:border-sky-500'
              }
            >
              Достижения
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
