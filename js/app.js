fetch('data/config.json')
    .then(response => response.json())
    .then(data => {
        // Populate Skills
        const skillsList = document.getElementById('skills-list');
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        // Populate Projects
        const projectsContainer = document.getElementById('projects-container');
        data.projects.forEach(project => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
            projectsContainer.appendChild(div);
        });
    });

