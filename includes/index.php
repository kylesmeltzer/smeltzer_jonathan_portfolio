<?php

include 'functions.php';

if (isset($_GET['portfolio'])) {
    $data = get_piece($conn, $_GET['portfolio']);
    echo json_encode($data);
}

else {
    $data = get_portfolio($conn);
    echo json_encode($data);
}
?>