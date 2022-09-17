import { useState, useEffect } from 'react';
import { SyncLoader } from 'react-spinners';
import { useStateValue } from '../contexts';
import { Sidebar, Cover, Intro, PostCard, CreatePost } from '../components';
import { fetchPosts } from './feed';

const Profile = () => {
  const { state } = useStateValue();
  const [posts, setPosts] = useState();
  // used to display sub menu when post threeDots is clicked
  const [displayPostSubMenu, setdisplayPostSubMenu] = useState([]);

  useEffect(() => {
    fetchPosts(setPosts, setdisplayPostSubMenu);
  }, []);

  return (
    <div className="lg:px-8">
      <div className="hidden lg:block fixed top-24 left-0 bottom-0 w-1/5 max-w-[200px] mr-2 bg-white">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-6 ml-0 lg:ml-[200px]">
        <Cover user={state.user} />
        <div className="block lg:flex justify-center items-start bg-gray-100 lg:px-6 lg:rounded-lg">
          <div className="my-8">
            <Intro user={state.user} />
          </div>
          <div className="flex-1">
            <CreatePost fetchPosts={fetchPosts} />
            {posts ? (
              posts.map((post) => (
                <PostCard
                  key={post.postId}
                  post={post}
                  fetchPosts={fetchPosts}
                  displayPostSubMenu={displayPostSubMenu}
                  setdisplayPostSubMenu={setdisplayPostSubMenu}
                />
              ))
            ) : (
              <SyncLoader className="mt-24" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
