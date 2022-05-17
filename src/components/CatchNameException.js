export default function CatchNameException(name){
        return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
}