import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
  return (
    <div>
      <h1>Login</h1>

      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
      />

      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
      />

      <Button type="submit">Login</Button>
    </div>
  );
}

export default Login;