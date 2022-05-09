let required = 'Acest câm este necesar de îndeplinit';
let firstNames = document.getElementById('firstName') ;
let OutpErr = document.getElementById('firstNameError');

let mesages = "Introduceti toate datele";
let Addmesages = "Adaugati o lista";

let victor1;
let victor2;
let victor3;
let victor4;


document.getElementById('submit').addEventListener('click', function () {
    victor1 = validateField('firstName', required);
    victor2 =  validateField('lastName', required);
      validateEmail();
       validatephone();

    let chekere = victor1 && victor2 ;
console.log('dfasfsa------------------');
console.log(chekere);

let xyz = x + y + z;

if (chekere) {
    console.log("HI")
    if(xyz => 1){
        console.log('----fsf-s-f-s-fs');
        window.location.href = 'file:///D:/TW/4/validare/111111111111111111111/output.html';
    }else{
    }
}else{
   
}
    // if ( victor1&&victor2&&victor3&&victor4) {
        
    // }

});

function validateField(id, errorMessage) {// validarea textului
    const fieldInput = document.getElementById(id);
    const label = fieldInput.parentElement.children.item(0);
    const error = document.getElementById(`${id}Error`);
    const value = fieldInput.value;

    if (value === null || value === '' || value.trim() === '') {
        error.innerHTML = errorMessage;
        error.style.display = 'block';
        label.classList.add('error');
        return false;
    } else {
        error.innerHTML = '';
        error.style.display = 'none';
        label.classList.remove('error');
    }
    
    return true;
}

function validateEmail() {//valid rmail
  const emailInput = document.getElementById('email');
  const label = emailInput.parentElement.children.item(0);
  const error = document.getElementById(`emailError`);
  const value = emailInput.value;

  
  if (!value.includes('@') || !value.includes('.') || value.lastIndexOf('.') < value.lastIndexOf('@')) {
      error.innerHTML = 'Email-ul este formatat greșit';
      error.style.display = 'block';
      label.classList.add('error');
      return false;
  } else {
      error.innerHTML = '';
      error.style.display = 'none';
      label.classList.remove('error');
  }

  return true;
}


function validatephone() {//validare la telehon
  const phoneInput = document.getElementById('phone');
  const label = phoneInput.parentElement.children.item(0);
  const error = document.getElementById(`phoneeror`);
  const value = phoneInput.value;

let x;

  if (value == 0  ) {
      // alert('3');
      error.innerHTML = '';
      error.style.display = 'none';
      label.classList.remove('error');
  }else{

  if (value.lastIndexOf('0')  ) {
      x = 1;
  }

  if (value.lastIndexOf('+373') ) {
      x = 2; 
  }

  switch (x) {
      case 2:
          // alert('1');
          if (value.length <9) {
              error.innerHTML = 'Numărul de telefon este formatat greșit sau aparține unei țări străine';
              error.style.display = 'block';
              label.classList.add('error');

          } else {
              error.innerHTML = '';
              error.style.display = 'none';
              label.classList.remove('error');
          }
          break;
      
      case 1:
          // alert('2');
          if (value.length <12) {
              error.innerHTML = 'Numărul de telefon este formatat greșit sau aparține unei țări străine';
              error.style.display = 'block';
              label.classList.add('error');

          } else {
              error.innerHTML = '';
              error.style.display = 'none';
              label.classList.remove('error');
          }
          break;
  }
}
}

///==============================================//
  var x = 0;

  let linkImputMesage ='Linkul este invalid plasati un link valid'
    var xx = 0;
