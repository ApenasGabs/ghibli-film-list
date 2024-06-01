import { useAuth0 } from "@auth0/auth0-react";

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
    <div className="navbar bg-base-100 fixed top-0 w-full z-10 justify-between px-4">
      <div className="flex-1">
        <p className="text-lg lg:text-xl">Ghibli Universe</p>
      </div>
      <div className="flex-none lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
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
      </div>
      <div className="flex-none hidden lg:flex lg:items-center">
        <ul className="menu menu-horizontal px-1">
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
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {<img alt="User profile image" src={user?.picture} />}
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
                  <button onClick={onLoginClick}>Entrar</button>
                )}
              </li>
            </ul>
          </div>
        ) : (
          <button className="btn btn-accent ml-2" onClick={onLoginClick}>
            Entrar
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
