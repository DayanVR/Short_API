import logo from "./assets/logo.svg";
import iconFacebook from "./assets/square-facebook.svg";
import iconTwitter from "./assets/twitter.svg";
import iconPinterest from "./assets/pinterest.svg";
import iconInstagram from "./assets/instagram.svg";

export default function Footer() {
  return (
    <div>
      <section className="footer-section -mx-5 md:-mx-8 lg:-mx-14 xl:-mx-24 2xl:-mx-44">
        <div className="text-[1.6rem] md:text-[2.5rem] py-16 -mx-5 md:-mx-8 lg:-mx-14 xl:-mx-24 2xl:-mx-44">
          <h2>Boost your links today</h2>
          <button>Get Started</button>
        </div>
      </section>
      <footer className="py-12 -mx-5 md:-mx-8 lg:-mx-14 xl:-mx-24 2xl:-mx-44">
        <div className="footer-container mx-auto xl:flex xl:flex-row xl:w-10/12 2xl:w-8/12 justify-between w-max">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer-links [&_a]:text-[1.2rem] [&_a]:md:text-[1.5rem] [&_a]:font-medium xl:flex xl:-mr-32 xl:flex-row xl:justify-evenly xl:w-7/12 [&_li]:text-center [&_li]:xl:text-left [&_li]:cursor-pointer">
            <div>
              <h3 className="mx-auto max-w-max text-[1.5rem] md:text-[2rem] xl:text-[1.7rem] pt-8 xl:pt-0 xl:mx-0 pb-2">
                Features
              </h3>
              <ul>
                <li>
                  <a href="#/">Link Shortening</a>
                </li>
                <li>
                  <a href="#/">Branded Links</a>
                </li>
                <li>
                  <a href="#/">Analytics</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mx-auto max-w-max text-[1.5rem] md:text-[2rem] xl:text-[1.7rem] pt-8 xl:pt-0 xl:mx-0 pb-2">
                Resources
              </h3>
              <ul>
                <li>
                  <a href="#/">Blog</a>
                </li>
                <li>
                  <a href="#/">Developers</a>
                </li>
                <li>
                  <a href="#/">Support</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mx-auto max-w-max text-[1.5rem] md:text-[2rem] xl:text-[1.7rem] pt-8 xl:pt-0 xl:mx-0 pb-2">
                Company
              </h3>
              <ul>
                <li>
                  <a href="#/">About</a>
                </li>
                <li>
                  <a href="#/">Our Team</a>
                </li>
                <li>
                  <a href="#/">Careers</a>
                </li>
                <li>
                  <a href="#/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-social flex-row justify-between self-center pt-6 mr-4 xl:pt-0 xl:ml-20 xl:object-top w-full xl:self-start xl:w-1/5 flex">
            <img src={iconFacebook} alt="" />
            <img src={iconTwitter} alt="" />
            <img src={iconPinterest} alt="" />
            <img src={iconInstagram} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
}
