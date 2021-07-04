import './App.module.css'
import { Header } from './Components/Header/Header'
import { Category } from './Components/Category/Category'
import { Footer } from './Components/Footer/Footer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStartDataSagasAC } from './store/mainPageReducer'
import { getCategoriesSelector, getProductsSelector } from './store/mainPageReducerSelectors'
import { Navigation } from './Components/Navigation/Navigation'

const App = () => {

  const dispatch = useDispatch()

  const categories = useSelector(getCategoriesSelector)
  const products = useSelector(getProductsSelector)

  useEffect(() => {
    dispatch(getStartDataSagasAC())
  }, [])

  return (
    <div>
      <Header />
      <Navigation />
      {categories.map(item => products.filter(el => el.categories_id === item.id).length ? <Category key={item.id.toString()} item={item} products={products.filter(el => el.categories_id === item.id)} /> : '')}
      <Footer />
    </div>
  )
}

export default App
