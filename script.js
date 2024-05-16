// Sample data, replace with actual data extraction logic
const foundations = [
    {
        name: "Ethel S. Abbott Charitable Foundation",
        address: "P.O. Box 83286, Lincoln, NE",
        phone: "-",
        contact: "-",
        email: "ethelsabbottfoundation@gmail.com",
        website: "www.abbottfoundation.org",
        purpose: "Provides grants to 501(c)(3) organizations in Lincoln, Omaha, and Western Nebraska.",
        fields: "Education, Art, Environment, Human Services, Sports, Wellness Programs, Disadvantaged Children",
        application: "Visit the website for application information and the grant request form."
    },
    {
        name: "The Abel Foundation",
        address: "1815 Y Street, P.O. Box 80268, Lincoln, NE",
        phone: "402-434-1212",
        contact: "Max Rodenburg",
        email: "maxr@nebcoinc.com",
        website: "www.abelfoundation.org",
        purpose: "Provides financial support to non-profit organizations in communities where NEBCO operates.",
        fields: "Education, Civic/Community, Environment, Human Services, Arts & Culture",
        application: "Applications must use the Lincoln/Lancaster Grant-Makers Application Form. Reviewed within 1-3 months. Deadlines on website."
    },
    // Add more foundation data here
];

document.addEventListener('DOMContentLoaded', () => {
    populateFoundations();
    populateFields();
    populateGeographic();
    populateApplications();
});

function populateFoundations() {
    const list = document.getElementById('foundation-list');
    if (!list) return;

    foundations.forEach(foundation => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${foundation.name}</strong><br>
                        Address: ${foundation.address}<br>
                        Phone: ${foundation.phone}<br>
                        Contact: ${foundation.contact}<br>
                        Email: <a href="mailto:${foundation.email}">${foundation.email}</a><br>
                        Website: <a href="http://${foundation.website}" target="_blank">${foundation.website}</a><br>
                        Purpose: ${foundation.purpose}<br>
                        Fields: ${foundation.fields}<br>
                        Application: ${foundation.application}<br>`;
        list.appendChild(li);
    });
}

function populateFields() {
    const container = document.getElementById('fields-container');
    if (!container) return;

    const fields = {};
    foundations.forEach(foundation => {
        foundation.fields.split(', ').forEach(field => {
            if (!fields[field]) fields[field] = [];
            fields[field].push(foundation);
        });
    });

    for (const field in fields) {
        const fieldDiv = document.createElement('div');
        fieldDiv.innerHTML = `<h3>${field}</h3>`;
        const ul = document.createElement('ul');
        fields[field].forEach(foundation => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${foundation.name}</strong><br>
                            Address: ${foundation.address}<br>
                            Phone: ${foundation.phone}<br>
                            Contact: ${foundation.contact}<br>
                            Email: <a href="mailto:${foundation.email}">${foundation.email}</a><br>
                            Website: <a href="http://${foundation.website}" target="_blank">${foundation.website}</a><br>
                            Purpose: ${foundation.purpose}<br>
                            Application: ${foundation.application}<br>`;
            ul.appendChild(li);
        });
        fieldDiv.appendChild(ul);
        container.appendChild(fieldDiv);
    }
}

function populateGeographic() {
    const container = document.getElementById('geographic-container');
    if (!container) return;

    // Assuming geographic data is available, populate accordingly
    // Placeholder logic for demonstration
    const areas = {
        "Omaha": foundations.filter(foundation => foundation.address.includes("Omaha")),
        "Lincoln": foundations.filter(foundation => foundation.address.includes("Lincoln")),
        // Add more geographic areas as needed
    };

    for (const area in areas) {
        const areaDiv = document.createElement('div');
        areaDiv.innerHTML = `<h3>${area}</h3>`;
        const ul = document.createElement('ul');
        areas[area].forEach(foundation => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${foundation.name}</strong><br>
                            Address: ${foundation.address}<br>
                            Phone: ${foundation.phone}<br>
                            Contact: ${foundation.contact}<br>
                            Email: <a href="mailto:${foundation.email}">${foundation.email}</a><br>
                            Website: <a href="http://${foundation.website}" target="_blank">${foundation.website}</a><br>
                            Purpose: ${foundation.purpose}<br>
                            Application: ${foundation.application}<br>`;
            ul.appendChild(li);
        });
        areaDiv.appendChild(ul);
        container.appendChild(areaDiv);
    }
}

function populateApplications() {
    const container = document.getElementById('application-container');
    if (!container) return;

    foundations.forEach(foundation => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${foundation.name}</h3>
                        <p>${foundation.application}</p>`;
        container.appendChild(div);
    });
}
