export const PostInput = ({ inputChange, size, text, onKeyUp }) => {
  const padding = size === 'small' ? '2' : '32';

  return (
    <input
      className={`flex w-5/6 ml-4 p-4 pb-${padding} rounded-xl border-2 border-none h-12 outline-none bg-[#4E5D780D]`}
      type="text"
      placeholder="What's happening?"
      required
      onChange={inputChange}
      onKeyUp={onKeyUp}
      value={text}
    />
  );
};
