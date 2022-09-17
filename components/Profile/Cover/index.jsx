/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
// import { MyImage } from '../../MyImage';

export const Cover = ({ user }) => {
  const imageUrl =
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  return (
    <div className="relative bg-white drop-shadow lg:border lg:border-gray-200 lg:rounded-lg">
      <div className="h-72">
        <img src={imageUrl} alt="cover" className="lg:rounded-lg h-full w-full object-cover" />
      </div>
      <div className="py-4 lg:py-12 px-6">
        <div className="absolute bottom-[8rem] lg:bottom-28 h-24 w-24">
          <img
            src={user.profilePictureURL}
            alt="profile"
            className="rounded-full border-4 border-white"
          />
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute -right-1 bottom-2 p-[3px] text-gray-600 bg-white rounded-full cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>
        </div>
        <div className="block lg:flex justify-between">
          <div className="my-4 lg:m-0">
            <div className="text-xl text-gray-600 font-medium">{user.displayName}</div>
            <div className="text-gray-400 text-sm">{user.job ? user.job : 'Job Here'}</div>
          </div>
          <div className="flex gap-6 items-center flex-row-reverse lg:flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <button className="text-gray-600 bg-gray-100 text-sm px-4 py-2 rounded-lg flex-1">
              Edit Basic Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
