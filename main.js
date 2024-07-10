const searchconteiner = document.querySelector ('.search-input-box')
const inputsearch =searchconteiner.querySelector('input')
const boxsuggestion = document.querySelector('conteiner-suggestions')

const searchlink = document.querySelector('a')

inputsearch.onkeyup = (e) =>{
   let userdata = e.target.value
   let emptyarray = [];
  
   if(userdata){
    emptyarray = suggestions.filter(data =>{
        return data
        .toLocalelowercase()
        .startwith( userdata.toLocalelowercase());

    });
        emptyarray = emptyarray.map(data =>{
            return data = <li>${data}</li>

    })

    
   }
};

const showsuggestions = list => {
    let listdata;
    if(!list,length){
    } else {
        listdata= list.join ('');
    }
    boxsuggestion.innerHTML = listdata;
};