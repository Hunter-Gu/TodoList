import Nav from '../components/nav.jsx'
import { handlerChangeAction } from '../actions/actions'
import { setVisibility } from '../actions/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    val: state.val
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlerChange (e) {
      return dispatch(
        handlerChangeAction(e.target.value)
      )
    },
    setVisibility (boolean) {
      return dispatch(setVisibility(boolean))
    }
  }
}

const NavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)

module.exports = NavBar
