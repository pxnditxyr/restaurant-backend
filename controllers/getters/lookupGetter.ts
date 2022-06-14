import { Op } from 'sequelize';
import { Domain } from '../../models/lookup/domain';
import { Subdomain } from '../../models/lookup/subdomain';

export const getAllDomain = async () => {
    const domains = await Domain.findAll();
    return domains;
};

export const getAllSubdomain = async () => {
    const subdomains = await Subdomain.findAll();
    return subdomains;
};

export const getDomainById = async ( id : number ) => {
    const domain = await Domain.findByPk( id );
    return domain;
};
    
export const getSubdomainById = async ( id : number ) => {
    const subdomain = await Subdomain.findByPk( id );
    return subdomain;
};

export const getDomainByDomainName = async ( domainName : string ) => {
    const domain = await Domain.findOne({
        where: {
            domain_name: {
                [ Op.eq ]: domainName
            }
        }
    });
    return domain;
};

export const getSubdomainBySubdomainName = async ( subdomainName : string ) => {
    const subdomain = await Subdomain.findOne({
        where: {
            subdomain_name: {
                [ Op.eq ]: subdomainName
            }
        }
    });
    return subdomain;
};

export const getDomainByDetail = async ( detail : string ) => {
    const domain = await Domain.findOne({
        where: {
            detail: {
                [ Op.like ]: `%${ detail }%`
            }
        }
    });
    return domain;
};

export const getSubdomainByDetail = async ( detail : string ) => {
    const subdomain = await Subdomain.findOne({
        where: {
            detail: {
                [ Op.like ]: `%${ detail }%`
            }
        }
    });
    return subdomain;
};
