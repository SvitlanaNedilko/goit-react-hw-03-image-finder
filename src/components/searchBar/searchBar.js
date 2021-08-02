import React from 'react'
import './searchBar.scss'

export default class SearchBar extends React.Component {
  state = {
    pictureName: '',
  }

  handleNameChange = (event) => {
    this.setState({ pictureName: event.currentTarget.value.toLowerCase() })
  }

  handelSubmit = (event) => {
    event.preventDefault()
    if (this.state.pictureName.trim() === '') {
      alert('введите название изображения')
      return
    }
    this.props.onSubmit(this.state.pictureName)
    this.setState({ pictureName: '' })
  }

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handelSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={this.state.pictureName}
            onChange={this.handleNameChange}
            className="SearchForm-input"
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }
}
