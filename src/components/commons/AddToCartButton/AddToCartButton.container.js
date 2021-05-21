import { connect } from 'react-redux'
import { addToCart } from '../../../state/devices/actionCreators'
import AddToCartButton from './AddToCartButton.styled'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  addToCart: ({ id, color, storage }) => dispatch(addToCart({ id, color, storage }))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton)