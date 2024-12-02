
export interface ICharacter {
    id: string;
    name:string;
    image:string;
    species: string;
    status: string;
    gender: string;
    origin: {
        name: string;
    },
    
    episode: IEpisode[]; 
}

interface IEpisode{
    air_date:string;
}