/* ============================= */
/* REWATOOL - COMPLETE CSS */
/* ============================= */

:root {
    /* Primary Colors */
    --primary-color: #1E40AF;
    --primary-dark: #1e3a8a;
    --primary-light: #3b82f6;
    
    /* Secondary Colors */
    --secondary-color: #7C3AED;
    --secondary-dark: #5b21b6;
    --secondary-light: #8b5cf6;
    
    /* Accent Colors */
    --accent-cyan: #06B6D4;
    --accent-green: #10B981;
    --accent-red: #DC2626;
    --accent-yellow: #F59E0B;
    
    /* Background Colors */
    --bg-dark: #0F172A;
    --bg-surface: #1E293B;
    --bg-light: #FFFFFF;
    --bg-gray: #F8FAFC;
    
    /* Text Colors */
    --text-primary: #1E293B;
    --text-secondary: #64748B;
    --text-light: #FFFFFF;
    --text-dark: #0F172A;
    
    /* Border Colors */
    --border-color: #E2E8F0;
    --border-dark: #334155;
    
    /* Shadow */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    
    /* Border Radius */
    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-full: 9999px;
    
    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-normal: 300ms ease;
    --transition-slow: 500ms ease;
}

[data-theme="dark"] {
    --bg-light: #0F172A;
    --bg-gray: #1E293B;
    --text-primary: #F1F5F9;
    --text-secondary: #94A3B8;
    --border-color: #334155;
}

/* Reset & Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-light);
    color: var(--text-primary);
    line-height: 1.6;
    transition: var(--transition-normal);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

/* Loading Screen */
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bg-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
}

.loader {
    text-align: center;
    color: var(--text-light);
}

.logo-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
    font-size: 2.5rem;
}

.logo-loader i {
    color: var(--primary-color);
    animation: spin 2s linear infinite;
}

.logo-text {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.progress-container {
    width: 300px;
    margin: 0 auto var(--spacing-xl);
}

.progress-bar {
    height: 8px;
    background: var(--bg-surface);
    border-radius: var(--radius-full);
    overflow: hidden;
    margin-bottom: var(--spacing-sm);
}

.progress-bar::after {
    content: '';
    display: block;
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    animation: loading 2s ease-in-out infinite;
}

.progress-text {
    font-size: 0.875rem;
    color: var(--text-secondary);
}

.loading-stats {
    display: flex;
    gap: var(--spacing-xl);
    justify-content: center;
}

.loading-stats .stat {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-size: 0.875rem;
}

.loading-stats .stat i {
    color: var(--accent-cyan);
}

/* Header Styles */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
    transition: var(--transition-normal);
}

[data-theme="dark"] .header {
    background: rgba(15, 23, 42, 0.95);
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-md) 0;
}

.logo {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    text-decoration: none;
}

.logo-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-icon i {
    font-size: 1.5rem;
    color: white;
}

.logo-text h1 {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
}

.logo-text p {
    font-size: 0.75rem;
    color: var(--text-secondary);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: var(--spacing-md);
}

.nav-menu li {
    position: relative;
}

.nav-menu a {
    text-decoration: none;
    color: var(--text-primary);
    font-weight: 500;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    transition: var(--transition-fast);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.nav-menu a:hover,
.nav-menu a.active {
    background: var(--bg-gray);
    color: var(--primary-color);
}

.nav-menu a i {
    font-size: 0.875rem;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: var(--bg-light);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: var(--spacing-md);
    min-width: 600px;
    box-shadow: var(--shadow-xl);
    display: none;
    z-index: 1000;
}

.dropdown:hover .dropdown-menu {
    display: block;
}

.dropdown-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);
}

.dropdown-col h4 {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-sm);
    padding-bottom: var(--spacing-sm);
    border-bottom: 1px solid var(--border-color);
}

.dropdown-col a {
    display: block;
    padding: var(--spacing-sm);
    color: var(--text-primary);
    text-decoration: none;
    border-radius: var(--radius-sm);
    transition: var(--transition-fast);
}

.dropdown-col a:hover {
    background: var(--bg-gray);
    color: var(--primary-color);
}

.dropdown-col a i {
    margin-right: var(--spacing-sm);
}

/* Header Controls */
.header-controls {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
}

