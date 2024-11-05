import toast from "react-hot-toast";

const getAllfavorites=()=>{
    const all=localStorage.getItem('favorites');
    if(all){
        const favorites=JSON.parse(all);
        return favorites;
    }else{
        return []
    }
}

const addFavourite = coffees =>{
    const favorites=getAllfavorites();
    const isExist=favorites.find(item=>item.id===coffees.id);
    if(isExist) return toast.error('You can not make this order twice')
    favorites.push(coffees);
    localStorage.setItem('favorites',JSON.stringify(favorites))
    toast.success('Congratulations')
}

export {addFavourite,getAllfavorites}