import React, { useState } from "react";
import styles from "./CountriesTable.module.css";
import KeyboardArrowDownRounded from "@material-ui/icons/KeyboardArrowDownRounded";
import KeyboardArrowUpRounded from "@material-ui/icons/KeyboardArrowUpRounded";

const orderBy = (countries, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) =>
      a.population > b.population ? 1 : -1
    );
  }
  if (direction === "desc") {
    return [...countries].sort((a, b) =>
      a.population > b.population ? -1 : 1
    );
  }
  return countries;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }
  if (direction === "asc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    );
  }
};

const CountriesTable = ({ countries }) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();

  const orderCountries = orderBy(countries, "asc");

  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name}>
          <div>Name</div>
          <SortArrow />
        </button>

        <button className={styles.heading_population}>
          <div>Population</div>
          <SortArrow direction="asc" />
        </button>
      </div>
      {orderCountries.map((country) => (
        <div className={styles.row}>
          <div className={styles.name}>{country.name}</div>
          <div className={styles.population}>{country.population}</div>
        </div>
      ))}
    </div>
  );
};

export default CountriesTable;
