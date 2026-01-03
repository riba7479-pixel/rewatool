// REWATOOL - Complete JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Hide Loading
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1000);
    
    // Data
    const categories = [
        { id: 1, name: "AI Tools", icon: "🤖", count: 35 },
        { id: 2, name: "PDF Tools", icon: "📄", count: 25 },
        { id: 3, name: "Image Tools", icon: "🖼️", count: 40 },
        { id: 4, name: "Video Tools", icon: "🎬", count: 30 },
        { id: 5, name: "Audio Tools", icon: "🎵", count: 20 },
        { id: 6, name: "Text Tools", icon: "📝", count: 35 },
        { id: 7, name: "Web Tools", icon: "🌐", count: 25 },
        { id: 8, name: "Business Tools", icon: "💼", count: 20 },
        { id: 9, name: "Design Tools", icon: "🎨", count: 30 },
        { id: 10, name: "Security Tools", icon: "🔒", count: 15 },
        { id: 11, name: "Calculator Tools", icon: "🧮", count: 25 },
        { id: 12, name: "Converter Tools", icon: "🔄", count: 20 }
    ];
    
    const tools = [
        { id: 1, name: "AI Image Generator", category: "AI Tools", rating: 4.9 },
        { id: 2, name: "PDF to Word Converter", category: "PDF Tools", rating: 4.8 },
        { id: 3, name: "Video Compressor", category: "Video Tools", rating: 4.7 },
        { id: 4, name: "Audio Editor Pro", category: "Audio Tools", rating: 4.6 },
        { id: 5, name: "Text Summarizer", category: "Text Tools", rating: 4.5 },
        { id: 6, name: "Password Generator", category: "Security Tools", rating: 4.8 },
        { id: 7, name: "Color Picker", category: "Design Tools", rating: 4.4 },
        { id: 8, name: "QR Code Generator", category: "Business Tools", rating: 4.7 },
        { id: 9, name: "Image Compressor", category: "Image Tools", rating: 4.6 },
        { id: 10, name: "Unit Converter", category: "Converter Tools", rating: 4.8 },
        { id: 11, name: "HTML Validator", category: "Web Tools", rating: 4.3 },
        { id: 12, name: "BMI Calculator", category: "Calculator Tools", rating: 4.5 }
    ];
    
    // Add more tools
    for (let i = 13; i <= 50; i++) {
        const cat = categories[Math.floor(Math.random() * categories.length)];
        tools.push({
            id: i,
            name: `${cat.name.split(' ')[0]} Tool ${i}`,
            category: cat.name,
            rating: (Math.random() * 0.5 + 4.3).toFixed(1)
        });
    }
    
    // Initialize Categories
    function initCategories() {
        const grid = document.getElementById('categoryGrid');
        if (!grid) return;
        
        categories.forEach(cat => {
            const div = document.createElement('div');
            div.className = 'category-card';
            div.innerHTML = `
                <div class="category-icon">${cat.icon}</div>
                <h3>${cat.name}</h3>
                <p>${cat.count}+ Tools</p>
                <button class="btn small" onclick="filterByCategory('${cat.name}')">Explore</button>
            `;
            grid.appendChild(div);
        });
        
        // Populate category select
        const select = document.getElementById('categorySelect');
        if (select) {
            categories.forEach(cat => {
                const option = document.createElement('option');
                option.value = cat.name;
                option.textContent = `${cat.name} (${cat.count})`;
                select.appendChild(option);
            });
        }
    }
    
    // Initialize Tools
    function initTools() {
        renderTools();
        
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                renderTools(this.value);
            });
        }
        
        // Category filter
        const categorySelect = document.getElementById('categorySelect');
        if (categorySelect) {
            categorySelect.addEventListener('change', function() {
                renderTools(searchInput?.value || '', this.value);
            });
        }
        
        // Load more button
        const loadMoreBtn = document.getElementById('loadMore');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', function() {
                // Add more tools
                for (let i = tools.length + 1; i <= tools.length + 12; i++) {
                    const cat = categories[Math.floor(Math.random() * categories.length)];
                    tools.push({
                        id: i,
                        name: `Tool ${i}`,
                        category: cat.name,
                        rating: (Math.random() * 0.5 + 4.3).toFixed(1)
                    });
                }
                renderTools(searchInput?.value || '', categorySelect?.value || '');
            });
        }
    }
    
    // Render Tools
    function renderTools(search = '', category = '') {
        const grid = document.getElementById('toolsGrid');
        if (!grid) return;
        
        let filtered = tools;
        
        if (search) {
            filtered = filtered.filter(tool => 
                tool.name.toLowerCase().includes(search.toLowerCase()) ||
                tool.category.toLowerCase().includes(search.toLowerCase())
            );
        }
        
        if (category) {
            filtered = filtered.filter(tool => tool.category === category);
        }
        
        grid.innerHTML = '';
        
        filtered.slice(0, 12).forEach(tool => {
            const div = document.createElement('div');
            div.className = 'tool-card';
            div.innerHTML = `
                <div class="tool-icon">🛠️</div>
                <h3>${tool.name}</h3>
                <p>${tool.category}</p>
                <div class="rating">${'★'.repeat(Math.floor(tool.rating))} ${tool.rating}</div>
                <button class="btn small" onclick="openTool(${tool.id})">Open Tool</button>
            `;
            grid.appendChild(div);
        });
        
        // Update load more button visibility
        const loadMoreBtn = document.getElementById('loadMore');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = filtered.length > 12 ? 'block' : 'none';
        }
    }
    
    // Filter by Category
    window.filterByCategory = function(category) {
        const select = document.getElementById('categorySelect');
        if (select) {
            select.value = category;
            renderTools('', category);
        }
        scrollToSection('tools');
    };
    
    // Open Tool
    window.openTool = function(toolId) {
        const tool = tools.find(t => t.id === toolId);
        if (tool) {
            alert(`Opening ${tool.name}\n\nThis is a demo. In real website, the tool would open here.`);
        }
    };
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your message has been sent.');
            this.reset();
        });
    }
    
    // Mobile Menu
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'white';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }
        });
    }
    
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll to Section
    window.scrollToSection = function(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };
    
    // Initialize Everything
    initCategories();
    initTools();
    
    // Auto-slide Featured Tools
    let slideIndex = 0;
    function autoSlide() {
        const slides = document.querySelectorAll('.slide');
        if (slides.length > 0) {
            slideIndex = (slideIndex + 1) % slides.length;
            const container = document.querySelector('.tools-slider');
            if (container) {
                container.style.transform = `translateX(-${slideIndex * 100}%)`;
            }
        }
    }
    setInterval(autoSlide, 3000);
    
    console.log('REWATOOL Website Loaded Successfully! 🚀');
});