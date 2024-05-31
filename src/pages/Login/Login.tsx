import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, loginWithPopup } = useAuth0();
  const handleLoginWithPopup = () => loginWithPopup();
  const handleLoginWithRedirect = () => loginWithRedirect();
  return (
    <div>
      <button className="btn btn-ghost" onClick={handleLoginWithPopup}>
        Login With Popup
      </button>
      <button className="btn btn-ghost" onClick={handleLoginWithRedirect}>
        Login With Redirect
      </button>
    </div>
  );
};

export default Login;
