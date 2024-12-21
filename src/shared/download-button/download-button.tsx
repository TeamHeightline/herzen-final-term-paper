interface IProps {
  url: string;
}

export const DownloadButton = (props: IProps) => {
  const { url } = props;
  return (
    <div>
      <form method="get" action={url} className={'mt-4'}>
        <button type="submit">
          <span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
              ></path>
            </svg>
          </span>
          <span>Скачать</span>
        </button>
      </form>
    </div>
  );
};
