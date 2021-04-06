<!DOCTYPE html>
<html>
<head>
<title>t08</title>
<meta charset="utf-8" />
</head>
<body>
<?php
if(isset($_POST["course"]))
{
    $title = $_POST["course"];
}
?>
<h1>nu neshevo strashnovo</h1>
<form action="index.php"  method="POST">
    <input  type="radio" name="course" value="Nop" />bom bom bom bom<br>
    <input type="radio" name="course" value="Top))))" />tchaw tchaw tchaw tchaw<br>
    <input type="radio" name="course" value="????" />hau hau hau hau<br>
    <br>
    <button type="submit">try!</button>
    <p><?php echo($title); ?></p>
</form>

</body>
</html>