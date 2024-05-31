import { useAuth0 } from "@auth0/auth0-react";
import Login from "../../pages/Login/Login";

interface NavbarPops {
  onChangeViewClick: () => void;
  onLoginClick: () => void;
  onLogoutClick: () => void;
}

const Navbar = ({
  onChangeViewClick,
  onLoginClick,
  onLogoutClick,
}: NavbarPops) => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="navbar bg-base-100 fixed top-0 w-full z-10 justify-between">
      <div className="navbar-center hidden lg:flex">
        <p>Ghibli Universe</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Login />
          </li>
          <li>
            <button className="btn btn-ghost">Assistidos</button>
          </li>
          <li>
            <button className="btn btn-ghost">Favoritos</button>
          </li>
          <li>
            <button onClick={onChangeViewClick} className="btn btn-ghost">
              Mudar visualização
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2 navbar-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user?.picture} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              {isAuthenticated ? (
                <button onClick={onLogoutClick}>Sair</button>
              ) : (
                <button onClick={onLoginClick}>entrar</button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
