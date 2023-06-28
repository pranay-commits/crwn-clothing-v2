import Directory  from './components/directory/directory.component'

import jacket from './images/jackets.jpg'
import hats from './images/hats.jpg'
import men from './images/men.jpg'
import women from './images/women.jpg'
import sneakers from './images/sneakers.jpg'

const App = () => {

  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: hats
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: jacket
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: sneakers
    },
    {
      id: 4,
      title: "womens",
      imageUrl: women
    },
    {
      id: 5,
      title: "mens",
      imageUrl: men
    }
  ]
  

  return(
   <Directory categories={categories} ></Directory> 
  )
}

export default App;