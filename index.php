


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nani Victor</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <div class="container forma col-sm-3" required>
        <form id="basic-form" action="vic.php" method="post">

            <label for="firstName">First name: </label>
            <input type="text" id="firstName" name="firstName">
            <div class="error" id="firstNameError"></div>

        <div>
            <label for="lastName">Last name: </label>
            <input type="text" id="lastName" name="lastName">
            <div class="error" id="lastNameError"></div>
        </div>

        <div>
            <label for="email">Email: </label> <br>
            <input type="text" id="email" name="email">
            <div class="error" id="emailError"></div>
        </div>

        <div>
            <label for="phone">Phone: </label> <br>
            <input type="number" id="phone" name="phone">
            <div class="error" id="phoneeror"></div>
        </div>

        <div>
            <label for="PhysicalAdres">PhysicalAdres</label>
            <input  type="text" name="PhysicalAdres" id="PhysicalAdres">
        </div>

        <div class="noness">
            flag
        </div>

        <div>
            <label for="Profession">Profession</label>

            <select class="lungime" name="select" id="Profession">
            <option value="0" selected=""></option>
                
            <option id="3">actress</option>
        
            <option id="6">artist</option>
        
            <option id="9">bartender</option>
        
            <option id="12">builder</option>
        
            <option id="15">businessperson</option>
        
            <option id="18">cashier</option>
        
            <option id="21">dental hygienist</option>
        
            <option id="24">developer</option>
        
            <option id="27">economist</option>
        
            <option id="30">engineer</option>
        
            <option id="33">fisherman</option>
        
            <option id="36">judge</option>
        
            <option id="39">musician</option>
        
            <option id="42">optician</option>
        
            <option id="69">waiter</option>
            <option id="45">photographer</option>
        
            <option id="48">pilot</option>
        
            <option id="51">politician</option>
        
            <option id="54">psychologist</option>
        
            <option id="57">salesperson</option>
        
            <option id="60">singer</option>
        
            <option id="63">therapist</option>
        
            <option id="66">undertaker</option>

        </select>
            <input type="text" name="link" id = "linkk" placeholder="Social link"  class="Mangan">
             <div class="error" id="linkkError"></div> 

        </div>
        <span></span>

                <b>Education Title :</b> <br> 
                <input type="text" class = "educatie" name="EducationTitle" id = "svedc" placeholder="" > 
                <div class="error" id="svedcError"></div>
                 <span class = "graducil">
                 <b class ="insert" >Graduation Date :</b><br></span>
                  <input class = "grafateDater" type="date" placeholder="" name="EducationGrade" id ="grdate">  
                   <div class="error" id="grdateError"></div>
                    <div id = "EducationEducation">Education</div>
                    <select id="edTy" class="bb">
                        <option id="2">Lower secondary education</option>
                    
                        <option id="4">Post-secondary non-tertiary education</option>
                    
                        <option id="6">Bachelor's or equivalent</option>
                    
                        <option id="8">Doctorate or equivalent</option>
                    
                        <option id="1">Primary education</option>
                    
                        <option id="2">Lower secondary education</option>
                    
                        <option id="3">Upper secondary education</option>
                    
                        <option id="4">Post-secondary non-tertiary education</option>
                    
                        <option id="5">Short-cycle tertiary education</option>
                    
                        <option id="6">Bachelor's or equivalent</option>
                    </select>
                     <div class="error" id="edTyError"></div>
                       <p id="Ed"></p>



            <div class="checker">
                <b>Job Name :</b><br>
                <select class="de" id="jobNames" name="JobName">
                    <option id="1">teacher</option>
                
                    <option id="2">doctor</option>
                
                    <option id="3">police officer</option>
                
                    <option id="4">chef / cook</option>
                
                    <option id="5">firefighter</option>
                
                    <option id="6">bus driver</option>
                
                    <option id="7">scientist</option>
                
                    <option id="8">post man</option>
                
                    <option id="9">vet</option>
                
                    <option id="10">artist</option>
                
                    <option id="11">pilot</option>
                
                    <option id="12">nurse</option>
                
                    <option id="13">baker</option>
                
                    <option id="16">farmer</option>
                
                    <option id="19">butcher</option>
                
                    <option id="22">football player</option>
                
                    <option id="25">musician</option>
                
                    <option id="28">hairdresser</option>
                
                    <option id="31">office worker</option>
                
                    <option id="34">soldier</option>
                
                    <option id="37">miner</option>
                
                    <option id="40">reporter</option>
                
                    <option id="43">computer programmer</option>
                
                    <option id="46">surgeon</option>
                
                    <option id="49">detective</option>
                </select><br>
                <div class="error" id="jobNamesError"></div>
                 <b class = "StartDateStartDate">StartDate :</b><br> 
                 <input class = "DataDeStart" type="date" placeholder="" id ="strDat" name="JobStart"> 
                  <div class="error" id="strDatError"></div>
                  <b class="end_date">EndDate :</b><br>
                   <input type="date" placeholder="" id="enDat" class="end_date" name="JobEnd"> 
                   <div class="error" id="enDatError"></div>
                   <br>
                   <label for="checkbox"> <div class = "prezent"> In prezent 
                   <input type="checkbox" id ="checkk" class="buboncic" onchange ="DataEnds()" name="checkbox"> 
                  <br><br></div>
                  <label for="CYti">CYti</label>

                  <select name="JobCity" onchange = "face()" class = "ferma" id = "OfCit">
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
            <label for="company">company</label><br>
            <div class = "alegereDeSeleect" id = "alesSe">
                ALEGETI UN ORAS!!!!
            </div>
            <p id="Jb"></p>
                </div>
            
            <p>
                <button class="submit" id="submit" type="button" onclick="subinteaza()" >SUBMIT</button>
                <!-- <input class="submit" id="submit" type="button" value="SUBMIT" > -->
                <!-- <button></button> -->
            </p>
            <input class="flag" type="button" value="Baza de Date">
        </div>
        </form>
    </div>



    <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
    <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
    <script src="main.js"></script>


</body>
</html>