<?php
 $pageTitle = 'TransHair Tour - Пересадка волос';
 $pageDescription = 'Пересадка волос в России за 1 день. Лучшие специалисты-трансплантологи.';
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $pageTitle ?></title>
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
</head>
<body>

    <?php include __DIR__ . '/includes/header.php'; ?>
    <?php include __DIR__ . '/includes/popap.php'; ?>
    <?php include __DIR__ . '/includes/hero.php'; ?>
    <?php include __DIR__ . '/includes/calculator.php'; ?>
    <?php include __DIR__ . '/includes/auto.php'; ?>
    <?php include __DIR__ . '/includes/rating.php'; ?>
    <?php include __DIR__ . '/includes/guarantee.php'; ?>

    <?php include __DIR__ . '/includes/car-selection.php'; ?>
    <?php include __DIR__ . '/includes/reviews.php'; ?>
    <?php include __DIR__ . '/includes/checklist.php'; ?>
    <?php include __DIR__ . '/includes/workdays.php'; ?>
    <?php include __DIR__ . '/includes/customer-path.php'; ?>
    <?php include __DIR__ . '/includes/auto-check.php'; ?>
    <?php include __DIR__ . '/includes/specialists.php'; ?>
    <?php include __DIR__ . '/includes/news.php'; ?>
    <?php include __DIR__ . '/includes/choose-us.php'; ?>
    <?php include __DIR__ . '/includes/docs.php'; ?>
    <?php include __DIR__ . '/includes/map.php'; ?>
    <?php include __DIR__ . '/includes/footer.php'; ?>

    <!-- Ваши скрипты -->
    <script src="/js/script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
</body>
</html>