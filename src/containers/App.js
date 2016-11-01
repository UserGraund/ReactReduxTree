import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// import {bindActionCreators} from 'redux'

class App extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    // const {app, actionsApp} = this.props
    // const appContent = React.cloneElement(this.props.children, {app, actionsApp})
    return (
      <div>
        Никита привет нахуй блять!!!
        {/* {appContent} */}
      </div>
    )
  }
}

App.propTypes = {
  // app: PropTypes.object.isRequired,
  // appActions: PropTypes.shape({
  //   closeModal: PropTypes.func.isRequired,
  //   openModal: PropTypes.func.isRequired
  // })
}
//
// const mapStateToProps = state => ({app: state.App})
// const mapDispatchToProps = dispatch => ({actionsApp: bindActionCreators(AppActions, dispatch)})

export default connect()(App)
