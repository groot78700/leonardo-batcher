# Leonardo Auto Prompt Batcher (Remote TXT Version)

This script injects a floating 📂 button into [Leonardo AI](https://app.leonardo.ai)'s Image Generation page and loads prompts directly from a `.txt` file hosted on GitHub.

---

## 🧠 Features

- Load prompts directly from a `.txt` file (hosted publicly on GitHub)
- No need to paste prompts manually
- Automatically dispatches them into Leonardo with delay

---

## ✅ How to use

1. Open [https://app.leonardo.ai](https://app.leonardo.ai)
2. Open Chrome Console (F12 > Console tab)
3. Paste this snippet:

```javascript
javascript:(()=>{let s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/groot78700/leonardo-batcher@main/auto-batch-from-txt.js';document.body.appendChild(s);})()
```

4. Click the 📂 button that appears → it will:
   - Fetch the prompts from:  
     `https://raw.githubusercontent.com/groot78700/leonardo-batcher/main/prompts_leonardo.txt`
   - Launch generation one by one

---

## 📂 Prompt File

You can edit this file anytime:
👉 [`prompts_leonardo.txt`](https://github.com/groot78700/leonardo-batcher/blob/main/prompts_leonardo.txt)

