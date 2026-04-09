// Mobile Navbar Toggle
const categories = [{
        title: "Wi-Fi / Wireless Cameras",
        desc: "Easy installation, remote viewing via mobile app",
        products: [{
                name: "Smart Wi-Fi Dome Cam",
                image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/home-security-camera/4/e/a/1-sp-dual-z60-indoor-outdoor-security-camera-sropx-original-imahm8khsudcqasr.jpeg?q=90",
                features: ["1080p HD Quality", "Night Vision", "Motion Detection"],
                price: 10000,
                discount: 20
            },
            {
                name: "Outdoor Wi-Fi Bullet Cam",
                image: "https://res.cloudinary.com/dptxuxhbm/image/upload/v1775740904/WhatsApp_Image_2026-04-09_at_6.49.50_PM_1_bmtvzj.jpg",
                features: ["2K Resolution", "Weatherproof", "App Control"],
                price: 12000,
                discount: 10
            }
        ]
    },
    {
        title: "Wired Cameras (Traditional)",
        desc: "Stable connection, best for offices & large areas",
        products: [{
                name: "HD Analog Dome Camera",
                image: "https://usprotective.net/wp-content/uploads/2023/02/close-up-of-surveillance-camera-installation-male-hand-holds-cctv-camera.jpg_s1024x1024wisk20c7AWb08rjJeZon9-FR4_VIPOMVfEOIR0p9yXEfrpdt3E-750x400.jpg",
                features: ["1080p Resolution", "Night Vision 30m", "DVR Compatible"],
                price: 5000,
                discount: 15
            },
            {
                name: "HD Analog Dome Camera",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdN1jB-MH58uZK2d98znnuGAz2C7DUH5xsqQH3QolUfMqXEqY9YJi1bvU&s",
                features: ["1080p Resolution", "Night Vision 30m", "DVR Compatible"],
                price: 5000,
                discount: 15
            }
        ]
    },
    {
        title: "Solar Cameras",
        desc: "Eco-friendly cameras powered by solar energy, perfect for outdoor & remote areas",
        products: [{
                name: "Solar Powered Outdoor CCTV Camera",
                image: "https://m.media-amazon.com/images/I/61+o5tUKsYL._SL1000_.jpg",
                features: [
                    "Full HD 1080p Video",
                    "Solar Panel Charging",
                    "Night Vision 40m",
                    "Weatherproof (IP66)",
                    "Motion Detection Alerts"
                ],
                price: 8500,
                discount: 20
            },
            {
                name: "Wireless Solar Security Camera",
                image: "https://m.media-amazon.com/images/I/61OyIpnmVyL._SL1500_.jpg",
                features: [
                    "2MP HD Resolution",
                    "Battery + Solar Backup",
                    "Mobile App Control",
                    "Two-Way Audio",
                    "Cloud Storage Support"
                ],
                price: 9200,
                discount: 18
            },
            {
                name: "4G Solar CCTV Camera",
                image: "https://m.media-amazon.com/images/I/61YK6khKmML._SL1024_.jpg",
                features: [
                    "4G SIM Support",
                    "No Wi-Fi Needed",
                    "360° Rotation",
                    "Night Vision",
                    "Waterproof Design"
                ],
                price: 12000,
                discount: 25
            }
        ]
    },
    {
        title: "Solar Wi-Fi Cameras",
        desc: "Wireless solar-powered cameras with Wi-Fi connectivity for smart remote monitoring",
        products: [{
                name: "Solar Wi-Fi Bullet Camera",
                image: "https://m.media-amazon.com/images/I/61OyIpnmVyL._SL1500_.jpg",
                features: [
                    "Full HD 2MP Camera",
                    "Waterproof (IP67)",
                    "Motion Detection Alerts",
                    "Cloud Storage Support",
                    "Battery + Solar Backup"
                ],
                price: 10500,
                discount: 18
            },
            {
                name: "Smart Solar PTZ Wi-Fi Camera",
                image: "https://res.cloudinary.com/dptxuxhbm/image/upload/v1775740904/WhatsApp_Image_2026-04-09_at_6.49.49_PM_1_fhcycu.jpg",
                features: [
                    "360° Pan & Tilt",
                    "Auto Motion Tracking",
                    "Two-Way Audio",
                    "Night Vision",
                    "Remote Access via App"
                ],
                price: 13500,
                discount: 25
            }
        ]
    }
];





const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navbar links
document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


function renderCategories() {
    const container = document.getElementById("categories-container");
    container.innerHTML = "";

    categories.forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "category";

        let productsHTML = "";

        category.products.forEach(product => {
            const discountPrice = product.price - (product.price * product.discount / 100);

            productsHTML += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h4>${product.name}</h4>

          <ul>
            ${product.features.map(f => `<li>${f}</li>`).join("")}
          </ul>

          

          <a href="https://wa.me/917075179903?text=Hi, interested in ${product.name}" 
             class="btn btn-info" target="_blank">
             Deal Now
          </a>
        </div>
      `;
        });

        categoryDiv.innerHTML = `
      <h3>${category.title}</h3>
      <p>${category.desc}</p>
      <div class="products-grid">${productsHTML}</div>
    `;

        container.appendChild(categoryDiv);
    });
}

renderCategories();

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Contact Form Handler - Open WhatsApp with message
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    const whatsappMessage = `New Inquiry!%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/917075179903?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');

    // Reset form
    contactForm.reset();
});

// Scroll Animations (Intersection Observer for fadeInUp)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease forwards';
        }
    });
}, observerOptions);

// Observe sections for scroll animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Product Card Hover Animation Enhancement
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Floating WhatsApp Pulse Animation
const whatsappFloat = document.querySelector('.whatsapp-float');
setInterval(() => {
    whatsappFloat.style.transform = 'scale(1.1)';
    setTimeout(() => {
        whatsappFloat.style.transform = 'scale(1)';
    }, 500);
}, 3000);
history.pushState(null, null, location.href);

window.addEventListener('popstate', function() {
    // Redirect to home page
    window.location.href = "index.html"; // change if your home page is different
});