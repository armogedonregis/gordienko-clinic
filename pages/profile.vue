<template>
  <div class="landing">
    <section class="landing__video-content">
      <video ref="videoPlayer" class="content__video" :muted="isMuted">
        <source src="/static/assets/video/homepage2.mp4" type="video/mp4">
      </video>
      <div class="content-video__control">
        <button class="control__btn" @click="togglePlay">
          <img src="/static/assets/icons/play.png">
        </button>
        <div class="control__buttons-wrapper">
          <button class="control__btn" @click="toggleMute">
            <img src="/static/assets/icons/volume.png">
          </button>
          <button class="control__btn" @click="toggleFullscreen">
            <img src="/static/assets/icons/fullscreen.png">
          </button>
        </div>
      </div>
    </section>
    <section class="landing__description-content">
      <h1 class="description__title">ОЛЕГ <br> ВИКТОРОВИЧ <br> ГОРДИЕНКО</h1>
      <ul class="description__list list__gap">
        <li>Сертифицированный пластический хирург, эксперт в области омолаживающей хирургии лица</li>
        <li>Один из немногих пластических хирургов в России, успешно практикующих глубокую плоскостную подтяжку <br> лица по новой в России методике - Deep Plane FaceLift</li>
        <li>Выпускник Первого Санкт-Петербургского Государственного Медицинского Университета имени академика <br> И. П. Павлова</li>
        <li>Член Российского Общества Пластических, Реконструктивных и Эстетических хирургов (РОПРЭХ)</li>
        <li>Клиника Высшей Категории GRANDMED г. Санкт-Петербург</li>
      </ul>
      <div class="content-block">
        <div class="content-wrapper">
          <div class="content-wrapper">
            <div class="description__logo">
              <img src="/static/assets/images/logo1.png">
              <img src="/static/assets/images/logo2.png">
              <img src="/static/assets/images/logo3.png">
              <img src="/static/assets/images/logo4.png">
            </div>
          </div>
          <h2 class="description__subtitle">«Я - “художник-реставратор”. Тот, кто работает с редкими и очень дорогими произведениями искусства»</h2>
          <p class="description__text">Экспертная эстетическая хирургия лица — это удивительный синтез науки и искусства. Здесь законы художественной композиции не менее важны, чем в живописи, музыке или скульптуре. Я убежден, что пластический хирург должен обладать высоким эстетическим интеллектом, который он должен тренировать всю свою профессиональную жизнь, как тренирует свое тело спортсмен. Также важно иметь художественный взгляд и безупречное эстетическое чутье. Я оттачиваю свое мастерство не только в операционной: работая в студии со скульптурной глиной, я тренирую “чувство меры” и учусь видеть пропорции. Только у меня, в отличие от скульптора, нет права на ошибку. Я не имею морального права творить на лице как мне вздумается и делать с лицом то, чего никогда у человека не было. Я - не “скульптор”. Я - “художник-реставратор”. Тот, кто работает с редкими и очень дорогими произведениями искусства. Я не являюсь “арбитром” красоты, но ее дух безусловно руководит мной, когда я работаю в операционной с лицами людей. Таким образом, я становлюсь лишь соавтором вашей красоты.</p>
        </div>
      </div>
    </section>
    <section class="landing__fullscreen-content">
      <img src="/static/assets/images/piano.png">
    </section>
    <section class="landing__description-content">
      <h1 class="description__title-min">Омолаживающие операции на лице, которые я выполняю, чтобы <br> вы могли вдохновлять и вдохновляться своим отражением:</h1>
      <ul class="description__list">
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
      <video class="content__video" loop autoplay muted>
        <source src="/static/assets/video/profilepage1.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="content-block">
        <div class="content-wrapper">
          <p class="description__text">Омолаживающая операция — это таинственное и даже магическое событие. Наша операционная бригада, как актерская труппа перед спектаклем, заперта в своем герметичном маленьком мире — операционной. Каждый готовится к своей роли, но главное действующее лицо здесь — вы. Мне важно создать в операционной условия для комфорта пациента и спокойного сосредоточенного внимания всей команды. Расслабляющая фоновая музыка способствует этому, но лишь до наступления ключевого момента операции: здесь уже ничто не должно отвлекать меня. Я знаю анатомию лица досконально и всегда помню, что, оперируя, ступаю на глубоко личную территорию. Но все эти усилия окупаются сполна, когда я вижу, как счастливы мои пациенты. Потому что каждая женщина прекрасна. Каждое лицо достойно чутких и талантливых рук мастера.</p>
          <h2 class="description__subtitle">«Каждый готовится к своей роли, но главное действующее лицо здесь — вы»</h2>
        </div>
      </div>
    </section>
    <section class="landing__video-content">
      <video class="content__video" loop autoplay muted>
        <source src="/static/assets/video/profilepage2.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="content-block">
        <div class="content-wrapper">
          <p class="description__text">Я вижу, как часто старение лица лишает женщину радости и эмоциональной стабильности. Современная эстетическая хирургия лица способна изменить качество вашей жизни и ваше отношение к себе. Здесь не может быть компромиссов: только правильная хирургическая техника и филигранно выполненная операция смогут обеспечить естественный внешний вид и замедлить старение на долгие годы. Я знаю, что эстетическая хирургия лица — это не простое решение. Это путешествие. Личное и важное. Каждый мой пациент нуждается в эмоциональной поддержке и заботе на всех этапах этого пути. Именно это бережно обеспечиваем я и моя команда.</p>
          <h2 class="description__subtitle">«Современная эстетическая хирургия лица способна изменить качество вашей жизни и ваше отношение к себе.»</h2>
        </div>
      </div>
    </section>
    <section class="landing__video-content">
      <h1 class="content__title">Deep plane facelift</h1>
      <video class="content__video" loop autoplay muted>
        <source src="/static/assets/video/homepage3.mp4" type="video/mp4">
      </video>
    </section>
    <section class="landing__description-content">
      <div class="content-block">
        <div class="content-wrapper">
          <h2 class="description__title-min">
            DEEP PLANE FACELIFT (подтяжка лица в глубокой плоскости) — 
            <span>это модифицированная расширенная методика подтяжки лица. Она позволяет омолаживать лицо комплексно, без эффекта перетянутости и с меньшей вероятностью рубцов и осложнений. Вы получите лицо правильных пропорций и гармоничной формы.»</span>
          </h2>
          <p class="post__sign">—  Олег Викторович Гордиенко, <br> пластический хирург</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const videoPlayer = ref(null);
