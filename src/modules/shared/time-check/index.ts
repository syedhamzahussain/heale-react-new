import moment from 'moment';

export const timeCheck = (id: any = 'today') => {
  let startTime;
  let endTime;

  if (id === 'custom') {
    startTime = new Date(moment().format());
    endTime = new Date(moment().format());
  }
  // today
  if (id === 'today') {
    const startOfToday = moment().utc().startOf('day');
    const endOfToday = moment(startOfToday)
      .utc()
      .endOf('day')
      .set({ hour: 23, minute: 59, second: 59 });

    startTime = new Date(startOfToday.format());
    const now = moment().utc();
    endTime = new Date(Math.min(now.valueOf(), endOfToday.valueOf()));
    endTime.setHours(0, 0, 0, 0);
  }

  //  yesterday
  if (id === 'yesterday') {
    const startOfToday = moment().subtract(1, 'days').utc().startOf('day');
    const endOfToday = moment(startOfToday)
      .subtract(1, 'days')
      .utc()
      .endOf('day')
      .set({ hour: 23, minute: 59, second: 59 });

    startTime = new Date(startOfToday.format());
    const now = moment().utc();
    endTime = new Date(Math.min(now.valueOf(), endOfToday.valueOf()));
    endTime.setHours(0, 0, 0, 0);
  }
  // this week
  if (id === 'this_week') {
    startTime = new Date(moment().utc().clone().startOf('isoWeek').format());
    endTime = new Date();
  }

  // last week
  if (id === 'last_week') {
    startTime = new Date(
      moment().subtract(1, 'weeks').utc().clone().startOf('isoWeek').format()
    );
    endTime = moment().subtract(1, 'weeks').utc().clone().endOf('isoWeek');
    endTime = new Date(endTime.subtract(1, 'days').format());
  }

  // this month
  if (id === 'this_month') {
    startTime = new Date(moment().utc().clone().startOf('month').format());
    endTime = moment().utc().clone().endOf('month');
    endTime = new Date(endTime.subtract(1, 'days').format());
  }

  if (id === 'last_month') {
    startTime = new Date(
      moment().subtract(1, 'months').utc().clone().startOf('month').format()
    );
    endTime = moment().subtract(1, 'months').utc().clone().endOf('month');
    endTime = new Date(endTime.subtract(1, 'days').format());
  }

  // this year
  if (id === 'this_year') {
    startTime = new Date(moment().clone().startOf('year').format());
    endTime = new Date(moment().clone().endOf('year').format());
  }

  //last year
  if (id === 'last_year') {
    startTime = new Date(
      moment().subtract(1, 'years').clone().startOf('year').format()
    );
    endTime = new Date(
      moment().subtract(1, 'years').clone().endOf('year').format()
    );
  }

  if (id === 'all') {
    startTime = new Date(
      moment().subtract(10, 'years').clone().startOf('year').format()
    );
    endTime = new Date(moment().clone().endOf('year').format());
  }
  return { startTime, endTime };
};
