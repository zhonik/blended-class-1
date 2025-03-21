import { formatDistanceToNowStrict } from 'date-fns';

const formatDistanceToNow = date => {
  return formatDistanceToNowStrict(new Date(date));
};

export default formatDistanceToNow;
