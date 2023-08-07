import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { dataSource } from '../configs/dataSourceConfig';
import { Student } from '../models/Student';

export const getAllStudents = async (): Promise<Student[]> => {
  try {
    const students = await dataSource.manager.find(Student);
    return students;
  } catch (error) {
    throw error;
  }
};

export const saveStudent = async (student: Student): Promise<InsertResult> => {
  try {
    const savedStudent = await dataSource.manager.insert(Student, student);
    return savedStudent;
  } catch (error) {
    throw error;
  }
};

export const updateStudent = async (
  student: Student
): Promise<UpdateResult> => {
  try {
    const updatedStudent = await dataSource.manager.update(
      Student,
      student.id,
      student
    );
    return updatedStudent;
  } catch (error) {
    throw error;
  }
};

export const deleteStudent = async (id: string): Promise<DeleteResult> => {
  try {
    const deletedStudent = await dataSource.manager.delete(Student, id);
    return deletedStudent;
  } catch (error) {
    throw error;
  }
};
