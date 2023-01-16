import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.jpg'
import style from '../assets/css/NavBar.module.css'

export default function NavBar(){

  const navigate = useNavigate();

    return(
        <div className={style.navbar}>
        {/* other elements */}
        <img className={style.logo} onClick={()=>{navigate('/')}} src={logo}/>

        <div className={style.nav}>
            <Link className={style.link} to={'/'}>Home</Link>
            <Link className={style.link} to={'/movies'}>Movies</Link>
            <Link className={style.link} to={'/series'}>Series</Link>
            <Link className={style.link} to={'/mylist'}>MyList</Link>
            <Link className={style.link} to={'/signin'}>SignIn</Link>
            <Link className={style.link} to={'/signup'}>SignUp</Link>
        </div>

        <Outlet />

        


        {/* <nav>
          <ul>
          <li>
              <Link to={`contacts/1`}>Home</Link>
            </li>
            <li>
              <Link to={`contacts/1`}>Movies</Link>
            </li>
            <li>
              <Link to={`contacts/1`}>Series</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>MyList</Link>
            </li>
          </ul>
        </nav> */}

        {/* other elements */}
      </div>
    )
}