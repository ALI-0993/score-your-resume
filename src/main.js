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
  document.querySelectorAll('#nav-ats, #nav-history, #nav-templates').forEach(n => {
    n.classList.remove('text-[#f97316]', 'font-medium')
    n.classList.add('text-[#a1a1aa]')
  })
  const map = { upload: 'nav-ats', history: 'nav-history', templates: 'nav-templates' }
  const el = document.getElementById(map[page])
  if (el) {
    el.classList.remove('text-[#a1a1aa]')
    el.classList.add('text-[#f97316]', 'font-medium')
  }
  navigate(page)
}

document.getElementById("topbar").innerHTML = `
  <div class="flex items-center justify-between px-6 py-3 border-b border-[#27272a] bg-[#030711]">
    <div class="text-[#f97316] font-bold text-lg tracking-tight">ScoreResume</div>
    <nav class="flex items-center gap-8">
      <span id="nav-ats" onclick="handleNav('upload')" class="text-base cursor-pointer text-[#f97316] font-medium transition-all hover:text-white">ATS Score</span> 
      <span id="nav-history" onclick="handleNav('history')" class="text-base cursor-pointer text-[#a1a1aa] transition-all hover:text-white">History</span>
      <span id="nav-templates" onclick="handleNav('templates')" class="text-base cursor-pointer text-[#a1a1aa] transition-all hover:text-white">Templates</span>
    </nav>
    <div class="flex items-center gap-3">
      <button class="px-4 py-2 text-sm bg-[#f97316] text-white rounded-lg hover:opacity-90 transition-all font-medium">Login / Signup</button>
      <div class="w-8 h-8 rounded-full bg-[#1e1535] border border-[#a78bfa] flex items-center justify-center text-[#a78bfa] text-xs font-medium cursor-pointer">AC</div>
    </div>
  </div>
`;

navigate("upload");
