<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="info.css">
</head>
<body>
<?php
$conn = new mysqli('localhost','root','','victoradmin');;

if(isset($_GET['id']))
{
    $id = $_GET['id'];

    $query = "SELECT * FROM info WHERE id='$id' ";
    $query_run = mysqli_query($conn, $query);

    if(mysqli_num_rows($query_run) > 0)
    {
        foreach($query_run as $row)
        {
            ?>
                <div class="container">
                    <div class="">
                        <span class="micro">First Name:</span>
                        <span class="text"> <?= $row['firstName']; ?> </span>
                    </div>

                    <div>
                        <span class="micro">Last Name:</span>
                        <span class="text"> <?= $row['lastName']; ?> </span>

                    </div>

                    <div>
                        <span class="micro">email:</span>
                        <span class="text"> <?= $row['email']; ?> </span>
                    </div>

                    <div>
                        
                        <span class="micro">phone:</span>
                        <span class="text"> <?= $row['phone']; ?> </span>

                    </div>

                    <div>
                        <span class="micro">link:</span>
                        <span class="text"> <?= $row['link']; ?> </span>
                    </div>

                    <div>
                        <span class="micro">PhysicalAdres:</span>
                        <span class="text"> <?= $row['PhysicalAdres']; ?> </span>
                    </div>

                    <div>
                        <span class="micro">EducationTitle:</span>
                        <span class="text"> <?= $row['EducationTitle']; ?> </span>
                    </div>

                    <div>
                        <span class="micro">EducationGrade:</span>
                        <span class="text"> <?= $row['EducationGrade']; ?> </span>
                    </div>

                    <div>
                        <span class="micro">JobName:</span>
                        <span class="text"> <?= $row['JobName']; ?> </span>
                    </div>

                    <div>
                        <span class="micro">JobStart:</span>
                        <span class="text"> <?= $row['JobStart']; ?> </span>
                    </div>

                    <div>
                        <span class="micro">JobEnd:</span>
                        <span class="text"> <?= $row['JobEnd']; ?> </span>
                    </div>

                    <div>
                        <span class="micro">JobCity:</span>
                        <span class="text"> <?= $row['JobCity']; ?> </span>
                    </div>

                    <div>
                        <span class="micro">JobCompany:</span>
                        <span class="text"> <?= $row['JobCompany']; ?> </span>
                    </div>

                </div>

        <?php
                   }
                  }
             else
                  {
                     echo "!!!EROR!!!";
                  }
                     }
                                   
?>


    </div>
</body>
</html>