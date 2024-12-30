import { FiArrowUp } from "react-icons/fi";

const GoToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="go-to-top" onClick={scrollToTop}>
      <FiArrowUp />
    </button>
  );
};

export default GoToTop;
