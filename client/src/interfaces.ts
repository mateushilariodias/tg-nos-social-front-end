export interface IPost {
    id: number;
    author: string;
    profilePicture: string;
    description?: string;
    image?: string;
    video?: string;
    file?: string;
    createdPost: string;
    ngoId: number;
  }  
  
export interface IComment {
    id: number;
    commentContent: string;
    userName: string;
    userImg: string;
    commentUserId: number;
    postId: number;
    createdComment: string;
  }
  
export interface ILike {
    id: number;
    userName: string;
    likeUserId: string;
    postId: number;
  }  

export interface IUser {
    id: number;
    fullName: string,
    userName: string,
    emailUser: string,
    phoneNumberUser: string,
    passwordUser: string,
    userImg: string,
}

export interface INgo {
    id: number;
    cnpj: string,
    stateRegistration: string,
    corporateReason: string,
    emailNgo: string,
    phoneNumberNgo: string,
    physicalAddress: string,
    objectiveOfTheNgo: string,
    pageName: string,
    imageNgo: string,
    bgImageNgo: string,
    registeringUser: string
}