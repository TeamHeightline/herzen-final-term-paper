import Image from 'next/image';

interface IProps {
  urlArray: string[];
}

const IMAGE_PREFIX = '/herzen-final-term-paper';

export function Carousel(props: IProps) {
  const { urlArray } = props;
  return (
    <div className={'flex flex-row space-x-2 overflow-x-auto'}>
      {urlArray?.map((url) => (
        <Image key={url} src={IMAGE_PREFIX + url} width={450} height={300} alt={'Picture'} />
      ))}
    </div>
  );
}
