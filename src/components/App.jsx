import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      currentVideo: props.videos[0],
      videoList: props.videos

    }
  }

  componentDidMount(){
    this.getYouTubeVideos('kittens')
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    }
    this.props.searchYoutube(options, (videos) => {
      this.setState({
        currentVideo: videos[0]
        videoList: videos
      });
    });
  }

  handleVideoListClicks(video) {
    this.setState({
      currentVideo: video,
      videos: exampleVideoData
    });
  }

  render(){
    return (
      <div>

      <nav className="navbar" handleSearchInputChange={this.getYouTubeVideos.bind(this)}>
        <div className="col-md-6 offset-md-3">
          {/* <div><h5><em>search</em> view goes here</h5></  div> */}
          <Search handleSearchInputChange={handleSearchInputChange}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          {/* <div><h5><em>videoPlayer</em> view goes here</  h5></div> */}
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          {/* <div ><h5><em>videoList</em> view goes here</  h5></div> */}
          <VideoList videos={this.props.videos} videoClicks={this.handleVideoListClicks.bind(this)} />
        </div>
      </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
