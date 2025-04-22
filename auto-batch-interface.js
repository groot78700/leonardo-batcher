(function(){
  let btn = document.createElement("button");
  btn.innerText = "🚀 Auto Générer";
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

  const prompts = [
    "A snowy fairytale castle, ultra detailed, cinematic lighting, photorealistic",
    "Golden magic lamp on a red cushion, magical glow, fantasy lighting",
    "Majestic lion standing in the savannah, sunset, warm tones, ultra sharp",
    "Beautiful mermaid swimming in turquoise ocean, fantasy underwater lighting",
    "Futuristic cleaning robot on a deserted planet, sci-fi mood",
    "Glass slipper on elegant red stairs, dramatic lighting, fairytale style",
    "Asian warrior woman with light armor, cinematic angle, holding a sword",
    "Magical blue genie floating from glowing lamp, mystic fantasy lighting",
    "Sleeping princess in an enchanted forest on a soft bed, peaceful, dreamy",
    "Bright clownfish in coral reef, vivid underwater colors, photorealism",
    "Toy cowboy and astronaut on a wooden table, Toy Story vibes, soft light",
    "Woman casting ice magic with swirling frost particles, fantasy epic",
    "Jungle boy walking with animals in dense forest, golden hour light",
    "Small rat standing in a French kitchen pan, charming angle, cozy vibe",
    "Blue fish with dreamy expression in deep ocean, ambient lighting",
    "Lion cub playing with adult lion in tall savannah grass, warm tone",
    "Golden antique lamp glowing in dark room, soft shadows, mystic aura",
    "Elegant woman in green dress holding frog, enchanted forest lighting",
    "Stylish person in spotted coat, editorial fashion lighting, confident gaze",
    "Red cartoon race car with smiling face, 3D Pixar style",
    "Inventor old man with glasses in messy workshop, warm light",
    "Mexican boy playing guitar in candle-lit Dia de los Muertos setting",
    "Snowman with carrot nose in snowy forest, happy mood, soft light",
    "Blonde girl with very long hair on balcony at sunset, dreamy",
    "City full of upright cartoon animals walking in clothes, colorful style",
    "Friendly round robot with red cross on chest, clean lighting",
    "Girl in red dress on tropical island beach, cinematic view",
    "Happy family inside a colorful magical house, fantasy cartoon",
    "Cute red baby dragon with big eyes, smiling in enchanted woods",
    "Two happy boys at seaside, hybrid mermaid legs, sunset"
  ];

  let index = 0;
  let interval = 15000;

  btn.onclick = () => {
    btn.innerText = "⌛ En cours...";
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
  };
})();
