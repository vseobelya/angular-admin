<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE');
header('Access-Control-Allow-Headers: content-type or other');
header('Content-Type: application/json');

$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "users";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// $request = json_decode($postdata);
// $id_cust = trim($request->id_cust);
// $trp = mysqli_query($conn, "SELECT * from orders WHERE id_order='".$id_cust."'");
$sql = "SELECT g.name_good as name_good, o.id_order as id_order, o.date_order as date_order, o.kolvo as kolvo from all_orders o, goods g WHERE o.id_product = g.id_good and  id_cust='" . $_GET['id_cust'] . "'";
// $sql = "SELECT * from all_orders o, goods g WHERE o.id_product = g.id_product and  id_cust='" . $_GET['id_cust'] . "'";
// $sql = ;
// $trp = mysqli_query($conn, "SELECT * from all_orders where id_cust='" . $_GET['id_cust'] . "'");
// $trp = mysqli_query($conn, "SELECT * from all_orders o, goods g WHERE o.id_product = g.id_good and id_cust='" . $_GET['id_cust'] . "'");
$trp = mysqli_query($conn, $sql);
$rows = array();
while($r = mysqli_fetch_assoc($trp)) {
    $rows[] = $r;
}

print json_encode($rows);

die();
// $postdata = file_get_contents("php://input");
// if(isset($postdata) && !empty($postdata)){
//   $request = json_decode($postdata);
//   $id_cust = trim($request->id_cust);
//     //get all users details
//   $sql = "SELECT * FROM orders";
//
//     $trp = mysqli_query($conn, $sql);
//     $rows = array();
//     while($r = mysqli_fetch_assoc($trp)) {
//       $sql2 = "SELECT * FROM order_products WHERE id_order='".$r["id_order"]."'";
//       $trp2 = mysqli_query($conn, $sql2);
//       while($r2 = mysqli_fetch_assoc($trp2))
//         $rows[] = $r2;
//     }
//
//     print json_encode($rows);
//
// die();
// }
?>
