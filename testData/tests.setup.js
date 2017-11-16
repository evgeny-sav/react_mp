import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import URLSearchParams from '../__mocks__/URLSearchParams.mock';

Enzyme.configure({ adapter: new Adapter() });

global.URLSearchParams = URLSearchParams;
