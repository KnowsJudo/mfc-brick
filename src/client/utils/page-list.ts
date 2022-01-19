import { INav } from '../types/nav';

export const pageList: INav[] = [
  'services',
  'photos',
  'faq',
  'reviews',
  'contact',
].map((next, i) => {
  return {
    name: next,
    id: `id:${next}`,
    title:
      i == 2
        ? 'Frequently Asked Questions'
        : `${next.substring(0, 1).toUpperCase()}${next.substring(1)} `,
  };
});
