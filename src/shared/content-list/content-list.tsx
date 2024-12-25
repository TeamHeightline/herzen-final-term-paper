interface Section {
  name: string;
  anchor: string;
}

interface Props {
  sections: Section[];
}

export function ContentList(props: Props) {
  const { sections } = props;
  return (
    <div className="fixed bottom-0 right-[max(0px,calc(50%-50rem))] top-[3.8125rem] z-20 hidden w-[19.5rem] overflow-y-auto py-10 xl:block">
      <div className={'px-8'}>
        <h5 className={'ext-slate-900 mb-4 text-sm font-semibold leading-6 dark:text-slate-100'}>
          На этой странице
        </h5>
        <ul className="list-none text-sm leading-6 text-slate-700">
          {sections?.map((section) => (
            <li>
              <a
                href={'#' + section.anchor}
                className="text-slate-400 no-underline hover:text-slate-100"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
