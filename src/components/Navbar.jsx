export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__container--left">
          <a href="#" className="el-logo">
            <img src="./logo-ic.png" alt="Logo" />
          </a>
          <a href="#" className="el-product">
            Courses
            <img src="./down-ic.png" alt="Down Icon" />
          </a>
          <a href="#" className="el-product">
            Programs
            <img src="./down-ic.png" alt="Down Icon" />
          </a>
        </div>
        <div className="navbar__container--right">
          <img
            className="el-explore"
            src="./search-icon.png"
            alt="Search Icon"
          />
          <a className="el-login" href="#login">
            Log in
          </a>
          <a className="el-user el-join" href="#join">
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}
