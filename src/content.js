// Централизованный контент сайта для RU/EN локалей: тексты, FAQ и карточки слайдов.
export const SITE_CONTENT = {
  // Русская локаль сайта.
  ru: {
    locale: 'ru',
    // Тексты cookie-баннера.
    cookie: {
      label: 'Уведомление об использовании cookie',
      text: 'Для корректной работы сайта используются технические и аналитические cookie-файлы. Продолжая пользоваться сайтом, вы принимаете это.',
      close: 'Закрыть',
    },
    // Контент главной страницы.
    home: {
      title: 'Интересные пешие маршруты всегда рядом',
      subtitle: 'MappNgo — карманный помощник в подборе городских прогулок от настоящих знатоков своего города.',
      switchLabel: '→ En',
      switchHref: '/en/',
      faqHref: '/faq/',
      faqCta: '→ Подробный FAQ',
      introFaq: [
        {
          title: 'Что такое MappNgo?',
          body: 'Это iOS приложение, в котором пользователи могли проходить и добавлять пешие маршруты. Выбрать маршрут можно было по интересующим местам или по его расположению. На данный момент проект закрыт.',
        },
        {
          title: 'Кто работал над MappNgo?',
          html: 'С UX/UI-дизайном iOS-приложения помогали <a href="https://www.agoradesign.ru/" target="_blank" rel="noreferrer">Agoradesign</a>, техническая часть была выполнена <a href="https://dnt-lab.com/" target="_blank" rel="noreferrer">Design and test lab</a>, работы по сайту выполнил <a href="https://vladmdgolam.now.sh/" target="_blank" rel="noreferrer">Влад Мд Голам</a>. Идея, разработка концепции проекта, координация процессов, а также прочие мелочи — <a href="https://svitya.com/" target="_blank" rel="noreferrer">Виктор Строков</a>.',
        },
        {
          title: 'Почему приложение больше недоступно в App Store?',
          body: 'Проект закрылся на фоне пандемии COVID-19, поскольку пешие прогулки и карантин — вещи несовместимые.',
        },
        {
          title: 'Как можно с вами связаться?',
          html: 'Написать <a href="https://t.me/vstrokov" rel="noreferrer">сюда</a>.',
        },
      ],
      slides: [
        { image: '/assets/images/top.png', title: 'Топ маршрутов', text: 'В приложении был список лучших маршрутов за неделю, за месяц и за всё время.' },
        { image: '/assets/images/new.png', title: 'Создание маршрута', text: 'Создать свой маршрут было просто и удобно и не требовало большого количества времени.' },
        { image: '/assets/images/fav.png', title: 'Избранное', text: 'Каждый понравившийся маршрут можно было добавить в «Избранное», чтобы сохранить на потом.' },
        { image: '/assets/images/category.png', title: 'Категории', text: 'Маршруты состояли из 4 категорий мест: «Под небом», «Культура», «Еда и напитки» и «Другое».' },
        { image: '/assets/images/hero.png', title: 'Навигация', text: 'Навигация осуществлялась с помощью Google Карт как по всему маршруту, так и к конкретной точке.' },
      ],
    },
    // Контент отдельной FAQ-страницы.
    faq: {
      homeHref: '/',
      sections: [
        { title: 'Что такое MappNgo?', body: 'Это iOS приложение, в котором пользователи могли проходить и добавлять пешие маршруты. Выбрать маршрут можно было по интересующим местам или по его расположению. На данный момент проект закрыт.' },
        { title: 'Как можно было начать пользоваться приложением?', body: 'Приложение было доступно только в App Store. Проходить и добавлять маршруты мог любой желающий, однако для большинства функций требовалась регистрация. Приложение было абсолютно бесплатно и не предполагало внутренних покупок.' },
        { title: 'Что включали в себя маршруты?', body: 'Маршруты состояли из 4 категорий мест: «Под небом», «Культура», «Еда и напитки» и «Другое». Каждая из категорий была представлена отдельным значком, чтобы выбрать понравившийся маршрут было максимально просто и удобно.' },
        {
          title: 'Как можно было подобрать подходящий маршрут?',
          list: [
            'Через общий список на главном экране. Очередность маршрутов формировалась исходя из рейтинга и положения карты пользователя: в списке отображались только те маршруты, которые были задействованы на карте. Чем меньше масштаб — тем больше маршрутов, чем больше масштаб — тем меньше маршрутов.',
            'Через поиск на главном экране приложения. Достаточно было вбить интересующую точку или название маршрута, и уже можно было собираться в путь.',
            'В приложении было 3 списка с лучшими маршрутами: за неделю, за месяц и за всё время. Эти списки формировались только по рейтингу и не учитывали географию пользователя.',
          ],
        },
        {
          title: 'Как можно было добавить свой маршрут?',
          body: 'В MappNgo использовался API Google Карт, что позволяло легко добавить любое место из обширной базы Google. Также была возможность добавить собственную точку на карту.',
          postBody: 'Чтобы добавить маршрут, пользователь должен был указать следующую информацию:',
          list: ['Название маршрута;', 'Краткое описание;', 'Фоновое фото;', 'Информацию о каждой из остановок: название, категорию и краткое описание.'],
          compactBody: true,
        },
        { title: 'Можно ли было сохранить понравившиеся маршруты?', body: 'Любой из маршрутов можно было добавить в избранное, поделиться им с друзьями, а также оценить.' },
        { title: 'Как можно было активировать функцию навигации?', body: 'В MappNgo навигация по маршруту была реализована с помощью Google Карт. Чтобы активировать функцию, необходимо было нажать на кнопку «Navi», которая появлялась в правой части экрана после старта маршрута. Чтобы запустить навигацию к конкретной точке, необходимо было нажать на всплывающее окно с её описанием.' },
      ],
    },
  },
  // Английская локаль сайта.
  en: {
    locale: 'en',
    // Тексты cookie-баннера.
    cookie: {
      label: 'Cookie notice',
      text: 'This website uses technical and analytical cookie files to function properly. By continuing to use the site, you agree to this.',
      close: 'Close',
    },
    // Контент главной страницы.
    home: {
      title: 'Interesting walking routes that are always nearby',
      subtitle: 'MappNgo — a pocket guide for the best city walks from its locals.',
      switchLabel: '→ Ru',
      switchHref: '/',
      faqHref: '/en/faq/',
      faqCta: '→ Detailed FAQ',
      introFaq: [
        { title: 'What is MappNgo?', body: 'It was an iOS application with many unique, interesting, and hidden city walks created by MappNgo and its users. Route guides could be found by location or by included points. The project is now closed.' },
        { title: 'Who worked on MappNgo?', html: '<a href="https://www.agoradesign.ru/" target="_blank" rel="noreferrer">Agoradesign</a> helped with the app\'s UX/UI design, the technical part was implemented by <a href="https://dnt-lab.com/" target="_blank" rel="noreferrer">Design and test lab</a>, and the website was developed by <a href="https://vladmdgolam.now.sh/" target="_blank" rel="noreferrer">Vlad Md Golam</a>. The idea, project concept, process coordination, and many other things were done by <a href="https://svitya.com/" target="_blank" rel="noreferrer">Victor Strokov</a>.' },
        { title: 'Why is MappNgo no longer available in the App Store?', body: 'The project was closed due to the COVID-19 pandemic, as walking tours and quarantine were incompatible.' },
        { title: 'Is there any way to contact you?', html: 'Write <a href="https://t.me/vstrokov" rel="noreferrer">here</a>.' },
      ],
      slides: [
        { image: '/assets/images/top.png', title: 'Top route guides', text: 'The app featured lists of the best route guides for a week, a month, and all time.' },
        { image: '/assets/images/new.png', title: 'Guide creation', text: 'Creating a new guide was simple, convenient, and did not require much time.' },
        { image: '/assets/images/fav.png', title: 'Favorites', text: 'Any route guide you liked could be added to “Favorites” for later use.' },
        { image: '/assets/images/category.png', title: 'Categories of places', text: '«Outdoors», «Culture», «Eat and drinks» and «Other».' },
        { image: '/assets/images/hero.png', title: 'Navigation', text: 'Navigation in the app was based on the Google Maps API.' },
      ],
    },
    // Контент отдельной FAQ-страницы.
    faq: {
      homeHref: '/en/',
      sections: [
        { title: 'What is MappNgo?', body: 'It was an iOS application with many unique, interesting, and hidden city walks created by MappNgo and its users. Route guides could be found by location or by included points. The project is now closed.' },
        { title: 'How did the application work?', body: 'The application was available only in the App Store. Any user could add and use route guides, but most features required registration. The application was free and did not offer any in-app purchases.' },
        { title: 'What types of places were in a route guide?', body: 'Route guides could consist of 4 categories of places: «Outdoors», «Culture», «Food and drinks» and «Other». Each category has its own icon, so every user could choose the best route as easy as possible.' },
        {
          title: 'How could a user find a suitable route guide?',
          list: [
            'Through the general list on the MappNgo home screen. Route guides were sorted by rating and the user’s map position — only the guides visible within the current map area were shown. The smaller the scale, the more guides were shown; the larger the scale, the fewer guides were shown.',
            'By searching on the home screen. You only had to enter the name of a point of interest or a route guide, and you could be on your way.',
            'Via top route guide lists: weekly, monthly, and all time. These lists were generated by rating only and did not take the user’s current location into account.',
          ],
        },
        {
          title: 'How could a user add a new route guide?',
          body: 'MappNgo was based on the Google Maps API, which made it easy to add any place from the extensive Google database. Also, it was possible to add a unique personal point.',
          postBody: 'For each route guide, the user had to specify the following information:',
          list: ['Guide name;', 'Brief description;', 'Background photo;', 'Information about each point: name, category and short description.'],
          compactBody: true,
        },
        { title: 'Was it possible to save favorite route guides?', body: 'Users could add any route guide to the “Favorites” section, share it with friends, and rate it.' },
        { title: 'How could the navigation feature be activated?', body: 'The navigation feature was based on Google Maps directions. To activate it, the user had to press the “Navi” button, which appeared on the right side of the screen after starting a route guide. It was also possible to start navigation to a specific point via a pop-up window with its description.' },
      ],
    },
  },
}
