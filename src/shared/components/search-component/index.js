import React, { useState, useEffect, useDebounce } from 'react';
import styles from './index.styl';
import Autosuggest from 'react-autosuggest';
// import { getByGoogle } from '../../services/auth-service'
import { searchBySongName } from '../../services/auth-service'

const debounce = require('lodash.debounce');
const throttle = require('lodash.throttle');


const SearchComponent = (props) => {
    const [suggestions, setSuggestions] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => { setSuggestions([]) }, []);

    const onSuggestionsFetchRequested = ({ value }) => 
        searchBySongName(value)
            .then(
                res => {
                    if (res.body) {
                        // debugger;
                        setSuggestions(res.body)
                    }
                }
            )

    const onSuggestionsClearRequested = () => {
        setSuggestions([])
    };


    const renderSuggestion = suggestion => (
        <div>
            {suggestion.text}
        </div>
    );


    return (
        <div className={styles.searchContainer}>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={suggestion => suggestion.name}
                renderSuggestion={renderSuggestion}
                inputProps={{
                    placeholder: '',
                    value,
                    onChange: (event, { newValue }) => setValue(newValue)
                }}
                theme={styles}
            />
        </div>
    )
}

export default SearchComponent;
