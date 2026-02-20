// 获取当前文件名
let currentFile = window.location.pathname.split('/').pop();
console.log('当前文件:', currentFile);  // 调试用

// 换成txt文件名
let textFile = currentFile.replace('.html', '.txt');
console.log('要读取的txt:', textFile);  // 调试用

// 读取txt
fetch(textFile)
    .then(response => {
        console.log('响应状态:', response.status);  // 调试用
        return response.text();
    })
    .then(content => {
        console.log('获取到的内容长度:', content.length);  // 调试用
        // 用三种方式都试试
        let div = document.getElementById('content');
        div.innerHTML = content;  // 先试试innerHTML
        div.innerText = content;  // 再试试innerText
        div.textContent = content; // 再试试textContent
    })
    .catch(error => {
        console.error('错误:', error);
        document.getElementById('content').innerText = '加载失败: ' + error;
    });