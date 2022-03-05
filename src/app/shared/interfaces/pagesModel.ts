export enum ListTypePages {
  postagens = 'postagens',
  albuns = 'albuns',
  todos = 'todos',
}

export type PageModel = {
  name: string,
  slug: string
}

export type ListPagesModel = {
  [key: string]: PageModel
}
