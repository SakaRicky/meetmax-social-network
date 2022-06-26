import { useRouter } from 'next/router';
import { Button } from '../../Button';
import { DatePicker } from '../../DatePicker';
import { GenderPicker } from '../../GenderPicker';
// import { GenderPicker } from '../..';
import { AppleExternalSignup, GoogleExternalSignup } from '../ExternalSignup';
import { TextInput } from '../NameInput';
import { PasswordInput } from '../PasswordInput';

export const SingupForm = ({ login }) => {
  const router = useRouter();
  return (
    <form className="bg-white rounded-lg p-5 min-w-[400px] w-full max-w-xl mx-4 md:mx-auto flex flex-col justify-between gap-5 drop-shadow-xl">
      <div className="signup-with flex justify-between">
        <GoogleExternalSignup login={login} />
        <AppleExternalSignup login={login} />
      </div>
      <div className="relative flex py-2 items-center">
        <div className="flex-grow border-t border-gray-300" />
        <span className="flex-shrink mx-4 text-gray-600">OR</span>
        <div className="flex-grow border-t border-gray-300" />
      </div>
      <TextInput type="name" />
      <TextInput type="email" />
      <PasswordInput placeholder="Your password here" />
      <PasswordInput placeholder="Password confirmation" />
      <div className="bottom-form-section flex flex-row justify-between">
        <DatePicker />
        <GenderPicker />
      </div>
      <Button>Sign Up</Button>
      <small className="mx-auto">
        Already have an account?
        <button
          role="link"
          className="text-blue-500 hover:text-blue-700 ml-2"
          tabIndex={0}
          onClick={() => router.push('/login')}
          onKeyPress={() => router.push('/login')}
          type="button"
        >
          Sign In
        </button>
      </small>
    </form>
  );
};