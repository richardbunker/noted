export interface INavbarContainerProps {
  onNewNote: Function;
  deletable: boolean;
  deleteSelected: Function;
}

export default function NavbarContainer({
  onNewNote,
  deletable,
  deleteSelected,
}: INavbarContainerProps) {
  const handleClick = () => {
    onNewNote();
  };
  return (
    <nav className="flex w-full items-center justify-start select-none">
      <div className="shrink-0 w-[250px] h-14 bg-stone-800 flex items-center justify-between px-4 font-brand text-xl border-r border-stone-700">
        <span>Noted!</span>
        {deletable && (
          <svg
            onClick={() => deleteSelected()}
            className="h-5 w-5 cursor-pointer"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
            />
          </svg>
        )}
      </div>
      <div className="h-14 bg-stone-800 flex items-center px-4 w-full">
        <button
          onClick={handleClick}
          className="flex items-center justify-between space-x-1 px-2 py-1 rounded hover:bg-stone-600"
        >
          <div className="h-5 w-5">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
            </svg>
          </div>
          <span className="text-sm">New Note</span>
        </button>
      </div>
    </nav>
  );
}
