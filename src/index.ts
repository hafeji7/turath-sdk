export * from './api';
export * from './types/api/author';
export * from './types/api/bookFile';
export * from './types/index';

export default {
  async fetch(request: Request) {
    return new Response("Turath SDK is live!", {
      headers: { "content-type": "text/plain" },
    });
  }
};
