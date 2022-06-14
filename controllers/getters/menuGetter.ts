import { Op } from 'sequelize';
import { Menu } from '../../models/menu/menu';
import { ProductMenu } from '../../models/menu/productMenu';

export const getAllMenus = async () => {
    const menus = await Menu.findAll();
    return menus;
};

export const getMenuById = async ( id : number ) => {
    const menu = await Menu.findByPk(id);
    return menu;
};

export const getMenuByMenuDate = async ( menuDate : Date ) => {
    const menu = await Menu.findOne({
        where: {
            menu_date: {
                [ Op.eq ]: menuDate
            }
        }
    });
    return menu;
};

export const getMenuByCareDay = async ( careDay : number ) => {
    const menu = await Menu.findOne({
        where: {
            care_day: {
                [ Op.eq ]: careDay
            }
        }
    });
    return menu;
};

export const getAllProductMenus = async () => {
    const productMenus = await ProductMenu.findAll();
    return productMenus;
};

export const getProductMenuById = async ( id : number ) => {
    const productMenu = await ProductMenu.findByPk(id);
    return productMenu;
};

export const getProductMenuByMenuId = async ( menuId : number ) => {
    const productMenu = await ProductMenu.findOne({
        where: {
            menu_id: {
                [ Op.eq ]: menuId
            }
        }
    });
    return productMenu;
};
