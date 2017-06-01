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
      Object.keys(obj).forEach(el => {
        checkEmpty(obj[el])
      })
      checkUrl(obj.valUrl)
      return dispatch(addData(obj))
    }
  }
}

const checkUrl = (url) => {
  let patt = /^http:\/\//
  if (!patt.test(url)) {
    throw new Error('链接 expected starting with "http://"')
  }
}
const checkEmpty = (str) => {
  if (!str) {
    throw new Error('please enter your content')
  }
}

const DialogWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog)

export default DialogWrap
