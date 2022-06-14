import { Menu } from '../../../models/menu/menu';

interface MenuCreator {
    name: string;
    description: string;
    menu_date: Date;
    care_day_id: number;
};

export const menuCreator = async ( menu : MenuCreator ) => {
    try {
        const newMenu = Menu.build({ ...menu });
        await newMenu.save();
        return newMenu;
    } catch ( error ) {
        return `Error creating menu: ${ error }`;
    }
};

