import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

export default function Login() {
  return (
    <>
      <h2>Login</h2>
      <div className="flex justify-center">
        <LoginForm />
        <SignupForm />
      </div>
    </>
  );
}
