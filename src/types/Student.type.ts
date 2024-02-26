export type StudentType = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  group: string;
};
export type StudentStoreType = {
  loading: boolean;
  students: StudentType[];
  error: any;
  getStudents: () => void;
};
