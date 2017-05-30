import { connect } from 'react-redux'
import Dialog from '../components/dialog.jsx'
import { setVisibility, handlerChangeAction } from '../actions/actions.js'

const mapStateToProps = (state) => {
  return {
    valLabel: state.valLabel,
    valUrl: state.valUrl,
    visible: state.visible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlerUrlChange (e) {
      return dispatch({
        type: "CHANGE_URL",
        valUrl: e.target.value
      })
    },
    handlerLabelChange (e) {
      return dispatch({
        type: "CHANGE_LABEL",
        valLabel: e.target.value        
      })
    },
    handlerChange (e) {
      return dispatch(handlerChangeAction(e.target.value))
    },
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
