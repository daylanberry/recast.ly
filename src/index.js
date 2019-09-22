// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from './data/exampleVideoData.js'


ReactDOM.render(<App videos={exampleVideoData} searchYouTube={searchYouTube} API_KEY={YOUTUBE_API_KEY}/>, document.getElementById('app'))

