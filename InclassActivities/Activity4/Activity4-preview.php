<!DOCTYPE html>
<html>
<head>
    <title>Preview</title>
</head>
<body>
    <h1>Preview</h1>

    <ul>
        <li><strong>Name:</strong> <?php echo $_POST['name'] ? $_POST['name'] : 'Not provided'; ?></li>
        <li><strong>Username:</strong> <?php echo $_POST['username']; ?></li>
        <li><strong>Password:</strong> <?php echo $_POST['password']; ?></li>
        <li><strong>Address:</strong> <?php echo $_POST['address']; ?></li>
        <li><strong>Country:</strong> <?php echo $_POST['country']; ?></li>
        <li><strong>ZIP Code:</strong> <?php echo $_POST['zipcode']; ?></li>
        <li><strong>Email:</strong> <?php echo $_POST['email']; ?></li>
        <li><strong>Sex:</strong> <?php echo $_POST['sex']; ?></li>
        <li><strong>Language:</strong> <?php foreach($_POST['language'] as $item)
            {
                echo $item . " ";
            }
            echo "<br>"; ?></li>
        <li><strong>About:</strong> <?php echo $_POST['about']; ?></li>
    </ul>
</body>
</html>