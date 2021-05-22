import { connect } from 'react-redux'
import { getCartItems } from '../../../state/cart/selectors'
import CartContent from './CartContent.styled'

const mapStateToProps = state => ({
  items: getCartItems(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CartContent)