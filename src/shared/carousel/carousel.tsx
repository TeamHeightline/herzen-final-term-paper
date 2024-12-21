interface IProps {
  urlArray: string[];
}

export function Carousel(props: IProps) {
  const { urlArray } = props;
  return (
    <div className={'flex flex-row space-x-2 overflow-x-auto'}>
      {urlArray?.map((url) => <img key={url} src={url} width={450} height={300} alt={'Picture'} />)}
    </div>
  );
}
