// ============================================
// FILTERS.JS - Фильтрация проектов
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initProjectsFilter();
    loadProjects();
    loadBlogPosts();
});

// Данные проектов
// Данные проектов
const projectsData = [
    {
        id: 1,
        title: 'Современный коттедж в пригороде',
        category: 'house',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format',
        location: 'Киевская область',
        area: '250 м²',
        year: '2024'
    },
    {
        id: 2,
        title: 'Таунхаус премиум-класса',
        category: 'townhouse',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format',
        location: 'Киев',
        area: '180 м²',
        year: '2023'
    },
    {
        id: 3,
        title: 'Кирпичный дом в классическом стиле',
        category: 'house',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format',
        location: 'Львовская область',
        area: '320 м²',
        year: '2024'
    },
    {
        id: 4,
        title: 'Дизайнерский ремонт квартиры',
        category: 'repair',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format',
        location: 'Киев',
        area: '120 м²',
        year: '2024'
    },
    {
        id: 5,
        title: 'Эко-дом из газобетона',
        category: 'house',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format',
        location: 'Одесская область',
        area: '210 м²',
        year: '2023'
    },
    {
        id: 6,
        title: 'Комплекс таунхаусов',
        category: 'townhouse',
        image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format',
        location: 'Киевская область',
        area: '450 м²',
        year: '2024'
    }
];

// Данные блога
const blogData = [
    {
        id: 1,
        title: 'Как выбрать участок для строительства дома',
        excerpt: 'Разбираем ключевые моменты при выборе земли под застройку...',
        date: '15 марта 2025',
        readTime: '5 мин',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format'
    },
    {
        id: 2,
        title: 'Современные материалы для строительства: что выбрать?',
        excerpt: 'Сравнение кирпича, газобетона и монолита...',
        date: '28 февраля 2025',
        readTime: '7 мин',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format'
    },
    {
        id: 3,
        title: 'Этапы строительства дома под ключ',
        excerpt: 'От фундамента до отделки — полный гид по строительству...',
        date: '10 февраля 2025',
        readTime: '6 мин',
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format'
    }
];

function initProjectsFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!filterBtns.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Обновляем активный класс
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            filterProjects(filter);
        });
    });
}

function filterProjects(filter) {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === filter);
    
    renderProjects(filteredProjects);
}

function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        renderProjects(projectsData);
    }
}

function renderProjects(projects) {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" data-aos="fade-up" data-aos-delay="100">
            <div class="project-card__img">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-card__overlay">
                    <a href="project-detail.html?id=${project.id}" class="link-arrow">Смотреть проект</a>
                </div>
            </div>
            <div class="project-card__info">
                <h3>${project.title}</h3>
                <p>📍 ${project.location} | 📐 ${project.area} | 📅 ${project.year}</p>
            </div>
        </div>
    `).join('');
}

function loadBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    if (blogGrid) {
        blogGrid.innerHTML = blogData.map(post => `
            <div class="blog-card" data-aos="fade-up" data-aos-delay="100">
                <div class="blog-card__img">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="blog-card__info">
                    <div class="blog-card__meta">
                        <span><i class="far fa-calendar"></i> ${post.date}</span>
                        <span><i class="far fa-clock"></i> ${post.readTime}</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <a href="blog-detail.html?id=${post.id}" class="link-arrow">Читать далее <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `).join('');
    }
}