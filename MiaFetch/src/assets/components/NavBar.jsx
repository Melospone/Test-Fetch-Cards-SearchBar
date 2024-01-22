import { Link } from "react-router-dom";

function NavBarReal() {
    return (
        <ul className='flex gap-2 mb-2'>
            <li>
                <Link to={"/"}>home</Link>
            </li>
            <li>
                <Link to={"/about"}>about</Link>
            </li>
        </ul>
    );
}

export default NavBarReal;