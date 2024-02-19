import Accoridion from './components/accoridion'
import ImageSlider from './components/image-slider'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {

  return (
    <div className="App">
      {/* Accoridion component */}
      {/* <Accoridion /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}
      
      {/* Star Rating Component */}
      {/* <StarRating numberOfStars={10}/> */}
      {/* Image slider component */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"}/> 

    </div>
  )
}

export default App
