[![One-click Leonardo Batch](https://img.shields.io/badge/LeonardoAI-Batch_Prompts-blueviolet?style=for-the-badge&logo=thunderbird)](https://app.leonardo.ai)

# ⚡ Générateur automatique de prompts pour Leonardo AI (via fichier `.txt`)

Ce script injecte un **bouton flottant 📂** dans [Leonardo AI](https://app.leonardo.ai) qui charge une liste de prompts **directement depuis un fichier `.txt` hébergé sur GitHub**.

---

## 🧠 Fonctionnalités

- 📥 Charge automatiquement une liste de prompts depuis un fichier `.txt`
- 💬 Aucun besoin de copier-coller manuellement
- 🕒 Envoie chaque prompt avec un délai entre chaque génération
- 🔁 Compatible avec toutes les interfaces classiques de Leonardo

---

## ✅ Comment l’utiliser

1. Ouvre [https://app.leonardo.ai](https://app.leonardo.ai)
2. Ouvre la **console du navigateur** (F12 > onglet "Console")
3. Colle ce script et appuie sur Entrée :

```javascript
javascript:(()=>{let s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/groot78700/leonardo-batcher@main/auto-batch-from-txt.js';document.body.appendChild(s);})()
```

4. Clique sur le **bouton 📂 "Charger et Générer"**
   - Il chargera le fichier `.txt` depuis :  
     `https://raw.githubusercontent.com/groot78700/leonardo-batcher/main/prompts_leonardo.txt`
   - Puis lancera les générations automatiquement

---

## 📂 Modifier les prompts

Tu peux modifier le fichier à tout moment ici :  
👉 [`prompts_leonardo.txt`](https://github.com/groot78700/leonardo-batcher/blob/main/prompts_leonardo.txt)
