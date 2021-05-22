import { connect } from 'react-redux'
import DefaultModal from './DefaultModal.styled'
import { getModalChildren } from '../../../state/ui/selectors'
import { closeModal } from '../../../state/ui/actionCreators'

const mapStateToProps = state => ({
  children: getModalChildren(state),
})
const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(DefaultModal)