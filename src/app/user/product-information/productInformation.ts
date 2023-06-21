export interface p_informationModel{


    id:number;

    //    SenderVaiable
    p_senderName:string;
    p_senderGender:string;
    p_senderPhone:string;
    p_senderAddress:string;

    //    ReciverVariable
    p_ReceiverName:string;
    p_ReceiverGender:string;
    p_ReceiverPhone:string;
    p_ReceiverAddress:string;

    //    courier item variable
    prodcuttype:string;
    productname:string;
    productwidth:number;
    productheight:number;
    productweight:number;
    chargeAmount:number;
    paymentMethod:string;
    userName:string;
    courierStatus:string;
    createdAt:Date;

}