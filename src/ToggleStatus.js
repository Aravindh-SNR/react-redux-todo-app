import React from 'react';
import {connect} from 'react-redux';
import {toggleView} from './actions/todoActions'

const ToggleStatus = ({view, toggleView}) => {
    //buttons with event handlers for each view - the view is either 'all' or 'completed' or 'pending'
    return (
        <div className="toggle_status">
            <button id="all" className={view} onClick={() => {toggleView('all')}}>All</button>
            <button id="completed" className={view} onClick={() => {toggleView('completed')}}>Completed</button>
            <button id="pending" className={view} onClick={() => {toggleView('pending')}}>Pending</button>
        </div>
    );
}

//getting the current view from the redux store's state
const mapStateToProps = state => {
    return {
        view: state.view
    };
}

//toggling the view, i.e. modifying the view in the redux store's state by dispatching an action
const mapDispatchToProps = dispatch => {
    return {
        toggleView: (view) => dispatch(toggleView(view))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleStatus);