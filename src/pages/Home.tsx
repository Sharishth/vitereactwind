import { Link } from "../../node_modules/react-router-dom/dist/index.js"

export default function Home() {
 return (
  <>
   <h1>Home Page</h1>
   <Link to='/About'>About</Link>
  </>
 )
}