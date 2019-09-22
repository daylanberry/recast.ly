var searchYouTube = ({key, query, max = 5}, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v4/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbaddable: 'true'
  })
  .done(({items}) => {
    if (callback){
      callback(items)
    }
  })
  .fails(({responseJSON}) => {
    responseJSON.error.errors.forEach((er) => console.error(er)
  })
};

export default searchYouTube;
