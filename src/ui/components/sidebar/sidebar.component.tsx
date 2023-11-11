import { HomeIcon } from '@heroicons/react/24/outline';

export default function SidebarComponent() {
  return (
    <nav className={'fixed w-16 bg-white inset-y-0 left-0 shadow'}>
      <div className={'flex flex-col flex-nowrap mt-1 items-center'}>
        <button
          className={
            'flex justify-center items-center border rounded p-2 shadow'
          }
        >
          <HomeIcon height={24} width={24} />
        </button>
      </div>
    </nav>
  );
}
