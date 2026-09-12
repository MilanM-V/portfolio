import { projects } from './projects.js';

const grid = document.getElementById("projects-grid");
const modal = document.getElementById("modal-project");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.getElementById("close-modal");

projects.forEach((proj) => {
  const card = document.createElement("div");
  card.className = "w-80 p-6 rounded-xl bg-[#161024] border border-purple-500/30 cursor-pointer transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:-translate-y-1";

  card.innerHTML = `
    <div class="w-100% bg-[#362068] -mx-6 -mt-6 px-6 py-2 rounded-t-xl border-b-2 border-[#6d50af]">
      <span class="text-xs font-mono text-purple-400">${proj.header}</span>
    </div>
    <h3 class="text-lg font-bold mt-2">${proj.title}</h3>
    <p class="text-sm text-slate-400 mt-1">${proj.shortDesc}</p>
    <div class="mt-4">
      <span class="text-xs bg-purple-950/80 border border-purple-500/40 text-purple-200 px-2.5 py-1 rounded-full">${proj.tag}</span>
    </div>
  `;

  card.addEventListener("click", () => {
    modalTitle.textContent = proj.title;
    modalText.textContent = proj.fullDesc;
    modal.showModal();
  });

  grid.appendChild(card);
});

closeBtn.addEventListener("click", () => modal.close());

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});