function addInput() {//functia care adauga lincuri
	if (x < 10 && xx< 1) {
    var str = ' <input type="text" id = "linkk' + (x + 1) +'" placeholder="Social link"  class="Mangan"> <div class="error" id="linkk'+(x + 1)+'Error"></div>  <p id="input' + (x + 1) +'"></p> ';
    document.getElementById('input' + x).innerHTML = str;
    x++;
    xx++;
  } else
  {
  	// alert('STOP it!');
  }


    //     $('.educatie').each(function() {
    //       articles.push($(this).val());
    //   });

        
        // Link:$('.s').val()  






  $('#linkk' + (x) +'').each(function () {//butonu care adauga si valideaza 
    $(this).on('change', function(){
        SocialscKi('linkk' + (x) +'');
    });

  });
}

let protocol = "https://";
$(document).on("change",()=> {
	if(!$('#linkk' + (x) +'').val().search(protocol)) {
   $('#linkk' + (x) +'').removeClass("red");
   SocialscKi($('#linkk'+x))
   xx=0;
  }else {
        $('#linkk' + (x) +'').addClass("red");
    xx=1;
  }
})

function SocialscKi(id) {
    const Input = document.getElementById(id);
    console.log(xx);
    if(xx == 0){
        $('#linkk' + (x) +'').attr("disabled","disabled"); 
    }
  }



function buildRow(id,label) {
    return `
        <option id="${id}">${label}</option>
    `;
};


function loadTitles() {
    $.ajax({
        url: 'http://localhost:3000/professions/13',
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function(response) {
            response.forEach(title => {
                $(".lungime").append(buildRow(title.id, title.label));
            });
            console.log(response);
        },
    });
}




  
  $('#addInput').on('click', addInput);





//==/==/======================//
var y = 0;
var yy = 0;
function addEduc(){
     if( yy<1 ){
         var eduuc = `Education Title :<br> 
         <input type="text" class = "educatie" id = "svedc` + (y + 1) + `" placeholder="" > 
         <div class="error" id="svedc` + (y + 1) + `Error"></div>
          <span class = "graducil` + (y + 1) + `">
          <b class ="insert" >Graduation Date :</b><br></span>
           <input class = "grafateDater" type="date" placeholder="" id ="grdate` + (y + 1) + `">  
            <div class="error" id="grdate` + (y + 1) + `Error"></div>
             <div id = "EducationEducation` + (y + 1) + `">Education</div>
              <select  id="edTy` + (y + 1) + `" class="bb"></select>
              <div class="error" id="edTy` + (y + 1) + `Error"></div>
               <button  onclick="subBut()" class="bn btn btn-outline-secondary" id="btjsn` + (y + 1) + `'" type="button"> Submit</button>
                <p id="Ed` + (y + 1) + `"></p> `;
         
         document.getElementById('Ed' + y).innerHTML = eduuc;
         y++;
         yy++;
    }
}
{/* <b>Education Type:</b><br> <input type="text" placeholder="" id="edTy'+(y + 1)+'" > */}
// edTy'+(y)+'
function loadEducation() {
    $.ajax({
        url: 'http://localhost:3000/education-type/13',
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function(response) {
            response.forEach(title => {
                $(".bb").append(buildRow(title.id, title.education));
            });
            console.log(response);
        },
    });
}

$('#educadd').on('click', addEduc);
$('#educadd').on('click', loadEducation);
// let educadd = document.getElementById('#educadd');

// educadd.addEventListener('click', function () {
//     addEduc();
//     loadEducation();
// });

// function ascunderea(id1, id2, id3,id4,id5,id6){
//     $(id1).attr("disabled","disabled");
//     $(id2).hide();
//     $(id3).hide();
//     $(id4).hide();
//     $(id5).hide();
//     $(id6).hide();

// }


