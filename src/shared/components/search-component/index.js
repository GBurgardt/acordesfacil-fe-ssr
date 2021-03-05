import React, { useState, useEffect } from 'react';
import styles from './index.styl';
import Autosuggest from 'react-autosuggest';
import { getByGoogle } from '../../services/auth-service'

const SearchComponent = (props) => {
    const [suggestions, setSuggestions] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        setSuggestions([])
    }, []);

    // const getSuggestions = objectValue => {
    //     const { href } = objectValue;
    //     debugger;

    //     const inputValue = href.trim().toLowerCase();
    //     const inputLength = inputValue.length;

    //     return inputLength === 0 ? [] : languages.filter(lang =>
    //         lang.name.toLowerCase().slice(0, inputLength) === inputValue
    //     );
    // };

    const getSuggestionValue = suggestion => suggestion.name;

    const onSuggestionsFetchRequested = ({ value }) => {

        getByGoogle(value)
            .then(
                res => {
                    if (res.body) {
                        setSuggestions(res.body)
                    }
                }
            )
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([])
    };


    const renderSuggestion = suggestion => (
        <div>
            {suggestion.text}
        </div>
    );

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
        placeholder: 'Type a programming language',
        value,
        onChange: (event, { newValue }) => setValue(newValue)
    };

    return (
        <div>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                theme={styles}
            />
        </div>
    )
}

export default SearchComponent;
