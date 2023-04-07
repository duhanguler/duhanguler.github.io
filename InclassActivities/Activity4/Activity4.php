<!DOCTYPE html>
<html>
<head>
    <title>Registration Form</title>
	<link rel="stylesheet" href="assets/style.css">
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <h1>Registration Form</h1>
    <form action="Activity4-preview.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>

        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>

        <label for="address">Address:</label>
        <input type="text" id="address" name="address"><br><br>

        <label>Country :</label>
            <select name="country" id="country">
                <option value="none">(Please select a country)</option>
                <option value="Turkey">Turkey</option>
                <option value="Holland">America</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
            </select> <br><br>

        <label for="zipcode">ZIP Code:</label>
        <input type="text" id="zipcode" name="zipcode"><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>

        <label for="sex">Sex:</label>
        <input type="radio" id="sex" name="sex" value="Male">
        Male
        <input type="radio" id="sex" name="sex" value="Female">
        Female<br><br>

        <label>Language:</label>
        English <input type="checkbox" name="language[]" id="language" value="English">
        French <input type="checkbox" name="language[]" id="language" value="Spanish">
        German <input type="checkbox" name="language[]" id="language" value="German">
        <br><br>

        <label for="about">About:</label>
        <textarea id="about" name="about"></textarea><br><br>

        <input type="submit" value="Submit" id="submit-button">
    </form>
</body>
</html>

<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = $_POST['name'] ?? 'Not provided';
        $username = $_POST['username'] ?? 'Not provided';
        $password = $_POST['password'] ?? 'Not provided';
        $address = $_POST['address'] ?? 'Not provided';
        $country = $_POST['country'] ?? 'Not provided';
        $zipcode = $_POST['zipcode'] ?? 'Not provided';
        $email = $_POST['email'] ?? 'Not provided';
        $sex = $_POST['sex'] ?? 'Not provided';
        $language = $_POST['language'] ?? 'Not provided';
        $about = $_POST['about'] ?? 'Not provided';
    }
?>