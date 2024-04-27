const find = (selector) => {
    return document.querySelector(selector);
}
// const creatEl = (element) => {
//     return document.createElement('element');
// }
// const body = find("body");

const btn_add = find('.add_taskBtn');
const consoles = find('.consoles');
const input_txt=find('.input_txt');


btn_add.addEventListener('click', ()=>{
    if (input_txt.value !== ''){
        const task_box = document.createElement('div');
        const imput = document.createElement('input');
        const label = document.createElement('label');
        const text = document.createElement('span');
        const trashImg = document.createElement('div');
        const delete_btn = document.createElement('button');
        // const img=document.createElement('img')
        text.textContent = input_txt.value
//add class
        imput.type = 'checkbox';
        task_box.classList.add('task_box');
        trashImg.classList.add('trashImg');
        text.classList.add('text');
        delete_btn.classList.add('delete_btn')

//append
        label.append(imput);
        label.append(text);
        trashImg.append(delete_btn);
        task_box.append(label);
        task_box.append(trashImg);
        // img.append(delete_btn)
        consoles.append(task_box);

        imput.addEventListener('click',  ()=>{
            imput.classList.toggle('click');
            text.classList.toggle('text_mod');
        })
        trashImg.addEventListener('click',  ()=>{
            consoles.removeChild(trashImg.parentNode);
        })
    }
})








