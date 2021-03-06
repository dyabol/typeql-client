export type Maybe<T> = T | null;

export interface CreatePostInput {
  title: string;

  slug: string;

  content: string;
}

export interface EditPostInput {
  id: string;

  title: string;

  slug: string;

  content: string;
}

export interface ChangePasswordInput {
  password: string;

  token: string;
}

export interface RegisterInput {
  password: string;

  firstName: string;

  lastName: string;

  email: string;
}

export interface UserMetaInput {
  key: string;

  value: string;

  userId: string;
}
/** Type of post */
export enum PostType {
  Post = "POST",
  Page = "PAGE"
}

/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
export type DateTime = any;

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export interface CreatePostVariables {
  data: CreatePostInput;
}

export interface CreatePostMutation {
  __typename?: "Mutation";

  createPost: CreatePostCreatePost;
}

export interface CreatePostCreatePost {
  __typename?: "Post";

  id: string;

  title: string;

  slug: string;

  content: string;
}

export interface CreatePageVariables {
  data: CreatePostInput;
}

export interface CreatePageMutation {
  __typename?: "Mutation";

  createPage: CreatePageCreatePage;
}

export interface CreatePageCreatePage {
  __typename?: "Post";

  id: string;

  title: string;

  slug: string;

  content: string;
}

export interface DeletePostVariables {
  id: string;
}

export interface DeletePostMutation {
  __typename?: "Mutation";

  deletePost: boolean;
}

export interface DeletePageVariables {
  id: string;
}

export interface DeletePageMutation {
  __typename?: "Mutation";

  deletePage: boolean;
}

export interface EditPostVariables {
  data: EditPostInput;
}

export interface EditPostMutation {
  __typename?: "Mutation";

  editPost: EditPostEditPost;
}

export interface EditPostEditPost {
  __typename?: "Post";

  id: string;

  title: string;

  slug: string;

  content: string;
}

export interface EditPageVariables {
  data: EditPostInput;
}

export interface EditPageMutation {
  __typename?: "Mutation";

  editPage: EditPageEditPage;
}

export interface EditPageEditPage {
  __typename?: "Post";

  id: string;

  title: string;

  slug: string;

  content: string;
}

export interface PostByIdVariables {
  id: string;
}

export interface PostByIdQuery {
  __typename?: "Query";

  post: Maybe<PostByIdPost>;
}

export interface PostByIdPost {
  __typename?: "Post";

  id: string;

  slug: string;

  title: string;

  content: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  user: PostByIdUser;
}

export interface PostByIdUser {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  fullName: string;

  email: string;
}

export interface PageByIdVariables {
  id: string;
}

export interface PageByIdQuery {
  __typename?: "Query";

  page: Maybe<PageByIdPage>;
}

export interface PageByIdPage {
  __typename?: "Post";

  id: string;

  slug: string;

  title: string;

  content: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  user: PageByIdUser;
}

export interface PageByIdUser {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  fullName: string;

  email: string;
}

export interface PostBySlugVariables {
  slug: string;
}

export interface PostBySlugQuery {
  __typename?: "Query";

  post: Maybe<PostBySlugPost>;
}

export interface PostBySlugPost {
  __typename?: "Post";

  id: string;

  slug: string;

  title: string;

  content: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  user: PostBySlugUser;
}

export interface PostBySlugUser {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  fullName: string;

  email: string;
}

export interface PageBySlugVariables {
  slug: string;
}

export interface PageBySlugQuery {
  __typename?: "Query";

  page: Maybe<PageBySlugPage>;
}

export interface PageBySlugPage {
  __typename?: "Post";

  id: string;

  slug: string;

  title: string;

  content: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  user: PageBySlugUser;
}

export interface PageBySlugUser {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  fullName: string;

  email: string;
}

export interface PostsVariables {
  take?: Maybe<number>;
  skip?: Maybe<number>;
}

export interface PostsQuery {
  __typename?: "Query";

  posts: PostsPosts[];

  postsCount: number;
}

export interface PostsPosts {
  __typename?: "Post";

  id: string;

  slug: string;

  title: string;

  content: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  user: PostsUser;
}

export interface PostsUser {
  __typename?: "User";

  id: string;

  fullName: string;
}

