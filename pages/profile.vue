<template>
  <div class="landing">
    <section class="landing__video-content title-video-block">
      <h1 class="content__title mobile">доктор гордиенко</h1>
      <video ref="videoPlayer" class="content__video" :muted="isMuted">
        <source src="/assets/video/homepage2.mp4" type="video/mp4">
      </video>
      <div class="content-video__control">
        <button class="control__btn" @click="togglePlay">
          <img src="/assets/icons/play.png">
        </button>
        <div class="control__buttons-wrapper">
          <button class="control__btn" @click="toggleMute">
            <img src="/assets/icons/volume.png">
          </button>
          <button class="control__btn" @click="toggleFullscreen">
            <img src="/assets/icons/fullscreen.png">
          </button>
        </div>
      </div>
    </section>
    <section class="landing__description-content">
      <h1 class="description__title">ОЛЕГ <br> ВИКТОРОВИЧ <br> ГОРДИЕНКО</h1>
      <ul class="description__list list__gap">
        <li>Сертифицированный пластический хирург, эксперт в области омолаживающей хирургии лица</li>
        <li>Один из немногих пластических хирургов в России, успешно практикующих глубокую плоскостную подтяжку <br>
          лица по новой в России методике - Deep Plane FaceLift</li>
        <li>Выпускник Первого Санкт-Петербургского Государственного Медицинского Университета имени академика <br> И. П.
          Павлова</li>
        <li>Член Российского Общества Пластических, Реконструктивных и Эстетических хирургов (РОПРЭХ)</li>
        <li>Клиника Высшей Категории GRANDMED г. Санкт-Петербург</li>
      </ul>
      <div class="content-block">
        <div class="content-wrapper">
          <div class="content-wrapper">
            <div class="description__logo">
              <img src="/assets/images/logo1.png">
              <img src="/assets/images/logo2.png">
              <img src="/assets/images/logo3.png">
              <img src="/assets/images/logo4.png">
            </div>
          </div>
          <h2 class="description__subtitle" id="0" v-html="animatedTitles[0].value"></h2>
          <p class="description__text" :class="{ 'animate': isVisible }">Экспертная эстетическая хирургия лица — это удивительный синтез науки и
          искусства. Здесь законы художественной композиции не менее важны, чем в живописи, музыке или скульптуре. Я
          убежден, что пластический хирург должен обладать высоким эстетическим интеллектом, который он должен
          тренировать всю свою профессиональную жизнь, как тренирует свое тело спортсмен. Также важно иметь
          художественный взгляд и безупречное эстетическое чутье. Я оттачиваю свое мастерство не только в
          операционной: работая в студии со скульптурной глиной, я тренирую “чувство меры” и учусь видеть пропорции.
          Только у меня, в отличие от скульптора, нет права на ошибку. Я не имею морального права творить на лице как
          мне вздумается и делать с лицом то, чего никогда у человека не было. Я - не “скульптор”. Я -
          “художник-реставратор”. Тот, кто работает с редкими и очень дорогими произведениями искусства. Я не являюсь
          “арбитром” красоты, но ее дух безусловно руководит мной, когда я работаю в операционной с лицами людей.
          Таким образом, я становлюсь лишь соавтором вашей красоты.</p>
        </div>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <img src="/assets/images/piano.png" class="fullscreen__image">
    </section>
    <section class="landing__description-content">
      <h1 class="description__title-min">Омолаживающие операции на лице, которые я выполняю, чтобы <br> вы могли
        вдохновлять и вдохновляться своим отражением:</h1>
      <ul class="description__list list-margin" :class="{ 'animate': isVisible }">
        <li>Deep Plane FaceLift (инновационная подтяжка лица и шеи)</li>
        <li>Все виды подтяжек лба и бровей</li>
        <li>Блефаропластика</li>
        <li>Глубокая подтяжка шеи и платизмопластика</li>
        <li>Липофилинг лица</li>
        <li>Хейлопластика (подтяжка верхней губы)</li>
        <li>Установка лицевых имплантов</li>
        <li>Коррекция мочек ушей</li>
        <li>Коррекция рубцов на лице и теле после операций, травм, ожогов и т.д.</li>
      </ul>
    </section>
    <section class="landing__video-content">
      <video class="content__video" loop autoplay muted controls="false" >
        <source src="/assets/video/profilepage1.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="content-block">
        <div class="content-wrapper">
          <p class="description__text" :class="{ 'animate': isVisible }">Омолаживающая операция — это таинственное и даже магическое событие. Наша
            операционная бригада, как актерская труппа перед спектаклем, заперта в своем герметичном маленьком мире —
            операционной. Каждый готовится к своей роли, но главное действующее лицо здесь — вы. Мне важно создать в
            операционной условия для комфорта пациента и спокойного сосредоточенного внимания всей команды.
            Расслабляющая фоновая музыка способствует этому, но лишь до наступления ключевого момента операции: здесь
            уже ничто не должно отвлекать меня. Я знаю анатомию лица досконально и всегда помню, что, оперируя, ступаю
            на глубоко личную территорию. Но все эти усилия окупаются сполна, когда я вижу, как счастливы мои пациенты.
            Потому что каждая женщина прекрасна. Каждое лицо достойно чутких и талантливых рук мастера.</p>
          <h2 class="description__subtitle" id="1" v-html="animatedTitles[1].value"></h2>
        </div>
      </div>
    </section>
    <section class="landing__video-content">
      <video class="content__video" loop autoplay muted controls="false" >
        <source src="/assets/video/profilepage2.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="content-block">
        <div class="content-wrapper">
          <p class="description__text" :class="{ 'animate': isVisible }">Я вижу, как часто старение лица лишает женщину радости и эмоциональной
            стабильности. Современная эстетическая хирургия лица способна изменить качество вашей жизни и ваше отношение
            к себе. Здесь не может быть компромиссов: только правильная хирургическая техника и филигранно выполненная
            операция смогут обеспечить естественный внешний вид и замедлить старение на долгие годы. Я знаю, что
            эстетическая хирургия лица — это не простое решение. Это путешествие. Личное и важное. Каждый мой пациент
            нуждается в эмоциональной поддержке и заботе на всех этапах этого пути. Именно это бережно обеспечиваем я и
            моя команда.</p>
          <h2 class="description__subtitle" id="2" v-html="animatedTitles[2].value"></h2>
        </div>
      </div>
    </section>
    <section class="landing__video-content title-video-block">
      <h1 class="content__title">Deep plane facelift</h1>
      <video class="content__video" loop autoplay muted controls="false" >
        <source src="/assets/video/homepage3.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="content-wrapper">
        <h2 class="description__title-min" id="3" v-html="animatedTitles[3].value"></h2>
        <p class="post__sign">— Олег Викторович Гордиенко, <br> пластический хирург</p>
      </div>
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">01</p>
            <h1 class="list__title">Самая передовая в мире методика омоложения лица</h1>
            <h2 class="list__subtitle">разработана в США лидерами пластической хирургии для получения наиболее
              естественных и долговременных результатов</h2>
            <p class="list__info">
              Во время процедуры Deep Plane FaceLift основное внимание уделяется полноценному освобождению всех связок
              лица, которые прочно удерживают его ткани.
              Это позволяет не натягивать, а свободно перемещать и поднимать ткани лица, возвращая их на то место, где
              они были в молодости.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">02</p>
            <h1 class="list__title">Никаких перетянутых неестественных шаблонных лиц</h1>
            <h2 class="list__subtitle">результат будет максимально естественным, но при этом значительным</h2>
            <p class="list__info">
              Средняя зона лица мимически очень активна, поэтому с возрастом она начинает стареть и опускаться быстрее
              остальных областей лица.
              Deep Plane FaceLift — единственная методика, которая эффективно воздействует не только на нижнюю треть
              лица и шею (как при обычной SMAS-подтяжки),
              но и на среднюю зону лица. Она сглаживает носогубные складки и добавляет объем в области скул без
              использования филлеров и липофилинга.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">03</p>
            <h1 class="list__title">Глубокая плоскость (Deep Plane)</h1>
            <h2 class="list__subtitle">это анатомическая плоскость в средней зоне лица, которая находится глубоко под
              кожей и подкожной жировой клетчаткой</h2>
            <p class="list__info">
              Средняя зона лица мимически очень активна, поэтому с возрастом она начинает стареть и опускаться быстрее
              остальных областей лица.
              Deep Plane FaceLift — единственная методика, которая эффективно воздействует не только на нижнюю треть
              лица и шею (как при обычной SMAS-подтяжки),
              но и на среднюю зону лица. Она сглаживает носогубные складки и добавляет объем в области скул без
              использования филлеров и липофилинга.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">04</p>
            <h1 class="list__title">Deep Plane FaceLift</h1>
            <h2 class="list__subtitle">намного бережнее и эффективнее SMAS-подтяжки лица</h2>
            <p class="list__info">
              Процедура выполняется через скрытые разрезы вокруг уха, оставляя нетронутой естественную линию роста
              волос.
              Рубцы остаются незаметными для окружающих.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">05</p>
            <h1 class="list__title">Эффект омоложения</h1>
            <h2 class="list__subtitle">после Deep Plane FaceLift длится 8 лет и более</h2>
            <p class="list__info">
              Лицо не опустится через 3-4 года, как после большинства других популярных методик подтяжек лица.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <div class="fullscreen__photos">
        <img src="/assets/images/profilepage1.png">
        <img src="/assets/images/profilepage2.png">
      </div>
    </section>
    <section class="landing__description-content">
      <ul class="description__list-numbered">
        <li class="list__lists" :class="{ 'animate': isVisible }">
          <p class="list__num">06</p>
          <h1 class="list__title">Первичная консультация</h1>
          <h2 class="list__subtitle">это установление дружеского контакта с первых минут, проявление личного тепла и
            доверия</h2>
          <p class="list__info">
            Я очень люблю консультировать людей. Это огромная радость, когда в процессе консультации удается помочь
            пациенту справиться со страхом неизвестности перед операцией.
            Моя задача — дать вам как можно больше информации о процедуре, чтобы развеять сомнения и выстроить фундамент
            для дальнейших потрясающих результатов.
          </p>
        </li>
      </ul>
    </section>
    <section class="landing__video-content">
      <video class="content__video" loop autoplay muted controls="false" >
        <source src="/assets/video/profilepage3.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">07</p>
            <h1 class="list__title">Подготовка к операции</h1>
            <h2 class="list__subtitle">проводится в нашей клинике</h2>
            <p class="list__info">
              Предоперационное обследование включает в себя: анализы крови и мочи, ЭКГ, консультацию флеболога и
              анестезиолога, УЗИ вен нижних конечностей и флюорографию.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">08</p>
            <h1 class="list__title">Ограничения перед операцией</h1>
            <h2 class="list__subtitle">не являются чем-то сложным и трудновыполнимым</h2>
            <p class="list__info">
              Я не рекомендую за полгода до операции использовать ботулотоксин, филлеры и нити, а также наращивать
              ресницы и выполнять любой вид перманентного макияжа глаз и бровей.
              За год — не стоит делать ультразвуковых омолаживающих процедур (SMAS-лифтинг типа Ultherapy (Альтерa),
              Ultraformer (Ультраформер), Face Tite (ФейсТайт) и т.д.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">09</p>
            <h1 class="list__title">Для иногородних пациентов</h1>
            <div class="list__popup" v-if="isPopupOpen">
              <img src="/public/assets/icons/question.svg">
              <p class="popup__info">Fly IN - облет, также называемый авиационным собранием, представляет собой заранее
                организованное собрание самолетов, пилотов и пассажиров в развлекательных и общественных целях.</p>
            </div>
            <h2 class="list__subtitle">я разработал программу медицинского туризма «Fly IN»
              <button class="subtitle__popup-btn" @click="togglePopup">
                <img src="/public/assets/icons/close.svg">
              </button>. Это онлайн-служба заботы о пациентах,
              предусматривающая полное сопровождение до, во время и после операции</h2>
            <p class="list__info">
              В программу входит подбор жилья, встреча с табличкой в аэропорту с табличкой, трансфер в обе стороны,
              доставка еды и всего, что вам необходимо.<br>
              Вам будет комфортно находиться в Санкт-Петербурге.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <img src="/assets/images/profilepage3.png" class="fullscreen__image">
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">10</p>
            <h1 class="list__title">Операция</h1>
            <h2 class="list__subtitle">выполняется под медикаментозным сном: это безопасно и безболезненно</h2>
            <p class="list__info">
              Никаких бинтов и удушающих повязок после операции не будет. Уже на 2-й день вы можете помыть голову и
              принять душ.<br>
              Под нашим тщательным контролем в клинике вы будете находиться всего 2 дня.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">11</p>
            <h1 class="list__title">объединение нескольких операций</h1>
            <h2 class="list__subtitle">это удобно: вы получаете комплексный эффект омоложения за меньшее время, сокращая
              период восстановления и пребывания в палате</h2>
            <p class="list__info">
              Deep Plane FaceLift можно успешно сочетать с блефаропластикой, липофилингом, подтяжкой лба, бровей,
              верхней губы
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">12</p>
            <h1 class="list__title">Восстановление после операции</h1>
            <h2 class="list__subtitle">проходит легко и безболезненно</h2>
            <p class="list__info">
              Швы снимаются на 6-е и 10-е сутки, а через 14 дней вы возвращаетесь к своему привычному ритму жизни.<br>
              Вы будете чувствовать деликатную заботу и поддержку на всех этапах нашего общения.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <div class="fullscreen__photos">
        <img src="/assets/images/profilepage4.png">
        <img src="/assets/images/profilepage5.png">
      </div>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">13</p>
            <h1 class="list__title">Квалификация хирурга</h1>
            <h2 class="list__subtitle">это самое важное условие и гарантия успешного результата и безопасности</h2>
            <p class="list__info">
              Чтобы выполнять глубокую подтяжку правильно и безопасно, хирургу нужно потратить много времени и сил на
              обучение этой методике. Она требует высочайшего уровня подготовки. В России почти нет хирургов, владеющих
              этой техникой операции. Я — один из первых хирургов в нашей стране, кто успешно практикует Deep Plane
              FaceLift. Мне потребовалось много лет, чтобы развить понимание этой операции, изучить сложнейшую анатомию
              лица, отработать навыки и получить драгоценный опыт для выполнения качественной современной подтяжки лица.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">14</p>
            <h1 class="list__title">Истории преображения</h1>
            <h2 class="list__subtitle">это самое ценное в моей работе</h2>
            <p class="list__info">
              Deep Plane FaceLift — высшая ступень развития эстетической хирургии. Эта техника подтяжки лица обладает
              самым большим омолаживающим потенциалом среди всех существующих в мире методик. Это подтверждают истории
              моих пациентов. Возможно, вам будет интересно с ними ознакомиться.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="fullscreen-wrapper">
      <div class="grid__photos">
        <div class="photo__item">
          <img src="/assets/images/face1.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face4.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face5.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face6.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face7.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face8.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face9.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face10.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face11.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face12.png">
        </div>
      </div>
      <div class="padding-for-wrapper">
        <button class="show__more-btn">смотреть все работы</button>
      </div>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">15</p>
            <h1 class="list__title">Стоимость услуг</h1>
            <h2 class="list__subtitle">стандартна, но может варьироваться в зависимости от сложности вмешательства,
              которую оценивает хирург на консультации</h2>
            <p class="list__info">
              Подтяжка лица и шеи (Deep Plane Facelift) — от 850 000 ₽.<br>Глубокая подтяжка шеи — от 250 000 ₽.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">16</p>
            <h1 class="list__title">Стоимость анестезии, анализов, размещения</h1>
            <h2 class="list__subtitle">рассчитывается дополнительно к стоимости операции</h2>
            <p class="list__info">
              1 час общей анестезии — 20 000 ₽.<br>
              Размещение в палате (питание включено) — 8 000 ₽.<br>
              Размещение в двухместной палате (питание включено) — 6 000 ₽.<br>
              Необходимая панель анализов перед операцией — 13 400 ₽.<br>
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">17</p>
            <h1 class="list__title">ответы на вопросы</h1>
            <h2 class="list__subtitle">которые часто появляются в процессе принятия решения, вы найдете в разделе FAQ
            </h2>
            <p class="list__info">
              Если ответа на ваш вопрос там нет, смело пишите/звоните.<br>
              +7 911 122 48 88<br>
              oleg@gordienko.doctor<br>
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__description-content" style="padding-top: 0;">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <h1 class="list__title">БЛОГ</h1>
            <p class="list__date">12.04.24</p>
            <h2 class="list__subtitle" style="color: #393939;">Deep Plane Facelift – новый метод подтяжки лица и шеи.
              Почему это лучше обычной SMAS-подтяжки?</h2>
            <p class="list__info">Олег Викторович Гордиенко</p>
            <button class="show__more-btn" style="color: #5493D1; border: 1px solid #5493D1; margin-top: 20px;">смотреть
              все работы</button>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__video-content title-video-block">
      <h1 class="content__title">Губы</h1>
      <video class="content__video" loop autoplay muted controls="false">
        <source src="/assets/video/homepage8.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="content-wrapper">
        <h2 class="description__title-min" id="4" v-html="animatedTitles[4].value"></h2>
        <p class="post__sign">— Олег Викторович Гордиенко, <br> пластический хирург</p>
      </div>
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">01</p>
            <h1 class="list__title">Естественный гармоничный результат</h1>
            <h2 class="list__subtitle">никакой вульгарности, шаблонности и видимых рубцов</h2>
            <p class="list__info">
              Ваш путь к красоте и чувственности губ будет мягким и бережным. Я проведу индивидуальные математические
              расчеты удаляемых тканей, так как каждый миллиметр в этой операции имеет значение.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">02</p>
            <h1 class="list__title">Восстановление баланса и пропорций лица</h1>
            <h2 class="list__subtitle">если верхняя губа тонкая и невыраженная, а расстояние от основания носа до губы -
              избыточное</h2>
            <p class="list__info">
              Подтяжка верхней губы (LipLift) восстанавливает баланс лица за счет сокращения избыточной длины расстояния
              от носа до верхней губы.
              Процедура безопасна и решает большинство проблем, связанных со старением области рта. Ее можно выполнять и
              молодым пациентам для бьютификации лица, особенно при деформации верхней губы после использования
              филлеров. Рубцы под носом будут незаметны, независимо от вашего типа кожи и возраста.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <div class="fullscreen__photos">
        <img src="/assets/images/profilepage6.png">
        <img src="/assets/images/profilepage7.png">
      </div>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">03</p>
            <h1 class="list__title">Первичная консультация</h1>
            <h2 class="list__subtitle">это установление дружеского контакта с первых минут, проявление личного тепла и
              искренней заинтересованности врача</h2>
            <p class="list__info">
              Я очень люблю консультировать. Это огромная радость, когда в процессе консультации удается помочь пациенту
              справиться со страхом неизвестности перед операцией. Моя задача — дать вам как можно больше информации о
              процедуре, чтобы развеять сомнения и выстроить фундамент для дальнейшего великолепного результата.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__video-content">
      <video class="content__video" loop autoplay muted controls="false">
        <source src="/assets/video/profilepage4.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">04</p>
            <h1 class="list__title">Подготовка к операции</h1>
            <h2 class="list__subtitle">проводится в нашей клинике</h2>
            <p class="list__info">
              Обследование включает в себя стандартный перечень обследований перед операцией. Никаких особых ограничений
              перед операцией нет.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">05</p>
            <h1 class="list__title">Для иногородних пациентов</h1>
            <div class="list__popup" v-if="isPopupOpen">
              <img src="/public/assets/icons/question.svg">
              <p class="popup__info">Fly IN - облет, также называемый авиационным собранием, представляет собой заранее
                организованное собрание самолетов, пилотов и пассажиров в развлекательных и общественных целях.</p>
            </div>
            <h2 class="list__subtitle">я разработал программу медицинского туризма «Fly IN»
              <button class="subtitle__popup-btn" @click="togglePopup">
                <img src="/public/assets/icons/close.svg">
              </button>. Это онлайн-служба заботы о пациентах,
              предусматривающая полное сопровождение до, во время и после операции</h2>
            <p class="list__info">
              В программу входит подбор жилья, встреча с табличкой в аэропорту с табличкой, трансфер в обе стороны,
              доставка еды и всего, что вам необходимо. Вам будет комфортно находиться в Санкт-Петербурге.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <img src="/assets/images/profilepage3.png" class="fullscreen__image">
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">06</p>
            <h1 class="list__title">Операция</h1>
            <h2 class="list__subtitle">Подтяжка верхней губы LipLift — это улучшенная модифицированная версия
              классической операции bullhorn (булхорн)</h2>
            <p class="list__info">
              Занимает 45-60 минут и может выполняться как под местной анестезией, так и под внутривенной седацией (по
              ощущениям — как обычный сон). Особенность методики в том, что после удаления полоски кожи под носом подъем
              кожного лоскута и закрытие кожи производится без малейшего натяжения, так как вся механическая нагрузка на
              ткани приходит не на кожу (как при обычной подтяжке губы - булхорн), а на более глубокий слой SMAS. Все
              швы будут скрыты под основанием носа в естественной складке. Болезненность в местах швов легко снимается
              обезболивающими. Вы сможете вернуться домой в тот же вечер.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">07</p>
            <h1 class="list__title">Преимущества подтяжки верхней губы LipLift</h1>
            <h2 class="list__subtitle">очевидны для любого возраста</h2>
            <p class="list__info">
              Подтяжка придает верхней губе более гармоничный очерченный вид, увеличивая ее объем и большую видимость
              зубов при улыбке. Помогает уменьшить кисетные морщины над верхней губой.
              Эта малоинвазивная операция восстанавливает молодой баланс лица и чувственность губ. Прекрасно справляется
              с потерей объема губ и снижает потребность в филлерах.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">08</p>
            <h1 class="list__title">Объединение нескольких операций</h1>
            <h2 class="list__subtitle">это удобно: вы получаете комплексный эффект омоложения за меньшее время, сокращая
              период восстановления и пребывания в палате</h2>
            <p class="list__info">
              Для полного комплексного омоложения лица подтяжку верхней губы можно сочетать с операциями в смежных
              областях, такими как подтяжка лица и/или коррекция области глаз, лба и бровей.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">09</p>
            <h1 class="list__title">Восстановление после операции</h1>
            <h2 class="list__subtitle">швы снимаются на 6-е сутки, а отек будет спадать 2-3 недели</h2>
            <p class="list__info">
              На перевязку вам нужно будет прийти на 6 и 14 день после операции. Окончательный вид верхняя губа примет
              через 3 месяца. Рубец под носом будет формироваться и “светлеть” в течение 6-8 месяцев.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__video-content">
      <video class="content__video" loop autoplay muted controls="false">
        <source src="/assets/video/profilepage5.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">10</p>
            <h1 class="list__title">Квалификация хирурга</h1>
            <h2 class="list__subtitle">это самое важное условие и гарантия успешного результата и безопасности</h2>
            <p class="list__info">
              Пластический хирург должен быть опытным, обладать чувством меры и иметь художественный взгляд. Он в
              совершенстве должен владеть методикой проведения таких операций. Поэтому у меня нет права на ошибку.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">11</p>
            <h1 class="list__title">Истории преображения</h1>
            <h2 class="list__subtitle">это самое ценное в моей работе</h2>
            <p class="list__info">
              Подтяжка верхней губы восстанавливает пропорции лица и делает его более молодым и привлекательным. Это
              подтверждают истории моих пациентов. Возможно, вам будет интересно с ними ознакомиться.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="fullscreen-wrapper">
      <div class="grid__photos">
        <div class="photo__item">
          <img src="/assets/images/face2-1.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2-2.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2-3.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2-4.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2-5.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2-6.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2-7.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2-8.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2-9.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2-10.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2-11.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2-12.png">
        </div>
      </div>
      <div class="padding-for-wrapper">
        <button class="show__more-btn">смотреть все работы</button>
      </div>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">12</p>
            <h1 class="list__title">Стоимость услуг</h1>
            <h2 class="list__subtitle">стандартна, но может варьироваться в зависимости от сложности вмешательства,
              которую оценивает хирург на консультации</h2>
            <p class="list__info">Хейлопластика (подтяжка верхней губы) — 100 000 ₽.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">13</p>
            <h1 class="list__title">Стоимость анестезии, анализов, размещения</h1>
            <h2 class="list__subtitle">рассчитывается дополнительно к стоимости операции</h2>
            <p class="list__info">
              1 час общей анестезии — 20 000 ₽.<br>
              Размещение в палате (питание включено) — 8 000 ₽.<br>
              Размещение в двухместной палате (питание включено) — 6 000 ₽.<br>
              Необходимая панель анализов перед операцией — 13 400 ₽.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">14</p>
            <h1 class="list__title">Ответы на вопросы</h1>
            <h2 class="list__subtitle">которые часто появляются в процессе принятия решения, вы найдете в разделе FAQ
            </h2>
            <p class="list__info">
              Если ответа на ваш вопрос там нет, смело пишите/звоните.<br>
              +7 911 122 48 88<br>
              oleg@gordienko.doctor
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__description-content" style="padding-top: 0;">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <h1 class="list__title">БЛОГ</h1>
            <p class="list__date">28.01.23</p>
            <h2 class="list__subtitle" style="color: #393939;">Подтяжка верхней губы LipLift</h2>
            <p class="list__info">Олег Викторович Гордиенко</p>
            <button class="show__more-btn" style="color: #5493D1; border: 1px solid #5493D1; margin-top: 20px;">ЧИТАТЬ
              ПОЛНУЮ СТАТЬЮ</button>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__video-content title-video-block">
      <h1 class="content__title">Лоб и брови</h1>
      <video class="content__video" loop autoplay muted controls="false">
        <source src="/assets/video/homepage5.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="content-wrapper">
        <h2 class="description__title-min" id="5" v-html="animatedTitles[5].value"></h2>
        <p class="post__sign">— Олег Викторович Гордиенко, <br> пластический хирург</p>
      </div>
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">01</p>
            <h1 class="list__title">Молодой и свежий вид верхней трети лица</h1>
            <h2 class="list__subtitle">вы получите в результате лифтинга лба и бровей</h2>
            <p class="list__info">
              Я приложу все усилия для того, чтобы ваше преображение прошло максимально бережно. Лифтинг лба и бровей
              поможет разгладить мимические морщины области лба, переносицы и уголков глаз, подтянуть виски, приподнять
              брови. После операции ваш взгляд будет более “свежим” открытым и более дружелюбным. Вы будете ощущать себя
              моложе и видеть подтверждение этому в зеркале и в реакции окружающих.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">02</p>
            <h1 class="list__title">Незаметность внешних последствий коррекции</h1>
            <h2 class="list__subtitle">отсутствие видимых рубцов — важное преимущество процедуры</h2>
            <p class="list__info">
              Мне важно сохранить индивидуальность и эстетику вашего лица. Подтяжка лба и бровей очень косметична: все
              рубцы надежно скрыты в волосистой части головы. Результат коррекции будет впечатляющим и долговременным, а
              вы при этом останетесь собой.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <div class="fullscreen__photos">
        <img src="/assets/images/profilepage8.png">
        <img src="/assets/images/profilepage9.png">
      </div>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">03</p>
            <h1 class="list__title">Первичная консультация</h1>
            <h2 class="list__subtitle">это установление дружеского контакта с первых минут, проявление личного тепла и
              искренней заинтересованности врача</h2>
            <p class="list__info">Я очень люблю консультировать. Это огромная радость, когда в процессе консультации
              удается помочь пациенту справиться со страхом неизвестности перед операцией. Моя задача — дать вам как
              можно больше информации о процедуре, чтобы развеять сомнения и выстроить фундамент для дальнейшего
              великолепного результата.</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__video-content">
      <video class="content__video" loop autoplay muted controls="false">
        <source src="/assets/video/profilepage6.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">04</p>
            <h1 class="list__title">Подготовка к операции</h1>
            <h2 class="list__subtitle">проводится в нашей клинике</h2>
            <p class="list__info">Предоперационное обследование включает в себя: анализы крови и мочи, ЭКГ, консультацию
              флеболога и анестезиолога, УЗИ вен нижних конечностей и флюорографию.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">05</p>
            <h1 class="list__title">Ограничения перед операцией</h1>
            <h2 class="list__subtitle">не являются чем-то сложным и трудновыполнимым</h2>
            <p class="list__info">За полгода я не рекомендую использовать ботулотоксин, филлеры и нити в области глаз, а
              также наращивать ресницы и выполнять любой вид перманентного макияжа глаз и бровей.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">06</p>
            <h1 class="list__title">Для иногородних пациентов</h1>
            <h2 class="list__subtitle">я разработал программу медицинского туризма «Fly IN» . Это онлайн-служба заботы о
              пациентах, предусматривающая полное сопровождение до, во время и после операции</h2>
            <p class="list__info">В программу входит подбор жилья, встреча с табличкой в аэропорту, трансфер в обе
              стороны, доставка еды и всего, что вам необходимо. Вам будет комфортно находиться в Санкт-Петербурге.</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <img src="/assets/images/profilepage3.png" class="fullscreen__image">
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">07</p>
            <h1 class="list__title">Операция</h1>
            <h2 class="list__subtitle">занимает 40-60 минут; вы отправитесь домой в тот же день</h2>
            <p class="list__info">Никакой боли не будет: по ощущениям это как обычный глубокий сон. Повязок на лице тоже
              не будет. В течение трех недель после процедуры воздержитесь от физических упражнений и других
              активностей, чтобы уменьшить отек и предотвратить риск образования гематомы.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">08</p>
            <h1 class="list__title">Эстетические операции лба и бровей</h1>
            <h2 class="list__subtitle">дают натуральный и естественный результат, который невозможно получить с помощью
              инъекционных косметологических процедур — например, ботокса</h2>
            <p class="list__info">Существует несколько методик подтяжки лба. Некоторые из них поднимают весь лоб целиком
              вместе с бровью, а некоторые — только наружную часть брови. Все эти процедуры высокотехнологичны и
              проводятся с помощью современного эндовидеохирургического оборудования.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">09</p>
            <h1 class="list__title">Эндоскопический лифтинг</h1>
            <h2 class="list__subtitle">поднимает всю бровь целиком, разглаживая глубокие морщины в области переносицы и
              наружных углов глаз</h2>
            <p class="list__info">Идеально подходит возрастным пациентам и пациентам с выраженным опущением бровей.
              Может применяться в качестве гармонизирующей операции, визуально увеличивая расстояние от бровей до линии
              роста волос.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">10</p>
            <h1 class="list__title">Латеральный височный лифтинг</h1>
            <h2 class="list__subtitle">это малотравматичная процедура и основная методика в моей практике</h2>
            <p class="list__info">Коррекция направлена на мягкий подъем только «хвоста» брови и височной области, а
              также нависающего «капюшона» у наружного угла глаза. Никакого эффекта слишком высоко задранных бровей.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">11</p>
            <h1 class="list__title">Объединение нескольких операций</h1>
            <h2 class="list__subtitle">это удобно: вы получаете комплексный эффект омоложения за меньшее время, сокращая
              период восстановления и пребывания в палате</h2>
            <p class="list__info">Для полного комплексного омоложения лица подтяжку лба и бровей можно сочетать с
              операциями в смежных областях, такими как подтяжка лица и/или коррекция области глаз.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">12</p>
            <h1 class="list__title">Восстановление после операции</h1>
            <h2 class="list__subtitle">швы снимаются на 10-ые сутки, а отек полностью спадет через 4-5 недель</h2>
            <p class="list__info">Результат вы в полной мере оцените через 4-5 месяцев. Рубцы в волосах окончательно
              заживут в течение года. Обезболивающие препараты большинству пациентов не требуются. Возможная стрессовая
              алопеция (поредение волос в местах швов) — временное явление, так же как и возможное онемение и зуд кожи
              головы. Хирургическая гиперкоррекция (ощущение слишком высоко поднятых бровей) пройдет в течение месяца:
              брови примут естественное положение.</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <div class="fullscreen__photos">
        <img src="/assets/images/profilepage10.png">
        <img src="/assets/images/profilepage11.png">
      </div>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">13</p>
            <h1 class="list__title">Квалификация хирурга</h1>
            <h2 class="list__subtitle">это самое важное условие и гарантия успешного результата и безопасности</h2>
            <p class="list__info">Пластический хирург должен быть опытным, обладать чувством меры и иметь художественный
              взгляд. У него нет права на ошибку.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">14</p>
            <h1 class="list__title">Истории преображения</h1>
            <h2 class="list__subtitle">это самое ценное в моей работе</h2>
            <p class="list__info">Подтяжка лба и бровей выравнивает пропорции лица и делает его более привлекательным.
              Это подтверждают истории моих пациентов. Возможно, вам будет интересно с ними ознакомиться.</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="fullscreen-wrapper">
      <div class="grid__photos">
        <div class="photo__item">
          <img src="/assets/images/face3-1.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-2.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-3.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-4.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-5.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-6.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-7.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-8.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-9.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-10.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-11.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-12.png">
        </div>
      </div>
      <div class="padding-for-wrapper">
        <button class="show__more-btn">смотреть все работы</button>
      </div>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">15</p>
            <h1 class="list__title">Стоимость услуг</h1>
            <h2 class="list__subtitle">стандартна, но может варьироваться в зависимости от сложности вмешательства,
              которую оценивает хирург на консультации</h2>
            <p class="list__info">Эндоскопический лифтинг лба и бровей — от 300 000 ₽.<br>
              Латеральный височный лифтинг — 190 000 ₽.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">16</p>
            <h1 class="list__title">Стоимость анестезии, анализов, размещения</h1>
            <h2 class="list__subtitle">рассчитывается дополнительно к стоимости операции</h2>
            <p class="list__info">
              1 час общей анестезии — 20 000 ₽.<br>
              Размещение в палате (питание включено) — 8 000 ₽.<br>
              Размещение в двухместной палате (питание включено) — 6 000 ₽.<br>
              Необходимая панель анализов перед операцией — 13 400 ₽.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">17</p>
            <h1 class="list__title">Ответы на вопросы</h1>
            <h2 class="list__subtitle">которые часто появляются в процессе принятия решения, вы найдете в разделе FAQ
            </h2>
            <p class="list__info">
              Если ответа на ваш вопрос там нет, смело пишите/звоните.<br>
              +7 911 122 48 88<br>
              oleg@gordienko.doctor
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__description-content" style="padding-top: 0;">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <h1 class="list__title">БЛОГ</h1>
            <p class="list__date">09.03.24</p>
            <h2 class="list__subtitle" style="color: #393939;">Лифтинг лба и бровей</h2>
            <p class="list__info">Олег Викторович Гордиенко</p>
            <button class="show__more-btn" style="color: #5493D1; border: 1px solid #5493D1; margin-top: 20px;">ЧИТАТЬ
              ПОЛНУЮ СТАТЬЮ</button>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__video-content title-video-block">
      <h1 class="content__title">Шея</h1>
      <video class="content__video" loop autoplay muted controls="false">
        <source src="/assets/video/homepage6.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="content-wrapper">
        <h2 class="description__title-min" id="6" v-html="animatedTitles[6].value"></h2>
        <p class="post__sign">— Олег Викторович Гордиенко, <br> пластический хирург</p>
      </div>
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">01</p>
            <h1 class="list__title">Эстетика области шеи</h1>
            <h2 class="list__subtitle">часто утрачивается с возрастом</h2>
            <p class="list__info">
              Я знаю, как огорчает женщин рыхлая дряблая шея с провисающими тканями, морщинами и горизонтальными
              складками (“кольца Венеры”). Эти изменения неразрывно связаны с потерей тонуса и эластичность подкожной
              мышцей шеи — платизмы. Подобные эстетические несовершенства в области шеи добавляют возраст даже при самом
              ухоженном лице и часто становится причиной недовольства своей внешностью.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">02</p>
            <h1 class="list__title">Молодой вид шеи и линии нижней челюсти</h1>
            <h2 class="list__subtitle">вы получите после подтяжки шеи</h2>
            <p class="list__info">
              Я буду максимально деликатно сопровождать вас на пути к преображению. Трансформация непременно вас
              порадует.
              Подтяжка устранит дряблость кожи, морщины, двойной подбородок, уменьшит выраженность горизонтальных
              складок на шее («кольца Венеры»).
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <div class="fullscreen__photos">
        <img src="/assets/images/profilepage12.png">
        <img src="/assets/images/profilepage13.png">
      </div>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">03</p>
            <h1 class="list__title">Первичная консультация</h1>
            <h2 class="list__subtitle">это установление дружеского контакта с первых минут, проявление личного тепла и
              искренней заинтересованности врача</h2>
            <p class="list__info">Я очень люблю консультировать. Это огромная радость, когда в процессе консультации
              удается помочь пациенту справиться со страхом неизвестности перед операцией. Моя задача — дать вам как
              можно больше информации о процедуре, чтобы развеять сомнения и выстроить фундамент для дальнейшего
              великолепного результата.</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__video-content">
      <video class="content__video" loop autoplay muted controls="false">
        <source src="/assets/video/profilepage7.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">04</p>
            <h1 class="list__title">Подготовка к операции</h1>
            <h2 class="list__subtitle">проводится в нашей клинике</h2>
            <p class="list__info">Предоперационное обследование включает в себя: анализы крови и мочи, ЭКГ, консультацию
              флеболога и анестезиолога, УЗИ вен нижних конечностей и флюорографию.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">05</p>
            <h1 class="list__title">Ограничения перед операцией</h1>
            <h2 class="list__subtitle">не являются чем-то сложным и трудновыполнимым</h2>
            <p class="list__info">
              За год я не рекомендую вам делать ультразвуковые процедуры (SMAS-лифтинг типа Ultherapy (Альтерa),
              Ultraformer (Ультраформер), Face Tite (ФейсТайт).
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">06</p>
            <h1 class="list__title">Для иногородних пациентов</h1>
            <div class="list__popup" v-if="isPopupOpen">
              <img src="/public/assets/icons/question.svg">
              <p class="popup__info">Fly IN - облет, также называемый авиационным собранием, представляет собой заранее
                организованное собрание самолетов, пилотов и пассажиров в развлекательных и общественных целях.</p>
            </div>
            <h2 class="list__subtitle">я разработал программу медицинского туризма «Fly IN»
              <button class="subtitle__popup-btn" @click="togglePopup">
                <img src="/public/assets/icons/close.svg">
              </button>. Это онлайн-служба заботы о пациентах,
              предусматривающая полное сопровождение до, во время и после операции</h2>
            <p class="list__info">
              В программу входит подбор жилья, встреча с табличкой в аэропорту, трансфер в обе стороны, доставка еды и
              всего, что вам необходимо. Вам будет комфортно находиться в Санкт-Петербурге.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <img src="/assets/images/profilepage3.png" class="fullscreen__image">
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">07</p>
            <h1 class="list__title">Операция</h1>
            <h2 class="list__subtitle">по платизмопластике занимает 1-1,5 часа и выполняется под общей анестезией</h2>
            <p class="list__info">Традиционная подтяжка шеи включает в себя подтяжку и разглаживание обвисшей кожи,
              удаление излишков жира и кожи, а также подтягивание платизмы. В клинике под наблюдением вам нужно будет
              провести сутки.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">08</p>
            <h1 class="list__title">В некоторых случаях</h1>
            <h2 class="list__subtitle">классическая платизмопластика не дает эффективных результатов</h2>
            <p class="list__info">
              Это происходит из-за большого объема глубоких структур шеи, которые сильно сглаживают шейно-подбородочный
              угол, притупляя его. При увеличенных объемах этих структур классическая подтяжка не сможет придать вашей
              шее гармоничный вид и обеспечить четкий шейно-подбородочный угол. В таких случаях я рекомендую глубокую
              плоскостную подтяжку шеи.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">09</p>
            <h1 class="list__title">Глубокая плоскостная подтяжка шеи</h1>
            <h2 class="list__subtitle">это особый вид платизмопластики, способный помочь большинству пациентов</h2>
            <p class="list__info">
              Подтяжка в глубокой плоскости обеспечит максимальное омоложение стареющей шеи. Это гораздо более сложная
              операция, требующая от хирурга высочайшего уровня подготовки.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">10</p>
            <h1 class="list__title">Оптимальный вариант коррекции</h1>
            <h2 class="list__subtitle">определяется на консультации</h2>
            <p class="list__info">
              Я не меньше чем вы заинтересован в результате, поэтому подберу то, что поможет именно вам, будь то
              платизмопластика или подтяжка шеи в глубокой плоскости.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">11</p>
            <h1 class="list__title">Восстановление после операции</h1>
            <h2 class="list__subtitle">швы снимаются на 6-е сутки, а отек начнет спадать через 10 дней</h2>
            <p class="list__info">
              Результат вы в полной мере оцените через 2-3 месяца после подтяжки, когда отек сойдет окончательно.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__video-content">
      <video class="content__video" loop autoplay muted controls="false">
        <source src="/assets/video/profilepage8.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">12</p>
            <h1 class="list__title">Квалификация хирурга</h1>
            <h2 class="list__subtitle">это самое важное условие и гарантия успешного результата и безопасности</h2>
            <p class="list__info">Пластический хирург должен быть опытным, обладать чувством меры и иметь художественный
              взгляд. У него нет права на ошибку. Я имею большой опыт в области глубокой хирургии и с уверенностью могу
              сказать, что верну вашей шее молодой привлекательный вид.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">13</p>
            <h1 class="list__title">Истории преображения</h1>
            <h2 class="list__subtitle">это самое ценное в моей работе</h2>
            <p class="list__info">
              Подтяжка шеи дает отличный эстетический эффект, позволяя вам избавиться от явных признаков старения. Это
              подтверждают истории моих пациентов.</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="fullscreen-wrapper">
      <div class="grid__photos">
        <div class="photo__item">
          <img src="/assets/images/face4-1.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face4-2.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face4-3.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face4-4.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face4-5.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face4-6.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face4-7.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face4-8.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face4-9.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face4-10.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face4-11.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face4-12.png">
        </div>
      </div>
      <div class="padding-for-wrapper">
        <button class="show__more-btn">смотреть все работы</button>
      </div>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">14</p>
            <h1 class="list__title">Стоимость услуг</h1>
            <h2 class="list__subtitle">стандартна, но может варьироваться в зависимости от сложности вмешательства,
              которую оценивает хирург на консультации</h2>
            <p class="list__info">Классическая подтяжка шеи (платизмопластика) — от 91 000 рублей.<br>
              Глубокая плоскостная подтяжка шеи — от 200 000 рублей.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">15</p>
            <h1 class="list__title">Стоимость анестезии, анализов, размещения</h1>
            <h2 class="list__subtitle">рассчитывается дополнительно к стоимости операции</h2>
            <p class="list__info">
              1 час общей анестезии — 20 000 ₽.<br>
              Размещение в палате (питание включено) — 8 000 ₽.<br>
              Размещение в двухместной палате (питание включено) — 6 000 ₽.<br>
              Необходимая панель анализов перед операцией — 13 400 ₽.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">16</p>
            <h1 class="list__title">Ответы на вопросы</h1>
            <h2 class="list__subtitle">которые часто появляются в процессе принятия решения, вы найдете в разделе FAQ
            </h2>
            <p class="list__info">
              Если ответа на ваш вопрос там нет, смело пишите/звоните.<br>
              +7 911 122 48 88<br>
              oleg@gordienko.doctor
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__description-content" style="padding-top: 0;">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <h1 class="list__title">БЛОГ</h1>
            <p class="list__date">28.01.23</p>
            <h2 class="list__subtitle" style="color: #393939;">Омоложение и подтяжка шеи</h2>
            <p class="list__info">Олег Викторович Гордиенко</p>
            <button class="show__more-btn" style="color: #5493D1; border: 1px solid #5493D1; margin-top: 20px;">ЧИТАТЬ
              ПОЛНУЮ СТАТЬЮ</button>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__video-content title-video-block">
      <h1 class="content__title">Глаза</h1>
      <video class="content__video" loop autoplay muted controls="false">
        <source src="/assets/video/profilepage9.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="content-wrapper">
        <h2 class="description__title-min" id="7" v-html="animatedTitles[7].value"></h2>
        <p class="post__sign">— Олег Викторович Гордиенко, <br> пластический хирург</p>
      </div>
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">01</p>
            <h1 class="list__title">Открытый свежий взгляд</h1>
            <h2 class="list__subtitle">вы вернете его себе, не меняя свою внешность радикально</h2>
            <p class="list__info">
              Глаза не должны вас старить. Я помогу сделать ваш взгляд молодым и ясным, а вы при этом останетесь собой.
              Мне важно сохранить вашу индивидуальность. Преображение должно быть гармоничным.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">02</p>
            <h1 class="list__title">Несоответствие внешнего и внутреннего возраста</h1>
            <h2 class="list__subtitle">это больше не про вас</h2>
            <p class="list__info">
              Я знаю, как важен этот баланс в возрасте 40+. Нависшие веки и “мешки” под глазами негативно влияют на
              самооценку. После операции вы сможете ощущать себя моложе и видеть подтверждение этому в зеркале и реакции
              окружающих. Макияж глаз будет радостью, а не пыткой.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <div class="fullscreen__photos">
        <img src="/assets/images/profilepage14.png">
        <img src="/assets/images/profilepage15.png">
      </div>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">03</p>
            <h1 class="list__title">Первичная консультация</h1>
            <h2 class="list__subtitle">это установление дружеского контакта с первых минут, проявление личного тепла и
              искренней заинтересованности врача</h2>
            <p class="list__info">Я очень люблю консультировать. Это огромная радость, когда в процессе консультации
              удается помочь пациенту справиться со страхом неизвестности перед операцией. Моя задача — дать вам как
              можно больше информации о процедуре, чтобы развеять сомнения и выстроить фундамент для дальнейшего
              великолепного результата.</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <img src="/assets/images/profilepage16.png" class="fullscreen__image">
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">04</p>
            <h1 class="list__title">Подготовка к операции</h1>
            <h2 class="list__subtitle">проводится в нашей клинике</h2>
            <p class="list__info">Предоперационное обследование включает в себя: анализы крови и мочи, ЭКГ, консультацию
              флеболога и анестезиолога, УЗИ вен нижних конечностей и флюорографию.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">05</p>
            <h1 class="list__title">Ограничения перед операцией</h1>
            <h2 class="list__subtitle">не являются чем-то сложным и трудновыполнимым</h2>
            <p class="list__info">
              Я не рекомендую за полгода до коррекции использовать ботулотоксин и филлеры, а также наращивать ресницы и
              выполнять любой вид перманентного макияжа глаз и бровей. За год — не стоит делать ультразвуковых процедур
              (SMAS-лифтинг типа Ultherapy (Альтерa), Ultraformer (Ультраформер), Face Tite (ФейсТайт).
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">06</p>
            <h1 class="list__title">Для иногородних пациентов</h1>
            <div class="list__popup" v-if="isPopupOpen">
              <img src="/public/assets/icons/question.svg">
              <p class="popup__info">Fly IN - облет, также называемый авиационным собранием, представляет собой заранее
                организованное собрание самолетов, пилотов и пассажиров в развлекательных и общественных целях.</p>
            </div>
            <h2 class="list__subtitle">я разработал программу медицинского туризма «Fly IN»
              <button class="subtitle__popup-btn" @click="togglePopup">
                <img src="/public/assets/icons/close.svg">
              </button>. Это онлайн-служба заботы о пациентах,
              предусматривающая полное сопровождение до, во время и после операции</h2>
            <p class="list__info">
              В программу входит подбор жилья, встреча с табличкой в аэропорту, трансфер в обе стороны, доставка еды и
              всего, что вам необходимо. Вам будет комфортно находиться в Санкт-Петербурге.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <img src="/assets/images/profilepage3.png" class="fullscreen__image">
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">07</p>
            <h1 class="list__title">Операция</h1>
            <h2 class="list__subtitle">выполняется под медикаментозным сном (внутривенной анестезией), поэтому это
              безболезненно</h2>
            <p class="list__info">В зависимости от проблемы и запроса, операции в области верхних и нижних век бывают
              разные. Ниже мы рассмотрим вкратце каждую, чтобы вам было легче сориентироваться.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">08</p>
            <h1 class="list__title">Пластика верхних век</h1>
            <h2 class="list__subtitle">позволяет убрать нависающую избыточную кожу, придать глазам отдохнувший вид,
              сделать взгляд более открытым</h2>
            <p class="list__info">
              Это безопасная операция, которая длится 40 минут и имеет достаточно короткий срок восстановления.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">09</p>
            <h1 class="list__title">Пластика нижних век</h1>
            <h2 class="list__subtitle">помогает устранить мешки под глазами, глубокие морщины и носослезные борозды</h2>
            <p class="list__info">
              Она выполняется либо через разрез на коже, либо через внутренний разрез внутри века (через конъюнктиву).
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">10</p>
            <h1 class="list__title">Трансконъюнктивальная блефаропластика</h1>
            <h2 class="list__subtitle">это пластика нижних век без разреза на коже</h2>
            <p class="list__info">
              Если есть мешки под глазами, разрез делается через конъюнктиву нижнего века. Никакие швы при этом не
              накладываются, а конъюнктива заживает самостоятельно без следа.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">11</p>
            <h1 class="list__title">Объединение нескольких операций</h1>
            <h2 class="list__subtitle">это удобно: вы получаете комплексный эффект омоложения за меньшее время, сокращая
              период восстановления и пребывания в палате</h2>
            <p class="list__info">
              Пластику верхних и нижних век можно выполнять не только по отдельности, но и в одну операцию. Ее также
              можно успешно сочетать с операциями в смежных областях, такими как подтяжка лица и/или бровей.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">12</p>
            <h1 class="list__title">Восстановление после операции</h1>
            <h2 class="list__subtitle">занимает неделю, а швы снимаются на 6-ые сутки</h2>
            <p class="list__info">
              После снятия швов останется едва заметный отек и небольшие синяки в местах швов и под глазами. Вы можете
              возвращаться к своей обычной жизни. Через 6 месяцев от рубцов останутся лишь незаметные белые «царапины».
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__video-content">
      <video class="content__video" loop autoplay muted controls="false">
        <source src="/assets/video/profilepage10.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">13</p>
            <h1 class="list__title">Квалификация хирурга</h1>
            <h2 class="list__subtitle">это самое важное условие и гарантия успешного результата и безопасности</h2>
            <p class="list__info">Пластический хирург должен быть опытным, обладать чувством меры и иметь художественный
              взгляд. У него нет права на ошибку.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">14</p>
            <h1 class="list__title">Истории преображения</h1>
            <h2 class="list__subtitle">это самое ценное в моей работе</h2>
            <p class="list__info">
              Коррекция области вокруг глаз — очень благодарная процедура. Это подтверждают истории моих пациентов.</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="fullscreen-wrapper">
      <div class="grid__photos">
        <div class="photo__item">
          <img src="/assets/images/face5.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face6.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face7.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face8.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2-5.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2-6.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2-7.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2-8.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-5.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-6.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-7.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-8.png">
        </div>
      </div>
      <div class="padding-for-wrapper">
        <button class="show__more-btn">смотреть все работы</button>
      </div>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">15</p>
            <h1 class="list__title">Стоимость услуг</h1>
            <h2 class="list__subtitle">стандартна, но может варьироваться в зависимости от сложности вмешательства,
              которую оценивает хирург на консультации</h2>
            <p class="list__info">Блефаропластика (верхние веки) — от 110 000 ₽.<br>
              Блефаропластика (нижние веки) — от 140 000 ₽.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">16</p>
            <h1 class="list__title">Стоимость анестезии, анализов, размещения</h1>
            <h2 class="list__subtitle">рассчитывается дополнительно к стоимости операции</h2>
            <p class="list__info">
              1 час общей анестезии — 20 000 ₽.<br>
              Размещение в палате (питание включено) — 8 000 ₽.<br>
              Размещение в двухместной палате (питание включено) — 6 000 ₽.<br>
              Необходимая панель анализов перед операцией — 13 400 ₽.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">17</p>
            <h1 class="list__title">Ответы на вопросы</h1>
            <h2 class="list__subtitle">которые часто появляются в процессе принятия решения, вы найдете в разделе FAQ
            </h2>
            <p class="list__info">
              Если ответа на ваш вопрос там нет, смело пишите/звоните.<br>
              +7 911 122 48 88<br>
              oleg@gordienko.doctor
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__description-content" style="padding-top: 0;">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <h1 class="list__title">БЛОГ</h1>
            <p class="list__date">03.02.23</p>
            <h2 class="list__subtitle" style="color: #393939;">Блефаропластика</h2>
            <p class="list__info">Олег Викторович Гордиенко</p>
            <button class="show__more-btn" style="color: #5493D1; border: 1px solid #5493D1; margin-top: 20px;">ЧИТАТЬ
              ПОЛНУЮ СТАТЬЮ</button>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__video-content title-video-block">
      <h1 class="content__title">ЛИПОФИЛИНГ</h1>
      <video class="content__video" loop autoplay muted controls="false">
        <source src="/assets/video/homepage8.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="content-wrapper">
        <h2 class="description__title-min" id="8" v-html="animatedTitles[8].value"></h2>
        <p class="post__sign">— Олег Викторович Гордиенко, <br> пластический хирург</p>
      </div>
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">01</p>
            <h1 class="list__title">Исхудалый вид с уплощением щек и углублением слезных впадин</h1>
            <h2 class="list__subtitle">может произойти при потере объема лица</h2>
            <p class="list__info">
              Я часто наблюдаю это у женщин после сильного похудения, а также у обладательниц астенического телосложения
              и тех, кто активно занимается силовыми тренировками и физическими нагрузками. Вместе с объемом порой
              теряются молодые очертания лица и уверенность в своей красоте.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">02</p>
            <h1 class="list__title">Добавить лицу объем и замаскировать неровности</h1>
            <h2 class="list__subtitle">помогают передовые методики липофилинга, которые я использую в своей практике
            </h2>
            <p class="list__info">
              Я знаю, что эта малоинвазивная процедура может значительно сократить внешние проявления возрастных
              изменений. Жировая ткань добавит объем в местах, где наблюдается его дефицит, обеспечивая вам естественный
              эффект омоложения. Вы сможете вернуть объем на щеках и висках, добавить объема скулам, скомпенсировать
              глубокие носогубные складки и морщины “марионеток”, увеличить объем губ. Липофилинг также улучшает внешний
              вид рубцов на лице после травм и рубцов от угревой сыпи.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <div class="fullscreen__photos">
        <img src="/assets/images/profilepage17.png">
        <img src="/assets/images/profilepage18.png">
      </div>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">03</p>
            <h1 class="list__title">Источник жировой ткани (донорское место)</h1>
            <h2 class="list__subtitle">это чаще всего передняя брюшная стенка, внутренняя поверхность бедер и колени
            </h2>
            <p class="list__info">Жировая ткань аккуратно забирается с помощью микролипосакции. Жир сразу же очищается,
              обрабатывается и вводится с помощью микроканюль в зону дефицита обьема. Жировые клетки помещаются в
              различные слои ткани, поэтому трансплантат лучше приживается, а риск возникновения неровностей значительно
              снижается.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">04</p>
            <h1 class="list__title">Первичная консультация</h1>
            <h2 class="list__subtitle">это установление дружеского контакта с первых минут, проявление личного тепла и
              искренней заинтересованности врача
            </h2>
            <p class="list__info">Я очень люблю консультировать. Это огромная радость, когда в процессе консультации
              удается помочь пациенту справиться со страхом неизвестности перед операцией. Моя задача — дать вам как
              можно больше информации о процедуре, чтобы развеять сомнения и выстроить фундамент для дальнейшего
              великолепного результата.</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__video-content">
      <video class="content__video" loop autoplay muted controls="false">
        <source src="/assets/video/profilepage11.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">05</p>
            <h1 class="list__title">Подготовка к операции</h1>
            <h2 class="list__subtitle">проводится в нашей клинике</h2>
            <p class="list__info">Предоперационное обследование включает в себя: анализы крови и мочи, ЭКГ, консультацию
              флеболога и анестезиолога, УЗИ вен нижних конечностей и флюорографию.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">06</p>
            <h1 class="list__title">Ограничения перед операцией</h1>
            <h2 class="list__subtitle">не являются чем-то сложным и трудновыполнимым</h2>
            <p class="list__info">
              В программу входит подбор жилья, встреча с табличкой в аэропорту, трансфер в обе стороны, доставка еды и
              всего, что вам необходимо. Вам будет комфортно находиться в Санкт-Петербурге.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">07</p>
            <h1 class="list__title">Для иногородних пациентов</h1>
            <div class="list__popup" v-if="isPopupOpen">
              <img src="/public/assets/icons/question.svg">
              <p class="popup__info">Fly IN - облет, также называемый авиационным собранием, представляет собой заранее
                организованное собрание самолетов, пилотов и пассажиров в развлекательных и общественных целях.</p>
            </div>
            <h2 class="list__subtitle">я разработал программу медицинского туризма «Fly IN»
              <button class="subtitle__popup-btn" @click="togglePopup">
                <img src="/public/assets/icons/close.svg">
              </button>. Это онлайн-служба заботы о пациентах,
              предусматривающая полное сопровождение до, во время и после операции</h2>
            <p class="list__info">
              В программу входит подбор жилья, встреча с табличкой в аэропорту, трансфер в обе стороны, доставка еды и
              всего, что вам необходимо. Вам будет комфортно находиться в Санкт-Петербурге.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <img src="/assets/images/profilepage3.png" class="fullscreen__image">
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">08</p>
            <h1 class="list__title">Операция</h1>
            <h2 class="list__subtitle">по многоуровневой пересадке жира по технологии Coleman — наиболее часто
              используемая мной методика</h2>
            <p class="list__info">Существует несколько методик подтяжки лба. Некоторые из них поднимают весь лоб целиком
              вместе с бровью, а некоторые — только наружную часть брови. Все эти процедуры высокотехнологичны и
              проводятся с помощью современного эндовидеохирургического оборудования.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">09</p>
            <h1 class="list__title">Повторные процедуры липофилинга</h1>
            <h2 class="list__subtitle">могут быть необходимы в ряде случаев</h2>
            <p class="list__info">
              Липофилинг — процедура, имеющая определенную степень непредсказуемости. Она может потребовать нескольких
              этапов (повторных процедур). Процент «приживления» жира зависит не только от техники проведения операции,
              но и от индивидуальных особенностей пациента.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">10</p>
            <h1 class="list__title">Объединение нескольких операций</h1>
            <h2 class="list__subtitle">это удобно: вы получаете комплексный эффект омоложения за меньшее время, сокращая
              период восстановления и пребывания в палате
            </h2>
            <p class="list__info">
              Для полного комплексного омоложения лица липофилинг можно сочетать с другими омолаживающими операциями.
            </p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">11</p>
            <h1 class="list__title">Восстановление после операции</h1>
            <h2 class="list__subtitle">не потребует снятия швов. Отек спадет в течение 15 дней</h2>
            <p class="list__info">
              В местах взятия жировой ткани может быть легкая болезненность, первые 2 дня которая снимается
              обезболивающими препаратами. Окончательный результат вы сможете оценить через 3 месяца после операции. При
              общем наборе веса обработанные жиром области лица также могут увеличиваться в объеме, поэтому после
              процедуры важно поддерживать стабильный вес.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <div class="fullscreen__photos">
        <img src="/assets/images/profilepage19.png">
        <img src="/assets/images/profilepage20.png">
      </div>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">12</p>
            <h1 class="list__title">Квалификация хирурга</h1>
            <h2 class="list__subtitle">это самое важное условие и гарантия успешного результата и безопасности</h2>
            <p class="list__info">Пластический хирург должен быть опытным, обладать чувством меры и иметь художественный
              взгляд. Он в совершенстве должен владеть методикой проведения таких процедур. У хирурга нет права на
              ошибку.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">13</p>
            <h1 class="list__title">Истории преображения</h1>
            <h2 class="list__subtitle">это самое ценное в моей работе</h2>
            <p class="list__info">
              Липофилинг делает лицо более молодым и привлекательным. Это подтверждают истории моих пациентов. Возможно,
              вам будет интересно с ними ознакомиться.</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="fullscreen-wrapper">
      <div class="grid__photos">
        <div class="photo__item">
          <img src="/assets/images/face1.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face2.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face4.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-1.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-2.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-3.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-4.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-9.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-10.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-11.png">
        </div>
        <div class="photo__item">
          <img src="/assets/images/face3-12.png">
        </div>
      </div>
      <div class="padding-for-wrapper">
        <button class="show__more-btn">смотреть все работы</button>
      </div>
    </section>
    <section class="landing__description-content">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">14</p>
            <h1 class="list__title">Стоимость услуг</h1>
            <h2 class="list__subtitle">определяется количеством корректируемых областей</h2>
            <p class="list__info">Липофилинг лица — от 50 000 рублей.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">15</p>
            <h1 class="list__title">Стоимость анестезии, анализов, размещения</h1>
            <h2 class="list__subtitle">рассчитывается дополнительно к стоимости операции</h2>
            <p class="list__info">
              1 час общей анестезии — 20 000 ₽.<br>
              Размещение в палате (питание включено) — 8 000 ₽.<br>
              Размещение в двухместной палате (питание включено) — 6 000 ₽.<br>
              Необходимая панель анализов перед операцией — 13 400 ₽.</p>
          </li>
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <p class="list__num">16</p>
            <h1 class="list__title">Ответы на вопросы</h1>
            <h2 class="list__subtitle">которые часто появляются в процессе принятия решения, вы найдете в разделе FAQ
            </h2>
            <p class="list__info">
              Если ответа на ваш вопрос там нет, смело пишите/звоните.<br>
              +7 911 122 48 88<br>
              oleg@gordienko.doctor
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="landing__description-content" style="padding-top: 0; padding-bottom: 0;">
      <div class="numbered-wrapper">
        <ul class="description__list-numbered">
          <li class="list__lists" :class="{ 'animate': isVisible }">
            <h1 class="list__title">БЛОГ</h1>
            <p class="list__date">23.12.23</p>
            <h2 class="list__subtitle" style="color: #393939;">Липофилинг лица</h2>
            <p class="list__info">Олег Викторович Гордиенко</p>
            <button class="show__more-btn" style="color: #5493D1; border: 1px solid #5493D1; margin-top: 20px;">ЧИТАТЬ
              ПОЛНУЮ СТАТЬЮ</button>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const videoPlayer = ref(null)
const isPlaying = ref(false)
const isMuted = ref(true)
function togglePlay() {
  if (videoPlayer.value.paused || videoPlayer.value.ended) {
    videoPlayer.value.play()
    isPlaying.value = true
  } else {
    videoPlayer.value.pause()
    isPlaying.value = false
  }
}
function toggleMute() {
  videoPlayer.value.muted = !videoPlayer.value.muted
  isMuted.value = videoPlayer.value.muted
}
function toggleFullscreen() {
  if (videoPlayer.value.requestFullscreen) {
    videoPlayer.value.requestFullscreen()
  } else if (videoPlayer.value.mozRequestFullScreen) {
    videoPlayer.value.mozRequestFullScreen()
  } else if (videoPlayer.value.webkitRequestFullscreen) {
    videoPlayer.value.webkitRequestFullscreen()
  } else if (videoPlayer.value.msRequestFullscreen) {
    videoPlayer.value.msRequestFullscreen()
  }
}

const isPopupOpen = ref(false)
function togglePopup() {
  isPopupOpen.value = !isPopupOpen.value
}

const titles = [
  '«Я - “художник-реставратор”. Тот, кто работает с редкими и очень дорогими произведениями искусства»',
  '«Каждый готовится к своей роли, но главное действующее лицо здесь — вы»',
  '«Современная эстетическая хирургия лица способна изменить качество вашей жизни и ваше отношение к себе.»',
  'DEEP PLANE FACELIFT (подтяжка лица в глубокой плоскости) <span style="color: #8A8A8A; font-family: Accademico;">— это модифицированная расширенная методика подтяжки лица. Она позволяет омолаживать лицо комплексно, без эффекта перетянутости и с меньшей вероятностью рубцов и осложнений. Вы получите лицо правильных пропорций и гармоничной формы.»</span>',
  'Подтяжка верхней губы <span style="color: #8A8A8A; font-family: Accademico;"> — невероятно элегантная и тонкая процедура. Эта простая операция способна вернуть молодость, объем и чувственность вашим губам. Операция дает действительно естественные гармоничные результаты, а рубец под носом будет незаметен для окружающих.</span>',
  'Лифтинг лба и бровей <span style="color: #8A8A8A; font-family: Accademico;"> — это высокоэффективная эстетическая операция, которая устраняет нависание бровей и разглаживает морщины в области лба, переносицы и наружных углов глаз.</span>',
  'Платизмопластика (цервикопластика) <span style="color: #8A8A8A; font-family: Accademico;"> — это хирургическая процедура, направленная на омоложение шеи.</span>',
  'Блефаропластика <span style="color: #8A8A8A; font-family: Accademico;"> — это хирургическая процедура, в ходе которой устраняются возрастные изменения и эстетические недостатки в области верхних и нижних век.</span>',
  'Липофилинг (пересадка жира) <span style="color: #8A8A8A; font-family: Accademico;"> — это малоинвазивная процедура добавления или восстановления объема в определенных областях на лице, во время которой используется ваш собственный жир, взятый из бедер, коленей или живота.</span>'
]
const animatedTitles = titles.map(() => ref(''))
const currentCharIndices = titles.map(() => ref(0))
const intervals = []
const isVisible = titles.map(() => ref(false))

function typeTitle(index) {
  if (currentCharIndices[index].value < titles[index].length) {
    const char = titles[index][currentCharIndices[index].value]
    if (char === '<') {
      const closeTagIndex = titles[index].indexOf('>', currentCharIndices[index].value)
      animatedTitles[index].value += titles[index].slice(currentCharIndices[index].value, closeTagIndex + 1)
      currentCharIndices[index].value = closeTagIndex + 1
    } else {
      animatedTitles[index].value += char
      currentCharIndices[index].value++
    }
  } else {
    stopTypingAnimation(index)
    setTimeout(() => {
      animatedTitles[index].value = ''
      currentCharIndices[index].value = 0
      startTypingAnimation(index)
    }, 5000)
  }
}
function startTypingAnimation(index) {
  if (!intervals[index]) {
    intervals[index] = setInterval(() => typeTitle(index), 100)
  }
}
function stopTypingAnimation(index) {
  clearInterval(intervals[index])
  intervals[index] = null
}
function createObserver(callback, options) {
  return new IntersectionObserver(callback, options)
}

onMounted(() => {
  const subtitleOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }
  const textOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  }
  const subtitleObserver = createObserver(handleSubtitleIntersect, subtitleOptions)
  const textObserver = createObserver(handleTextIntersect, textOptions)

  function handleSubtitleIntersect(entries) {
    entries.forEach(entry => {
      const index = parseInt(entry.target.id, 10)
      if (entry.isIntersecting) {
        isVisible[index].value = true
        startTypingAnimation(index)
      } else {
        isVisible[index].value = false
        stopTypingAnimation(index)
      }
    })
  }

  function handleTextIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      } else {
        entry.target.classList.remove('animate')
      }
    })
  }

  const observerMap = {
    '.description__subtitle': subtitleObserver,
    '.description__title-min': subtitleObserver,
    '.description__text': textObserver,
    '.description__list': textObserver,
    '.list__lists': textObserver
  }

  Object.keys(observerMap).forEach(className => {
    const elements = document.querySelectorAll(className)
    elements.forEach((el, index) => {
      if (className === '.description__subtitle' || className === '.description__title-min') {
        el.setAttribute('data-id', index.toString())
      }
      observerMap[className].observe(el)
    })
  })
})
onUnmounted(() => {
  intervals.forEach(interval => clearInterval(interval))
})
</script>

