import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [cookies, _, removeCookies] = useCookies(['token']);
  const navigate = useNavigate()
  const logout = () => {
    removeCookies('token')
    navigate('/')
  }
  return (
    <div className="navbar bg-base-100 bg-green-500 ">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">TO DO</a>
      </div>
      <div className="navbar-end">
        <a className="btn " onClick={() => navigate('/new')}>+add todo</a>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li><a>Settings</a></li>
            <li onClick={logout}><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}