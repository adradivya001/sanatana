import type { SchoolData } from '../../types/school';
import { genericSchoolData } from './genericSchool';
import { sanatanaSchoolData } from './sanatana';

export const availableSchools: Record<string, SchoolData> = {
  'master-school-template': genericSchoolData,
  'sanatana-school-of-excellence': sanatanaSchoolData
};

export { genericSchoolData, sanatanaSchoolData };