<style lang="scss" scoped>
.landing {
  display: flex;
  flex-direction: column;
  max-width: 1728px;
  width: 100%;
  
  .landing__video-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;

    @media (max-width: 1350px) {
      height: 470px;
      
      &.title-video-block {height: 978px;}
    }

    @media (max-width: 700px) {
      height: 612px;

      &.title-video-block {height: 868px;}
    }

    .content__title {
      color: #FFF;
      text-align: center;
      font-feature-settings: 'liga' off;
      font-family: Accademico;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      text-transform: uppercase;
      z-index: 2;

      @media (max-width: 1350px) {
        font-size: 30px;
      }

      &.mobile {
        display: none;
      
        @media (max-width: 700px) {
          display: flex;
        }
      }
    }

    .content__video {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .content-video__control {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      bottom: 55px;
      width: 100%;
      padding: 0 46px;

      .control__buttons-wrapper {
        display: flex;
        align-items: center;
        gap: 30px;
      }

      .control__btn {
        cursor: pointer;
        background: none;
        border: none;
        width: 25px;
        height: 25px;
      }
    }
  }

  .landing__description-content {
    display: flex;
    flex-direction: column;
    padding: 200px 146px;
    gap: 20px;

    @media (max-width: 1350px) {
      padding: 150px 100px;
    }

    @media (max-width: 900px) {
      padding: 150px 45px;
    }

    @media (max-width: 700px) {
      padding: 120px 20px;
    }

    .description__title {
      color: #393939;
      font-family: Accademico;
      font-size: 105px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: 1.05px;
      text-transform: uppercase;

      @media (max-width: 1350px) {
        font-size: 70px;
        width: 100%;
      }

      @media (max-width: 700px) {
        font-size: 50px;
      }

      @media (max-width: 450px) {
        font-size: 45px;
      }
    }

    .description__title-min {
      color: #393939;
      font-family: Accademico;
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: 0.36px;
      text-transform: uppercase;
      max-width: 1418px;
      min-height: 260px;

      @media (max-width: 1350px) {
        font-size: 22px;

        br {
          display: none;
        }
      }

      @media (max-width: 700px) {
        font-size: 20px;
        min-height: 150px;
      }
    }

    .post__sign {
      color: #000;
      text-align: right;
      font-family: Accademico;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      margin-left: auto;
      margin-top: 30px;
      margin-bottom: 178px;

      @media (max-width: 1350px) {
        font-size: 16px;
      }

      @media (max-width: 700px) {
        font-size: 14px;
      }
    }

    .description__list {
      display: flex;
      flex-direction: column;
      margin-top: 105px;
      padding-left: 25px;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;

      li {
        color: #393939;
        font-family: Accademico;
        font-size: 26px;
        font-style: normal;
        font-weight: 300;
        line-height: 150%;

        @media (max-width: 1350px) {
          font-size: 20px;
        }

        @media (max-width: 700px) {
          font-size: 18px;
        }
      }

      &.list-margin {
        margin-top: 0;
      }

      &.animate {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .content-block {
      display: flex;
      justify-content: center;
      width: 100%;

      .content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 1400px;
        gap: 150px;
      }
    }

    .description__logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 207px;
      width: 100%;

      @media (max-width: 900px) {
        margin-top: 100px;
      }

      img {
        cursor: pointer;
        width: 130px;
        height: 130px;

        @media (max-width: 1350px) {
          width: 82px;
          height: 82px;
        }

        @media (max-width: 500px) {
          width: 42px;
          height: 42px;
        }

        @media (hover: hover) {
          &:hover {
            transform: scale(1.25);
            transition: .4s;
          }
        }
      }
    }

    .description__subtitle {
      color: #5493D1;
      text-align: center;
      font-family: Accademico;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      text-transform: uppercase;
      width: 1000px;
      height: 150px;

      @media (max-width: 1350px) {
        font-size: 35px;
        width: 100%;
      }

      @media (max-width: 1050px) {
        height: auto;
      }

      @media (max-width: 700px) {
        font-size: 30px;
      }
    }

    .description__text {
      color: #393939;
      text-align: justify;
      font-family: Accademico;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;

      @media (max-width: 1350px) {
      font-size: 24px;
      }

      @media (max-width: 700px) {
        font-size: 20px;
      }

      &.animate {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .numbered-wrapper {
    display: flex;
    flex-direction: column;
  }

  .description__list-numbered {
    display: flex;
    flex-direction: column;
    max-width: 1300px;
    gap: 100px;

    .list__lists {
      position: relative;
      display: flex;
      flex-direction: column;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;

      .list__num {
        color: #393939;
        font-family: Accademico;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 0.18px;
        text-transform: uppercase;
        margin-bottom: 10px;
        opacity: 0.6;

        @media (max-width: 700px) {
          font-size: 14px;
        }
      }

      .list__date {
        color: #393939;
        font-family: Accademico;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 98%;
        margin-bottom: 20px;
      }

      .list__title {
        color: #393939;
        font-family: Accademico;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: 0.36px;
        text-transform: uppercase;
        margin-bottom: 20px;

        @media (max-width: 1350px) {
          font-size: 30px;
        }

        @media (max-width: 700px) {
          font-size: 18px;
          line-height: 130%;
        }
      }

      .list__subtitle {
        color: #5493D1;
        font-family: Accademico;
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: 0.26px;
        margin-bottom: 20px;
        display: inline;

        @media (max-width: 1350px) {
          font-size: 20px;
        }

        @media (max-width: 700px) {
          font-size: 18px;
        }
      }

      .list__popup {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
        background: radial-gradient(436.66% 138.04% at 42.87% 56.06%, rgba(84, 147, 209, 0.80) 2%, #A9C8E8 34%, #FFF 79.5%);
        opacity: 0.85;
        width: 500px;
        border-radius: 30px;
        top: -160px;
        right: 70px;
        gap: 20px;

        @media (max-width: 1350px) {
          top: -170px;
          right: 0;
        }

        @media (max-width: 550px) {
          width: 90%;
          left: 50%;
          top: 0;
          transform: translate(-50%, -80%);
        }

        .popup__info {
          font-size: 16px;
          color: #fff;
        }
      }

      .subtitle__popup-btn {
        cursor: pointer;
        border: none;
        background: none;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        font-size: 15px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px 0 0;
        transform: translateY(8px);
      }

      .list__info {
        color: #393939;
        text-align: justify;
        font-family: Accademico;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        opacity: 0.85;

        @media (max-width: 1350px) {
          font-size: 14px;
        }
      }

      &.animate {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .list__gap {
    gap: 30px;
  }

  .landing__fullscreen-content {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .fullscreen-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 150px;

    @media (max-width: 1350px) {
      gap: 70px;
    }
  }

  .fullscreen__photos {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    gap: 50px;

    @media (max-width: 700px) {
      flex-direction: column;
    }

    img {
      width: 50%;
      height: auto;

      @media (max-width: 700px) {
        width: 100%;

        &:first-child {padding: 70px; height: auto; object-fit: cover; width: 100%;}
      }
    }
  }

  .grid__photos {
    display: grid;
    grid-template-columns: repeat(4, auto);
    width: 100%;
    overflow: hidden;

    @media (max-width: 700px) {
      grid-template-columns: repeat(2, auto);
    }

    .photo__item {
      display: flex;
      align-items: flex-end;
      background: #000;
      height: 510px;
      width: 450px;

      @media (max-width: 1720px) {
        width: 25vw;
        height: auto;

        img {
          width: 100%;
          height: auto;
        }
      }

      @media (max-width: 700px) {
        width: 100%;
        height: auto;
      }
    }
  }

  .fullscreen__image {
    width: 100%;
    height: 100%;

    @media (max-width: 700px) {
      width: auto;
      height: 500px;
    }

    @media (max-width: 500px) {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
  }

  .padding-for-wrapper {
    padding-left: 146px;

    @media (max-width: 1350px) {
      padding-left: 100px;
    }

    @media (max-width: 900px) {
      padding-left: 45px;
    }

    @media (max-width: 700px) {
      display: flex;
      justify-content: center;
      width: 100%;
      padding-left: 0;
    }
  }

  .show__more-btn {
    cursor: pointer;
    display: flex;
    width: 340px;
    height: 50px;
    justify-content: center;
    align-items: center;
    color: #393939;
    font-family: Grafitello;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 95%;
    text-transform: uppercase;
    border: 0.7px solid #393939;
    background: none;

    @media (max-width: 1350px) {
      width: 300px;
      font-size: 10px;
    }

    @media (max-width: 700px) {
      height: 40px;
      width: 260px;
      font-size: 12px;
    }
  }
}
</style>