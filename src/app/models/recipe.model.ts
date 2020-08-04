export interface Recipe {
    id?: string;
    title: string;
    imgUrl?: string;
    ingredients: string[];
    directions: string;
    readyIn: number;
    servings: number;
    prepTime: number;
    cookTime: number;
    mealType: MealType;
}

export const enum MealType {
    beakfast = 'breakfast',
    lunch = 'lunch',
    dinner = 'dinner',
    dessert = 'dessert',
    snack = 'snack',
    salad = 'salad',
    pastry = 'pastry',
    vegan = 'vegan'
}

export const MEAL_CATEGORIES = [
    'breakfast',
    'lunch',
    'dinner',
    'dessert',
    'snack',
    'salad',
    'pastry',
    'vegan'
];

export const MEAL_FILTERS = [
    'all',
    'breakfast',
    'lunch',
    'dinner',
    'dessert',
    'snack',
    'salad',
    'pastry',
    'vegan'
];

export const Ingredients = [
    'butter',
    'milk',
    'honey',
    'wheat flour',
    'chocolate',
    'apples',
    'mozzarella',
    'blue cheese',
    'jasmine rice',
    'chicken breasts',
    'minced meet (beef)',
    'potatoes',
    'sunflower oil',
    'soy sauce',
    'mustard',
    'sour cream',
    'sugar',
    'salt',
    'onions',
    'brown rice',
    'pork liver',
    'chicken broth',
    'zucchini'
];


