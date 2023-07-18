import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <h1>Header</h1>
            <ul>
                <Link to="/dashboard"><li>Dashboard</li></Link>
                <Link to="/home"><li>home</li></Link>
               
            </ul>
        </>
    )
}
export default Header;