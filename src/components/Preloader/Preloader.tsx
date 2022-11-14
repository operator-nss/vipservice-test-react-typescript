import image from '@/assets/spinner.svg'
import './preloader.scss'

const Preloader = () => {
  return (
    <div className="spinner">
      <img src={image} alt="loader"/>
    </div>
  )
}

export default Preloader