.search-box {
    position: relative;
}

.search-box input {
    padding: 0.5rem 2.5rem 0.5rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-full);
    background: var(--bg-gray);
    color: var(--text-primary);
    width: 200px;
    transition: var(--transition-fast);
}

.search-box input:focus {
    outline: none;
    border-color: var(--primary-color);
    width: 300px;
}

.search-btn {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
}

.search-results {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--bg-light);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    margin-top: 0.5rem;
    box-shadow: var(--shadow-lg);
    display: none;
    z-index: 1000;
}

.language-selector select {
    padding: 0.5rem;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-gray);
    color: var(--text-primary);
    cursor: pointer;
}

.theme-toggle,
.user-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    background: var(--bg-gray);
    color: var(--text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-fast);
}

.theme-toggle:hover,
.user-btn:hover {
    background: var(--primary-color);
    color: white;
}

.user-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: var(--bg-light);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: var(--spacing-sm);
    min-width: 200px;
    box-shadow: var(--shadow-lg);
    display: none;
    z-index: 1000;
}

.user-menu:hover .user-dropdown {
    display: block;
}

.user-dropdown a {
    display: block;
    padding: 0.5rem 1rem;
    color: var(--text-primary);
    text-decoration: none;
    border-radius: var(--radius-sm);
    transition: var(--transition-fast);
}

.user-dropdown a:hover {
    background: var(--bg-gray);
    color: var(--primary-color);
}

.user-dropdown a i {
    margin-right: 0.5rem;
    width: 20px;
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--text-primary);
    cursor: pointer;
}

/* Mobile Navigation */
.mobile-nav {
    position: fixed;
    top: 0;
    left: -100%;
    width: 80%;
    max-width: 300px;
    height: 100%;
    background: var(--bg-light);
    border-right: 1px solid var(--border-color);
    transition: var(--transition-normal);
    z-index: 1001;
    overflow-y: auto;
}

.mobile-nav.active {
    left: 0;
}

.mobile-nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-md);
    border-bottom: 1px solid var(--border-color);
}

.mobile-nav-header .logo {
    font-size: 1.25rem;
    font-weight: 700;
}

.close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--text-primary);
    cursor: pointer;
}

.mobile-nav-content {
    padding: var(--spacing-md);
}

.mobile-nav-content a {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    color: var(--text-primary);
    text-decoration: none;
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-sm);
    transition: var(--transition-fast);
}

.mobile-nav-content a:hover {
    background: var(--bg-gray);
    color: var(--primary-color);
}

.mobile-nav-content a i {
    width: 20px;
}

/* Hero Section */
.hero {
    padding: 120px 0 80px;
    background: linear-gradient(135deg, rgba(30, 64, 175, 0.1), rgba(124, 58, 237, 0.1));
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-2xl);
    align-items: center;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: var(--spacing-md);
}

.highlight {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-xl);
}

.hero-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
}

.stat-card {
    background: var(--bg-light);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: var(--spacing-md);
    text-align: center;
    transition: var(--transition-normal);
}

.stat-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.stat-card i {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: var(--spacing-sm);
}

.stat-card h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: var(--spacing-xs);
}

.stat-card p {
    color: var(--text-secondary);
    font-size: 0.875rem;
}

.hero-buttons {
    display: flex;
    gap: var(--spacing-md);
    flex-wrap: wrap;
}

.btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: var(--radius-md);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    transition: var(--transition-fast);
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(30, 64, 175, 0.2);
}

.btn-secondary {
    background: var(--bg-gray);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
}

.btn-secondary:hover {
    background: var(--border-color);
}

.btn-outline {
    background: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
}

.btn-outline:hover {
    background: var(--primary-color);
    color: white;
}

.btn-small {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
}

.hero-visual {
    position: relative;
    height: 400px;
}

.floating-tools {
    position: relative;
    width: 100%;
    height: 100%;
}

.tool-float {
    position: absolute;
    width: 80px;
    height: 80px;
    background: var(--bg-light);
    border-radius: var(--radius-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-lg);
    animation: float 6s ease-in-out infinite;
}

.tool-float i {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 0.25rem;
}

.tool-float span {
    font-size: 0.75rem;
    color: var(--text-secondary);
}

