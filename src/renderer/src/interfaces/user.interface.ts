export enum UserRoleEnum {
  Admin = 'admin',
  User = 'user'
}

export enum UserSubRoleEnum {
  DoctorAdmin = 'admin-doctor',
  AdminStaff = 'admin-staff',
  Doctor = 'doctor',
  Staff = 'staff',
  Admin = 'admin'
}

export enum UserRealmEnum {
  Admin = 'admin',
  Clinic = 'clinic',
  Patient = 'patient'
}

export interface UserInterface {
  id: string
  firstName: string
  lastName: string
  avatar?: string
  userName: string
  email: string
  address?: string
  insuranceID: string
  clinicID: string
  emailVerified: boolean
  phoneNumber: string
  dob: string
  phoneNumberVerified: boolean
  twoStepEnabled: boolean
  deleted: boolean
  role: UserRoleEnum
  subRole: UserSubRoleEnum
  realm: UserRealmEnum
  preToken: string
  jwt: string
}

export interface UserFilterInterface {
  text?: {
    search: string
    language?: string
    caseSensitive?: boolean
    diacriticSensitive?: boolean
  }
  firstName?: string
  lastName?: string
  email?: string[]
  phoneNumber?: string[]
  clinicID?: string
  emailVerified?: boolean
  phoneNumberVerified?: boolean
  realm?: UserRealmEnum[]
  role?: UserRoleEnum[]
  subRole?: UserSubRoleEnum[]
}

export interface UserFilterResponseInterface {
  user: UserInterface[]
}
