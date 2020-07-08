const SmoothScroll = () =>
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
export default SmoothScroll;
