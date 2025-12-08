import { EatingStyle } from "../enums/eating-style.enum";
import { ExercisesFrequency } from "../enums/exercises-frequency.enum";
import { GoalDate } from "../enums/goal-date.enum";
import { GoalWeight } from "../enums/goal-waight.enum";
import { NumberOfMeals } from "../enums/number-of-meals.enum";

export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public age?: number,
    public height?: number,
    public weight?: number,
    public eatingStyle?: EatingStyle,
    public goalWeight?: GoalWeight,
    public goalDate?: GoalDate,
    public exerciseFrequency?: ExercisesFrequency,
    public numberOfMeals?: NumberOfMeals,
    public preferences?: string,
    public restrictions?: string,
  ){}
}