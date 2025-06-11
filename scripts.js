// Smooth scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Fade-in animation on scroll
const sections = document.querySelectorAll("section");

const revealSections = () => {
  const trigger = window.innerHeight * 0.8;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.border = "2px solid red";
        valid = false;
      } else {
        input.style.border = "none";
      }
    });

    if (valid) {
      alert("Thanks for your message!");
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
});

// Lightbox for portfolio
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const lightbox = document.createElement("div");
      lightbox.id = "lightbox";
      lightbox.style.position = "fixed";
      lightbox.style.top = 0;
      lightbox.style.left = 0;
      lightbox.style.width = "100%";
      lightbox.style.height = "100%";
      lightbox.style.background = "rgba(0, 0, 0, 0.8)";
      lightbox.style.display = "flex";
      lightbox.style.justifyContent = "center";
      lightbox.style.alignItems = "center";
      lightbox.style.zIndex = 1000;

      const content = document.createElement("div");
      content.style.background = "#fff";
      content.style.padding = "40px";
      content.style.borderRadius = "8px";
      content.style.color = "#000";
      content.innerText = card.innerText;

      lightbox.appendChild(content);
      document.body.appendChild(lightbox);

      lightbox.addEventListener("click", () => {
        lightbox.remove();
      });
    });
  });
});

// Navigation highlight
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + window.innerHeight / 2;

  document.querySelectorAll(".cta-buttons button").forEach(btn => {
    btn.classList.remove("active");
  });

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const offsetTop = window.scrollY + rect.top;
    const offsetBottom = offsetTop + rect.height;

    if (scrollPos >= offsetTop && scrollPos <= offsetBottom) {
      const id = section.getAttribute("id");
      if (id === "portfolio") {
        document.querySelectorAll(".cta-buttons button")[1]?.classList.add("active");
      } else if (id === "contact") {
        document.querySelectorAll(".cta-buttons button")[0]?.classList.add("active");
      }
    }
  });
});
// Smooth scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Typing effect for Hero Title
document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("hero-title");
  const text = "Melding Graphics to Perfection";
  let index = 0;
  function type() {
    if (index < text.length) {
      title.textContent += text.charAt(index);
      index++;
      setTimeout(type, 80);
    }
  }
  title.textContent = "";
  type();
});

// Reveal animations on scroll
const animateOnScroll = () => {
  const reveals = document.querySelectorAll("[data-animate]");
  const trigger = window.innerHeight * 0.8;

  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("visible");

      const direction = el.getAttribute("data-animate");
      el.style.opacity = "1";
      el.style.transform = direction === "left" ? "translateX(0)" :
                           direction === "right" ? "translateX(0)" :
                           "translateY(0)";
    }
  });
};

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// Ripple animation on button click
document.querySelectorAll(".ripple").forEach(btn => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    const x = e.clientX - btn.offsetLeft;
    const y = e.clientY - btn.offsetTop;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.classList.add("ripple-circle");
    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});

// Testimonials fade-in
document.addEventListener("DOMContentLoaded", () => {
  const quotes = document.querySelectorAll("#testimonials blockquote");
  quotes.forEach((quote, i) => {
    quote.style.opacity = "0";
    quote.style.transform = "translateY(20px)";
    quote.style.transition = `all 0.6s ease ${i * 200}ms`;
  });

  const revealQuotes = () => {
    const trigger = window.innerHeight * 0.9;
    quotes.forEach((quote) => {
      const top = quote.getBoundingClientRect().top;
      if (top < trigger) {
        quote.style.opacity = "1";
        quote.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", revealQuotes);
  window.addEventListener("load", revealQuotes);
});

// Project card hover animation
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
