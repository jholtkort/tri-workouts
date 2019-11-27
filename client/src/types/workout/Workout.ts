export interface Workout {
  _id: string;
  _user: string;
  description: string;
  date: Date;
  type: "Swim" | "Bike" | "Run";
  distance: number;
  distanceUnits: "m" | "km" | "mi" | "yd";
  hour: number;
  minute: number;
  second: number;
}
