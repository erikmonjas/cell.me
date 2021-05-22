import { connect } from 'react-redux'
import { closeModal } from '../../../state/ui/actionCreators'
import { getOpenModal } from '../../../state/ui/selectors'
import Layout from './Layout.styled'

const mapStateToProps = state => ({
  openModal: getOpenModal(state),
})
const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)