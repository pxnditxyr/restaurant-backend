import { CreditCard } from '../../models/user/creditCard';

export const getAllCreditCards = async () => {
    const creditCards = await CreditCard.findAll();
    return creditCards;
};

export const getActiveCreditCards = async () => {
    const creditCards = await CreditCard.findAll({
        where: {
            state: true,
        },
    });
    return creditCards;
};

export const getCreditCardById = async ( id : number ) => {
    const creditCard = await CreditCard.findByPk( id );
    return creditCard;
};

export const getCreditCardsByCustomer = async ( customer : number ) => {
    const creditCards = await CreditCard.findAll({
        where: {
            customer
        }
    });
    return creditCards;
};


export const getCreditCardByCreditCardNumber = async ( creditCardNumber : string ) => {
    const creditCard = await CreditCard.findOne({
        where: {
            credit_card_number: creditCardNumber
        }
    });
    return creditCard;
};
