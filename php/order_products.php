<?php
// include_once("database.php");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'users';
$mysqli = new mysqli($db_host, $db_username, $db_password,$db_name);

if ($mysqli->connect_error) {
  die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
  $request = json_decode($postdata);
  $id_product = trim($request->id_product);
  $qtyTotal_product = trim($request->qtyTotal_product);
  // $id_order = trim($request->uuid);
  $id_order = mysqli_real_escape_string($mysqli, trim($request->uuid));
  // $email = mysqli_real_escape_string($mysqli, trim($request->email));
  $sql = "INSERT INTO order_products(id_order, id_product, kolvo) VALUES ('$id_order','$id_product','$qtyTotal_product')";
  if ($mysqli->query($sql) === TRUE) {
    $authdata = [
    'id_order' => $id_order,
    'id_product' => $id_product,
    'qtyTotal_product' => $qtyTotal_product
    ];
    echo json_encode($authdata);
  }
}

?>
