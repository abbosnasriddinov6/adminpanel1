export type TeachersType = {
    id: number;
    firstName: string;
    name: string;
    lastName: string;
    username: string;
    email: string;
    group: string;
};
export type TeachersStoreType = {
    loading: boolean;
    teachers: TeachersType[];
    error: any;
    getTeachers: () => void;
};

export type TeachersInfo = {
    name: string;
    username: string;
    email: string;
    group: string;
};

