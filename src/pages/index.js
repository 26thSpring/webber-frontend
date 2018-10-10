import withSplitting from 'lib/withSplitting';

export const Intro = withSplitting(() => import('./Intro'));
export const Login = withSplitting(() => import('./Login'));
export const Template = withSplitting(() => import('./Template'));
export const Community = withSplitting(() => import('./Community'));
export const PostView = withSplitting(() => import('./PostView'));
export const Setting = withSplitting(() => import('./Setting'));
// export const SettingUser = withSplitting(() => import('./SettingUser'));
// export const SettingBoard = withSplitting(() => import('./SettingBoard'));
// export const SettingAnal = withSplitting(() => import('./SettingAnal'));
