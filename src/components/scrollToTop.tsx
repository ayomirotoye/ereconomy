import { useEffect, useState } from "react"; 
import { ScrollToTopIcon } from "../assets/icons/ScrollToTopIcon";
import { ScrollToTopContainer } from "../assets/styles/scrollToTop";
import { getScroll } from "../utils/getWindow";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = (event: any) => {
    const offsetFromTop = getScroll(event.target, true);

    if (!showScroll && offsetFromTop > 350) {
      setShowScroll(true);
    } else if (offsetFromTop <= 350) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollUp = () => {
    const element = document.getElementById("intro") as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <ScrollToTopContainer onClick={scrollUp} show={showScroll}>
      <ScrollToTopIcon width="20px" height="20px" />
    </ScrollToTopContainer>
  );
};

export default ScrollToTop;
