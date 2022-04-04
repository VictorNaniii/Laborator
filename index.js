function sayHi() {
   alert("Hi");
}

var firstCol = document.getElementById('Pcol');
var secondCol = document.getElementById('Dcol');
var thirdCol = document.getElementById('Tcol');
var container = document.getElementById('colone');

function getColor() {
    const colors = ['00', '0F', '5F', 'AF', 'FF'];
    const fisrIndex = getActiveIndex(firstCol);
    console.log(fisrIndex);
    const red = colors[fisrIndex];
    const green = colors[getActiveIndex(secondCol)];
    const blue = colors[getActiveIndex(thirdCol)];
    return `#${red}${green}${blue}`;
}

function getActiveIndex(element) {
    let i = 0;
    const inputs = element.getElementsByTagName('input');
    for (i =0; i< 5; i++) {
        if (inputs.item(i).checked) {
            return i;
        }
    }

    return i < 5 ? i : 0;
}

firstCol.addEventListener('click', () => {
    resetColors();
    firstCol.style.borderColor = getColor();
});
secondCol.addEventListener('click', () => {
    resetColors();
    secondCol.style.borderColor = getColor();
});
thirdCol.addEventListener('click', () => {
    resetColors();
    thirdCol.style.borderColor = getColor();
});




var IMColP = document.getElementById('IMColP');
var IMColD = document.getElementById('IMColD');
var IMColT = document.getElementById('IMColT');

function Im1(){
    switch(getActiveIndex(firstCol)){
        case 0:
            IMColP.src = "https://ds04.infourok.ru/uploads/ex/043b/0015880a-fe887047/hello_html_m514518f.jpg";

        break;
        case 1:
            IMColP.src = "https://esotericbunker.com/wp-content/uploads/2015/12/Mexico_flag-3.png";
        break;
        case 2:
            IMColP.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/250px-Flag_of_Canada_%28Pantone%29.svg.png";
        break;
        case 3:
            IMColP.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Bandera_VZLA.svg/1200px-Bandera_VZLA.svg.png";
        break;
        case 4:
            IMColP.src = "https://cutewallpaper.org/21/wallpaper-colombia/Colombia-Flag-UHD-4K-Wallpaper-Pixelz.jpg";
        break;
    }
}

function Im2(){
    switch(getActiveIndex(secondCol)){
        case 0:
            IMColD.src = "https://static.wikia.nocookie.net/wolfenstein/images/9/95/1200px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg.png/revision/latest?cb=20200202064301";
        break;
        case 1:
            IMColD.src = "https://lexcase.com/wp-content/uploads/2020/03/2560px-Flag_of_Italy.svg_.png";
        break;
        case 2:
            IMColD.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png";
        break;
        case 3:
            IMColD.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1200px-Flag_of_Romania.svg.png";
        break;
        case 4:
            IMColD.src = "https://st3.depositphotos.com/2809911/14921/i/600/depositphotos_149214000-stock-photo-flat-moldovan-flag.jpg";
        break;
    }
}

function Im3(){
    switch(getActiveIndex(thirdCol)){
        case 0:
            IMColT.src = "https://store-images.s-microsoft.com/image/apps.59428.9007199266313609.5df7dba9-30a8-4c04-94dc-686537069d94.70d479c6-a850-4d37-876d-30461dc33bda";
        break;
        case 1:
            IMColT.src = "http://www.lomond.ru/sites/default/files/images/media/gif/flags/27-%5BConverted%5D.gif";
        break;
        case 2:
            IMColT.src = "https://avatars.mds.yandex.net/i?id=a4a73b3554f8390e151affe92b4f2b44-5859268-images-thumbs&n=13";
        break;
        case 3:
            IMColT.src = "https://cdn.pixabay.com/photo/2016/01/06/02/51/julia-roberts-1123541_1280.jpg";
        break;
        case 4:
            IMColT.src = "https://stemwomen.asia/sites/default/files/2021-07/Singapore.jpg";
        break;
    }
}


function ScFlag(){
    switch(getActiveIndex(firstCol)){
    case 0 :
        document.getElementById("flag").innerHTML = "SUA";
        break;
     case 1 :
        document.getElementById("flag").innerHTML = "Mexico";
        break;
    case 2 :
        document.getElementById("flag").innerHTML = "Canada";
        break; 
        case 3 :
            document.getElementById("flag").innerHTML = "Venesuela";
            break;
        case 4 :
            document.getElementById("flag").innerHTML = "Columbia";
            break;                           
    }
}

function DcFlag(){
    switch(getActiveIndex(secondCol)){
    case 0 :
        document.getElementById("flag").innerHTML = "France";
        break;
     case 1 :
        document.getElementById("flag").innerHTML = "Italy";
        break;
    case 2 :
        document.getElementById("flag").innerHTML = "Germany";
        break; 
        case 3 :
            document.getElementById("flag").innerHTML = "Romania";
            break;
        case 4 :
            document.getElementById("flag").innerHTML = "Moldova";
            break;                           
    }
}

function TcFlag(){
    switch(getActiveIndex(thirdCol)){
    case 0 :
        document.getElementById("flag").innerHTML = "Kazakhstan";
        break;
     case 1 :
        document.getElementById("flag").innerHTML = "China";
        break;
    case 2 :
        document.getElementById("flag").innerHTML = "Japan";
        break; 
        case 3 :
            document.getElementById("flag").innerHTML = "Korea";
            break;
        case 4 :
            document.getElementById("flag").innerHTML = "Singapure";
            break;                           
    }
}
function reset(){
    IMColP.src = "https://ds04.infourok.ru/uploads/ex/043b/0015880a-fe887047/hello_html_m514518f.jpg";
    IMColD.src = "https://static.wikia.nocookie.net/wolfenstein/images/9/95/1200px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg.png/revision/latest?cb=20200202064301";
    IMColT.src = "https://store-images.s-microsoft.com/image/apps.59428.9007199266313609.5df7dba9-30a8-4c04-94dc-686537069d94.70d479c6-a850-4d37-876d-30461dc33bda";

    firstCol.style.borderColor = 'transparent';
    secondCol.style.borderColor = 'transparent';
    thirdCol.style.borderColor = 'transparent';

    document.getElementById("flag").innerHTML  = "Flag";

    const inputs = firstCol.getElementsByTagName('input');
    inputs.item(0).checked = true;
    const inputss = secondCol.getElementsByTagName('input');
    inputss.item(0).checked = true;
    const inputsss = thirdCol.getElementsByTagName('input');
    inputsss.item(0).checked = true;
}