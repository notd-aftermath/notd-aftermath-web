import { PlayerData } from './../models/codes/player-data';

export class ValidationResponseEntry {
    code: string;
    validCode: boolean;
    playerData: PlayerData;
}
