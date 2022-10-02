import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as AppLogo } from "../../assets/crown.svg";
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <AppLogo />
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to='/fdsfsd'>
                SHOP
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
