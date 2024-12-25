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
        <div
          className={
            'font-bold leading-relaxed text-lg text-white w-80'
          }
        >
          Чирцов Тимофей
        </div>

        <div className={'hidden w-full items-center md:flex'}>
          <div className={'flex flex-row flex-1 gap-9'}>
            <a className={'no-underline leading-relaxed text-body text-[--c-text-primary] w-max transition-[border] border-b-[3px] hover:border-sky-500 border-transparent font-medium'}>
              Обо мне
            </a>
            <a className={'no-underline leading-relaxed text-body text-[--c-text-primary] w-max transition-[border] border-b-[3px] hover:border-sky-500 border-transparent font-medium'}>
              Предметы
            </a>
            <a className={'no-underline leading-relaxed text-body text-[--c-text-primary] w-max transition-[border] border-b-[3px] hover:border-sky-500 border-transparent font-medium'}>
              Достижения
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
