import { connect } from 'react-redux'
import { getCartItems } from '../../../state/cart/selectors'
import Cart from './Cart.styled'

const mapStateToProps = state => ({
  cartItems: getCartItems(state)
})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)