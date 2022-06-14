import { ProductMenu } from '../../../models/menu/productMenu';

interface ProductMenuCreator {
    product_id: number;
    menu_id: number;
    product_menu_description: string;
};

export const productMenuCreator = async ( productMenu : ProductMenuCreator ) => {
    try {
        const newProductMenu = ProductMenu.build({ ...productMenu  });
        await newProductMenu.save();
        return newProductMenu;
    } catch ( error ) {
        return `Error creating menu: ${ error }`;
    }
};
