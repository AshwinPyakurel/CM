import {
    RETRIEVE_CONTACTS,        
    CHANGE_FAVOURITE,} from './types';
import ContactService from '../service/contact.service';


export const listContacts = (payload)=>{
    return{
        type:RETRIEVE_CONTACTS,
        payload
    }
}


export const retriveContacts = ()=>{
    return dispatch=>{
        ContactService.getAll()
        .then(res=>{
            var contacts = res.data;
            var fc = [];
            var nfc = []
            for (let index = 0; index < contacts.length; index++) {
                const element = contacts[index];
                if(element.favourite){
                    fc.push(element);  
                }else{
                    nfc.push(element);
                }   
            }
            fc.sort((a, b) => a.name.localeCompare(b.name))
            nfc.sort((a, b) => a.name.localeCompare(b.name))
 
            dispatch(listContacts(fc.concat(nfc)))
        })
        .catch(err=>{
            console.log(err.response);
        })
    }
}

export const addContact = (data)=>{
    return dispatch =>{
        console.log(data);
        ContactService.create(data)
        .then(res=>{
            dispatch(retriveContacts());
        })
        .catch(err=>{
            console.log(err);
            console.log(err.response);
        })
    }
}
export const editContact = (id,fd,navigateToHome) =>{
    return(dispatch)=>{
        console.log("inside edit")
        ContactService.update(id,fd)
        .then(res=>{
            console.log("edit",res);
            dispatch(retriveContacts());
            navigateToHome();
        }).catch(err=>{
            console.log(err);
            console.log("edit wrror",err.response);
        })
    }
}

export const changeFavourite = (id,favourite)=>{
    return {
        type:CHANGE_FAVOURITE,
        payload:{
            id,
            favourite
        }
    }
}

export const editFavourite  = (id,favourite)=>{
    var service;
    favourite?service=ContactService.isFavourite:service=ContactService.isUnFavourite;
    return dispatch=>{
        service(id)
        .then(res=>{
            console.log(res.data)
            dispatch(retriveContacts());
        })
        .catch(err=>{
            console.log(err);
        })
    }

}

export const deleteContact = (id)=>{
    return (dispatch)=>{
        ContactService.remove(id)
        .then(res=>{
            dispatch(retriveContacts());
        })
        .catch(err=>{
            console.log(err);
        })
    }
}



// export const createContact = (name,photo,worknumber,phoneNumber,homeNumber,address,email) => async (dispatch)=>{
//     try{
//         const res= await ContactService.create({name,photo,worknumber,phoneNumber,homeNumber,address,email});
//         dispatch({
//             type: CREATE_CONTACT,
//             paylod: res.data,
//         });
//         return Promise.resolve(res.data);
//     }catch(err){
//         return Promise.reject(err);
//     }
// }

// export const retriveContacts = () => async(dispatch) =>{
//     try{
//         const res = await ContactService.getAll();
//             dispatch({
//                 type:RETRIEVE_CONTACTS,
//                 payload: res.data,
//             })
//             console.log(res);
//     }catch(err){

//     }
// }


