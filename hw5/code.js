// PROMISE.ALL

async function fetchMultiple() {
    const urls = [
        'https://pokeapi.co/api/v2/berry',
        'https://pokeapi.co/api/v2/berry-firmness',
        'https://pokeapi.co/api/v2/berry-flavor'
    ];

    const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));

    try {
        const results = await Promise.all(fetchPromises);
        console.log(results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchMultiple();
// This function fetches data from multiple URLs concurrently using Promise.all.


// .allSettled

const urls = [
    'https://pokeapi.co/api/v2/berry',
    'https://pokeapi.co/api/v2/berry-firmness',
    'https://pokeapi.co/api/v2/berry-flavor'
];

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch from ${url}`);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }

}

const fetchAllData = async() => {
    const results = await Promise.allSettled(urls.map(url => fetchData(url)));

    results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log('Data:', result.value);
        } else {
            console.error('Error:', result.reason);
        }
    })
}

// fetchAllData();


// .race

const fetchFromApi1 = fetch('https://pokeapi.co/api/v2/berry').then(response => response.json());
const fetchFromApi2 = fetch('https://pokeapi.co/api/v2/berry-firmness').then(response => response.json());
const fetchFromApi3 = fetch('https://pokeapi.co/api/v2/berry-flavor').then(response => response.json());


Promise.race([fetchFromApi1, fetchFromApi2, fetchFromApi3])
    .then(data => {
        console.log('First resolved data:', data); 
    })
    .catch(error => {
        console.error('Error:', error);
    });


// .any

const fetchApi1 = fetch('https://pokeapi.co/api/v2/berry').then(response => response.json());
const fetchApi2 = fetch('https://pokeapi.co/api/v2/berry-firmness').then(response => response.json());
const fetchApi3 = fetch('https://pokeapi.co/api/v2/berry-flavor').then(response => response.json());

// Using Promise.any to get the first successful response
Promise.any([fetchApi1, fetchApi2, fetchApi3])
    .then(data => {
        console.log('First successful response data:', data);
    })
    .catch(error => {
        console.error('All promises rejected. Error:', error);
    });