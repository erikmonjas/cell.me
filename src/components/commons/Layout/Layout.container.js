import { connect } from 'react-redux'
import { getOpenModal } from '../../../state/ui/selectors'
import Layout from './Layout.styled'

const mapStateToProps = state => ({
  openModal: getOpenModal(state),
})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)