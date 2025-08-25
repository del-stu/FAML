/**
 * FAML Interpreter con
 * 用于将 FAML (Fork Aughhhh Motherfucker Language) 转换成 HTML 的官方解释器
 * 
 * @version 1.0.0
 * @license MIT
 */

class FAMLInterpreter {
    constructor() {
        this.version = 'FAML Interpreter con 1.0.0';
    }

    /**
     * 将 FAML 文本转换为 HTML
     * @param {string} text - FAML 格式的文本
     * @returns {string} 转换后的 HTML
     */
    convert(text) {
        let convertedText = '';
        let inCodeBlock = false;
        let lines = text.split('\n');
        
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();
            
            // 处理代码块
            if (line === '[😎😎]') {
                inCodeBlock = !inCodeBlock;
                convertedText += inCodeBlock ? '<pre><code>' : '</code></pre>\n';
                continue;
            }
            
            if (inCodeBlock) {
                convertedText += line + '\n';
                continue;
            }
            
            // 处理标题 (自动闭合)
            if (line.startsWith('[❗')) {
                const level = (line.match(/❗/g) || []).length;
                if (level <= 5) {
                    const titleText = line.replace(/^\[❗+]\s*/, '');
                    convertedText += `<h${level}>${titleText}</h${level}>\n`;
                    continue;
                }
            }
            
            // 处理段落
            if (line.startsWith('[😑') && line.endsWith('😑]')) {
                const paraText = line.replace('[😑', '').replace('😑]', '');
                convertedText += `<p>${paraText}</p>\n`;
                continue;
            }
            
            // 处理链接
            if (line.startsWith('🔗[') && line.includes('⛓') && line.endsWith(']🔗')) {
                const parts = line.split('⛓');
                if (parts.length === 2) {
                    const url = parts[0].replace('🔗[', '');
                    const text = parts[1].replace(']🔗', '');
                    convertedText += `<p><a href="${url}">${text}</a></p>\n`;
                    continue;
                }
            }
            
            // 处理图片
            if (line.startsWith('🖼[') && line.endsWith(']🖼')) {
                const src = line.replace('🖼[', '').replace(']🖼', '');
                convertedText += `<p><img src="${src}"></p>\n`;
                continue;
            }
            
            // 处理水平线
            if (line === '[↔]') {
                convertedText += '<hr>\n';
                continue;
            }
            
            // 处理普通引用
            if (line.startsWith('[💬') && line.endsWith('💬]')) {
                const quoteText = line.replace('[💬', '').replace('💬]', '');
                convertedText += `<blockquote><p>${quoteText}</p></blockquote>\n`;
                continue;
            }
            
            // 处理重要引用
            if (line.startsWith('[!💬') && line.endsWith('💬]')) {
                const quoteText = line.replace('[!💬', '').replace('💬]', '');
                convertedText += `<blockquote class="faml-important"><p>${quoteText}</p></blockquote>\n`;
                continue;
            }
            
            // 处理内联样式（粗体、斜体、删除线、代码）
            if (line.length > 0) {
                let processedLine = line
                    .replace(/\[😦(.*?)😦\]/g, '<strong>$1</strong>')
                    .replace(/\[🤨(.*?)🤨\]/g, '<em>$1</em>')
                    .replace(/\[😭(.*?)😭\]/g, '<del>$1</del>')
                    .replace(/\[😎(.*?)😎\]/g, '<code>$1</code>');
                
                // 如果不是空行，自动包装成段落
                if (processedLine.length > 0) {
                    convertedText += `<p>${processedLine}</p>\n`;
                }
            } else {
                convertedText += '\n';
            }
        }
        
        return convertedText;
    }

    /**
     * 获取解释器版本信息
     * @returns {string} 版本号
     */
    getVersion() {
        return this.version;
    }

    /**
     * 验证 FAML 语法是否正确
     * @param {string} text - FAML 格式的文本
     * @returns {boolean} 语法是否有效
     */
    validate(text) {
        // 简单的语法验证
        try {
            this.convert(text);
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * 获取 FAML 语法的帮助文档
     * @returns {object} 包含语法说明的对象
     */
    getHelp() {
        return {
            title: "FAML 语法参考",
            syntax: [
                "标题: [❗] 一级标题, [❗❗] 二级标题 等 (最多5级)",
                "段落: [😑文本内容😑]",
                "粗体: [😦粗体文本😦]",
                "斜体: [🤨斜体文本🤨]",
                "删除线: [😭删除文本😭]",
                "行内代码: [😎代码😎]",
                "代码块: 用 [😎😎] 包围代码",
                "链接: 🔗[URL⛓链接文本]🔗",
                "图片: 🖼[图片URL]🖼",
                "水平线: [↔]",
                "引用: [💬引用文本💬]",
                "重要引用: [!💬重要引用文本💬] (添加 faml-important 类)"
            ]
        };
    }
}

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    // Node.js 环境
    module.exports = FAMLInterpreter;
} else if (typeof define === 'function' && define.amd) {
    // AMD 环境 (RequireJS)
    define([], function() {
        return FAMLInterpreter;
    });
} else {
    // 浏览器全局变量
    window.FAMLInterpreter = FAMLInterpreter;
}