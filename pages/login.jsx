import { Title, Form } from '../components';
// import { useUser } from '../contexts/UserContext';

const Login = () => (
  // const { user } = useUser();

  <>
    <Title heading="Sign In" subheading={`Welcome back , you've been missed!`} />
    <Form login />
  </>
);
export default Login;
