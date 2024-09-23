import moment, { Moment, unitOfTime } from "moment";

export class DateTimeOffset {
    private readonly _moment: Moment;

    constructor(date: string) {
        this._moment = moment.parseZone(date);
    }

    valueOf() {
        return this._moment.valueOf();
    }

    format(format?: string) {
        return this._moment.format(format);
    }

    hour() {
        return this._moment.hour();
    }

    minute() {
        return this._moment.minute();
    }

    second() {
        return this._moment.second();
    }

    millisecond() {
        return this._moment.millisecond();
    }

    toString() {
        return this._moment.toString();
    }

    diff(b: DateTimeOffset, unitOfTime?: unitOfTime.Diff, precise?: boolean) {
        return this._moment.diff(b._moment, unitOfTime, precise);
    }

    toDate() {
        return this._moment.toDate();
    }
}
