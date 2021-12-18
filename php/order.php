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
// echo '<script>alert("Alert check")</script>';

// $message = "Alert check";
// echo "<script type='text/javascript'>alert('$message');</script>";

if ($mysqli->connect_error) {
  // echo '<script>alert("Connection OK")</script>';
  die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
  $request = json_decode($postdata);
  $id = mysqli_real_escape_string($mysqli, trim($request->id));
  // $id = trim($request->id);
  $products = trim($request->items);
  $order=uniqid("OR");
  $sql = "INSERT INTO orders (id_order, date_ord, id_cust) VALUES ('$order',CURDATE(),'$id')";
  if ($mysqli->query($sql) === TRUE) {
    $authdata = [
    'order' => $order,
    'id' => $id
    ];
    echo json_encode($authdata);
  }
  else{
    die("Query failed!" . mysql_error() . $sql);
  }


  // foreach ($products as $item) {
  //   $id_product = trim($item.id);
  //   $kolvo_product = trim($item.qtyTotal);
  //   $sql = "INSERT INTO order_products(id_order,id_product,kolvo) VALUES ('$order','$id_product','$kolvo_product')";
  //   if ($mysqli->query($sql) === TRUE) {
  //     $authdata = [
  //     'order' => $order,
  //     'id_product' => $id_product,
  //     'kolvo_product' => $kolvo_product
  //     ];
  //     echo json_encode($authdata);
  //   }
  // }



  // $name = trim($request->name);
  // $pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
  // $email = mysqli_real_escape_string($mysqli, trim($request->email));
  // $sql = "INSERT INTO users(name,password,email) VALUES ('$name','$pwd','$email')";
  // if ($mysqli->query($sql) === TRUE) {
  //   $authdata = [
  //   'name' => $name,
  //   'pwd' => '',
  //   'email' => $email,
  //   'Id' => mysqli_insert_id($mysqli)
  //   ];
  //   echo json_encode($authdata);
  // }
}

?>
