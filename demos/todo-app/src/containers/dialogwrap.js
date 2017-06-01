import { connect } from 'react-redux'
import Dialog from '../components/dialog.jsx'
import { setVisibility, addData } from '../actions/actions.js'

const mapStateToProps = (state) => {
  return {
    visible: state.visible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibility (boolean) {
      return dispatch(setVisibility(boolean))
    },
    addData (obj) {
      return dispatch(addData(obj))
    }
  }
}

const DialogWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog)

export default DialogWrap
