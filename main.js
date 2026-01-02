document.addEventListener("DOMContentLoaded", function () {
  
  const projects = [
    {
      id: "project8",
      title: "Disc Arena",
      cardText: "Fast-paced arena game built around physics-based collision mechanics...",
      coverImage: "Assets/Portfolio/proje8_1.jpg",
     modalText: "Disc Arena is a fast-paced arena game with physics-based gameplay. I worked on this project in collaboration with Toros Studio, contributing to the development of core gameplay systems such as character movement, dash, collision, and power-up mechanics.",
      media: [
        { type: "image", src: "Assets/Portfolio/proje8_1.jpg", alt: "Disc Arena 1" },
        { type: "image", src: "Assets/Portfolio/proje8_2.jpg", alt: "Disc Arena 2" },
        { type: "video", src: "Assets/Portfolio/proje8_3_Video.mp4" },
      ],
    },

    {
      id: "project1",
      title: "Design Match: Tile Pair Puzzle",
      cardText: "Match-3 algorithm and Firebase integration...",
      coverImage: "Assets/Portfolio/proje1_1.jpeg",
      modalText:
        "I worked on this game while collaborating with Fluffy Fox, a company based in the UK and part of Matchingam. This project is a match-3 and room design game where I was part of the team responsible for setting up the match-3 algorithm and integrating Firebase to store user data.",
      media: [
        { type: "image", src: "Assets/Portfolio/proje1_1.jpeg", alt: "Design Match 1" },
        { type: "image", src: "Assets/Portfolio/proje1_2.jpeg", alt: "Design Match 2" },
        { type: "image", src: "Assets/Portfolio/proje1_3.jpeg", alt: "Design Match 3" },
      ],
      links: [
        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.crush.design.match" },
      ],
    },

    {
      id: "project2",
      title: "Lomy",
      cardText: "Developed 2D platform mechanics and level transitions...",
      coverImage: "Assets/Portfolio/proje2_1.jpg",
      modalText:
        "In my first year at GFDS, I developed Lomy, a 2D platform game, entirely on my own. I was responsible for all aspects of the game's development, from creating platform mechanics to designing level transitions. I handled publishing for Google Play and iOS.",
      media: [
        { type: "image", src: "Assets/Portfolio/proje2_1.jpg", alt: "Lomy" },
        { type: "video", src: "Assets/Portfolio/proje2_2_Video.mp4" },
      ],
    },

    {
      id: "project3",
      title: "Paper Drive",
      cardText: "Developed 2D runner mechanics and car design system...",
      coverImage: "Assets/Portfolio/proje3_1_resized.jpg",
      modalText:
        "Paper Drive is a 2D runner game where players design and control cars. I developed the entire game independently, handling everything from gameplay mechanics to level design, and publishing for iOS and Android.",
      media: [
        { type: "image", src: "Assets/Portfolio/proje3_1.jpg", alt: "Paper Drive" },
        { type: "video", src: "Assets/Portfolio/proje3_2_Video.mp4" },
      ],
    },

    {
      id: "project4",
      title: "World In The Picture",
      cardText: "Advanced word matching algorithm and dynamic content...",
      coverImage: "Assets/Portfolio/proje4_1_resized.png",
      modalText:
        "In this project, I collaborated with a friend to develop an advanced word-matching algorithm, aiming to quickly match words and create an educational experience. The structure provides dynamic, replayable content.",
      media: [
        { type: "image", src: "Assets/Portfolio/proje4_1.png", alt: "World In The Picture" },
        { type: "video", src: "Assets/Portfolio/proje4_3_Video.mp4" },
      ],
    },

    {
      id: "project5",
      title: "LET-X",
      cardText: "Occupational Health and Safety Training Simulations on Oculus VR...",
      coverImage: "Assets/Portfolio/Proje5_1.png",
      modalText:
        "This project involved designing eight distinct training modules focused on occupational health and safety, optimized for Oculus VR. I contributed to creating a user-friendly interface and adapting the experience for seamless VR control integration.",
      media: [
        { type: "image", src: "Assets/Portfolio/Proje5_1.png", alt: "LET-X 1" },
        { type: "image", src: "Assets/Portfolio/Proje5_2.png", alt: "LET-X 2" },
        { type: "video", src: "Assets/Portfolio/proje5_3_Video.mp4" },
      ],
    },

    {
      id: "project6",
      title: "Gemak",
      cardText: "AR-Based Product Showcase Application...",
      coverImage: "Assets/Portfolio/proje6_2.png",
      modalText:
        "Developed independently at GFDS, this project featured an AR-based application for showcasing products from the company Gemak. I used ARKit and ARCore technologies and optimized performance on both iOS and Android devices.",
      media: [
        { type: "image", src: "Assets/Portfolio/proje6_1.jpg", alt: "Gemak 1" },
        { type: "image", src: "Assets/Portfolio/proje6_2.png", alt: "Gemak 2" },
        { type: "image", src: "Assets/Portfolio/proje6_3.jpg", alt: "Gemak 3" },
      ],
    },

    {
      id: "project7",
      title: "Teddy Bear",
      cardText: "Teddy Bear Story-Driven Puzzle Game Demo...",
      coverImage: "Assets/Portfolio/proje7_1.jpg",
      modalText:
        "For this project designed for Steam, I developed the storyline and puzzle mechanics for the Teddy Bear game. Together with my teammate, we created a demo by integrating an immersive narrative and carefully crafted puzzles.",
      media: [
        { type: "image", src: "Assets/Portfolio/proje7_1.jpg", alt: "Teddy 1" },
        { type: "image", src: "Assets/Portfolio/proje7_2.jpg", alt: "Teddy 2" },
        { type: "video", src: "Assets/Portfolio/proje7_3_Video.mp4" },
      ],
    },
  ];

  // -----------------------------
  // 2) PARTICLES + SMOOTH SCROLL + TYPE EFFECT
  // -----------------------------
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#000000" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#000000", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 6 }
      },
      "interactivity": {
        "events": {
          "onhover": { "enable": true, "mode": "repulse" },
          "onclick": { "enable": true, "mode": "push" }
        }
      },
      "retina_detect": true
    });
  }

  document.querySelectorAll(".scroll-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  const titles = ["Unity Developer", "Game Developer", "Software Developer"];
  let titleIndex = 0, letterIndex = 0, isDeleting = false;
  const typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000;

function typeEffect() {
  const element = document.querySelector(".dynamic-text");
  if (!element) return;

  const fullTitle = titles[titleIndex];

  if (!isDeleting) {
    // typing
    element.textContent = fullTitle.substring(0, letterIndex + 1);
    letterIndex++;

    if (letterIndex === fullTitle.length) {
      setTimeout(() => {
        isDeleting = true;
      }, pauseTime);
    }
  } else {
    // deleting
    element.textContent = fullTitle.substring(0, letterIndex - 1);
    letterIndex--;

    if (letterIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
  }

  const speed = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(typeEffect, speed);
}

  typeEffect();

  // -----------------------------
  // 3) PORTFOLIO RENDER
  // -----------------------------
  const grid = document.getElementById("portfolioGrid");
  const modalRoot = document.getElementById("modalRoot");

  if (!grid || !modalRoot) {
    console.error("Missing #portfolioGrid or #modalRoot in HTML.");
    return;
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // Create cards + modals
  projects.forEach((p) => {
    // Card
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${escapeHtml(p.coverImage)}" alt="${escapeHtml(p.title)}" class="project-image">
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.cardText)}</p>
      <button class="btn" data-open="${escapeHtml(p.id)}">Details</button>
    `;
    grid.appendChild(card);

    // Modal
    const modal = document.createElement("div");
    modal.id = p.id;
    modal.className = "modal";

    const linksHtml = (p.links && p.links.length)
      ? `<p>${p.links.map(l => `<a href="${escapeHtml(l.href)}" target="_blank" rel="noreferrer">${escapeHtml(l.label)}</a>`).join(" | ")}</p>`
      : "";

    const mediaItemsHtml = (p.media || []).map((m) => {
      if (m.type === "video") {
        return `
          <div class="carousel-item">
            <video width="100%" height="315" controls>
              <source src="${escapeHtml(m.src)}" type="video/mp4">
            </video>
          </div>
        `;
      }
      return `
        <div class="carousel-item">
          <img src="${escapeHtml(m.src)}" alt="${escapeHtml(m.alt || p.title)}">
        </div>
      `;
    }).join("");

    modal.innerHTML = `
      <div class="modal-content" data-modal="${escapeHtml(p.id)}">
        <h3>${escapeHtml(p.title)}</h3>

        <div class="carousel-container">
          <a class="prev" data-prev="${escapeHtml(p.id)}">&#10094;</a>
          <div class="carousel" data-carousel="${escapeHtml(p.id)}">
            ${mediaItemsHtml}
          </div>
          <a class="next" data-next="${escapeHtml(p.id)}">&#10095;</a>
        </div>

        <p>${escapeHtml(p.modalText)}</p>
        ${linksHtml}

        <button class="btn-large-close" data-close="${escapeHtml(p.id)}">Close</button>
      </div>
    `;
    modalRoot.appendChild(modal);
  });

  // -----------------------------
  // 4) GENERIC MODAL + CAROUSEL LOGIC
  // -----------------------------
  const slideState = {}; // { [projectId]: index }

  function pauseAndResetVideos(modalEl) {
    if (!modalEl) return;
    const videos = modalEl.querySelectorAll("video");
    videos.forEach((v) => {
      v.muted = true;
      v.pause();
      v.currentTime = 0;
      setTimeout(() => { v.muted = false; }, 100);
    });
  }

  function showSlide(projectId, nextIndex) {
    const modalEl = document.getElementById(projectId);
    if (!modalEl) return;

    const slides = modalEl.querySelectorAll(".carousel-item");
    if (!slides || slides.length === 0) return;

    const safeIndex = ((nextIndex % slides.length) + slides.length) % slides.length;
    slideState[projectId] = safeIndex;

    slides.forEach((s) => { s.style.display = "none"; });
    slides[safeIndex].style.display = "block";
  }

  function openModal(projectId) {
    // Close others
    document.querySelectorAll(".modal").forEach((m) => {
      if (m.style.display === "flex") {
        pauseAndResetVideos(m);
      }
      m.style.display = "none";
    });

    const modalEl = document.getElementById(projectId);
    if (!modalEl) {
      console.error("Modal not found:", projectId);
      return;
    }

    modalEl.style.display = "flex";

    // Init slide index if not set
    if (typeof slideState[projectId] !== "number") slideState[projectId] = 0;
    showSlide(projectId, slideState[projectId]);
  }

  function closeModal(projectId) {
    const modalEl = document.getElementById(projectId);
    if (!modalEl) return;

    pauseAndResetVideos(modalEl);
    modalEl.style.display = "none";
  }

  function nextSlide(projectId, delta) {
    const current = typeof slideState[projectId] === "number" ? slideState[projectId] : 0;
    const modalEl = document.getElementById(projectId);
    if (!modalEl) return;

    pauseAndResetVideos(modalEl);
    showSlide(projectId, current + delta);
  }

  // Card button click
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open]");
    if (!btn) return;
    const id = btn.getAttribute("data-open");
    openModal(id);
  });

  // Modal close / prev / next click
  modalRoot.addEventListener("click", (e) => {
    const closeBtn = e.target.closest("[data-close]");
    if (closeBtn) {
      closeModal(closeBtn.getAttribute("data-close"));
      return;
    }

    const prevBtn = e.target.closest("[data-prev]");
    if (prevBtn) {
      nextSlide(prevBtn.getAttribute("data-prev"), -1);
      return;
    }

    const nextBtn = e.target.closest("[data-next]");
    if (nextBtn) {
      nextSlide(nextBtn.getAttribute("data-next"), 1);
      return;
    }

    // Click outside modal-content closes it
    const modalEl = e.target.classList.contains("modal") ? e.target : null;
    if (modalEl && modalEl.id) {
      closeModal(modalEl.id);
    }
  });

  // ESC closes any open modal
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    document.querySelectorAll(".modal").forEach((m) => {
      if (m.style.display === "flex") closeModal(m.id);
    });
  });

  // Expose for safety (if you still want inline onclick later)
  window.openModal = openModal;
  window.closeModal = closeModal;
});
