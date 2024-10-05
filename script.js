// randomuser.me API lekérése
document.addEventListener("DOMContentLoaded", function() {
    fetch('https://randomuser.me/api/?results=6')
        .then(response => response.json())
        .then(data => {
            const portfolioContainer = document.getElementById('portfolio-container');
            let portfolioHTML = '';

            data.results.forEach(user => {
                portfolioHTML += `
                    <div class="portfolio-item">
                        <img src="${user.picture.large}" alt="${user.name.first}">
                        <h3>${user.name.first} ${user.name.last}</h3>
                        <p>Ország: ${user.location.country}</p>
                        <p>E-mail: ${user.email}</p>
                    </div>
                `;
            });

            portfolioContainer.innerHTML = portfolioHTML;
        })
        .catch(error => console.error('Error fetching data: ', error));
});
