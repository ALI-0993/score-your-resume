import "./style.css";

export let currentPage = "upload";

export function navigate(page) {
  currentPage = page;

  if (page === "upload") {
    import("./pages/upload.js").then((m) => m.renderUpload());
  } else if (page === "results") {
    import("./pages/results.js").then((m) => m.renderResults());
  } else {
    document.getElementById("page").innerHTML = `
      <div class="flex items-center justify-center h-64 text-[#52525b] text-sm">
        ${page.charAt(0).toUpperCase() + page.slice(1)} — coming soon
      </div>`;
  }
}

window.handleNav = (page) => {
  document
    .querySelectorAll("#nav-ats, #nav-history, #nav-templates")
    .forEach((n) => {
      n.classList.remove("text-[#f97316]", "font-medium");
      n.classList.add("text-[#a1a1aa]");
    });
  const map = {
    upload: "nav-ats",
    history: "nav-history",
    templates: "nav-templates",
  };
  const el = document.getElementById(map[page]);
  if (el) {
    el.classList.remove("text-[#a1a1aa]");
    el.classList.add("text-[#f97316]", "font-medium");
  }
  document.querySelectorAll("#mobile-menu span").forEach((n) => {
    n.classList.remove("text-[#f97316]", "font-medium");
    n.classList.add("text-[#a1a1aa]");
  });
  const mobileMap = { upload: 0, history: 1, templates: 2 };
  const spans = document.querySelectorAll("#mobile-menu span");
  if (spans[mobileMap[page]]) {
    spans[mobileMap[page]].classList.add("text-[#f97316]", "font-medium");
  }
  navigate(page);
};

document.getElementById("topbar").innerHTML = `
  <div class="flex items-center px-4 md:px-6 py-3 border-b border-[#27272a] bg-[#030711] relative">
    <div class="text-[#f97316] font-bold text-base md:text-lg tracking-tight">ScoreYourResume</div>
    <nav class="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
      <span id="nav-ats" onclick="handleNav('upload')" class="text-base cursor-pointer text-[#f97316] font-medium transition-all hover:text-white">ATS Score</span>
      <span id="nav-history" onclick="handleNav('history')" class="text-base cursor-pointer text-[#a1a1aa] transition-all hover:text-white">History</span>
      <span id="nav-templates" onclick="handleNav('templates')" class="text-base cursor-pointer text-[#a1a1aa] transition-all hover:text-white">Templates</span>
    </nav>
    <div class="flex items-center gap-3 ml-auto">
      <button class="md:hidden flex flex-col gap-1 p-2" onclick="toggleMobileMenu()">
        <div class="w-5 h-0.5 bg-white"></div>
        <div class="w-5 h-0.5 bg-white"></div>
        <div class="w-5 h-0.5 bg-white"></div>
      </button>
    </div>
  </div>
  <div id="mobile-menu" class="hidden md:hidden bg-[#030711] border-b border-[#27272a] px-4 py-3 flex flex-col gap-3">
    <span onclick="handleNav('upload');toggleMobileMenu()" class="text-base cursor-pointer text-[#f97316] font-medium">ATS Score</span>
    <span onclick="handleNav('history');toggleMobileMenu()" class="text-base cursor-pointer text-[#a1a1aa]">History</span>
    <span onclick="handleNav('templates');toggleMobileMenu()" class="text-base cursor-pointer text-[#a1a1aa]">Templates</span>
  </div>
`;

window.toggleMobileMenu = () => {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
};

navigate("upload");
