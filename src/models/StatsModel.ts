export class StatsLocationModel implements IStatsLocationModel {
    location: IStatsModel= new StatsModel();
}

class StatsModel implements IStatsModel {
    latest: IStatsLatestModel = new StatsLatestModel;
    timelines: IStatsTimelinesModel = new StatsTimelinesModel();
}

class StatsLatestModel implements IStatsLatestModel {
    confirmed: number = 0;
    recovered: number = 0;
    deaths: number = 0;
}

class StatsTimelinesModel implements IStatsTimelinesModel {
    confirmed: StatsTimelineModel = new StatsTimelineModel();
    deaths: StatsTimelineModel = new StatsTimelineModel();
    recovered: StatsTimelineModel = new StatsTimelineModel();
}

class StatsTimelineModel implements IStatsTimelineModel {
    latest: number = 0;
    timeline: {} = {}
}

export interface IStatsLocationModel {
    location: IStatsModel;
}

interface IStatsModel {
    latest: IStatsLatestModel;
    timelines: IStatsTimelinesModel;
}

interface IStatsLatestModel {
    confirmed: number;
    deaths: number;
    recovered: number;
}

interface IStatsTimelinesModel {
    confirmed: IStatsTimelineModel;
    deaths: IStatsTimelineModel;
    recovered: IStatsTimelineModel;
}

interface IStatsTimelineModel {
    latest: number;
    timeline: {}
}