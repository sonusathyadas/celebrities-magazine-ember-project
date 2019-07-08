import { helper } from '@ember/component/helper';

//We can use 'params' instead of array type of argument of helper function
export function personImage([imageUrl, defaultImageUrl]) {    
    if (imageUrl && imageUrl.length >= 0)
        return imageUrl;
    else
        return defaultImageUrl;
}

export default helper(personImage);
