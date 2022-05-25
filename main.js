let required = 'Acest câm este necesar de îndeplinit';
let firstNames = document.getElementById('firstName') ;
let OutpErr = document.getElementById('firstNameError');

let mesages = "Introduceti toate datele";
let Addmesages = "Adaugati o lista";

let victor1;
let victor2;
let victor3;
let victor4;




$(".flag").click(function() {
 navigate();
 });

 function navigate() {
    timer = setTimeout(() => {
        window.location.href = 'output.php';
    }, 1); 
}



 
 let el = document.querySelector('button.submit');
//  el.setAttribute('type', 'submit');


document.getElementById('submit').addEventListener('click', function () {
    victor1 = validateField('firstName', required);
    victor2 =  validateField('lastName', required);


      validateEmail();
      validaro();
       validatephone();

    let chekere = victor1 && victor2 ;
console.log(chekere);


if (chekere) {
    console.log("HIasfasfasfasf");
    el.setAttribute('type', 'submit');

}else{
    console.log("----------");
   
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


let protocol = "https://";
$(document).on("change",()=> {
	if(!$('#linkk').val().search(protocol)) {
   $('#linkk').removeClass("red");
   SocialscKi($('#linkk'))
   xx=0;
  }else {
        $('#linkk').addClass("red");
    xx=1;
  }
})

function SocialscKi(id) {
    const Input = document.getElementById(id);
    console.log(xx);
    if(xx == 0){
        $('#linkk').attr("disabled","disabled"); 
    }
  }


function DataEnds(){
    if($(".buboncic").is(":checked")) {
        $(".end_date").addClass("noness");
        console.log("Checked");
    } else {
        console.log("UnChecked");
        $(".end_date").removeClass("noness");
    }
}


function validaro(){
    let ids = 'svedc';
    const un = validateField('jobNames',required);
    const ut = validateField('strDat',required);
    const um =validateField('enDat',required);
    const valoare1 = validateField(ids,required);
    const valoare2 = validateField('grdate',required);
    const valoare3 = validateField('edTy',required);
    a = un & ut & um & valoare1 & valoare2 & valoare3;
    return a;

}



function face(){
    let alegereDeSeleect = document.querySelector('alegereDeSeleect');
    let ales = document.getElementById('OfCit').value;
    console.log(ales);

    if (ales == 'Chișinău') {

        console.log("lucreza");
    }if (ales == 'Chișinău') {
        document.getElementById('alesSe').innerHTML = `
        <select name="JobCompany" id="CytiGETS1" class="derer">
        <option id="0">JSC Alimentarmash</option>
    
        <option id="21">Erlan Ltd.</option>
    
        <option id="42">Melidan-Impex SRL</option>
    
        <option id="63">CASALUX</option>
    
        <option id="84">Marflex ltd</option>
    
        <option id="105">Pronibur Ltd</option>
    
        <option id="126">Valvcom</option>
    
        <option id="147">Asierto</option>
    
        <option id="168">Cuptorul Fermecat SRL</option>
    
        <option id="189">GOSTMD</option>
    
        <option id="210">Prometeu-T S. A.</option>
    
        <option id="231">PALADI GUDVIN SRL</option>
    </select>
        
        `
    }if (ales == 'Bălți') {
        document.getElementById('alesSe').innerHTML =`
        <select name="JobCompany" id="CytiGETS1" class="derer">
        <option id="15">ICS Moldova Zahar Srl</option>
    
        <option id="36">Policontract LTD</option>
    
        <option id="57">CP"PRODCOOP"</option>
    
        <option id="78">AGROTAB</option>
    
        <option id="99">Natusana</option>
    
        <option id="120">Astorics</option>
    
        <option id="141">DGG International</option>
    
        <option id="162">Pro-mezcer</option>
    
        <option id="183">Minunata Xenia</option>
    
        <option id="204">Alexandru Vlas</option>
    
        <option id="225">TransProvision SRL</option>
    </select>
        `
    }if (ales == 'Orhei') {
        document.getElementById('alesSe').innerHTML =`
        <select name="JobCompany" id="CytiGETS1" class="derer">
        <option id="9">Supramed Ltd.</option>
    
        <option id="30">DGG International SRL</option>
    
        <option id="51">Calateea Prod</option>
    
        <option id="72">Gold Line - International</option>
    
        <option id="93">Riatec S.R.L.</option>
    
        <option id="114">Belarus Moldova Travel</option>
    
        <option id="135">ManAgro Group</option>
    
        <option id="156">Agresca</option>
    
        <option id="177">Arhiconi-Grup Ltd</option>
    
        <option id="198">alitex-com</option>
    
        <option id="219">Blink Comercial Group</option>
    
        <option id="240">Agrovika International Ltd</option>
    </select>
        `
        
    }if (ales == 'Tiraspol') {
        document.getElementById('alesSe').innerHTML =`
        <select name="JobCompany" id="CytiGETS1" class="derer">
        <option id="3">Colusvin SRL</option>
    
        <option id="24">Milvi Ltd</option>
    
        <option id="45">Neocasa SRL</option>
    
        <option id="66">Onixess Co.Ltd</option>
    
        <option id="87">Salonix-Teh SRL</option>
    
        <option id="108">Canes SRL</option>
    
        <option id="129">EuroPlastics.ru</option>
    
        <option id="150">Ital Automation Systems S.r.l.</option>
    
        <option id="171">nana firm</option>
    
        <option id="192">Carion</option>
    
        <option id="213">Livada-servis srl</option>
    
        <option id="234">Serlin-Com SRL</option>
    </select>
        `
        
    }if (ales == 'Soroca') {
        document.getElementById('alesSe').innerHTML =`
        <select name="JobCompany" id="CytiGETS1" class="derer">
        <option id="18">Best Ebuy Limited</option>
    
        <option id="39">JSC Floarea Soarelui</option>
    
        <option id="60">Vladalina SRL</option>
    
        <option id="81">TOC-GNP Group Ltd</option>
    
        <option id="102">Zavas Raw Human Hair</option>
    
        <option id="123">Jet-Set International Co.</option>
    
        <option id="144">Amfiss SRL</option>
    
        <option id="165">Nord-Centru Grup</option>
    
        <option id="186">Allium Ursinum</option>
    
        <option id="207">Organic-co S.R.L.</option>
    
        <option id="228">Rodital-Lux</option>
    </select>
        `
        
    }if (ales == 'Nisporeni') {
        document.getElementById('alesSe').innerHTML =`
        <select name="JobCompany" id="CytiGETS1" class="derer">
        <option id="12">Premium Profil SRL</option>
    
        <option id="33">Pegza Group</option>
    
        <option id="54">Medjis Grup Ltd.</option>
    
        <option id="75">Levaro</option>
    
        <option id="96">UTE Ltd</option>
    
        <option id="117">I.I. "UCRAINCIUC VITALIE"</option>
    
        <option id="138">Zorile SA</option>
    
        <option id="159">Gbc Srl</option>
    
        <option id="180">VV Company L.T.D.</option>
    
        <option id="201">AgroKon Trading LTD</option>
    
        <option id="222">Raolux</option>
    
        <option id="243">Slimbody Inc.</option>
    </select>
        `
        
    }if (ales == 'Bender') {
        document.getElementById('alesSe').innerHTML =`
        <select name="JobCompany" id="CytiGETS1" class="derer">
        <option id="6">Import GNP Ltd</option>
    
        <option id="27">Baltik Trading Llc</option>
    
        <option id="48">Interprime</option>
    
        <option id="69">Irida</option>
    
        <option id="90">Alelus Grup SRL</option>
    
        <option id="111">Aksav Group</option>
    
        <option id="132">ecopas-plus srl</option>
    
        <option id="153">Minerul</option>
    
        <option id="174">mako trade zzo</option>
    
        <option id="195">The Business Centre of Moldova</option>
    
        <option id="216">Interprana</option>
    
        <option id="237">CREATIV CONCEPT</option>
    </select>
        `
        
    }

}







$(document).ready(function() {
    // loadTitles();
    // loadEducation();
    // loadJoob();
})










