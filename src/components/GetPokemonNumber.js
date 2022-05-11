export default function GetPokemonNumber(index){

    function convertForDisplay(number){
        if(number < 10){
            return String(number).padStart(3, 0)
        }
        else if(number >= 10 && number < 100){
            return String(number).padStart(3, 0)
        }
        else return String(number);
    }
    return convertForDisplay(index + 1)
}