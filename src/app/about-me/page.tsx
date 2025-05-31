import { Carousel } from '@/shared/carousel';

export default function AboutMe() {
  return (
    <>
      <h1>Обо мне</h1>
      <h2>Достижения в академической среде</h2>
      <h3>StudyWays</h3>
      <div>
        Разработал платформу с нуля, был главным разработчиком на проекте.
        <Carousel
          baseUrl={'/files/about-me/study-ways/'}
          urlArray={['img.png', 'img_1.png', 'img_2.png', 'img_3.png', 'img_4.png', 'img_5.png']}
        />
        <ul className={'ml-5 list-disc marker:text-sky-500'}>
          <li>
            Проект получил грант по программе стратегического академического лидерства
            «Приоритет-2030»
          </li>
          <Carousel
            baseUrl={'/files/about-me/study-ways/grant/'}
            urlArray={['img.png', 'img_1.png']}
          />
          <li>
            Члены команды были удостоены государственной премии Правительства Санкт-Петербурга в
            номинации «Развитие инновационной деятельности в образовательной организации».
          </li>
          <Carousel
            baseUrl={'/files/about-me/study-ways/prize/'}
            urlArray={['img.png', 'img_1.png', 'img_2.png', 'img_3.png']}
          />
          <li>Стал соавтором 8 статей, посвященным StudyWays</li>
          <Carousel baseUrl={'/files/about-me/study-ways/articles/'} urlArray={['img.png']} />
        </ul>
      </div>
      <h3>Проект "Деканат" для физкультуры в ГРПУ им. Герцена</h3>
      <div>
        Был одним из двух frontend-разработчиков. Разработали проект с нуля, довели до эксплуатации
        <Carousel
          baseUrl={'/files/about-me/herzen/'}
          urlArray={['img.png', 'img_1.png', 'img_2.png']}
        />
      </div>
      <h2 id={'lr2'}>Достижения в коммерческой разработке</h2>
      <h3>West Engineering</h3>
      <div>
        Был ведущим фулстек разработчиком. Занимался разработкой системы лабораторного мониторинга
        водно-химического режима для АЭС.
        <Carousel baseUrl={'/files/about-me/west-e/'} urlArray={['img.png']} />
        <ul className={'ml-5 list-disc marker:text-sky-500'}>
          <li>
            Реализовал систему отображения всех измерений и анализа их на соответствие нормативным
            значениям.
          </li>
          <Carousel
            baseUrl={'/files/about-me/west-e/monitoring/'}
            urlArray={['img.png', 'img_1.png', 'img_2.png']}
          />

          <li>
            Реализовал ключевые модули ввода лабораторных измерений и анализа результата по
            специальным методикам.
          </li>
          <Carousel
            baseUrl={'/files/about-me/west-e/measurements/'}
            urlArray={['img.png', 'img_1.png']}
          />

          <li>Реализовал систему управления нормативами.</li>
          <Carousel
            baseUrl={'/files/about-me/west-e/normatives/'}
            urlArray={['img_1.png', 'img.png']}
          />
        </ul>
      </div>
      <h3>СБЕР</h3>
      <Carousel baseUrl={'/files/about-me/sber/'} urlArray={['img.png']} />
      <div>
        Являюсь ведущим фронтенд разработчиком инкассации
        <Carousel baseUrl={'/files/about-me/sber/'} urlArray={['img_1.png']} />
        <ul className={'ml-5 list-disc marker:text-sky-500'}>
          <li>Произвел миграцию системы голосовой связи инкассации на систему Сбер Контакт</li>
          <li>разработал систему управления настройками мобильных приложений инкассаторов</li>
          <li>Разработал систему для подписи документов по сдаче ценностей инкассаторами</li>
        </ul>
      </div>
    </>
  );
}
