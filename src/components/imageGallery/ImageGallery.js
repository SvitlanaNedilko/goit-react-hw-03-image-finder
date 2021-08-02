import React from 'react'
import './imageGallary.scss'
import ImageGalleryItem from '../imageGalleryItem/imageGalleryItem'
import Loader from '../loader/loader'
import Button from '../button/button'
import Modal from '../modal/modal'

const PER_PAGE = 12
const KEYS = '22042879-adb59bab87f7729a85f6313d3'

export default class ImageGallery extends React.Component {
  state = {
    status: 'idle',
    showModal: false,
    pictures: [],
    currentImage: {},
    pages: 1,
    currentPage: 1,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.picturesName !== this.props.picturesName) {
      this.handleFetchPictures(1)
    }
  }

  handleFetchPictures = (page) => {
    const searchQuery = this.props.picturesName
    this.setState({ status: 'pending' })
    fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=${PER_PAGE}&key=${KEYS}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(new Error(`произошла ошибка`))
      })
      .then(({ totalHits, hits }) => {
        if (totalHits === 0) {
          return Promise.reject(
            new Error(`нет изображения с именем ${searchQuery}`)
          )
        }

        this.setState(
          (prevState) => ({
            ...prevState,
            pictures: page === 1 ? hits : [...prevState.pictures, ...hits],
            status: 'resolved',
            pages: Math.ceil(totalHits / PER_PAGE),
            currentPage: page,
          }),
          () => {
            console.log('here')
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            })
          }
        )
      })
      .catch((error) => {
        this.setState({ error, status: 'rejected' })
      })
  }

  handlLoadMore = () => {
    this.handleFetchPictures(this.state.currentPage + 1)
  }

  openModal = (src, alt) => {
    this.setState({ showModal: true, currentImage: { src, alt } })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    const { pictures, error, status, pages, currentPage, showModal } =
      this.state

    if (status === 'idle') {
      return <div>Введите название изображения</div>
    }

    if (status === 'pending') {
      return <Loader />
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>
    }

    if (status === 'resolved') {
      return (
        <div>
          <ul className="ImageGallery">
            <ImageGalleryItem pictures={pictures} click={this.openModal} />
          </ul>
          {currentPage < pages && <Button click={this.handlLoadMore} />}
          {showModal && (
            <Modal
              onCloseModal={this.closeModal}
              {...this.state.currentImage}
            />
          )}
        </div>
      )
    }
  }
}
