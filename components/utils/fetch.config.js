const url = 'https://hn.algolia.com/api/v1/search?';

export const errorHandler = (response) => {
    if (!response.ok) {
      return { error: response.statusText, errorCode: response.status };
    }
    return response.json();
};

export const fetchParams = ({ search, page, hitsPerPage }) => {
    return fetch(`${url}query=${search}&page=${page}&hitsPerPage=${hitsPerPage}`, { method: 'GET' })
    .then(errorHandler)
    .then((response) => { return response; })
    .catch((error) => { return { error }; });
};