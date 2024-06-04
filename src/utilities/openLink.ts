const openInNewTab = (url: string | undefined) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export default openInNewTab;