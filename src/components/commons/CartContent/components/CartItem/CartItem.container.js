import { connect } from 'react-redux'
import { getDetails } from '../../../../../state/devices/selectors'
import { addToCart, removeFromCart, subtractFromCart } from '../../../../../state/cart/actionCreators'
import CartItem from './CartItem.styled'

const mapStateToProps = state => ({
  details: getDetails(state)
})

const mapDispatchToProps = dispatch => ({
  addToCart: ({ id, color, storage }) => dispatch(addToCart({ id, color, storage })),
  subtractFromCart: ({ id }) => dispatch(subtractFromCart({ id })),
  removeFromCart: ({ id }) => dispatch(removeFromCart({ id })),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)