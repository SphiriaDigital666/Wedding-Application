import { Preference } from '@prisma/client';

export function calculatePreferencesCompatibility(
  preference1: Preference,
  preference2: Preference
) {

  let preferencesScore = 0;

  // Age range
  if (
    preference1?.agestart === preference2?.agestart &&
    preference1?.ageTo === preference2?.ageTo
  ) {
    preferencesScore += 1;
  }

  // Languages
  const commonLanguages = preference1?.languages?.filter((language) =>
    preference2?.languages?.includes(language)
  ).length;
  preferencesScore += commonLanguages || 0;

  // Height range
  if (
    preference1?.heightFrom === preference2?.heightFrom &&
    preference1?.heightTo === preference2?.heightTo
  ) {
    preferencesScore += 1;
  }

  // Body type
  if (preference1?.bodyType === preference2?.bodyType) {
    preferencesScore += 1;
  }

  // Physical status
  if (preference1?.physicalStatus === preference2?.physicalStatus) {
    preferencesScore += 1;
  }

  // Marital status
  if (preference1?.maritalStatus === preference2?.maritalStatus) {
    preferencesScore += 1;
  }

  // Eating habits
  if (preference1?.eatingHabits === preference2?.eatingHabits) {
    preferencesScore += 1;
  }

  // Drinking habits
  if (preference1?.drinkingHabits === preference2?.drinkingHabits) {
    preferencesScore += 1;
  }

  // Smoking habits
  if (preference1?.smokingHabits === preference2?.smokingHabits) {
    preferencesScore += 1;
  }

  // Religion
  if (preference1?.religion === preference2?.religion) {
    preferencesScore += 1;
  }

  // Ethnicity
  if (preference1?.ethnicity === preference2?.ethnicity) {
    preferencesScore += 1;
  }

  // Caste
  if (preference1?.caste === preference2?.caste) {
    preferencesScore += 1;
  }

  // Education
  if (preference1?.education === preference2?.education) {
    preferencesScore += 1;
  }

  // Employed in
  if (preference1?.employedIn === preference2?.employedIn) {
    preferencesScore += 1;
  }

  // Occupation
  if (preference1?.occupation === preference2?.occupation) {
    preferencesScore += 1;
  }

  // Job title
  if (preference1?.jobTitle === preference2?.jobTitle) {
    preferencesScore += 1;
  }

  // Annual income
  if (preference1?.annualIncome === preference2?.annualIncome) {
    preferencesScore += 1;
  }

  // Country
  if (preference1?.country === preference2?.country) {
    preferencesScore += 1;
  }

  // City
  if (preference1?.city === preference2?.city) {
    preferencesScore += 1;
  }

  // State
  if (preference1?.state === preference2?.state) {
    preferencesScore += 1;
  }

  // Add more logic for other preference fields as needed

  return preferencesScore;
}
