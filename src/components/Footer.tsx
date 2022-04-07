const Footer = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="flex dark:text-white dark:bg-slate-800 dark:grayscale-0 bg-white py-4 w-3/5 transition ease-in-out delay-150 justify-center border-t-2 pb-4 border-cyan-400 grayscale hover:grayscale-0 duration-300">
        ®{new Date().getFullYear()} Created by rhodlib
      </div>
    </div>
  );
};

export default Footer;
