export const doDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getBasePath = () => (process.env.BROWSER ? window.APP_BASE_PATH : process.env.APP_BASE_PATH) || '';

// returns path relative to basepath
export const getPath = (url: string) => url.replace(getBasePath(), '');

export const inIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};
