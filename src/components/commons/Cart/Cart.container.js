import { connect } from 'react-redux'
import { getCartItems } from '../../../state/cart/selectors'
import { openDefaultModal } from '../../../state/ui/actionCreators'
import Cart from './Cart.styled'

const mapStateToProps = state => ({
  cartItems: getCartItems(state)
})
const mapDispatchToProps = dispatch => ({
  openDefaultModal: ({ children }) => dispatch(openDefaultModal({ children }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)