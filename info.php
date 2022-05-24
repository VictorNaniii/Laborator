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