import './components.css';

export default { title: 'Components/Button' };

const button = (variant, label) => `<button class="btn btn--${variant}">${label}</button>`;

export const Primary = () => button('primary', 'Run visual tests');
export const Secondary = () => button('secondary', 'View results (version A)');
export const MergeTestWebhook = () => button('primary', 'Merge test: webhook');
export const MergeTestJobDeleted = () => button('primary', 'Merge test: job deleted');
export const MergeTestJobDeleted2 = () => button('primary', 'Merge test: job deleted 2');
export const MergeTestJobDeleted3 = () => button('primary', 'Merge test: job deleted 3');
export const MergeTestDesignOff = () => button('primary', 'Design off');
export const MergeTestVisibility = () => button('primary', 'Merge visibility');
