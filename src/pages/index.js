import withSlitting from 'lib/withSplitting';

export const Home = withSlitting(() => import('./Home'));
export const About = withSlitting(() => import('./About'));
export const Posts = withSlitting(() => import('./Posts'));
export const Post = withSlitting(() => import('./Post'));
