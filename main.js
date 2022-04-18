$(document).ready(function() {
    $("#basic-form").validate();
  });

  jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  $( "#basic-form" ).validate({
    rules: {
      field: {
        required: true,
        phoneUS: true
        // matches: "[0-9]+",
        // minlength : 8,
        // maxlength : 9
      }
    }
  });

  jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, "");
    return this.optional(element) || phone_number.length > 9 && 

    phone_number.match(/^[\+?373\?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/)


}, "Numarul este invalid");


  var x = 0;

function addInput() {
  // $(".s").off("change");


  // $('.s').on("change", validateSocial);

  // console.log($('.s'));

	if (x < 10) {
    var str = '  <input type="text" class="s" placeholder="social media link" required > <div  id="input' + (x + 1) + '"></div>';
    document.getElementById('input' + x).innerHTML = str;
    x++;
  } else
  {
  	alert('STOP it!');
  }

  $('.s').each(function () {
    $(this).on('change', validateSocial);
  });
}

var y = 0;
var yy = 0;
function addEduc(){
     if( yy<1 ){
         var eduuc = ' <b>Education Title :</b><br> <input type="text" id = "svedc" placeholder="" required>  <b>Graduation Date :</b><br> <input type="date" placeholder="" >  <b>Education Type :</b><br> <input type="text" placeholder="" required>  <button  onclick="subBut()"  class="bn" >Save</button> <p id="Ed' + (y + 1) + '"></p> ';
         document.getElementById('Ed' + y).innerHTML = eduuc;

         y++;
         yy++;
    }
}


function subBut(){
  yy = 0;
  document.getElementById('Ed'+y).hidden = true;
}

var z = 0;
var zz = 0;
function Jobb(){
    if(zz<1){
        var Job = '<b>Job Name :</b><br> <input type="text" placeholder="" required>  <b>StartDate :</b><br> <input type="date" placeholder="">  <b>EndDate :</b><br> <input type="date" placeholder="">  <button  onclick="subBt()"  class="bn" >Save</button>  <p id="Jb' + (z + 1) + '"></p> '
        document.getElementById('Jb' + z).innerHTML = Job;
        
        z++;
        zz++;
   }
}

function subBt(){
  zz = 0;
  alert('HI');
}


///================================//

// $('#name').keyup(function() {
//   var val = $('#name').val();//Получаем данные из input
//   $('.txt').html(val);//Вставляем значение в тег с классом txt
// });


const container = $('#container');
var count = 0;

function makeRequest(index) {
    container.append(`<div>Sending request ${index}</div>`);

    $.ajax({
        url: 'http://localhost:3000/form-data',
        method: 'POST',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({
            nume: $('#name').val(),
            prenume: $('#names').val(),
            email: $('#email').val(),
            phone: $('#field').val(),
            address: $('#adres').val(),        
            Profession: $('#Profession').val(), 
            Link: $('.as').val(), 
            GraduationDate:$('.edcc').val(),
            EducationTyp:$('.edc').val(),
            Ed:$('.cla').val(),
            JobName :$('.job').val(),
            StartDate:$('.stdat').val(),
            EndDate:$('.jobb').val(),

        }),
        // Link:$('.s').val()  
        success: function(response) {
            console.log('ture');
            container.append(`<div>${JSON.stringify(response)}</div>`);
        },
    });
}

$('#submit').on('click', () => {
    makeRequest(++count);
});

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


// document.getElementById('submit').addEventListener('click', function () {
//   [
//     'name'
// ].forEach(id => {
//     const emelent = document.getElementById(id);
//     const valueElement = document.getElementById(`${id}Display`);
//     valueElement.innerHTML = `${id}: ${emelent.value};`;

// }
// });


// document.getElementById('submitButton').addEventListener('click', function () {
//   let cityHasValue = validateField('city', 'City is required');


//   if (cityHasValue) {
//       cityHasValue = validateCity();
//   }
  
//   const allFieldsValid =   cityHasValue ;
//   if (allFieldsValid) {
//       showValues();
//   } else {
//       hideValues();
//   }
// });

// function showValues() {
//   [
//       'city'
//   ].forEach(id => {
//       const emelent = document.getElementById(id);
//       const valueElement = document.getElementById(`${id}Display`);
//       valueElement.innerHTML = `${id}: ${emelent.value};`;
//   });
// }
      
////=================////============================================///validarea linkurilor.

function validateSocial() {

  console.log('test');
  if(/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test($('.link').val())){
    alert("valid URL");
} else {
    alert("invalid URL");
}
}


$('#addInput').on('click', addInput);

// $(".s").on("change", validateSocial);


