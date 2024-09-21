// "use client";

// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import styles from "./index.module.css";

// const Search: React.FC = () => {
//   return (
//     <section className={styles.aa_advance_search}>
//       <div className={styles.container}>
//         <div className={styles.aa_advance_search_area}>
//           <div className={styles.form}>
//             <div className={styles.aa_advance_search_top}>
//               <div className={styles.row}>
//                 <div className="col-md-4">
//                   <div className={styles.aa_single_advance_search}>
//                     <input
//                       type="text"
//                       placeholder="Type Your Location"
//                       style={{ zIndex: 10, position: "relative" }}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-2">
//                   <div className={styles.aa_single_advance_search}>
//                     <select>
//                       <option value="0" defaultValue="true">
//                         Category
//                       </option>
//                       <option value="1">Rent</option>
//                       <option value="2">Buy</option>
//                       <option value="3">Sell</option>
//                       <option value="4">Lease</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className={styles.aa_single_advance_search}>
//                     <select>
//                       <option value="0" defaultValue="true">
//                         Rooms
//                       </option>
//                       <option value="1">S+1</option>
//                       <option value="2">S+2</option>
//                       <option value="3">S+3</option>
//                       <option value="4">S+4</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className={styles.aa_single_advance_search}>
//                     <select>
//                       <option value="0" defaultValue="true">
//                         Type
//                       </option>
//                       <option value="1">Apartment</option>
//                       <option value="2">Duplex</option>
//                       <option value="3">Single-family Home</option>
//                       <option value="4">Townhouse</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className={styles.aa_single_advance_search}>
//                     <input
//                       className={styles.aa_search_btn}
//                       type="submit"
//                       value="Search"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.aa_advance_search_bottom}>
//               <div className={styles.row}>
//                 <div className="col-md-6">
//                   <div className={styles.aa_single_filter_search}>
//                     <span>AREA (SQ)</span>
//                     <span>FROM</span>
//                     <span className={styles.example_val}>30.00</span>
//                     <span>TO</span>
//                     <span className={styles.example_val}>100.00</span>
//                     <div className={styles.aa_sqrfeet_range}></div>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className={styles.aa_single_filter_search}>
//                     <span>PRICE ($)</span>
//                     <span>FROM</span>
//                     <span className={styles.example_val}>30.00</span>
//                     <span>TO</span>
//                     <span className={styles.example_val}>100.00</span>
//                     <div className={styles.aa_price_range}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Search;
import React, { useState } from "react";
import styles from "./index.module.css";

const SearchFilter: React.FC = () => {
  // States for sliders
  const [areaFrom, setAreaFrom] = useState(200);
  const [areaTo, setAreaTo] = useState(700);
  const [priceFrom, setPriceFrom] = useState(200);
  const [priceTo, setPriceTo] = useState(700);

  return (
    <div className={styles.bodyy}>
      <div className={styles.search_container}>
        <input
          type="text"
          placeholder="Type Your Location"
          className={styles.input_field}
        />
        <select className={styles.dropdown}>
          <option>Category</option>
          <option>House</option>
          <option>Apartment</option>
        </select>
        <select className={styles.dropdown}>
          <option>Rooms</option>
          <option>1</option>
          <option>2</option>
          <option>3+</option>
        </select>
        <select className={styles.dropdown}>
          <option>Type</option>
          <option>Sale</option>
          <option>Rent</option>
        </select>
        <button className={styles.search_btn}>SEARCH</button>
      </div>

      <div className={styles.range_container}>
        {/* Area Slider */}
        <div className={styles.range_slider}>
          <label>AREA (SQ)</label>
          <div className="range">
            <span>FROM</span>
            <input
              type="range"
              min={200}
              max={700}
              value={areaFrom}
              onChange={(e) => setAreaFrom(Number(e.target.value))}
              className="slider"
            />
            <span>{areaFrom.toFixed(2)}</span>
            <span>TO</span>
            <input
              type="range"
              min={200}
              max={700}
              value={areaTo}
              onChange={(e) => setAreaTo(Number(e.target.value))}
              className="slider"
            />
            <span>{areaTo.toFixed(2)}</span>
          </div>
        </div>

        {/* Price Slider */}
        <div className={styles.range_slider}>
          <label>PRICE ($)</label>
          <div className="range">
            <span>FROM</span>
            <input
              type="range"
              min={200}
              max={700}
              value={priceFrom}
              onChange={(e) => setPriceFrom(Number(e.target.value))}
              className="slider"
            />
            <span>{priceFrom.toFixed(2)}</span>
            <span>TO</span>
            <input
              type="range"
              min={200}
              max={700}
              value={priceTo}
              onChange={(e) => setPriceTo(Number(e.target.value))}
              className="slider"
            />
            <span>{priceTo.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
