import { createImageUrlBuilder } from '@sanity/image-url';
import { projectId, dataset } from './client';

const imageBuilder = createImageUrlBuilder({
    projectId: projectId || '',
    dataset: dataset || '',
});

export const urlForImage = (source) => {
    if (!source || !source.asset) return null;
    return imageBuilder.image(source);
};
