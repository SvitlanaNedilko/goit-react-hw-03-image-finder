import React from 'react'
import './App.scss'
import SearchBar from './components/searchBar/searchBar'
import ImageGallery from './components/imageGallery/ImageGallery'

import './App.scss'

class App extends React.Component {
  state = {
    picturesName: '',
  }

  handlFormSubmit = (picturesName) => {
    this.setState({ picturesName })
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.handlFormSubmit} />
        <ImageGallery picturesName={this.state.picturesName} />
      </div>
    )
  }
}

export default App