function subBut(){
  $('#svedc').val();

  let ids = 'svedc'+(y)+'';
  const valoare1 = validateField(ids,required);
  const valoare2 = validateField('grdate'+ (y) +'',required);
  const valoare3 = validateField('edTy'+ (y) +'',required);

  console.log(valoare1 && valoare2 &&valoare3);

  if(valoare1 && valoare2 &&valoare3){
    // ascunderea($('svedc'+y),$('grdate'+y),$('edTy'+y),$('btjsn'+y),$('graducil'+y),$('EducationEducation'+y));
    $('#svedc'+y).attr("disabled","disabled");
    $('#grdate'+y).hide();
    $('#edTy'+y).hide();
    $('#btjsn'+y).hide();
    $('#graducil'+y).hide();
    $('#EducationEducation'+y).hide();
    $('.insert').hide();

    // console.log('Amin');
    yy = 0; 
    }else{
     
  }
}
//<option value="">JSC Alimentarmash</option> <option value="">Erlan Ltd.</option> <option value="">Melidan-Impex SRL</option> <option value="">CASALUX</option> <option value="">Marflex ltd</option> <option value="">Pronibur Ltd</option> <option value="">Valvcom</option> <option value="">Asierto</option> <option value="">Cuptorul Fermecat SRL</option> <option value="">GOSTMD</option> <option value="">Prometeu-T S. A.</option> <option value="">PALADI GUDVIN SRL</option>
var z = 0;
var zz = 0;
// '<b>Job Name :</b><br>  <select class ="de" id ="jobNames'+(z + 1)+'" name="" id=""></select><div class="error" id="jobNames'+(z + 1)+'Error"></div> <b>StartDate :</b><br> <input class = "DataDeStart" type="date" placeholder="" id ="strDat'+(z + 1)+'">  <div class="error" id="strDat'+(z + 1)+'Error"></div><b>EndDate :</b><br> <input type="date" placeholder="" id="enDat'+(z + 1)+'" class="end_date"> <div class="error" id="enDat'+(z + 1)+'Error"></div><label for="checkbox">  In prezent <input type="checkbox" id ="checkk'+(z + 1)+'" class="buboncic" name="checkbox"><br><br><br><select name="" id="srl'+(z + 1)+'">  </select> <div class="error" id="srl'+(z + 1)+'Error"></div> <button  onclick="subBt()"  class="bn" type="button" >Submit</button>  <p id="Jb' + (z + 1) + '"></p> ';




function Jobb(){ 
    if(zz<1){
        var Job = `<div class="checker">
        <b>Job Name :</b><br>
        <select class ="de" id ="jobNames`+(z + 1)+`" name="" id=""></select>
        <div class="error" id="jobNames`+(z + 1)+`Error"></div>
         <b class = "StartDateStartDate">StartDate :</b><br> 
         <input class = "DataDeStart" type="date" placeholder="" id ="strDat`+(z + 1)+`"> 
          <div class="error" id="strDat`+(z + 1)+`Error"></div>
          <b class="end_date">EndDate :</b><br>
           <input type="date" placeholder="" id="enDat`+(z + 1)+`" class="end_date"> 
           <div class="error" id="enDat`+(z + 1)+`Error"></div>
           <br>
           <label for="checkbox"> <div class = "prezent"> In prezent 
           <input type="checkbox" id ="checkk`+(z + 1)+`" class="buboncic" onchange ="DataEnds()" name="checkbox"> 
          <br><br></div>
          <label for="CYti">CYti</label>
        <select name="" onchange = "face()" class = "ferma" id = "OfCit`+(z+1)+`">
        <option value="0" selected></option>
        <option value="Chișinău">Chișinău</option>
        <option value="Bălți">Bălți</option>
        <option value="Orhei">Orhei</option>
        <option value="Tiraspol">Tiraspol</option>
        <option value="Soroca">Soroca</option>
        <option value="Nisporeni">Nisporeni</option>
        <option value="Bender">Bender</option>
    </select>
    <br>
    <label for="company">company</label>
    
    <select name="" id = "CytiGETS`+(z+1)+`" class = "derer"></select><br>
    <button  onclick="subBt()"  class="bn btn btn-outline-secondary" type="button" >Submit</button>
    <p id="Jb`+(z+1)+`"></p>
        </div>`;
        
    console.log(z);
        document.getElementById('Jb' + z).innerHTML = Job;
        z++;
        zz++;
        console.log(z);
   }
}    

