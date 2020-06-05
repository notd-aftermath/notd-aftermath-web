import { Rank } from './rank';
import { Medal } from './medal';
import { MosType } from './mos-type';

export class PlayerData {
    name: string;
    experience: number;
    rank: Rank;
    medals: Medal[];
    mos: MosType;
    readiness: number;

    constructor(data: any) {
        this.name = data.name;
        this.experience = data.experience;
        this.rank = data.rank;
        this.mos = data.mos;
        this.readiness = data.readiness;
        this.medals = [];
        for (const m of Object.keys(data.medals)){
            this.medals.push(new Medal(data.medals[m]));
        }
    }

    getRankShort(): string {
        switch (+this.rank) {
            case Rank.None: return 'None';
            case Rank.Pvt: return 'Pvt.';
            case Rank.Pfc: return 'Pfc.';
            case Rank.Lcpl: return 'LCpl.';
            case Rank.Cpl: return 'Cpl.';
            case Rank.Sgt: return 'Sgt.';
            case Rank.SSgt: return 'SSgt.';
            case Rank.GySgt: return 'GySgt.';
            case Rank.Lt2: return '2Lt.';
            case Rank.Lt1: return '1Lt.';
            case Rank.Capt: return 'Capt.';
            case Rank.Maj: return 'Maj.';
            case Rank.LtCol: return 'LtCol.';
            case Rank.Col: return 'Col.';
            case Rank.BGen: return 'BGen.';
            case Rank.MajGen: return 'MajGen.';
            case Rank.LtGen: return 'LtGen.';
            case Rank.Gen: return 'Gen.';
            case Rank.FMar: return 'FMar.';
            case Rank.XpLimit: return 'XPLimit.';
            default: return 'Error';
        }
    }

    getRankLong(): string {
        switch (+this.rank) {
            case Rank.None: return 'None';
            case Rank.Pvt: return 'Private';
            case Rank.Pfc: return 'Private First Class';
            case Rank.Lcpl: return 'Lance Corporal';
            case Rank.Cpl: return 'Corporal';
            case Rank.Sgt: return 'Sergeant';
            case Rank.SSgt: return 'Staff Sergeant';
            case Rank.GySgt: return 'Gunnery Sergeant';
            case Rank.Lt2: return '2nd Lieutenant';
            case Rank.Lt1: return '1st Lieutenant';
            case Rank.Capt: return 'Captain';
            case Rank.Maj: return 'Major';
            case Rank.LtCol: return 'Lieutenant Colonel';
            case Rank.Col: return 'Colonel';
            case Rank.BGen: return 'Brigadier General';
            case Rank.MajGen: return 'Major General';
            case Rank.LtGen: return 'Lieutenant General';
            case Rank.Gen: return 'General';
            case Rank.FMar: return 'Field Marshal';
            case Rank.XpLimit: return 'XPLimit';
            default: return 'Error';
        }
    }

    getMosLong(): string {
        switch (+this.mos) {
            case MosType.None: return 'None';
            case MosType.RiflemanMachineGunnerIul: return 'Rifleman/Machine Gunner/Infantry Unit Leader';
            case MosType.NavyCorpsman: return 'Navy Corpsman';
            case MosType.Flamethrower: return 'Flamethrower';
            case MosType.AssaultmanEngineer: return 'Assaultman/Engineer';
            case MosType.Predator: return 'MQ-3 Predator';
            case MosType.Marksman: return 'Designated Marksman';
            case MosType.ReconDeltaOperatorForwardObserver: return 'Force Recon/Delta Operator/Forward Observer';
            default: return 'Error';
        }
    }

    getReadiness(): string {
        return this.readiness + '%';
    }

    getMedalCountString(): string {
        const grantedMedals = this.medals.filter(m => m.granted === true).length;
        const allMedals = this.medals.length;
        return `${grantedMedals}/${allMedals}`;
    }
}
