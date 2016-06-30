<?php
$con = mysql_connect("localhost","root","root");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("wuif1604", $con);
$result = mysql_query("SELECT * FROM student");

$arr=array();
while(($row = mysql_fetch_array($result))!=null)
  {
  	$arr[]=$row;
  }
 echo var_dump($arr);
//  for($i=0;$i<count($arr);$i++){
//  	$r=$arr[$i];
//  	echo "<div class='list'>";
//  	echo "<li>$r[id]</li>";
//  	echo "<li>$r[textarea]</li>";
//  	echo "<li id='shenhe'>未审核</li>";
//  	echo "<li class='li'>x</li>";
//  	echo "</div>";
//  }
// mysql_close($con);

?>