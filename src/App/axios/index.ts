import axios from 'axios';
import { github } from '../constants';
import { prepareParams } from '../helpers/apiParams.helpers';

const makeRequest = () => {
	const _request = axios.create({ baseURL: github });

	const { get } = _request;
	_request.get = (url: string, params: any) => {
		const config = { params: prepareParams(params) };
		return get(url, config);
	};
	return _request;
};
const api = makeRequest();

export default api;
