async function fetchWebsiteData(url) {
    try {
        const apiKey = '347750138580a5054856eb76ae116925';  // Your API Key from ScraperAPI
        const response = await fetch(`http://api.scraperapi.com?api_key=${apiKey}&url=${encodeURIComponent(url)}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Website Data:', data);
        
        // Optionally, display the result on the webpage
        displayResult(data);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayResult(data) {
    // Create a small text bubble to display the result
    const resultBubble = document.createElement('div');
    resultBubble.classList.add('result-bubble');
    resultBubble.textContent = `Title: ${data.title}, Description: ${data.description}`;

    // Style for the bubble (CSS for bubble can be added in style.css)
    resultBubble.style.position = 'fixed';
    resultBubble.style.bottom = '20px';
    resultBubble.style.left = '50%';
    resultBubble.style.transform = 'translateX(-50%)';
    resultBubble.style.backgroundColor = '#333';
    resultBubble.style.color = '#00FF00';
    resultBubble.style.padding = '10px 15px';
    resultBubble.style.borderRadius = '8px';
    resultBubble.style.boxShadow = '0 0 10px rgb(0, 255, 0)';
    resultBubble.style.fontSize = '14px';
    resultBubble.style.maxWidth = '300px';
    resultBubble.style.textAlign = 'center';

    // Append the bubble to the container
    document.body.appendChild(resultBubble);

    // Remove the bubble after some time
    setTimeout(() => {
        document.body.removeChild(resultBubble);
    }, 5000); // 5 seconds
}

// Adding an event listener to trigger the function on Enter key press
document.getElementById('search-bar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = document.getElementById('search-bar').value;
        if (query.trim() !== '') {
            fetchWebsiteData(query);
        }
    }
});
