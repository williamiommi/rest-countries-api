export const isDarkOnLoad = () => {
  const isDark = window.localStorage.getItem("darkTheme");
  const htmlRoot = document.getElementsByTagName("html")[0];
  htmlRoot.classList[isDark === "true" ? "add" : "remove"]("dark");
};

export const toggleTheme = () => {
  const isDark = window.localStorage.getItem("darkTheme");
  const htmlRoot = document.getElementsByTagName("html")[0];
  window.localStorage.setItem("darkTheme", isDark === "true" ? false : true);
  htmlRoot.classList[isDark === "true" ? "remove" : "add"]("dark");
};

export const fetcher = url => fetch(url).then(r => r.json());