d1 = document.getElementById("d1");
d2 = document.getElementById("d2");

p1=document.getElementsByClassName("sousMenu1");
p2=document.getElementsByClassName("sousMenu2");

for (i=0;i<p1.length;i++){
    p1[i].style.display="none";
}
for (i=0;i<p2.length;i++){
    p2[i].style.display="none";
}


d1.addEventListener("mouseover", () => {
    for (i=0;i<p1.length;i++){
    p1[i].style.display="block";
}
});

d1.addEventListener("mouseout", () => {
for (i=0;i<p1.length;i++){
    p1[i].style.display="none";
}
});

d2.addEventListener("mouseover", () => {
    for (i=0;i<p2.length;i++){
    p2[i].style.display="block";
}
});

d2.addEventListener("mouseout", () => {
for (i=0;i<p2.length;i++){
    p2[i].style.display="none";
}
});