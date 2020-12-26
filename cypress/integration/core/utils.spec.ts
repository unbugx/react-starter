import { getBasePath } from 'core/utils';

describe('Utils', () => {
  describe('getBasePath', () => {
    const { APP_BASE_PATH } = global.window;
    const { process } = global;

    afterEach(() => {
      global.window.APP_BASE_PATH = APP_BASE_PATH;
      global.process = process;
    });

    it('getBasePath returns basepath from window for browser', () => {
      global.window.APP_BASE_PATH = '/some-path-from-window';
      global.process = {
        env: {
          BROWSER: true,
          APP_BASE_PATH: '/some-path-from-env',
        },
      };

      const result = getBasePath();
      expect(result).to.equal('/some-path-from-window');
    });

    it('getBasePath returns basepath from env for node', () => {
      global.window.APP_BASE_PATH = '/some-path-from-window';
      global.process = {
        env: {
          BROWSER: false,
          APP_BASE_PATH: '/some-path-from-env',
        },
      };

      const result = getBasePath();
      expect(result).to.equal('/some-path-from-env');
    });

    it('getBasePath returns empty string if no basepath', () => {
      global.window.APP_BASE_PATH = '';
      global.process = {
        env: {
          BROWSER: false,
          APP_BASE_PATH: '',
        },
      };

      const result = getBasePath();
      expect(result).to.equal('');
    });
  });
});
