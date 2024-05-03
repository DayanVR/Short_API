import logo from "./assets/logo.svg";
import bars from "./assets/bars-solid.svg";

export default function Header({ active, navToggle }) {
  return (
    <header className="lg:mt-3 lg:flex lg:h-[15vh] mx-5 md:mx-8 lg:mx-14 xl:mx-24 2xl:mx-44">
      <div className="flex lg:flex-none justify-between">
        <img
          src={logo}
          className="w-1/3 md:w-1/4 lg:w-40 lg:h-14 lg:self-center"
          alt=""
        />
        <img
          src={bars}
          alt=""
          className="max-md:w-7 md:w-10 lg:hidden cursor-pointer"
          onClick={navToggle}
        />
      </div>
      <nav className="mx-auto lg:mx-0 w-full lg:self-center relative">
        <div
          className={`${
            active === "nav-menu"
              ? " max-lg:invisible lg:flex max-lg:hidden mt-5 justify-between lg:mt-0 [&_li]:lg:self-center "
              : "w-11/12 md:w-9/12 lg:w-full text-[1.5rem] visible rounded-2xl block h-[47vh] md:h-[42vh] [&_li]:py-2 [&_li]:lg:py-0"
          } ${active} [&_a]:text-2xl [&_a]:mx-auto`}
        >
          <ul
            className={`${
              active === "nav-menu"
                ? "my-auto text-center lg:self-center flex flex-col lg:flex-row justify-between "
                : "my-auto lg:self-center p-4 md:p-6 m-auto text-center flex flex-col lg:flex-row justify-between"
            } [&_li]:lg:ml-5 [&_li]:lg:mr-0 [&_li]:xl:ml-8 [&_li]:xl:mr-0 `}
          >
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Resources</a>
            </li>
          </ul>
          <ul
            className={`${
              active === "nav-menu"
                ? "my-auto text-center lg:self-center flex flex-col lg:flex-row justify-between"
                : "my-auto lg:self-center p-4 md:p-6 m-auto text-center flex flex-col lg:flex-row justify-between"
            } [&_li]:lg:ml-5 [&_li]:lg:mr-0 [&_li]:xl:ml-8 [&_li]:xl:mr-0 `}
          >
            <li className="lg:ml-5 lg:mr-0 xl:ml-8 xl:mr-0">
              <a href="/">Login</a>
            </li>
            <li>
              <button href="#" className="w-4/5 lg:w-full">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
