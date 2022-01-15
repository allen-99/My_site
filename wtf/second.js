export default function girl(parent) {
    const node = document.createElement('img');
    const txt = document.createElement('h1');
    txt.innerHTML = "Самая лучшая девочка";
    parent.append(txt);
    parent.style.background =  'rgb(163, 142, 176)';
    node.src = 'https://sun9-9.userapi.com/impg/vjVT-9baYWyMr3S0p_iTvTuvKIUI787CLhWh9A/I47N-xqZF_8.jpg?size=1197x1600&quality=96&sign=1fb8be6cd862837ce952fb86f7d23112&type=album';
    node.width = 600;
    node.height = 900;
    parent.append(node);
    const back = document.createElement('a');
    back.innerHTML = 'назад';
    back.style.font = 'Roboto Slab';
    back.style.fontSize = '30px';
    back.style.padding = '5px';
    back.style.display = 'table';
    back.style.color = 'rgba(0, 0, 0, 0.7)';
    back.href = '../../index.html';
    parent.append(back);
}