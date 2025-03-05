const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
const element = document.getElementById("languages");
const languages = ['HTML', 'JavaScript', 'Java', 'Python', 'TypeScript'];
const colors = ['207, 70, 2', '207, 176, 2', '207, 2, 2', '237, 234, 13', '49, 78, 166']
element.textContent = "";
let i = 0;
async function write() {
    element.style = "color: rgb(" + colors[i] + ")";
    const letters = languages[i].split("");
    for (let a = 0; a < letters.length; a++) {
        element.textContent += letters[a];
        await sleep(100);
    }
    await sleep(2000);
    for (let b = 0; b < letters.length; b++) {
        element.textContent = element.textContent.slice(0, -1);
        await sleep(50);
    }
    if (i+1>=languages.length) {
        i=0;
    } else {
        i++;
    }
    setTimeout(write, 1000);
}

write();