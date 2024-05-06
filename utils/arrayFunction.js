export function shuffle(array){
    // retorna un nuevo array con los elementos desordenados
    for(let i = array.length -1; i >0; i --){
        //genera un número aleatorio entre 0 y i
        const randomIndex = Math.floor(Math.random() * (i+1));

            //intercambia los elementos en las posiciones i y randomIndex
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}
