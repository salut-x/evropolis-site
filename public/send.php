<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Honeypot check — bots fill hidden field, humans don't
if (!empty($_POST['website'])) {
    http_response_code(200);
    echo json_encode(['ok' => true]);
    exit;
}

$to      = 'mop1@evropolis.pro';
$from    = 'no-reply@evropolis.pro';
$siteUrl = 'https://evropolis.pro';

// ── Helpers ────────────────────────────────────────────────────────────────

function sanitize(mixed $value): string
{
    if (!is_string($value)) return '';
    // Strip newlines to prevent header injection, trim whitespace
    return trim(str_replace(["\r", "\n"], ' ', strip_tags($value)));
}

function validatePhone(string $phone): bool
{
    // Accept +7(000) 000-00-00 style or plain digits
    return (bool) preg_match('/^\+?[\d\s\(\)\-]{7,20}$/', $phone);
}

// ── Read & validate ─────────────────────────────────────────────────────────

$fullName = sanitize($_POST['full_name'] ?? '');
$phone    = sanitize($_POST['phone'] ?? '');
$message  = sanitize($_POST['message'] ?? '');

$errors = [];

if (mb_strlen($fullName) < 2) {
    $errors[] = 'Укажите имя и фамилию';
}

if (!validatePhone($phone)) {
    $errors[] = 'Укажите корректный номер телефона';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['error' => implode('; ', $errors)]);
    exit;
}

// ── Build email ─────────────────────────────────────────────────────────────

$subject = '=?UTF-8?B?' . base64_encode('Новая заявка с сайта Европолис') . '?=';

$body  = "Новая заявка с сайта {$siteUrl}\n";
$body .= "──────────────────────────────\n";
$body .= "Имя и фамилия: {$fullName}\n";
$body .= "Телефон: {$phone}\n";
if ($message !== '') {
    $body .= "Комментарий:\n{$message}\n";
}
$body .= "──────────────────────────────\n";
$body .= date('d.m.Y H:i') . " (МСК)\n";

$headers  = "From: Сайт Европолис <{$from}>\r\n";
$headers .= "Reply-To: {$from}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: base64\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$encodedBody = chunk_split(base64_encode($body));

$sent = mail($to, $subject, $encodedBody, $headers);

if ($sent) {
    http_response_code(200);
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Не удалось отправить письмо']);
}
