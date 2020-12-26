import { useQuery } from 'react-query';
import { getExample } from 'core/api';

export default function useExample() {
  return useQuery('example', getExample);
}