.tool-float:nth-child(1) { top: 10%; left: 20%; animation-delay: 0s; }
.tool-float:nth-child(2) { top: 30%; right: 15%; animation-delay: 1s; }
.tool-float:nth-child(3) { top: 50%; left: 10%; animation-delay: 2s; }
.tool-float:nth-child(4) { bottom: 20%; right: 20%; animation-delay: 3s; }
.tool-float:nth-child(5) { bottom: 10%; left: 30%; animation-delay: 4s; }

/* AdSense Banners */
.adsense-banner {
    padding: var(--spacing-md) 0;
    background: var(--bg-gray);
}

/* Categories Section */
.categories {
    padding: var(--spacing-2xl) 0;
}

.section-header {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-subtitle {
    font-size: 1.125rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
}

.category-card {
    background: var(--bg-light);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    text-align: center;
    transition: var(--transition-normal);
    cursor: pointer;
}

.category-card:hover {
    transform: translateY(-10px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-xl);
}

.category-card i {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: var(--spacing-md);
}

.category-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
}

.category-card p {
    color: var(--text-secondary);
    font-size: 0.875rem;
    margin-bottom: var(--spacing-md);
}

.category-stats {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: var(--text-secondary);
}

.view-all {
    text-align: center;
}

/* Featured Tools */
.featured-tools {
    padding: var(--spacing-2xl) 0;
    background: var(--bg-gray);
}

.tools-carousel {
    display: flex;
    gap: var(--spacing-md);
    overflow-x: auto;
    padding: var(--spacing-md) 0;
    scrollbar-width: thin;
}

.tools-carousel::-webkit-scrollbar {
    height: 8px;
}

.tools-carousel::-webkit-scrollbar-track {
    background: var(--border-color);
    border-radius: var(--radius-full);
}

.tools-carousel::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: var(--radius-full);
}

.tool-slide {
    min-width: 350px;
    background: var(--bg-light);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-lg);
}

.tool-slide-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
}

.tool-slide-header i {
    font-size: 2.5rem;
    color: var(--primary-color);
}

.tool-slide-info h3 {
    font-size: 1.25rem;
    margin-bottom: var(--spacing-xs);
}

.tool-slide-rating {
    color: var(--accent-yellow);
    font-size: 0.875rem;
}

.tool-slide-features {
    list-style: none;
    margin-bottom: var(--spacing-md);
}

.tool-slide-features li {
    padding: var(--spacing-sm) 0;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.tool-slide-features li i {
    color: var(--accent-green);
    font-size: 0.875rem;
}

.tool-slide-stats {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing-md);
    padding: var(--spacing-md);
    background: var(--bg-gray);
    border-radius: var(--radius-md);
}

.tool-slide-stat {
    text-align: center;
}

.tool-slide-stat h4 {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: var(--spacing-xs);
}

.tool-slide-stat p {
    font-size: 0.75rem;
    color: var(--text-secondary);
}

/* All Tools Section */
.all-tools {
    padding: var(--spacing-2xl) 0;
}

.tools-filter {
    display: flex;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
    flex-wrap: wrap;
}

.tools-filter input,
.tools-filter select {
    padding: 0.75rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-light);
    color: var(--text-primary);
    flex: 1;
    min-width: 200px;
}

.tools-filter input:focus,
.tools-filter select:focus {
    outline: none;
    border-color: var(--primary-color);
}

.tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
}

.tool-card {
    background: var(--bg-light);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    transition: var(--transition-normal);
    cursor: pointer;
}

.tool-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-lg);
}

.tool-card-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
}

.tool-card-header i {
    font-size: 2rem;
    color: var(--primary-color);
}

.tool-card-body h4 {
    font-size: 1.125rem;
    margin-bottom: var(--spacing-sm);
}

.tool-card-body p {
    color: var(--text-secondary);
    font-size: 0.875rem;
    margin-bottom: var(--spacing-md);
}

.tool-features-badge {
    display: inline-block;
    background: rgba(30, 64, 175, 0.1);
    color: var(--primary-color);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-full);
    font-size: 0.75rem;
    font-weight: 500;
}

.pagination {
    display: flex;
    justify-content: center;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-xl);
}

.page-btn {
    width: 40px;
    height: 40px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-light);
    color: var(--text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: ce