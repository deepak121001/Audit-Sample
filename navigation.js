/**
 * Navigation helper for UI Code Insight Sample Projects
 * Provides additional functionality for the samples index page
 */

class SamplesNavigation {
    constructor() {
        this.currentProject = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadProjectStats();
        this.setupSearch();
    }

    setupEventListeners() {
        // Add click tracking for all report links
        document.querySelectorAll('a[href*="report"]').forEach(link => {
            link.addEventListener('click', (e) => {
                this.trackReportAccess(e.target.href);
            });
        });

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModals();
            }
        });

        // Add project card interactions
        document.querySelectorAll('.bg-white').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.tagName !== 'A') {
                    const dashboardLink = card.querySelector('a[href*="index.html"]');
                    if (dashboardLink) {
                        window.open(dashboardLink.href, '_blank');
                    }
                }
            });
        });
    }

    trackReportAccess(url) {
        console.log('📊 Report accessed:', url);
        
        // You can add analytics tracking here
        const reportType = this.getReportTypeFromUrl(url);
        const projectName = this.getProjectNameFromUrl(url);
        
        console.log(`📈 Analytics: ${projectName} - ${reportType} accessed`);
        
        // Store in localStorage for demo purposes
        const accessHistory = JSON.parse(localStorage.getItem('reportAccessHistory') || '[]');
        accessHistory.push({
            url,
            project: projectName,
            reportType,
            timestamp: new Date().toISOString()
        });
        
        // Keep only last 50 entries
        if (accessHistory.length > 50) {
            accessHistory.splice(0, accessHistory.length - 50);
        }
        
        localStorage.setItem('reportAccessHistory', JSON.stringify(accessHistory));
    }

    getReportTypeFromUrl(url) {
        if (url.includes('eslint-report')) return 'ESLint';
        if (url.includes('stylelint-report')) return 'Stylelint';
        if (url.includes('security-audit')) return 'Security Audit';
        if (url.includes('accessibility-audit')) return 'Accessibility Audit';
        if (url.includes('performance-audit')) return 'Performance Audit';
        if (url.includes('testing-audit')) return 'Testing Audit';
        if (url.includes('dependency-audit')) return 'Dependency Audit';
        if (url.includes('comprehensive-audit')) return 'Comprehensive Audit';
        if (url.includes('npm-report')) return 'NPM Report';
        if (url.includes('index.html')) return 'Dashboard';
        return 'Unknown';
    }

    getProjectNameFromUrl(url) {
        if (url.includes('react-sample')) return 'React Sample';
        if (url.includes('node-sample')) return 'Node.js Sample';
        if (url.includes('vanilla-sample')) return 'Vanilla JS Sample';
        return 'Unknown Project';
    }

    loadProjectStats() {
        // Load and display project statistics
        const stats = this.calculateProjectStats();
        this.updateStatisticsDisplay(stats);
    }

    calculateProjectStats() {
        const projects = ['react-sample', 'node-sample', 'vanilla-sample'];
        const stats = {
            totalProjects: projects.length,
            totalReports: 0,
            totalIssues: 0,
            reportTypes: new Set()
        };

        projects.forEach(project => {
            try {
                // This would normally fetch from actual report files
                // For demo purposes, we'll use estimated numbers
                stats.totalReports += 8; // Average reports per project
                stats.totalIssues += 25; // Average issues per project
                
                ['ESLint', 'Stylelint', 'Security', 'Accessibility', 'Performance', 'Testing', 'Dependency', 'Comprehensive'].forEach(type => {
                    stats.reportTypes.add(type);
                });
            } catch (error) {
                console.warn(`Could not load stats for ${project}:`, error);
            }
        });

        return stats;
    }

    updateStatisticsDisplay(stats) {
        const statsElements = document.querySelectorAll('.text-2xl.font-bold');
        if (statsElements.length >= 4) {
            statsElements[0].textContent = stats.totalProjects;
            statsElements[1].textContent = stats.reportTypes.size + '+';
            statsElements[2].textContent = stats.totalIssues + '+';
            statsElements[3].textContent = '100%';
        }
    }

    setupSearch() {
        // Add search functionality if needed
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search reports...';
        searchInput.className = 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent';
        
        searchInput.addEventListener('input', (e) => {
            this.filterReports(e.target.value);
        });

        // Add search to the page if needed
        const header = document.querySelector('header');
        if (header) {
            const searchContainer = document.createElement('div');
            searchContainer.className = 'mt-4';
            searchContainer.appendChild(searchInput);
            header.appendChild(searchContainer);
        }
    }

    filterReports(searchTerm) {
        const cards = document.querySelectorAll('.bg-white');
        const term = searchTerm.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const links = Array.from(card.querySelectorAll('a')).map(a => a.textContent.toLowerCase());

            const matches = title.includes(term) || 
                          description.includes(term) || 
                          links.some(link => link.includes(term));

            card.style.display = matches ? 'block' : 'none';
        });
    }

    closeModals() {
        // Close any open modals
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    }

    // Utility method to get report summary
    async getReportSummary(projectName, reportType) {
        try {
            const response = await fetch(`${projectName}/report/${reportType}-report.json`);
            const data = await response.json();
            return {
                totalIssues: data.issues?.length || 0,
                severity: this.calculateSeverity(data),
                lastUpdated: new Date().toLocaleDateString()
            };
        } catch (error) {
            console.warn(`Could not load report summary for ${projectName}/${reportType}:`, error);
            return null;
        }
    }

    calculateSeverity(data) {
        if (!data.issues) return 'Unknown';
        
        const highIssues = data.issues.filter(issue => issue.severity === 'high').length;
        const mediumIssues = data.issues.filter(issue => issue.severity === 'medium').length;
        const lowIssues = data.issues.filter(issue => issue.severity === 'low').length;

        if (highIssues > 0) return 'High';
        if (mediumIssues > 0) return 'Medium';
        if (lowIssues > 0) return 'Low';
        return 'None';
    }

    // Export project data for external use
    exportProjectData() {
        const projects = ['react-sample', 'node-sample', 'vanilla-sample'];
        const exportData = {
            projects: projects.map(project => ({
                name: project,
                reports: this.getAvailableReports(project),
                sourceFiles: this.getSourceFiles(project)
            })),
            generatedAt: new Date().toISOString(),
            version: '1.0.0'
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = 'ui-code-insight-samples-export.json';
        link.click();
    }

    getAvailableReports(project) {
        const reportTypes = [
            'eslint', 'stylelint', 'security-audit', 'accessibility-audit',
            'performance-audit', 'testing-audit', 'dependency-audit', 'comprehensive-audit'
        ];

        return reportTypes.map(type => ({
            type,
            url: `${project}/report/${type}-report.json`,
            dashboard: `${project}/report/index.html`
        }));
    }

    getSourceFiles(project) {
        const fileTypes = {
            'react-sample': ['src/App.js', 'src/App.css'],
            'node-sample': ['src/index.js'],
            'vanilla-sample': ['src/index.js', 'css/styles.css', 'index.html']
        };

        return fileTypes[project] || [];
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.samplesNavigation = new SamplesNavigation();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SamplesNavigation;
} 