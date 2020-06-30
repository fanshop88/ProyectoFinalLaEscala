interface ICharacter {
    id:number;
    name: string;
    age?: number;
    gender: string;
    nationality?: [];
    height?: string;
    weight?: string;
    debut?: string;
    master: [];
    attacks: [];
    midia?: string;
    image: string;
}

export class Character implements ICharacter {
    id:number;
    name: string;
    age?: number;
    gender: string;
    nationality?: [];
    height?: string;
    weight?: string;
    debut?: string;
    master: [];
    attacks: [];
    midia?: string;
    image: string;
}