function DataEnds(){
    if($(".buboncic").is(":checked")) {
        $(".end_date").addClass("noness");
        console.log("Checked");
    } else {
        // console.log("UnChecked");
        console.log("UnChecked");
        $(".end_date").removeClass("noness");
    }
}

function getNameOfCity() {
	return $("#OfCit"+(z)+"").val();
}
let city;
// $(".ferma").on("change",() =>
function face() {
	city = getNameOfCity();
    console.log(getNameOfCity());
    loadOneSelect();
}
// )
// ${city}

function subBt(){    
    const un = validateField('jobNames'+(z)+'',required);
    const ut = validateField('strDat'+ (z) +'',required);
    const um =validateField('enDat'+ (z) +'',required);
      if(un & ut & um){

          $('#jobNames'+z).attr("disabled","disabled");
          $('#strDat'+z).hide();
          $('#enDat'+z).hide();
          $('#btjsn'+z).hide();
          $('#OfCit'+z).hide();
          $('#CytiGETS'+z).hide();
          $('.StartDateStartDate').hide();
          $('.end_date').hide();
          $('.prezent').hide();

          zz = 0;

        //   $('.insert').hide();
      
      }
    //---------------------------------------------------------
  //   validateField('srl'+ (z) +'',required);
  
  }


function loadOneSelect() { 
    $.ajax({
        url: `http://localhost:3000/companies/13/city/${city}`,
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function(response) {
        $("#CytiGETS"+(z)+"").html();
            response.forEach(title => {
                $("#CytiGETS"+(z)+"").append(buildRow(title.id, title.label));
            });
        },
    });
}


$(document).ready(function() {
    console.log();
})

// $("#dedede").on("click",deleter);
// let buicani = document.getElementsByClassName("deletImpute");
// function deleter(){
//     if($("#dedede").is(":checked")) {
//             // $(".deletImpute").css("display","hidden");
//             // getElementById("deterere").classList.add("noness");
//             buicani.css("display","noness");
//             console.log("True");
//           } 
//           else 
//           {
//             // getElementById("deterere").classList.add("noness");
//             // $(".deletImpute").css("display","block");
//             console.log("False");
//           }
// }
// {
//     if($("#dedede").is(":checked")) {
//         // $(".deletImpute").css("display","hidden");
//         // getElementById("deterere").classList.add("noness")
//     console.log("True");
//   } 
//   else 
//   {
//     // $(".deletImpute").css("display","block");
//     console.log("False");
//   }
// })


////===--=-==-=-=--










////====--=-=-=-=-=-



// $('#jobul').on('click', );
// $('#jobul').on('click', Jobb());
// $('#jobul').on('click', loadJoob);

//  <input type="text" placeholder="" id ="jobNames'+(z + 1)+'" ></input>

function loadJoob() {
    $.ajax({
        url: 'http://localhost:3000/job-name/13',
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function(response) {
            response.forEach(title => {
                $(".de").append(buildRow(title.id, title.name));
            });
            console.log(response);
            console.log('fasfas');
        },
    });
}


$(".btrn").click(()=> {Jobb();})
$(".btrn").click(()=> {loadJoob();})
$(".btrn").click(()=> {loadOneSelect();})


////=============================================///Trimiterea la server 



const container = $('#container');
var count = 0;
let articles = [];
let articles2 = [];
let Linkarticles = [];
let educativ = [];
let JBName = [];
let StDat = [];
let EnDat = [];
let prIs = [];

