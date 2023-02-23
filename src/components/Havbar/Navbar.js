import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <div>
      <Link to="/dogs">Dogs</Link>
      <Link to="/birds">Birds</Link>
      <Link to="/people">People</Link>
      <Link to="/store">Store</Link>
    </div>
  );
}
