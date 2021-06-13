const baseUrl = process.env.REACT_APP_CAT_WIKI_API_URL;

export const fetchCatWiki = (endpoint, method = 'GET', params) => {

    const url = `${baseUrl}/${endpoint}`;

    let endUrl = new URL(url);

    Object.keys(params).forEach(key => endUrl.searchParams.append(key, params[key]));

    if (method === 'GET') {
        return fetch(endUrl, {
            method,
            headers: {
                'x-api-key': 'DEMO-API-KEY'
            }
        });
    } 
}