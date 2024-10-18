const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '503b895f6fmshe5e9bb15096ebbep13753ejsnc230d900d62f',
        'x-rapidapi-host': 'quotes15.p.rapidapi.com'
    }
};

// LOADING SCREEN
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none"; 
        const mainContent = document.getElementById("main-content");
        mainContent.classList.add("show"); 
        mainContent.style.display = "block"; 
    }, 4000); 
});







async function getQuote() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        Swal.fire({
            title: 'Your Quote',
            text: result.content,
            icon: 'info',
            confirmButtonText: 'OK',
            confirmButtonColor: '#081c29'
        });
    } catch (error) {
        console.error(error);
    }
}

document.getElementById('quoteButton').addEventListener('click', getQuote);


//ΕΜΦΑΝΙΣΗ ΜΕΝΟΥ ΣΕ ΚΙΝΗΤΑ

document.getElementById("hamburger").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active"); 
});

