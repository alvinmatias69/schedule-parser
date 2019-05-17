import Ugm from "..";
import Schedule from "../../../entities/Schedule";

export default class UgmSimulator extends Ugm {
    public getNim(): string {
        return this.nim;
    }

    public getName(): string {
        return this.name;
    }

    public getSchedules(): Schedule[] {
        return this.schedules;
    }
}
