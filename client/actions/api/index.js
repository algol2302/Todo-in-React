import axios from 'axios';

import { apiPrefix } from '../../../etc/config.json';

export default {
    listTasks() {
        return axios.get(`${apiPrefix}/tasks`);
    },

    createTask(data) {
        return axios.post(`${apiPrefix}/tasks`, data);
    },

    deleteTask(taskId) {
        return axios.delete(`${apiPrefix}/tasks/${taskId}`);
    }
};
