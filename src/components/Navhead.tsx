import { Link } from "react-router-dom";

export default function Navhead() {
  return (
    <>
      <div className="flex bg-base-200 p-2 justify-center">
        <div className="btn btn-ghost text-xl mr-auto">
          <Link to='/'>Index</Link>
        </div>
        <div className="">
        <div className="collapse collapse-plus bg-base-200">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Parts</div>
        <div className="collapse-content">
          <div className="flex flex-col flex-nowrap">
            <Link to='/part1'>Part 1</Link>
            <div className="pl-2 flex flex-col flex-nowrap">
              <Link to="/">Item 1</Link>
              <Link to="/">Item 2</Link>
              <Link to="/">Item 3</Link>
            </div>
          </div>
          <div className="flex flex-col flex-nowrap">
            <Link to='/part1'>Part 2</Link>
            <div className="pl-2 flex flex-col flex-nowrap">
              <Link to="/">Item 1</Link>
              <Link to="/">Item 2</Link>
              <Link to="/">Item 3</Link>
            </div>
          </div>
          <div className="flex flex-col flex-nowrap">
            <Link to='/part1'>Part 3</Link>
            <div className="pl-2 flex flex-col flex-nowrap">
              <Link to="/">Item 1</Link>
              <Link to="/">Item 2</Link>
              <Link to="/">Item 3</Link>
            </div>
          </div>
        </div>
      </div>
        </div>
        
      </div>
    </>
  );
}
