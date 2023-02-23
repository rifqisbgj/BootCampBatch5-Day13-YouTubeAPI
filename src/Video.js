import React from "react";
import ListVideo from "./ListVideo";
import SearchBar from "./SearchBar";
import ShowVideo from "./ShowVideo";
// set up api key
import youtube from "./youtube";

class Video extends React.Component {
  // penyimpanan data video
  state = { videos: [], selectedVideo: null };

  onSearchSubmit = async (term) => {
    const res = await youtube.get("/search", {
      // ambil data dari youtube berdasarkan term/inputan user
      params: { q: term },
    });

    this.setState({ videos: res.data.items });
    console.log(res.data.items);
  };

  getSelectedVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* get term from search bar */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div>
          <div class="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <ShowVideo video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <ListVideo
                  getSelectedVideo={this.getSelectedVideo}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
