export const Increase_Quantity = "Increase_Quantity";
export const Deacrease_Quantity = "Deacrease_Quantity";

export const increaseQuantity = (itemId) => ({
 type: Increase_Quantity,
    payload: itemId,
  });
  
  export const deacreaseQuantity =(itemId)=>({
    type: Deacrease_Quantity,
    payload: itemId,
  });
