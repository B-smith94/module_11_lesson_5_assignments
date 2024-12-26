import { Link, NavLink } from "react-router-dom";

function NavigationBar () {
    return (
        <nav className="clearfix">
            <NavLink to='/' activeClassName="active">Home</NavLink>
            <NavLink to='/browse-characters/' activeClassName="active">Browse Characters</NavLink>
            <NavLink to='/comics/' activeClassName="active">Comics</NavLink>
        </nav>
    )
}
export default NavigationBar;