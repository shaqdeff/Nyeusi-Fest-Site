const actsContent = [
  {
    card: 1,
    image: 'images/photo1.jpeg',
    icon: 'images/music.png',
    title: 'Black Coffee',
    subHeading: 'DJ, Record Producer & Songwriter',
    description: `Black Coffee is a South African DJ, record producer, and
                songwriter. He's one of the most influential acts on the
                continent known exclusively for his soulful Afro-House sound.
                Coffee has established his own record label, Soulistic Music, and
                has recently released a self-titled album called Black Coffee.`,
  },
  {
    card: 2,
    image: 'images/photo2.jpg',
    icon: 'images/music.png',
    title: 'WizKid',
    subHeading: 'Singer & Songwriter',
    description: 'WizKid is a Nigerian singer and songwriter. He has multiple awards including a grammy and is considered one of the greatest African artists. By February 2021, Wiz was the most-streamed Nigerian artist of all time on Spotify, with over 3.4 billion streams across all credits.',
  },
  {
    card: 3,
    image: 'images/photo3.jpg',
    icon: 'images/music.png',
    title: 'Wendy Kay',
    subHeading: 'Singer, Songwriter & Producer',
    description: 'Wendy Kay is an Afro-Soul artist based in Nairobi, Kenya. She describes herself as an ever-growing evolving being, a creator, and a lover of arts. Her music exudes a relaxed mix of Afro-Soul and Afro Pop.',
  },
  {
    card: 4,
    image: 'images/photo4.jpg',
    icon: 'images/music.png',
    title: 'Funk Avenue',
    subHeading: 'Rap Duo & Songwriters',
    description: 'Funk Avenue is a rap music duo based in Nairobi, Kenya. They are two rappers, songwriters, and entrepreneurs deeply rooted in the Kenyan hip-hop scene. They are regarded as one of the most versatile and unique artists to grace the Kenyan music industry.',
  },
  {
    card: 5,
    image: 'images/photo5.jpeg',
    icon: 'images/music.png',
    title: 'GGTheAscendant',
    subHeading: 'Singer & Songwriter',
    description: 'GGTheAscendant is a Kenyan Afro-Fusion musician. She brings an extensive mastery of lyricism and an innate sense of rhythm to her music. She views her music as art bursting forth with relentless energetic expression.',
  },
  {
    card: 6,
    image: 'images/photo6.jpg',
    icon: 'images/music.png',
    title: 'Zonda Kay',
    subHeading: 'Singer, Songwriter & Guitarist',
    description: 'Zonda Kay is a Kenyan Afro-Fusion artist. His music is inspired by African culture and personal experiences. His goal is to ignite the souls of Africa and beyond with his sound and vocal prowess.',
  },
];

document.getElementById('actContainer').innerHTML = actsContent.map((act, index) => `
        <article class="${index >= 2 ? 'act-card collapse test' : 'act-card'}">
          <div class="card-images">
            <img class="card-image1" src="${act.image}" alt="Black Tea" />
            <img class="card-image2" src="${act.icon}" alt="Music" />
          </div>
          <div class="act-content">
            <h2 class="content-title">${act.title}</h2>
            <h3 class="content-subhead">${act.subHeading}</h3>
            <hr class="content-solid" />
            <p class="content-description">
             ${act.description}
            </p>
          </div>
        </article>
`).join('');

const collapseButton = document.getElementById('collapse');
const articles = document.querySelectorAll('.test');
if (collapseButton) {
  collapseButton.addEventListener('click', () => {
    articles.forEach((article) => {
      article.classList.toggle('collapse');
    });
    const more = document.getElementById('expand');
    const less = document.getElementById('exit');
    if (more) {
      more.classList.toggle('hide');
    }
    if (less) {
      less.classList.toggle('hide');
    }
  });
}