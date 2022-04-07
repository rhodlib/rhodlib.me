const GithubStats = () => {
  return (
    <div className="max-w-sm rounded dark:grayscale-0 mt-10 transition ease-in-out delay-150 hover:shadow-lg hover:shadow-sky-400 duration-300 grayscale hover:grayscale-0">
      <img
        src={`https://github-readme-stats.vercel.app/api?username=rhodlib&show_icons=true${
          localStorage.theme === "dark" ? "&theme=tokyonight" : ""
        }`}
        alt="rhodlib"
      />
    </div>
  );
};

export default GithubStats;
