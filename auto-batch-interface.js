(function () {
  let btn = document.createElement("button");
  btn.innerText = "📂 Charger et Générer";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.zIndex = "9999";
  btn.style.padding = "12px 16px";
  btn.style.background = "#111";
  btn.style.color = "#fff";
  btn.style.border = "none";
  btn.style.borderRadius = "8px";
  btn.style.fontWeight = "bold";
  btn.style.cursor = "pointer";
  btn.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
  document.body.appendChild(btn);

  btn.onclick = async () => {
    btn.innerText = "📥 Chargement...";
    try {
      const res = await fetch("https://raw.githubusercontent.com/groot78700/leonardo-batcher/main/prompts_leonardo.txt");
      const text = await res.text();
      const prompts = text.split("\n").map(l => l.trim()).filter(Boolean);

      btn.innerText = "⏳ Génération...";
      let index = 0;
      let interval = 15000;

      let loop = setInterval(() => {
        if (index >= prompts.length) {
          clearInterval(loop);
          btn.innerText = "✅ Fini !";
          return;
        }

        const textarea = document.querySelector("textarea");
        const buttons = [...document.querySelectorAll("button")];
        const generateBtn = buttons.find(b => b.innerText.includes("Generate"));

        if (textarea && generateBtn) {
          textarea.value = prompts[index];
          textarea.dispatchEvent(new Event("input", { bubbles: true }));
          generateBtn.click();
          console.log(`🚀 Prompt ${index + 1}/${prompts.length} lancé`);
          index++;
        } else {
          console.warn("⛔ Prompt ou bouton non trouvé");
        }
      }, interval);

    } catch (e) {
      btn.innerText = "❌ Erreur chargement";
      console.error(e);
    }
  };
})();
