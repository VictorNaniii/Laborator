<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href='https://css.gg/bot.css' rel='stylesheet'>
    <title>Document</title>
</head>
<body>
<div class = "container">
    <?php
    $link = mysqli_connect("localhost", "root", "", "victoradmin");
		  $conn = new mysqli('localhost','root','','victoradmin');
		  if($conn->connect_error){
			  die("Error: " . $conn->connect_error);
		  }
	  $sql = "SELECT * FROM info";



	  echo "<table class='table table-bordered'><tr>

      <thead class='thead-dark'>
    <tr>
    <th scope='col'>#id</th>
    <th scope='col'>Firs tName</th>
    <th scope='col'>Last Name</th>
    <th scope='col'>Email</th>
    <th scope='col'>Phone</th>
    <th scope='col'>Link</th>
    <th scope='col'>View</th>
    </tr>
  </thead>";
      
      if($result = mysqli_query($link, $sql)){
        if(mysqli_num_rows($result) > 0){
            while($row = mysqli_fetch_array($result)){
                echo "<tr>";
                    echo "<td>" . $row['id'] . "</td>";
                    echo "<td>" . $row['firstName'] . "</td>";
                    echo "<td>" . $row['lastName'] . "</td>";
                    echo "<td>" . $row['email'] . "</td>";
                    echo "<td>" . $row['phone'] . "</td>";
                    echo "<td>" . $row['link'] . "</td>";
                    echo "<td>" ." <a href='info.php?id=${row['id']}' target='_blank'><i class='gg-bot'></i></a> ". "</td>";
                echo "</tr>";
            }
            echo "</table>";

            mysqli_free_result($result);
        } else{
            echo "No records matching your query were found.";
        }
    } else{
        echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
    } 
    mysqli_close($link);

      ?>
      <div>
        <input type="text" class = "col-6  text-center" id="text-to-find" value="">
        <button class = "btn btn-outline-secondary" type="button" onclick="javascript: FindOnPage('text-to-find'); return false;">Gaseste</button>
        <!-- <input  value="Искать"/> -->
        <br/><i>Introuceti ID & Firs tName & Last Name & Email & Phone & Link</i>

        <!-- <input type="text" class = "col-6  text-center">
        <button class = "btn btn-outline-secondary">Gaseste</button> -->
      </div>
</div>


<script src="info.js"></script>

</body>
</html>