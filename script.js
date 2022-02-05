// Моя история
const myStory = {
  // Имя моего профиля
  name: "Мое имя",
  // Ссылка на аватарку (заменить 0.png на имя файла из папки images/avatars)
  avatar: "./images/avatars/0.png",
  // Истории
  stories: [
    // Что бы поменять историю укажите тип (photo video)
    // и поменяйте ссылку на фото или видео в папке images/stories

    // Первая история
    {
      type: "photo",
      src: "./images/stories/1.jpg",
    },
    // Вторая история
    {
      type: "video",
      src: "./images/stories/1.mp4",
    },
  ],
};

// Кнопка подписаться - отписаться
const followButton = document.querySelector("button.follow");

followButton.addEventListener("click", function () {
  if (followButton.classList.contains("active")) {
    followButton.classList.remove("active");
    followButton.innerHTML = "Подписаться";
  } else {
    followButton.classList.add("active");
    followButton.innerHTML = "Отписаться";
  }
});

// Генерация времени поста истории
let timeIndex = -1;
// Время для каждого поста по очереди в секундах
// 10 min = 60 * 10
// 10 hours = 60 * 60 * 10
// 10 days = 60 * 60 * 24 * 10
const shifts = [35, 60];

function timestamp() {
  const now = new Date();
  const shift = shifts[timeIndex++] || 0;
  const date = new Date(now - shift * 1000);

  return date.getTime() / 1000;
}

// Ваш пост
const story = new Zuck("story", {
  backNative: true,
  previousTap: true,
  skin: "snapgram",
  autoFullScreen: true,
  avatars: true,
  paginationArrows: true,
  list: false,
  cubeEffect: true,
  localStorage: false,
  stories: [
    Zuck.buildTimelineItem(
      "myStory",
      myStory.avatar,
      myStory.name,
      "",
      timestamp(),
      [
        [
          "myStory-1",
          myStory.stories[0].type,
          3,
          myStory.stories[0].src,
          myStory.stories[0].src,
          "",
          false,
          false,
          timestamp(),
        ],
        [
          "myStory-2",
          myStory.stories[1].type,
          0,
          myStory.stories[1].src,
          "",
          "",
          false,
          false,
          timestamp(),
        ],
      ]
    ),
  ],
});
