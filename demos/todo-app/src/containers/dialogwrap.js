import { connect } from 'react-redux'
import Dialog from '../components/dialog.jsx'
import { setVisibility, handlerChangeAction } from '../actions/actions.js'

const mapStateToProps = (state) => {
  return {
    visible: state.visible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibility (boolean) {
      return dispatch(setVisibility(boolean))
    }
  }
}

const DialogWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog)

export default DialogWrap
