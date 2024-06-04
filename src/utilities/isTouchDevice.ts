const isTouchDevice =
  /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || "ontouchstart" in window;

export default isTouchDevice;
