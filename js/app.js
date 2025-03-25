// Utility functions
const createElement = (tag, className, content) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.textContent = content;
    return element;
};

// Animate text
const animateText = (element, text) => {
    let index = 0;
    element.textContent = '';
    return setInterval(() => {
        element.textContent += text[index];
        index = (index + 1) % text.length;
    }, 100);
};

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data/config.json');
        const data = await response.json();

        // Set hero text
        const heroTitle = document.querySelector('.hero h1');
        animateText(heroTitle, `Hi, I'm ${data.name}`);

        // Populate skills with animation
        const skillsList = document.getElementById('skills-list');
        data.skills.forEach((skill, index) => {
            const li = createElement('li', '', skill);
            li.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
            skillsList.appendChild(li);
        });

        // Populate projects with cards
        const projectsContainer = document.getElementById('projects-container');
        data.projects.forEach(project => {
            const card = createElement('div', 'project-card');
            card.innerHTML = `
                <div class="project-content">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <div class="project-links">
                        <a href="${project.link}" target="_blank" rel="noopener">View Project</a>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(card);
        });

        // Set copyright year
        document.getElementById('year').textContent = new Date().getFullYear();

    } catch (error) {
        console.error('Error loading data:', error);
    }
});

// Form handling
document.getElementById('contact-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    // Add your form submission logic here
});

