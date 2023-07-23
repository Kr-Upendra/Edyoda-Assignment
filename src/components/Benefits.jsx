export default function Benefits() {
  return (
    <div className="home__left">
      <div className="home__left--tagline">
        <h1 className="el-first">Access curated courses worth</h1>
        <h1 className="el-price-tag">
          <span className="el-rp">₹ </span>
          <span className="el-prevPrice">18,500</span> at just
          <span className="el-currPrice">
            <span className="el-rp"> ₹ </span>99{" "}
          </span>
          per year!
        </h1>
      </div>
      <div className="home__left--benefits">
        <ul className="el-bnlist">
          <li className="el-points">
            <img src="/open-book-ic.png" alt="Open Book" className="el-pImg" />
            <h3 className="el-pText">
              <span className="el-imp">100+ </span>
              Job relevant courses
            </h3>
          </li>
          <li className="el-points">
            <img src="/duration-ic.png" alt="duration" className="el-pImg" />
            <h3 className="el-pText">
              <span className="el-imp">20,000+ </span>
              Hours of content
            </h3>
          </li>
          <li className="el-points">
            <img src="/live-ic.png" alt="Live Icon" className="el-pImg" />
            <h3 className="el-pText">
              <span className="el-imp">Exclusive </span>
              webinar access
            </h3>
          </li>
          <li className="el-points">
            <img src="/topi-ic.png" alt="Graduated Icon" className="el-pImg" />
            <h3 className="el-pText">
              Scholarship worth <span className="el-imp">₹94,500</span>
            </h3>
          </li>
          <li className="el-points">
            <img src="/ads-ic.png" alt="No ads Icon" className="el-pImg" />
            <h3 className="el-pText">
              <span className="el-imp">Ad Free </span>
              learning experience
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
