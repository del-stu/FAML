# FAML - Fork Aughhhh Motherf**ker Language 😎

> [!IMPORTANT]
> **The world need more emojis.**

## What the heck is This? 🤔

FAML is a **completely unserious** markup language that replaces boring Markdown syntaxs with emojis! Because who needs `#` when you can have `[❗]`? Who needs `**` when `[😦]` is so much cuter?

**Warning**: This project is 100% created for fun. Do not use in production unless you want to be hunted down by your friends 🔪

## The Ironic Part 😏

You know what's hilarious? This README is written in Markdown. THE THING FAML WAS CREATED TO REPLACE! 🤦

[💬I hate Markdown so much that I created a whole new language💬]

But don't worry! You can [download the FAML version here]([https://github.com/del-stu/FAML/blob/main/README.faml)!

## Quick Start 🚀

### 1. Include FAML

```html
<script src="faml-interpreter-con/x.y.z/fic.js"></script>
```

Or you can make a better interpreter.

### 2. Playing FAML in ours Editor!
[faml-edit](https://del-stu.github.io/FAML/faml-edit)


## Syntax Reference (Super simple!) 📖

| Function | FAML Syntax |
|----------|-------------|
| Header | `[❗] Level 1 Header` |
| More ❗ = smaller header | `[❗❗❗] Level 3 Header` |
| **Bold** | `[😦Bold text😦]` |
| *Italic* | `[🤨Italic text🤨]` |
| ~~Strikethrough~~ | `[😭I hate you😭]` |
| `Code` | `[😎console.log('FAML best')😎]` |
| Code block | `[😎😎]echo "FAML is cool"[😎😎]` |
| Link | `🔗[https://example.com⛓Example]🔗` |
| Image | `🖼[image.jpg]🖼` |
| Horizontal rule | `[↔]` |
| Blockquote | `[💬Someone said that💬]` |
| **Important** blockquote | `[!💬Very important words💬]` |

## Why Would You Use This? 🤷

1. **More fun** - Because writing `[😦bold😦]` is 100x more fun than `**bold**`!
2. **More intuitive** - See ❗ and know it's a header, see 😦 and know it's bold.
3. **You hate Markdown just like me** - Markdown sucks!

## Who Should NOT Use This? 🙅

- Serious projects
- Developers who want to keep their jobs
- People who hate emojis (WHICH IS NOT EXIST)

## Example Code 🎨

```javascript
const famlInput = document.getElementById('faml-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');
        
const faml = new FAMLInterpreter();
        
const famlExample = `[😭I hate Markdown😭]`;

famlInput.value = famlExample;
        
famlInput.addEventListener('input', function() {
    const convertedText = faml.convert(this.value);
    htmlOutput.value = convertedText;
    preview.innerHTML = convertedText;
});
        
famlInput.dispatchEvent(new Event('input'));
```

## Contribution Guide 👥

Want to contribute to this **super cool** project? Cool!

1. Fork this project
2. Add more emoji features
3. Submit a Pull Request
4. Wait to get rejected (just kidding)

## License 📄

This project uses the **MIT** license.
