/* eslint-disable react/button-has-type */
// eslint-disable-next-line arrow-body-style
export const Intro = ({ user }) => {
  return (
    <div className="bg-white text-base text-gray-600 p-6 lg:rounded-lg">
      <h3 className="uppercase text-2xl mb-6">Intro</h3>
      <div className="flex gap-4 mb-4">
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
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{user.website ? user.website : 'Website display here'}</span>
      </div>

      <div className="flex gap-4 mb-4">
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <span>{user.gender ? user.gender : 'Gender display here'}</span>
      </div>

      <div className="flex gap-4 mb-4">
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
            d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
          />
        </svg>
        <span>{user.gender ? user.dateOfBirth : 'Birthdate display here'}</span>
      </div>

      <div className="flex gap-4 mb-4">
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>{user.gender ? user.localisation : 'Localisation display here'}</span>
      </div>

      <div className="flex gap-4 mb-4">
        <img src="icons/icons8-facebook-50.svg" className="h-6 w-6" alt="Facebook" />
        <span>{user.gender ? user.socials.facebook : 'Facebook display here'}</span>
      </div>

      <div className="flex gap-4 mb-2">
        <img src="icons/icons8-instagram.svg" className="h-6 w-6" alt="Instagram" />
        <span>{user.gender ? user.socials.instagram : 'Instagram display here'}</span>
      </div>

      <div className="flex gap-4 mb-2">
        <img src="icons/icons8-twitter.svg" className="h-6 w-6" alt="Twitter" />
        <span>{user.gender ? user.socials.twitter : 'Twitter display here'}</span>
      </div>
      <button className="text-gray-600 bg-gray-100 text-sm px-4 py-2 rounded-lg flex-1 w-full">
        Edit Details
      </button>
    </div>
  );
};