function makeRequest(index) {
    container.append(`<div>Sending request ${index}</div>`);
    $('.Mangan').each(function() {
        Linkarticles.push($(this).val());
    });
    
    $('.educatie').each(function() {
        articles.push($(this).val());
    });

    $('.grafateDater').each(function() {
        articles2.push($(this).val());
    });

    $('.bb').each(function() {
        educativ.push($(this).val());
    });

    $('.de').each(function() {
        JBName.push($(this).val());
    });
    
    $('.DataDeStart').each(function() {
        StDat.push($(this).val());
    });

    $('.end_date').each(function() {
        EnDat.push($(this).val());
    });

    $('.derer').each(function() {
        prIs.push($(this).val());
    });

    $.ajax({
        url: 'http://localhost:3000/form-data',
        method: 'POST',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({
            nume: $('#firstName').val(),
            prenume: $('#lastName').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            address: $('#PhysicalAdres').val(),        
            Profession: $('#Profession').val(),
            Linket: Linkarticles,
            educations: articles,
            GrDate:articles2,
            education:educativ,
            JobName:JBName,
            StartDate:StDat,
            EndDate:EnDat,
            oPTION:prIs,

        }),
        success: function(response) {
            console.log('ture');
            container.append(`<div>${JSON.stringify(response)}</div>`);
        },
    });
}


    //     $('.educatie').each(function() {
    //       articles.push($(this).val());
    //   });

        
        // Link:$('.s').val()  


$('#submit').on('click', () => {
    makeRequest(++count);
});


//================
// $("#basic-form").submit(function(e) {

//     e.preventDefault();

//     var form = $(this);
//     var url = form.attr('action');
//     var userInputs = {};
//     form.serializeArray().forEach((input) => {userInputs[input.name] = input.value;})
//     console.log(userInputs);
//     $.ajax({

//       url,
//       method: 'POST',
//       datatype: 'json',
//       headers: {'Content-Type': 'application/json'},
//       data: JSON.stringify(userInputs),
//       success: function(response) {
//         console.log(response);
//       }
//     });
//   });


//     $('.submit').each(function() {
//       articles.push($(this).val());
//   });



// $("#basic-form").submit(function(e) {
//     e.preventDefault();
//     var form = $(this);
//     // var url = form.attr('action');
//     var userInputs = {};
//     form.serializeArray().forEach((input) => {userInputs[input.name] = input.value;})
//     console.log(userInputs);
//     $.ajax({
//       url: 'http://localhost:3000/form-data',
//       method: 'POST',
//       datatype: 'json',
//       headers: {'Content-Type': 'application/json'},
//       data: JSON.stringify(userInputs),
//       success: function(response) {
//         console.log(response);
//       }
//     });
//   });


$(document).ready(function() {
    loadTitles();
    // loadEducation();
    // loadJoob();
})




$('#submit').on('click', () => {
    $.ajax({
        url: 'http://localhost:3000/form-data',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            console.log('ture');
            container.append(`<div>${JSON.stringify(response)}</div>`);
        },
    });
});




// $(".buboncic").on("change",()=> {
//     if($(".buboncic").is(":checked")) {
//         $(".end_date").css("display","hidden");
//         console.log("Checked");
//     } else {
//         console.log("UnChecked");
//         $(".end_date").css("display","block");
//     }
// })

// checkk'+(z + 1)+'

// $('.buboncic').on("click",function() {
// 	if($(".buboncic").is(":checked")) {
//   $('.end_date').removeClass("hidden");
//         console.log("True");
//   } else {
//   $('.end_date').addClass("hidden");
//           console.log("False");
//   }
// })



// $(".delac").on("change",()=> {
//     if($(".delac").is(":checked")) {
//         $(".deletImpute").addClass("noness");
//         console.log("Checked");
//     } else {
//         console.log("UnChecked");
//         $(".deletImpute").removeClass("noness");
//     }
// })

// $(".buboncic").on("change",()=> {
//     if($(".buboncic").is(":checked")) {
//         // $(".end_date").addClass("noness");
//         console.log("Checked");
//     } else {
//         console.log("UnChecked");
//         // $(".end_date").removeClass("noness");
//     }
// })



