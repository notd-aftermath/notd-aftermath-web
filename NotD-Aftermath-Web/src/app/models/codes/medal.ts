import { MedalType } from './medal-type';

export class Medal {
    type: MedalType;
    displayName: string;
    granted: boolean;
    points: number;

    constructor(data: any) {
        this.type = data.type;
        this.granted = data.granted;
        this.points = data.points;
        this.displayName = this.getName();
    }

    getName(): string {
        switch (+this.type) {
            case MedalType.CorpsCommendation: return 'Marine Corps Commendation Medal';
            case MedalType.BronzeStar: return 'Bronze Star';
            case MedalType.Heroism: return 'Marine Corps Medal of Heroism';
            case MedalType.SilverStar: return 'Silver Star';
            case MedalType.NavyCross: return 'Navy Cross';
            case MedalType.ArmedCommendation: return 'Armed Services Commendation Medal';
            case MedalType.Meritorious: return 'Department of Defense Meritorious Service Medal';
            case MedalType.SuperiorService: return 'Department of Defense Superior Service Medal';
            case MedalType.Distinguished: return 'Department of Defense Distinguished Service Medal';
            case MedalType.Honor: return 'Medal of Honor';
            case MedalType.DrillInstructor: return 'Drill Instructor Ribbon';
            default: return 'Error';
        }
    }
}
