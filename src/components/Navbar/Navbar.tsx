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
      <div className="flex-1 lg:flex-none">
        <p className="text-lg lg:text-xl">Ghibli Universe</p>
      </div>
      <div className="flex-none lg:flex lg:items-center">
        <div className="hidden lg:block">
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
