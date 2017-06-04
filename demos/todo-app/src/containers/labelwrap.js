import Label from '../components/label.jsx'
import { connect } from 'react-redux'
import {getlabelRequest, getlabelReceive} from '../actions/actions.js'

const mapStateToProps = (state) => {
  return {
    labelData: state.labelData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLabel (str) {
      dispatch(getlabelRequest())
      
      return fetch('/getlabel.action', {
        method: "GET",
        headers: str || ''
      })
        .then(res => {
          res.json()
            .then(res => {
              dispatch(getlabelReceive(res))
            })
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }
}

const LabelWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(Label)

export default LabelWrap
