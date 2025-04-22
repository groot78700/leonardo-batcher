# Leonardo Auto Prompt Batcher (Interface Edition)

This script injects a floating UI in Leonardo AI's Image Generation page.

## 🧠 Features

- Paste or **load prompts from a remote .txt file**
- Automatically dispatch them into the prompt input every X seconds
- Fully compatible with app.leonardo.ai

## ✅ How to use

1. Open https://app.leonardo.ai
2. Open browser console (F12)
3. Paste this snippet:

```javascript
javascript:(()=>{let s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/VOTRE_USERNAME/leonardo-batcher@main/auto-batch-interface.js';document.body.appendChild(s);})()
```

4. Or run it as a local userscript / bookmarklet.
