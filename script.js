document.addEventListener('DOMContentLoaded', function() {
    // Handle all buy buttons
    const buyButtons = document.querySelectorAll('.buy-btn');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            const whatsappNumber = '+2348134758425';
            const message = `Hello Patria Doors, I'm interested in your ${productName}. Please send me more details and pricing information.`;
            
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });

    // Simple search functionality
    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-button');
    const productCards = document.querySelectorAll('.product-card');
    
    if (searchButton && searchBar) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchBar.value.toLowerCase();
            
            productCards.forEach(card => {
                const productName = card.querySelector('h3').textContent.toLowerCase();
                if (productName.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
        
        // Also search when pressing Enter
        searchBar.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
    
        const heroSlideshow = document.querySelector('.hero-slideshow');
        if (heroSlideshow) {
            const slides = document.querySelectorAll('.hero-slide');
            let currentSlide = 0;
            const slideCount = slides.length;
            
            // Initialize first slide
            if (slideCount > 0) {
                slides[currentSlide].style.opacity = '1';
                
                // Start slideshow if multiple slides exist
                if (slideCount > 1) {
                    setInterval(() => {
                        // Fade out current slide
                        slides[currentSlide].style.opacity = '0';
                        
                        // Move to next slide
                        currentSlide = (currentSlide + 1) % slideCount;
                        
                        // Fade in next slide
                        slides[currentSlide].style.opacity = '1';
                    }, 5000);
                }
            }
        }
    });

     // Mobile menu toggle
     const menuToggle = document.querySelector('.mobile-menu-toggle');
     const nav = document.querySelector('.main-nav');
     
     menuToggle.addEventListener('click', function() {
         this.classList.toggle('active');
         nav.classList.toggle('active');
     });
     
     // Close menu when clicking on nav links
     document.querySelectorAll('.nav-link').forEach(link => {
         link.addEventListener('click', function() {
             if (window.innerWidth <= 768) {
                 menuToggle.classList.remove('active');
                 nav.classList.remove('active');
             }
         });
     });
    
    // Update on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.style.display = '';
            if (header.contains(mobileMenuButton)) {
                header.removeChild(mobileMenuButton);
            }
        } else if (!header.contains(mobileMenuButton)) {
            header.insertBefore(mobileMenuButton, nav);
            nav.style.display = 'none';
        }
    });

    // Make category cards clickable (for homepage)
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.getAttribute('onclick');
            if (link) {
                const url = link.match(/window\.location\.href='(.*?)'/)[1];
                window.location.href = url;
            }
        });
    });

    // Product Page Navigation Functionality
    const productCards = document.querySelectorAll('.product-card');

    // Add click event listeners to product cards
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent the buy button click from triggering navigation
            if (e.target.classList.contains('buy-btn')) {
                return;
            }
            
            const largeImage = this.getAttribute('data-large-image');
            const description = this.getAttribute('data-description');
            const title = this.querySelector('h3').textContent;
            const productName = this.querySelector('.buy-btn').getAttribute('data-product');
            
            // Get current page info for breadcrumb
            const currentPage = window.location.pathname;
            const categoryName = getCategoryName(currentPage);
            const categoryLink = currentPage;
            
            // Navigate to product page with parameters
            const params = new URLSearchParams({
                name: productName,
                image: largeImage,
                description: description,
                category: categoryName,
                categoryLink: categoryLink
            });
            
            window.location.href = `product.html?${params.toString()}`;
        });
    });

    // Function to get category name from current page
    function getCategoryName(pagePath) {
        const categoryMap = {
            'bakery.html': 'Bakery Equipment',
            'fast-food.html': 'Copper Cast Doors',
            'kitchen.html': 'Turkey Steel Luxury Doors',
            'packaging.html': 'Copper Villa Royal Doors',
            'food-processing.html': 'Israeli Security Doors',
            'refrigeration.html': 'Refrigeration Equipment',
            'supermarket.html': 'Supermarket Equipment'
        };
        
        const fileName = pagePath.split('/').pop();
        return categoryMap[fileName] || 'Products';
    }
