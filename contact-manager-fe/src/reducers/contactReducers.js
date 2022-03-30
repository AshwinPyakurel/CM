import { ADD_CONTACT, CHANGE_FAVOURITE, DELETE_CONTACT, RETRIEVE_CONTACTS, UPDATE_CONTACT } from "../actions/types";
// const initialState = [
//     {
//         id:0,
//         name:"Ashwin",
//         email:"mail@mail.com",
//         phoneNumber:98765,
//         image: "https://media.istockphoto.com/photos/black-stone-wall-texture-picture-id471060950?s=612x612"
//     },
//     {
//         id:1,
//         name:"Richen",
//         email:"richenmail@mail.com",
//         phoneNumber:35678,
//         image: "https://media.istockphoto.com/photos/black-stone-wall-texture-picture-id471060950?s=612x612"
//     },
// ];

const initialState ={
    contactList :[]
}

const contactReducer = (state = initialState,action)=>{
    switch(action.type){
        case RETRIEVE_CONTACTS:
            state = {...state,contactList:action.payload}
            return state
        case ADD_CONTACT:
            state = {...state,contactList:[...state.contactList,action.payload]};
            return state;
        case DELETE_CONTACT:
            const contactFilter = state.contactList.filter((contact) =>
                contact.id === action.payload ? null : contact
            );
            state = contactFilter;
            return state;        
        case CHANGE_FAVOURITE:
            var id = action.payload.id;
            var index = state.contactList.findIndex((contact)=>{
                return contact._id == id;
            });
            console.log(index);
            state.contactList[index].favourite = action.payload.favourite;
            return state;
        case "RESET_CONTACT":
            state = [{ name: null, email: null, phone: null }];
            return state;
        default: 
        return state;
    }
};
export default contactReducer;
