function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
document.querySelectorAll("#myNavMenu a").forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.className = "nav-menu";
  });
});

window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

var typingEffect = new Typed(".typedText", {
  strings: ["Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

sr.reveal(".project-box", { interval: 200 });

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 1000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    const link = document.querySelector(".nav-menu a[href*=" + sectionId + "]");

    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    }
  });
}

window.addEventListener("scroll", scrollActive);

const translations = {
  en: {
    menu_home: "Home",
    menu_about: "About",
    menu_projects: "Projects",
    menu_contact: "Contact",
    featured_description:
      "Frontend developer with a passion for creating visually stunning and user-friendly websites.",
    btn_contact: "Contact Me",
    menu_about: "About",
    my_introduction: "My introduction",
    menu_description:
      "Currently enrolled in the Web Development and Multimedia program at the Polytechnic Institute of Cávado and Ave (IPCA), I am eager to gain practical experience in the field, enhancing my theoretical knowledge and developing skills relevant to my future career. Although still in training, I have already developed skills in languages such as HTML, CSS, JavaScript, TypeScript, Node Js, React, Tailwind, Bootstrap, Git. I am confident in my motivation, interpersonal skills, and eagerness to learn. Highly capable of working in teams, dedicated to my tasks, results-oriented, focused on process optimization, and digital transformation. Organized, responsible, and flexible.",
    Education: "Education",
    secondary: "Complete secondary education",
    web: "Currently studyng Web Development",
    Experience: "Experience",
    year: "1 year",
    web_developer: "Web Developer",
    menu_explore: "Explore my",
    menu_experience: "Experience",
    menu_see: "See my",
    menu_projects: "Projects",
    menu_project_one: "Project one",
    menu_project_two: "Project two",
    menu_project_three: "Project three",
    menu_contact_two: "Get in touch",
    menu_contact_description: "Have a project in mind, contact me",
    menu_find_me: "Find Me",
  },
  pt: {
    menu_home: "Início",
    menu_about: "Sobre",
    menu_projects: "Projetos",
    menu_contact: "Contato",
    featured_description:
      "Desenvolvedor Frontend com paixão por criar sites visualmente impressionantes e fáceis de usar.",
    btn_contact: "Entre em Contato",
    menu_about: "Sobre",
    my_introduction: "Minha apresentação",
    menu_description:
      "Atualmente cursando Desenvolvimento Web e Multimédia na Instituição Politecnica do Cávado e Ave (IPCA), estou ansioso para ganhar experiência prática na área, aprimorando meus conhecimentos teóricos e desenvolvendo habilidades relevantes para minha futura carreira. Embora ainda em treinamento, já desenvolvi habilidades em linguagens como HTML, CSS, JavaScript, TypeScript, Node Js, React, Tailwind, Bootstrap, Git. Estou confiante na minha motivação, habilidades interpessoais e ânsia de aprender. Altamente capaz de trabalhar em equipe, dedicado às minhas tarefas, orientado a resultados, focado na otimização de processos e transformação digital. Organizado, responsável e flexível.",
    Education: "Educação",
    secondary: "Ensino secundário completo",
    web: "Cursando Desenvolvimento web",
    Experience: "Experiência",
    year: "1 ano",
    web_developer: "Desenvolvedor Web",
    menu_explore: "Explore minha",
    menu_experience: "Experiência",
    menu_see: "Veja meus",
    menu_projects: "Projetos",
    menu_project_one: "Projeto um",
    menu_project_two: "Projeto dois",
    menu_project_three: "Projeto três",
    menu_contact_two: "Entre em contato",
    menu_contact_description:
      "Tem um projeto em sua mente, entre em contato comigo",
    menu_find_me: "Encontre-me",
  },
};

let currentLanguage = "en";

const elementsToTranslate = document.querySelectorAll("[data-key]");

function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "pt" : "en";
  elementsToTranslate.forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[currentLanguage][key]) {
      el.innerHTML = translations[currentLanguage][key];
    }
  });

  if (currentLanguage === "en") {
    languageToggle.innerHTML = `<img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/br.svg" alt="Brazilian Flag" />`;
  } else {
    languageToggle.innerHTML = `<img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/gb.svg" alt="English Flag" />`;
  }
}

document
  .getElementById("languageToggle")
  .addEventListener("click", toggleLanguage);
