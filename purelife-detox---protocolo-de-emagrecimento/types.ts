export interface Meal {
  type: string;
  name: string;
  ingredients: string[];
  calories: number;
}

export interface DayPlan {
  day: string;
  meals: Meal[];
}

export interface DetoxPlan {
  title: string;
  description: string;
  days: DayPlan[];
}

export interface Recipe {
  name: string;
  description: string;
  timeToPrep: string;
  calories: number;
  ingredients: string[];
  instructions: string[];
}

export enum AppView {
  HOME = 'HOME',
  PLAN_GENERATOR = 'PLAN_GENERATOR',
  RECIPES = 'RECIPES',
  BMI = 'BMI'
}