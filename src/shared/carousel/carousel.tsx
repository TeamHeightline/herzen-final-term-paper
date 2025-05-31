import Image from 'next/image';

interface IProps {
  urlArray: string[];
  baseUrl: string;
}

const IMAGE_PREFIX = '/herzen-final-term-paper';

export function Carousel(props: IProps) {
  const { urlArray, baseUrl } = props;
  return (
    <div className={'flex h-[500px] flex-row space-x-2 overflow-x-scroll'}>
      {urlArray?.map((url) => (
        <Image
          key={url}
          src={IMAGE_PREFIX + (baseUrl ? baseUrl : '') + url}
          width={750}
          height={500}
          alt={'Picture'}
        />
      ))}
    </div>
  );
}
