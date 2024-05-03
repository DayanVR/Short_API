import "./css/App.css";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  const [active, setActive] = useState("nav-menu");
  const [errorMessage, setErrorMessage] = useState("");
  const [originalURL, setOriginalURL] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState([]);
  const [allUrls, setAllUrls] = useState([]);

  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem("shortenedUrl"));
    if (savedLinks) {
      setShortenedUrl(savedLinks);
    }
  }, []);

  const handleClearLocalStorage = () => {
    window.location.reload();
    localStorage.clear();
  };

  const handleShortenUrl = async (e) => {
    setAllUrls((prevUrls) => [...prevUrls, e]);

    if (allUrls.includes(originalURL.trim())) {
      alert("URL already submitted.");
      return;
    }
    if (e.startsWith("https://") || e.startsWith("http://")) {
      ("");
    } else {
      e = "https://" + e;
    }

    if (originalURL.trim() === "") {
      setErrorMessage("Please add a link");
    } else {
      setErrorMessage("");
      fetch(
        `https://api.tinyurl.com/create?url=${e}&api_token=${import.meta.env.VITE_APP_API_TOKEN}`,
        {
          method: "POST",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (!data.data.tiny_url) {
            setAllUrls((prevUrls) => prevUrls.filter((url) => url !== e));
            alert("No data can be retrieved.");
            return;
          }

          const tiny_url = data.data.tiny_url;
          const newShortenedUrlLinks = [...shortenedUrl, tiny_url];
          setShortenedUrl(newShortenedUrlLinks);
          setOriginalURL("");
          localStorage.setItem(
            "shortenedUrl",
            JSON.stringify(newShortenedUrlLinks)
          );
        })
        .catch((error) => console.error("Hubo un error:", error));
    }
  };

  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");
  };

  return (
    <div className="App ">
      <Header active={active} navToggle={navToggle} />
      <Main
        errorMessage={errorMessage}
        handleShortenUrl={handleShortenUrl}
        setOriginalURL={setOriginalURL}
        originalURL={originalURL}
        shortenedUrl={shortenedUrl}
        handleClearLocalStorage={handleClearLocalStorage}
      />
      <Footer />
    </div>
  );
}

export default App;
