const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
const element = document.getElementById("languages");
const languages = [
    { text:'HTML', color: '207, 70, 2'},
    { text: 'JavaScript', color: '207, 176, 2'},
    { text: 'Java', color: '207, 2, 2'},
    { text: 'Python', color: '237, 234, 13'}, 
    { text: 'TypeScript', color: '49, 78, 166'}];
element.textContent = "";
let i = 0;
async function write() {
    element.style = "color: rgb(" + languages[i].color + ")";
    const letters = languages[i].text.split("");
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