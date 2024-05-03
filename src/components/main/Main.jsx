import workingIcon from "./assets/illustration-working.svg";
import iconBrand from "./assets/icon-brand-recognition.svg";
import iconRecords from "./assets/icon-detailed-records.svg";
import iconFullCustom from "./assets/icon-fully-customizable.svg";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Main({
  errorMessage,
  handleShortenUrl,
  setOriginalURL,
  originalURL,
  shortenedUrl,
  handleClearLocalStorage,
}) {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [validInput, setValidInput] = useState(true);
  const [buttonText, setButtonText] = useState(
    Array(shortenedUrl.length).fill("Copy")
  );

  const handleClick = (index) => {
    const newButtonTexts = Array(shortenedUrl.length).fill("Copy");
    newButtonTexts[index] = "Copied!";
    setButtonText(newButtonTexts);
    localStorage.setItem("buttonText", JSON.stringify(newButtonTexts));
    setClickedIndex(index);
  };

  const handleChange = (e) => {
    setOriginalURL(e.target.value);
    const inputValue = e.target.value.trim();
    if (
      inputValue.startsWith("https://www.") ||
      inputValue.startsWith("www.") ||
      inputValue.startsWith("http://") ||
      inputValue.startsWith("https://")
    ) {
      setValidInput(true);
      setOriginalURL(inputValue);
    } else {
      setValidInput(false);
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validInput) {
      handleShortenUrl(originalURL);
      setOriginalURL("");
    } else {
      alert("Invalid Input, should start with: 'https://www.' or 'www.'");
      return;
    }
  };

  useEffect(() => {
    const initialButtonTexts = localStorage.getItem("buttonText");
    if (initialButtonTexts) {
      setButtonText(JSON.parse(initialButtonTexts));
    } else {
      setButtonText(Array(shortenedUrl.length).fill("Copy"));
    }
  }, [shortenedUrl.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const resetButtonTexts = Array(shortenedUrl.length).fill("Copy");
      setButtonText(resetButtonTexts);
      localStorage.setItem("buttonText", JSON.stringify(resetButtonTexts));
    });

    return () => clearTimeout(timer);
  }, [shortenedUrl.length]);

  return (
    <div className="mx-5 md:mx-8 lg:mx-14 xl:mx-24 2xl:mx-44">
      <section className="section-1 lg:flex mt-9 lg:mt-4 justify-center items-center flex-row-reverse">
        <img
          src={workingIcon}
          className="workIcon max-w-[150%] lg:w-[60%] 2xl:w-[100%] lg:left-[15%] xl:left-[20%] relative"
          alt=""
        />
        <div className="info-1 text-center lg:text-left">
          <h1 className="text-[2.2rem] md:text-[2.5rem] lg:text-[2.8rem]">
            More than just shorter links
          </h1>
          <p className="lg:!text-left lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[1.8rem]">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button onClick={handleClearLocalStorage}>Reset Library</button>
        </div>
      </section>
      <div
        className="back bg-slate-100 -mx-5 md:-mx-8 lg:-mx-14 xl:-mx-24
  2xl:-mx-44"
      >
        <div className="main-content static w-10/12 md:w-8/12 2xl:w-10/12 mx-auto">
          <section className="section-2 2xl:w-9/12 self-center">
            <div className="info-2">
              <form
                className="flex flex-col lg:flex-row justify-between rounded-xl max-md:space-y-3 max-lg:md:space-y-5 lg:h-[22vh] xl:h-36 xl:bg-cover"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  value={originalURL}
                  onChange={handleChange}
                  className={`${
                    errorMessage && originalURL.trim() === ""
                      ? "!border-4"
                      : "!border-0"
                  } text-[1rem] font-medium px-3 py-3 lg:py-4 md:max-lg:py-4 w-10/12 lg:w-[58%] xl:w-[60%] 2xl:w-[68%] leading-none rounded-md m-auto`}
                  placeholder="Shorten a link here..."
                  name="inputURL"
                />
                {errorMessage && (
                  <span className="italic relative max-md:mx-6 md:mx-10 lg:mx-6 2xl:mx-11 lg:absolute top-0 lg:top-36 xl:top-[8.6rem] 2xl:top-[9.5rem]">
                    {errorMessage}
                  </span>
                )}
                <button
                  type="submit"
                  className="mx-auto md:text-[1.3rem] max-lg:mb-4 px-8 font-bold rounded-md h-fit self-center py-3 md:py-4 w-10/12 lg:w-[28%] xl:w-[30%] 2xl:w-[20%] text-[1.2rem] xl:text-[1.5rem] leading-none"
                >
                  Shorten It!
                </button>
              </form>
            </div>
            <div className="shortLinks">
              <ul>
                {shortenedUrl &&
                  shortenedUrl.map((url, index) => (
                    <li
                      key={index}
                      className="bg-white lg:flex lg:justify-between lg:items-center rounded-lg py-2 xl:py-4 px-4 my-5 text-left"
                    >
                      <a
                        href={url}
                        className="text-xl "
                        target="_blank"
                        rel="noreferrer nooponer"
                      >
                        {url}
                      </a>
                      <br />
                      <span className=" border-slate-100 border-y-2 mt-4 -mx-10 w-screen block lg:hidden"></span>
                      <br />
                      <CopyToClipboard text={url}>
                        <button
                          onClick={() => handleClick(index)}
                          className={`w-full py-1 text-[1.1rem] 
                      mt-0 max-lg:my-3 rounded-lg lg:w-1/4 
                      2xl:w-2/12 ${
                        clickedIndex === index ? "buttonClicked" : ""
                      }`}
                        >
                          {buttonText[index] || "Copy"}
                        </button>
                      </CopyToClipboard>
                    </li>
                  ))}
              </ul>
            </div>
          </section>
          <section className="section-3 2xl:w-10/12 2xl:mx-auto 2xl:mb-24">
            <div className="info-3 2xl:w-7/12 2xl:mx-auto">
              <h2 className="text-[1.8rem] md:text-[2.3rem]">
                Advanced Statistics
              </h2>
              <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
            <span className="2xl:rotate-90 2xl:translate-y-[45%]"></span>
            <div className="desktop-view 2xl:flex 2xl:w-full justify-around">
              <div className="infoIcons 2xl:text-left relative lg:w-9/12 2xl:w-[31%] px-[3vh] lg:px-2 xl:px-10 2xl:px-6 py-[5vh] md:py-[4vh] 2xl:py-[3vh] rounded-xl my-[10vh] bg-white">
                <div className="iconsBack absolute p-10 w-fit h-fit inset-2/4 -translate-x-2/4 2xl:inset-x-20 2xl:-translate-x-2/4 -translate-y-[237%] md:-translate-y-[207%] lg:-translate-y-[195%] xl:-translate-y-[187%] 2xl:-translate-y-[205%]">
                  <img src={iconBrand} alt="" />
                </div>
                <h3 className="md:pt-4 pt-[4vh] pb-[3vh] md:pb-3 lg:pt-6 lg:pb-5 bg-none">
                  Brand Recognition
                </h3>
                <p className="md:my-2 mx-[2vw] lg:mx-10 lg:my-0 2xl:mx-0 text-[1.07rem] 2xl:text-left md:text-[1.15rem]">
                  Boost your bran recognition with each click. Generic lins
                  don't mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
              <div className="infoIcons 2xl:translate-y-12 2xl:text-left relative lg:w-9/12 2xl:w-[31%] px-[3vh] lg:px-2 xl:px-10 2xl:px-6 py-[5vh] md:py-[4vh] 2xl:py-[3vh] rounded-xl my-[10vh] bg-white">
                <div className="iconsBack absolute p-10 w-fit h-fit inset-2/4 -translate-x-2/4 2xl:inset-x-20 2xl:-translate-x-2/4 -translate-y-[237%] md:-translate-y-[207%] lg:-translate-y-[195%] xl:-translate-y-[187%] 2xl:-translate-y-[205%]">
                  <img src={iconRecords} alt="" />
                </div>
                <h3 className="md:pt-4 pt-[4vh] pb-[3vh] md:pb-3 lg:pt-6 lg:pb-5 bg-none">
                  Detailed Records
                </h3>
                <p className="md:my-2 mx-[2vw] lg:mx-10 lg:my-0 2xl:mx-0 text-[1.07rem] 2xl:text-left md:text-[1.15rem]">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
              <div className="infoIcons 2xl:translate-y-24 2xl:text-left relative lg:w-9/12 2xl:w-[31%] px-[3vh] lg:px-2 xl:px-10 2xl:px-6 py-[5vh] md:py-[4vh] 2xl:py-[3vh] rounded-xl my-[10vh] bg-white">
                <div className="iconsBack absolute p-10 w-fit h-fit inset-2/4 -translate-x-2/4 2xl:inset-x-20 2xl:-translate-x-2/4 -translate-y-[237%] md:-translate-y-[207%] lg:-translate-y-[195%] xl:-translate-y-[187%] 2xl:-translate-y-[205%]">
                  <img src={iconFullCustom} alt="" />
                </div>
                <h3 className="md:pt-4 pt-[4vh] pb-[3vh] md:pb-3 lg:pt-6 lg:pb-5 bg-none">
                  Fully Customizable
                </h3>
                <p className="md:my-2 mx-[2vw] lg:mx-10 lg:my-0 2xl:mx-0 text-[1.07rem] 2xl:text-left md:text-[1.15rem]">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
