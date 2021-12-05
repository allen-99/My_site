export default function cat(parent) {
    const node = document.createElement('img');
    const txt = document.createElement('h1');
    txt.innerHTML = "Самая лучшая девочка";
    parent.append(txt);
    parent.style.background =  'rgb(163, 142, 176)';
    node.src = 'https://sun9-9.userapi.com/impg/vjVT-9baYWyMr3S0p_iTvTuvKIUI787CLhWh9A/I47N-xqZF_8.jpg?size=1197x1600&quality=96&sign=1fb8be6cd862837ce952fb86f7d23112&type=album';
    node.width = 600;
    node.height = 900;
    parent.append(node);

}