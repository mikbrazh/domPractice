const $__section = document.createElement('section');
$__section.classList.add('love-we-do');
document.body.appendChild($__section);

$__container = document.createElement('div');
$__container.classList.add('container');
$__section.appendChild($__container);

$__loveWeDoLayout = document.createElement('div');
$__loveWeDoLayout.classList.add('love-we-do__layout');
$__container.appendChild($__loveWeDoLayout);

$__row = document.createElement('div');
$__row.classList.add('row');
$__loveWeDoLayout.appendChild($__row);

$__col = document.createElement('div');
$__col.classList.add('col');
$__row.appendChild($__col);

$__loveWeDoContent = document.createElement('div');
$__loveWeDoContent.classList.add('love-we-do__content');
$__col.appendChild($__loveWeDoContent);

$__loveWeDoText = document.createElement('p');
$__loveWeDoText.classList.add('love-we-do__text');
$__loveWeDoText.textContent = 'Любим то, что делаем';
$__loveWeDoContent.appendChild($__loveWeDoText);

$__loveWeDoLink = document.createElement('a');
$__loveWeDoLink.classList.add('love-we-do__link', 'button-default');
$__loveWeDoLink.href = '#';
$__loveWeDoLink.style.display = 'block';
$__loveWeDoLink.textContent = 'О компании';
$__loveWeDoLink.style.color = 'red';
$__loveWeDoContent.appendChild($__loveWeDoLink);

$__btnRed = document.createElement('button');
$__btnRed.textContent = 'Покрасить красным';
$__btnRed.style.margin = '20px 10px 20px 0';
$__btnRed.style.cursor = 'pointer';
$__btnRed.classList.add('btn-red');

$__btnGreen = document.createElement('button');
$__btnGreen.textContent = 'Покрасить зеленым';
$__btnGreen.style.margin = '20px 0 20px';
$__btnGreen.style.cursor = 'pointer';
$__btnGreen.classList.add('btn-green');

$__loveWeDoContent.insertAdjacentElement('beforeend', $__btnRed);
$__loveWeDoContent.insertAdjacentElement('beforeend', $__btnGreen);

$__btnRed.addEventListener('click', () => {
    $__loveWeDoLink.style.color = 'red';
});

$__btnGreen.addEventListener('click', () => {
    $__loveWeDoLink.style.color = 'green';
});

// <!-- ======= love-we-do START ======= -->
// <section class="love-we-do">
//     <div class="container">
//         <div class="love-we-do__layout">
//             <div class="row">
//                 <div class="col">
//                     <div class="love-we-do__content">
//                         <p class="love-we-do__text">Любим то, что делаем</p>
//                         <a href="#" class="love-we-do__link button-default">О компании</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <picture>
//         <source srcset="img/@2x/fishing-net-bg--mobile@2x.jpg" media="(max-width: 575px)">
//         <img class="love-we-do__bg" src="img/@2x/fishing-net-bg@2x.jpg" alt="Рыбак держит сети" width="1440"
//             height="512">
//     </picture>
// </section>
// <!-- ======= love-we-do END ======= -->