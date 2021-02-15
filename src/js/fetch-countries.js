import countryCardMarkup from '../templates/country-card.hbs';
import { errorOption, errorOptionNotFound } from './error-note.js';
import { error } from '@pnotify/core/dist/PNotify.js';
import 'lodash';

const refs = {
    inputRef: document.getElementById('country-input'),
    bodyRef: document.querySelector('body'),
    searchedListRef: document.querySelector('.search-result'),
    searchBoxRef: document.querySelector('.search-box'),
};

const debouncedFetchCountries = _.debounce(fetchCountries, 500)

refs.inputRef.addEventListener('input', event => debouncedFetchCountries(event.target.value));

function fetchCountries(searchQuery) {
    fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(response => response.json())
        .then((resultOfSearch) => buildMarkup(resultOfSearch))
        .catch(() => {
            error(errorOptionNotFound);
        })
};

function removeContent() { 
    refs.searchedListRef.innerHTML = '';
    refs.searchBoxRef.innerHTML = '';
}

function buildMarkup(countryList) {
    if (countryList.length > 10) {
        removeContent();
        error(errorOption);
    } else if (countryList.length === 1) {
        removeContent();
        const [{ name, capital, languages, population, flag }] = countryList;
        const formattedArray = { name, capital, languages, population, flag };
        refs.searchBoxRef.insertAdjacentHTML('beforeend', countryCardMarkup(formattedArray));
    } else { 
        removeContent();
        const arrayOfCountryNames = countryList.map(item => `<li>${item.name}</li>`);
        refs.searchedListRef.insertAdjacentHTML('beforeend', arrayOfCountryNames.join(''));
    }
}