export interface PagesVariables {
  take?: Maybe<number>;
  skip?: Maybe<number>;
}

export interface PagesQuery {
  __typename?: "Query";

  pages: PagesPages[];

  pagesCount: number;
}

export interface PagesPages {
  __typename?: "Post";

  id: string;

  slug: string;

  title: string;

  content: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  user: PagesUser;
}

export interface PagesUser {
  __typename?: "User";

  id: string;

  fullName: string;
}

export interface ChangePasswordVariables {
  data: ChangePasswordInput;
}

export interface ChangePasswordMutation {
  __typename?: "Mutation";

  changePassword: Maybe<ChangePasswordChangePassword>;
}

export interface ChangePasswordChangePassword {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;
}

export interface ConfirmUserVariables {
  token: string;
}

export interface ConfirmUserMutation {
  __typename?: "Mutation";

  confirmUser: boolean;
}

export interface ForgotPasswordVariables {
  email: string;
}

export interface ForgotPasswordMutation {
  __typename?: "Mutation";

  forgotPassword: boolean;
}

export interface LoginVariables {
  email: string;
  password: string;
}

export interface LoginMutation {
  __typename?: "Mutation";

  login: Maybe<LoginLogin>;
}

export interface LoginLogin {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  fullName: string;

  avatar: string;
}

export interface LogoutVariables {}

export interface LogoutMutation {
  __typename?: "Mutation";

  logout: boolean;
}

export interface RegisterVariables {
  data: RegisterInput;
}

export interface RegisterMutation {
  __typename?: "Mutation";

  register: RegisterRegister;
}

export interface RegisterRegister {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;
}

export interface UploadAvatarVariables {
  avatar: Upload;
}

export interface UploadAvatarMutation {
  __typename?: "Mutation";

  addProfilePicture: boolean;
}

export interface HelloVariables {}

export interface HelloQuery {
  __typename?: "Query";

  hello: string;
}

export interface MeVariables {}

export interface MeQuery {
  __typename?: "Query";

  me: Maybe<MeMe>;
}

export interface MeMe {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  fullName: string;

  avatar: string;
}

export interface AddUserRoleVariables {
  userId: string;
  role: string;
}

export interface AddUserRoleMutation {
  __typename?: "Mutation";

  createUserMeta: AddUserRoleCreateUserMeta;
}

export interface AddUserRoleCreateUserMeta {
  __typename?: "UserMeta";

  id: string;
}

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";

// ====================================================
// Components
// ====================================================

export const CreatePostDocument = gql`
  mutation CreatePost($data: CreatePostInput!) {
    createPost(data: $data) {
      id
      title
      slug
      content
    }
  }
`;
export class CreatePostComponent extends React.Component<
  Partial<ReactApollo.MutationProps<CreatePostMutation, CreatePostVariables>>
