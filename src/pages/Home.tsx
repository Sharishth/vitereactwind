import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex h-100vh m-1">
       <div>
       <h1>Heading</h1>
       <Link to='/about' className="link link-primary"> About </Link>
       </div>
      </div>
    </>
  );
}
