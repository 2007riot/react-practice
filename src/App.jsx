import Accoridion from './components/accoridion'
import ImageSlider from './components/image-slider'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view'
import menus from './components/tree-view/data'
import QRCodeGenerator from './components/qr-code-generator'
import LightDarkMode from './components/light-dark-mode'

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
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"}/>  */}
      {/* Load more data  */}
      {/* <LoadMoreData /> */}
      {/* Tree view / recursive navigation menu / menu ui component */}
      {/* <TreeView menus={menus}/> */}
      {/* qr code Generator */}
      {/* <QRCodeGenerator /> */}
      {/* light and dark theme switch */}
      <LightDarkMode />
    </div>
  )
}

export default App
