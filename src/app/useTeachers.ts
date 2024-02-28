import { create } from 'zustand';
import {TeachersStoreType } from '../types/Teachers.type';



export const useTeachers = create<TeachersStoreType>((set) => ({
    loading: false,
    teachers: [],
    error: null,
    getTeachers: async () => {
        try {
            set(() => ({
                loading: true,
            }));
            const res = await fetch('http://localhost:3000/teachers');
            const data = await res.json();
            set(() => ({
                loading: false,
                teachers: data,
                error: null,
            }));
        } catch (err: any) {
            set(() => ({
                loading: false,
                error: err.message,
            }));
        }
    },
}));