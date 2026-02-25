export const SITE_CONTENT = {
  ru: {
    locale: 'ru',
    home: {
      title: 'Интересные пешие маршруты всегда рядом',
      subtitle: 'MappNgo — карманный помощник в подборе городских прогулок от настоящих знатоков своего города.',
      switchLabel: 'En',
      switchHref: '/en/',
      faqHref: '/faq.html',
      faqCta: '→ Подробный FAQ',
      introFaq: [
        {
          title: 'Что такое MappNgo?',
          body: 'Это iOS приложение, в котором пользователи могли проходить и добавлять пешие маршруты. Выбрать маршрут можно было по интересующим местам или по его расположению. На данный момент проект закрыт.',
        },
        {
          title: 'Кто работал над MappNgo?',
          html: 'С UX/UI дизайном iOS приложения помогали <a href="https://www.agoradesign.ru/" class="text-white font-weight-bold" target="_blank" rel="noreferrer">Agoradesign</a>, техническая часть была выполнена <a href="https://dnt-lab.com/" class="text-white font-weight-bold" target="_blank" rel="noreferrer">Design and test lab</a>, работы по сайту делал <a href="https://vladmdgolam.now.sh/" class="text-white font-weight-bold" target="_blank" rel="noreferrer">Влад Мд Голам</a>. Идея, разработка концепции проекта, координирование процессов, а также прочие мелочи — <a href="https://svitya.com/" class="text-white font-weight-bold" target="_blank" rel="noreferrer">Виктор Строков</a>.',
        },
        {
          title: 'Почему приложение больше недоступно в App store?',
          body: 'Проект закрылся на фоне пандемии Covid-19, поскольку пешие прогулки и карантин — вещи несовместимые.',
        },
        {
          title: 'Как можно с вами связаться?',
          html: 'Написать <a href="https://t.me/vstrokov" class="text-white font-weight-bold" rel="noreferrer">сюда</a>.',
        },
      ],
      slides: [
        { image: '/assets/images/top.png', title: 'Топ маршрутов', text: 'В приложении был список лучших маршрутов за неделю, за месяц, и все время.' },
        { image: '/assets/images/new.png', title: 'Создание маршрута', text: 'Создать свой маршрут было просто и удобно и не требовало большого количества времени.' },
        { image: '/assets/images/fav.png', title: 'Избранное', text: 'Каждый понравившийся маршрут можно было добавить в «Избранное», чтобы сохранить на потом.' },
        { image: '/assets/images/category.png', title: 'Категории', text: 'Маршруты состояли из 4 категорий мест: «Под небом», «Культура», «Еда и напитки» и «Другое».' },
        { image: '/assets/images/hero.png', title: 'Навигация', text: 'Навигация осуществлялась с помощью Google карт как по всему маршруту, так и к конкретной точке.' },
      ],
    },
    faq: {
      homeHref: '/index.html',
      sections: [
        { title: 'Что такое MappNgo?', body: 'Это iOS приложение, в котором пользователи могли проходить и добавлять пешие маршруты. Выбрать маршрут можно было по интересующим местам или по его расположению. На данный момент проект закрыт.' },
        { title: 'Как можно было начать пользоваться приложением?', body: 'Приложение было доступно только в App Store. Проходить и добавлять маршруты мог любой желающий, однако для большинства функций требовалась регистрация. Приложение было абсолютно бесплатно и не предполагало внутренних покупок.' },
        { title: 'Что включали в себя маршруты?', body: 'Маршруты состояли из 4 категорий мест: «Под небом», «Культура», «Еда и напитки» и «Другое». Каждая из категорий была представлена отдельным значком, чтобы выбрать понравившийся маршрут было максимально просто и удобно.' },
        {
          title: 'Как можно было подобрать подходящий маршрут?',
          list: [
            'Через общий список на главном экране. Очередность маршрутов формировалась исходя из рейтинга и положения карты пользователя: в списке отображались только те маршруты, которые были задействованы на карте. Чем меньше масштаб — тем больше маршрутов, чем больше масштаб — тем меньше маршрутов.',
            'Через поиск на главном экране приложения. Достаточно было вбить интересующую точку или название маршрута, и уже можно было собираться в путь.',
            'В приложении было 3 списка с лучшими маршрутами: за неделю, за месяц и за все время. Данные списки формировались только по рейтингу и не учитывали географию пользователя.',
          ],
        },
        {
          title: 'Как можно было добавить свой маршрут?',
          body: 'В MappNgo использовался API Google карт, что позволяло легко добавить любое место из обширной базы Google. При этом также присутствовала возможность добавить собственную точку на карту.',
          postBody: 'Чтобы добавить маршрут, пользователь должен был указать следующую информацию:',
          list: ['Название маршрута;', 'Краткое описание;', 'Фоновое фото;', 'Информацию о каждой из остановок: название, категорию и краткое описание.'],
          compactBody: true,
        },
        { title: 'Можно ли было сохранить понравившиеся маршруты?', body: 'Любой из маршрутов можно было добавить в избранное, поделиться им с друзьями, а также оценить.' },
        { title: 'Как можно было активировать функцию навигации?', body: 'В MappNgo навигация по маршруту была реализована с помощью приложения «Google карты». Чтобы активировать функцию необходимо было нажать на кнопку «Navi», которая появлялась в правой части экрана после старта маршрута. Для инициации навигации к конкретной точке необходимо было нажать на всплывающее окно с ее описанием.' },
      ],
    },
  },
  en: {
    locale: 'en',
    home: {
      title: 'Interesting walking routes that are always nearby',
      subtitle: 'MappNgo — a pocket guide for the best city walks from its locals.',
      switchLabel: 'Rus',
      switchHref: '/index.html',
      faqHref: '/en/faq.html',
      faqCta: '→ Detailed FAQ',
      introFaq: [
        { title: 'What is a MappNgo?', body: 'It was an iOS application with a lot of unique, interesting, and secret city walks, provided by MappNgo or its users. Route guides could be found by location or included points. The project is closed.' },
        { title: 'Who worked on MappNgo?', html: '<a href="https://www.agoradesign.ru/" class="text-white font-weight-bold" target="_blank" rel="noreferrer">Agoradesign</a> helped with app\'s UX/UI design, technical part was made by <a href="https://dnt-lab.com/" class="text-white font-weight-bold" target="_blank" rel="noreferrer">Design and test lab</a>, website development — <a href="https://vladmdgolam.now.sh/" class="text-white font-weight-bold" target="_blank" rel="noreferrer">Vlad Md Golam</a>. Idea, concept development, project management and other things — <a href="https://svitya.com/" class="text-white font-weight-bold" target="_blank" rel="noreferrer">Victor Strokov</a>.' },
        { title: 'Why MappNgo is no longer available in the App store?', body: 'The project has been closed due to a Covid-19 pandemic, as walking and quarantine are incompatible things.' },
        { title: 'Is there any way to contact you?', html: 'Write <a href="https://t.me/vstrokov" class="text-white font-weight-bold" rel="noreferrer">here</a>.' },
      ],
      slides: [
        { image: '/assets/images/top.png', title: 'Top route guides', text: 'There were lists of best guides for a week, a month, and all the time.' },
        { image: '/assets/images/new.png', title: 'Guide creation', text: 'It was easy to create new guide and did not require much time.' },
        { image: '/assets/images/fav.png', title: 'Favorites', text: 'Every liked route guide could be added to «Favorites» for later use.' },
        { image: '/assets/images/category.png', title: 'Categories of places', text: '«Outdoors», «Culture», «Eat and drinks» and «Other».' },
        { image: '/assets/images/hero.png', title: 'Navigation', text: 'Navigation in the app was based on the Google maps API.' },
      ],
    },
    faq: {
      homeHref: '/en/index.html',
      sections: [
        { title: 'What is a MappNgo?', body: 'It was an iOS application with a lot of unique, interesting, and secret city walks, provided by MappNgo or its users. Route guides could be found by location or included points. The project is closed.' },
        { title: 'How the application worked?', body: 'The application was available only in the App Store. Every user could add and use route guides, but using all the features required registration. The application was free and did not offer any In-App purchases.' },
        { title: 'What types of places were in a route guide?', body: 'Route guides could consist of 4 categories of places: «Outdoors», «Culture», «Food and drinks» and «Other». Each category has its own icon, so every user could choose the best route as easy as possible.' },
        {
          title: 'How user could find a proper route guide?',
          list: [
            'Through the general list on the MappNgo home screen. Route guides were sorted by their rating and the map position of the user — only those route guides that passed through the map were shown. The smaller the scale — more guides were shown, the smaller scale — fewer guides were shown.',
            'By searching on the home screen. All you had to do was to type in the name of interested point or the route guide and you could already be on your way.',
            'Via top route guides lists: weekly, monthly, and for all the time. Each was generated according to its rating and did not take into account current location of the user.',
          ],
        },
        {
          title: 'How it was possible to add a new route guide?',
          body: 'MappNgo was based on the Google Maps API, which made it easy to add any place from the extensive Google database. Also, it was possible to add a unique personal point.',
          postBody: 'For every route guide, user had to specify the following information:',
          list: ['Guide name;', 'Brief description;', 'Background photo;', 'Information about each point: name, category and short description.'],
          compactBody: true,
        },
        { title: 'Was it possible to save liked route guides?', body: 'Users could add any of the route guides to the «favorites» category, share with friends, and rate them.' },
        { title: 'How it was possible to activate the navigation feature?', body: 'Navigation feature was based on the Google Maps directions. To activate the feature user had to press the «Navi» button, which appeared on the right side of the screen after the start of route guide. Also, it was possible to set the direction to the exact point via pop-up window with its description.' },
      ],
    },
  },
}
