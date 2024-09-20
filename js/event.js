const events = document.querySelectorAll('section');
for(item of events)
{
    item.style.backgroundColor = "lavender";
    item.style.borderRadius = "10px";
    item.style.padding = "10px";
    item.style.margin = "10px";
}

const butns = document.querySelectorAll('button');
for(butn of butns)
{
    butn.style.padding = "10px";
    butn.style.width = "150px";
    butn.style.margin = "10px";
    butn.style.backgroundColor = "LavenderBlush";
    butn.style.border = "2px solid RosyBrown";
    butn.style.fontSize = "14px";
}

const spans = document.getElementsByClassName('red-text');
for(span of spans)
{
    span.style.fontSize = '18px';
    span.style.color = 'Crimson';
}