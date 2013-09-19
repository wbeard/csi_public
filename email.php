<?php
//include_once('Mail.php');
//include_once('Mail_Mime/mime.php');

try {

	$custEmailTo = $_REQUEST['custEmail'];
	$csiEmail = "victorc@collectorsolutions.com";
	$subjectForCustomer = "CSI POS Solutions White Paper";
	$subjectForCSI = "New White Paper Inquiry";
	$headersForCustomer = "From: victorc@collectorsolutions.com";
	$headersForCSI = "From: victorc@collectorsolutions.com";
	$bodyForCSI = "New request from " . $custEmailTo;
	$bodyForCustomer = "Thanks for your interest. Please find the white paper you requested at this link: http://www.collectorsolutions.com/POSWhitePaper.docx";


	mail($custEmailTo,$subjectForCustomer,$bodyForCustomer,$headersForCustomer);
	mail($csiEmail,$subjectForCSI,$bodyForCSI,$headersForCSI);

	return true;
}
catch (Exception $e) {
	return $e->getMessage();
}
?>