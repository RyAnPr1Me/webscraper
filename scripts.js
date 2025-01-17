// Function to fetch website data
async function fetchWebsiteData(url) {
    try {
        const apiKey = '347750138580a5054856eb76ae116925';  // API Key from ScraperAPI
        const response = await fetch(`http://api.scraperapi.com?api_key=${apiKey}&url=${encodeURIComponent(url)}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Website Data:', data);
        
        // Display the fetched data on the webpage
        displayResult(data);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display the result in a styled bubble
function displayResult(data) {
    // Create a div element for the result bubble
    const resultBubble = document.createElement('div');
    resultBubble.classList.add('result-bubble');

    // Populate the bubble with the fetched data
    resultBubble.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.description}</p>
    `;

    // Append the bubble to the body
    document.body.appendChild(resultBubble);

    // Style for the bubble (CSS should complement this)
    resultBubble.style.position = 'fixed';
    resultBubble.style.bottom = '20px';
    resultBubble.style.left = '50%';
    resultBubble.style.transform = 'translateX(-50%)';
    resultBubble.style.backgroundColor = '#00FF00';  // Bright green
    resultBubble.style.color = '#FFFFFF';
    resultBubble.style.padding = '10px 15px';
    resultBubble.style.borderRadius = '8px';
    resultBubble.style.boxShadow = '0 0 10px rgb(0, 255, 0)';
    resultBubble.style.fontSize = '14px';
    resultBubble.style.maxWidth = '300px';
    resultBubble.style.textAlign = 'center';

    // Remove the bubble after 5 seconds
    setTimeout(() => {
        document.body.removeChild(resultBubble);
    }, 5000); // 5 seconds
}

// Event listener to trigger fetching data on Enter key press
document.getElementById('search-bar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = document.getElementById('search-bar').value.trim();
        if (query !== '') {
            fetchWebsiteData(query);
        }
    }
});