> {
  public render() {
    return (
      <ReactApollo.Mutation<CreatePostMutation, CreatePostVariables>
        mutation={CreatePostDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type CreatePostProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreatePostMutation, CreatePostVariables>
> &
  TChildProps;
export type CreatePostMutationFn = ReactApollo.MutationFn<
  CreatePostMutation,
  CreatePostVariables
>;
export function CreatePostHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreatePostMutation,
        CreatePostVariables,
        CreatePostProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    CreatePostMutation,
    CreatePostVariables,
    CreatePostProps<TChildProps>
  >(CreatePostDocument, operationOptions);
}
export const CreatePageDocument = gql`
  mutation CreatePage($data: CreatePostInput!) {
    createPage(data: $data) {
      id
      title
      slug
      content
    }
  }
`;
export class CreatePageComponent extends React.Component<
  Partial<ReactApollo.MutationProps<CreatePageMutation, CreatePageVariables>>
> {
  public render() {
    return (
      <ReactApollo.Mutation<CreatePageMutation, CreatePageVariables>
        mutation={CreatePageDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type CreatePageProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreatePageMutation, CreatePageVariables>
> &
  TChildProps;
export type CreatePageMutationFn = ReactApollo.MutationFn<
  CreatePageMutation,
  CreatePageVariables
>;
export function CreatePageHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreatePageMutation,
        CreatePageVariables,
        CreatePageProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    CreatePageMutation,
    CreatePageVariables,
    CreatePageProps<TChildProps>
  >(CreatePageDocument, operationOptions);
}
export const DeletePostDocument = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`;
export class DeletePostComponent extends React.Component<
  Partial<ReactApollo.MutationProps<DeletePostMutation, DeletePostVariables>>
> {
  public render() {
    return (
      <ReactApollo.Mutation<DeletePostMutation, DeletePostVariables>
        mutation={DeletePostDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type DeletePostProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<DeletePostMutation, DeletePostVariables>
> &
  TChildProps;
export type DeletePostMutationFn = ReactApollo.MutationFn<
  DeletePostMutation,
  DeletePostVariables
>;
export function DeletePostHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DeletePostMutation,
        DeletePostVariables,
        DeletePostProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    DeletePostMutation,
    DeletePostVariables,
    DeletePostProps<TChildProps>
  >(DeletePostDocument, operationOptions);
}
export const DeletePageDocument = gql`
  mutation DeletePage($id: ID!) {
    deletePage(id: $id)
  }
`;
export class DeletePageComponent extends React.Component<
  Partial<ReactApollo.MutationProps<DeletePageMutation, DeletePageVariables>>
> {
  public render() {
    return (
      <ReactApollo.Mutation<DeletePageMutation, DeletePageVariables>
        mutation={DeletePageDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type DeletePageProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<DeletePageMutation, DeletePageVariables>
> &
  TChildProps;
export type DeletePageMutationFn = ReactApollo.MutationFn<
  DeletePageMutation,
  DeletePageVariables
>;
export function DeletePageHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DeletePageMutation,
        DeletePageVariables,
        DeletePageProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    DeletePageMutation,
    DeletePageVariables,
    DeletePageProps<TChildProps>
  >(DeletePageDocument, operationOptions);
}
export const EditPostDocument = gql`
  mutation EditPost($data: EditPostInput!) {
    editPost(data: $data) {
      id
      title
      slug
      content
    }
  }
`;
export class EditPostComponent extends React.Component<
  Partial<ReactApollo.MutationProps<EditPostMutation, EditPostVariables>>
> {
  public render() {
    return (
      <ReactApollo.Mutation<EditPostMutation, EditPostVariables>
        mutation={EditPostDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type EditPostProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<EditPostMutation, EditPostVariables>
> &
  TChildProps;
export type EditPostMutationFn = ReactApollo.MutationFn<
  EditPostMutation,
  EditPostVariables
>;
export function EditPostHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EditPostMutation,
        EditPostVariables,
        EditPostProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    EditPostMutation,
    EditPostVariables,
    EditPostProps<TChildProps>
  >(EditPostDocument, operationOptions);
}
export const EditPageDocument = gql`
  mutation EditPage($data: EditPostInput!) {
    editPage(data: $data) {
      id
      title
      slug
      content
    }
  }
`;
export class EditPageComponent extends React.Component<
  Partial<ReactApollo.MutationProps<EditPageMutation, EditPageVariables>>
> {
  public render() {
    return (
      <ReactApollo.Mutation<EditPageMutation, EditPageVariables>
        mutation={EditPageDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type EditPageProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<EditPageMutation, EditPageVariables>
> &
  TChildProps;
export type EditPageMutationFn = ReactApollo.MutationFn<
  EditPageMutation,
  EditPageVariables
>;
export function EditPageHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EditPageMutation,
        EditPageVariables,
        EditPageProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    EditPageMutation,
    EditPageVariables,
    EditPageProps<TChildProps>
  >(EditPageDocument, operationOptions);
}
export const PostByIdDocument = gql`
  query PostById($id: ID!) {
    post(id: $id) {
      id
      slug
      title
      content
      createdAt
      updatedAt
      user {
        id
        firstName
        lastName
        fullName
        email
      }
    }
  }
`;
export class PostByIdComponent extends React.Component<
  Partial<ReactApollo.QueryProps<PostByIdQuery, PostByIdVariables>>
> {
  public render() {
    return (
      <ReactApollo.Query<PostByIdQuery, PostByIdVariables>
        query={PostByIdDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type PostByIdProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<PostByIdQuery, PostByIdVariables>
> &
  TChildProps;
export function PostByIdHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        PostByIdQuery,
        PostByIdVariables,
        PostByIdProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    PostByIdQuery,
    PostByIdVariables,
    PostByIdProps<TChildProps>
  >(PostByIdDocument, operationOptions);
}
export const PageByIdDocument = gql`
  query PageById($id: ID!) {
    page(id: $id) {
      id
      slug
      title
      content
      createdAt
      updatedAt
      user {
        id
        firstName
        lastName
        fullName
        email
      }
    }
  }
`;
export class PageByIdComponent extends React.Component<
  Partial<ReactApollo.QueryProps<PageByIdQuery, PageByIdVariables>>
> {
  public render() {
    return (
      <ReactApollo.Query<PageByIdQuery, PageByIdVariables>
        query={PageByIdDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type PageByIdProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<PageByIdQuery, PageByIdVariables>
> &
  TChildProps;
export function PageByIdHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        PageByIdQuery,
        PageByIdVariables,
        PageByIdProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    PageByIdQuery,
    PageByIdVariables,
    PageByIdProps<TChildProps>
  >(PageByIdDocument, operationOptions);
}
export const PostBySlugDocument = gql`
  query PostBySlug($slug: String!) {
    post(slug: $slug) {
      id
      slug
      title
      content
      createdAt
      updatedAt
      user {
        id
        firstName
        lastName
        fullName
        email
      }
    }
  }
`;
export class PostBySlugComponent extends React.Component<
  Partial<ReactApollo.QueryProps<PostBySlugQuery, PostBySlugVariables>>
> {
  public render() {
    return (
      <ReactApollo.Query<PostBySlugQuery, PostBySlugVariables>
        query={PostBySlugDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type PostBySlugProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<PostBySlugQuery, PostBySlugVariables>
> &
  TChildProps;
export function PostBySlugHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        PostBySlugQuery,
        PostBySlugVariables,
        PostBySlugProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    PostBySlugQuery,
    PostBySlugVariables,
    PostBySlugProps<TChildProps>
  >(PostBySlugDocument, operationOptions);
}
export const PageBySlugDocument = gql`
  query PageBySlug($slug: String!) {
    page(slug: $slug) {
      id
      slug
      title
      content
      createdAt
      updatedAt
      user {
        id
        firstName
        lastName
        fullName
        email
      }
    }
  }
`;
export class PageBySlugComponent extends React.Component<
  Partial<ReactApollo.QueryProps<PageBySlugQuery, PageBySlugVariables>>
> {
  public render() {
    return (
      <ReactApollo.Query<PageBySlugQuery, PageBySlugVariables>
        query={PageBySlugDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type PageBySlugProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<PageBySlugQuery, PageBySlugVariables>
> &
  TChildProps;
export function PageBySlugHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        PageBySlugQuery,
        PageBySlugVariables,
        PageBySlugProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    PageBySlugQuery,
    PageBySlugVariables,
    PageBySlugProps<TChildProps>
  >(PageBySlugDocument, operationOptions);
}
export const PostsDocument = gql`
  query Posts($take: Int, $skip: Int) {
    posts(take: $take, skip: $skip) {
      id
      slug
      title
      content
      createdAt
      updatedAt
      user {
        id
        fullName
      }
    }
    postsCount
  }
`;
export class PostsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<PostsQuery, PostsVariables>>
> {
  public render() {
    return (
      <ReactApollo.Query<PostsQuery, PostsVariables>
        query={PostsDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type PostsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<PostsQuery, PostsVariables>
> &
  TChildProps;
export function PostsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        PostsQuery,
        PostsVariables,
        PostsProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    PostsQuery,
    PostsVariables,
    PostsProps<TChildProps>
  >(PostsDocument, operationOptions);
}
export const PagesDocument = gql`
  query Pages($take: Int, $skip: Int) {
    pages(take: $take, skip: $skip) {
      id
      slug
      title
      content
      createdAt
      updatedAt
      user {
        id
        fullName
      }
    }
    pagesCount
  }
`;
export class PagesComponent extends React.Component<
  Partial<ReactApollo.QueryProps<PagesQuery, PagesVariables>>
> {
  public render() {
    return (
      <ReactApollo.Query<PagesQuery, PagesVariables>
        query={PagesDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type PagesProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<PagesQuery, PagesVariables>
> &
  TChildProps;
export function PagesHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        PagesQuery,
        PagesVariables,
        PagesProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    PagesQuery,
    PagesVariables,
    PagesProps<TChildProps>
  >(PagesDocument, operationOptions);
}
export const ChangePasswordDocument = gql`
  mutation ChangePassword($data: ChangePasswordInput!) {
    changePassword(data: $data) {
      id
      firstName
      lastName
      email
    }
  }
`;
export class ChangePasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ChangePasswordMutation, ChangePasswordVariables>
  >
> {
  public render() {
    return (
      <ReactApollo.Mutation<ChangePasswordMutation, ChangePasswordVariables>
        mutation={ChangePasswordDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type ChangePasswordProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ChangePasswordMutation, ChangePasswordVariables>
> &
  TChildProps;
export type ChangePasswordMutationFn = ReactApollo.MutationFn<
  ChangePasswordMutation,
  ChangePasswordVariables
>;
export function ChangePasswordHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ChangePasswordMutation,
        ChangePasswordVariables,
        ChangePasswordProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ChangePasswordMutation,
    ChangePasswordVariables,
    ChangePasswordProps<TChildProps>
  >(ChangePasswordDocument, operationOptions);
}
export const ConfirmUserDocument = gql`
  mutation ConfirmUser($token: String!) {
    confirmUser(token: $token)
  }
`;
export class ConfirmUserComponent extends React.Component<
  Partial<ReactApollo.MutationProps<ConfirmUserMutation, ConfirmUserVariables>>
> {
  public render() {
    return (
      <ReactApollo.Mutation<ConfirmUserMutation, ConfirmUserVariables>
        mutation={ConfirmUserDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type ConfirmUserProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ConfirmUserMutation, ConfirmUserVariables>
> &
  TChildProps;
export type ConfirmUserMutationFn = ReactApollo.MutationFn<
  ConfirmUserMutation,
  ConfirmUserVariables
>;
export function ConfirmUserHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ConfirmUserMutation,
        ConfirmUserVariables,
        ConfirmUserProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ConfirmUserMutation,
    ConfirmUserVariables,
    ConfirmUserProps<TChildProps>
  >(ConfirmUserDocument, operationOptions);
}
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;
export class ForgotPasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ForgotPasswordMutation, ForgotPasswordVariables>
  >
> {
  public render() {
    return (
      <ReactApollo.Mutation<ForgotPasswordMutation, ForgotPasswordVariables>
        mutation={ForgotPasswordDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type ForgotPasswordProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ForgotPasswordMutation, ForgotPasswordVariables>
> &
  TChildProps;
export type ForgotPasswordMutationFn = ReactApollo.MutationFn<
  ForgotPasswordMutation,
  ForgotPasswordVariables
>;
export function ForgotPasswordHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ForgotPasswordMutation,
        ForgotPasswordVariables,
        ForgotPasswordProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ForgotPasswordMutation,
    ForgotPasswordVariables,
    ForgotPasswordProps<TChildProps>
  >(ForgotPasswordDocument, operationOptions);
}
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      firstName
      lastName
      email
      fullName
      avatar
    }
  }
`;
export class LoginComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LoginMutation, LoginVariables>>
> {
  public render() {
    return (
      <ReactApollo.Mutation<LoginMutation, LoginVariables>
        mutation={LoginDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type LoginProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LoginMutation, LoginVariables>
> &
  TChildProps;
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginVariables
>;
export function LoginHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LoginMutation,
        LoginVariables,
        LoginProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    LoginMutation,
    LoginVariables,
    LoginProps<TChildProps>
  >(LoginDocument, operationOptions);
}
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;
export class LogoutComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LogoutMutation, LogoutVariables>>
> {
  public render() {
    return (
      <ReactApollo.Mutation<LogoutMutation, LogoutVariables>
        mutation={LogoutDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type LogoutProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LogoutMutation, LogoutVariables>
> &
  TChildProps;
export type LogoutMutationFn = ReactApollo.MutationFn<
  LogoutMutation,
  LogoutVariables
>;
export function LogoutHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LogoutMutation,
        LogoutVariables,
        LogoutProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    LogoutMutation,
    LogoutVariables,
    LogoutProps<TChildProps>
  >(LogoutDocument, operationOptions);
}
export const RegisterDocument = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      id
      firstName
      lastName
      email
    }
  }
`;
export class RegisterComponent extends React.Component<
  Partial<ReactApollo.MutationProps<RegisterMutation, RegisterVariables>>
> {
  public render() {
    return (
      <ReactApollo.Mutation<RegisterMutation, RegisterVariables>
        mutation={RegisterDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type RegisterProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<RegisterMutation, RegisterVariables>
> &
  TChildProps;
export type RegisterMutationFn = ReactApollo.MutationFn<
  RegisterMutation,
  RegisterVariables
>;
export function RegisterHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        RegisterMutation,
        RegisterVariables,
        RegisterProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    RegisterMutation,
    RegisterVariables,
    RegisterProps<TChildProps>
  >(RegisterDocument, operationOptions);
}
export const UploadAvatarDocument = gql`
  mutation UploadAvatar($avatar: Upload!) {
    addProfilePicture(picture: $avatar)
  }
`;
export class UploadAvatarComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<UploadAvatarMutation, UploadAvatarVariables>
  >
> {
  public render() {
    return (
      <ReactApollo.Mutation<UploadAvatarMutation, UploadAvatarVariables>
        mutation={UploadAvatarDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type UploadAvatarProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<UploadAvatarMutation, UploadAvatarVariables>
> &
  TChildProps;
export type UploadAvatarMutationFn = ReactApollo.MutationFn<
  UploadAvatarMutation,
  UploadAvatarVariables
>;
export function UploadAvatarHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UploadAvatarMutation,
        UploadAvatarVariables,
        UploadAvatarProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    UploadAvatarMutation,
    UploadAvatarVariables,
    UploadAvatarProps<TChildProps>
  >(UploadAvatarDocument, operationOptions);
}
export const HelloDocument = gql`
  query Hello {
    hello
  }
`;
export class HelloComponent extends React.Component<
  Partial<ReactApollo.QueryProps<HelloQuery, HelloVariables>>
> {
  public render() {
    return (
      <ReactApollo.Query<HelloQuery, HelloVariables>
        query={HelloDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type HelloProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<HelloQuery, HelloVariables>
> &
  TChildProps;
export function HelloHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        HelloQuery,
        HelloVariables,
        HelloProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    HelloQuery,
    HelloVariables,
    HelloProps<TChildProps>
  >(HelloDocument, operationOptions);
}
export const MeDocument = gql`
  query Me {
    me {
      id
      firstName
      lastName
      email
      fullName
      avatar
    }
  }
`;
export class MeComponent extends React.Component<
  Partial<ReactApollo.QueryProps<MeQuery, MeVariables>>
> {
  public render() {
    return (
      <ReactApollo.Query<MeQuery, MeVariables>
        query={MeDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type MeProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<MeQuery, MeVariables>
> &
  TChildProps;
export function MeHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        MeQuery,
        MeVariables,
        MeProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    MeQuery,
    MeVariables,
    MeProps<TChildProps>
  >(MeDocument, operationOptions);
}
export const AddUserRoleDocument = gql`
  mutation AddUserRole($userId: ID!, $role: String!) {
    createUserMeta(data: { userId: $userId, value: $role, key: "role" }) {
      id
    }
  }
`;
export class AddUserRoleComponent extends React.Component<
  Partial<ReactApollo.MutationProps<AddUserRoleMutation, AddUserRoleVariables>>
> {
  public render() {
    return (
      <ReactApollo.Mutation<AddUserRoleMutation, AddUserRoleVariables>
        mutation={AddUserRoleDocument}
        {...(this as any).props as any}
      />
    );
  }
}
export type AddUserRoleProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<AddUserRoleMutation, AddUserRoleVariables>
> &
  TChildProps;
export type AddUserRoleMutationFn = ReactApollo.MutationFn<
  AddUserRoleMutation,
  AddUserRoleVariables
>;
export function AddUserRoleHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        AddUserRoleMutation,
        AddUserRoleVariables,
        AddUserRoleProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    AddUserRoleMutation,
    AddUserRoleVariables,
    AddUserRoleProps<TChildProps>
  >(AddUserRoleDocument, operationOptions);
}
