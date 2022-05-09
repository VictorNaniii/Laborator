const container = $('#container');
// function buildSocial(){
//         for (let i = 0; i < 10; i++) {
//         if (`${response.Linket[i]}`) {
//           break;
//         }else{
//           $("#premi").append(`<div>${respons.Linket[i]}</div>`);
//         }
//        }
// }

function PrimLink(){

  $.ajax({
    url: 'http://localhost:3000/form-data',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
    //   response.Linket.forEach(title=> {
    //     test+=(`<div>${title}</div>`)
    //  });
    },
  });
}




function ajaxGetRequest(){
  let test="";
  let test1="";
  let test2="";
  let test3="";
  let test4="";
  let test5="";
  let test6="";
  let test7="";
  $.ajax({
    url: 'http://localhost:3000/form-data',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
      response.Linket.forEach(title=> {
        linkerist(`${title}`);
        // ${title}
        test+=(`<div class = "linketuri" id = "links">${title}</div> <br>`)
      });

      response.educations.forEach(title=> {
        test1+=(`<span class = "loxusor">${title}</span>`)
      });
      console.log('ture');

      response.GrDate.forEach(title=> {
        test2+=(`<span class = "loxusor2">${title}</span>`)
      });
      console.log('ture');
      
      response.education.forEach(title=> {
        test3+=(`<span class = "loxusor3" >${title}</span>`)
      });
      console.log('ture');

      response.JobName.forEach(title=> {
        test4+=(`<span class = "loxusor2">${title}</span>`)
      });
      console.log('ture');

      response.StartDate.forEach(title=> {
        test5+=(`<span class = "loxusor2">${title}</span>`)
      });
      console.log('ture');

      response.EndDate.forEach(title=> {
        test6+=(`<span class = "loxusor4">${title}</span>`)
      });
      console.log('ture');

      response.oPTION.forEach(title=> {
        test7+=(`<span class = "loxusor3">${title}</span>`)
      });
      console.log('ture');

      container.append(`
  <div class="container">
  <div>
      <h1 class="Despre" >Despre mine</h1>
  <div class="opt">
     ${response.nume} ${response.prenume}
  </div>
  </div>
  <br>
  <div>
      
  </div>
  <div class="optie">
      Emaill: ${response.email}
  </div>

  <div class="optie">
      Phone: +${response.phone}
  </div>


  
  <div class="optie">
      PhysicalAdres:
  </div>

  <div class="optie">
      Profesion: ${response.Profession}
  </div>
  
  <hr size="3px">
  
  <div class="sectiune l">
      <div class="opt">Educations</div>
      <div class = "dysp">
       <div>${test1}</div>
       <div>${test2}</div>
       <div>${test3}</div>
      </div>
  </div>

  <hr size="3px">
  
  <div class="sectiune">
      <div class="opt">Joob</div>
      <div>
        <div>${test4}</div>
        <div>${test5}</div>
        <div>${test6}</div>
        <div>${test7}</div>
      </div>
  </div>
  <hr size="3px">
  <div class="sectiune">
      <div class="opt ">Link</div>
      <div class = "linkuso"> </div>
      <div> </div>
  </div>
</div>
      `);
    },
  });
}




{/* <p>Link: ${JSON.stringify(response.Link)}</p> */}


$(document).ready(function() {
  ajaxGetRequest();
})

function linkerist(linkul){
  const facebook = linkul.includes('facebook');
  const instagram = linkul.includes('instagram');
  const tiktok = linkul.includes('tiktok');
  const twitch = linkul.includes('twitch');
  const vk = linkul.includes('vk');


  if (facebook) {
    console.log('dsfafasfasf');
    // if($(".linkuso").html()) {
    //   console.log("True din functie");
    // } else {
    //   console.log("False din functie");
    // }
    $(".linkuso").append(`<a href="${linkul}"><img class="dimses" src="icons/facebook.png" alt=""></a>`);

  } if (instagram) {
    console.log('dsfafasfasf');
    $(".linkuso").append(`<a href="${linkul}"><img class="dimses" src="icons/instagram.png" alt=""></a>`);

  } if (tiktok) {
    console.log('dsfafasfasf');
    $(".linkuso").append(`<a href="${linkul}"><img class="dimses" src="icons/tiktok.png" alt=""></a>`);

  } if (twitch) {
    console.log('dsfafasfasf');
    $(".linkuso").append(`<a href="${linkul}"><img class="dimses" src="icons/twitch.png" alt=""></a>`);

  } if (vk) {
    console.log('dsfafasfasf');
    $(".linkuso").append(`<a href="${linkul}"><img class="dimses" src="icons/vk.png" alt=""></a>`);

  } 

}


//==========


// if($("#elementAles").html()) {
//   $("#elementAles").text("");
//   $("#divAles").append("<a href="">)
// }