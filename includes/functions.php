<?php
include 'connect.php';

function get_piece($pdo, $item) {
    $query = "SELECT * FROM tbl_portfoliopieces WHERE id = '$item'";

    $get_item = $pdo->query($query);
    $results = array();

    while($row = $get_item->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;

        // you could run subresult queries here - just write another function and append.
    }

    return $results;
}

function get_portfolio($pdo) {
    $query = "SELECT * FROM tbl_portfoliopieces";

    $get_item = $pdo->query($query);
    $results = array();

    while($row = $get_item->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }

    return $results;
}

?>