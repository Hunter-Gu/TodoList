import Nav from '../components/nav.jsx'
import { setVisibility, search } from '../actions/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibility (boolean) {
      return dispatch(setVisibility(boolean))
    },
    search (e) {
      if (e.keyCode === 13) {
        return dispatch(search(e.target.value))
      }
    }
  }
}

const NavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)

module.exports = NavBar
