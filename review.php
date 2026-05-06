<?php
 $pageTitle = 'TransHair Tour - Пересадка волос';
 $pageDescription = 'Пересадка волос в России за 1 день. Лучшие специалисты-трансплантологи.';
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Отзывы</title>
    <meta name="description" content="<?= $pageDescription ?>">

    <!-- Шрифты и иконки -->
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <link rel="icon" type="image/svg+xml" sizes="any" href="img/36.svg">

    <!-- Ваши стили -->
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/review-page.css">
</head>
<body>

    <?php include __DIR__ . '/includes/popap/popap.php'; ?>
    <?php include __DIR__ . '/includes/popap/popap-two.php'; ?>
    <?php include __DIR__ . '/includes/popap/popap-three.php'; ?>
    <?php include __DIR__ . '/includes/vacancy-modal/vacancy-modal.php'; ?>
    <?php include __DIR__ . '/includes/video-modal/video-modal.php'; ?>

    <?php include __DIR__ . '/includes/header/header.php'; ?>

    <?php include __DIR__ . '/includes/review/reviews-two.php'; ?>


    <?php include __DIR__ . '/includes/map/map.php'; ?>
    <?php include __DIR__ . '/includes/footer/footer.php'; ?>

    <!-- Ваши скрипты -->
    <script src="/js/script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
</body>
</html>