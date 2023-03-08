

import React from "react";
import css from './Styles.module.css'
import PropTypes from "prop-types";

export const Filter = ({ value, filterName }) => (
    <label htmlFor="">
        <h2>Find contacts by name</h2>
        <input
            className={css.input}
            type="text"
            value={value}
            onChange={filterName}
        ></input>
    </label>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    filterName: PropTypes.func.isRequired,
}


