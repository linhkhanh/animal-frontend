import apiUtil from '../utils/api';

const buildUrl = apiPath => {
    return 'http://localhost:4000' + apiPath;
};

export default {
    async getAll () {
        try {
            const response = await apiUtil.get(buildUrl('/animal'));
            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    async create (newOne) {
        const response = await apiUtil.post(buildUrl('/animal'), newOne);
        return response.data;
    },
    async delete (id) {
        const response = await apiUtil.delete(buildUrl(`/animal/${id}`));
        return response.data;
    },
    async updateCompletionStatus (id, isCompleted) {
        const response = await apiUtil.update(buildUrl(`/animal/${id}`),
            isCompleted
        );
        return response.data;
    }
};