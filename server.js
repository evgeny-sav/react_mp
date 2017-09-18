// Server will be moved to separate repo
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static(__dirname + '/dist'));
app.use(cors());

app.get('/api/v1/movies', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'X-Men',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      image_url:
        'https://img03.deviantart.net/aa7b/i/2015/111/6/4/superman_poster___man_of_steel_by_atilasantos-d66iioa.png',
    },
    {
      id: 2,
      title: 'Batman',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      image_url:
        'http://media.comicbook.com/2017/06/the-batman-movie-fan-poster-ben-affleck-1000887.png',
    },
    {
      id: 3,
      title: 'StarWars',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      image_url:
        'https://images.moviepilot.com/images/c_limit,q_auto:good,w_600/fphwgmpl5aanu4togqqa/original-star-wars-poster-the-force-awakens-style.jpg',
    },
    {
      id: 4,
      title: 'Thor',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      image_url:
        'http://static4.businessinsider.com/image/51fefc05ecad04034500001e-960/thor%20the%20dark%20world%20poster.jpg',
    },
    {
      id: 5,
      title: 'Avengers',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      image_url:
        'http://www.hollywoodreporter.com/sites/default/files/custom/Blog_Images/avengers-movie-poster-1.jpg',
    },
    {
      id: 6,
      title: 'Spider-man',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      image_url:
        'http://assets1.ignimgs.com/2017/03/24/2007-spider-man3-8-1490395333224_1280w.jpg',
    },
    {
      id: 7,
      title: 'Iron man',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      image_url:
        'http://pad.mymovies.it/filmclub/2012/06/004/locandinapg9.jpg',
    },
  ]);
});

app.listen(3000, err => {
  if (err) throw err;
  console.log('Server is running on port 3000');
});
