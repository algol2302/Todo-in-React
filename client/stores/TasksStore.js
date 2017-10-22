import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _tasks = [];
let _loadingError = null;
let _isLoading = true;

function formatTask(task) {
    return {
        id: task._id,
        index: task.index,
        title: task.title,
        comments: task.comments,
        priority: task.priority,
        status: task.status,
        color: task.color || '#ffffff',
        deadline: task.deadline
    };
}

const TasksStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getTasks() {
        return _tasks;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_TASKS_REQUEST: {
            _isLoading = true;
            TasksStore.emitChange();
            console.log('LOAD_TASKS_REQUEST');
            break;
        }

        case AppConstants.LOAD_TASKS_SUCCESS: {
            _isLoading = false;
            _tasks = action.tasks.map( formatTask );
            _loadingError = null;
            TasksStore.emitChange();
            console.log('LOAD_TASKS_SUCCESS');
            break;
        }

        case AppConstants.LOAD_TASKS_FAIL: {
            _loadingError = action.error;
            TasksStore.emitChange();
            console.log('LOAD_TASKS_FAIL');
            console.log(_loadingError);
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default TasksStore;
