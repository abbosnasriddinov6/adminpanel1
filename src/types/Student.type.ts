export type StudentType = {
  id: number;
  firstName: string;
  name: string;
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

export type StudentInfo = {
  name: string;
  username: string;
  email: string;
  group: string;
};