const isPlaying = ref(false);
const isMuted = ref(true);
function togglePlay() {
  if (videoPlayer.value.paused || videoPlayer.value.ended) {
    videoPlayer.value.play();
    isPlaying.value = true;
  } else {
    videoPlayer.value.pause();
    isPlaying.value = false;
  }
}
function toggleMute() {
  videoPlayer.value.muted = !videoPlayer.value.muted;
  isMuted.value = videoPlayer.value.muted;
}
function toggleFullscreen() {
  if (videoPlayer.value.requestFullscreen) {
    videoPlayer.value.requestFullscreen();
  } else if (videoPlayer.value.mozRequestFullScreen) {
    videoPlayer.value.mozRequestFullScreen();
  } else if (videoPlayer.value.webkitRequestFullscreen) {
    videoPlayer.value.webkitRequestFullscreen();
  } else if (videoPlayer.value.msRequestFullscreen) {
    videoPlayer.value.msRequestFullscreen();
  }
}
</script>

<style lang="scss" scoped>
.landing {
  display: flex;
  flex-direction: column;
  
  .landing__video-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;

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
    }

    .content__video {
      position: absolute;
      top: -25%;
      left: 0;
      width: 100%;
      height: 150%;
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

    .description__title {
      color: #393939;
      font-family: Accademico;
      font-size: 105px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: 1.05px;
      text-transform: uppercase;
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

      span {
        color: #8A8A8A;
        font-family: Accademico;
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
    }

    .description__list {
      display: flex;
      flex-direction: column;
      margin-top: 105px;
      padding-left: 25px;

      li {
        color: #393939;
        font-family: Accademico;
        font-size: 26px;
        font-style: normal;
        font-weight: 300;
        line-height: 150%;
      }
    }

    .list__gap {
      gap: 30px;
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
      }
    }

    .description__logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 207px;
      width: 100%;

      img {
        width: 130px;
        height: 130px;
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
      margin-top: 200px;
      width: 1000px;
    }

    .description__text {
      color: #393939;
      text-align: justify;
      font-family: Accademico;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      margin-top: 150px;
    }
  }

  .landing__fullscreen-content {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 1000px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>