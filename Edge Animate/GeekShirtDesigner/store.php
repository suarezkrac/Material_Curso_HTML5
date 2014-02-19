<?php
$fh = fopen("store.txt", "a");
fwrite($fh, date("Y-m-d H:i:s")." ".$_POST["data"]."\n");
fclose($fh);