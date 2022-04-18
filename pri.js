const container = $('#container');

function ajaxGetRequest(){
  $.ajax({
    url: 'http://localhost:3000/form-data',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
      console.log('ture');
      container.append(`
        <h2 class  = "caa ">Yoyr detalis</h2>
        <p>  Nume: ${JSON.stringify(response.nume)}</p>
        <p>Prenume: ${JSON.stringify(response.prenume)}</p>
        <p>Email: ${JSON.stringify(response.email)}</p>
        <p>phone: ${JSON.stringify(response.phone)}</p>
        <p>address: ${JSON.stringify(response.address)}</p>
        <p>physical address: ${JSON.stringify(response.Profession)}</p>
        <p>Link: ${JSON.stringify(response.Link)}</p>
        <h2 class  = "caa ">Eur Educations</h2>
        <p>Education Title : ${JSON.stringify(response.GraduationDate)}</p>
        <p>Graduation Date : ${JSON.stringify(response.EducationTyp)}</p>
        <p>Education Type : ${JSON.stringify(response.Ed)}</p>
        <h2 class  = "caa "> Your Jobs </h2>
        <p>Job Name: ${JSON.stringify(response.JobName)}</p>
        <p>Start Date: ${JSON.stringify(response.StartDate)}</p>
        <p>End Date : ${JSON.stringify(response.EndDate)}</p>
      `);
    },
  });
}
{/* <p>Link: ${JSON.stringify(response.Link)}</p> */}
$('#collect-button').on('click', () => {
  ajaxGetRequest()
});