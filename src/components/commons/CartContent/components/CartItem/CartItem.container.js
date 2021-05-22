import { connect } from 'react-redux'
import { getCartItems } from '../../../../../state/cart/selectors'
import { getDetails } from '../../../../../state/devices/selectors'
import CartItem from './CartItem.styled'

const mapStateToProps = state => ({
  items: getCartItems(state),
  details: getDetails(state)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)