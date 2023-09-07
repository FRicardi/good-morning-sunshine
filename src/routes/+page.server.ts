import generateGoodMorningImage from '$lib/generateGoodMorningImage.js';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({}) => {
        await generateGoodMorningImage();
    }
};