interface Props {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const DarkModeSection = ({ toggleTheme, isDarkMode }: Props) => {
  return (
    <div className="p-3 pt-5 p-lg-5 d-flex d-column">
      <div className="ml-auto">
        <label
          htmlFor="theme-toggle"
          className="mode-label text-uppercase mb-0 mt-2 mr-2"
        >
          Dark Mode
        </label>
        <label className="switch">
          <input
            type="checkbox"
            id="theme-toggle"
            checked={isDarkMode}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default DarkModeSection;
