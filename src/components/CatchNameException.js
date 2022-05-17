export default function CatchNameException(name){
        console.log(name.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
        return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
}