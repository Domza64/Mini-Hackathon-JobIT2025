export default interface CalendarEvent {
  title: string;
  type: string;
  start: Date;
  end: Date;
  canceled: boolean;
  allDay: boolean;
}
